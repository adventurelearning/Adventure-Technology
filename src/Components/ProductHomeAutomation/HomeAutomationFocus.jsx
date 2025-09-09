import React from 'react';
import HomeAuto from '../../assets/Product/Home_Automation/homeauto4.jpg';

const HomeAutomationFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={HomeAuto}
            alt="Smart home automation interface"
            className="w-full  object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight">
            Control Your Home, <span className="block"> Live Smarter </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Control your home with just a tap or voice command. From smart lighting to 
            security and energy control, our home automation solutions bring convenience, 
            safety, and efficiency to your fingertips.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HomeAutomationFocus;
