import React from 'react';
import Ecom from '../../assets/Product/Ecommerce/Ecommerce.svg';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
const EcommerceHome = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="mx-auto px-6 md:pl-16 py-12 ">
        <div className="flex flex-col md:flex-row items-center md:items-start">

          {/* Left Content - Smaller */}
          <div className="md:w-2/5 mb-12 md:mb-0 md:mt-26 text-left md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Powerful{" "}
              <span className="text-blue-500">E-Commerce Platform</span>{" "}
              for Growing Businesses
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Sell Online | Manage Products | Scale Globally
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/Contact">
                <button className="bg-blue-600 w-full hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                  Request a demo
                </button>
              </Link>
              <HashLink smooth to="#Ecomvdo">
              <button className="border w-full border-gray-700 hover:border-blue-500 px-6 py-3 rounded-md font-medium transition-colors cursor-pointer">
                Watch Demo
              </button>
              </HashLink>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="md:w-3/5 flex justify-center">
            <img
              src={Ecom}
              alt="E-Commerce Illustration"
              className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHome;
