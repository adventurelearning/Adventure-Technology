import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="hidden lg:flex text-white py-3 px-6 flex-col lg:flex-row justify-between items-center bg-gradient-to-r from-[#0267f3] via-[#3380fd] to-[#0968ee]
">
      <div className="text-xs flex flex-wrap justify-center lg:justify-start">
        <p className="whitespace-nowrap text-sm font-semibold">
          Coimbatore : +91 9884445571 <span className="mx-4">|</span> Chennai : +91 8111005300
        </p>
      </div>
      <div className="flex items-center space-x-4 text-base font-semibold">
        <span>Follow Us </span>
        <div className="flex space-x-3 text-white text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"

          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"

          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"

          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"

          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        </div>
    </header>
  );
};


export default Header;

