import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
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
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://www.youtube.com/0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors duration-300"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;