import React from 'react';

const AutomotiveHome = () => {
  return (
    <div>
      <div className='bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl'></div>
          <div className='absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl'></div>
          <div className='absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-green-500 blur-3xl'></div>
        </div>

        {/* Main content */}
        <div className='text-center relative z-10 max-w-4xl'>
          {/* Animated heading */}
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient-x'>
              Automotive Embedded
            </span>
            <span className='block mt-2 text-white'>Software Service</span>
          </h1>

          {/* Subheading with animation */}
          <h3 className='text-xl md:text-2xl mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
            We specialize in developing cutting-edge embedded software solutions for the automotive industry, enhancing vehicle performance, safety, and connectivity.
          </h3>

          {/* Animated button with hover effects */}
          <button className='px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
            <span className='relative z-10'>Connect With Us</span>
            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
          </button>
        </div>

        {/* Automotive */}
        <div className='absolute bottom-40 left-10 opacity-20 animate-float'>
          <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7h.01M16 17h.01M8 17h.01M12 17h.01M12 7h.01M8 7h.01"></path>
          </svg>
        </div>
        <div className='absolute top-20 right-10 opacity-20 animate-float'>
          <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AutomotiveHome;
