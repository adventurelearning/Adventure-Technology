import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp,FaMapMarkerAlt, FaWhatsapp, FaHome, FaBuilding, FaCode, FaIndustry, FaUsers, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header-style hidden lg:flex text-white py-2 px-8 flex-col lg:flex-row justify-between items-center">
            <div className="text-sm flex flex-wrap justify-center lg:justify-start items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                    <p className="whitespace-nowrap font-semibold">
                        Call Us: <a href="tel:+919884445571" className="hover:text-blue-300">+91 9884445571</a>
                    </p>
                </div>
                {/* <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-green-300" />
                    <p className="whitespace-nowrap font-semibold">
                        Email: <a href="mailto:info@example.com" className="hover:text-green-300">info@example.com</a>
                    </p>
                </div> */}
            </div>
            <div className="flex items-center space-x-6 text-base font-semibold">
                <span>Stay Connected</span>
                <div className="flex space-x-4 text-white text-base">
                    <a href="https://in.linkedin.com/company/adventure-technology-solutions-pvt-ltd" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a
                        href="https://wa.me/9884445571"  // Replace with your actual WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-400 transition-colors"
                    >
                        <FaWhatsapp className="text-lg" />
                    </a>

                    <a href="https://www.instagram.com/adventure_ats_official/" className="text-white hover:text-blue-400 transition-colors">
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://www.google.com/search?q=adventure+technology+coimbatore&rlz=1C1GCEA_enIN1155IN1155&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMg8IBBAuGCcYxwEY6gIY0QMyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxMzg5ajBqMTWoAgiwAgHxBQnen9dfk1Gd8QUJ3p_XX5NRnQ&sourceid=chrome&ie=UTF-8&lqi=Ch9hZHZlbnR1cmUgdGVjaG5vbG9neSBjb2ltYmF0b3JlSKaCj6-ovYCACForEAAQARgAGAEYAiIfYWR2ZW50dXJlIHRlY2hub2xvZ3kgY29pbWJhdG9yZZIBEHNvZnR3YXJlX2NvbXBhbnmqAWIQASoYIhRhZHZlbnR1cmUgdGVjaG5vbG9neSgAMh8QASIbiD1ZUnd1NFdVSX4BwsxihNgdmPGaZ3vsBccIMiMQAiIfYWR2ZW50dXJlIHRlY2hub2xvZ3kgY29pbWJhdG9yZQ#rlimm=13896972483454842117"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-400 transition-colors"
                    >
                        <FaMapMarkerAlt className="text-lg" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;