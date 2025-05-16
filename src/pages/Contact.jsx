import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [openFaq, setOpenFaq] = useState(null);
  
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What areas do you service?",
      answer: "We primarily service clients in Rwanda, but we can also take on projects in neighboring countries. Please contact us to discuss your specific location and project requirements."
    },
    {
      id: 2,
      question: "How do I request a quote for my project?",
      answer: "You can request a quote by filling out our contact form, calling us directly, or sending us an email with details about your project. Our team will get back to you promptly to discuss your requirements and provide a detailed quote."
    },
    {
      id: 3,
      question: "What types of projects do you handle?",
      answer: "We handle a wide range of projects including residential, commercial, healthcare, educational, industrial, and hospitality. Our services cover MEP design, installation, supervision, energy audits, green building consultancy, and power systems."
    },
    {
      id: 4,
      question: "Do you offer maintenance services after project completion?",
      answer: "Yes, we offer facilities management and maintenance services to ensure your systems continue to operate efficiently. We can create a tailored maintenance plan based on your specific needs and requirements."
    }
  ];

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Determine active section
      const sections = ['hero', 'info', 'form', 'map', 'faq', 'cta'];
      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value]
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter(service => service !== value)
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        services: []
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Toggle FAQ
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-gray-50">
      {/* Floating navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center space-y-4">
          {['hero', 'info', 'form', 'map', 'faq', 'cta'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(`${section}-section`)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? 'bg-yellow-600 w-6' : 'bg-gray-300 hover:bg-yellow-400'
              }`}
              aria-label={`Scroll to ${section} section`}
            />
          ))}
        </div>
      </div>

      {/* Hero section - modernized and more compact */}
      <div id="hero-section" className="relative bg-gray-800 py-16">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-40 h-40 rounded-full bg-yellow-500 opacity-10 -top-16 -left-16"
            style={{
              animation: 'pulse 4s infinite',
              transform: `translateY(${scrollPosition * 0.1}px)`
            }}
          ></div>
          <div 
            className="absolute w-56 h-56 rounded-full bg-yellow-300 opacity-10 -bottom-24 -right-12"
            style={{
              animation: 'pulse 5s infinite 1s',
              transform: `translateY(${scrollPosition * 0.05}px)`
            }}
          ></div>
        </div>
        
        <div className="relative container mx-auto px-4 max-w-4xl">
          <div className="text-center py-12">
            <h1 className="text-xl font-bold text-white mb-4 animate-fade-in">Get In Touch With Us</h1>
            
            <p className="text-sm text-white animate-fade-in-delayed max-w-2xl mx-auto">
              Have questions about our services? We're here to help you build 
              a sustainable future with precision in MEP engineering solutions.
            </p>
            
            <div className="mt-8 animate-bounce">
              <button 
                onClick={() => scrollToSection('info-section')}
                className="bg-white bg-opacity-20 p-2 rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition"
                aria-label="Scroll down"
              >
                <ChevronDown className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact content - modernized design */}
      <div id="info-section" className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Contact information */}
          <div className="bg-gray-50 p-6 lg:p-8 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-yellow-50"></div>
            <div className="absolute right-12 bottom-24 w-12 h-12 rounded-full bg-yellow-100" style={{animation: 'pulse 3s infinite'}}></div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-6 relative">
              Contact Information
              <span className="block h-1 w-16 bg-yellow-600 mt-2"></span>
            </h2>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full mr-3 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Phone</h3>
                  <p className="mt-1 text-gray-600">+250 786 176 444</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full mr-3 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Email</h3>
                  <p className="mt-1 text-gray-600">info@electricalsolutionco.rw</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full mr-3 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Office Address</h3>
                  <p className="mt-1 text-gray-600">
                    Gisozi - ADARWA Building - KG 33 AVE
                    <br />Kigali, Rwanda
                    <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer" className="block text-yellow-600 mt-2 hover:underline group-hover:text-yellow-700">
                      View on Google Maps <ExternalLink className="h-3 w-3 inline" />
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full mr-3 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  <Clock className="h-4 w-4 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Working Hours</h3>
                  <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative z-10">
              <h3 className="font-medium text-gray-700 mb-3">Connect With Us</h3>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 text-yellow-600 hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300"
                >
                  <Facebook className="h-4 w-4 text-yellow-600 hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-100 p-2 rounded-full hover:bg-yellow-600 hover:text-white transition-all duration-300"
                >
                  <Instagram className="h-4 w-4 text-yellow-600 hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div id="form-section" className="bg-white p-6 lg:p-8">
            <h2 className="text-xl font-bold text-yellow-600 mb-6">
              Send Us a Message
              <span className="block h-1 w-16 bg-yellow-600 mt-2"></span>
            </h2>
            
            {submitted && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded" role="alert">
                <p className="font-medium">Thank you for your message!</p>
                <p>We've received your inquiry and will get back to you as soon as possible.</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
                <p className="font-medium">Error:</p>
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                    placeholder="+250 (123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition-colors duration-300"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-yellow-600 text-white font-medium rounded-md hover:bg-yellow-700 transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map section - modernized and more compact */}
      <div id="map-section" className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Visit Our Office</h2>
            <span className="block h-1 w-16 bg-yellow-600 mt-2"></span>
            <p className="mt-2 text-gray-600">
              Visit us at our office in Kigali, Rwanda to discuss your MEP engineering needs.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-72 relative">
            {/* Animated map pin marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              {/* Ripple effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-96 relative">
            {/* Animated map pin marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              {/* Ripple effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=Gisozi%20-%20ADARWA%20Building%20-%20KG%2033%20AVE+(Electrical%20Solution%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personl trackers</a></iframe>
          </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - modern and compact */}
      <div id="faq-section" className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900">Frequently Asked Questions</h2>
          <p className="mt-2 text-gray-600">
            Find answers to common questions about our services.
          </p>
        </div>
        
        <div className="space-y-3">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-5 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-base font-medium text-gray-900">{faq.question}</h3>
                {openFaq === faq.id ? (
                  <ChevronUp className="h-4 w-4 text-yellow-600" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-yellow-600" />
                )}
              </button>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id ? 'max-h-64 py-3' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action - modernized and more compact */}
      <div id="cta-section" className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-white text-base mb-6">
            Contact our team today to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a 
              href="tel:+250786176444" 
              className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-2 rounded-md font-medium inline-flex items-center justify-center transition-colors duration-300"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Us
            </a>
            <a 
              href="#form-section" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('form-section');
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-6 py-2 rounded-md font-medium inline-flex items-center justify-center transition-colors duration-300"
            >
              <Send className="h-4 w-4 mr-2" /> Send a Message
            </a>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes ping {
          0% { transform: scale(0.2); opacity: 0.8; }
          80%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;