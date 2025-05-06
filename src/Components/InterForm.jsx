import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InterForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        college: '',
        degree: '',
        completionYear: '',
        internshipDomain: '',
        mainCourse: '',
        subCourse: '',
        comments: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const degrees = [
        { id: 'ug', name: 'Undergraduate' },
        { id: 'pg', name: 'Postgraduate' },
        { id:'others',name:'Other'}
    ];

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

        const courseOptions = {
        ug: {
            BA: [
                "English", "History", "Economics", "Political Science", "Sociology",
                "Psychology", "Philosophy", "Public Administration", "Journalism & Mass Communication",
                "Fine Arts", "Languages (Hindi, Tamil, French, etc.)", "Theology", "Geography", "Linguistics",
                "Anthropology", "Music", "Film Studies", "Tourism Management", "Criminology"
            ],
            BSc: [
                "Physics", "Chemistry", "Mathematics", "Biology", "Computer Science",
                "Biotechnology", "Microbiology", "Environmental Science", "Data Science", "Forensic Science",
                "Zoology", "Botany", "Genetics", "Astronomy", "Ecology", "Geology", "Biochemistry", "Agriculture"
            ],
            BCom: [
                "General", "Accounting & Finance", "Banking", "Corporate Secretaryship", "E-Commerce",
                "Business Analytics", "Taxation", "Financial Markets", "Marketing", "International Business",
                "Human Resource Management", "Supply Chain Management"
            ],
            BTech: [
                "Computer Science", "Information Technology", "Mechanical Engineering", "Civil Engineering",
                "Electrical & Electronics Engineering (EEE)", "Electronics & Communication Engineering (ECE)",
                "Artificial Intelligence (AI)", "Data Science", "Biotechnology", "Aerospace Engineering",
                "Automobile Engineering", "Robotics", "Chemical Engineering", "Civil Engineering (Structural, Construction)",
                "Instrumentation & Control", "Industrial Engineering", "Petroleum Engineering", "Environmental Engineering",
                "Mining Engineering", "Textile Engineering", "Materials Science & Engineering", "Biochemical Engineering",
                "Food Technology", "Nuclear Engineering", "Mechatronics", "Renewable Energy Engineering", "Computer Engineering"
            ],
            BBA: [
                "General", "HR", "Finance", "Marketing", "Operations", "International Business",
                "Tourism Management", "Hospital Management", "Sports Management", "Retail Management",
                "Event Management", "Supply Chain Management", "Logistics Management"
            ],
            BCA: [
                "Computer Applications", "Information Technology", "Software Engineering", "Data Science",
                "Networking", "Web Development", "Mobile App Development", "Cloud Computing", "Artificial Intelligence"
            ],
            BHM: [
                "Hotel Management", "Tourism and Hospitality", "Event Management", "Culinary Arts", "Restaurant Management"
            ],
            BDes: [
                "Product Design", "Graphic Design", "Fashion Design", "Interior Design", "User Experience Design", "Industrial Design"
            ],
            BFA: [
                "Fine Arts", "Sculpture", "Painting", "Photography", "Animation", "Multimedia", "Applied Arts"
            ],
            BSW: [
                "Social Work", "Community Development", "Human Rights", "Rural Development", "Disaster Management"
            ],
            BJMC: [
                "Journalism & Mass Communication", "Advertising", "Public Relations", "Broadcasting",
                "Film Making", "Photography", "Digital Media", "Content Writing"
            ],
            BPT: [
                "Physiotherapy", "Rehabilitation", "Sports Medicine", "Orthopedic Physiotherapy"
            ],
            BPharm: [
                "Pharmacy", "Pharmaceutical Sciences", "Medicinal Chemistry", "Clinical Pharmacy"
            ],
            BScN: [
                "Nursing", "Healthcare Management", "Public Health", "Nursing Administration"
            ],
        },
        pg: {
            MA: [
                "English", "History", "Economics", "Political Science", "Sociology", "Psychology",
                "Philosophy", "Public Administration", "International Relations", "Linguistics", "Anthropology",
                "Geography", "Journalism & Mass Communication", "Theology", "Fine Arts", "Music", "Tourism Management"
            ],
            MSc: [
                "Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Biotechnology", "Microbiology",
                "Zoology", "Botany", "Environmental Science", "Data Science", "Genetics", "Astronomy", "Geology",
                "Ecology", "Biochemistry", "Agriculture", "Food Science", "Applied Mathematics", "Physics (Quantum Mechanics)",
                "Nuclear Physics", "Organic Chemistry", "Medical Microbiology"
            ],
            MCom: [
                "General", "Accounting & Finance", "Banking", "E-Commerce", "Business Analytics", "Taxation",
                "Financial Markets", "Corporate Governance", "Human Resource Management", "Marketing", "International Business"
            ],
            MTech: [
                "Computer Science", "Information Technology", "Software Engineering", "Data Science", "Cybersecurity",
                "Artificial Intelligence", "Robotics", "Machine Learning", "Biotechnology", "Mechanical Engineering",
                "Civil Engineering", "Structural Engineering", "Electrical Engineering", "Electronics Engineering",
                "Aerospace Engineering", "Automobile Engineering", "Chemical Engineering", "Environmental Engineering",
                "Nanotechnology", "Biomedical Engineering", "Petroleum Engineering", "Renewable Energy Engineering",
                "VLSI Design", "Power Systems Engineering", "Structural Engineering"
            ],
            MBA: [
                "General", "HR", "Finance", "Marketing", "Operations", "International Business", "Supply Chain Management",
                "Retail Management", "Hospital Management", "Tourism Management", "Sports Management", "Project Management",
                "Entrepreneurship", "Digital Marketing", "Business Analytics", "Banking and Finance"
            ],
            MCA: [
                "Computer Applications", "Information Technology", "Software Engineering", "Data Science", "AI & Machine Learning",
                "Cybersecurity", "Networking", "Mobile App Development", "Cloud Computing"
            ],
            LLM: [
                "Constitutional Law", "Corporate Law", "Criminal Law", "Human Rights Law", "Environmental Law",
                "International Business Law", "Taxation Law", "Family Law", "Intellectual Property Law", "Cyber Law"
            ],
            MSW: [
                "Social Work", "Community Development", "Human Rights", "Rural Development", "Mental Health",
                "Disaster Management", "Urban Planning"
            ],
            MPharm: [
                "Pharmacology", "Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacognosy", "Clinical Pharmacy", "Medicinal Chemistry"
            ],
            MPT: [
                "Physiotherapy", "Orthopedic Physiotherapy", "Neurological Physiotherapy", "Sports Physiotherapy",
                "Pediatric Physiotherapy", "Geriatric Physiotherapy"
            ],
            MDes: [
                "Product Design", "Fashion Design", "Graphic Design", "User Experience Design", "Interior Design", "Industrial Design"
            ],
            MEd: [
                "Educational Leadership", "Special Education", "Curriculum and Instruction", "Educational Psychology",
                "Distance Education", "Education Technology"
            ]
        }
    };
    const years = [];
    for (let i = new Date().getFullYear(); i >= 2000; i--) {
        years.push({ id: i.toString(), name: i.toString() });
    }

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

        if (!formData.degree) {
            newErrors.degree = 'Please select your degree';
            isValid = false;
        }

        if (!formData.mainCourse) {
            newErrors.mainCourse = 'Please select a main course';
            isValid = false;
        }

        if (!formData.subCourse) {
            newErrors.subCourse = 'Please select a sub course';
            isValid = false;
        }

        if (!formData.internshipDomain) {
            newErrors.internshipDomain = 'Please select an internship domain';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log(formData);
            alert('Form submitted successfully! Check console for data.');
            setFormData({
                fullName: '',
                contactNumber: '',
                email: '',
                college: '',
                degree: '',
                completionYear: '',
                internshipDomain: '',
                mainCourse: '',
                subCourse: '',
                comments: '',
            });
        } catch (error) {
            console.error('Form submission failed:', error);
            alert('Form submission failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-12 flex md:flex-nowrap flex-col md:flex-row items-start gap-8">

                {/* Left Content */}
                <div className="w-full md:w-1/2 sticky top-28 z-10">
                    <motion.div
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6 bg-clip-text  ">
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
                    className="w-full md:w-1/2 bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-2xl mt-8 md:mt-0"
                >
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                            Internship Application
                        </h2>

                        <p className="text-gray-400 mt-2">
                        Your career starts here. Submit your application today
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Fields */}
                        {/* Full Name */}
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
                            <select
                                name="degree"
                                value={formData.degree}
                                onChange={(e) => {
                                    setFormData({ ...formData, degree: e.target.value, mainCourse: '', subCourse: '' });
                                    setErrors({ ...errors, degree: '' });
                                }}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            >
                                <option value="" className="bg-gray-800">-- Select Degree --</option>
                                {degrees.map(d => (
                                    <option key={d.id} value={d.id} className="bg-gray-800">{d.name}</option>
                                ))}
                            </select>
                            {errors.degree && <p className="text-red-400 text-sm mt-1">{errors.degree}</p>}
                        </div>

                        {/* Main Course */}
                        <div>
                            <label className="block text-gray-300 mb-2">Main Course *</label>
                            <select
                                name="mainCourse"
                                value={formData.mainCourse}
                                onChange={(e) => {
                                    setFormData({ ...formData, mainCourse: e.target.value, subCourse: '' });
                                    setErrors({ ...errors, mainCourse: '', subCourse: '' });
                                }}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                            >
                                <option value="" className="bg-gray-800">-- Select Main Course --</option>
                                {formData.degree === 'ug' && Object.keys(courseOptions.ug).map(course => (
                                    <option key={course} value={course} className="bg-gray-800">{course}</option>
                                ))}
                                {formData.degree === 'pg' && Object.keys(courseOptions.pg).map(course => (
                                    <option key={course} value={course} className="bg-gray-800">{course}</option>
                                ))}
                            </select>
                            {errors.mainCourse && <p className="text-red-400 text-sm mt-1">{errors.mainCourse}</p>}
                        </div>

                        {/* Sub Course */}
                        {formData.mainCourse && (
                            <div>
                                <label className="block text-gray-300 mb-2">Sub Course *</label>
                                <select
                                    name="subCourse"
                                    value={formData.subCourse}
                                    onChange={handleChange}
                                    className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                                >
                                    <option value="" className="bg-gray-800">-- Select Sub Course --</option>
                                    {formData.degree === 'ug' && courseOptions.ug[formData.mainCourse].map(sub => (
                                        <option key={sub} value={sub} className="bg-gray-800">{sub}</option>
                                    ))}
                                    {formData.degree === 'pg' && courseOptions.pg[formData.mainCourse].map(sub => (
                                        <option key={sub} value={sub} className="bg-gray-800">{sub}</option>
                                    ))}
                                </select>
                                {errors.subCourse && <p className="text-red-400 text-sm mt-1">{errors.subCourse}</p>}
                            </div>
                        )}

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

                        {/* Comments */}
                        <div>
                            <label className="block text-gray-300 mb-2">Additional Comments</label>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full bg-gray-800/70 border border-gray-700 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                                rows={3}
                                placeholder="Any additional info..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : 'Apply Now'}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </div>


    );
};

export default InterForm;