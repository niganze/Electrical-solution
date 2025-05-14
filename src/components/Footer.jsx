import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Zap,
  Heart,
  Sparkles,
  ArrowUp,
  Download
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LOGO from "../assets/images/electricallogo.png";

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-yellow-400 text-gray-900 shadow-lg z-50 ${isVisible ? 'flex' : 'hidden'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

// WhatsApp Button Component
const WhatsAppButton = () => {
  const phoneNumber = "+250786176444"; // Replace with actual WhatsApp number
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 p-3 rounded-full bg-green-500 text-white shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </motion.a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(251, 191, 36, 0)",
        "0 0 40px rgba(251, 191, 36, 0.3)",
        "0 0 20px rgba(251, 191, 36, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Lightning Effect on Top */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info & Logo */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={LOGO} alt="Electrical Solution Company" className="h-20 w-auto" />
            </motion.div>
            <p className="text-sm text-gray-300 mb-4">
              Powering Rwanda's future with innovative MEP solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "rgba(251, 191, 36, 0.8)",
                    rotate: 360 
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants} 
            className="text-center"
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="mr-2 text-yellow-400" size={18} />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Quick Access
              </span>
            </motion.h3>
            <ul className="space-y-2">
              {["Services", "Projects", "About Us", "Contact"].map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-gray-300 hover:text-yellow-400 transition-colors inline-flex items-center group"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <motion.span
                      className="mr-2 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants} 
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <motion.div
              className="space-y-2"
              variants={glowVariants}
              animate="animate"
            >
              <motion.a
                href="tel:+250786176444"
                className="flex items-center justify-center md:justify-start text-sm text-gray-300 hover:text-yellow-400 transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={14} className="mr-2 group-hover:animate-pulse" />
                +250 786 176 444
              </motion.a>
              <motion.a
                href="mailto:info@electricalsolutionco.rw"
                className="flex items-center justify-center md:justify-start text-sm text-gray-300 hover:text-yellow-400 transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={14} className="mr-2 group-hover:animate-pulse" />
                info@electricalsolutionco.rw
              </motion.a>
              <motion.div
                className="flex items-center justify-center md:justify-start text-sm text-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin size={14} className="mr-2" />
                Kigali, Rwanda
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div className="flex justify-center md:justify-start">
              <motion.a
                href="/contact"
                className="mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full text-sm font-semibold inline-flex items-center group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: 0, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <Sparkles className="mr-2 relative z-10" size={16} />
                <span className="relative z-10">Get Quote</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs text-gray-400">
              © {currentYear} Electrical Solution Company Ltd. All rights reserved.
            </p>
            
            {/* House of Kemmy Credit */}
            <motion.div
              className="flex items-center text-xs text-gray-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Designed with </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="mx-1 text-red-500" size={12} fill="currentColor" />
              </motion.div>
              <span>in </span>
              <span className="ml-1 font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The House of Kemmy
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Glow Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
    </footer>
  );
};

export default Footer;