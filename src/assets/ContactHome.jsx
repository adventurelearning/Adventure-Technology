import React from 'react';

const ContactHome = () => {
  return (
    <div className='bg-black w-full min-h-[70vh] flex items-center justify-center p-8 relative overflow-hidden'>
      {/* Doodle background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Animated doodle circles */}
        <div className='absolute top-1/4 left-10 w-8 h-8 rounded-full border-2 border-purple-500 animate-float opacity-70'></div>
        <div className='absolute top-1/3 right-20 w-12 h-12 rounded-full border-2 border-blue-400 animate-float animation-delay-2000 opacity-60'></div>
        <div className='absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full border-2 border-green-400 animate-float animation-delay-3000 opacity-50'></div>
        
        {/* Doodle squiggles */}
        <div className='absolute top-1/2 right-1/4 w-24 h-24 border-t-2 border-r-2 border-yellow-400 rounded-tl-full animate-spin-slow opacity-40'></div>
        <div className='absolute bottom-20 left-1/3 w-16 h-16 border-b-2 border-l-2 border-pink-500 rounded-br-full animate-spin-slow animation-delay-1000 opacity-40'></div>
        
        {/* Doodle crosses */}
        <div className='absolute top-1/5 right-10 w-10 h-10 flex items-center justify-center animate-pulse opacity-30'>
          <div className='w-full h-0.5 bg-white rotate-45 absolute'></div>
          <div className='w-full h-0.5 bg-white -rotate-45 absolute'></div>
        </div>
        <div className='absolute bottom-1/5 left-20 w-14 h-14 flex items-center justify-center animate-pulse animation-delay-1500 opacity-30'>
          <div className='w-full h-0.5 bg-red-400 rotate-45 absolute'></div>
          <div className='w-full h-0.5 bg-red-400 -rotate-45 absolute'></div>
        </div>
      </div>

      {/* Content */}
      <div className='text-center space-y-8 max-w-4xl mx-auto relative z-10'>
        <h1 className='text-white border-2 border-white px-6 py-3 text-4xl md:text-4xl font-medium inline-block hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative group'>
          CONTACT US
          {/* Doodle underline effect */}
          <span className='absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full'></span>
        </h1>
        <p className='text-gray-300 text-lg md:text-xl mt-4 relative'>
          Ready to start your project? Get in touch with our team today.
          {/* Floating dots */}
          <span className='absolute -top-3 -right-4 w-2 h-2 rounded-full bg-yellow-400 animate-ping opacity-75'></span>
          <span className='absolute -bottom-2 -left-4 w-2 h-2 rounded-full bg-pink-500 animate-ping animation-delay-1000 opacity-75'></span>
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center mt-6'>
          <a 
            href='mailto:contact@example.com' 
            className='bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 hover:bg-blue-500 hover:text-white transition-colors duration-300 relative group'
          >
            Email Us
            <span className='absolute -inset-1 border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:inset-2 transition-all duration-300 pointer-events-none'></span>
          </a>
          <a 
            href='tel:+1234567890' 
            className='bg-blue-500 border-2 border-blue-500 text-white px-6 py-3 hover:bg-transparent hover:text-blue-500 transition-colors duration-300 relative group'
          >
            Call Us
            <span className='absolute -inset-1 border-2 border-blue-500 opacity-0 group-hover:opacity-100 group-hover:inset-2 transition-all duration-300 pointer-events-none'></span>
          </a>
        </div>
      </div>

      {/* Add these styles to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default ContactHome;