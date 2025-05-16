import React, { useState } from 'react';

const MepCalculation = () => {
  // Form states
  const [buildingType, setBuildingType] = useState('residential');
  const [squareMeters, setSquareMeters] = useState('');
  const [floors, setFloors] = useState('');
  const [services, setServices] = useState({
    electrical: true,
    hvac: false,
    plumbing: false,
    fireSafety: false,
    lowCurrent: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [estimate, setEstimate] = useState({
    electrical: 0,
    hvac: 0,
    plumbing: 0,
    fireSafety: 0,
    lowCurrent: 0,
    total: 0
  });

  // Base rates per square meter in Rwandan Francs (approximate values)
  const baseRates = {
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
  };

  // Floor multipliers
  const getFloorMultiplier = (floorCount) => {
    if (floorCount <= 2) return 1;
    if (floorCount <= 5) return 1.2;
    return 1.5;
  };

  // Handle service selection
  const handleServiceChange = (service) => {
    setServices({
      ...services,
      [service]: !services[service]
    });
  };

  // Calculate estimates
  const calculateEstimate = () => {
    if (!squareMeters || !floors) {
      alert('Please enter square meters and number of floors');
      return;
    }

    const area = parseFloat(squareMeters);
    const floorCount = parseInt(floors);
    const floorMultiplier = getFloorMultiplier(floorCount);
    const rates = baseRates[buildingType];
    
    const newEstimate = {
      electrical: services.electrical ? Math.round(area * rates.electrical * floorMultiplier) : 0,
      hvac: services.hvac ? Math.round(area * rates.hvac * floorMultiplier) : 0,
      plumbing: services.plumbing ? Math.round(area * rates.plumbing * floorMultiplier) : 0,
      fireSafety: services.fireSafety ? Math.round(area * rates.fireSafety * floorMultiplier) : 0,
      lowCurrent: services.lowCurrent ? Math.round(area * rates.lowCurrent * floorMultiplier) : 0,
    };
    
    newEstimate.total = Object.values(newEstimate).reduce((sum, value) => sum + value, 0);
    
    setEstimate(newEstimate);
    setShowModal(true);
  };

  // Reset form
  const resetForm = () => {
    setBuildingType('residential');
    setSquareMeters('');
    setFloors('');
    setServices({
      electrical: true,
      hvac: false,
      plumbing: false,
      fireSafety: false,
      lowCurrent: false,
    });
    setShowModal(false);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('rw-RW', { 
      style: 'currency', 
      currency: 'RWF',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Building type cards with icons
  const buildingTypes = [
    {
      id: 'residential',
      name: 'Residential',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'commercial',
      name: 'Commercial',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'industrial',
      name: 'Industrial',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  // Service icons
  const serviceIcons = {
    electrical: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    hvac: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    plumbing: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    fireSafety: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    lowCurrent: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  };

  return (
    <section id='calculotor' className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">MEP Cost Estimator</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="mt-2 text-md text-gray-600">Get a quick estimate for your building's MEP systems</p>
        </div>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 via-blue-600 to-gray-900 px-5 py-4">
            <h3 className="text-sm font-semibold text-white">Building Information</h3>
          </div>
          
          <div className="p-5 space-y-6">
            {/* Building Type */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">Building Type</label>
              <div className="grid grid-cols-3 gap-3">
                {buildingTypes.map((type) => (
                  <div 
                    key={type.id}
                    onClick={() => setBuildingType(type.id)}
                    className={`cursor-pointer rounded-lg border-2 ${
                      buildingType === type.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-200'
                    } transition-colors duration-200 p-4 flex flex-col items-center`}
                  >
                    <div className={`rounded-full p-2 ${
                      buildingType === type.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {type.icon}
                    </div>
                    <span className={`mt-2 font-medium ${
                      buildingType === type.id ? 'text-blue-700' : 'text-gray-700'
                    }`}>
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Building Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="square-meters" className="block text-gray-700 font-medium mb-2">
                  Total Area (m²)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="number"
                    id="square-meters"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(e.target.value)}
                    className="block w-full pr-10 focus:ring-blue-500 focus:border-blue-500 pl-4 py-3 sm:text-sm border-gray-300 rounded-md"
                    placeholder="e.g. 150"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">m²</span>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="floors" className="block text-gray-700 font-medium mb-2">
                  Number of Floors
                </label>
                <input
                  type="number"
                  id="floors"
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                  className="block w-full focus:ring-blue-500 focus:border-blue-500 pl-4 py-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. 2"
                />
              </div>
            </div>

            {/* Services Required */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">Services Required</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(services).map(([key, value]) => {
                  const serviceNames = {
                    electrical: "Electrical Works",
                    hvac: "HVAC Systems",
                    plumbing: "Plumbing Works",
                    fireSafety: "Fire & Safety",
                    lowCurrent: "Low Current Systems"
                  };
                  
                  return (
                    <div 
                      key={key}
                      onClick={() => handleServiceChange(key)}
                      className={`cursor-pointer flex items-center p-3 rounded-lg border ${
                        value ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className={`p-1 rounded ${value ? 'text-blue-600' : 'text-gray-400'}`}>
                        {serviceIcons[key]}
                      </div>
                      <span className={`ml-2 text-sm ${value ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>
                        {serviceNames[key]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-2">
              <button
                onClick={calculateEstimate}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex justify-center items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate Estimate
              </button>
              <button
                onClick={resetForm}
                className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition duration-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modal for showing results - Reduced size */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full max-w-md transform transition-all animate-fade-in-up max-h-full">
              <div className="bg-gradient-to-r from-yellow-400 via-blue-600 to-gray-900 px-3 py-2 flex justify-between items-center">
                <h3 className="text-base font-bold text-white">Your MEP Estimate</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-white hover:text-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto max-h-96 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-xs text-blue-700 font-medium">Building Type</span>
                      <span className="block text-sm text-blue-900 font-semibold capitalize">{buildingType}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-blue-700 font-medium">Total Area</span>
                      <span className="block text-sm text-blue-900 font-semibold">{squareMeters} m²</span>
                    </div>
                    <div>
                      <span className="block text-xs text-blue-700 font-medium">Floors</span>
                      <span className="block text-sm text-blue-900 font-semibold">{floors}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {Object.entries(estimate).map(([key, value]) => {
                    if (key === 'total' || value === 0) return null;
                    
                    const serviceNames = {
                      electrical: "Electrical Works",
                      hvac: "HVAC Systems",
                      plumbing: "Plumbing Works",
                      fireSafety: "Fire & Safety",
                      lowCurrent: "Low Current Systems"
                    };
                    
                    return (
                      <div key={key} className="flex justify-between items-center pb-1 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="text-blue-500 mr-1">
                            {serviceIcons[key]}
                          </div>
                          <span className="text-gray-700 text-xs">{serviceNames[key]}</span>
                        </div>
                        <span className="text-gray-900 font-semibold text-xs">{formatCurrency(value)}</span>
                      </div>
                    );
                  })}
                  
                  <div className="flex justify-between items-center pt-2 mt-2 border-t-2 border-gray-300">
                    <span className="text-gray-900 font-bold">Total Estimate:</span>
                    <span className="text-lg font-bold text-blue-600">{formatCurrency(estimate.total)}</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded-r mb-4">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="ml-2 text-xs text-yellow-700">
                      This is a preliminary estimate based on standard rates. Contact our team for a detailed customized quote.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="/contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-center text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-xs"
                    onClick={() => setShowModal(false)}
                  >
                    Request Detailed Quote
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200 text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            For more accurate estimates, please contact our expert team at: <br />
            <a href="tel:+250786176444" className="text-blue-600 font-medium hover:underline">+250 786 176 444</a> or 
            <a href="mailto:info@electricalsolutionco.rw" className="text-blue-600 font-medium hover:underline"> info@electricalsolutionco.rw</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MepCalculation;