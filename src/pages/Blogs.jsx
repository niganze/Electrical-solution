import { useState } from "react";
import {
  Search,
  Calendar,
  User,
  Clock,
  Share2,
} from "lucide-react";
import blog1 from "../assets/images/blog1.jpg";
import ai from "../assets/images/ai.jpeg";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React in 2025",
      excerpt:
        "Learn how to build modern applications with React and the latest tools in the ecosystem.",
      author: "Sarah Johnson",
      date: "May 10, 2025",
      readTime: "5 min read",
      category: "Development",
      image: ai,
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends in web development and how they will shape the industry.",
      author: "Michael Chen",
      date: "May 7, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: blog1,
    },
    {
      id: 3,
      title: "Designing for Accessibility",
      excerpt:
        "Best practices for creating inclusive web experiences that everyone can use.",
      author: "Alex Rodriguez",
      date: "May 3, 2025",
      readTime: "6 min read",
      category: "Design",
      image: blog1,
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn best practices for creating robust and scalable backend services.",
      author: "David Wilson",
      date: "April 28, 2025",
      readTime: "7 min read",
      category: "Development",
      image: ai,
    },
    {
      id: 5,
      title: "Digital Marketing Strategies for 2025",
      excerpt:
        "Effective marketing strategies to grow your business in the digital age.",
      author: "Emma Thompson",
      date: "April 25, 2025",
      readTime: "6 min read",
      category: "Business",
      image: blog1,
    },
    {
      id: 6,
      title: "Work-Life Balance in Tech",
      excerpt:
        "Tips for maintaining a healthy balance between work and personal life in the tech industry.",
      author: "James Brown",
      date: "April 20, 2025",
      readTime: "5 min read",
      category: "Lifestyle",
      image: ai,
    },
  ];

  // Categories for sidebar with proper counts
  const categories = [
    { name: "All", count: blogs.length },
    {
      name: "Development",
      count: blogs.filter((blog) => blog.category === "Development").length,
    },
    {
      name: "Design",
      count: blogs.filter((blog) => blog.category === "Design").length,
    },
    {
      name: "Technology",
      count: blogs.filter((blog) => blog.category === "Technology").length,
    },
    {
      name: "Business",
      count: blogs.filter((blog) => blog.category === "Business").length,
    },
    {
      name: "Lifestyle",
      count: blogs.filter((blog) => blog.category === "Lifestyle").length,
    },
  ];

  // Filter blogs based on search term and active category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Handle category selection
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Function to handle category click without triggering the blog card navigation
  const handleCategoryClick = (e, category) => {
    e.stopPropagation(); // Stop event propagation
    setActiveCategory(category);
  };

  // Function to handle share button click without triggering the blog card navigation
  const handleShareClick = (e) => {
    e.stopPropagation(); // Stop event propagation
    // Add your share functionality here
  };

  return (
    <div>
      {/* Hero Section - Reduced vertical spacing */}
      <div className="bg-gradient-to-r from-gray-900 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-16 md:py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-xl font-bold py-12">Insights & Ideas</h1>
            <p className="text-sm text-blue-100 mb-8">
              Discover the latest trends, innovations, and best practices in
              technology, design, and business from our expert team.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full rounded-full border-0 py-2 pl-10 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search size={16} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.slice(0, 5).map((category, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-xs transition"
                  onClick={() => handleCategoryChange(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Reduced vertical spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Reduced padding */}
          <div className="lg:w-1/4">
            <div className="bg-gray-100 rounded-xl p-4 mb-4 sticky top-6">
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-1">
                    <button
                      className={`flex items-center justify-between w-full py-1 px-2 rounded-lg transition ${
                        activeCategory === category.name
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => handleCategoryChange(category.name)}
                    >
                      <span>{category.name}</span>
                      <span
                        className={`rounded-full text-xs py-0.5 px-2 ${
                          activeCategory === category.name
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sticky top-64">
              <h3 className="text-sm font-semibold mb-2">
                Subscribe to Newsletter
              </h3>
              <p className="text-gray-600 mb-3 text-xs">
                Get the latest articles and resources delivered straight to your
                inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full mb-2 rounded-lg border border-gray-300 py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 text-sm rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Blog Posts - Reduced vertical spacing */}
          <div className="lg:w-3/4">
            {/* Active filters display */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-gray-900 mr-3">
                  {activeCategory === "All" ? "All Posts" : activeCategory}
                </h2>
                {activeCategory !== "All" && (
                  <button
                    onClick={() => setActiveCategory("All")}
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    Clear filter
                  </button>
                )}
              </div>
              <div className="text-gray-500 text-xs">
                Showing {filteredBlogs.length}{" "}
                {filteredBlogs.length === 1 ? "post" : "posts"}
              </div>
            </div>

            {filteredBlogs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog) => (
                  <a
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
                  >
                    <div className="relative">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-blue-600 mb-1">
                        <button
                          onClick={(e) => handleCategoryClick(e, blog.category)}
                          className="hover:underline"
                        >
                          {blog.category}
                        </button>
                      </div>
                      <h3 className="text-base font-bold mb-1.5 hover:text-blue-600 transition">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <User size={14} className="mr-1" />
                        <span className="mr-3">{blog.author}</span>
                        <Calendar size={14} className="mr-1" />
                        <span className="mr-3">{blog.date}</span>
                        <Clock size={14} className="mr-1" />
                        <span>{blog.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between border-t pt-3">
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-xl">
                <h3 className="text-base font-medium text-gray-900 mb-1">
                  No articles found
                </h3>
                <p className="text-sm text-gray-600">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                  className="mt-3 text-sm text-blue-600 hover:text-blue-800"
                >
                  View all articles
                </button>
              </div>
            )}

            {/* Pagination - Reduced size */}
            {filteredBlogs.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-1.5">
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-blue-600 text-white">
                    1
                  </button>
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    2
                  </button>
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    3
                  </button>
                  <span className="px-2 py-1.5 text-xs">...</span>
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    8
                  </button>
                  <button className="px-2.5 py-1.5 text-xs rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}