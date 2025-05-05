import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For navigation arrows

const SaaSFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const basicFeatures = [
    { id: '01', title: 'User Authentication & Authorization' },
    { id: '02', title: 'Responsive Web & Mobile Design' },
    { id: '03', title: 'Multi-Tenant Architecture' },
    { id: '04', title: 'Subscription Billing Integration' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'Cloud Hosting & Auto-Scaling' },
    { id: '02', title: 'AI-powered Insights & Analytics' },
    { id: '03', title: 'API Integrations with 3rd Parties' },
    { id: '04', title: 'Advanced Data Encryption & Security' },
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
          Key Features of Our SaaS Development Services
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Our SaaS solutions are packed with powerful features that drive scalability, security, and user experience, designed to meet your business goals.
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

export default SaaSFeatures;
