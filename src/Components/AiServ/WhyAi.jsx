import React from 'react';
import {
    Cpu,
    ShieldLock,
    BarChart,
    GraphUp,
    PersonBadge,
    Gear
} from 'react-bootstrap-icons';

const WhyAi = () => {
    const expertisePoints = [
        {
            title: 'Experienced AI/ML Engineers',
            description: 'Our team has years of expertise in developing custom AI and machine learning models using advanced algorithms, deep learning, and natural language processing (NLP).',
            icon: <Cpu className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'Data-Driven Insights & Analytics',
            description: 'We specialize in turning raw data into actionable insights with advanced analytics, predictive modeling, and real-time decision-making tools.',
            icon: <BarChart className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Scalable & Secure AI Systems',
            description: 'Our AI solutions are designed to scale with your business needs while maintaining the highest standards of security, ensuring safe and reliable operations.',
            icon: <ShieldLock className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Advanced Machine Learning Algorithms',
            description: 'We utilize cutting-edge machine learning techniques, including deep learning and reinforcement learning, to create intelligent systems that learn and evolve.',
            icon: <GraphUp className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'AI-Powered Automation',
            description: 'We help businesses automate repetitive tasks and workflows with AI, increasing productivity and efficiency while reducing human error.',
            icon: <Gear className="text-orange-400" size={24} />,
            borderColor: 'border-orange-500'
        },
        {
            title: 'Continuous Model Monitoring & Optimization',
            description: 'After deployment, we ensure that your AI models are continuously monitored and optimized for better performance and accuracy over time.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-pink-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Why Choose Our AI & ML Solutions
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Empowering your business with innovative AI and machine learning solutions
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

export default WhyAi;
