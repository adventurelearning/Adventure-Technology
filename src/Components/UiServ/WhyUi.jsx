import React from 'react';
import {
    BrushFill,
    PaletteFill,
    Kanban,
    GraphUp,
    PersonBadge,
    Tools
} from 'react-bootstrap-icons';

const WhyUi = () => {
    const expertisePoints = [
        {
            title: 'Human-Centered Design Approach',
            description: 'We prioritize your users at every stage, crafting interfaces that are intuitive, inclusive, and enjoyable.',
            icon: <BrushFill className="text-blue-400" size={24} />,
            borderColor: 'border-blue-500'
        },
        {
            title: 'Consistent Visual Identity',
            description: 'From typography to color schemes, we ensure your brand identity is reflected across all platforms and devices.',
            icon: <PaletteFill className="text-purple-400" size={24} />,
            borderColor: 'border-purple-500'
        },
        {
            title: 'Data-Driven Design Decisions',
            description: 'We combine analytics and user feedback to create interfaces that convert, retain, and delight.',
            icon: <GraphUp className="text-green-400" size={24} />,
            borderColor: 'border-green-500'
        },
        {
            title: 'Agile UX Workflow',
            description: 'Our iterative process includes rapid prototyping, testing, and refinement — ensuring your product evolves with your users.',
            icon: <Kanban className="text-yellow-400" size={24} />,
            borderColor: 'border-yellow-500'
        },
        {
            title: 'Collaborative Design Process',
            description: 'Our UI/UX specialists work closely with stakeholders and dev teams to align goals, reduce friction, and speed up delivery.',
            icon: <PersonBadge className="text-pink-400" size={24} />,
            borderColor: 'border-pink-500'
        },
        {
            title: 'Post-Launch UX Optimization',
            description: 'We provide ongoing support with usability testing, A/B testing, and enhancements based on real-world use.',
            icon: <Tools className="text-orange-400" size={24} />,
            borderColor: 'border-orange-500'
        },
    ];

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        Our UI/UX Expertise
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Why leading brands trust our design process to enhance their digital experiences
                    </p>
                </div>

                <div className="gap-8 space-y-6">
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

export default WhyUi;
