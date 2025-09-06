import React, { useState, useEffect, useRef } from 'react';
import backgroundVideoMobile from '../../assets/ecommerce.mp4';
// Reusing your icons but with ecommerce-oriented categories
const IconStore = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 9l1.5-6h15L21 9M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
  </svg>
);

const IconFashion = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M6 2l6 6 6-6M4 22h16v-4H4v4zM9 22v-6h6v6" />
  </svg>
);

const IconCart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const IconMobile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" x2="12" y1="18" y2="18" />
  </svg>
);

const IconFood = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9h.01M9 9h.01M9 15h6" />
  </svg>
);

const IconCosmetics = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="4" y="2" width="6" height="20" rx="1" />
    <path d="M14 2h6v6h-6zM14 10h6v12h-6z" />
  </svg>
);

const IconSports = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20" />
  </svg>
);

const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconFurniture = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="9" width="20" height="13" rx="2" />
    <path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
  </svg>
);

const IconJewelry = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 7V2M12 22v-5M2 12h5M17 12h5" />
  </svg>
);


// Industries data for e-commerce
const industries = [
  {
    name: 'Fashion & Apparel',
    icon: <IconFashion />,
    video: 'https://cdn.pixabay.com/video/2023/05/25/163076-835907347_tiny.mp4',
    description: 'Trendy clothing stores and fashion boutiques powered by seamless e-commerce solutions.'
  },
  {
    name: 'Electronics & Gadgets',
    icon: <IconMobile />,
    video: 'https://cdn.pixabay.com/video/2023/05/27/163162-835955245_tiny.mp4',
    description: 'Smart devices, mobile phones, and electronics with easy product management and checkout.'
  },
  {
    name: 'Groceries & Food Delivery',
    icon: <IconFood />,
    video: 'https://cdn.pixabay.com/video/2023/07/27/174936-851615719_tiny.mp4',
    description: 'Fresh groceries and food products delivered to customers quickly and efficiently.'
  },
  {
    name: 'Cosmetics & Beauty',
    icon: <IconCosmetics />,
    video: 'https://cdn.pixabay.com/video/2022/10/31/138504-767062020_tiny.mp4',
    description: 'Beauty, skincare, and personal care products with subscription and bundle options.'
  },
  {
    name: 'Books & Stationery',
    icon: <IconBook />,
    video: 'https://cdn.pixabay.com/video/2023/02/24/151197-802780077_tiny.mp4',
    description: 'Online bookstores with catalog management, reviews, and seamless ordering.'
  },
  {
    name: 'Sports & Fitness',
    icon: <IconSports />,
    video: 'https://cdn.pixabay.com/video/2023/01/10/144942-787872289_tiny.mp4',
    description: 'E-commerce stores for sports equipment, fitness gear, and activewear.'
  },
  {
    name: 'Furniture & Home Decor',
    icon: <IconFurniture />,
    video: 'https://cdn.pixabay.com/video/2023/06/12/167216-840672628_tiny.mp4',
    description: 'Stylish home and office furniture with 3D previews and delivery scheduling.'
  },
  {
    name: 'Jewelry & Accessories',
    icon: <IconJewelry />,
    video: 'https://cdn.pixabay.com/video/2022/08/29/128634-746650852_tiny.mp4',
    description: 'Fine jewelry, watches, and accessories with secure checkout and customization options.'
  },
];

const EcomSupportIndustries = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate array for smooth loop
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
      setHighlightedIndex(prevIndex => (prevIndex + 1) % industries.length);
      animationRef.current = setTimeout(animate, 1000);
    };

    animationRef.current = setTimeout(animate, 1500);

    return () => clearTimeout(animationRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
    }
  }, [highlightedIndex]);

  const handleIndustryClick = (index) => {
    setHighlightedIndex(index);
    clearTimeout(animationRef.current);
  };

  return (
    <div id='Ecomvdo' className="bg-black text-white px-6 sm:px-10 lg:px-16 py-14 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug tracking-tight mb-4">
            Powering E-Commerce Across Industries
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0">
            From fashion to furniture, explore how our solutions help online businesses grow and succeed.
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
          <div  className="lg:w-3/5">
            <div className=" aspect-video bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-800 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className=" h-full object-cover "
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

export default EcomSupportIndustries;
