import { useState } from 'react';
import { Search, Edit, Trash2, Plus, Eye, EyeOff, MoreHorizontal } from 'lucide-react';
import blog1 from '../assets/images/blog1.jpg';
export default function Blog() {
  // Sample blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Getting Started with React in 2025',
      author: 'Sarah Johnson',
      category: 'Development',
      date: 'May 10, 2025',
      status: 'published',
      image: blog1,
    },
    {
      id: 2,
      title: 'Advanced React Hooks: Beyond the Basics',
      author: 'Sarah Johnson',
      category: 'Development',
      date: 'May 5, 2025',
      status: 'published',
      image: blog1
    },
    {
      id: 3,
      title: 'Building Accessible React Applications',
      author: 'John Doe',
      category: 'Design',
      date: 'May 2, 2025',
      status: 'draft',
      image: blog1
    },
    {
      id: 4,
      title: 'State Management Strategies for React',
      author: 'Emily Chen',
      category: 'Development',
      date: 'April 28, 2025',
      status: 'published',
      image: blog1
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle publish status
  const togglePublishStatus = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id 
        ? {...blog, status: blog.status === 'published' ? 'draft' : 'published'} 
        : blog
    ));
  };

  // Delete blog
  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (id) => {
    if (dropdownOpen === id) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-xl sm:text-xl font-semibold text-gray-900">Blog Management</h1>
          <button 
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Blog
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow p-3 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search blogs..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Blog Table - Responsive design */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blog
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Author
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Category
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Date
                </th>
                <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        <img className="h-8 w-8 rounded-md object-cover" src={blog.image} alt="" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{blog.title}</div>
                        <div className="text-xs text-gray-500 sm:hidden">{blog.author}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{blog.author}</div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap hidden md:table-cell">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">
                    {blog.date}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      blog.status === 'published' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap text-right text-sm">
                    <div className="relative">
                      {/* Mobile dropdown menu */}
                      <div className="sm:hidden inline-block">
                        <button 
                          onClick={() => toggleDropdown(blog.id)}
                          className="p-1 rounded-full text-gray-400 hover:bg-gray-100"
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                        
                        {dropdownOpen === blog.id && (
                          <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1">
                              <button
                                onClick={() => togglePublishStatus(blog.id)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteBlog(blog.id)}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Desktop action buttons */}
                      <div className="hidden sm:flex items-center justify-end space-x-2">
                        <button 
                          onClick={() => togglePublishStatus(blog.id)}
                          className={`p-1 rounded-full ${
                            blog.status === 'published' 
                              ? 'text-gray-600 hover:bg-gray-100' 
                              : 'text-yellow-500 hover:bg-yellow-100'
                          }`}
                          title={blog.status === 'published' ? 'Unpublish' : 'Publish'}
                        >
                          {blog.status === 'published' ? 
                            <EyeOff className="h-4 w-4" /> : 
                            <Eye className="h-4 w-4" />
                          }
                        </button>
                        <button 
                          className="p-1 rounded-full text-blue-600 hover:bg-blue-100"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => deleteBlog(blog.id)}
                          className="p-1 rounded-full text-red-600 hover:bg-red-100"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Simplified for better mobile display */}
        <div className="bg-white px-3 py-3 flex items-center justify-between border-t border-gray-200 rounded-b-lg mt-1">
          <div className="flex-1 flex justify-between items-center">
            <p className="text-sm text-gray-700">
              <span className="font-medium">{filteredBlogs.length}</span> results
            </p>
            <div className="flex space-x-1">
              <button className="relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-3 py-1 border text-sm font-medium rounded-md">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-1 border border-gray-300 bg-white text-sm font-medium rounded-md text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}