import { useState, useEffect } from "react";
import { Menu, X, Home, MessageSquare, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/electricallogo.png";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define text color based on scroll
  const getTextColor = () => {
    if (scrolled) {
      return "text-gray-200";
    } else {
      return "text-white";
    }
  };

  // Navigation items
  const navItems = [
    { title: "Home", link: "/", icon: <Home size={18} /> },
    { title: "About Us", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/projects" },
    { title: "Blogs & News", link: "/blogs" },
  ];

  return (
    <motion.nav
      className={`w-full z-40 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Glow Effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        animate={{
          opacity: scrolled ? [0.5, 1, 0.5] : 0,
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo - increased size and made clickable */}
          <motion.a
            href="/"
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.img 
              src={Logo} 
              alt="Logo" 
              className="h-20 w-auto"
              animate={scrolled ? { filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))" } : {}}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} textColor={getTextColor()} scrolled={scrolled} />
            ))}
            <motion.a
              href="/company-profile.pdf"
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full font-semibold flex items-center text-sm shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: 0, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <Download className="mr-2 relative z-10" size={16} />
              <span className="relative z-10">Download Profile</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-yellow-400" : "text-white"
              } hover:bg-gray-800/50 focus:outline-none`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-2xl rounded-b-lg mx-4 border border-gray-700/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-3 pb-5 space-y-2">
              {navItems.map((item, index) => (
                <MobileNavItem key={index} item={item} />
              ))}
              <motion.a
                href="/company-profile.pdf"
                className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full font-semibold flex items-center justify-center text-sm shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <Download className="mr-2 relative z-10" size={16} />
                <span className="relative z-10">Download Profile</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Glow Effect when scrolled */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      )}
    </motion.nav>
  );
};

// Desktop Navigation Item Component
const NavItem = ({ item, textColor, scrolled }) => {
  return (
    <div className="relative">
      <motion.a
        href={item.link}
        className={`px-3 py-2 ${textColor} hover:text-yellow-400 font-medium flex items-center text-sm transition-all duration-300 relative group`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {item.icon && (
          <motion.span 
            className="mr-1.5"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.span>
        )}
        {item.title}
      </motion.a>
    </div>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ item }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href={item.link}
        className="flex items-center px-3 py-2.5 rounded-md text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 font-medium text-sm transition-all duration-200 group"
      >
        {item.icon && (
          <motion.span 
            className="mr-2 text-yellow-400/70 group-hover:text-yellow-400"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.span>
        )}
        {item.title}
      </a>
    </motion.div>
  );
};

export default Navbar;