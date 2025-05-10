import React, { useEffect, useState } from 'react';
import backgroundVideo from '../assets/home1.mp4';
import backgroundVideoMobile from '../assets/home1.mp4'; // Consider a mobile-optimized version
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HomeVdo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-3/4 min-h-[600px] md:h-[90vh] lg:h-[85vh] xl:h-[80vh] overflow-hidden text-white">
      {/* Navbar - Uncomment if needed */}
      {/* <div className="relative z-30"><Navbar /></div> */}

      {/* Video Overlay (Gradient Layer) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent z-10" />

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        key={isMobile ? 'mobile' : 'desktop'}
      >
        <source src={isMobile ? backgroundVideoMobile : backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full md:h-3/4 lg:h-3/4 xl:h-3/4 px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-start md:text-center max-w-6xl mx-auto space-y-4 md:space-y-6 transform transition-all ">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn pt-40">
            <span className="block text-white">
              Innovative Tech Solutions Firm for
            </span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white">
              Future-Ready, Scalable Solutions
            </span>
          </h1>

          <h2 className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-light animate-fadeIn delay-100">
            Accelerate Your Ideas from Concept to Launch with Adventure Technology
          </h2>

          {/* Animated CTA Button */}
          <div className="pt-15 md:pt-8 lg:pt-8 xl:pt-8   animate-fadeIn delay-200">
            <Link to="/Contact">
            <button className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 px-8 py-3 md:px-6 md:py-3 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <span className="relative z-10">Connect with Experts</span>
              <i className="bi bi-arrow-right text-lg font-semibold ml-2 mt-2 md:mt-2 lg:mt-2 xl:mt-2"></i>

              {/* Hover gradient effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button glow effect */}
              <span className="absolute -bottom-1 -left-1 -right-1 -top-1 bg-blue-400/30 rounded-lg blur-md group-hover:opacity-70 transition-opacity duration-300"></span>
            </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeVdo;