import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AgricultureFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of agricultural software do you develop?',
      answer:
        'We specialize in creating farm management software, crop tracking systems, livestock monitoring solutions, and custom applications tailored to the specific needs of agricultural businesses.',
    },
    {
      id: 2,
      question: 'How do you ensure scalability in agriculture software?',
      answer:
        'We design agriculture software with cloud-based architecture to ensure that your farm management systems can grow along with your business. This includes support for scaling data storage, user load, and real-time data processing.',
    },
    {
      id: 3,
      question: 'Can your software integrate with farming equipment and IoT devices?',
      answer:
        'Yes, our agriculture software can integrate with farming machinery, sensors, and IoT devices to track crop health, soil moisture, weather conditions, and more, providing a seamless ecosystem for managing your farm.',
    },
    {
      id: 4,
      question: 'What security features are included in your agricultural software solutions?',
      answer:
        'Our solutions include robust security features such as end-to-end data encryption, secure cloud storage, role-based access control, and regular vulnerability assessments to protect your farm’s sensitive data.',
    },
    {
      id: 5,
      question: 'Do you provide post-launch support and maintenance for agriculture software?',
      answer:
        'Yes, we offer ongoing support and maintenance, including troubleshooting, bug fixes, feature updates, and performance optimization to ensure your software is always up-to-date and performing optimally.',
    },
    {
      id: 6,
      question: 'How do you handle updates and version control in agricultural software?',
      answer:
        'We follow an agile development process and implement a continuous delivery pipeline to roll out software updates efficiently. Version control tools are used to track every change, ensuring a stable and consistent application.',
    },
    {
      id: 7,
      question: 'What technologies do you use for developing agricultural software?',
      answer:
        'We use modern technologies such as React for the frontend, Node.js for backend development, AWS and Azure for cloud services, and IoT integration platforms for device connectivity to build scalable and reliable agricultural software solutions.',
    },
    {
      id: 8,
      question: 'Can you customize software for specific farming needs?',
      answer:
        'Absolutely! Our agricultural software is highly customizable to address the specific requirements of your farm. Whether you need crop management, livestock tracking, or resource optimization, we can tailor the solution to fit your business model.',
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
                className="rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-all duration-300 hover:shadow-green-500/20"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`w-full flex items-center justify-between py-5 px-6 text-gray-100 font-semibold focus:outline-none ${
                    isOpen ? 'bg-gray-700 rounded-t-xl' : 'bg-gray-800 hover:bg-gray-700 rounded-xl'
                  }`}
                >
                  <span className="text-lg text-left">{item.question}</span>
                  {isOpen ? (
                    <ChevronUpIcon className="h-6 w-6 text-green-400" />
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

export default AgricultureFAQ;
