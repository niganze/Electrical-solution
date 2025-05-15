import { useState } from "react";
import { X } from "lucide-react";
import person from "../assets/images/person.jpg";

const TeamMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Eng. Caleb BYIRINGIRO",
      position: "Managing Director",
      image: person,
      description: "Founder of ELECTRICAL SOLUTION COMPANY. Member of Institute of Engineers in Rwanda(IER), RURA, and certified by IEEE. Professional Engineer with a degree in electrical engineering from the University of Rwanda."
    },
    {
      name: "Eng. Thacien NSABIMANA",
      position: "Operations Manager",
      image: person,
      quote: "Alone we can do so little; together we can do so much.",
      description: "Operations Manager since 2023. Holds a bachelor's degree in Electrical Engineering from the University of Rwanda. Dedicated professional who grew with the company since its early days."
    },
    {
      name: "Dr. Jean De Pierre NAMAHORO",
      position: "DAF",
      image: person,
      quote: "No one can change a person, but someone can be a person's reason to change.",
      description: "DAF since 2020 with extensive experience in Finance. Previously worked as a researcher in Finance. Holds Doctorate Degree in Finance from China University of Geosciences."
    },
    {
      name: "Eng. Diane UWIMANA",
      position: "MEP Engineer",
      image: person,
      quote: "We understand that customers do not know how much we know until they know how much we care.",
      description: "Passionate about solving complex problems and contributing to efficient, sustainable systems. Values respect, collaboration, and technical expertise."
    },
    {
      name: "Dr. Jean De Pierre NAMAHORO",
      position: "DAF",
      image: person,
      quote: "No one can change a person, but someone can be a person's reason to change.",
      description: "DAF since 2020 with extensive experience in Finance. Previously worked as a researcher in Finance. Holds Doctorate Degree in Finance from China University of Geosciences."
    },
    {
      name: "Dr. Jean De Pierre NAMAHORO",
      position: "DAF",
      image: person,
      quote: "No one can change a person, but someone can be a person's reason to change.",
      description: "DAF since 2020 with extensive experience in Finance. Previously worked as a researcher in Finance. Holds Doctorate Degree in Finance from China University of Geosciences."
    },
    {
      name: "Dr. Jean De Pierre NAMAHORO",
      position: "DAF",
      image: person,
      quote: "No one can change a person, but someone can be a person's reason to change.",
      description: "DAF since 2020 with extensive experience in Finance. Previously worked as a researcher in Finance. Holds Doctorate Degree in Finance from China University of Geosciences."
    },
    {
      name: "Dr. Jean De Pierre NAMAHORO",
      position: "DAF",
      image: person,
      quote: "No one can change a person, but someone can be a person's reason to change.",
      description: "DAF since 2020 with extensive experience in Finance. Previously worked as a researcher in Finance. Holds Doctorate Degree in Finance from China University of Geosciences."
    },
    
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 lg:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Team</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          This company is built on a foundation of integrity, excellence, and a commitment to serving others. 
          We have a very experienced team including professional Engineers with all professional certificates 
          on national and international level.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group cursor-pointer"
            onClick={() => openModal(member)}
          >
            <div className="overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="text-sm font-bold text-blue-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-2 text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden max-h-[85vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            {/* <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-opacity-100 transition-all"
            >
              <X size={20} className="text-gray-700" />
            </button> */}
            
            {/* Content container */}
            <div className="flex flex-col md:flex-row max-h-full overflow-y-auto">
              {/* Left side - Image */}
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-600 p-6 flex flex-col items-center justify-center">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-white text-sm font-bold mt-4 text-center">{selectedMember.name}</h3>
                <p className="text-blue-100 text-sm text-center">{selectedMember.position}</p>
              </div>
              
              {/* Right side - Content */}
              <div className="md:w-2/3 p-6 flex flex-col">
                {selectedMember.quote && (
                  <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-l-4 border-blue-400">
                    <p className="text-gray-700 italic text-sm">"{selectedMember.quote}"</p>
                  </div>
                )}
                
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-8 h-1 bg-yellow-500 mr-3 rounded"></span>
                    About
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedMember.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    onClick={closeModal}
                    className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;