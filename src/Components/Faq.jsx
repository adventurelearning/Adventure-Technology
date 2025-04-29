import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Make sure this is installed
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: 'What mobile app development services do you offer?',
    answer:
      'We offer native iOS and Android app development, cross-platform frameworks like React Native and Flutter, UI/UX design, testing, deployment, and ongoing maintenance.',
  },
  {
    id: 2,
    question: 'What software development services do you offer?',
    answer:
      'We provide custom web apps, enterprise software, APIs, cloud solutions, desktop apps, and software consulting tailored to your business needs.',
  },
  {
    id: 3,
    question: 'What is the average cost and timeline for developing a mobile app?',
    answer:
      'Costs vary by complexity. Simple apps take 2–4 months ($10k–$30k), complex ones take 6+ months ($50k+). We provide estimates after a detailed consultation.',
  },
  {
    id: 4,
    question: 'How do you ensure the security and quality of your software?',
    answer:
      'We apply secure coding practices, perform regular audits and vulnerability testing. We use unit testing, integration testing, and UAT for quality assurance.',
  },
  {
    id: 5,
    question: 'Can you handle both frontend and backend development?',
    answer:
      'Yes! We are a full-stack team experienced in frontend (React, Angular) and backend (Node.js, Django, etc.), providing complete end-to-end development.',
  },
  {
    id: 6,
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Absolutely. We offer ongoing support, bug fixes, performance tuning, and feature upgrades based on your needs after launch.',
  },
];

const Faq = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
                    className="bg-gray-900  text-gray-300  overflow-hidden rounded-b-xl"
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

export default Faq;
