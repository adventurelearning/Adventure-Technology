

import React from 'react';
import backgroundVideo from '../assets/home1.mp4';
import Navbar from './Navbar';

const HomeVdo = () => {
  return (
    <div className="relative w-full h-[72vh] overflow-hidden text-white">
      {/* Navbar with gradient bg */}
   {/* <div>{<Navbar/>}</div> */}

      {/* Video Overlay (Dark Layer) */}
      <div className="absolute inset-0 bg-gray-800 opacity-60 z-10"/>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-1/2 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Innovative Software Company for
          <span className="block text-4xl md:text-6xl mt-2">
            Future-Ready, Scalable Solutions
          </span>
        </h1>

        <h2 className="mt-8 text-lg md:text-xl text-white/85">
          Accelerate Your Ideas from Concept to Launch with Adventure Technology
        </h2>

        {/* Glow background under button */}
        <div className="absolute bottom-[2.5rem] left-1/2 transform -translate-x-1/2 w-72 h-32 bg-blue-400 opacity-30 blur-3xl rounded-full z-10"></div>

        {/* CTA Button */}
        {/* <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-600 px-6 py-2 rounded-md text-lg font-medium text-white hover:bg-white hover:text-[#0057D3] transition duration-300 z-20">
          Connect
        </button> */}
      </div>


    </div>
  );
};

export default HomeVdo;
