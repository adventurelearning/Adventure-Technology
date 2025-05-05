import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EcommerceFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of ecommerce apps do you develop?',
      answer:
        'We develop a wide range of ecommerce applications, including custom online stores, B2B platforms, marketplaces, subscription-based services, and mobile commerce apps.',
    },
    {
      id: 2,
      question: 'Can you integrate payment gateways into the app?',
      answer:
        'Yes, we can integrate secure payment solutions like PayPal, Stripe, Razorpay, and other popular payment gateways to ensure seamless transactions for your users.',
    },
    {
      id: 3,
      question: 'Do you support multi-currency and multi-language features?',
      answer:
        'Yes, we can implement multi-currency and multi-language support in your ecommerce app to cater to international customers and provide a personalized shopping experience.',
    },
    {
      id: 4,
      question: 'Can you build mobile apps for ecommerce?',
      answer:
        'Absolutely. We specialize in building mobile-friendly ecommerce applications that work flawlessly on both iOS and Android platforms, offering a smooth and user-friendly shopping experience.',
    },
    {
      id: 5,
      question: 'Do you provide hosting and server management?',
      answer:
        'Yes, we offer scalable cloud-based hosting solutions that ensure high availability and reliability. We also handle server management, ensuring your ecommerce platform is always online and running smoothly.',
    },
    {
      id: 6,
      question: 'Is it possible to add product recommendation features?',
      answer:
        'Yes, we can implement AI-powered product recommendation systems based on user behavior, browsing history, and preferences to boost sales and enhance the shopping experience.',
    },
    {
      id: 7,
      question: 'Can the app be integrated with third-party tools?',
      answer:
        'Yes, we provide seamless integration with third-party tools such as CRM, ERP, inventory management systems, and marketing platforms to streamline your operations and improve efficiency.',
    },
    {
      id: 8,
      question: 'Do you provide ongoing maintenance and updates?',
      answer:
        'Yes, we offer continuous maintenance and support services, including regular updates, bug fixes, and performance optimization, to keep your ecommerce app ahead of the competition.',
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

export default EcommerceFAQ;
