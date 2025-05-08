import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers, FiGlobe, FiCode } from 'react-icons/fi';

const AboutHome = () => {
  const [activeTab, setActiveTab] = useState('mission');




  return (
    <div className="relative w-full overflow-hidden text-gray-800">
      {/* Hero Section with Parallax Effect */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)' 
          }}
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60" />
        
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            About <span className="text-blue-400">TechSolutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mb-8"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            Pioneering the future of business technology since 2008
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full text-lg font-medium text-white flex items-center transition-all duration-300 shadow-lg"
          >
            Explore Our Story
            <FiArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Our Story Section */}
      {/* <div className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Founded in a small garage with just three developers, TechSolutions has grown into a global technology powerhouse serving clients across five continents. Our journey has been marked by innovation, dedication, and an unwavering commitment to our clients' success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold">From Humble Beginnings to Industry Leader</h3>
              <p className="text-gray-600">
                What started as a passion project between college friends has transformed into an award-winning technology firm. Our first project was a simple inventory management system for a local bookstore. Today, we develop enterprise solutions for Fortune 500 companies.
              </p>
              <p className="text-gray-600">
                Throughout our growth, we've maintained the startup spirit that fueled our early success - agility, creativity, and a hands-on approach to solving complex problems.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative h-80 bg-gray-100 rounded-xl overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </div> */}







      {/* CTA Section */}
      {/* <div className="py-20 px-6 md:px-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our technology solutions can drive your success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium text-white transition-all duration-300 shadow-lg mr-4">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutHome;