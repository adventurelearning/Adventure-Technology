import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const AgricultureFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const basicFeatures = [
    { id: '01', title: 'Farm Management System Integration' },
    { id: '02', title: 'Livestock Tracking & Management' },
    { id: '03', title: 'Field Data Collection & Monitoring' },
    { id: '04', title: 'Mobile Access for Field Inspections' },
    { id: '05', title: 'Weather Monitoring Integration' },
    { id: '06', title: 'Crop Rotation Planning' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'AI-powered Crop Health Monitoring' },
    { id: '02', title: 'Precision Agriculture Tools (IoT & Sensors)' },
    { id: '03', title: 'Smart Irrigation Systems Integration' },
    { id: '04', title: 'Predictive Analytics for Crop Yields' },
    { id: '05', title: 'Drone Imagery Analysis' },
    { id: '06', title: 'Automated Pest Detection' },
  ];

  const currentFeatures = showAdvanced ? advancedFeatures : basicFeatures;

  const handleBasicClick = () => {
    setShowAdvanced(false);
  };

  const handleAdvancedClick = () => {
    setShowAdvanced(true);
  };

  return (
    <div className="bg-black py-12 md:py-20 text-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          Key Features of Our Agriculture Software Solutions
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
          Our agriculture software solutions empower farmers and agribusinesses with advanced tools to improve efficiency, yield, and sustainability. Whether you're managing crops, livestock, or resources, our software meets your unique needs.
        </p>
        
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-l-md font-medium sm:font-semibold text-sm sm:text-base ${
                !showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition duration-200`}
              onClick={handleBasicClick}
            >
              Basic Features
            </button>
            <button
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-r-md font-medium sm:font-semibold text-sm sm:text-base ${
                showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition duration-200`}
              onClick={handleAdvancedClick}
            >
              Advanced Features
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {currentFeatures.map((feature) => (
              <div
                key={`${showAdvanced ? 'advanced' : 'basic'}-${feature.id}`}
                className="bg-gray-900 rounded-md p-4 sm:p-6 flex flex-col items-start min-h-[120px] sm:min-h-[144px] hover:bg-gray-800 transition duration-200"
              >
                <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">{feature.id}</p>
                <h3 className="text-white font-medium sm:font-semibold text-base sm:text-lg text-left">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureFeatures;