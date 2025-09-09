import React from 'react';
import EcomMob from '../../assets/Product/Ecommerce/Frame 18.svg'
const ECommerceFocus = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-8 lg:px-12 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={EcomMob}
            alt="Billing software interface"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl  font-semibold leading-snug tracking-tight">
            Power Your Store, <span className="block"> Grow Without Limits </span>
          </h1>
           <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our e-commerce solutions help you launch, manage, and scale your online store with ease.
            From product listings to secure checkout and customer engagement, we give you everything you need
            to sell smarter and expand your reach globally.
          </p>
        </div>

      </div>
    </div>
    
  );
};

export default ECommerceFocus;
