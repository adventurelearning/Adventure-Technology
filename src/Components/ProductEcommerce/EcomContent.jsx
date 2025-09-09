import React from "react";
import BillImg from '../../assets/Product/Ecommerce/EcomOrder.jpeg';
const EcomContent = () => {
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
      <div className="mt-8 text-center  ">
        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-100">
          Track all your purchases in one place with ease. View product details, order IDs, payment totals, and real-time status updates like pending or delivered.
        <p className="text-base md:text-lg lg:text-xl font-medium text-gray-100 mt-3">
          Stay informed and manage your orders effortlessly with quick access to actions and support.
        </p>
        </p>
      </div>
    </div>
  );
};

export default EcomContent;
