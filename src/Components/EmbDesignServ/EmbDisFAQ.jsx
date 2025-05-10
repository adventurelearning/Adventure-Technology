import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EmbDisFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'How long does it take to develop an embedded product?',
      answer:
        'The timeline depends on project complexity, component availability, and compliance requirements. A simple product may take 2–3 months, while complex systems can take 6–12 months or more.',
    },
    {
      id: 2,
      question: 'Do you handle both hardware and firmware development?',
      answer:
        'Yes, we offer full-stack embedded product design services—covering schematic design, PCB layout, firmware development, driver integration, and validation.',
    },
    {
      id: 3,
      question: 'Can you help us with compliance and certification?',
      answer:
        'Absolutely. We design products with regulatory standards in mind (e.g., CE, FCC, ISO), and assist with EMC testing, documentation, and pre-certification guidance.',
    },
    {
      id: 4,
      question: 'What microcontrollers or platforms do you support?',
      answer:
        'We work with a variety of platforms including STM32, ESP32, NXP, Microchip, Nordic, and more. We also develop on RTOS or bare-metal depending on project requirements.',
    },
    {
      id: 5,
      question: 'Do you offer support after the product is deployed?',
      answer:
        'Yes, we provide post-deployment support including firmware updates, bug fixes, optimization, and hardware revision updates as needed.',
    },
    {
      id: 6,
      question: 'Can you integrate sensors and communication modules?',
      answer:
        'Yes. We integrate a wide range of sensors (temperature, motion, etc.) and communication interfaces (Bluetooth, LoRa, Wi-Fi, cellular) as per application requirements.',
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-10">
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
                className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none transition duration-300 ${
                  expandedId === item.id
                    ? 'bg-gray-700 rounded-t-xl border-b border-gray-600'
                    : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                }`}
              >
                <span className="text-lg text-start">{item.question}</span>
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
                      <p className="leading-relaxed text-start">{item.answer}</p>
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

export default EmbDisFAQ;
