import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadProfile = () => {
  // State to track if the button should be visible (for mobile responsiveness)
  const [isVisible, setIsVisible] = useState(true);

  // You can adjust visibility based on screen size if needed
  useEffect(() => {
    const handleResize = () => {
      // Example: Hide on very small screens
      setIsVisible(window.innerWidth > 640);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle download
  const handleDownload = () => {
    // Replace with actual path to your company profile PDF
    const profileUrl = "/assets/documents/company-profile.pdf";
    
    // Create a link element
    const link = document.createElement("a");
    link.href = profileUrl;
    link.download = "ElectricalSolutionCompany-Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isVisible && (
        <motion.div 
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,
            delay: 1 
          }}
        >
          <motion.button
            onClick={handleDownload}
            className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-4 pl-3 pr-4 rounded-r-2xl shadow-2xl backdrop-blur-sm"
            whileHover={{ 
              x: 5, 
              paddingRight: '1.25rem',
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="mb-3"
              whileHover={{ 
                rotate: 180,
                scale: 1.1 
              }}
              transition={{ duration: 0.3 }}
            >
              <Download size={20} className="text-white" />
            </motion.div>
            <div 
              className="text-xs font-bold tracking-wider text-white uppercase"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                letterSpacing: '0.15em',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
            >
              COMPANY PROFILE
            </div>
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-r-2xl"></div>
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default DownloadProfile;