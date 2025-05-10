import React from 'react';
import {
    GraphUp,
    ShieldLock,
    Kanban,
    PersonBadge,
    Tools,
    Compass
} from 'react-bootstrap-icons';

const WhyConsult = () => {
    const expertisePoints = [
        {
            title: 'Strategic IT Planning',
            description: 'We align your technology roadmap with your business objectives to drive long-term success and agility.',
            icon: <Compass className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'Cybersecurity Expertise',
            description: 'Our consultants help protect your business with risk assessments, compliance audits, and advanced security solutions.',
            icon: <ShieldLock className="text-red-400" size={24} />,
            borderColor: 'border-red-500'
        },
        {
            title: 'Data-Driven Insights',
            description: 'We turn your data into actionable insights with analytics strategy and business intelligence tools.',
            icon: <GraphUp className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Agile IT Project Management',
            description: 'Efficient project delivery using agile methods ensures timely execution and adaptability to change.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'Dedicated Technology Advisor',
            description: 'A single point of contact provides ongoing guidance and ensures technology aligns with your evolving business.',
            icon: <PersonBadge className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Ongoing Support & Optimization',
            description: 'Post-implementation support, system monitoring, and proactive performance tuning are all part of our service.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-orange-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Our IT Consulting
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Expertise that guides your technology decisions and accelerates transformation
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                    {expertisePoints.map((point, index) => (
                        <div
                            key={index}
                            className={`bg-gray-800 rounded-lg p-6 border-t-4 ${point.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
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

export default WhyConsult;
