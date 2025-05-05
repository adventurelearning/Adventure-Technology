import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For navigation arrows

const ManufacturingFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const basicFeatures = [
    { id: '01', title: 'Real-time Production Monitoring' },
    { id: '02', title: 'Inventory & Supply Chain Management' },
    { id: '03', title: 'Automated Quality Control' },
    { id: '04', title: 'Employee and Asset Tracking' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'AI-driven Predictive Maintenance' },
    { id: '02', title: 'IoT Integration for Smart Manufacturing' },
    { id: '03', title: 'Cloud-Based Data Analytics & Reporting' },
    { id: '04', title: 'Cybersecurity & Data Protection' },
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
          Key Features of Our Manufacturing IT Services & Solutions
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Our IT solutions for manufacturing are designed to optimize production, improve operational efficiency, and ensure data security, driving success in the modern industrial landscape.
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

export default ManufacturingFeatures;
