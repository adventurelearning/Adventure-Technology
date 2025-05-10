import React, { useState, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
// Section Component for dynamic content rendering
const Section = ({ title, description, icon }) => (
    <div className="flex items-center mb-6">
        <div className="mr-4 text-3xl text-white">{icon}</div>
        <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    </div>
);

const WhyAdventure = ({ children, className = "h-full lg:mt-2 w-full", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(0.6);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(0.6);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const content = [
        {
            icon: <i className="bi bi-broadcast-pin"></i>,
            title: "Innovation-Driven",
            description:
                "We create innovative digital solutions using cutting-edge technologies like AI to enhance user experiences and automate processes.",
        },
        {
            icon: <i className="bi bi-person-check"></i>,
            title: "Client-Centered Approach",
            description:
                "We prioritize your needs, tailoring each project to suit your unique business goals, ensuring your growth and success.",
        },
        {
            icon: <i className="bi bi-building"></i>,
            title: "Cross-Industry Experience",
            description:
                "Our expertise spans various industries, providing solutions that streamline processes, boost efficiency, and drive digital transformation.",
        },
        {
            icon: <i className="bi bi-puzzle"></i>,
            title: "Tailored Solutions",
            description:
                "We craft custom solutions that are designed to meet your specific business requirements, ensuring seamless integration with your operations.",
        },
        {
            icon: <i className="bi bi-graph-up"></i>,
            title: "Business Growth Focus",
            description:
                "We provide solutions that not only drive digital transformation but also focus on sustainable business growth through data-driven insights.",
        },
        {
            icon: <i className="bi bi-gear"></i>,
            title: "Comprehensive Expertise",
            description:
                "Our team of experts brings a wealth of knowledge across various domains, delivering high-quality solutions that solve complex challenges.",
        },
        {
            icon: <i className="bi bi-box"></i>,
            title: "Expertise in Cutting-Edge Technologies",
            description:
                "We harness the power of the latest technologies, including AI, IoT, and cloud computing, to deliver scalable and future-proof solutions.",
        },
        {
            icon: <i className="bi bi-check-circle"></i>,
            title: "Proven Results",
            description:
                "We pride ourselves on delivering measurable outcomes, helping businesses achieve their goals through proven strategies and solutions.",
        },
    ];

    return (
        <div className="bg-black pt-36">
            <div className="glow-cyan i p-3 bg-black rounded-4xl container mx-auto text-white flex flex-col lg:flex-row items-start justify-around px-6 py-16 min-h-screen">
                {/* Left side - Sticky on large screens, not sticky on smaller */}
                <div className="w-full lg:w-1/2 xl:w-2/5 lg:pr-10 mb-8 lg:mb-0 lg:sticky lg:top-26">
                    <div className="max-w-md mx-auto lg:mx-0">
                        <h1 className="text-4xl mb-4">Why Choose Adventure Technology?</h1>
                        <h3 className='text-2xl mb-6'>
                            Turning ideas into outcomes <span className='block pl-4'>— that's our business.</span>
                        </h3>
                        <div
                            ref={divRef}
                            onMouseMove={handleMouseMove}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
                        >
                            <i className="text-3xl bi bi-rocket-takeoff"></i>
                            <h1 className="text-2xl text-white font-semibold py-4">
                                We build digital solutions that<br />grow your business!
                            </h1>
                            <Link to="/Contact">
                            <button                                
                                className="register-button cursor-pointer hidden lg:inline-block mt-4 px-5 py-2 rounded-lg text-base font-semibold text-white border border-transparent transition-all"
                            >
                                Launch Together
                            </button>
                            </Link>
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
                                style={{
                                    opacity,
                                    background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
                                }}
                            />
                            {children}
                        </div>
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 max-w-lg">
                    <div className="h-full overflow-y-auto pr-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {/* Hide scrollbar for Webkit browsers */}
                        <style dangerouslySetInnerHTML={{ __html: `::-webkit-scrollbar { display: none; }` }} />

                        {/* Dynamically Render Sections */}
                        {content.map((item, index) => (
                            <div key={index} className="pb-2 ">
                                <div className="flex items-center space-x-2">
                                    {/* Icon */}
                                    <div className='text-3xl'>{item.icon}</div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-lg pl-4">{item.title}</h3>
                                </div>

                                {/* Description on the next line, aligned with the title */}
                                <p className="mt-2 pl-14">{item.description}</p>

                                {/* Divider */}
                                {index !== content.length - 1 && (
                                    <div className="border-t border-gray-700 my-3 "></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAdventure;
