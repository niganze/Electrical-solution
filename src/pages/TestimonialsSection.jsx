import { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion,  } from "framer-motion";
import person from "../assets/images/person.jpg"; 

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Innovations Ltd",
      text: "Working with this team was a game-changer for our project. Their expertise and attention to detail ensured everything ran smoothly from start to finish.",
      rating: 5,
      image: person, // Placeholder image
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Director",
      company: "Global Solutions Inc",
      text: "The level of professionalism and technical knowledge displayed by the team was exceptional. They delivered exactly what we needed, on time and within budget.",
      rating: 5,
      image: person, // Placeholder image
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "CEO",
      company: "Bright Future Energy",
      text: "I've worked with many contractors over the years, but this team stands out for their reliability and quality of work. They're now our go-to for all projects.",
      rating: 5,
      image: person, // Placeholder image
    },
    {
      id: 4,
      name: "Robert Taylor",
      role: "Facilities Manager",
      company: "Landmark Properties",
      text: "Their attention to safety standards while maintaining efficiency was impressive. The team was communicative throughout and addressed all our concerns.",
      rating: 4,
      image: person, 
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Director of Engineering",
      company: "Innovative Structures",
      text: "The team's creative approach to solving our complex electrical requirements saved us both time and resources. Truly outstanding service.",
      rating: 5,
      image: person, // Placeholder image
    }
  ];

  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Calculate visible testimonials based on active index and cards per view
  const getVisibleTestimonials = () => {
    const startIdx = activeIndex * cardsPerView;
    return testimonials.slice(startIdx, startIdx + cardsPerView);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-900 text-white relative overflow-hidden">
      {/* Background animated shapes */}
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500 opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl md:text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say About Us
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-base text-blue-100 max-w-3xl mx-auto md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Customer satisfaction is not just a goal; it's the foundation of our success.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={20} />
            </motion.button>
          </div>
          
          <div className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonials"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>

          {/* Testimonial cards */}
          <div className="overflow-hidden py-8">
            <motion.div 
              className="flex gap-6"
              initial={false}
              animate={{ x: `calc(-${activeIndex * 100}% / ${totalPages})` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? "w-10 bg-yellow-400" 
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-full flex flex-col relative overflow-hidden border border-white/10 shadow-xl"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Quote icon */}
      <motion.div 
        className="absolute -top-2 -right-2 text-white/10"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 15 }}
      >
        <Quote size={80} />
      </motion.div>
      
      {/* Content */}
      <div className="flex-grow mb-6 relative z-10">
        {/* Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18}
              className={`${
                i < testimonial.rating 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        {/* Testimonial text */}
        <p className="text-blue-100 italic mb-6">"{testimonial.text}"</p>
      </div>
      
      {/* Author info */}
      <div className="flex items-center mt-auto relative z-10">
        <motion.img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          whileHover={{ scale: 1.1, rotate: 10 }}
        />
        
        <div className="ml-4">
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-blue-200 text-sm">{testimonial.role}</p>
          <p className="text-yellow-400 text-sm font-medium">{testimonial.company}</p>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400" />
    </motion.div>
  );
};

export default TestimonialsSection;