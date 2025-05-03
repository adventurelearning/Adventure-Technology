import React from 'react';
import {
    DeviceHdd,
    ShieldLock,
    GraphUp,
    Cloud,
    PersonBadge,
    Tools
} from 'react-bootstrap-icons';

const WhyIot = () => {
    const expertisePoints = [
        {
            title: 'IoT Device Integration',
            description: 'Our team specializes in seamlessly integrating various IoT devices into cohesive, efficient networks, enabling real-time data collection and control.',
            icon: <DeviceHdd className="text-blue-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Cloud-Based IoT Solutions',
            description: 'We offer scalable, cloud-powered IoT platforms that allow remote management, data analytics, and secure storage, providing insights and control at any time.',
            icon: <Cloud className="text-purple-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Scalable & Secure Architecture',
            description: 'Our IoT solutions are built with enterprise-level security and scalability, ensuring that your IoT system grows and adapts to your evolving needs.',
            icon: <ShieldLock className="text-green-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Real-Time Monitoring & Analytics',
            description: 'We deliver real-time data monitoring and analytics for your IoT systems, empowering you to make quick, data-driven decisions.',
            icon: <GraphUp className="text-yellow-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Dedicated IoT Experts',
            description: 'Our team of IoT experts ensures smooth project execution, from design to deployment, with a focus on performance, security, and user experience.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-gray-500'
        },
        {
            title: 'Ongoing IoT Maintenance & Support',
            description: 'We offer comprehensive post-deployment support and maintenance, including updates, troubleshooting, and optimization for your IoT systems.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-gray-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Our IoT Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Discover the benefits of working with us for your IoT projects
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

export default WhyIot;
