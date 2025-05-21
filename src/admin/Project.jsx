import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Plus, Edit, Trash2, Search, MapPin, Calendar, Building,} from 'lucide-react';
import PROJECT from '../assets/images/kabeza.jpeg';
const Project = () => {
  // Sample initial data
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "IRCAD Hospital Project",
      category: "healthcare",
      image: PROJECT,
      description: "Electrical and low current installation for IRCAD Hospital.",
      location: "Kigali, Rwanda",
      year: "2023",
      client: "IRCAD Foundation",
      services: ["Electrical Systems", "Low Current Installation", "Medical Equipment Power"],
      gallery: [PROJECT, PROJECT, PROJECT],
      createdAt: "2024-01-10",
      updatedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Convention Center Lighting",
      category: "commercial",
      image: PROJECT,
      description: "Complete lighting solution for the new Kigali Convention Center including interior and exterior lighting systems.",
      location: "Kigali, Rwanda",
      year: "2022",
      client: "Rwanda Development Board",
      services: ["Lighting Design", "Electrical Systems", "Smart Controls"],
      gallery: [PROJECT, PROJECT],
      createdAt: "2023-08-05",
      updatedAt: "2023-09-10"
    },
    {
      id: 3,
      title: "Solar Power Installation - Nyagatare",
      category: "renewable",
      image: PROJECT,
      description: "50kW solar power installation for a rural community center providing sustainable electricity to the facility.",
      location: "Nyagatare, Rwanda",
      year: "2023",
      client: "Ministry of Infrastructure",
      services: ["Solar PV Installation", "Battery Storage", "System Monitoring"],
      gallery: [PROJECT, PROJECT, PROJECT],
      createdAt: "2023-05-15",
      updatedAt: "2023-06-20"
    }
  ]);

   const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const [categoryFilter, setCategoryFilter] = useState('');

  
  
  const openCreateModal = () => {
    // Logic to open create project modal
    console.log('Open create project modal');
  };
  

  // Available categories
  const categories = [
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'residential', label: 'Residential' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'renewable', label: 'Renewable Energy' },
    { value: 'infrastructure', label: 'Infrastructure' },
  ];
  // Delete project
  const deleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter ? project.category === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Project Management</h1>
                <p className="text-gray-600 mt-1">Manage your company's projects and their details</p>
              </div>
              <button
            onClick={() => navigate("/dashboard/createproject")}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
          >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-full sm:w-48">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{projects.length}</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Projects</dt>
                    <dd className="text-lg font-medium text-gray-900">{projects.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {new Set(projects.map(p => p.category)).size}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Categories</dt>
                    <dd className="text-lg font-medium text-gray-900">{new Set(projects.map(p => p.category)).size}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {projects.length > 0 ? new Date(Math.max(...projects.map(p => new Date(p.updatedAt)))).toLocaleDateString() : "-"}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Last Updated</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {projects.length > 0 ? new Date(Math.max(...projects.map(p => new Date(p.updatedAt)))).toLocaleDateString() : "No updates"}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProjects.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center">
                        <Search className="h-12 w-12 text-gray-300 mb-4" />
                        <p className="text-lg font-medium">No projects found</p>
                        <p className="text-sm">Try adjusting your search criteria</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-16">
                            <img
                              className="h-12 w-16 object-cover rounded"
                              src={project.image}
                              alt={project.title}
                              onError={(e) => {
                                e.target.src = '/api/placeholder/64/48';
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{project.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{project.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-gray-500" />
                          {project.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1 text-gray-500" />
                          {project.year}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <Building className="h-3 w-3 mr-1 text-gray-500" />
                          {project.client}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => openEditModal(project)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="text-red-600 hover:text-red-900 p-1"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;