import React from 'react';
import crmmob from '../../assets/Product/CRM/crmmob.jpg'
const CRMFocus = () => {
  return (
     <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={crmmob}
            alt="Billing software interface"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug tracking-tight">
            Focus on Relationships, <span className='block'> Not Spreadsheets </span>
          </h1>
           <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              We simplify customer management, sales tracking, and communication, 
              giving you the freedom to focus on building stronger relationships, 
              closing deals faster, and growing your business with ease.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CRMFocus;
