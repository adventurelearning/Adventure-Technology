import React from 'react';

import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const BMSHome = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white">   
      {/* Hero Section */}
      <div className="mx-auto px-6 md:pl-16 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">

          {/* Left Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Smart <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Battery Management System</span> for Reliable Power
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Monitor | Protect | Optimize.
            </p>           
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/Contact">
                <button className="bg-blue-600 w-full hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                  Request a Demo
                </button>
              </Link>
              {/* <HashLink smooth to="#bmsvdo">
                <button className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                  Watch Demo
                </button> 
              </HashLink> */}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={"https://inrorwxhloqllk5p-static.micyjz.com/cloud/lpBpkKiqloSRlkkmqrrrjo/ADAYO-BMS.jpg"} 
              alt="Battery Management System Illustration" 
              className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl lg:mr-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMSHome;
