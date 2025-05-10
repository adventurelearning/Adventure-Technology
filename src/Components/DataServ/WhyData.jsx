import React from 'react';
import {
    BarChart,
    ShieldLock,
    GraphUp,
    Kanban,
    PersonBadge,
    Tools
} from 'react-bootstrap-icons';

const WhyData = () => {
    const expertisePoints = [
        {
            title: 'Experienced Data Scientists & Analysts',
            description: 'Our team has over 8 years of combined experience in data analysis, machine learning, and predictive modeling, helping businesses unlock actionable insights.',
            icon: <BarChart className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'Data-Driven Decision Making',
            description: 'We leverage advanced analytics to transform raw data into strategic insights, guiding your business decisions with precision and confidence.',
            icon: <GraphUp className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Scalable & Secure Data Solutions',
            description: 'We ensure that your data architecture is robust and scalable, capable of handling large datasets securely and efficiently, using modern cloud and big data technologies.',
            icon: <ShieldLock className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Agile Analytics & Reporting',
            description: 'Our agile methodology allows us to deliver iterative results quickly, making it easier to adjust to changing business requirements and new data insights.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'Dedicated Data Consultant',
            description: 'We assign a dedicated data consultant to work with you closely, ensuring clear communication and guiding your analytics journey every step of the way.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-pink-500'
        },
        {
            title: 'Post-Project Support & Optimization',
            description: 'We provide ongoing support and optimization, ensuring your data models, dashboards, and reports evolve with your business needs.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-orange-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Us for Data Science & Analytics
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Discover how we empower businesses to make data-driven decisions with our expertise.
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

export default WhyData;
