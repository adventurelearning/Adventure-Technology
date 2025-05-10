import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EmbFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'How long does it take to develop embedded software?',
      answer:
        'The timeline for embedded software development varies based on the complexity of the hardware, software requirements, and product features. It can range from a few months for simple systems to a year or more for complex embedded solutions that require real-time operating systems or integration with other systems.',
    },
    {
      id: 2,
      question: 'What hardware is needed for embedded software development?',
      answer:
        'Embedded software development requires specific hardware platforms like microcontrollers, microprocessors, development boards (e.g., Raspberry Pi, Arduino), and often, specialized sensors or actuators. The choice of hardware depends on the project’s requirements (e.g., processing power, I/O, power consumption).',
    },
    {
      id: 3,
      question: 'How do you ensure the reliability of embedded systems?',
      answer:
        'We ensure reliability through rigorous testing (e.g., unit testing, hardware-in-the-loop testing), redundancy in critical systems, and the use of safety standards (e.g., ISO 26262 for automotive). Additionally, we focus on optimizing code efficiency and ensuring proper memory management to minimize system failures.',
    },
    {
      id: 4,
      question: 'Can embedded software be updated after deployment?',
      answer:
        'Yes! Embedded systems can be updated via Over-The-Air (OTA) updates, especially in IoT devices. This allows us to patch bugs, introduce new features, or update security protocols. Updates are typically delivered via secure communication channels to ensure data integrity and safety.',
    },
    {
      id: 5,
      question: 'How do you handle debugging in embedded systems?',
      answer:
        'Debugging embedded systems involves using specialized tools like JTAG debuggers, in-circuit debuggers, and oscilloscopes. We also employ logging, real-time monitoring, and simulation tools to diagnose and fix issues. Breakpoints and watchpoints are set to track hardware-software interactions.',
    },
    {
      id: 6,
      question: 'What is real-time operating system (RTOS) and when is it needed?',
      answer:
        'An RTOS is a specialized operating system designed for systems that require precise timing and predictable behavior, such as in automotive, aerospace, and industrial applications. RTOS ensures that tasks are executed within strict timing constraints. We use RTOS when the system needs to handle real-time data or multiple time-critical tasks.',
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

export default EmbFAQ;
