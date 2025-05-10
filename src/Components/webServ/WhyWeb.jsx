import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import web1 from '../../assets/Service/WEB 1.svg';
import web2 from '../../assets/Service/WEB 2.svg';
import web3 from '../../assets/Service/WEB 3.svg';
import web4 from '../../assets/Service/WEB 4.svg';

const WhyWeb = () => {
    const expertisePoints = [
        {
            title: 'Experienced Full-Stack Developers',
            description: 'Our team brings 8+ years of combined experience building robust web applications using modern technologies like React, Node.js, and cloud platforms.',
            list: [
                'Seamless System Integration',
                'Continuous Testing for High Quality',
                'Scalable Deployment & Maintenance',
            ],
            image: web1,
        },
        {
            title: 'SEO-Optimized, Clean Code',
            description: 'We write semantic, performant code that ranks well on search engines while being maintainable and well-documented for future updates.',
            list: [
                'Seamless System Integration',
                'Continuous Testing for High Quality',
                'Scalable Deployment & Maintenance',
            ],
            image: web2,
        },
        {
            title: 'Scalable & Secure Architecture',
            description: 'Applications built with enterprise-grade security and scalability in mind, ready to handle your growing user base and traffic spikes.',
            list: [
                'Seamless System Integration',
                'Continuous Testing for High Quality',
                'Scalable Deployment & Maintenance',
            ],
            image: web3,
        },
        {
            title: 'Post-Launch Support',
            description: 'Comprehensive maintenance packages including updates, security patches, and feature additions after deployment.',
            list: [
                'Seamless System Integration',
                'Continuous Testing for High Quality',
                'Scalable Deployment & Maintenance',
            ],
            image: web4,
        },
    ];

    const containerRef = useRef(null);
    const cardRefs = useRef(expertisePoints.map(() => React.createRef()));
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            if (isScrolling) return;
            
            const containerTop = container.getBoundingClientRect().top;
            const containerHeight = container.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress within the container (0 to 1)
            const progress = Math.min(1, Math.max(0, (-containerTop) / (containerHeight - windowHeight)));
            setScrollProgress(progress);
            
            // Calculate which card should be active based on scroll position
            const cardCount = expertisePoints.length;
            const newActiveIndex = Math.min(
                cardCount - 1,
                Math.floor(progress * cardCount)
            );
            
            if (newActiveIndex !== activeCardIndex) {
                setActiveCardIndex(newActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeCardIndex, isScrolling]);

    useEffect(() => {
        // Apply styles based on active card and scroll progress
        cardRefs.current.forEach((ref, index) => {
            const card = ref.current;
            if (!card) return;

            const position = index - activeCardIndex;
            const cardHeight = card.offsetHeight;
            const windowHeight = window.innerHeight;

            // Reset all cards first
            card.style.position = 'relative';
            card.style.zIndex = '1';
            card.style.transform = 'none';
            card.style.opacity = '1';
            card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';

            if (index === activeCardIndex) {
                // Active card - sticky in the middle
                card.style.position = 'sticky';
                card.style.top = `${windowHeight * 0.1}px`;
                card.style.zIndex = '10';
                card.style.transform = 'none';
            } else if (index < activeCardIndex) {
                // Cards above the active one (scrolled past)
                card.style.zIndex = '0';
                card.style.opacity = '0.5';
                card.style.transform = 'translateY(-20px)';
            } else {
                // Cards below the active one (coming up)
                const distance = (index - activeCardIndex) * 100;
                card.style.zIndex = '05';
                card.style.opacity = '1';
                card.style.transform = `translateY(${distance}px)`;
            }
        });
    }, [activeCardIndex, scrollProgress]);

    return (
        <div className="bg-black py-16 px-4 sm:px-6 lg:px-8" ref={containerRef}>
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white sm:text-5xl">
                        Our Development Edge
                    </h2>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                        Why clients trust us with their digital products
                    </p>
                </div>

                <div className="space-y-8">
                    {expertisePoints.map((point, index) => (
                        <div
                            key={index}
                            className="flex justify-center"
                            ref={cardRefs.current[index]}
                        >
                            <div className="flex flex-col md:flex-row items-center w-full max-w-5xl bg-gradient-to-b from-white/10 to-black/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
                                {/* Left: Text */}
                                <div className="w-full md:w-1/2 p-8">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <h3 className="text-2xl font-semibold text-white">
                                            {point.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 mb-4">{point.description}</p>

                                    {point.list && point.list.length > 0 && (
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
                                        className="w-3/4 max-w-md h-auto object-contain pt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyWeb;