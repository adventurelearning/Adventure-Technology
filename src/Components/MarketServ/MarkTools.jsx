import React from 'react';
import { motion } from 'framer-motion';
import {
  SiGoogleanalytics,
  SiSemrush,
  SiMailchimp,
  SiHubspot,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiGoogleads,
} from 'react-icons/si';

const MarkTools = () => {
  const marketingTools = [
    { name: 'Google Analytics', icon: SiGoogleanalytics, color: 'text-blue-400' },
    { name: 'Google Ads', icon: SiGoogleads, color: 'text-yellow-500' },
    { name: 'SEMrush', icon: SiSemrush, color: 'text-orange-500' },
    { name: 'Mailchimp', icon: SiMailchimp, color: 'text-yellow-400' },
    { name: 'HubSpot', icon: SiHubspot, color: 'text-orange-400' },
    { name: 'Facebook Ads', icon: SiFacebook, color: 'text-blue-600' },
    { name: 'Instagram Marketing', icon: SiInstagram, color: 'text-pink-500' },
    { name: 'LinkedIn Ads', icon: SiLinkedin, color: 'text-blue-700' },
  ];

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-center text-white mb-12 tracking-tight">
          Digital Marketing Tools We Use
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {marketingTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 p-6 w-60 h-35 rounded-xl 
                     bg-gray-800/50 border border-gray-700 shadow-md 
                     backdrop-blur-md text-center"
                >
                  <div className="flex flex-col items-center justify-between flex-grow">
                    <tool.icon className={`w-16 h-16 ${tool.color}`} />
                    <p className="text-white font-semibold text-base mt-1">{tool.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarkTools;
