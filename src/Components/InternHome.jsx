import React from 'react';

const InternHome = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden text-white">
      {/* Background Static Image */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Industry Banner"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

      {/* Main Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:px-16 ">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          {/* Innovative Technology Solutions<span className="block"> for Every Industry</span> */}
          Hands-on Experience Through<span className="block mt-2">Exciting Internship Roles</span>
        </h1>

        <h3 className="text-lg md:text-xl max-w-3xl mb-8">
        Work on real projects, learn from top engineers, and take the first step <span className='block'>toward a future in tech.</span>
        </h3>

        <button className="bg-blue-600 hover:bg-white hover:text-blue-600 px-4 py-3 mt-5 rounded-md text-lg font-medium text-white flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
          Consult Our Experts
          <span className="text-3xl pl-2">
            <i className="bi bi-arrow-right-short"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default InternHome;
