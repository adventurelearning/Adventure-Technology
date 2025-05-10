import React from 'react';
import { Link } from 'react-router-dom';
const InternHome = () => {
  return (
    <div className="relative w-full h-[66vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden text-white">
      {/* Background Static Image */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Industry Banner"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

      {/* Main Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center sm:items-start px-4 sm:px-6 md:px-16 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 leading-snug sm:leading-snug md:leading-tight">
          Hands-on Experience Through
          <span className="block mt-1 sm:mt-2">Exciting Internship Roles</span>
        </h1>

        <h3 className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl mb-6 sm:mb-8">
          Work on real projects, learn from top engineers,
          <span className="block">and take the first step toward a future in tech.</span>
        </h3>
        <Link 
          smooth={true}
          duration={500}
          offset={-70} >
          <button className="bg-blue-600 cursor-pointer hover:bg-white hover:text-blue-600 px-4 py-2 sm:py-3 mt-3 sm:mt-5 rounded-md text-base sm:text-lg font-medium text-white flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
          Explore Internships
          <span className="text-2xl sm:text-3xl pl-2">
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </button>
      </Link>
    </div>

    </div >
  );
};

export default InternHome;
