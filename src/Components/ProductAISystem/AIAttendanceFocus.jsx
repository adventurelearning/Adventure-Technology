import React from 'react';
import EcomMob from '../../assets/ecommob1.svg'; // Replace with AI Attendance relevant image

const AIAttendanceFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={"https://i.pinimg.com/736x/c1/7b/fc/c17bfc3407fa2812bbfe62a1c5bc7338.jpg"} 
            alt="AI Attendance System Interface"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
           Facial Recognition  <span className="block"> Attendance System </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
           Automate attendance tracking with AI-powered facial recognition. Perfect for schools, offices, and industries, our system ensures accurate, secure, and tamper-proof attendance management in real-time.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AIAttendanceFocus;
