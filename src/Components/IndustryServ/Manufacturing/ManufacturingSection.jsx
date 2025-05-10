import React from 'react';

const ManufacturingSection = () => {
    return (
        <div className="bg-black py-12 sm:py-16 md:py-20 text-white text-center md:text-left">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8 leading-tight">
                    Building Scalable, Reliable, and <span className=" md:block">
                    Future-Ready IT Solutions for Manufacturing</span>
                </h1>

                <div className="text-base sm:text-lg text-gray-300 space-y-4 text-justify">
                    <p>
                        At Adventure Technology, we specialize in providing innovative IT solutions tailored specifically for the manufacturing industry. Our services are designed to optimize production processes, improve operational efficiency, and enhance supply chain management. With our cutting-edge technologies, we empower manufacturers to stay ahead in an increasingly competitive market.
                    </p>
                    <p>
                        From automation systems and data analytics to cloud infrastructure and IT support, we offer end-to-end solutions to ensure that your manufacturing operations run smoothly. Our approach integrates the latest technologies to enable real-time monitoring, predictive maintenance, and streamlined communication across the entire production lifecycle. We don’t just provide a service; we are committed to being your long-term IT partner, ensuring your systems are always optimized and future-proof.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ManufacturingSection;
