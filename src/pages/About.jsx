import React from 'react';
import { BarChart3, Users, Calendar, Award, Shield, Wrench, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import AboutUsImage from '../assets/images/about.jpg';

import TeamMembers from './TeamMembers';

export default function About() {

  
  // Timeline data for company journey
  const journeyTimeline = [
    {
      year: 2016,
      title: "Electrical Solution Launch",
      description: "Launched with Mechanical, Electrical and Plumbing (MEP) design, Installation and supervision as a service."
    },
    {
      year: 2017,
      title: "First Projects",
      description: "Successfully completed 15 MEP Design Projects."
    },
    {
      year: 2018,
      title: "Growth",
      description: "Successfully completed more than 20 MEP Design Projects."
    },
    {
      year: 2019,
      title: "First Installations",
      description: "Completed Electrical Installation of a Residential House in Kamonyi District- Ruyenzi, Gihara and more than 20 MEP Design Projects."
    },
    {
      year: 2021,
      title: "Pandemic Resilience",
      description: "Despite COVID19, continued Design Projects remotely as team worked from home."
    },
    {
      year: 2022,
      title: "Project Milestone",
      description: "More than 20 MEP Design Projects successfully completed and one Power System Project completed."
    },
    {
      year: 2023,
      title: "International Partnership",
      description: "Successfully completed Electrical System Supply and Installation works at AMAREMBO By Touch Down Africa, a South African company."
    },
    {
      year: 2024,
      title: "Service Expansion",
      description: "Expanded into Energy Audit, Reporting and Certification, facilities management, and Green building Consultancy. Signed cooperation agreement with EDCL to deliver Energy Systems in Rwanda."
    }
  ];

  

  // Company values
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We conduct business with honesty and transparency, treating every customer, employee, and partner with respect."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, delivering quality solutions that exceed expectations."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Teamwork",
      description: "Our success comes from collaboration, supporting each other to achieve common goals with a shared vision."
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Expertise",
      description: "Our team of professional engineers brings deep knowledge and experience to every project."
    }
  ];

  // Services offered
  const services = [
    "MEP design, Supervision and Construction",
    "HVAC systems",
    "Fire & Safety works",
    "Electrical systems",
    "Plumbing services",
    "Energy Audit, Certification and Reporting",
    "Green Building consultancy",
    "Facility management",
    "Power Systems"
  ];

  return (
    <div className="bg-white">
    
      {/* Hero Section - Updated with gray-900 */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        
        {/* Floating shapes animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float-medium"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-float-fast"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(180deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Main content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 lg:py-20 z-10">
          <div className="space-y-6">
            <h1 className="text-xl lg:text-xl font-bold mb-4 animate-slide-up">
              <span className="inline-block animate-text-reveal">About</span>{' '}
              <span className="inline-block animate-text-reveal-delay bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">ELECSOL</span>
            </h1>
            <p className="text-sm lg:text-sm max-w-3xl mb-6 animate-fade-in-up text-gray-300">
              Your Well-rounded MEP Solutions Partner on a mission to exceed expectations.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay">
              <a href="#mission" className="group relative bg-white text-gray-900 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-2.5 px-5 rounded-lg font-medium overflow-hidden">
                <span className="relative z-10">Our Mission</span>
                <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#team" className="group relative bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white py-2.5 px-5 rounded-lg font-medium overflow-hidden">
                <span className="relative z-10">Meet Our Team</span>
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path className="animate-wave" d="M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24 L1440,48 L0,48 Z"></path>
          </svg>
        </div>
      </div>


      {/* Company Overview */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative group">
              <div className="bg-yellow-400 absolute -top-3 -left-3 w-full h-full rounded-lg transform group-hover:scale-105 transition-transform duration-300"></div>
              <img 
                src={AboutUsImage} 
                alt="ELECSOL Office" 
                className="relative z-10 rounded-lg shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Who We Are</h2>
            
            <p className="text-gray-700 mb-3 text-sm leading-relaxed">
              Electrical Solution Company is a leading provider of engineering services specializing in Mechanical, 
              Electrical, and Plumbing (MEP) systems since 2016. We leverage our expertise to design, engineer, 
              supervise, and install advanced MEP systems that not only enhance building functionality but also 
              create efficient, sustainable environments for occupants.
            </p>
            <p className="text-gray-700 mb-5 text-sm leading-relaxed">
              Our comprehensive suite of services includes HVAC systems, Fire and Safety solutions, Electrical and 
              Plumbing works, Energy Audits and Certifications, as well as Facilities Management. Additionally, we 
              offer Green Building Consultancy with LEED™ and RwGBO-accredited professionals to ensure sustainable, 
              innovative solutions for your projects.
            </p>
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center group hover:translate-x-1 transition-transform">
                <div className="bg-blue-100 p-2.5 rounded-full mr-2.5 group-hover:bg-yellow-400 transition-colors">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Established</div>
                  <div className="font-semibold text-sm">Since 2016</div>
                </div>
              </div>
              <div className="flex items-center group hover:translate-x-1 transition-transform">
                <div className="bg-blue-100 p-2.5 rounded-full mr-2.5 group-hover:bg-yellow-400 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Projects</div>
                  <div className="font-semibold text-sm">70+ Completed</div>
                </div>
              </div>
              <div className="flex items-center group hover:translate-x-1 transition-transform">
                <div className="bg-blue-100 p-2.5 rounded-full mr-2.5 group-hover:bg-yellow-400 transition-colors">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Team</div>
                  <div className="font-semibold text-sm">Professional Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div id="mission" className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Building excellence with integrity, innovation, and precision. We are committed to delivering high-quality 
              construction solutions that exceed expectations, ensuring safety, sustainability, and lasting value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2.5 rounded-full mr-3 hover:bg-yellow-400 transition-colors">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                To provide an advanced smart and green Mechanical, Electrical and Plumbing engineering 
                services (MEP) tailored with clients' needs and excellent quality, driven by passion, 
                expertise and team work.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2.5 rounded-full mr-3 hover:bg-yellow-400 transition-colors">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                To position ELECTRICAL SOLUTION COMPANY Engineering as the leading provider of MEP engineering 
                services that meet customer expectations and pass professional standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 lg:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Core Values</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Our success stems from a deep commitment to providing engineering solutions 
            that are tailored to meet our clients' unique needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:translate-y-[-2px] hover:border-yellow-400 transition-all duration-300 group">
              <div className="mb-3 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
              <p className="text-gray-700 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What We Do</h2>
             
              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                We connect expertise in Mechanical, Electrical and Plumbing works, to engineer, design, 
                supervise and install MEP systems that bring buildings to life and create a delightful 
                environment for occupants and are efficient with resources, since 2016.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start group hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 group-hover:text-yellow-500 transition-colors" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <a href="/services" className="inline-flex items-center text-blue-600 font-semibold mt-6 hover:text-yellow-500 hover:translate-x-1 transition-all">
                Learn more about our services <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transition-shadow duration-300">
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/vNQNO8sqXtw?autoplay=1&mute=1"
                  title="Construction Services Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <TeamMembers/>

      {/* Company Journey */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Since our founding in 2016, we've grown consistently by delivering excellence in every project.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-10">
              {journeyTimeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 flex md:justify-end items-center">
                    <div className={`bg-white p-5 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'} relative w-full md:w-4/5`}>
                      <div className="bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-2 hover:bg-yellow-500 transition-colors">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-1.5">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:flex justify-center relative">
                    <div className="absolute top-5 transform -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-3 border-blue-100 hover:bg-yellow-500 transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Quote - Modern Floating Card (Medium Size) */}
<div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 lg:py-14 overflow-hidden">
  {/* Abstract Background Elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-400"></div>
    <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-blue-400"></div>
    <div className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-blue-300 -translate-x-1/2 -translate-y-1/2"></div>
  </div>
  
  <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
    <div className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-lg border border-white/20">
      <svg className="w-10 h-10 mx-auto mb-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-xl lg:text-2xl font-light leading-relaxed">
        "Customer satisfaction is not just a goal; it's the foundation of our success."
      </p>
      <div className="mt-4 flex items-center justify-center">
        <div className="h-px w-8 bg-yellow-400"></div>
        <p className="mx-3 text-xs text-yellow-300 font-medium">OUR PHILOSOPHY</p>
        <div className="h-px w-8 bg-yellow-400"></div>
      </div>
    </div>
  </div>
</div>

{/* Contact CTA - Modern with Background Image (Medium Size) */}
<div className="relative py-12 lg:py-16 overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 mix-blend-multiply"
      style={{
        backgroundImage: `url(${AboutUsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  </div>
  
  <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
      {/* Left Side - Text Content with improved visibility */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg shadow-black">
          Ready to transform your electrical systems?
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mb-4 shadow-md"></div>
        <p className="text-base text-white mb-6 drop-shadow text-shadow leading-relaxed">
          Contact our expert team today to discuss how we can help with your next project. We're here to provide innovative electrical solutions tailored to your needs.
        </p>
        
        <a 
          href="/contact" 
          className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 py-2.5 px-6 rounded-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md group shadow-lg"
        >
          Contact Us
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      
      {/* Right Side - Contact Cards with improved visibility */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 lg:p-6 border border-white/20 shadow-xl">
          <div className="grid gap-4">
            {/* Phone Card */}
            <div className="bg-white/15 backdrop-blur p-4 rounded-lg hover:bg-white/25 transition-all duration-300 flex items-center group shadow-md">
              <div className="bg-yellow-400 p-2.5 rounded-full mr-3 group-hover:scale-105 transition-transform shadow-md">
                <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/90 font-medium drop-shadow">Phone</div>
                <a href="tel:+250786176444" className="font-semibold text-white text-base hover:text-yellow-300 transition-colors drop-shadow">
                  +250 786 176 444
                </a>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white/15 backdrop-blur p-4 rounded-lg hover:bg-white/25 transition-all duration-300 flex items-center group shadow-md">
              <div className="bg-yellow-400 p-2.5 rounded-full mr-3 group-hover:scale-105 transition-transform shadow-md">
                <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/90 font-medium drop-shadow">Email</div>
                <a href="mailto:info@electricalsolutionco.rw" className="font-semibold text-white text-base hover:text-yellow-300 transition-colors drop-shadow">
                  info@electricalsolutionco.rw
                </a>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-white/15 backdrop-blur p-4 rounded-lg hover:bg-white/25 transition-all duration-300 flex items-center group shadow-md">
              <div className="bg-yellow-400 p-2.5 rounded-full mr-3 group-hover:scale-105 transition-transform shadow-md">
                <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/90 font-medium drop-shadow">Location</div>
                <div className="font-semibold text-white text-base drop-shadow">
                  Gisozi - ADARWA Building - KG 33 AVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.6s ease-out 0.6s both;
        }
        
        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(20px) rotateX(-90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        
        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out;
          display: inline-block;
        }
        
        .animate-text-reveal-delay {
          animation: text-reveal 0.8s ease-out 0.2s both;
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) translateX(-10px) rotate(240deg);
          }
        }
        
        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) translateX(-30px) rotate(180deg);
          }
        }
        
        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(10px) translateX(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) translateX(15px) rotate(270deg);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 20s infinite ease-in-out;
        }
        
        .animate-float-medium {
          animation: float-medium 15s infinite ease-in-out;
        }
        
        .animate-float-fast {
          animation: float-fast 10s infinite ease-in-out;
        }
        
        @keyframes wave {
          0% {
            d: path('M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24 L1440,48 L0,48 Z');
          }
          50% {
            d: path('M0,24 C240,40 480,8 720,24 C960,40 1200,8 1440,24 L1440,48 L0,48 Z');
          }
          100% {
            d: path('M0,24 C240,8 480,40 720,24 C960,8 1200,40 1440,24 L1440,48 L0,48 Z');
          }
        }
        
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}