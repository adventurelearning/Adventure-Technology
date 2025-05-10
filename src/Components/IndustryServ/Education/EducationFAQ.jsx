import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EducationFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of educational apps do you develop?',
      answer:
        'We develop a wide range of eLearning apps including LMS platforms, mobile learning apps, exam prep apps, gamified learning tools, and custom training solutions for institutions and enterprises.',
    },
    {
      id: 2,
      question: 'Can the app include interactive and gamified content?',
      answer:
        'Yes, we can integrate features like quizzes, badges, leaderboards, drag-and-drop activities, and animation to make learning more engaging and interactive.',
    },
    {
      id: 3,
      question: 'Do you support content management for courses?',
      answer:
        'Absolutely. We build systems with admin dashboards that allow easy course creation, media uploads, scheduling, assessments, and content analytics.',
    },
    {
      id: 4,
      question: 'Is it possible to include offline access for learners?',
      answer:
        'Yes. We can enable offline access to specific learning modules or downloaded content, so users can continue learning without internet connectivity.',
    },
    {
      id: 5,
      question: 'Do you help with app store submission and launch?',
      answer:
        'Yes, we assist with publishing your educational app on the App Store and Google Play, including handling policies, guidelines, and optimization for approval.',
    },
  ];

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-center mb-12">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-blue-500/20"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none ${
                    isOpen ? 'bg-gray-700 rounded-t-xl' : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                  }`}
                >
                  <span className="text-lg text-left">{item.question}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-6 w-6 text-blue-400" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={variants}
                      className="overflow-hidden bg-gray-900 text-gray-300 rounded-b-xl"
                    >
                      <div className="px-6 py-5">
                        <p className="leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationFAQ;
