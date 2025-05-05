import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const SaaSFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'What types of SaaS applications do you develop?',
      answer:
        'We develop a variety of SaaS applications including CRM systems, ERP platforms, project management tools, eCommerce solutions, and custom SaaS products tailored to your business needs.',
    },
    {
      id: 2,
      question: 'How do you ensure scalability in SaaS applications?',
      answer:
        'We design SaaS applications with cloud infrastructure that supports horizontal scaling. By utilizing microservices architecture, we ensure that your app can handle increasing users and data traffic efficiently.',
    },
    {
      id: 3,
      question: 'Can you integrate third-party services and APIs?',
      answer:
        'Yes, we integrate third-party services and APIs to enhance the functionality of your SaaS app, whether it’s for payment gateways, CRM integrations, analytics tools, or social media platforms.',
    },
    {
      id: 4,
      question: 'What security measures do you implement in SaaS solutions?',
      answer:
        'Our SaaS development services include robust security features like data encryption, multi-factor authentication, role-based access control, secure APIs, and regular security audits to ensure data protection.',
    },
    {
      id: 5,
      question: 'Do you offer post-launch support and maintenance?',
      answer:
        'Yes, we provide ongoing support and maintenance services to ensure your SaaS application runs smoothly. This includes bug fixes, updates, feature enhancements, and performance optimizations.',
    },
    {
      id: 6,
      question: 'How do you handle SaaS app updates and version control?',
      answer:
        'We follow a continuous delivery model, allowing us to roll out new updates and features with minimal downtime. We also use version control tools to manage and track changes throughout the development process.',
    },
    {
      id: 7,
      question: 'What technologies do you use for SaaS development?',
      answer:
        'We utilize a range of modern technologies including React, Node.js, AWS, Azure, and Docker for cloud deployment. Our stack is chosen based on the specific needs and goals of your SaaS application.',
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

export default SaaSFAQ;
