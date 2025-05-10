import React from 'react';
import {
    Cpu,
    ShieldLock,
    BarChart,
    GraphUp,
    PersonBadge,
    Gear
} from 'react-bootstrap-icons';

const WhyEmbDis = () => {
    const expertisePoints = [
        {
            title: 'Expert Embedded Engineers',
            description: 'Our team has deep experience in embedded hardware, firmware development, and real-time systems, with a focus on reliability and performance.',
            icon: <Cpu className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'End-to-End Product Development',
            description: 'We handle every stage from schematics and PCB layout to firmware development and testing, ensuring smooth hardware-software integration.',
            icon: <Gear className="text-orange-400" size={24} />,
            borderColor: 'border-orange-500'
        },
        {
            title: 'Secure & Compliant Designs',
            description: 'We design with industry security standards in mind—important for critical applications like medical, industrial, and automotive devices.',
            icon: <ShieldLock className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Custom IoT Solutions',
            description: 'From edge devices to connectivity, we design scalable IoT systems with embedded intelligence and remote monitoring capabilities.',
            icon: <GraphUp className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'Performance Optimization',
            description: 'We fine-tune systems for low-power consumption, speed, and memory efficiency to meet strict embedded constraints.',
            icon: <BarChart className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Lifecycle Support & Maintenance',
            description: 'Beyond design, we provide long-term support, firmware updates, and revisions to keep your product reliable in the field.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-pink-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Our Embedded Design Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Delivering robust, scalable embedded solutions from concept to deployment
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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

export default WhyEmbDis;
