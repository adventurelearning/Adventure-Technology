import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: 'Who can apply for an internship at your company?',
    answer:
      'Students pursuing undergraduate or postgraduate degrees in computer science, IT, business, marketing, or related fields are welcome to apply.',
  },
  {
    id: 2,
    question: 'What is the duration of your internship programs?',
    answer:
      'Our internships typically last from 8 to 12 weeks, depending on the role and availability of the intern.',
  },
  {
    id: 3,
    question: 'Are internships paid or unpaid?',
    answer:
      'We offer both paid and unpaid internships depending on the role, project complexity, and department budget.',
  },
  {
    id: 4,
    question: 'Do interns receive mentorship during the program?',
    answer:
      'Yes, every intern is paired with a mentor to guide them through projects, provide feedback, and support their learning.',
  },
  {
    id: 5,
    question: 'Can an internship lead to a full-time opportunity?',
    answer:
      'Absolutely. Outstanding interns may be offered full-time roles based on performance and organizational needs.',
  },
  {
    id: 6,
    question: 'How can I apply for an internship?',
    answer:
      'You can apply directly through our Careers page or via internship platforms like Internshala or LinkedIn.',
  },
];

const InternfAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
        Frequently Asked<span className="text-blue-400"> Questions</span>
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

export default InternfAQ;
