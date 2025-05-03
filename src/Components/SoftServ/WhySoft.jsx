import React from 'react';
import {
    CodeSlash,
    ShieldLock,
    GraphUp,
    Kanban,
    PersonBadge,
    Tools
} from 'react-bootstrap-icons';

const WhySoft = () => {
    const expertisePoints = [
        {
            title: 'Skilled Software Engineers',
            description: 'Our team has deep experience in building complex, high-performance software across various platforms including desktop, mobile, and cloud.',
            icon: <CodeSlash className="text-blue-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Clean, Maintainable Codebase',
            description: 'We follow industry best practices and design patterns to ensure your software is easy to scale, extend, and maintain.',
            icon: <GraphUp className="text-purple-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Secure & Scalable Architecture',
            description: 'Whether it’s cloud-native, microservices-based, or monolithic — we engineer software that’s resilient, secure, and future-proof.',
            icon: <ShieldLock className="text-green-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Agile Software Lifecycle',
            description: 'From planning to release, we follow Agile and DevOps practices to deliver incremental value, fast feedback, and continuous improvement.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'End-to-End Project Ownership',
            description: 'A dedicated project manager ensures seamless collaboration, on-time delivery, and complete visibility throughout the development process.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Post-Deployment Support & Evolution',
            description: 'We don’t stop at delivery — we partner with you for long-term success, offering support, optimization, and feature rollouts post-launch.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-gray-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto ">
                <div className="text-center mb-12 ">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Us for Software Development
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Trusted by startups and enterprises to build robust, scalable, and future-ready software solutions.
                    </p>
                </div>

                <div className="gap-8">
                    {expertisePoints.map((point, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800  rounded-lg p-6 border-t-4 ${point.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-2 rounded-lg bg-gray-700 mr-4">
                                    {point.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    {point.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 pl-12">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhySoft;
