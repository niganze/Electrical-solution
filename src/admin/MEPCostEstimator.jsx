import React, { useState, useEffect } from 'react';
import { Save, Upload, Download, RefreshCw, AlertCircle, CheckCircle, Settings, DollarSign, Building, Layers } from 'lucide-react';

const MEPCostEstimator = () => {
  // Initial configuration state
  const [config, setConfig] = useState({
    baseRates: {
      residential: {
        electrical: 12000,
        hvac: 15000,
        plumbing: 8000,
        fireSafety: 5000,
        lowCurrent: 6000
      },
      commercial: {
        electrical: 18000,
        hvac: 22000, 
        plumbing: 12000,
        fireSafety: 8000,
        lowCurrent: 10000
      },
      industrial: {
        electrical: 25000,
        hvac: 30000,
        plumbing: 15000,
        fireSafety: 12000,
        lowCurrent: 15000
      }
    },
    floorMultipliers: {
      low: { range: '1-2 floors', multiplier: 1.0 },
      medium: { range: '3-5 floors', multiplier: 1.2 },
      high: { range: '6+ floors', multiplier: 1.5 }
    },
    serviceLabels: {
      electrical: 'Electrical Works',
      hvac: 'HVAC Systems',
      plumbing: 'Plumbing Works',
      fireSafety: 'Fire & Safety',
      lowCurrent: 'Low Current Systems'
    },
    currency: {
      code: 'RWF',
      symbol: 'RWF',
      locale: 'rw-RW'
    },
    contactInfo: {
      phone: '+250 786 176 444',
      email: 'info@electricalsolutionco.rw'
    }
  });

  const [activeTab, setActiveTab] = useState('rates');
  const [saveStatus, setSaveStatus] = useState('');
  const [isModified, setIsModified] = useState(false);

  // Track changes
  useEffect(() => {
    const originalConfig = JSON.stringify(config);
    const currentConfig = JSON.stringify(config);
    setIsModified(originalConfig !== currentConfig);
  }, [config]);

  // Handle base rate changes
  const updateBaseRate = (buildingType, service, value) => {
    setConfig(prev => ({
      ...prev,
      baseRates: {
        ...prev.baseRates,
        [buildingType]: {
          ...prev.baseRates[buildingType],
          [service]: parseFloat(value) || 0
        }
      }
    }));
    setIsModified(true);
  };

  // Handle floor multiplier changes
  const updateFloorMultiplier = (level, field, value) => {
    setConfig(prev => ({
      ...prev,
      floorMultipliers: {
        ...prev.floorMultipliers,
        [level]: {
          ...prev.floorMultipliers[level],
          [field]: field === 'multiplier' ? parseFloat(value) || 0 : value
        }
      }
    }));
    setIsModified(true);
  };

  // Handle service label changes
  const updateServiceLabel = (service, value) => {
    setConfig(prev => ({
      ...prev,
      serviceLabels: {
        ...prev.serviceLabels,
        [service]: value
      }
    }));
    setIsModified(true);
  };

  // Handle contact info changes
  const updateContactInfo = (field, value) => {
    setConfig(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value
      }
    }));
    setIsModified(true);
  };

  // Save configuration
  const handleSave = () => {
    setSaveStatus('saving');
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('mepConfig', JSON.stringify(config));
      setSaveStatus('success');
      setIsModified(false);
      setTimeout(() => setSaveStatus(''), 3000);
    }, 1000);
  };
  // Reset to defaults
  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all settings to default values?')) {
      // Reset to original values
      setConfig({
        baseRates: {
          residential: {
            electrical: 12000,
            hvac: 15000,
            plumbing: 8000,
            fireSafety: 5000,
            lowCurrent: 6000
          },
          commercial: {
            electrical: 18000,
            hvac: 22000, 
            plumbing: 12000,
            fireSafety: 8000,
            lowCurrent: 10000
          },
          industrial: {
            electrical: 25000,
            hvac: 30000,
            plumbing: 15000,
            fireSafety: 12000,
            lowCurrent: 15000
          }
        },
        floorMultipliers: {
          low: { range: '1-2 floors', multiplier: 1.0 },
          medium: { range: '3-5 floors', multiplier: 1.2 },
          high: { range: '6+ floors', multiplier: 1.5 }
        },
        serviceLabels: {
          electrical: 'Electrical Works',
          hvac: 'HVAC Systems',
          plumbing: 'Plumbing Works',
          fireSafety: 'Fire & Safety',
          lowCurrent: 'Low Current Systems'
        },
        currency: {
          code: 'RWF',
          symbol: 'RWF',
          locale: 'rw-RW'
        },
        contactInfo: {
          phone: '+250 786 176 444',
          email: 'info@electricalsolutionco.rw'
        }
      });
      setIsModified(true);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat(config.currency.locale, { 
      style: 'currency', 
      currency: config.currency.code,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const tabs = [
    { id: 'rates', name: 'Base Rates', icon: DollarSign },
    { id: 'multipliers', name: 'Floor Multipliers', icon: Layers },
    { id: 'services', name: 'Service Labels', icon: Settings },
    { id: 'contact', name: 'Contact Info', icon: Building }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">MEP Cost Calculator Admin</h1>
                <p className="text-gray-600 mt-1">Manage pricing, multipliers, and configuration settings</p>
              </div>
              <div className="flex items-center space-x-3">
                {isModified && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Unsaved Changes
                  </span>
                )}
                {saveStatus === 'success' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Saved Successfully
                  </span>
                )}
                {saveStatus === 'imported' && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Configuration Imported
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                disabled={!isModified || saveStatus === 'saving'}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saveStatus === 'saving' ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save Changes
              </button>
            </div>
            
            <button
              onClick={resetToDefaults}
              className="inline-flex items-center px-3 py-2 border border-red-300 text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            {/* Base Rates Tab */}
            {activeTab === 'rates' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Base Rates per Square Meter</h2>
                <p className="text-gray-600 mb-6">Set the base cost per square meter for each service type across different building types.</p>
                
                {Object.entries(config.baseRates).map(([buildingType, rates]) => (
                  <div key={buildingType} className="mb-8">
                    <h3 className="text-md font-medium text-gray-800 mb-3 capitalize">{buildingType} Buildings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {Object.entries(rates).map(([service, rate]) => (
                        <div key={service} className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700">
                            {config.serviceLabels[service]}
                          </label>
                          <div className="relative">
                            <input
                              type="number"
                              value={rate}
                              onChange={(e) => updateBaseRate(buildingType, service, e.target.value)}
                              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              placeholder="0"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 text-sm">{config.currency.code}</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">{formatCurrency(rate)} per m²</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Floor Multipliers Tab */}
            {activeTab === 'multipliers' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Floor Multipliers</h2>
                <p className="text-gray-600 mb-6">Set multiplier factors based on the number of floors. Higher buildings typically have more complex requirements.</p>
                
                <div className="space-y-4">
                  {Object.entries(config.floorMultipliers).map(([level, data]) => (
                    <div key={level} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Floor Range</label>
                        <input
                          type="text"
                          value={data.range}
                          onChange={(e) => updateFloorMultiplier(level, 'range', e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 1-2 floors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Multiplier</label>
                        <input
                          type="number"
                          step="0.1"
                          value={data.multiplier}
                          onChange={(e) => updateFloorMultiplier(level, 'multiplier', e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder="1.0"
                        />
                        <p className="text-xs text-gray-500 mt-1">Base cost × {data.multiplier}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Service Labels Tab */}
            {activeTab === 'services' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Service Labels</h2>
                <p className="text-gray-600 mb-6">Customize the display names for each service type.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(config.serviceLabels).map(([service, label]) => (
                    <div key={service} className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 capitalize">
                        {service} Service
                      </label>
                      <input
                        type="text"
                        value={label}
                        onChange={(e) => updateServiceLabel(service, e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Service display name"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info Tab */}
            {activeTab === 'contact' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">Update contact details displayed in the calculator.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={config.contactInfo.phone}
                        onChange={(e) => updateContactInfo('phone', e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+250 XXX XXX XXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        value={config.contactInfo.email}
                        onChange={(e) => updateContactInfo('email', e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Preview</h4>
                    <p className="text-sm text-gray-600">
                      For more accurate estimates, please contact our expert team at:<br />
                      <a href={`tel:${config.contactInfo.phone}`} className="text-blue-600 font-medium hover:underline">
                        {config.contactInfo.phone}
                      </a> or <br />
                      <a href={`mailto:${config.contactInfo.email}`} className="text-blue-600 font-medium hover:underline">
                        {config.contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Configuration Summary */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Quick Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="block text-blue-700 font-medium">Services</span>
              <span className="text-blue-600">{Object.keys(config.serviceLabels).length} types</span>
            </div>
            <div>
              <span className="block text-blue-700 font-medium">Building Types</span>
              <span className="text-blue-600">{Object.keys(config.baseRates).length} types</span>
            </div>
            <div>
              <span className="block text-blue-700 font-medium">Floor Levels</span>
              <span className="text-blue-600">{Object.keys(config.floorMultipliers).length} ranges</span>
            </div>
            <div>
              <span className="block text-blue-700 font-medium">Currency</span>
              <span className="text-blue-600">{config.currency.code}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEPCostEstimator;