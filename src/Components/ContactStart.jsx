import React from 'react';

const ContactStart = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          RADIUS Without Any Setup
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Deploy cloud RADIUS servers to provision and manage user access to
          VPN and Wi-Fi networks from your browser. Secure with MFA.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Get Started Button (Gradient) */}
          <button className="relative px-8 py-4 rounded-lg text-white font-medium text-lg group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300"></span>
            <span className="relative z-10">Get Started</span>
          </button>
          
          {/* Demo Button (Outline) */}
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-200 font-medium text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
            Demo →
          </button>
        </div>
        
        {/* Small "Get Started" text */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactStart;