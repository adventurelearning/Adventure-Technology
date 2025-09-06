import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const CrmFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const faqData = [
    {
      id: 1,
      question: "What is CRM software and why do I need it?",
      answer:
        "CRM (Customer Relationship Management) software helps you manage all customer interactions, sales pipelines, and support processes in one place. It centralizes data so you can build stronger relationships, close deals faster, and improve customer satisfaction."
    },
    {
      id: 2,
      question: "Can I track leads and sales opportunities?",
      answer:
        "Yes! Our CRM provides a visual sales pipeline where you can track leads, monitor deal stages, set reminders, and get insights into your revenue forecasts. This ensures no opportunity slips through the cracks."
    },
    {
      id: 3,
      question: "Does the CRM support automation?",
      answer:
        "Absolutely. You can automate repetitive tasks such as sending follow-up emails, assigning leads to sales reps, and scheduling meetings. Automation saves time, reduces manual errors, and helps your team focus on building meaningful customer relationships."
    },
    {
      id: 4,
      question: "Is my customer data secure?",
      answer:
        "Yes. We use enterprise-grade encryption for data in transit and at rest. Our CRM also complies with global data protection standards like GDPR, ensuring your customer information is always secure and confidential."
    },
    {
      id: 5,
      question: "Can the CRM integrate with my existing tools?",
      answer:
        "Our CRM integrates seamlessly with popular tools such as email, calendars, marketing automation platforms, and customer support systems. This allows you to streamline workflows and eliminate data silos."
    },
    {
      id: 6,
      question: "Can I customize the CRM for my business needs?",
      answer:
        "Definitely. Our CRM is flexible—you can customize dashboards, fields, workflows, and reports to match your unique business processes. Whether you're in sales, marketing, or customer support, the system adapts to your needs."
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
       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-left md:text-center mb-10 sm:mb-12 leading-snug">
          Frequently Asked Questions about <span className="text-blue-400">CRM</span>
        </h2>

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

export default CrmFAQ;
