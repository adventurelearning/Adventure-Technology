import React from 'react';
import { Link } from 'react-router-dom';
const AgricultureHome = () => {
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
              Agriculture Software
            </span>
            <span className='block mt-2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              Development Service
            </span>
          </h1>

          {/* Subheading with animation */}
          <h3 className='text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
            Revolutionizing Agriculture with Cutting-Edge Software Solutions for Streamlined Operations and Seamless Collaboration
          </h3>

          {/* Animated button with hover effects */}
          <Link to="/Contact">
            <button className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
              <span className='relative z-10'>Connect With Us</span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
            </button>
          </Link>
        </div>

        {/* Agriculture Icons */}
        <div className='absolute bottom-20 sm:bottom-40 left-4 md:left-10 opacity-20 animate-float'>
          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>

        <div className='absolute top-20 right-4 md:right-10 opacity-20 animate-float'>
          <svg className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AgricultureHome;
