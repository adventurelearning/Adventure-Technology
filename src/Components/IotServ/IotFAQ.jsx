import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const IotFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What is IoT and how does it work?',
      answer:
        'IoT (Internet of Things) refers to the network of interconnected devices that communicate and share data with each other. These devices can range from everyday objects like thermostats and security cameras to complex industrial equipment. IoT devices use sensors and software to collect and transmit data to a central system or cloud for processing.',
    },
    {
      id: 2,
      question: 'How secure are IoT devices?',
      answer:
        'Security is a top priority for IoT devices. We implement robust security measures, including data encryption, secure communication protocols, and regular firmware updates, to protect your IoT devices from potential threats. However, as IoT evolves, it is essential to continually assess and upgrade security strategies.',
    },
    {
      id: 3,
      question: 'Can IoT devices be integrated into existing systems?',
      answer:
        'Yes, IoT devices can be integrated into existing systems. We ensure compatibility with your current hardware, software, and cloud platforms, providing seamless connectivity and data exchange between IoT devices and legacy systems.',
    },
    {
      id: 4,
      question: 'What are the common use cases of IoT?',
      answer:
        'IoT has a wide range of use cases, including smart homes, healthcare (e.g., remote patient monitoring), industrial automation (e.g., predictive maintenance), agriculture (e.g., soil sensors), and logistics (e.g., fleet tracking). The possibilities are vast, and IoT can be applied in almost any industry to enhance efficiency, reduce costs, and improve data insights.',
    },
    {
      id: 5,
      question: 'How can IoT improve business operations?',
      answer:
        'IoT improves business operations by providing real-time data that can be analyzed for insights into performance, resource utilization, and customer behavior. This data can be used to optimize workflows, predict equipment failures, and reduce waste. It also enhances automation and remote monitoring, leading to better decision-making and cost savings.',
    },
    {
      id: 6,
      question: 'How do you handle IoT device management and maintenance?',
      answer:
        'We provide continuous monitoring and management for your IoT devices. This includes regular firmware updates, system health checks, security patching, and troubleshooting. We also offer ongoing support to ensure that your IoT system operates smoothly and efficiently over time.',
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none transition duration-300  ${
                  expandedId === item.id
                    ? 'bg-gray-700 rounded-t-xl border-b border-gray-600'
                    : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                }`}
              >
                <span className="text-lg">{item.question}</span>
                {expandedId === item.id ? (
                  <ChevronUpIcon className="h-7 w-7 text-blue-400" />
                ) : (
                  <ChevronDownIcon className="h-7 w-7 text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="bg-gray-900 text-gray-300 overflow-hidden rounded-b-xl"
                  >
                    <div className="py-5 px-6">
                      <p className="leading-relaxed">{item.answer}</p>
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

export default IotFAQ;
