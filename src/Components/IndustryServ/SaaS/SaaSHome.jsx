import React from 'react';

const SaaSHome = () => {
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
              SaaS Development
            </span>
            <span className='block mt-2 text-white'>Services</span>
          </h1>

          {/* Subheading with animation */}
          <h3 className='text-xl md:text-2xl mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
            We Design and Develop Scalable, Secure, and Custom SaaS Solutions That Empower Businesses to Streamline Operations and Drive Growth
          </h3>

          {/* Animated button with hover effects */}
          <button className='px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
          <span className='relative z-10'>Connect With Us</span>
          <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
        </button>  
        </div>

        {/* SaaS */}
        <div className='absolute bottom-40 left-10 opacity-20 animate-float'>
          <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className='absolute top-20 right-10 opacity-20 animate-float'>
          <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SaaSHome;
