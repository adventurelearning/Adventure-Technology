import React from 'react';

const IndustryServ = () => {
    return (
        <div className="bg-black py-16 text-start">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-3xl font-semibold mb-6">Industries We Serve</h1>
                <h3 className="text-gray-300 text-lg w-3/4 mb-8">
                We provide smart, scalable technology solutions — from AI and IoT to full-stack software development — designed to meet the unique challenges of every industry. Our expertise spans across multiple domains, helping businesses streamline operations, enhance customer experiences, and stay ahead in the digital era.
                </h3>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                        <h4 className="text-xl font-semibold mb-2">Business-Centric:</h4>
                        <p className="text-gray-300">
                            "Empowering industries with custom-built digital solutions that drive growth, efficiency, and innovation."
                        </p>
                    </div>
                    <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                        <h4 className="text-xl font-semibold mb-2">Tech-Focused:</h4>
                        <p className="text-gray-300">
                            "Transforming businesses with cutting-edge technologies like AI, IoT, and data analytics across various sectors."
                        </p>
                    </div>
                    <div className="text-white border border-gray-600 bg-black p-6 rounded-lg hover:border-gray-400 transition-colors duration-300">
                        <h4 className="text-xl font-semibold mb-2">Simplified & Friendly:</h4>
                        <p className="text-gray-300">
                            "No matter your industry, we build the digital tools that help you work smarter and grow faster."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustryServ;