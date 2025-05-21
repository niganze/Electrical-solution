import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  FileText, 
  Grid,
  Plus,
  X,
  Image
} from 'lucide-react';
import { Editor } from "primereact/editor";
import axios from 'axios';

const CreateProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [featureImage, setFeatureImage] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [scopeItems, setScopeItems] = useState(['']);
  const [newScopeItem, setNewScopeItem] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [fetchingProject, setFetchingProject] = useState(isEditMode);

  const { 
    register, 
    handleSubmit, 
    control,
    reset,
    setValue,
    formState: { errors } 
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      location: "",
      client_name: "",
      fullDescription: ""
    }
  });

  useEffect(() => {
    if (isEditMode) {
      const fetchProjectData = async () => {
        try {
          setFetchingProject(true);
          const response = await axios.get(`https://api.we-mep.rw/api/projects/${id}`);
          const project = response.data;

          setValue('name', project.name);
          setValue('category', project.category);
          setValue('location', project.location);
          setValue('client_name', project.client_name);
          setValue('fullDescription', project.fullDescription);

          if (project.scopeOfWork && Array.isArray(project.scopeOfWork)) {
            setScopeItems(project.scopeOfWork);
          } else if (project.scopeOfWork && typeof project.scopeOfWork === 'string') {
            try {
              const parsedScope = JSON.parse(project.scopeOfWork);
              setScopeItems(Array.isArray(parsedScope) ? parsedScope : ['']);
            } catch (e) {
              setScopeItems([project.scopeOfWork]);
            }
          }

          if (project.image) {
            setFeatureImage({ file: null, preview: project.image, existing: true });
          }

          if (project.galleryImages && Array.isArray(project.galleryImages)) {
            const existingImages = project.galleryImages.map(img => ({
              file: null,
              preview: img,
              existing: true
            }));
            setPreviewImages(existingImages);
          }

        } catch (error) {
          let errorMessage = 'Failed to load project data.';
          if (error.response) {
            errorMessage = error.response.data?.message || `Server error: ${error.response.status} - ${error.response.statusText}`;
          } else if (error.request) {
            errorMessage = 'No response received from server. Please check your network connection.';
          } else {
            errorMessage = error.message || 'An unknown error occurred';
          }
          setSubmitStatus({ type: 'error', message: errorMessage });
        } finally {
          setFetchingProject(false);
        }
      };
      fetchProjectData();
    }
  }, [id, isEditMode, setValue]);

  const handleFeatureImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeatureImage({ file: file, preview: reader.result, existing: false });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = [...previewImages];
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push({ file: file, preview: reader.result, existing: false });
          setPreviewImages([...newPreviews]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeFeatureImage = () => setFeatureImage(null);
  const removeGalleryImage = (index) => {
    const updatedPreviews = [...previewImages];
    updatedPreviews.splice(index, 1);
    setPreviewImages(updatedPreviews);
  };

  const addScopeItem = () => {
    if (newScopeItem.trim() !== '') {
      setScopeItems([...scopeItems, newScopeItem]);
      setNewScopeItem('');
    }
  };
  const removeScopeItem = (index) => {
    const updatedScopeItems = [...scopeItems];
    updatedScopeItems.splice(index, 1);
    setScopeItems(updatedScopeItems);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('location', data.location);
      formData.append('client_name', data.client_name);
      formData.append('fullDescription', data.fullDescription);

      const filteredScopeItems = scopeItems.filter(item => item.trim() !== '');
      formData.append('scopeOfWork', JSON.stringify(filteredScopeItems));

      if (featureImage?.file) {
        formData.append('image', featureImage.file);
      }

      if (previewImages.length > 0) {
        previewImages.forEach((img) => {
          if (!img.existing && img.file) {
            formData.append('galleryImages', img.file);
          }
        });
      }

      if (isEditMode) {
        const existingGalleryUrls = previewImages.filter(img => img.existing).map(img => img.preview);
        if (existingGalleryUrls.length > 0) {
          formData.append('existingGalleryImages', JSON.stringify(existingGalleryUrls));
        }
        formData.append('keepExistingImage', featureImage && featureImage.existing ? 'true' : 'false');
      }

      const url = isEditMode 
        ? `https://api.we-mep.rw/api/projects/${id}` 
        : 'https://api.we-mep.rw/api/projects';
      const method = isEditMode ? 'PUT' : 'POST';

      const response = await axios({
        method: method,
        url: url,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSubmitStatus({
        type: 'success',
        message: `Project ${isEditMode ? 'updated' : 'created'} successfully!`
      });

      setTimeout(() => {
        navigate('/dashboard/projects');
      }, 2000);

    } catch (error) {
      let errorMessage = `Failed to ${isEditMode ? 'update' : 'create'} project.`;
      if (error.response) {
        errorMessage = error.response.data?.message || `Server error: ${error.response.status} - ${error.response.statusText}`;
      } else if (error.request) {
        errorMessage = 'No response received from server. Please check your network connection.';
      } else {
        errorMessage = error.message || 'An unknown error occurred';
      }
      setSubmitStatus({ type: 'error', message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  if (fetchingProject) {
    return (
      <div className="container mx-auto px-4 py-6 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          {isEditMode ? 'Edit Project' : 'Create New Project'}
        </h2>

        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className="mb-4">

            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText className="mr-2 text-gray-500" size={16} />
              client Name
            </label>
            <input
              type="text"
              {...register('client_name', { required: 'Client name is required' })}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.client_name && (
              <p className="text-red-500 text-sm mt-1">{errors.client_name.message}</p>
            )}
          </div>
          {/* Project Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText className="mr-2 text-gray-500" size={16} />
              Project Name
            </label>
            <input 
              {...register("name", { required: "Project name is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter project name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Project Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Grid className="mr-2 text-gray-500" size={16} />
              Project Category
            </label>
            <select 
              {...register("category", { required: "Category is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Government office">Government Office</option>
              <option value="Commercial">Commercial</option>
              <option value="Apartments">Apartments</option>
              <option value="Industrial">Industrial</option>
              <option value="Maintanance">Maintanance</option>
              <option value="Design&built">Design&built</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Aviation">Aviation</option>
            
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <MapPin className="mr-2 text-gray-500" size={16} />
              Project Location
            </label>
            <input 
              {...register("location", { required: "Location is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter project location"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Feature Image (Main Project Image) */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Image className="mr-2 text-gray-500" size={16} />
              Main Project Image {isEditMode && featureImage?.existing && "(Current image shown below)"}
            </label>
            <input 
              type="file"
              accept="image/*"
              onChange={handleFeatureImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm file:mr-2 file:px-2 file:py-1 file:text-xs file:bg-gray-100 file:border-0 file:rounded"
            />
            
            {featureImage && (
              <div className="mt-2 relative group">
                <img 
                  src={featureImage.preview} 
                  alt="Main Project Image" 
                  className="h-40 w-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={removeFeatureImage}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={16} />
                </button>
                {featureImage.existing && (
                  <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Current Image
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Scope of Works (Array) */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText className="mr-2 text-gray-500" size={16} />
              Scope of Works
            </label>
            
            <div className="space-y-2 mb-2">
              {scopeItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  {index === 0 && item === '' ? (
                    <input
                      value={item}
                      onChange={(e) => {
                        const updated = [...scopeItems];
                        updated[index] = e.target.value;
                        setScopeItems(updated);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Add scope item"
                    />
                  ) : (
                    <>
                      <div className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50">
                        {item}
                      </div>
                      <button 
                        type="button" 
                        onClick={() => removeScopeItem(index)}
                        className="ml-2 p-1 text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex">
              <input
                value={newScopeItem}
                onChange={(e) => setNewScopeItem(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Add new scope item"
              />
              <button
                type="button"
                onClick={addScopeItem}
                className="bg-blue-500 text-white px-3 py-2 rounded-r-md hover:bg-blue-600"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Full Description with Rich Text Editor */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText className="mr-2 text-gray-500" size={16} />
              Full Description
            </label>
            <Controller
              name="fullDescription"
              control={control}
              rules={{ required: "Full description is required" }}
              render={({ field }) => (
                <Editor 
                  value={field.value} 
                  onTextChange={(e) => field.onChange(e.htmlValue)}
                  style={{ height: '320px' }}
                  className="border border-gray-300 rounded-md"
                />
              )}
            />
            {errors.fullDescription && (
              <p className="text-red-500 text-xs mt-1">{errors.fullDescription.message}</p>
            )}
          </div>

          {/* Gallery Images (Array) */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FileText className="mr-2 text-gray-500" size={16} />
              Gallery Images {isEditMode && previewImages.some(img => img.existing) && "(Current images shown below)"}
            </label>
            <input 
              type="file"
              multiple
              accept="image/*"
              onChange={handleGalleryImagesUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm file:mr-2 file:px-2 file:py-1 file:text-xs file:bg-gray-100 file:border-0 file:rounded"
            />
            
            {previewImages.length > 0 && (
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {previewImages.map((img, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={img.preview} 
                      alt={`Gallery Image ${index + 1}`} 
                      className="h-24 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                    {img.existing && (
                      <span className="absolute bottom-1 right-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                        Current
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${
                isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
              } text-white py-2 rounded-md text-sm transition-colors`}
            >
              {isLoading 
                ? isEditMode ? 'Updating Project...' : 'Creating Project...' 
                : isEditMode ? 'Update Project' : 'Create Project'
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;