import React, { useEffect, useState } from "react";
import certificte from "../assets/certificate/sample_c.jpeg";
import { useLocation } from "react-router-dom";

const InternCertificate = () => {
    const location = useLocation();
    const [courseTitle, setCourseTitle] = useState("");

    useEffect(() => {
        const pathParts = location.pathname.split("/");
        const courseSlug = pathParts[pathParts.length - 1];
        const formattedTitle = courseSlug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setCourseTitle(formattedTitle);
    }, [location.pathname]);

    return (
        <div className="bg-black py-8 sm:py-16 md:py-20">
            <h2 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-white mb-8 lg:mb-12 xl:mb-12 sm:mb-12 text-center tracking-tight">
                Internship <span className="text-blue-400"> Certification</span>
            </h2>
            <div className="glow-cyan i p-3 bg-black rounded-4xl container mx-auto text-white flex flex-col sm:flex-row items-start justify-around px-4 sm:px-6 py-8 sm:py-12 md:py-16">

                <div className="relative bg- rounded-2xl shadow-2xl p-4 sm:p-6 max-w-6xl w-full mx-auto transform transition-all duration-500 hover:shadow-3xl">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-l from-blue-500 to-blue-700 rounded-full opacity-20 blur-xl"></div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
                        {/* Certificate Image */}
                        <div className="relative flex-shrink-0 group">
                            {/* Block context menu and drag */}
                            <div
                                className="absolute inset-0 z-10 cursor-not-allowed"
                                onContextMenu={(e) => e.preventDefault()}
                                onDragStart={(e) => e.preventDefault()}
                                style={{ pointerEvents: "none" }}
                            ></div>

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-700 rounded-2xl transform rotate-2 blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>

                            <div className="relative border-8 border-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:rotate-[-1deg] hover:scale-105">
                                <img
                                    src={certificte}
                                    alt="Professional Certificate"
                                    className="w-80 sm:w-96 object-cover select-none"
                                    onContextMenu={(e) => e.preventDefault()}
                                    onDragStart={(e) => e.preventDefault()}
                                    draggable="false"
                                />

                                {/* Ribbon */}
                                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-full shadow-md rotate-12 z-20">
                                    <span className="text-white font-semibold uppercase text-sm">Verified</span>
                                </div>

                                {/* Hover overlay badge text */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-bold text-lg bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                                        Certificate Protected
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex-grow space-y-4 sm:space-y-6">
                            {/* Block 1 */}
                            <div className="relative p-4 sm:p-6 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-700 hover:from-blue-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-800 to-blue-500 rounded-l-xl"></div>
                                <div className="flex items-center pl-6">
                                    <div className="bg-gradient-to-r from-black to-blue-500 p-3 rounded-xl shadow-lg">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl  font-bold text-white mb-2">Industry-Recognized Internship:</h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Endorsed by real-world tech companies.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="relative p-4 sm:p-6 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-700 hover:from-blue-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-800 to-blue-500 rounded-l-xl"></div>
                                <div className="flex items-center pl-6">
                                    <div className="bg-gradient-to-r from-black to-blue-500 p-3 rounded-xl shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold text-white mb-2">Real-World Experience:</h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 "></span>
                                                Hands-on project work and mentorship.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Block 3 */}
                            <div className="relative p-4 sm:p-6 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-700 hover:from-blue-900 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-800 to-blue-500 rounded-l-xl"></div>
                                <div className="flex items-center pl-6">
                                    <div className="bg-gradient-to-r from-black to-blue-500 p-3 rounded-xl shadow-lg">
                                      
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold text-white mb-2">Boost Internship Portfolio:</h3>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Showcase this certificate in your LinkedIn or resume.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animation: `float ${Math.random() * 5 + 3}s infinite`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternCertificate;
