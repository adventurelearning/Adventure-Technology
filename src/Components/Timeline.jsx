import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineCard = ({ year, description, isLeft, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, delay: index * 0.1 }
        },
        hidden: {
            opacity: 0,
            x: isLeft ? 150 : -150
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`flex items-center w-full ${isLeft ? 'justify-end' : 'justify-start'} my-12`}
        >
            <div
                className={`
                    relative p-8 rounded-2xl shadow-lg w-[28rem]
                    ${isLeft
                    ? 'bg-gradient-to-t from-black via-gray-900 to-blue-900 border-l border-t border-r border-gray-700 text-white ml-0 mr-12 text-right'
                    : 'bg-gradient-to-t from-black via-gray-900 to-blue-900  text-white ml-12 mr-0 text-left'}
                    border border-gray-700
                `}
            >
                <h3 className="text-3xl font-bold mb-3">{year}</h3>
                <p className="text-lg leading-relaxed">{description}</p>

                {/* Connector line to the vertical timeline */}
                <div className={`absolute top-1/2 -translate-y-1/2 h-1 ${isLeft ? 'right-full w-20' : 'left-full w-20'}`}>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className={`h-full origin-${isLeft ? 'right' : 'left'} w-full 
                            ${isLeft
                                ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'
                                : 'bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600'}`}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const timelineData = [
        { year: '2017', description: 'Pioneering visionaries unite, laying the foundation for future innovation and growth.', isLeft: true },
        { year: '2019', description: 'Venturing into the digital realm, crafting bespoke web and mobile experiences that redefine user engagement.', isLeft: false },
        { year: '2021', description: 'Evolving into a comprehensive technology partner, delivering end-to-end software solutions across diverse industries.', isLeft: true },
        { year: '2022', description: 'Expanding horizons to the intelligent edge, developing embedded systems and IoT solutions for a smarter, connected world.', isLeft: false },
        { year: '2024', description: 'Spearheading the AI revolution, creating cutting-edge machine learning products that empower education and advance robotics.', isLeft: true },
        { year: '2025', description: 'Embarking on a global journey, establishing new footholds in international markets and fostering cross-cultural collaboration.', isLeft: false },
        { year: '2026', description: 'Celebrating a monumental milestone with our flagship product reaching over a million users, a testament to its impact and value.', isLeft: true },
        { year: '2027', description: 'Marking a transformative chapter through a strategic acquisition by an industry titan, unlocking new avenues for innovation and scale.', isLeft: false },
    ];

    return (
        <div className="bg-gradient-to-b from-black via-gray-900 to-blue-950 min-h-screen w-full overflow-hidden py-20 px-6">
            <div className="w-full max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-semibold text-white mb-20 text-center"
                >
                  A Timeline of <span className="text-blue-400">Innovation</span> 
                </motion.h2>

                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 1.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-800 via-blue-500 to-blue-700"
                    />

                    {/* Glow effect */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-blue-400 opacity-30 blur-lg" />

                    {/* Timeline Cards */}
                    {timelineData.map((item, index) => (
                        <TimelineCard
                            key={index}
                            {...item}
                            index={index}
                        />
                    ))}

                    {/* Top and Bottom Dots */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center"
                    >
                        <div className="w-5 h-5 rounded-full bg-white animate-ping" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.4 }}
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center"
                    >
                        <div className="w-5 h-5 rounded-full bg-white animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
