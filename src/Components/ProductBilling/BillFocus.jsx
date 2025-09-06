import React from 'react';
import billlogin from '../../assets/billlogin.png'
const BillFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={billlogin}
            alt="Billing software interface"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight">
            Focus on Growth, 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Not Paperwork</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Simplify billing, compliance, and payments with ease—so you can
            focus on running your business, serving customers, and growing faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillFocus;
