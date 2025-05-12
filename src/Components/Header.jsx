import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaRocket, FaMedal } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-gradient-to-r  space-x-2 from-blue-700 to-blue-500 text-white py-3 px-8 hidden lg:flex justify-between items-center">
            <div className="text-sm flex flex-wrap justify-center lg:justify-start items-center space-x-6">
                <div className="flex items-center space-x-2 bg-blue-700/80 px-3 py-1 rounded-md animate-pulse">                    
                    <p className="whitespace-nowrap font-semibold">
                         Fastest Growing Tech Company 
                    </p>
                </div>                           
            </div>
            
            <div className="flex items-center space-x-6 text-base font-semibold">                
                <div className="flex space-x-5 text-white text-lg">
                    <a 
                        href="https://in.linkedin.com/company/adventure-technology-solutions-pvt-ltd" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-all transform hover:scale-125 hover:rotate-6"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://wa.me/9884445571"  
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-300 transition-all transform hover:scale-125 hover:-rotate-6"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                    <a 
                        href="https://www.instagram.com/adventure_ats_official/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-300 transition-all transform hover:scale-125 hover:rotate-6"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://maps.app.goo.gl/5nTRz6mHX6Q2mJYx9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-300 transition-all transform hover:scale-125 hover:-rotate-6"
                        aria-label="Location"
                    >
                        <FaMapMarkerAlt />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;