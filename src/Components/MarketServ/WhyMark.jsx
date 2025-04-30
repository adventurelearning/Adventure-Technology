import React from 'react';
import {
    CodeSlash,
    ShieldLock,
    GraphUp,
    Kanban,
    PersonBadge,
    Tools
} from 'react-bootstrap-icons';

const WhyMark = () => {
    const expertisePoints = [
        {
            title: 'Experienced Full-Stack Developers',
            description: 'Our team brings 8+ years of combined experience building robust web applications using modern technologies like React, Node.js, and cloud platforms.',
            icon: <CodeSlash className="text-blue-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'SEO-Optimized, Clean Code',
            description: 'We write semantic, performant code that ranks well on search engines while being maintainable and well-documented for future updates.',
            icon: <GraphUp className="text-purple-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Scalable & Secure Architecture',
            description: 'Applications built with enterprise-grade security and scalability in mind, ready to handle your growing user base and traffic spikes.',
            icon: <ShieldLock className="text-green-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Agile Project Management',
            description: 'Transparent development process with regular updates, sprint reviews, and flexible adaptation to changing requirements.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Dedicated Project Manager',
            description: 'Single point of contact throughout your project ensuring clear communication and timely delivery of milestones.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Post-Launch Support',
            description: 'Comprehensive maintenance packages including updates, security patches, and feature additions after deployment.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-gray-500'
        },
    ];
    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto ">
                <div className="text-center mb-12 ">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Our Development Edge
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Why clients trust us with their digital products
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

export default WhyMark;
