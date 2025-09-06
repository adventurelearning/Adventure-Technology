import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AIAttendanceFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // AI Attendance System FAQ data
  const faqData = [
    {
      id: 1,
      question: "How does facial recognition attendance work?",
      answer:
        "The system captures your face via camera and matches it with the stored database in real-time to mark attendance accurately."
    },
    {
      id: 2,
      question: "Can it work offline?",
      answer:
        "Yes, attendance is recorded locally on the device and syncs automatically with the cloud once internet is available."
    },
    {
      id: 3,
      question: "Is the system secure against spoofing?",
      answer:
        "Absolutely. AI ensures live presence verification, preventing photo/video or proxy attendance attempts."
    },
    {
      id: 4,
      question: "What devices are required?",
      answer:
        "A high-definition camera with an embedded board (like Raspberry Pi, Jetson Nano, or custom board) is required for real-time processing."
    },
    {
      id: 5,
      question: "Can I view attendance reports on my phone or PC?",
      answer:
        "Yes, the system provides dashboard access for both desktop and mobile, allowing real-time monitoring and reports."
    },
    {
      id: 6,
      question: "Does it offer cloud storage?",
      answer:
        "You can store attendance logs locally or sync them to cloud dashboards based on your preference."
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
          <span className="text-blue-400">AI Attendance System</span>
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

export default AIAttendanceFAQ;
