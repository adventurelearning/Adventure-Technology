import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Achievements = ({ children, className = "h-fit lg:mt-2", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
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
    return (
        <div className="bg-black py-8">
            <div className="container mx-auto  text-white flex flex-col md:flex-row items-center justify-around px-6">
                <div className="text-start md:text-left">
                    <h1 className="text-4xl mb-4 max-w-sm">
                        Empowering Businesses with Technology That Breaks Every Barrier
                    </h1>
                </div>
                <div className="text-start md:text-left max-w-lg">
                    <h3 className="text-lg leading-relaxed">
                        Adventure Technology leads digital transformation,
                        helping businesses embrace change and discover growth opportunities.
                        Our expert team delivers scalable,
                        future-ready solutions to keep clients at the forefront of their industries.
                    </h3>
                </div>
            </div>
            <div className="py-12 px-4 sm:px-6 lg:px-8 lg:ml-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 justify-center">

                        {/* Stat Card */}
                        <div className="text-start border-l border-gray-400 h-full pl-8 self-start">
                            <div className="text-4xl font-bold text-blue-600">7+</div>
                            <h3 className="mt-2 text-xl font-semibold text-white">Industries Served with Excellence</h3>
                            <p className="mt-2 text-white w-3/4">
                                Leveraging our agility and deep engineering expertise, we deliver tailored technology solutions that empower key business functions across seven diverse industries.
                            </p>
                        </div>


                        {/* Repeat same structure for the other stat blocks */}
                        <div className="text-start border-l border-gray-400 h-full pl-8 self-start">
                            <div className="text-4xl font-bold text-blue-600">30+</div>
                            <h3 className="mt-2 text-xl font-semibold text-white">Expert Technology Professionals</h3>
                            <p className="mt-2 text-white w-3/4">
                                Our team of 30+ skilled technologists and thought leaders is committed to delivering innovative solutions and driving meaningful impact for our clients.
                            </p>
                        </div>


                        <div className="text-start border-l border-gray-400 h-full pl-8 self-start">
                            <div className="text-4xl font-bold text-blue-600">1200+</div>
                            <h3 className="mt-2 text-xl font-semibold text-white">Projects Successfully Delivered</h3>
                            <p className="mt-2 text-white w-3/4">
                                With over 1,200 solutions designed and delivered, we've helped businesses innovate, scale, and stay ahead in a rapidly evolving digital landscape.
                            </p>
                        </div>


                        <div className="text-start border-l border-gray-400 h-full pl-8 self-start">
                            <div className="text-4xl font-bold text-blue-600">11+</div>
                            <h3 className="mt-2 text-xl font-semibold text-white">Years of Innovation & Legacy Transformation</h3>
                            <p className="mt-2 text-white w-3/4">
                                We've been helping businesses transform for over 11 years by seamlessly integrating cutting-edge technologies into their legacy systems.
                            </p>
                        </div>


                        <div className="text-start border-l border-gray-400 h-full pl-8 self-start">
                            <div className="text-4xl font-bold text-blue-600">150+</div>
                            <h3 className="mt-2 text-xl font-semibold text-white">Federal Agency Partnerships</h3>
                            <p className="mt-2 text-white w-3/4">
                                We've built trusted relationships with over 150 federal agencies, collaborating to solve mission-critical challenges and deliver lasting impact.
                            </p>
                        </div>


                        {/* CTA Box */}
                        <div
                            ref={divRef}
                            onMouseMove={handleMouseMove}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 self-start ${className}`}
                        >

                            <h1 className='text-2xl text-white font-semibold'>Let’s build what’s next,<br />the future starts now!</h1>
                            <Link to="/Contact">
                                <button
                                    className="register-button hidden cursor-pointer lg:inline-block mt-4 px-5 py-2 rounded-lg text-base font-semibold text-white border border-transparent transition-all"
                                >
                                    Let’s team up
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
            </div>


        </div>



    );
};

export default Achievements;
