import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const EcommerceFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const basicFeatures = [
    { id: '01', title: 'Product Catalog Management', description: 'Organize and display your products with ease' },
    { id: '02', title: 'User Registration & Login', description: 'Secure customer accounts with multiple auth options' },
    { id: '03', title: 'Seamless Checkout Process', description: 'Optimized flow to reduce cart abandonment' },
    { id: '04', title: 'Mobile-Friendly Design', description: 'Fully responsive for all devices' },
    { id: '05', title: 'Basic Payment Gateway', description: 'Support for major credit cards and PayPal' },
    { id: '06', title: 'Order Management', description: 'Track and fulfill customer orders efficiently' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'AI-Powered Product Recommendations', description: 'Personalized suggestions to boost sales' },
    { id: '02', title: 'Real-Time Inventory Tracking', description: 'Sync inventory across all sales channels' },
    { id: '03', title: 'Multi-currency Support', description: 'Sell globally with automatic currency conversion' },
    { id: '04', title: 'Advanced Analytics & Reporting', description: 'Data-driven insights for business growth' },
    { id: '05', title: 'AR Product Visualization', description: 'Let customers preview products in their space' },
    { id: '06', title: 'Voice Search & Commands', description: 'Modern voice-enabled shopping experience' },
  ];

  const currentFeatures = showAdvanced ? advancedFeatures : basicFeatures;

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, currentFeatures.length - visibleCount);
  const visibleFeatures = currentFeatures.slice(currentIndex, currentIndex + visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleBasicClick = () => {
    setShowAdvanced(false);
    setCurrentIndex(0);
  };

  const handleAdvancedClick = () => {
    setShowAdvanced(true);
    setCurrentIndex(0);
  };

  return (
    <div className="bg-black py-12 md:py-20 text-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          Key Features of Our E-commerce Platform Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
          Empower your online business with modern, scalable, and user-centric e-commerce features designed to boost sales and customer satisfaction.
        </p>

        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 md:mb-10">
          <button
            className={`py-2 px-4 sm:py-3 sm:px-6 rounded-md font-medium sm:font-semibold text-sm sm:text-base ${
              !showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
            } hover:bg-blue-600 transition duration-200`}
            onClick={handleBasicClick}
          >
            Basic Features
          </button>
          <button
            className={`py-2 px-4 sm:py-3 sm:px-6 rounded-md font-medium sm:font-semibold text-sm sm:text-base ${
              showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
            } hover:bg-blue-600 transition duration-200`}
            onClick={handleAdvancedClick}
          >
            Advanced Features
          </button>
        </div>

        <div className="relative px-4 sm:px-0">
          <div className="flex items-center justify-center">
            <button 
              className={`mr-2 sm:mr-4 text-gray-500 hover:text-white transition duration-200 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex-1 flex overflow-hidden">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {visibleFeatures.map((feature) => (
                  <div 
                    key={`${showAdvanced ? 'advanced' : 'basic'}-${feature.id}`} 
                    className="bg-gray-900 rounded-md p-4 sm:p-6 flex flex-col items-start min-h-[140px] sm:min-h-[160px]"
                  >
                    <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{feature.id}</p>
                    <h3 className="text-white font-medium sm:font-semibold text-base sm:text-lg text-left">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 text-left">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={`ml-2 sm:ml-4 text-gray-500 hover:text-white transition duration-200 ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center mt-4 sm:hidden">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentIndex === idx ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFeatures;
