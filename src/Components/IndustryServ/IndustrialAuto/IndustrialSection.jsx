import React from 'react';

const IndustrialSection = () => {
    return (
        <div className="bg-black py-12 sm:py-16 md:py-20 text-white text-center md:text-left">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 leading-tight">
                    Empowering Industrial Innovation<span className="md:block" >
                    with Intelligent, Connected, and </span><span className=" md:block" >
                    Future-Ready Embedded Automation</span>
                </h1>
                <div className="text-lg text-gray-300 mb-6 text-justify">
                    <p className="mb-4">
                        At AutomationEdge Solutions, we specialize in developing high-performance embedded systems that transform industrial environments. From real-time machine control to IIoT-enabled analytics, our solutions improve operational efficiency, reduce downtime, and enable intelligent decision-making across industrial sectors.
                    </p>
                    <p>
                        Our industrial automation engineering services encompass every phase of product development—from system design and firmware engineering to integration, validation, and compliance. We design with durability, safety, and scalability in mind to meet the demanding requirements of factories, process plants, and remote field equipment. Whether you're building smart machinery or retrofitting legacy systems, we deliver robust embedded platforms to power the Industry 4.0 revolution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndustrialSection;
