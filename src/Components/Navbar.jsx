import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import LogoWhite from '../assets/logo/ATS WEB LOGO 3.svg';

// ✅ Utility: Determine if link is active
const getLinkClasses = (pathname, path) => {
  const baseClasses = 'hover:text-gray-200 transition-colors';
  const activeClasses = 'text-gray-100';
  return `${baseClasses} ${pathname === path ? activeClasses : ''}`;
};

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ❗ Optional: Remove if not needed
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
    <nav className="px-4 py-2 sticky top-0 z-50 bg-black transition-all duration-1000">
      <div className="flex items-center justify-between transition-all duration-1000 p-2">
        {/* Logo */}
        <Link to="/" className="transition-all duration-500">
          <img
            src={LogoWhite}
            alt="Logo"
            className="w-52 object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-12 text-base text-white font-Satoshi,Arial,sans-serif">
          <li><Link to="/" className={getLinkClasses(pathname, '/')}>HOME</Link></li>

          {/* ✅ Services Dropdown - Desktop */}
          <li className="relative group">
            <Link to="/services" className="flex items-center hover:text-gray-200 transition-colors">
              SERVICES
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <ul className="absolute z-50 text-sm text-gray-700 super-rich-dropdown mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform-gpu translate-y-[-10px] group-hover:translate-y-0">
              <li><Link to="/Web-Development" className={`super-hover-link ${getLinkClasses(pathname, '/Web-Development')}`}>Web App Development</Link></li>
              <li><Link to="/Software-Development" className={`super-hover-link ${getLinkClasses(pathname, '/Software-Development')}`}>Software Development</Link></li>
              <li><Link to="/UiUx-Design" className={`super-hover-link ${getLinkClasses(pathname, '/UiUx-Design')}`}>UI/UX Design</Link></li>
              <li><Link to="/Iot-development" className={`super-hover-link ${getLinkClasses(pathname, '/Iot-development')}`}>IoT Development</Link></li>
              <li><Link to="/Ai&Ml-Solutions" className={`super-hover-link ${getLinkClasses(pathname, '/Ai&Ml-Solutions')}`}>AI & ML Solutions</Link></li>
              <li><Link to="/DataScience-Analytics" className={`super-hover-link ${getLinkClasses(pathname, '/DataScience-Analytics')}`}>Data Science & Data Analytics</Link></li>
              <li><Link to="/Digital-Marketing" className={`super-hover-link ${getLinkClasses(pathname, '/Digital-Marketing')}`}>Digital Marketing</Link></li>
              <li><Link to="/IT-Consulting" className={`super-hover-link ${getLinkClasses(pathname, '/IT-Consulting')}`}>IT Consulting</Link></li>
            </ul>
          </li>

          <li><Link to="/Industries" className={getLinkClasses(pathname, '/Industries')}>INDUSTRIES</Link></li>
          <li><Link to="/Blogs" className={getLinkClasses(pathname, '/Blogs')}>PORTFOLIO</Link></li>

          {/* ✅ Company Dropdown */}
          <li className="relative group">
            <Link to="/Careers" className="flex items-center hover:text-gray-200 transition-colors">
              COMPANY
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <ul className="absolute z-50 text-sm text-gray-700 super-rich-dropdown mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform-gpu translate-y-[-10px] group-hover:translate-y-0">
              <li><Link to="/AboutUs" className={`super-hover-link ${getLinkClasses(pathname, '/AboutUs')}`}>About Us</Link></li>
              <li><Link to="/Internship" className={`super-hover-link ${getLinkClasses(pathname, '/Internship')}`}>Internship</Link></li>
              <li><Link to="/Career" className={`super-hover-link ${getLinkClasses(pathname, '/Career')}`}>Careers</Link></li>
            </ul>
          </li>
        </ul>


        {/* Register + Mobile Toggle */}
        <div className="flex items-center transition-all duration-1000">
          <Link
            to="/Contact"
            className="register-button hidden lg:inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white border border-transparent transition-all"
          >
            CONTACT US
          </Link>

          {/* Hamburger */}
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
