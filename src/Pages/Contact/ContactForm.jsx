import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        project: '',
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.number.trim()) {
            newErrors.number = 'Contact number is required';
        } else if (!/^[0-9+\-\s]+$/.test(formData.number)) {
            newErrors.number = 'Invalid phone number';
        }
        if (!formData.project.trim()) {
            newErrors.project = 'Project description is required';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('');
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            Object.keys(validationErrors).forEach((field) => {
                const input = document.getElementById(field);
                if (input) {
                    input.classList.add('animate-shake');
                    setTimeout(() => input.classList.remove('animate-shake'), 500);
                }
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post('https://adventure-back-end.vercel.app/api/contact-tech', {
                name: formData.name,
                email: formData.email,
                phoneNumber: formData.number,
                message: formData.project,
            });

            if (response.status === 200 || response.status === 201) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', number: '', project: '' });
                setErrors({});
            } else {
                throw new Error(`Failed to submit with status ${response.status}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setShowPopup(true);
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => setShowPopup(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);


    return (
        <div className="bg-gradient-to-b from-blue-900 via-black to-blue-900 min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">


            <div className="w-full max-w-6xl rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Content */}
                <motion.div
                    className="p-8 md:p-12 flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                        Ready to turn your project idea into <span className="text-blue-400">reality</span>?
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-8">
                        Get In Touch With Us
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Discovery Call",
                                description: "We'll discuss your vision and requirements in detail."
                            },
                            {
                                title: "Custom Proposal",
                                description: "You'll receive a tailored scope, timeline, and technology overview."
                            },
                            {
                                title: "Development Start",
                                description: "We finalize the plan and begin bringing your idea to life."
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                            >
                                <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 group-hover:bg-blue-500 transition-colors">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

                {/* Right side form */}


                {/* Right Form */}

                <motion.div
                    className="w-full max-w-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-2  sm:p-8 md:p-8 lg:p-8 xl:p-8">
                        <motion.h3
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center pt-2 md:pt-0 lg:pt-0 xl:pt-0"
                        >
                            Tell Us About Your Project
                        </motion.h3>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            {[{ id: 'name', type: 'text', placeholder: 'John Doe' }, { id: 'email', type: 'email', placeholder: 'john@example.com' }, { id: 'number', type: 'tel', placeholder: '+91 ' }].map(({ id, type, placeholder }) => (
                                <input
                                    key={id}
                                    id={id}
                                    name={id}
                                    type={type}
                                    value={formData[id]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder={placeholder}
                                />
                            ))}

                            <textarea
                                id="project"
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Describe your project in detail..."
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>


                {/* Popup modal */}
                <AnimatePresence>
                    {showPopup && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                            onClick={() => setShowPopup(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-800 shadow-2xl relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {submitStatus === 'success' ? (
                                    <div className="text-center">
                                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-900/30 mb-4">
                                            <svg className="h-10 w-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                        <p className="text-gray-300 mb-6">We’ll contact you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-900/30 mb-4">
                                            <svg className="h-10 w-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
                                        <p className="text-gray-300 mb-6">Submission failed. Try again later.</p>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>

    );
}

export default ContactForm;