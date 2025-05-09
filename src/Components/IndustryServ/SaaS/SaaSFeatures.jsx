import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SaaSFeatures = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

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

  const handleBasicClick = () => {
    setShowAdvanced(false);
  };

  const handleAdvancedClick = () => {
    setShowAdvanced(true);
  };

  return (
    <div className="bg-black py-12 md:py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
            Key Features of Our SaaS Development Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-12">
            Our SaaS solutions are packed with powerful features that drive scalability, security, and user experience, designed to meet your business goals.
          </p>
        </div>

        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex rounded-md shadow-sm bg-gray-800 p-1">
            <button
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-md font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 ${
                !showAdvanced 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              onClick={handleBasicClick}
            >
              Core Features
            </button>
            <button
              className={`py-2 px-4 sm:py-3 sm:px-6 rounded-md font-medium sm:font-semibold text-sm sm:text-base transition-all duration-200 ${
                showAdvanced 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
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
                className="bg-gray-900 rounded-lg p-5 sm:p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-700 group"
              >
                <div className="flex items-start">
                  <span className="text-blue-400 font-mono text-xs sm:text-sm mr-3 mt-1">
                    {feature.id}
                  </span>
                  <h3 className="text-white font-medium sm:font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h3>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-gray-700">
                  <button className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSFeatures;