import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBolt, 
  FaToolbox, 
  FaLeaf, 
  FaBuilding, 
  FaWrench, 
  FaShieldAlt 
} from 'react-icons/fa';
import { GiHeatHaze } from 'react-icons/gi';
import { 
  MdPlumbing, 
  MdEngineering, 
  MdSecurity 
} from 'react-icons/md';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { Zap, Sparkles } from 'lucide-react';

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

  const serviceCategories = [
    {
      id: 1,
      title: "MEP Design & Construction",
      icon: <FaToolbox className="text-3xl" />,
      description: "Expert Mechanical, Electrical and Plumbing systems design and installation.",
      gradient: "from-yellow-400 to-yellow-500",
      services: [
        {
          title: "Mechanical",
          icon: <MdEngineering className="text-xl" />,
          items: ["HVAC Systems", "Ventilation", "Chilled water", "DX/VRV systems"]
        },
        {
          title: "Electrical",
          icon: <FaBolt className="text-xl" />,
          items: ["Grounding", "Distribution boards", "Cabling", "Lighting"]
        },
        {
          title: "Plumbing",
          icon: <MdPlumbing className="text-xl" />,
          items: ["Sanitary systems", "Water distribution", "Solar heaters", "Irrigation"]
        }
      ]
    },
    {
      id: 2,
      title: "Energy Solutions",
      icon: <TbCertificate className="text-3xl" />,
      description: "Comprehensive energy audits and efficiency optimization services.",
      gradient: "from-yellow-400 to-yellow-500",
      services: [
        {
          title: "Energy Audit",
          icon: <BsFillLightningChargeFill className="text-xl" />,
          items: ["Energy flow analysis", "Process optimization", "Conservation plans", "Risk mitigation"]
        }
      ]
    },
    {
      id: 3,
      title: "Green Building",
      icon: <FaLeaf className="text-3xl" />,
      description: "LEED™ and RwGBO certified sustainable building solutions.",
      gradient: "from-yellow-400 to-yellow-500",
      services: [
        {
          title: "Sustainability",
          icon: <FaLeaf className="text-xl" />,
          items: ["LEED™ certification", "RwGBO support", "Eco-friendly design", "Green compliance"]
        }
      ]
    },
    {
      id: 4,
      title: "Power Systems",
      icon: <GiHeatHaze className="text-3xl" />,
      description: "Reliable power infrastructure for critical facilities.",
      gradient: "from-yellow-400 to-yellow-500",
      services: [
        {
          title: "Power Solutions",
          icon: <FaWrench className="text-xl" />,
          items: ["System design", "Lightning protection", "Emergency power", "Quality analysis"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Service Page */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        
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
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 lg:py-20 z-10">
          <div className="space-y-6">
            <h1 className="text-2xl lg:text-2xl font-bold mb-4 animate-slide-up">
              <span className="inline-block animate-text-reveal">Our</span>{' '}
              <span className="inline-block animate-text-reveal-delay bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">Services</span>
            </h1>
            <p className="text-sm lg:text-sm max-w-3xl mb-6 animate-fade-in-up text-gray-300">
              Comprehensive MEP solutions tailored to your needs. From design to implementation, we deliver excellence in every project.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay">
              <a href="#services-list" className="group relative bg-white text-gray-900 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-2 px-3 rounded-lg font-medium overflow-hidden">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#contact" className="group relative bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white py-2 px-3 rounded-lg font-medium overflow-hidden">
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path className="animate-wave" d="M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24 L1440,48 L0,48 Z"></path>
          </svg>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <motion.div 
                className="h-full bg-white border border-gray-200 rounded-xl p-6 overflow-hidden relative shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon with Animation */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="inline-block mb-4 text-yellow-500"
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {/* Services List */}
                <div className="space-y-3">
                  {category.services.map((service, sIndex) => (
                    <motion.div 
                      key={sIndex}
                      className="bg-gray-50 rounded-lg p-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + sIndex * 0.1 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="mr-2 text-yellow-500">
                          {service.icon}
                        </span>
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {service.items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            className="text-xs text-gray-600 flex items-center"
                            whileHover={{ x: 3 }}
                          >
                            <span className="mr-1 text-yellow-500">•</span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl"
                  whileHover={{
                    borderColor: "rgba(251, 191, 36, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="relative bg-gray-100 py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Project?
          </motion.h2>
          <motion.p 
            className="text-base text-gray-600 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Connect with our expert team to bring your vision to life
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a 
              href="/contact" 
              className="px-6 py-2.5 bg-yellow-500 text-gray-900 rounded-lg font-semibold inline-flex items-center justify-center group hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-2" size={16} />
              Contact Us
            </motion.a>
            <motion.a 
              href="/projects" 
              className="px-6 py-2.5 bg-transparent border-2 border-yellow-500 text-yellow-600 rounded-lg font-semibold inline-flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors"
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