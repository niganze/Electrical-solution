import { useState, useEffect } from "react";
import {
  Users,
  Award,
  Building,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// Import images
import HERO from "../assets/images/amarembo.jpeg";
import IRCAD from "../assets/images/IRCAD.jpg";
import Amarembo from "../assets/images/amarembo.jpeg";
import Myhill from "../assets/images/Myhill.jpg";
import MAGERWA from "../assets/images/Magerwa.jpg";

import logo1 from "../assets/clientlogo/bona.jpg";
import logo2 from "../assets/clientlogo/cable.jpg";
import logo3 from "../assets/clientlogo/decent.png";
import logo4 from "../assets/clientlogo/edcl.png";
import logo5 from "../assets/clientlogo/education.jpg";
import logo7 from "../assets/clientlogo/ircad.png";
import logo8 from "../assets/clientlogo/logo-rha.png";
import logo9 from "../assets/clientlogo/logo.jpg";
import logo10 from "../assets/clientlogo/Schneider.png";
import logo11 from "../assets/clientlogo/touch.png";
import ServicesSection from "./ServicesSection";
import MepCalculation from "./MepCalculation";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
  };

  const projects = [
    {
      title: "IRCAD Africa Hospital",
      location: "Masaka, Kicukiro District",
      category: "Healthcare Facility",
      image: IRCAD,
      description:
        "State-of-the-art medical facility with advanced MEP systems",
    },
    {
      title: "Amarembo Hotel",
      location: "Musanze District",
      category: "Hospitality",
      image: Amarembo,
      description:
        "Luxury eco-friendly hotel with sustainable engineering solutions",
    },
    {
      title: "Myhill Ecolodge",
      location: "Northern Province",
      category: "Green Building",
      image: Myhill,
      description:
        "Award-winning sustainable lodge with energy-efficient systems",
    },
    {
      title: "MAGERWA Facilities",
      location: "Multiple Locations",
      category: "Commercial",
      image: MAGERWA,
      description:
        "Large-scale warehouse facilities with optimized MEP infrastructure",
    },
  ];

  const heroSlides = [
    {
      title: "Engineering Excellence",
      subtitle: "for Rwanda's Future",
      description: "Your trusted partner in advanced MEP engineering solutions",
      image: HERO,
    },
    {
      title: "Sustainable Solutions",
      subtitle: "Green Building Experts",
      description: "LEED™ & RwGBO certified green building consultancy",
      image: IRCAD,
    },
    {
      title: "24/7 Support",
      subtitle: "Always Here for You",
      description: "Round-the-clock technical support and maintenance",
      image: Amarembo,
    },
  ];

  const clientLogos = [
    { src: logo1, alt: "Client Logo 1" },
    { src: logo2, alt: "Client Logo 2" },
    { src: logo3, alt: "Client Logo 3" },
    { src: logo4, alt: "Client Logo 4" },
    { src: logo5, alt: "Client Logo 5" },
    { src: logo7, alt: "Client Logo 7" },
    { src: logo8, alt: "Client Logo 8" },
    { src: logo9, alt: "Client Logo 9" },
    { src: logo10, alt: "Client Logo 9" },
    { src: logo11, alt: "Client Logo 9" },
  ];

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Modern Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden h-screen">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      index === activeHeroSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{
                      display: index === activeHeroSlide ? "block" : "none",
                    }}
                  >
                    <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
                      {slide.title}{" "}
                      <span className="text-yellow-500">{slide.subtitle}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8">
                      {slide.description}
                    </p>
                  </div>
                ))}

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button
                    className="px-6 py-3 bg-yellow-500 text-blue-900 rounded-full font-medium hover:bg-yellow-400 transition-all"
                    onClick={() => {
                      document
                        .getElementById("mission")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white hover:text-blue-900 transition-all"
                    onClick={() => {
                      document
                        .getElementById("calculotor")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Estimate Your MEP Project
                  </button>
                </div>

                {/* Slider Dots */}
                <div className="flex gap-2 mt-8 justify-center md:justify-start">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveHeroSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeHeroSlide
                          ? "w-8 bg-yellow-500"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {[
                  {
                    value: 9,
                    label: "Years Active",
                    icon: <Clock className="w-6 h-6" />,
                  },
                  {
                    value: 70,
                    label: "Projects",
                    icon: <Building className="w-6 h-6" />,
                  },
                  {
                    value: 50,
                    label: "Clients",
                    icon: <Users className="w-6 h-6" />,
                  },
                  {
                    value: 98,
                    label: "Satisfaction",
                    icon: <Award className="w-6 h-6" />,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
                  >
                    <div className="text-yellow-500 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">
                      {useCounter(stat.value)}+
                    </div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mission and Vision Section - Medium Size */}
      <section id="mission" className="py-12 bg-white relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header with fade-in animation */}
          <div className="text-center mb-10 animate-fade-in-up">
            <h2 className="text-xl font-semibold text-yellow-500 mb-2">
              Mission & Vision
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-sm mb-4">
              Building excellence with integrity, innovation, and precision. We
              are committed to delivering high-quality construction solutions
              that exceed expectations, ensuring safety, sustainability, and
              lasting value.
            </p>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Mission Card */}
            <div className="group relative animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                {/* Icon with rotation animation */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To position ELECTRICAL SOLUTION COMPANY Engineering as the
                  leading provider of MEP engineering services that meet
                  customer expectations and pass professional standards.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative animate-fade-in-right animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                {/* Icon with rotation animation */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To provide an advanced smart and green Mechanical, Electrical
                  and Plumbing engineering services (MEP) tailored with clients’
                  needs and excellent quality, driven by passion, expertise and
                  team work.
                </p>
              </div>
            </div>
          </div>

          {/* Stats with count-up animation */}
          <div className="flex justify-center items-center gap-8 animate-fade-in-up animation-delay-400 cursor-pointer">
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                <span className="animate-count-up">15</span>+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                Years
              </div>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                <span className="animate-count-up">500</span>+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="w-8 h-px bg-gray-300"></div>
            <div className="text-center group">
              <div className="text-2xl font-bold text-gray-900 group-hover:text-purple-500 transition-colors duration-300">
                <span className="animate-count-up">100</span>%
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <MepCalculation />

      {/* Modern Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-1 bg-yellow-500 mr-4"></div>
              <span className="text-yellow-600 font-semibold">Portfolio</span>
              <div className="w-16 h-1 bg-yellow-500 ml-4"></div>
            </div>
            <h2 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
              Our Landmark Projects
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">
              From design to installation, we deliver end-to-end engineering
              services that meet international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-yellow-600 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-blue-900 mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Testimonials Slider */}
      <TestimonialsSection />

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-yellow-600 font-medium text-xs uppercase tracking-widest mb-3">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Partners / Clients
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
              Our partners help us innovate, grow, and deliver exceptional
              results.
            </p>
          </div>

          {/* Modern logo grid with hover effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-50"
              >
                <div className="flex justify-center items-center h-16">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-auto h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                {/* Subtle accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            ))}
          </div>

          {/* Optional: Add client counter or stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-blue-900">50+</span>
                <span>Happy Clients</span>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-yellow-500">100%</span>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-yellow-500 mr-4"></div>
                <span className="text-yellow-600 font-semibold">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-2xl md:text-2xl font-bold text-blue-900 mb-6">
                Let's Build Your <span className="text-yellow-500">Vision</span>
              </h2>

              <p className="text-sm text-gray-600 mb-8">
                Ready to start your next MEP project? Contact us today for a
                free consultation and quote. Our team of experts is ready to
                help you bring your project to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-50 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Call Us</div>
                    <a
                      href="tel:+250786176444"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +250 786 176 444
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-blue-50 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Email Us</div>
                    <a
                      href="mailto:info@electricalsolutionco.rw"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      info@electricalsolutionco.rw
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-green-50 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Visit Us</div>
                    <p className="text-gray-600">
                      Gisozi - ADARWA Building - KG 33 AVE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <form className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-6">
                  <label className="block text-blue-900 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="your name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-blue-900 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="youremail@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-blue-900 font-semibold mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none">
                    <option>Select a service</option>
                    <option>MEP Design</option>
                    <option>Electrical Installation</option>
                    <option>HVAC Systems</option>
                    <option>Green Building Consultancy</option>
                    <option>Energy Audit</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-blue-900 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-500 text-blue-900 rounded-lg font-bold transform transition-all hover:bg-yellow-400 hover:scale-105"
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
