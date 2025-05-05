import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For navigation arrows

const AgricultureFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const basicFeatures = [
    { id: '01', title: 'Farm Management System Integration' },
    { id: '02', title: 'Livestock Tracking & Management' },
    { id: '03', title: 'Field Data Collection & Monitoring' },
    { id: '04', title: 'Mobile Access for Field Inspections' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'AI-powered Crop Health Monitoring' },
    { id: '02', title: 'Precision Agriculture Tools (IoT & Sensors)' },
    { id: '03', title: 'Smart Irrigation Systems Integration' },
    { id: '04', title: 'Predictive Analytics for Crop Yields' },
  ];

  const currentFeatures = showAdvanced ? advancedFeatures : basicFeatures;

  const handleBasicClick = () => {
    setShowAdvanced(false);
  };

  const handleAdvancedClick = () => {
    setShowAdvanced(true);
  };

  return (
    <div className="bg-black py-20 text-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Key Features of Our Agriculture Software Solutions
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Our agriculture software solutions empower farmers and agribusinesses with advanced tools to improve efficiency, yield, and sustainability. Whether you're managing crops, livestock, or resources, our software meets your unique needs.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <button
            className={`py-3 px-6 rounded-md font-semibold ${!showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'} hover:bg-blue-600 transition duration-200`}
            onClick={handleBasicClick}
          >
            Basic Features
          </button>
          <button
            className={`py-3 px-6 rounded-md font-semibold ${showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'} hover:bg-blue-600 transition duration-200`}
            onClick={handleAdvancedClick}
          >
            Advanced Features
          </button>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center">
            <button className="text-gray-500 hover:text-white transition duration-200">
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentFeatures.map((feature) => (
                <div key={feature.id} className="bg-gray-900 h-36 w-60 rounded-md p-6">
                  <p className="text-gray-500 text-sm mb-2">{feature.id}</p>
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                </div>
              ))}
            </div>
            <button className="text-gray-500 hover:text-white transition duration-200">
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureFeatures;
