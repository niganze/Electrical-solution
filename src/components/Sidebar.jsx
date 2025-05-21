import React, { useState, useEffect } from "react";
import { LayoutDashboard, Users, LogOut, FileText, MessageSquareQuote, Handshake, Calculator, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/electricallogo.png"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      {/* Mobile overlay for when sidebar is open */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      
      <div 
        className={`bg-white border-r border-gray-200 h-screen flex flex-col overflow-y-auto shadow-md z-30 transition-all duration-300 ease-in-out fixed md:relative ${
          isOpen || !isMobile ? 'translate-x-0 w-64' : '-translate-x-full w-0 md:w-64 md:translate-x-0'
        }`}
      >
        <Link to="/" className="  p-2  flex items-center border-b cursor-pointer transition-all hover:bg-gray-50">
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="Electrical Solution Logo"
              className="h-16 w-auto mr-3 object-contain transition-all duration-300 hover:scale-105"
            />
          </div>
        </Link>

        <nav className="flex-grow mt-4 px-3">
          {/* Main section */}
          <div className="mb-4">
            <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
              Main
            </h3>
            <Link 
              to="/dashboard"
              className="flex items-center py-3 px-4 rounded-lg mb-1 transition-all duration-300 bg-blue-50 text-blue-600 font-medium shadow-sm"
            >
              <LayoutDashboard className="mr-3" size={20} />
              Dashboard
            </Link>
          </div>

          {/* Business Services section */}
          <div className="mb-4">
            <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
              Business Services
            </h3>
            
            <Link
              to="/dashboard/mepcalculations"
              className="flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <Calculator className="mr-3" size={20} />
              MEP Calculations
            </Link>
            <Link
              to="/dashboard/partner"
              className="flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <Handshake className="mr-3" size={20} />
              Partner
            </Link>
          </div>

          {/* Marketing & Content section */}
          <div className="mb-4">
            <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
              Marketing & Content
            </h3>
            <Link
              to="/dashboard/blogs"
              className="flex items-center py-3 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <FileText className="mr-3" size={20} />
              Manage Blog
            </Link>
            <Link
              to="/dashboard/testimonials"
              className="flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <MessageSquareQuote className="mr-3" size={20} />
              Testimonials
            </Link>
          </div>

          {/* Team & Resources section */}
          <div className="mb-4">
            <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
              Team & Resources
            </h3>
            <Link
              to="/dashboard/team"
              className="flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <Users className="mr-3" size={20} />
              Team Management
            </Link>
          </div>

          {/* Project & Resources section */}
          <div className="mb-4">
            <h3 className="px-4 text-xs uppercase text-gray-500 font-semibold mb-2">
              Project & Resources
            </h3>
            <Link
              to="/dashboard/projects"
              className="flex items-center py-2 px-4 rounded-lg mb-1 transition-all duration-300 text-gray-600 hover:bg-gray-100 hover:translate-x-1 cursor-pointer"
            >
              <Users className="mr-3" size={20} />
              Project Management 
            </Link>
          </div>
        </nav>

        <div className="p-3 border-t mt-auto">
          <Link
            to="/"
            className="flex items-center py-2 px-4 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-300 hover:translate-x-1 cursor-pointer"
          >
            <LogOut className="mr-3" size={20} />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;