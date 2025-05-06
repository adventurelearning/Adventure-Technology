import React from 'react';
import {
    FaFileAlt,
    FaSearch,
    FaUsers,
    FaClipboardCheck,
    FaHandshake,
} from 'react-icons/fa';

const CareerProcess = () => {
    const processSteps = [
        { title: 'Apply', desc: 'Submit your application online', icon: FaFileAlt },
        { title: 'Review', desc: 'We assess your qualifications', icon: FaSearch },
        { title: 'Interview', desc: 'Virtual or in-person meetings', icon: FaUsers },
        { title: 'Assess', desc: 'Role-specific evaluations', icon: FaClipboardCheck },
        { title: 'Offer', desc: 'Welcome to the team!', icon: FaHandshake },
    ];

    return (
        <div className="bg-black text-white px-6 py-5">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-semibold mb-4">Our Hiring <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300'>Journey</span></h1>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                        A transparent look at our recruitment process and how you can prepare.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-semibold text-white mb-10 border-b border-blue-700 inline-block pb-2">
                        The Process
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="group bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:bg-opacity-80"
                            >
                                <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center rounded-full bg-blue-800">
                                    <step.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-blue-100 mb-2">{step.title}</h3>
                                <p className="text-sm text-blue-200">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Text */}
                <div className="text-center text-blue-300">
                    <p className="text-lg">We look forward to reviewing your application!</p>
                </div>
            </div>
        </div>
    );
};

export default CareerProcess;
