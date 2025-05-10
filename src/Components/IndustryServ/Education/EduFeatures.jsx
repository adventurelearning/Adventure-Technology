import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For navigation arrows

const EduFeatures= () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const basicFeatures = [
    { id: '01', title: 'Lecture scheduling' },
    { id: '02', title: 'Sign up and Log In' },
    { id: '03', title: 'Easy-to-use interface' },
    { id: '04', title: 'Classroom forum' },
  ];

  const advancedFeatures = [
    { id: '01', title: 'AI-powered learning paths' },
    { id: '02', title: 'Interactive simulations' },
    { id: '03', title: 'Personalized feedback' },
    { id: '04', title: 'Progress analytics' },
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
          Features You Get In Modern Education <br className="hidden md:block" />
          App Development
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          All our eLearning application development solutions are loaded with features that ensure maximum learning<span className='block'>
          and manageability with a super friendly interface</span>
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
            Advanced features
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

export default EduFeatures;