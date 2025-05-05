import React from 'react';
import { AiFillThunderbolt, AiOutlineClockCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';

const CapabilitiesPage = () => {
    return (
        <div className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold text-blue-500 mb-4 text-center">Our Capabilities</h2>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    We craft exceptional websites and apps entirely in-house, ensuring end-to-end precision and uncompromising excellence.
                </p>
                <h3 className="text-3xl font-normal text-blue-500 mb-8 text-center md:text-left ml-5">
                            Why Join Hands With Us?
                        </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">              
                    {/* Left Column */}
                    <div>
                       
                        <div className="space-y-6">
                            <CapabilityItem
                                icon={<AiFillThunderbolt size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="Unmatched IT Expertise"
                                description="We deliver a versatile and professional approach, finely tuned to meet the unique needs of every client."
                            />
                            <CapabilityItem
                                icon={<AiOutlineClockCircle size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="Rapid Execution"
                                description="From aligned expectations to swift development, we prioritize efficiency at every step."
                            />
                            <CapabilityItem
                                icon={<AiOutlineCheckCircle size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="On-Time Excellence"
                                description="Clear communication and diligent planning ensure every project is delivered on schedule."
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="space-y-6">
                            <CapabilityItem
                                icon={<FiTrendingUp size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="Value-Driven Solutions"
                                description="Our team ensures optimal outcomes, providing exceptional results for every dollar invested."
                            />
                            <CapabilityItem
                                icon={<FiUsers size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="Established Leadership"
                                description="With over 10+ years of proven experience, we stand as trusted innovators in the industry."
                            />
                            <CapabilityItem
                                icon={<FiShield size={28} className="text-white bg-blue-500 rounded-full p-2 w-10 h-10" />}
                                title="Reliable Partnership"
                                description="Adventure Technology Solutions offers steadfast, responsive support you can depend on, every time."
                            />
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-start flex flex-1 items-start justify-between px-5">
                    <div>
                    <h2 className="text-5xl font-semibold text-blue-500  mb-2">Have a project in mind?</h2>
                    <p className="text-4xl text-white font-semibold mb-6 mt-6">Let's Connect</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-semibold mt-8 py-3 px-8 rounded-sm text-xl border-1 border-white transition-transform hover:scale-105">
                        Let's Talk 
                    </button>
                </div>
            </div>
        </div>
    );
};

// Reusable CapabilityItem component
const CapabilityItem = ({ icon, title, description }) => {
    return (
        <div className="flex items-start transition-all hover:bg-gray-800 hover:shadow-md p-4 rounded-md">
            <div className="mr-4 mt-1">{icon}</div>
            <div>
                <h4 className="text-xl font-semibold mb-1 text-white">{title}</h4>
                <p className="text-base text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default CapabilitiesPage;
