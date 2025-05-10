import { useState } from 'react';

const CoreValues = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const values = [
        {
            title: "Innovation",
            content: "We push boundaries with cutting-edge solutions. Our R&D team works tirelessly to bring you tomorrow's technology today."
        },
        {
            title: "Collaboration",
            content: "Great things happen when brilliant minds work together. We partner closely with clients to co-create exceptional digital experiences."
        },
        {
            title: "Integrity",
            content: "Trust is our currency. We maintain absolute transparency in all dealings and uphold the highest ethical standards."
        },
        {
            title: "Excellence",
            content: "Good isn't good enough. We obsess over every pixel, line of code, and user interaction to deliver flawless results."
        },
        {
            title: "Customer-Centricity",
            content: "Your success is our North Star. We design solutions tailored to your unique challenges and business objectives."
        },
        {
            title: "Continuous Learning",
            content: "The tech landscape evolves daily. So do we. Our team dedicates 20% of work time to upskilling and experimentation."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-t from-black via-gray-900 to-blue-950 text-gray-100 py-2 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Core Values and Connect Button */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6 md:mt-12">
                            Our Core<span className='md:block'> Values</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            At Adventure Technology, we're more than just a digital agency. We're a collective of passionate innovators driven by a shared set of core values that fuel our journey and yours.
                        </p>
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-sm font-medium text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all w-full lg:w-auto">
                            Let's Explore Together
                        </button>
                    </div>
                </div>

                {/* Right Column - Accordion */}
                <div className="lg:col-span-2 space-y-3">
                    {values.map((value, index) => (
                        <div key={index} className="border border-gray-700 rounded-xl overflow-hidden">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full px-6 py-3 text-left flex justify-between items-center transition-all ${activeIndex === index ? 'bg-gray-800' : 'hover:bg-gray-800/50'}`}
                            >
                                <span className="text-xl font-medium">{value.title}</span>
                                <span className="text-2xl transition-transform duration-300">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
                            >
                                <p className="text-gray-300">{value.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
