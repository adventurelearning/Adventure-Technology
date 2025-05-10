import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers, FiGlobe, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const AboutHome = () => {
  const [activeTab, setActiveTab] = useState('mission');




  return (
    <div className="relative w-full h-[66vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden text-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative w-full h-full">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/80 z-10 pointer-events-none" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center sm:items-center px-4 sm:px-6 md:px-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-3xl md:text-6xl font-semibold mb-4 leading-snug sm:leading-snug md:leading-tight">
            About <span className="text-blue-400">TechSolutions</span>
          </h1>
          <h3 className="text-lg sm:text-lg md:text-3xl max-w-full sm:max-w-2xl md:max-w-7xl mb-6 sm:mb-8">
          Where cutting-edge tech meets real-world business impact
          </h3>
          <Link
            smooth={true}
            duration={500}
            offset={-70} >
            <button className="bg-blue-600 cursor-pointer  hover:bg-white hover:text-blue-600 px-4 py-2 sm:py-3 mt-3 sm:mt-5 rounded-full text-base sm:text-lg font-medium text-white flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Our Story
              <FiArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;