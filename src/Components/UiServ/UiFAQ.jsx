import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const UiFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1, // Added unique ID for each FAQ item
      question: 'What is the difference between UI and UX design?',
      answer:
        'UI (User Interface) design focuses on the look and feel of a product—how users interact with it visually. UX (User Experience) design, on the other hand, ensures that the overall experience is intuitive, user-friendly, and solves user problems effectively.',
    },
    {
      id: 2,
      question: 'How do you ensure the designs are user-friendly?',
      answer:
        'We conduct thorough user research, including user personas, journey mapping, and usability testing. This helps us understand your audience and create intuitive, accessible, and engaging designs that align with their needs.',
    },
    {
      id: 3,
      question: 'What tools do you use for UI/UX design?',
      answer:
        'We use a combination of industry-standard tools such as Figma, Sketch, Adobe XD for design and prototyping. For collaboration and feedback, we also integrate tools like InVision and Zeplin.',
    },
    {
      id: 4,
      question: 'How do you test the usability of a design?',
      answer:
        'We conduct usability tests with real users to observe how they interact with the design. Based on feedback, we iterate and refine the design to eliminate pain points and enhance usability.',
    },
    {
      id: 5,
      question: 'What is the importance of responsive design?',
      answer:
        'Responsive design ensures that a product is usable and aesthetically pleasing across all devices—desktop, tablet, and mobile. It is crucial for providing a seamless experience regardless of the device the user is on.',
    },
    {
      id: 6,
      question: 'How do you make sure your designs are accessible?',
      answer:
        'We follow WCAG (Web Content Accessibility Guidelines) to ensure that our designs are accessible to users with disabilities. This includes things like color contrast, keyboard navigation, and screen reader compatibility.',
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
          UI/UX Design Frequently Asked <span className="text-blue-400">Questions</span>
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

export default UiFAQ;
