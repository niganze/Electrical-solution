import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaToolbox, 
  FaLeaf
} from 'react-icons/fa';
import { GiHeatHaze } from 'react-icons/gi';
import { TbCertificate } from 'react-icons/tb';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';

// Import images
import mep1 from '../assets/images/mep1.jpg';
import mep2 from '../assets/images/mep2.jpeg';
import mep3 from '../assets/images/mep3.jpeg';

import energy1 from '../assets/images/energy1.jpeg';
import energy2 from '../assets/images/energy2.jpeg';
import energy3 from '../assets/images/energy3.jpeg';

import green from '../assets/images/green.jpeg';
import green1 from '../assets/images/green1.jpeg';
import green2 from '../assets/images/green2.jpeg';

import power from '../assets/images/power.jpg';
import power1 from '../assets/images/power1.webp';
import power2 from '../assets/images/power2.jpg';

function Services() {
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Service categories data
  const serviceCategories = [
    {
      id: 1,
      title: "MEP Design & Construction",
      icon: <FaToolbox className="text-4xl" />,
      description: "Expert Mechanical, Electrical and Plumbing systems design and installation. Our team of certified professionals delivers comprehensive solutions tailored to your project requirements. We ensure optimal performance, energy efficiency, and compliance with industry standards.",
      gradient: "from-yellow-400 to-yellow-500",
      images: [mep1, mep2, mep3],
      features: [
        "State-of-the-art HVAC and ventilation systems",
        "Professional electrical infrastructure design and installation",
        "Modern plumbing solutions with water conservation features",
        "Integrated systems for optimal building performance"
      ]
    },
    {
      id: 2,
      title: "Energy Solutions",
      icon: <TbCertificate className="text-4xl" />,
      description: "Comprehensive energy audits and efficiency optimization services to reduce costs and environmental impact. Our energy solutions team analyzes your current systems and provides actionable recommendations to improve sustainability and reduce operational expenses.",
      gradient: "from-yellow-400 to-yellow-500",
      images: [energy1, energy2, energy3],
      features: [
        "Detailed energy flow analysis and reporting",
        "Process optimization to reduce energy waste",
        "Conservation plans tailored to your business needs",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      id: 3,
      title: "Green Building",
      icon: <FaLeaf className="text-4xl" />,
      description: "LEED™ and RwGBO certified sustainable building solutions for environmentally conscious projects. Our specialists guide you through the certification process while implementing sustainable practices that benefit both your business and the planet.",
      gradient: "from-yellow-400 to-yellow-500",
      images: [green, green1, green2],
      features: [
        "Complete LEED™ certification support and documentation",
        "RwGBO compliance assistance and implementation",
        "Eco-friendly design consultation and planning",
        "Green building technology integration"
      ]
    },
    {
      id: 4,
      title: "Power Systems",
      icon: <GiHeatHaze className="text-4xl" />,
      description: "Reliable power infrastructure for critical facilities with built-in redundancy and protection systems. We design, install, and maintain high-performance power systems that ensure continuous operation for mission-critical environments.",
      gradient: "from-yellow-400 to-yellow-500",
      images: [power, power1, power2],
      features: [
        "Custom power system design for specific facility needs",
        "Advanced lightning protection implementation",
        "Emergency power systems and backup solutions",
        "Power quality analysis and improvement services"
      ]
    }
  ];

  // Image slider state management for each card
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(serviceCategories.length).fill(0));

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndices => 
        prevIndices.map((index, i) => (index + 1) % serviceCategories[i].images.length)
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [serviceCategories]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Service Page */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
        
        {/* Floating shapes animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-float-fast"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 lg:py-24 z-10">
          <div className="space-y-6">
            <motion.h1 
              className="text-2xl lg:text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">Our Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-base lg:text-base max-w-3xl mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive MEP solutions tailored to your needs. From design to implementation, we deliver excellence in every project.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#services-list" className="group relative bg-white text-gray-900 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-3 px-5 rounded-lg font-medium overflow-hidden text-base">
                <span className="relative z-10 flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#contact" className="group relative bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white py-3 px-5 rounded-lg font-medium overflow-hidden text-base">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path className="animate-wave" d="M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24 L1440,48 L0,48 Z"></path>
          </svg>
        </div>
      </div>

      {/* Services Sections - Alternating Layouts */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card wrapper with hover effect */}
              <div className="relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Alternating layout based on index (even/odd) */}
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  
                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    {/* Icon and title in a row */}
                    <div className="flex items-center space-x-3">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="text-yellow-500 p-3 bg-yellow-50 rounded-lg"
                      >
                        {category.icon}
                      </motion.div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                    </div>

                    {/* Description - now in paragraph form */}
                    <p className="text-gray-700 text-base mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-md">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {category.features.map((feature, idx) => (
                          <motion.div 
                            key={idx}
                            className="text-sm text-gray-700 flex items-center bg-gray-50 p-2 rounded-lg"
                            whileHover={{ x: 3 }}
                          >
                            <span className="mr-2 text-yellow-500 flex-shrink-0">
                              <Sparkles size={14} />
                            </span>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Slider Section */}
                  <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-md relative h-72">
                    {/* Image Slider */}
                    <div className="relative w-full h-full">
                      {category.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                          style={{ opacity: currentImageIndex[index] === imgIndex ? 1 : 0 }}
                        >
                          <img 
                            src={image} 
                            alt={`${category.title} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      ))}
                      
                      {/* Slider dots */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {category.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full ${currentImageIndex[index] === imgIndex ? 'bg-yellow-500' : 'bg-gray-300'}`}
                            onClick={() => {
                              const newIndices = [...currentImageIndex];
                              newIndices[index] = imgIndex;
                              setCurrentImageIndex(newIndices);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colored accent line */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="relative bg-gray-900 py-16 overflow-hidden text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-2xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">Ready to Transform Your Project?</span>
          </motion.h2>
          <motion.p 
            className="text-base text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Connect with our expert team to bring your vision to life
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a 
              href="/contact" 
              className="px-6 py-2.5 bg-yellow-500 text-gray-900 rounded-lg font-medium inline-flex items-center justify-center group hover:bg-yellow-400 transition-colors text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-2" size={18} />
              Contact Us
            </motion.a>
            <motion.a 
              href="/projects" 
              className="px-6 py-2.5 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-lg font-medium inline-flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;