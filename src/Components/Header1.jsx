import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header1 = () => {
  return (
    <div className="bg-blue-500 py-5 px-6 text-sm text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex space-x-4">
        <p className="whitespace-nowrap text-sm font-semibold ml-10">
          Coimbatore : +91 9884445571 <span className="mx-4">|</span> Chennai : +91 8111005300
        </p>
        </div>
        <div className="flex items-center mr-10 space-x-3">
          <p className='text-sm font-semibold'>Follow Us</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

// You'll need to import these FontAwesome icons:
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default Header1;