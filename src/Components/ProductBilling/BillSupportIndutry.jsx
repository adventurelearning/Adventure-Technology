import React, { useState, useEffect, useRef } from 'react';
import backgroundVideoMobile from '../../assets/Product/Billing_Software/Demobill.mp4';
// Icon Components (same as before)
const IconStore = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-6 w-6 mr-3">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" x2="21" y1="6" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
);

const IconWarehouse = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building h-6 w-6 mr-3">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <path d="M15 14v4" />
        <path d="M9 14v4" />
        <path d="M15 8v2" />
        <path d="M9 8v2" />
        <path d="M12 2v20" />
    </svg>
);

const IconPharmacy = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pill h-6 w-6 mr-3">
        <path d="m10.5 20.5-9.2-9.2a2.82 2.82 0 0 1 0-4l2.8-2.8a2.82 2.82 0 0 1 4 0l9.2 9.2" />
        <path d="m18 10 2.5-2.5a2.82 2.82 0 0 0 0-4l-2.5-2.5a2.82 2.82 0 0 0-4 0l-2.5 2.5" />
        <path d="m21.5 3.5-5 5" />
    </svg>
);

const IconCoffee = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coffee h-6 w-6 mr-3">
        <path d="M10 2c-.15 1.5-.7 2.6-2 4" />
        <path d="M22 6c-.15 1.5-.7 2.6-2 4" />
        <path d="M18.5 2c-.37 2.22-3.14 4-6.5 4-3.36 0-6.13-1.78-6.5-4" />
        <path d="M18.5 10c-.37 2.22-3.14 4-6.5 4-3.36 0-6.13-1.78-6.5-4" />
        <path d="M18.5 18c-.37 2.22-3.14 4-6.5 4-3.36 0-6.13-1.78-6.5-4" />
        <line x1="12" x2="12" y1="6" y2="22" />
    </svg>
);

const IconScissors = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scissors h-6 w-6 mr-3">
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
    </svg>
);

const IconCar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car h-6 w-6 mr-3">
        <path d="M19 17h2c.6 0 1-.4 1-.8V15c0-.6-.4-1-1-1h-1" />
        <path d="M4 17V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12h-2" />
        <path d="M12 14v4" />
        <path d="M18 17H6" />
        <path d="M4 17c-1.1 0-2 .9-2 2v2" />
        <path d="M20 17c1.1 0 2 .9 2 2v2" />
        <path d="M14 14h-4" />
    </svg>
);

const IconFactory = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory h-6 w-6 mr-3">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
    </svg>
);

const IconBook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text h-6 w-6 mr-3">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
    </svg>
);

const IconMobile = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-6 w-6 mr-3">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" x2="12" y1="18" y2="18" />
    </svg>
);

const IconBriefcase = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-6 w-6 mr-3">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

// Industries data
const industries = [
    {
        name: 'Retail & Supermarkets',
        icon: <IconStore />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69591-536979208_small.mp4',
        description: 'Streamline your retail operations with our specialized billing solutions.'
    },
    {
        name: 'Wholesale & Distribution',
        icon: <IconWarehouse />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69592-536979209_small.mp4',
        description: 'Efficient inventory and distribution management for wholesale businesses.'
    },
    {
        name: 'Pharmacies & Healthcare',
        icon: <IconPharmacy />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69590-536979207_small.mp4',
        description: 'Comply with healthcare regulations while managing your pharmacy efficiently.'
    },
    {
        name: 'Restaurants & Cafés',
        icon: <IconCoffee />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69588-536979205_small.mp4',
        description: 'From table service to kitchen management, we have you covered.'
    },
    {
        name: 'Salons & Spas',
        icon: <IconScissors />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69595-536979212_small.mp4',
        description: 'Appointment scheduling and service billing made easy.'
    },
    {
        name: 'Automobile & Workshops',
        icon: <IconCar />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69594-536979211_small.mp4',
        description: 'Manage parts inventory and service billing in one place.'
    },
    {
        name: 'Manufacturing Units',
        icon: <IconFactory />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69589-536979206_small.mp4',
        description: 'Track production costs and manage supply chain efficiently.'
    },
    {
        name: 'Stationery & Bookstores',
        icon: <IconBook />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69593-536979210_small.mp4',
        description: 'Inventory management and sales tracking for book lovers.'
    },
    {
        name: 'Electronics & Mobile Shops',
        icon: <IconMobile />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69596-536979213_small.mp4',
        description: 'Manage warranties, repairs, and sales with ease.'
    },
    {
        name: 'Service Providers',
        icon: <IconBriefcase />,
        video: 'https://cdn.pixabay.com/video/2021/04/06/69587-536979204_small.mp4',
        description: 'Invoice your services and track payments seamlessly.'
    },
];

