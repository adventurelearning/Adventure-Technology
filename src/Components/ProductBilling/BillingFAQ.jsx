import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const BillingFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    // Toggle between open and closed
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: "What is billing software and why do I need it?",
      answer:
        "Billing software helps you generate invoices, track payments, manage customers, and monitor sales seamlessly. Instead of handling manual paperwork or spreadsheets, it automates calculations like GST, discounts, and totals, saving time and reducing errors."
    },
    {
      id: 2,
      question: "Can I track stock and customer details with this software?",
      answer:
        "Yes! Our billing software is more than just invoicing. You can manage product stock levels, receive low-stock alerts, and maintain customer records with contact details, credit balances, and purchase history—all in one place."
    },
    {
      id: 3,
      question: 'Can I set up recurring invoices for subscriptions?',
      answer:
        'Yes, our software is designed for subscription management. You can easily create and schedule recurring invoices for a set period, which will be automatically generated and sent to your customers, ensuring timely payments without manual effort.',
    },
    {
      id: 4,
      question: 'Is my financial data secure?',
      answer:
        'We take data security very seriously. All financial information is encrypted both in transit and at rest using industry-standard protocols. Our systems are regularly audited to ensure compliance with global security standards.',
    },
    {
      id: 5,
      question: 'How can I get support if I have a problem?',
      answer:
        'We offer comprehensive support through multiple channels. You can access our detailed knowledge base and video tutorials, submit a support ticket via the portal, or contact our support team directly via live chat or phone during business hours.',
    },
    {
      id: 6,
      question: 'Can I customize my invoices with my company logo?',
      answer:
        'Absolutely. Our software allows for extensive customization. You can upload your company logo, choose from a variety of professional templates, and adjust color schemes and fonts to ensure your invoices align with your brand identity.',
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
  <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 pb-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left md:text-center mb-10 sm:mb-12 leading-snug">
        Frequently Asked Questions about{" "}
        <span className="text-blue-400">Billing</span>
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

export default BillingFAQ;
