import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const BMSFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

const faqData = [
  {
    id: 1,
    question: "What is a BMS and why do I need it?",
    answer:
      "A Battery Management System (BMS) monitors and protects your battery packs by managing charging, discharging, and overall battery health. It ensures longevity, safety, and optimal performance for lithium-ion, lead-acid, or custom battery systems."
  },
  {
    id: 2,
    question: "Can I monitor multiple batteries with a BMS?",
    answer:
      "Yes! Modern BMS units allow you to manage multiple battery cells or packs simultaneously. You can track voltage, current, temperature, state-of-charge (SOC), and other critical parameters to prevent overcharging, deep discharge, or imbalance."
  },
  {
    id: 3,
    question: "Does the BMS support remote monitoring?",
    answer:
      "Absolutely. Many BMS solutions offer mobile and desktop apps or cloud platforms, allowing you to monitor battery status, set alerts, and access logs remotely for personal or industrial applications."
  },
  {
    id: 4,
    question: "How does BMS protect my batteries?",
    answer:
      "The BMS continuously monitors voltage, current, and temperature of the battery pack. It prevents unsafe conditions like overcharge, over-discharge, short circuits, and thermal runaway, ensuring safe and reliable operation."
  },
  {
    id: 5,
    question: "What kind of support is available for setup and maintenance?",
    answer:
      "We provide full support including installation guidance, setup documentation, troubleshooting, and warranty services. Our technical team is available to assist via phone, email, or remote support for smooth operation."
  },
  {
    id: 6,
    question: "Can I customize the BMS for my application?",
    answer:
      "Yes, BMS units are highly customizable. You can select specifications based on voltage, capacity, cell chemistry, communication protocols, and monitoring features to suit automotive, solar, industrial, or IoT applications."
  },
];


  // Animation variants
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
        <span className="text-blue-400">Billing</span>
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

export default BMSFAQ;
