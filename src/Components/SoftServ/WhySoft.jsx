import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/WEB 4.svg';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const WhySoft= () => {
    const expertisePoints = [
        {
            title: 'Native & Cross-Platform Experts',
            description:
                'We specialize in building high-performance apps for iOS and Android using native tools like Swift and Kotlin or cross-platform frameworks like React Native and Flutter.',
            list: [
                'Optimized for All Devices',
                'Native Performance & Smooth UI',
                'Flexible Framework Choices',
            ],
            image: web1,
        },
        {
            title: 'User-Centered Design',
            description:
                'Our apps are not just functional but designed with the user in mind — we craft intuitive experiences that drive engagement and retention.',
            list: [
                'UX Wireframing & Prototyping',
                'User Testing & Feedback Loops',
                'Clean, Modern UI Design',
            ],
            image: web2,
        },
        {
            title: 'Scalable Backend Integration',
            description:
                'From Firebase to custom Node.js servers, we build scalable and secure backends that power real-time data and user interactions seamlessly.',
            list: [
                'Real-Time Sync & APIs',
                'Secure Auth & Data Storage',
                'Cloud-Ready Architecture',
            ],
            image: web3,
        },
        {
            title: 'Post-Launch Support & Growth',
            description:
                'We don’t stop at launch. Our support packages include monitoring, feature updates, and performance optimizations to help your app grow.',
            list: [
                'Crash & Performance Monitoring',
                'App Store Optimization',
                'Ongoing Feature Enhancements',
            ],
            image: web4,
        },
    ];

    return (
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                        Our Mobile App Development Edge
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                        Why businesses trust us to build exceptional mobile experiences
                    </p>
                </div>

                <div className="space-y-16">
                    {expertisePoints.map((point, index) => (
                        <AnimatedCard key={index} point={point} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const AnimatedCard = ({ point }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const animation = useAnimation();

    React.useEffect(() => {
        if (inView) {
            animation.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
        } else {
            animation.start({ opacity: 0, y: 50 });
        }
    }, [inView, animation]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col md:flex-row items-center w-full bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
        >
            {/* Left: Text */}
            <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
                <p className="text-gray-300 mb-4">{point.description}</p>
                {point.list && (
                    <ul className="space-y-2 mt-4">
                        {point.list.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-200">
                                <CheckCircle className="text-green-400 mt-1 mr-2" size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center p-8">
                <img
                    src={point.image}
                    alt={point.title}
                    className="w-3/4 max-w-md h-auto object-contain pt-4 md:pt-10"
                />
            </div>
        </motion.div>
    );
};

export default WhySoft;
