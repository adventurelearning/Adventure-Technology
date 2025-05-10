import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const SoftFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'How long does it take to build a software application?',
      answer:
        'The timeline depends on the scope and complexity of your project. A simple MVP may take 6–10 weeks, while a full-featured enterprise application could take several months. We work in sprints and provide regular updates.',
    },
    {
      id: 2,
      question: 'What factors influence the cost of a software project?',
      answer:
        'Cost depends on features, technology stack, integrations, platform compatibility (web, desktop, mobile), and customizations. After understanding your goals, we provide a detailed estimate tailored to your requirements.',
    },
    {
      id: 3,
      question: 'Do you offer post-launch maintenance and updates?',
      answer:
        'Yes, we provide maintenance plans that include bug fixes, performance improvements, security updates, and feature enhancements. You can choose from monthly or on-demand support packages.',
    },
    {
      id: 4,
      question: 'Can you develop software for multiple platforms (web, mobile, desktop)?',
      answer:
        'Absolutely. We build cross-platform software using technologies like React Native, Flutter, and Electron, as well as native mobile apps and responsive web applications.',
    },
    {
      id: 5,
      question: 'Will I be involved throughout the development process?',
      answer:
        'Yes. We follow agile methodologies with regular sprint reviews, demos, and feedback cycles to keep you involved and ensure alignment with your goals.',
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-10">
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

export default SoftFAQ;
