import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const LxpFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: "What is a Learning Experience Platform (LXP)?",
      answer:
        "An LXP is a modern learning platform that personalizes training by curating content, recommending learning paths, and supporting self-directed learning. Unlike traditional LMS, it focuses on learner engagement and skill development."
    },
    {
      id: 2,
      question: "How does an LXP benefit learners?",
      answer:
        "LXPs provide personalized recommendations, social learning features, and access to diverse content like videos, microlearning, and courses. Learners can set goals, track progress, and explore content relevant to their career growth."
    },
    {
      id: 3,
      question: "Can administrators track learning progress?",
      answer:
        "Yes! LXPs provide detailed analytics and dashboards that help administrators and managers monitor learner engagement, progress, and skill development in real time."
    },
    {
      id: 4,
      question: "Does the platform support integrations with other tools?",
      answer:
        "Absolutely. LXPs integrate seamlessly with Learning Management Systems (LMS), HR systems, collaboration tools like MS Teams or Slack, and content providers for a unified learning ecosystem."
    },
    {
      id: 5,
      question: "Is the platform mobile-friendly?",
      answer:
        "Yes, learners can access courses and resources anytime, anywhere using mobile devices. LXPs are designed with responsive interfaces for flexible learning on the go."
    },
    {
      id: 6,
      question: "How secure is learner data on the platform?",
      answer:
        "LXPs use enterprise-grade security protocols, including encryption, GDPR compliance, and secure authentication to ensure learner and organizational data remain protected."
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white text-left md:text-center mb-12">
          Frequently Asked Questions about <span className="text-blue-400">Learning Experience Platforms</span>
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

export default LxpFAQ;
