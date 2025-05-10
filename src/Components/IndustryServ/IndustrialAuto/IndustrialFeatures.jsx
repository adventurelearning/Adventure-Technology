import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const IndustrialFeatures = () => {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

  const basicFeatures = [
    { id: '01', title: 'Real-time Machine Control' },
    { id: '02', title: 'Automated Process Control' },
    { id: '03', title: 'Sensor Integration for Automation' },
    { id: '04', title: 'Custom Embedded System Design' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'Industrial IoT (IIoT) Connectivity' },
    { id: '02', title: 'Predictive Maintenance & Diagnostics' },
    { id: '03', title: 'Machine Learning for Process Optimization' },
    { id: '04', title: 'Edge Computing and Data Analytics' },
  ];

  const currentFeatures = showAdvanced ? advancedFeatures : basicFeatures;
  const visibleFeatures = currentFeatures.slice(currentIndex, currentIndex + 4);

  const handleBasicClick = () => {
    setShowAdvanced(false);
    setCurrentIndex(0);
  };

  const handleAdvancedClick = () => {
    setShowAdvanced(true);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(currentFeatures.length - 4, prev + 1));
  };


  return (
    <div className="bg-black py-12 md:py-20 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
          Features of Cutting-Edge Industrial Automation Systems
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Our industrial automation systems offer innovative solutions for optimizing manufacturing processes, enhancing machine reliability, and enabling smart data analytics. From basic machine control to advanced predictive maintenance, we deliver tailored embedded solutions to meet the unique demands of the industrial sector.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <button
            className={`py-3 px-6 rounded-md font-semibold ${
              !showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
            } hover:bg-blue-600 transition duration-200`}
            onClick={handleBasicClick}
          >
            Basic Features
          </button>
          <button
            className={`py-3 px-6 rounded-md font-semibold ${
              showAdvanced ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
            } hover:bg-blue-600 transition duration-200`}
            onClick={handleAdvancedClick}
          >
            Advanced Features
          </button>
        </div>

       <div className="relative">
             <div className="flex items-center justify-center">
               <button 
                 onClick={handlePrev}
                 disabled={currentIndex === 0}
                 className={`mr-2 sm:mr-4 p-2 rounded-full ${currentIndex === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
               >
                 <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
               </button>
   
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 flex-1">
                 {visibleFeatures.map((feature) => (
                   <div 
                     key={`${showAdvanced ? 'advanced' : 'basic'}-${feature.id}`}
                     className="bg-gray-900 rounded-lg p-5 sm:p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-blue-500/30 group"
                   >
                     <div className="flex items-start mb-3">
                       <span className="text-blue-400 font-mono text-xs sm:text-sm mr-3 mt-1">
                         {feature.id}
                       </span>
                       <h3 className="text-white font-medium sm:font-semibold text-base sm:text-lg">
                         {feature.title}
                       </h3>
                     </div>
                     <p className="text-gray-400 text-xs sm:text-sm mb-4">
                       {feature.description}
                     </p>
                     <div className="mt-auto pt-3 border-t border-gray-800 group-hover:border-gray-700">
                       <button className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors">
                         Learn more →
                       </button>
                     </div>
                   </div>
                 ))}
               </div>
   
               <button 
                 onClick={handleNext}
                 disabled={currentIndex >= currentFeatures.length - 4}
                 className={`ml-2 sm:ml-4 p-2 rounded-full ${currentIndex >= currentFeatures.length - 4 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
               >
                 <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
               </button>
             </div>
   
             {/* Mobile indicators */}
             <div className="flex justify-center mt-6 sm:hidden">
               {Array.from({ length: Math.max(1, currentFeatures.length - 3) }).map((_, idx) => (
                 <button 
                   key={idx}
                   onClick={() => setCurrentIndex(idx)}
                   className={`w-2 h-2 rounded-full mx-1 ${currentIndex === idx ? 'bg-blue-500' : 'bg-gray-600'}`}
                 />
               ))}
             </div>
           </div>
      </div>
    </div>
    </div>
  );
};

export default IndustrialFeatures;
