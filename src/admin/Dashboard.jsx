import React, { useState, useEffect } from 'react';
import {  
  TrendingUp, 
  Users, 
  FolderOpen, 
  Zap, 
  Calculator,
  Settings,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Eye
} from 'lucide-react';
import { ResponsiveContainer,  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
    // Animate stats counters
    const targets = [24, 70, 8, 98];
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats(targets.map(target => 
        Math.floor(target * Math.min(progress, 1))
      ));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(targets);
      }
    }, increment);

    return () => clearInterval(timer);
  }, []);

  // Sample data for charts and metrics
  const stats = [
    { title: 'Active Projects', value: animatedStats[0], suffix: '', change: '+12%', icon: FolderOpen, color: 'bg-blue-800' },
    { title: 'MEP Designs', value: animatedStats[1], suffix: '+', change: '+8%', icon: Calculator, color: 'bg-green-500' },
    { title: 'Team Members', value: animatedStats[2], suffix: '', change: '+2', icon: Users, color: 'bg-purple-500' },
    { title: 'Client Satisfaction', value: animatedStats[3], suffix: '%', change: '+5%', icon: Award, color: 'bg-orange-500' }
  ];

  const recentProjects = [
    { name: 'IRCAD Hospital Project', type: 'IT & CCTV Installation', status: 'Completed', date: '2024-01-15', progress: 100 },
    { name: 'Amarembo Hotel', type: 'Electrical & Low Current', status: 'In Progress', date: '2024-02-20', progress: 75 },
    { name: 'Myhill Ecolodge', type: 'MEP Design', status: 'Completed', date: '2024-01-30', progress: 100 },
    { name: 'School Project Gasabo', type: 'MEP Design', status: 'Planning', date: '2024-03-10', progress: 25 }
  ];

  const services = [
    { name: 'MEP Design & Construction', icon: Settings, projects: 45, trend: 'up' },
    { name: 'Energy Audit & Certification', icon: Zap, projects: 12, trend: 'up' },
    { name: 'Power Systems', icon: Calculator, projects: 8, trend: 'down' },
    { name: 'Facilities Management', icon: Users, projects: 15, trend: 'up' }
  ];

  // Data for bar chart (monthly projects)
  const barData = [
    { month: 'Jan', projects: 8 },
    { month: 'Feb', projects: 12 },
    { month: 'Mar', projects: 15 },
    { month: 'Apr', projects: 10 },
    { month: 'May', projects: 18 },
    { month: 'Jun', projects: 14 }
  ];

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-1"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() && 
        currentDate.getFullYear() === new Date().getFullYear();
      
      days.push(
        <div 
          key={day} 
          className={`p-1 text-center text-xs hover:bg-blue-50 cursor-pointer rounded transition-all duration-200 hover:scale-110 ${
            isToday ? 'bg-blue-900 text-white scale-105' : 'text-gray-700'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-3 md:p-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className={`mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">Dashboard Pannel</h1>
            <p className="text-gray-600 text-sm">Welcome to Electrical Solution Company</p>
          </div>
          <div className="mt-3 md:mt-0 flex items-center space-x-3">
            <div className="flex items-center text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'short', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-600 mb-1">{stat.title}</p>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {stat.value}{stat.suffix}
                  </h3>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center">
                    <ArrowUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-2 rounded-lg transform transition-transform duration-300 hover:scale-110`}>
                <stat.icon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Recent Projects */}
        <div className={`lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {recentProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="group p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-102 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-900 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-gray-600">{project.type}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-900' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${
                        project.status === 'Completed' ? 'bg-green-500' :
                        project.status === 'In Progress' ? 'bg-blue-900' :
                        'bg-yellow-500'
                      }`}
                      style={{ 
                        width: `${project.progress}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Our Services</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <service.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <p className="text-xs text-gray-600">{service.projects} projects</p>
                        <TrendingUp className={`w-3 h-3 ${service.trend === 'up' ? 'text-green-500' : 'text-red-500'} transition-transform duration-300 group-hover:scale-110`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid - Charts and Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Calendar */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 transform transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
              <div className="flex items-center space-x-1">
                <button 
                  onClick={() => changeMonth(-1)}
                  className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <button 
                  onClick={() => changeMonth(1)}
                  className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </p>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="p-1 text-center text-xs font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>
        </div>

        {/* Monthly Projects Chart */}
        <div className={`bg-white rounded-xl shadow-sm border border-gray-200 transform transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Projects</h2>
              <Eye className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#f8f9fa',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar 
                  dataKey="projects" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;