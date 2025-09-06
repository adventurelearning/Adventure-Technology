import React from "react";
import BillImg from '../../assets/Bills.png';
const BMSContent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black  p-6">
      {/* Bill Image */}
      <div className="w-full flex justify-center">
        <img
          src={BillImg}  // replace with your image path
          alt="Bill Example"
          className="w-full max-w-6xl h-auto rounded-xl shadow-lg object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-8 text-center max-w-3xl px-4">
        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-100">
          Manage invoices effortlessly with auto-calculated GST, transport, and
          discounts.
        </p>
        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-100 mt-3">
          Fast checkout with instant print, save, and share options.
        </p>
      </div>
    </div>
  );
};

export default BMSContent;
