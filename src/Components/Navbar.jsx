import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import LogoWhite from '../assets/logo/ATS LOGO WHITE.svg';


// ✅ Utility: Determine if link is active
const getLinkClasses = (pathname, path) => {
  const baseClasses = 'hover:text-gray-200 transition-colors';
  const activeClasses = 'text-gray-100 ';
  return `${baseClasses} ${pathname === path ? activeClasses : ''}`;
};

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className={`px-4 py-2 sticky top-0 z-50 bg-black transition-all duration-1000 ${isScrolled ? '' : ''}`}>
      <div className={`flex items-center transition-all duration-1000 ${isScrolled ? 'justify-between' : 'justify-around'}`}>
        <Link to="/" className="transition-all duration-500">
          <img
            src={LogoWhite}
            alt="Logo"
            className={`w-48 object-contain transition-all duration-300 ${isScrolled ? 'transform scale-100 translate-x-[-10px]' : ''}`}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-12 text-base text-white font-Satoshi,Arial,sans-serif ">
          <li><Link to="/" className={getLinkClasses(pathname, '/')}>HOME</Link></li>

          {/* ✅ Services Dropdown - Desktop */}
          <li className="relative group">
            <Link to="/services" className="flex items-center hover:text-gray-200  transition-colors">
              SERVICES
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <ul className="absolute z-50 text-sm text-gray-700 super-rich-dropdown mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform-gpu translate-y-[-10px] group-hover:translate-y-0">
              <Link to="/web" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                Web App Development
              </Link>
              <li>
                <Link to="/embedded" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/embedded" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/iot" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  IoT Development
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  AI & ML Solutions
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  Data Science & Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`super-hover-link ${getLinkClasses(pathname, '/web-app')}`}>
                  IT Consulting
                </Link>
              </li>
            </ul>
          </li>

          <li><Link to="/Products" className={getLinkClasses(pathname, '/Products')}>INUSTRIES</Link></li>
          <li><Link to="/Blogs" className={getLinkClasses(pathname, '/Blogs')}>PORTFOLIO</Link></li>
          <li><Link to="/Careers" className={getLinkClasses(pathname, '/Careers')}>CAREERS</Link></li>
          {/* <li className=''><Link to="/contact" className={getLinkClasses(pathname, '/contact')}>CONTACT US</Link></li> */}
        </ul>

        {/* Register + Mobile Toggle */}
        <div className={`flex items-center transition-all duration-1000 ${isScrolled ? '' : ''}`}>
          <Link
            to="/register"
            className={`register-button hidden lg:inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white border border-transparent transition-all ${isScrolled ? 'transform translate-x-[10px]' : ''}`}
          >
            CONTACT US
          </Link>

          <div className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl text-white" /> : <FaBars className="text-2xl text-white" />}
          </div>
        </div>
      </div>

      {/* ✅ Mobile Nav */}
      <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-4 space-y-2 text-base font-medium text-white">
          <li><Link to="/" className={getLinkClasses(pathname, '/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>

          {/* ✅ Services Dropdown - Mobile */}
          <li>
            <div
              className="flex justify-between items-center py-2 px-2 cursor-pointer"
              onClick={() => toggleMobileDropdown('services')}
            >
              <span className="text-gray-100">Services</span>
              {mobileDropdowns.services ? <FaChevronUp className="text-gray-100" /> : <FaChevronDown className="text-gray-100" />}
            </div>
            {mobileDropdowns.services && (
              <ul className="pl-4 pb-2 space-y-2 text-sm text-gray-300">
                <li><Link to="/web-app" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Web App Development</Link></li>
                <li><Link to="/embedded" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Embedded System</Link></li>
                <li><Link to="/iot" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>IoT</Link></li>
                <li><Link to="/machine-learning" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Machine Learning</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/Products" className={getLinkClasses(pathname, '/Products')} onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
          <li><Link to="/Blogs" className={getLinkClasses(pathname, '/Blogs')} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/Careers" className={getLinkClasses(pathname, '/Careers')} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" className={getLinkClasses(pathname, '/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;