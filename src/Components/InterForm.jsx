import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        college: '',
        degree: '',
        internshipDomain: '',
        mainCourse: '',
        trainingMode: '',
        comments: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState('');

    const domains = [
        { id: 'Full Stack Development', name: 'Full Stack Development' },
        { id: 'Embedded System / IOT', name: 'Embedded System / IOT' },
        { id: 'Data Science & Analytics', name: 'Data Science & Analytics' },
        { id: 'AI & ML', name: 'AI & ML' },
        { id: 'Cloud Computing', name: 'Cloud Computing' },
        { id: 'Networking', name: 'Networking' },
        { id: 'Cyber Security', name: 'Cyber Security' },
        { id: 'Robotics', name: 'Robotics' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact Number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = 'Contact Number must be 10 digits';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required';
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!formData.college.trim()) {
            newErrors.college = 'College Name is required';
            isValid = false;
        }

        if (!formData.degree.trim()) {
            newErrors.degree = 'Degree is required';
            isValid = false;
        }

        if (!formData.mainCourse.trim()) {
            newErrors.mainCourse = 'Main Course is required';
            isValid = false;
        }

        if (!formData.internshipDomain) {
            newErrors.internshipDomain = 'Please select an internship domain';
            isValid = false;
        }

        if (!formData.trainingMode) {
            newErrors.trainingMode = 'Please select a training mode';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Don't proceed if form is invalid
        }

        setIsLoading(true);
        try {
            const response = await fetch('https://adventure-back-end.vercel.app/api/intern/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    contactNumber: formData.contactNumber,
                    email: formData.email,
                    collegeName: formData.college,
                    degree: formData.degree,
                    mainCourse: formData.mainCourse,
                    internshipDomain: formData.internshipDomain,
                    trainingMode: formData.trainingMode,
                    additionalComments: formData.comments,
                }),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                alert('Application submitted successfully!');
                setFormData({
                    fullName: '',
                    contactNumber: '',
                    email: '',
                    college: '',
                    degree: '',
                    mainCourse: '',
                    internshipDomain: '',
                    trainingMode: '',
                    comments: '',
                });
                setUrl(''); // Clear the resume URL after successful submission
            } else {
                const errorData = await response.json();
                console.error('Form submission failed:', errorData);
                alert('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-12 flex md:flex-nowrap flex-col md:flex-row items-start gap-8">

                {/* Left Content */}
                <div className="w-full md:w-1/2 md:sticky md:top-28 md:z-10">
                    <motion.div
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6 bg-clip-text">
                            Launch Your Career
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-300">
                            Apply for Our Exclusive Internship Program
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-300 text-lg">
                                        Gain <span className="text-blue-300 font-medium">real-world experience</span> with industry experts
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-300 text-lg">
                                        Work on <span className="text-blue-300 font-medium">cutting-edge projects</span> that matter
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-300 text-lg">
                                        Get <span className="text-blue-300 font-medium">mentorship</span> from top professionals
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gradient-to-r from-blue-900/50 to-gray-900/50 rounded-xl border border-gray-800 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-blue-300">Why Choose Us?</h3>
                            <p className="text-gray-300">
                                Our internship program has helped over 5,000 students launch successful careers in tech.
                                With 7+ years in EdTech, we provide the perfect platform to bridge academia and industry.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-800 shadow-2xl mt-8 md:mt-0"
                >
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                            Internship Application
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Your career starts here. Submit your application today
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Form Fields */}
                        <div>
                            <label className="block text-gray-300 mb-2">Full Name *</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label className="block text-gray-300 mb-2">Contact Number *</label>
                            <input
                                type="text"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your contact number"
                            />
                            {errors.contactNumber && <p className="text-red-400 text-sm mt-1">{errors.contactNumber}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* College Name */}
                        <div>
                            <label className="block text-gray-300 mb-2">College Name *</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your college name"
                            />
                            {errors.college && <p className="text-red-400 text-sm mt-1">{errors.college}</p>}
                        </div>

                        {/* Degree */}
                        <div>
                            <label className="block text-gray-300 mb-2">Degree *</label>
                            <input
                                type="text"
                                name="degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your degree (e.g., BSc, BTech, etc.)"
                            />
                            {errors.degree && <p className="text-red-400 text-sm mt-1">{errors.degree}</p>}
                        </div>

                        {/* Main Course */}
                        <div>
                            <label className="block text-gray-300 mb-2">Main Course *</label>
                            <input
                                type="text"
                                name="mainCourse"
                                value={formData.mainCourse}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Enter your main course (e.g., Computer Science)"
                            />
                            {errors.mainCourse && <p className="text-red-400 text-sm mt-1">{errors.mainCourse}</p>}
                        </div>

                        {/* Internship Domain */}
                        <div>
                            <label className="block text-gray-300 mb-2">Internship Domain *</label>
                            <select
                                name="internshipDomain"
                                value={formData.internshipDomain}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            >
                                <option value="" className="bg-gray-800">-- Select Domain --</option>
                                {domains.map(d => (
                                    <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                                ))}
                            </select>
                            {errors.internshipDomain && <p className="text-red-400 text-sm mt-1">{errors.internshipDomain}</p>}
                        </div>

                        {/* Training Mode */}
                        <div>
                            <label className="block text-gray-300 mb-2">Training Mode *</label>
                            <select
                                name="trainingMode"
                                value={formData.trainingMode}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            >
                                <option value="">-- Select Mode --</option>
                                <option value="online">Online Training</option>
                                <option value="offline">Offline Training</option>
                            </select>
                            {errors.trainingMode && <p className="text-red-400 text-sm mt-1">{errors.trainingMode}</p>}
                        </div>

                        {/* Comments */}
                        <div>
                            <label className="block text-gray-300 mb-2">Additional Comments</label>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                placeholder="Any additional information"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition duration-200 ease-in-out"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default InterForm;
