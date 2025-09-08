import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const EcomFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: "How do I place an order on your store?",
      answer:
        "Simply browse our products, add your favorite items to the cart, and proceed to checkout. You can pay securely using multiple payment options, and you’ll receive an order confirmation instantly."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer:
        "We support all major credit/debit cards, digital wallets, UPI, and net banking. For some regions, we also offer cash-on-delivery (COD)."
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we’ll send you a tracking link via email or SMS. You can monitor the delivery status in real-time until it reaches your doorstep."
    },
    {
      id: 4,
      question: "What is your return and refund policy?",
      answer:
        "We offer a hassle-free return policy. If you’re not satisfied, you can return your order within the specified period for a full refund or exchange. Refunds are initiated after the returned item has been inspected and approved as per our return guidelines."
    },
    // {
    //   id: 5,
    //   question: "Do you offer international shipping?",
    //   answer:
    //     "Yes, we ship worldwide! Shipping costs and delivery times vary depending on your location, and you’ll see the details at checkout before placing the order."
    // },
    {
      id: 6,
      question: "Is my personal and payment information secure?",
      answer:
        "Absolutely. All transactions are encrypted with the latest security protocols. Your payment details are processed through trusted gateways, ensuring complete safety and privacy."
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
 <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pb-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left md:text-center mb-10 sm:mb-12 leading-snug">
        Frequently Asked Questions about{" "}
        <span className="text-blue-400">Shopping</span>
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

export default EcomFAQ;
