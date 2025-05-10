import React from 'react';
import { Link } from 'react-router-dom';
const IndustrialHome = () => {
  return (
    <div className="bg-black text-white">
      <div className='container mx-auto flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden min-h-[80vh] md:min-h-screen'>
        {/* Background decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-20 left-4 md:left-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-blue-500 blur-3xl'></div>
          <div className='absolute bottom-10 right-4 md:right-10 w-40 h-40 md:w-60 md:h-60 rounded-full bg-purple-500 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/4 w-20 h-20 md:w-32 md:h-32 rounded-full bg-green-500 blur-3xl'></div>
        </div>

        {/* Main content */}
        <div className='text-center relative z-10 max-w-4xl w-full px-4'>
          {/* Animated heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x'>
              Industrial Automation
            </span>
            <span className='block mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              Engineering Services
            </span>
          </h1>

          {/* Subheading with animation */}
          <h3 className='text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
            Innovative automation solutions to enhance industrial efficiency and performance
          </h3>

          {/* Animated button with hover effects */}
           <Link to="/Contact">
            <button className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
              <span className='relative z-10'>Connect With Us</span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </button>
          </Link>
        </div>

        {/* Industrial Icons */}
        <div className='absolute bottom-20 sm:bottom-40 left-4 md:left-10 opacity-20 animate-float'>
          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <div className='absolute top-20 right-4 md:right-10 opacity-20 animate-float'>
          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IndustrialHome;