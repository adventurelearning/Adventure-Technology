import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const IndustryHome = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            url: 'https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908113.jpg',
            //   text: 'Cutting-Edge Technology Solutions',
            direction: 'from-top'
        },
        {
            url: 'https://img.freepik.com/free-photo/laptop-used-by-data-center-system-administrators-using-ai-tech-close-up_482257-121068.jpg?t=st=1746251789~exp=1746255389~hmac=b1f4282df180d5a07fecf948fd362e5e87c8d68aa0c15d4fa9cba65ccd594494&w=1380',
            //   text: 'Custom Software Development',
            direction: 'from-right'
        },
        {
            url: 'https://img.freepik.com/free-photo/hightech-robot-arms-automated-manufacturing-plant_60438-3708.jpg?t=st=1746251647~exp=1746255247~hmac=2554442e3533396407e7593e6e3727e3dcc0ac54ede51afb919f126a8ba7e49d&w=1380',
            //   text: 'AI & Automation Experts',
            direction: 'from-bottom'
        },
        {
            url: 'https://img.freepik.com/free-photo/factory-engineers-look-assembly-lines-designs-working-increase-output_482257-119648.jpg?t=st=1746251694~exp=1746255294~hmac=ab50e5863ffff8235c15d7ba38218aecc450c187f6c969278a155061d97017bc&w=1380',
            //   text: 'Data Analytics & Insights',
            direction: 'from-left'
        },
        {
            url: 'https://img.freepik.com/free-photo/modern-automated-assembly-line-cars-latest-technological-neutral-technologies-production-cars-plant-assembly-shop-modern-cars_645730-531.jpg?t=st=1746251570~exp=1746255170~hmac=92333a52ae497c204b6ca736b19893ce69b49acd8fe4ca73a2fe3f6f31b44294&w=996',
            //   text: 'Industrial IoT Solutions',
            direction: 'from-top'
        },
        {
            url: 'https://img.freepik.com/free-photo/smiling-caucasian-woman-startup-office-doing-business-presentation-big-tv-screen-with-charts-front-team-confident-employee-presenting-growing-sales-statistics-late-night-meeting_482257-43087.jpg?t=st=1746251849~exp=1746255449~hmac=2e03e25c8abd80feba26bc76c641381222f76cfe011c77475ede0a3987bab454&w=996',
            //   text: 'Business Process Optimization',
            direction: 'from-right'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden text-white">
            {/* Video Overlay (Dark Layer) */}
            <div className="absolute inset-0 bg-gray-800 opacity-60 z-10" />

            {/* Background images with slide animations */}
            <div className="relative w-full h-full">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImage
                            ? 'opacity-150 translate-x-0 translate-y-0'
                            : img.direction === 'from-top'
                                ? 'opacity-0 -translate-y-full'
                                : img.direction === 'from-right'
                                    ? 'opacity-0 translate-x-full'
                                    : img.direction === 'from-bottom'
                                        ? 'opacity-0 translate-y-full'
                                        : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <img
                            src={img.url}
                            alt={img.text}
                            className="w-full h-full object-cover"
                        />
                        {/* Image caption with highlight animation */}
                        <div className={`absolute bottom-10 left-0 right-0 text-start ${index === currentImage ? 'animate-text-reveal' : 'opacity-0'
                            }`}>
                            <p className="inline-block bg-black bg-opacity-60 px-4 py-2 text-xl md:text-2xl font-semibold border-l-4 border-blue-500">
                                {img.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-4 md:px-16 text-left ml-14">
                <h1 className="text-3xl md:text-5xl font-semibold mb-4 animate-fade-in">
                    Innovative Technology Solutions<span className='block'> for Every Industry</span>
                </h1>

                <h3 className="text-lg md:text-xl max-w-3xl mb-8 animate-fade-in animation-delay-200 text-strat">
                    From smart IoT systems to powerful AI-driven platforms, we provide <span>custom solutions</span> that solve real business challenges across a wide range of industries.
                </h3>

                {/* CTA Button */}
                 <div className="pt-15 md:pt-8 lg:pt-8 xl:pt-8   animate-fadeIn delay-200">
            <Link to="/Contact">
            <button className="relative overflow-hidden group bg-blue-600 hover:bg-blue-700 px-8 py-3 md:px-6 md:py-3 rounded-lg text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <span className="relative z-10">Connect with Experts</span>
              <i className="bi bi-arrow-right text-lg font-semibold ml-2 mt-2 md:mt-2 lg:mt-2 xl:mt-2"></i>

              {/* Hover gradient effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Button glow effect */}
              <span className="absolute -bottom-1 -left-1 -right-1 -top-1 bg-blue-400/30 rounded-lg blur-md group-hover:opacity-70 transition-opacity duration-300"></span>
            </button>
            </Link>

          </div>

            </div>


            {/* Animation styles */}
            <style jsx>{`
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes highlight {
          0% { background-size: 0% 100%; }
          100% { background-size: 100% 100%; }
        }
        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .highlight-text {
          background: linear-gradient(to right, transparent 50%, rgba(0, 87, 211, 0.3) 50%);
          background-size: 200% 100%;
          background-position: right bottom;
          transition: all 0.5s ease-out;
          padding: 0 2px;
        }
        .highlight-text:hover {
          background-position: left bottom;
        }
      `}</style>
        </div>
    );
}

export default IndustryHome;