const BillSupportIndustry = () => {
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef(null);
    const listContainerRef = useRef(null);
    const animationRef = useRef(null);

    // Create a duplicated array for seamless looping
    const duplicatedIndustries = [...industries, ...industries];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (isPaused) return;

        const animate = () => {
            setHighlightedIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % industries.length;
                return nextIndex;
            });
            animationRef.current = setTimeout(animate, 2000);
        };

        animationRef.current = setTimeout(animate, 2000);

        return () => {
            if (animationRef.current) {
                clearTimeout(animationRef.current);
            }
        };
    }, [isPaused]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log("Video play failed:", e));
        }
    }, [highlightedIndex]);

    const handleIndustryClick = (index) => {
        setHighlightedIndex(index);
        if (animationRef.current) {
            clearTimeout(animationRef.current);
        }
        // Restart animation after a delay
        setTimeout(() => {
            if (!isPaused) {
                animationRef.current = setTimeout(() => {
                    setHighlightedIndex((index + 1) % industries.length);
                }, 2000);
            }
        }, 3000);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        if (!isPaused && animationRef.current) {
            clearTimeout(animationRef.current);
        } else if (isPaused) {
            // Restart the animation
            animationRef.current = setTimeout(() => {
                setHighlightedIndex((highlightedIndex + 1) % industries.length);
            }, 2000);
        }
    };

    return (
        <div id='billingvdo' className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-10 text-left lg:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-semibold leading-snug tracking-tight mb-4">
                        Serving businesses across diverse industries
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
                        We understand your unique billing and accounting needs.
                        Our billing software is designed to adapt to your industry with precision.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">

                    {/* Industries List */}
                    <div className="lg:w-2/5 w-full mb-10 lg:mb-0">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">Industries We Serve</h2>
                        <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-900/50 p-3 border border-gray-800 shadow-lg">
                            <div
                                className="space-y-3 transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateY(-${highlightedIndex * 64}px)` }}
                            >
                                {duplicatedIndustries.map((industry, index) => {
                                    const originalIndex = index % industries.length;
                                    const isHighlighted = highlightedIndex === originalIndex;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => handleIndustryClick(originalIndex)}
                                            className={`flex items-center px-3 py-3 rounded-xl border cursor-pointer transition-all duration-300 ${isHighlighted
                                                ? 'bg-gradient-to-r from-blue-900/70 to-purple-900/70 border-blue-500 shadow-lg shadow-blue-500/20'
                                                : 'bg-gray-800/30 border-gray-700 hover:border-gray-500 hover:bg-gray-700/40'
                                                }`}
                                        >
                                            {/* <span className="mr-3">{industry.icon}</span> */}
                                            <span className="text-base sm:text-lg font-medium">{industry.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="lg:w-3/5 ">
                        <div className=" aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-2xl">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className=" h-full object-cover w-full "
                                key={isMobile ? 'mobile' : 'desktop'}
                            >
                                <source src={isMobile ? backgroundVideoMobile : backgroundVideoMobile} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BillSupportIndustry;