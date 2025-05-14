import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import constructionVideo from "../assets/images/construction.mp4";

export default function ServicesSection() {
  const services = [
    {
      title: "Mechanical Engineering",
      description: "Comprehensive HVAC, plumbing, and fire protection systems designed for optimal performance and energy efficiency.",
      features: ["HVAC System Design", "Energy Efficiency Analysis"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    },
    {
      title: "Electrical Engineering",
      description: "Power distribution, lighting design, and renewable energy integration for sustainable and efficient electrical systems.",
      features: ["Power Distribution Systems", "Smart Building Technology"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    },
    {
      title: "Plumbing Engineering",
      description: "Efficient water supply, drainage, and sanitation systems with focus on sustainability and conservation.",
      features: ["Water Supply Systems", "Rainwater Harvesting"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    },
    {
      title: "Fire Protection",
      description: "Advanced detection and suppression solutions to safeguard lives and property compliant with safety standards.",
      features: ["Fire Detection Systems", "Emergency Evacuation Planning"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    },
    {
      title: "Building Information Modeling",
      description: "3D models enhancing collaboration across disciplines for better coordination and visualization.",
      features: ["3D Modeling & Coordination", "Clash Detection"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    },
    {
      title: "Sustainable Design",
      description: "Environmentally responsible practices for green building certifications and reduced environmental impact.",
      features: ["LEED Certification Support", "Energy Modeling"],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setTimeout(() => setTransitioning(false), 500);
  };

  const handleDotClick = (index) => {
    if (transitioning) return;
    setTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [transitioning]);

  // Get visible services (current and next two)
  const visibleServices = [
    services[activeIndex],
    services[(activeIndex + 1) % services.length],
    services[(activeIndex + 2) % services.length]
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-yellow-500 mr-4"></div>
            <span className="text-yellow-600 font-semibold">Our Services</span>
            <div className="w-16 h-1 bg-yellow-500 ml-4"></div>
          </div>
          <h2 className="text-xl font-bold text-blue-900 mb-4">Comprehensive MEP Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Delivering sustainable, efficient building systems through technical excellence and innovation
          </p>
        </div>

        {/* Video Section - Full Width, Modern Design */}
        <div className="w-full mb-12 relative">
          <div className="aspect-w-16 aspect-h-7">
            <video 
              className="w-full object-cover"
              controls
              poster="/api/placeholder/1920/840"
              autoPlay
              muted
              loop
            >
              <source src={constructionVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent flex items-center">
              <div className="text-left px-8 md:px-16 w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Engineering Excellence</h3>
                <p className="text-white text-sm md:text-base opacity-90 mb-6 drop-shadow-md">
                  See how our solutions transform building performance
                </p>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center text-sm font-medium transition-colors duration-300"
                  onClick={(e) => {
                    const video = document.querySelector('video');
                    video.muted = false;
                    video.play();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="relative px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
           
            <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-yellow-500 mr-4"></div>
                <span className="text-yellow-600 font-semibold">
                  Featured Services
                </span>
              </div>
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`} 
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 33.333}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`w-full md:w-1/3 flex-shrink-0 px-4 transition-opacity duration-500 ${
                    index >= activeIndex && index < activeIndex + 3 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-yellow-600 transition-colors">
                      Learn More <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Condensed Description */}
        <div className="mt-10 max-w-3xl mx-auto text-center px-4 sm:px-6">
          <p className="text-gray-600 text-sm">
            From hospitals to commercial buildings, our multidisciplinary teams bring quality 
            and precision to every project, optimizing performance while enhancing comfort and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}