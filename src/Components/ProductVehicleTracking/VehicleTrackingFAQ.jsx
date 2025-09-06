import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const VehicleTrackingFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Vehicle Tracking FAQ data
  const faqData = [
    {
      id: 1,
      question: "Is the GPS tracker installation complicated?",
      answer:
        "No. The GPS tracker is designed for easy installation and can be set up in any vehicle within minutes. A detailed guide is included, and our team can assist if needed."
    },
    {
      id: 2,
      question: "Can I track my vehicle from my phone?",
      answer:
        "Yes. You’ll get access to our dashboard and a free mobile app (Android & iOS) that allows you to track your vehicle’s real-time location, routes, and history."
    },
    {
      id: 3,
      question: "Does the device work across India?",
      answer:
        "Absolutely. The tracker comes with a multi-network SIM that works across India, ensuring seamless connectivity in urban and rural areas."
    },
    {
      id: 4,
      question: "What kind of support do you provide?",
      answer:
        "We provide 24/7 technical and logistics support. Our team is available to help with installation, troubleshooting, and any tracking-related queries."
    },
    {
      id: 5,
      question: "Do the GPS trackers come with warranty?",
      answer:
        "Yes, every package includes a 1-year warranty along with free technical support. Extended warranty options are available if you want additional coverage."
    },
    {
      id: 6,
      question: "What will I get in the box?",
      answer:
        "Each package includes a GPS Tracker Device, SIM with preloaded data, Installation Guide, Access to Dashboard & Mobile App, and 1-Year Warranty & Support."
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pb-12 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left md:text-center mb-10 sm:mb-12 leading-snug">
          Frequently Asked Questions about{" "}
          <span className="text-blue-400">Vehicle Tracking</span>
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

export default VehicleTrackingFAQ;
