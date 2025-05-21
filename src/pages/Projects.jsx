import React, { useState, useEffect } from 'react';
import { Search, Building, Hospital, Home, ShoppingBag, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Amarembo from '../assets/images/amarembo.jpeg';
import IRCAD from '../assets/images/IRCAD.jpg';
import Kabeza from '../assets/images/kabeza.jpeg';
import MAGERWA from '../assets/images/Magerwa.jpg';
import Myhill from '../assets/images/Myhill.jpg';
// Import a hero background image - replace with your actual path
import HeroBackground from '../assets/images/Myhill.jpg';

function Projects() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate elements on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const categories = [
    { name: 'Hospitality', icon: <Building size={14} />, id: 'hotel' },
    { name: 'Healthcare', icon: <Hospital size={14} />, id: 'healthcare' },
    { name: 'Residential', icon: <Home size={14} />, id: 'residential' },
    { name: 'Commercial', icon: <ShoppingBag size={14} />, id: 'commercial' },
    { name: 'All Projects', icon: null, id: 'all' }
  ];
  
  const handleCategoryChange = (category) => {
    const selectedCategory = categories.find(cat => cat.name === category);
    if (selectedCategory) {
      setFilter(selectedCategory.id);
    }
  };

  // Simplified projects data
  const projects = [
    {
      id: 1,
      title: "IRCAD Hospital Project",
      category: "healthcare",
      image: IRCAD,
      description: "Electrical and low current installation for IRCAD Hospital.",
      location: "Kigali, Rwanda",
      year: "2023",
      client: "IRCAD Foundation",
      services: ["Electrical Systems", "Low Current Installation", "Medical Equipment Power"],
      challenge: "Implementing medical-grade electrical systems that meet international healthcare standards while ensuring reliability for critical care equipment.",
      solution: "Designed and installed a redundant power system with UPS backup for critical areas, while ensuring compliance with medical facility electrical codes.",
      results: "Successfully delivered a hospital-grade electrical system that has maintained 100% uptime for critical care areas since installation."
    },
    {
      id: 2,
      title: "Amarembo Hotel",
      category: "hotel",
      image: Amarembo,
      description: "IT and CCTV Camera Installation Works for the Amarembo Hotel.",
      location: "Kigali, Rwanda",
      year: "2022",
      client: "Amarembo Hospitality Group",
      services: ["Security Systems", "CCTV Installation", "IT Infrastructure"],
      challenge: "Creating an integrated security and IT system for a luxury hotel while maintaining the aesthetic appeal of the property.",
      solution: "Implemented discreet CCTV installations and created a centralized monitoring system with high-resolution cameras and smart detection features.",
      results: "Enhanced guest safety with 24/7 monitoring while maintaining the hotel's premium atmosphere. Reduced security incidents by 80%."
    },
    {
      id: 3,
      title: "Myhill Ecolodge",
      category: "hotel",
      image: Myhill,
      description: "Complete MEP design and installation for eco-friendly lodge.",
      location: "Musanze, Rwanda",
      year: "2023",
      client: "Myhill Properties",
      services: ["Sustainable MEP", "Solar Power Systems", "Water Recycling"],
      challenge: "Designing a fully sustainable MEP system for an eco-lodge with minimal environmental impact in a remote location.",
      solution: "Implemented an off-grid solar power system with battery storage, rainwater harvesting, and gray water recycling systems to minimize ecological footprint.",
      results: "Created a self-sustaining property with 90% energy independence and 60% water recycling capability, earning Green Tourism certification."
    },
    {
      id: 4,
      title: "MAGERWA Ltd Project",
      category: "commercial",
      image: MAGERWA,
      description: "Supply and Installation of Lightning Protection Systems.",
      location: "Kigali, Rwanda",
      year: "2023",
      client: "MAGERWA Limited",
      services: ["Lightning Protection", "Grounding Systems", "Surge Protection"],
      challenge: "Protecting large warehouse facilities and valuable inventory from frequent lightning strikes in a region with high thunderstorm activity.",
      solution: "Designed and installed a comprehensive lightning protection system with advanced early streamer emission terminals and multi-layer surge protection devices.",
      results: "Zero lightning-related incidents or damage since installation, protecting facilities valued at over $5 million."
    },
    {
      id: 5,
      title: "Kabeza Apartment",
      category: "residential",
      image: Kabeza,
      description: "MEP Design with Green Building Compliance Certification.",
      location: "Kabeza, Rwanda", 
      year: "2022",
      client: "Kabeza Development Group",
      services: ["Green Building Design", "Energy Efficient MEP", "Smart Home Systems"],
      challenge: "Converting a traditional apartment complex design into a green building that meets international sustainability standards.",
      solution: "Redesigned the MEP systems to incorporate energy-efficient HVAC, LED lighting throughout, smart metering, and renewable energy integration.",
      results: "Achieved Green Building Certification with a 40% reduction in energy consumption compared to conventional apartments in the region."
    }
  ];

  // Filter projects based on search term and category
  const filteredProjects = projects
    .filter(project => filter === 'all' || project.category === filter)
    .filter(project => 
      searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="bg-gray-50">
      {/* Modern Hero Section with Background Image and Animations */}
      <div className="relative">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${HeroBackground})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/90 to-yellow-600/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className={`text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300 animate-fade-in-down ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Our Projects
              </h1>
              <p className={`text-sm text-gray-200 mb-8 animate-fade-in-up ${isVisible ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                Explore our portfolio of successful MEP projects across Rwanda's hospitality, 
                healthcare, commercial and residential sectors.
              </p>
              
              <div className={`relative mb-6 animate-fade-in ${isVisible ? 'opacity-100 delay-300' : 'opacity-0'}`}>
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full rounded-full border-0 py-3 pl-12 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Search size={18} />
                </div>
              </div>
              
              <div className={`flex flex-wrap justify-center gap-3 mt-4 animate-fade-in-up ${isVisible ? 'opacity-100 delay-400' : 'opacity-0'}`}>
                {categories.map((category, index) => (
                  <button 
                    key={index} 
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 flex items-center gap-2 hover:scale-105 ${
                      filter === category.id 
                        ? 'bg-yellow-500 text-gray-900 font-medium shadow-lg' 
                        : 'bg-gray-800 bg-opacity-50 hover:bg-yellow-600 hover:bg-opacity-30 text-white'
                    }`}
                    onClick={() => handleCategoryChange(category.name)}
                  >
                    {category.icon && <span className="animate-pulse">{category.icon}</span>}
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Floating particles for visual effect */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`absolute bg-yellow-400 opacity-20 rounded-full animate-float-${i+1}`}
                    style={{
                      width: `${Math.random() * 20 + 5}px`,
                      height: `${Math.random() * 20 + 5}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 10}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid with animations */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer group animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${150 * index}ms` }}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
    
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-medium px-2 py-1 text-sm">
                    {project.year}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin size={12} className="mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-16 text-center text-gray-500 animate-fade-in">
              <p className="text-lg">No projects found matching your criteria.</p>
              <button 
                onClick={() => {setFilter('all'); setSearchTerm('');}}
                className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-500 transition animate-pulse"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Compact CTA with animation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-gray-800 text-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center text-center">
            <h2 className="text-xl md:text-xl font-bold mb-4 animate-fade-in-up">Interested in our services?</h2>
            <p className="text-sm mb-6 animate-fade-in-up">Contact us today to discuss your project needs and get a free quote.</p>
            <Link 
                to="/contact" 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
            >
                Get a Quote
            </Link>
            </div>
        </div>
    </div>
  );
}

export default Projects;