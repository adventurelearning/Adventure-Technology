import React from 'react'

const EducationHome = () => {
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
            Education App
          </span>
          <span className='block mt-2 text-white'>Development Service</span>
        </h1>
        
        {/* Subheading with animation */}
        <h3 className='text-xl md:text-2xl mb-10 leading-relaxed opacity-90 animate-fade-in-up'>
          We Design and Develop Interactive, Scalable, and User-Friendly Education Apps That Enhance Learning Experiences for Students, Teachers, and Institutions
        </h3>
        
        {/* Animated button with hover effects */}
        <button className='px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group'>
          <span className='relative z-10'>Connect With Us</span>
          <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
        </button>       
      </div>      
      {/* Floating icons (educational theme) */}
      <div className='absolute bottom-40 left-10 opacity-20 animate-float'>
        <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      </div>
      <div className='absolute top-20 right-10 opacity-20 animate-float'>
        <svg className='w-12 h-12' fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      </div>
    </div>
    </div>
  )
}

export default EducationHome
