import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Building, ChevronLeft, CheckCircle, ArrowRight } from 'lucide-react';
import Amarembo from '../assets/images/amarembo.jpeg';
import IRCAD from '../assets/images/IRCAD.jpg';
import Kabeza from '../assets/images/Kabeza.jpeg';
import MAGERWA from '../assets/images/Magerwa.jpg';
import Myhill from '../assets/images/Myhill.jpg';

function SingleProject() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  // Projects data - normally this would come from an API or context
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
      results: "Successfully delivered a hospital-grade electrical system that has maintained 100% uptime for critical care areas since installation.",
      gallery: [IRCAD, IRCAD, IRCAD] // Ideally you'd have multiple images
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
      results: "Enhanced guest safety with 24/7 monitoring while maintaining the hotel's premium atmosphere. Reduced security incidents by 80%.",
      gallery: [Amarembo, Amarembo, Amarembo] // Ideally you'd have multiple images
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
      results: "Created a self-sustaining property with 90% energy independence and 60% water recycling capability, earning Green Tourism certification.",
      gallery: [Myhill, Myhill, Myhill] // Ideally you'd have multiple images
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
      results: "Zero lightning-related incidents or damage since installation, protecting facilities valued at over $5 million.",
      gallery: [MAGERWA, MAGERWA, MAGERWA] // Ideally you'd have multiple images
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
      results: "Achieved Green Building Certification with a 40% reduction in energy consumption compared to conventional apartments in the region.",
      gallery: [Kabeza, Kabeza, Kabeza] // Ideally you'd have multiple images
    }
  ];

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const projectData = projects.find(p => p.id === parseInt(id));
      setProject(projectData);
      
      // Find related projects (same category)
      if (projectData) {
        const related = projects
          .filter(p => p.category === projectData.category && p.id !== projectData.id)
          .slice(0, 3); // Get up to 3 related projects
        setRelatedProjects(related);
      }
      
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-10 h-10 bg-yellow-400 rounded-full mb-2"></div>
          <div className="text-gray-600">Loading project details...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-medium"
          >
            <ChevronLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Project Image */}
      <div className="relative h-80 md:h-96 lg:h-[500px] bg-gray-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center mb-2">
              <Link 
                to="/projects"
                className="inline-flex items-center text-yellow-400 text-sm font-medium hover:text-yellow-300"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to All Projects
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200">
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {project.year}
              </div>
              <div className="flex items-center">
                <Building size={16} className="mr-1" />
                {project.client}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.challenge}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.solution}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-700 leading-relaxed">{project.results}</p>
            </div>
            
            {/* Gallery Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img src={image} alt={`Project view ${index + 1}`} className="w-full h-48 object-cover hover:opacity-90 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Details Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              
              <div className="mb-4 pb-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Client</h4>
                <p className="text-gray-800">{project.client}</p>
              </div>
              
              <div className="mb-4 pb-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Location</h4>
                <p className="text-gray-800">{project.location}</p>
              </div>
              
              <div className="mb-4 pb-4 border-b border-gray-100">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Year</h4>
                <p className="text-gray-800">{project.year}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Services Provided</h4>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-800">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gray-900 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Interested in a similar project?</h3>
              <p className="text-gray-300 mb-4">Contact us to discuss how we can help with your MEP needs.</p>
              <Link 
                to="/contact" 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 w-full px-4 py-2 rounded-md font-medium inline-flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link 
                  key={relatedProject.id} 
                  to={`/project/${relatedProject.id}`} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 group"
                >
                  <div className="relative h-40">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title} 
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 font-medium px-2 py-1 text-sm">
                      {relatedProject.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{relatedProject.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{relatedProject.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin size={12} className="mr-1" />
                      {relatedProject.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-yellow-400 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your project?</h2>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and implement your next MEP project with excellence and precision.
          </p>
          <Link 
            to="/contact" 
            className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-md font-medium inline-block transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;