import React from 'react';
import EcomMob from '../../assets/ecommob1.svg';

const VehicleTrackingFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={"https://i.pinimg.com/1200x/06/d4/0c/06d40c3b60bac518486ed24f94734725.jpg"}
            alt="Smart home automation interface"
            className="w-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
           Real-Time Vehicle  <span className="block"> Tracking System </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
           Monitor your vehicles 24/7 with our GPS-enabled tracking solutions. Perfect for fleet management,
            personal vehicle security, or business logistics—our system helps you stay in control no matter where your vehicles are
          </p>
        </div>

      </div>
    </div>
  );
};

export default VehicleTrackingFocus;
