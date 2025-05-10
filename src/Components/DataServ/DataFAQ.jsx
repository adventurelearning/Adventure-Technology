import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const DataFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1, // Added unique ID for each FAQ item
      question: 'How long does it take to complete a data analysis project?',
      answer:
        'The timeline for a data analysis project typically ranges from a few weeks to a couple of months, depending on the complexity of the data, the depth of analysis, and the number of variables involved. Complex machine learning models may require more time for training and evaluation.',
    },
    {
      id: 2,
      question: 'What factors influence the cost of a data science project?',
      answer:
        'The cost of a data science project depends on factors such as the size and complexity of the data, the techniques and models used, project scope, the number of iterations, and any custom solutions required. We work with clients to define the scope and ensure a tailored pricing plan.',
    },
    {
      id: 3,
      question: 'Do you offer ongoing support and updates for data models?',
      answer:
        'Yes! We offer continuous support for data models, including performance monitoring, retraining with new data, and ongoing improvements. This ensures that your model remains relevant and performs optimally over time.',
    },
    {
      id: 4,
      question: 'Can I analyze my data myself after the project is completed?',
      answer:
        'Yes! We provide clear documentation and often build user-friendly dashboards or tools that allow you to explore your data and insights independently. We also offer training sessions to empower you to perform basic analysis on your own.',
    },
    {
      id: 5,
      question: 'Will my analytics dashboard be mobile-friendly?',
      answer:
        'Absolutely! All of our dashboards are designed to be fully responsive, ensuring that they function smoothly across devices including mobile phones, tablets, and desktops.',
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
              key={item.id} // Use the unique id for key
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

export default DataFAQ;
