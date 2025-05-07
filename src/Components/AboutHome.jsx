import React from 'react';

const AboutHome = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden text-white">
      {/* Background Static Image */}
      <img
        src="https://img.freepik.com/free-photo/young-colleagues-working-together-cafe_273609-13296.jpg?t=st=1746593906~exp=1746597506~hmac=66d14c7af840d086755ba71257a8cfc0ff6d5ed6996a36d183f58efdc8a49a2f&w=996"
        alt="Industry Banner"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

      {/* Main Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:px-16 ">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          {/* Innovative Technology Solutions<span className="block"> for Every Industry</span> */}
          Empowering Progress Through Smart 
          <span className='block'>Technology Solutions</span>
        </h1>

        <h3 className="text-lg md:text-xl max-w-3xl mb-8">
        Our mission is to help businesses thrive by delivering innovative and reliable tech solutions.
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

export default AboutHome;
