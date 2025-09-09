import React from 'react';
// import billlogin from '../../assets/billlogin.png'

const BMSFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={"https://www.tritekpower.com/wp-content/uploads/2023/03/what-is-bms-1-1024x744.png"}
            alt="Battery Management System Interface"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl  font-semibold leading-snug tracking-tight">
            Focus on Performance,{" "}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Not Downtime
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Monitor, protect, and optimize your batteries with smart AI-driven insights. 
            Our BMS ensures longer lifespan, higher efficiency, and complete reliability—
            so you can focus on powering your operations, not worrying about failures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMSFocus;
