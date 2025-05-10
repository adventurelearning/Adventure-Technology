import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SaaSFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const basicFeatures = [
    { id: '01', title: 'User Authentication & Authorization' },
    { id: '02', title: 'Responsive Web & Mobile Design' },
    { id: '03', title: 'Multi-Tenant Architecture' },
    { id: '04', title: 'Subscription Billing Integration' },
    { id: '05', title: 'Basic Analytics Dashboard' },
    { id: '06', title: 'Role-Based Access Control' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'Cloud Hosting & Auto-Scaling' },
    { id: '02', title: 'AI-powered Insights & Analytics' },
    { id: '03', title: 'API Integrations with 3rd Parties' },
    { id: '04', title: 'Advanced Data Encryption & Security' },
    { id: '05', title: 'Custom Workflow Automation' },
    { id: '06', title: 'Real-time Collaboration Tools' },
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
          Key Features of Our SaaS Application Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
          Our SaaS solutions are designed to deliver scalable, secure, and feature-rich applications that streamline business operations and improve user experience.
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
                    className="bg-gray-900 rounded-md p-4 sm:p-6 flex flex-col items-start min-h-[120px] sm:min-h-[144px]"
                  >
                    <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{feature.id}</p>
                    <h3 className="text-white font-medium sm:font-semibold text-base sm:text-lg text-left">
                      {feature.title}
                    </h3>
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

export default SaaSFeatures;
