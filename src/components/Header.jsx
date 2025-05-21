import  { useState, useEffect } from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Add scroll detection for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white border-b border-gray-200 h-16 fixed w-full z-10 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex justify-between items-center h-full px-2 sm:px-4 md:px-6">
        {/* Left section with menu toggle and search */}
        <div className="flex items-center flex-1">
          <button
            onClick={toggleSidebar}
            className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-all duration-300 hover:rotate-180"
            aria-label="Toggle sidebar"
          >
            <Menu size={22} className="text-gray-600" />
          </button>
          
          <div className={`relative flex items-center max-w-xs sm:max-w-sm md:max-w-md transition-all duration-300 ${
            searchFocused ? 'scale-105' : ''
          }`}>
            <Search className={`absolute left-2 transition-all duration-300 ${
              searchFocused ? 'text-blue-500' : 'text-gray-400'
            }`} size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className={`pl-8 pr-2 py-1.5 w-full rounded-lg border text-sm transition-all duration-300 ${
                searchFocused 
                ? 'bg-white border-blue-300 shadow-md' 
                : 'bg-gray-100 border-transparent focus:border-gray-300'
              }`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
        
        {/* Right section with notifications and user profile - always visible */}
        <div className="flex items-center space-x-1 md:space-x-2 ml-2">
          <div className="relative">
            <button 
              className="relative p-1 rounded-full hover:bg-gray-100 transition-all duration-300"
              aria-label="Notifications"
            >
              <Bell size={18} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-right hidden xs:block">
              <p className="text-xs md:text-sm font-medium text-gray-700 truncate max-w-[100px] md:max-w-full">Eng. Caleb BYIRINGIRO</p>
              <p className="text-xs text-gray-500 hidden sm:block">
                Managing Director
              </p>
            </div>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-sm">
              <User size={16} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;