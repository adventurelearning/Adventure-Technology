import React from 'react';
import { Link } from 'react-router-dom';
const CareersHome = () => {
    return (
        <div className="relative w-full h-[66vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden text-white">
            {/* Background Static Image */}
            <div className="relative w-full h-full">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Industry Banner"
                    className="w-full h-full object-cover object-bottom absolute inset-0 z-0"
                />

                {/* Black corner shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/80 z-10 pointer-events-none" />
            </div>



            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

            {/* Main Text Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center sm:items-start px-4 sm:px-6 md:px-16 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 leading-snug sm:leading-snug md:leading-tight">
                    {/* Innovative Technology Solutions<span className="block"> for Every Industry</span> */}
                    Looking for a great place<span className="block mt-2">to grow and thrive?</span>

                </h1>

                <h3 className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl mb-6 sm:mb-8">
                    This is a place to grow, learn and connect. Everything that makes you
                    <span className='md:block'>who you are is welcome here</span>
                </h3>

                <Link
                    smooth={true}
                    duration={500}
                    offset={-70} >
                    <button className="bg-blue-600 cursor-pointer hover:bg-white hover:text-blue-600 px-4 py-2 sm:py-3 mt-3 sm:mt-5 rounded-md text-base sm:text-lg font-medium text-white flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Explore Careers
                        <span className="text-3xl pl-2">
                            <i className="bi bi-arrow-right-short"></i>
                        </span>
                    </button>
                    </Link>
            </div>
        </div>
    );
};

export default CareersHome;
