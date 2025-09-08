import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const HomeAutomationFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Home Automation FAQ data
  const faqData = [
    {
      id: 1,
      question: "Is the installation process complicated?",
      answer:
        "Not at all. Our system is designed for easy plug-and-play installation and is compatible with your existing wiring. In most cases, it can be set up within hours without major changes to your home."
    },
    {
      id: 2,
      question: "Can I control my devices from my phone?",
      answer:
        "Yes. You’ll get free mobile app access for both Android and iOS devices, allowing you to control lighting, appliances, and security features from anywhere."
    },
    {
      id: 3,
      question: "Is the system scalable if I want to add more devices later?",
      answer:
        "Absolutely. Our home automation solutions are modular and scalable, so you can start small and add more smart switches, sensors, or modules as your needs grow."
    },
    {
      id: 4,
      question: "What kind of customer support do you provide?",
      answer:
        "We provide 24/7 customer support across India. Our experts can assist you with installation, troubleshooting, and technical queries anytime you need help."
    },
    {
      id: 5,
      question: "Do the products come with warranty?",
      answer:
        "Yes, every package includes a 1-year warranty along with free technical support. Extended warranty options are also available for additional peace of mind."
    },
    {
      id: 6,
      question: "What will I get in the box?",
      answer:
        "Each package includes a Home Automation Controller, Smart Switches or Modules, Mobile App Access, Installation Guide, and 1-Year Warranty with technical support."
    },
  ];

  const itemVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left md:text-center mb-10 sm:mb-12 leading-snug">
          Frequently Asked Questions about{" "}
          <span className="text-blue-400">Home Automation</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-5 sm:space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 text-gray-100 font-medium sm:font-semibold focus:outline-none transition duration-300 ${
                  expandedId === item.id
                    ? "bg-gray-700 rounded-t-xl border-b border-gray-600"
                    : "bg-gray-800 hover:bg-gray-700 rounded-xl"
                }`}
              >
                <span className="text-base sm:text-lg text-left">
                  {item.question}
                </span>
                {expandedId === item.id ? (
                  <ChevronUpIcon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-400" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-400" />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="bg-gray-900 text-gray-300 overflow-hidden rounded-b-xl"
                  >
                    <div className="py-4 sm:py-5 px-4 sm:px-6">
                      <p className="text-sm sm:text-base leading-relaxed text-left">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAutomationFAQ;
