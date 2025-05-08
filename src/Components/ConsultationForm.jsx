import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const ConsultationForm = () => {
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
        <div className="bg-gradient-to-br from-blue-950 via-black to-blue-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background */}
            {/* <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-900 opacity-10"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 50],
                            y: [0, (Math.random() - 0.5) * 50],
                            transition: {
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            },
                        }}
                    />
                ))}
            </div> */}

            {/* Main form container */}
            <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:grid lg:grid-cols-2 bg-black bg-opacity-70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-2xl items-stretch"
                >
                    {/* Left side content */}
                    <div className="text-white p-12 flex flex-col justify-center bg-gradient-to-br from-blue-900/30 to-black/50 relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-5xl font-semibold leading-tight"
                            >
                                Let's Create a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                    Better Future
                                </span>{' '}
                                <br />
                                Through Technology
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 text-lg text-gray-300"
                            >
                                Book a free consultation call with our experts today and let's discuss how we can bring your vision to life.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right side form */}
                    <div className="bg-gray-950 p-8 md:p-12 flex items-center justify-center">
                        <motion.div
                            className="w-full max-w-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                                <motion.h3
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="text-2xl font-semibold text-white mb-6 text-center"
                                >
                                    Tell Us About Your Project
                                </motion.h3>

                                <form onSubmit={handleSubmit} className="space-y-5">
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
                    </div>
                </motion.div>
            </div>

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
    );
};

export default ConsultationForm;
