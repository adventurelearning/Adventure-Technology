import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const DigitalMarketingFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: 'How long does it take to see results from digital marketing?',
      answer:
        'Typically, you’ll begin to see measurable improvements within 3 to 6 months, depending on your goals, channels used, and your industry. Paid ads may yield quicker results, while SEO and organic strategies take longer but offer lasting value.',
    },
    {
      id: 2,
      question: 'Which digital marketing channels should I invest in?',
      answer:
        'That depends on your business goals and audience. We help you prioritize the right mix—SEO for long-term growth, Google Ads for immediate visibility, and social media or email marketing for nurturing leads and retention.',
    },
    {
      id: 3,
      question: 'Do you manage campaigns or just provide strategy?',
      answer:
        'We offer both! Whether you need full hands-on management of PPC, SEO, and social media campaigns, or strategic consulting and training for your internal team, we tailor services to your needs.',
    },
    {
      id: 4,
      question: 'How do you measure campaign performance?',
      answer:
        'We track key performance indicators (KPIs) like ROI, conversions, click-through rates, engagement, and more using tools like Google Analytics, Ads Manager, and custom dashboards tailored to your goals.',
    },
    {
      id: 5,
      question: 'Can digital marketing help small or local businesses?',
      answer:
        'Absolutely! In fact, local SEO, Google Business optimization, and geo-targeted ad campaigns are powerful tools for driving foot traffic and online leads for small and location-based businesses.',
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
    <div className="bg-gradient-to-b from-black via-slate-900 to-blue-950 py-10">
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

export default DigitalMarketingFAQ;
