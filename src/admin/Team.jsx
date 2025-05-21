import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Upload,
  X,
  Save,
  CheckCircle,
} from "lucide-react";
import team from "../assets/images/person.jpg"; // Placeholder image
const Team = () => {
  // Sample initial data
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Eng. Caleb BYIRINGIRO",
      position: "Managing Director",
      image: team,
      description:
        "Founder of ELECTRICAL SOLUTION COMPANY. Member of Institute of Engineers in Rwanda(IER), RURA, and certified by IEEE. Professional Engineer with a degree in electrical engineering from the University of Rwanda.",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Eng. Marie UWIMANA",
      position: "Technical Director",
      image: team,
      description:
        "Expert in electrical systems with over 10 years of experience. Graduated from the University of Rwanda with a Master's degree in Electrical Engineering. Specialized in power systems and renewable energy solutions.",
      createdAt: "2024-02-10",
      updatedAt: "2024-02-10",
    },
    {
      id: 3,
      name: "Jean-Paul HAKIZIMANA",
      position: "Project Manager",
      image: team,
      description:
        "Experienced project manager with a strong background in electrical engineering projects. Certified PMP with expertise in managing complex electrical installations and coordinating technical teams.",
      createdAt: "2024-03-05",
      updatedAt: "2024-03-05",
    },
  ]);

  // Modal and form states
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // 'create' or 'edit'
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [saveStatus, setSaveStatus] = useState("");

  // Form data
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    image: "",
    description: "",
  });

  // File upload state
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      position: "",
      image: "",
      description: "",
    });
    setSelectedFile(null);
    setImagePreview("");
    setSelectedMember(null);
  };

  // Open create modal
  const openCreateModal = () => {
    resetForm();
    setModalMode("create");
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (member) => {
    setSelectedMember(member);
    setFormData({
      name: member.name,
      position: member.position,
      image: member.image,
      description: member.description,
    });
    setImagePreview(member.image);
    setModalMode("edit");
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    resetForm();
    setSaveStatus("");
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
          setFormData((prev) => ({ ...prev, image: e.target.result }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file");
      }
    }
  };

  // Save team member
  const saveMember = () => {
    if (
      !formData.name.trim() ||
      !formData.position.trim() ||
      !formData.description.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    setSaveStatus("saving");

    setTimeout(() => {
      if (modalMode === "create") {
        const newMember = {
          id: Date.now(),
          name: formData.name,
          position: formData.position,
          image: formData.image || "/api/placeholder/150/150",
          description: formData.description,
          createdAt: new Date().toISOString().split("T")[0],
          updatedAt: new Date().toISOString().split("T")[0],
        };
        setMembers((prev) => [...prev, newMember]);
      } else {
        setMembers((prev) =>
          prev.map((member) =>
            member.id === selectedMember.id
              ? {
                  ...member,
                  name: formData.name,
                  position: formData.position,
                  image: formData.image,
                  description: formData.description,
                  updatedAt: new Date().toISOString().split("T")[0],
                }
              : member
          )
        );
      }

      setSaveStatus("success");
      setTimeout(() => {
        closeModal();
      }, 1000);
    }, 1000);
  };

  // Delete team member
  const deleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setMembers((prev) => prev.filter((member) => member.id !== id));
    }
  };

  // Filter team members
  const filteredMembers = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Team Management
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your company's team members and their profiles
                </p>
              </div>
              <button
                onClick={openCreateModal}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Team Member
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
                    placeholder="Search team members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
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
                    <span className="text-white font-bold text-sm">
                      {members.length}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Team Members
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {members.length}
                    </dd>
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
                      {new Date().getFullYear()}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Current Year
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {new Date().getFullYear()}
                    </dd>
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
                      {members.length > 0
                        ? new Date(
                            Math.max(
                              ...members.map((m) => new Date(m.updatedAt))
                            )
                          ).toLocaleDateString()
                        : "-"}
                    </span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Last Updated
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {members.length > 0
                        ? new Date(
                            Math.max(
                              ...members.map((m) => new Date(m.updatedAt))
                            )
                          ).toLocaleDateString()
                        : "No updates"}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Member
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Added
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMembers.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center">
                        <Search className="h-12 w-12 text-gray-300 mb-4" />
                        <p className="text-lg font-medium">
                          No team members found
                        </p>
                        <p className="text-sm">
                          Try adjusting your search criteria
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            <img
                              className="h-12 w-12 rounded-full object-cover"
                              src={member.image}
                              alt={member.name}
                              onError={(e) => {
                                e.target.src = "/api/placeholder/48/48";
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {member.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {member.position}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-md line-clamp-2">
                          {member.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.createdAt}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => openEditModal(member)}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="Edit"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteMember(member.id)}
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  {modalMode === "create"
                    ? "Add New Team Member"
                    : "Edit Team Member"}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-6 py-4 overflow-y-auto flex-grow">
                <div className="space-y-4">
                  {/* Name and Position in a row on larger screens */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Member Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter member's name"
                      />
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Position *
                      </label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            position: e.target.value,
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter member's position"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter member's description and qualifications"
                    />
                  </div>

                  {/* Image Upload - Horizontal layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {/* Upload Area */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Photo
                      </label>
                      <label className="flex items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="text-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <div className="mt-2 text-sm text-gray-600">
                            <span className="font-medium text-blue-600">
                              Choose file
                            </span>{" "}
                            or drag and drop
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG up to 10MB
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>

                    {/* Preview Area */}
                    <div className="flex items-center justify-center h-32">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-32 w-32 object-cover rounded-lg border border-gray-200"
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-32 w-32 flex items-center justify-center">
                            <p className="text-sm">Preview will appear here</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Save Status */}
                  {saveStatus && (
                    <div className="mt-4">
                      {saveStatus === "saving" && (
                        <div className="flex items-center text-blue-600">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                          Saving...
                        </div>
                      )}
                      {saveStatus === "success" && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Saved successfully!
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  onClick={saveMember}
                  disabled={saveStatus === "saving"}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {saveStatus === "saving" ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      {modalMode === "create"
                        ? "Create Team Member"
                        : "Update Team Member"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
