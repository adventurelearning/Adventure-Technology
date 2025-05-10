import React from 'react';
import {
    GraphUp,           // For analytics/performance
    ShieldLock,        // For data/privacy compliance
    PersonBadge,       // For personalized strategies
    Tools,             // For optimization tools
    Kanban,            // For campaign management
    CodeSlash          // For marketing automation/code integrations
} from 'react-bootstrap-icons';

const WhyMark = () => {
    const expertisePoints = [
        {
            title: 'ROI-Driven Campaigns',
            description: 'We craft data-backed marketing strategies focused on delivering measurable results and maximizing return on investment.',
            icon: <GraphUp className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Search Engine Optimization (SEO)',
            description: 'Improve your organic visibility and search engine ranking through advanced keyword research, on-page SEO, and technical audits.',
            icon: <CodeSlash className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'Performance Analytics',
            description: 'Track user behavior and campaign metrics in real-time using tools like Google Analytics and conversion tracking.',
            icon: <GraphUp className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Campaign Management',
            description: 'Agile execution of multi-channel campaigns including paid ads, email, and content marketing with weekly reporting.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'Audience Targeting & Personalization',
            description: 'We identify and segment your audience to deliver personalized messaging that resonates and converts.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-pink-500'
        },
        {
            title: 'Privacy & Compliance',
            description: 'All campaigns follow GDPR, CCPA, and email compliance laws to ensure ethical and secure marketing practices.',
            icon: <ShieldLock className="text-red-400" size={24} />,
            borderColor: 'border-red-500'
        }
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Our Digital Marketing Edge
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Why businesses rely on us to grow their online presence
                    </p>
                </div>

                <div className="gap-8">
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

export default WhyMark;
