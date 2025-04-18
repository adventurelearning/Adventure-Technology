import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaPhoneAlt, FaTimes, FaBars } from 'react-icons/fa';
import ATSlogo from '../assets/ATSlogo.svg'; // Replace with your actual logo path
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar1 = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
  });

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'pages') {
      setIsPagesDropdownOpen(!isPagesDropdownOpen);
      setIsBlogDropdownOpen(false);
    } else if (dropdown === 'blog') {
      setIsBlogDropdownOpen(!isBlogDropdownOpen);
      setIsPagesDropdownOpen(false);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const getLinkClasses = (path) => {
    return `px-4 py-2 hover:text-[#0057D3] ${pathname === path ? 'text-[#0057D3] font-semibold' : ''
      }`;
  };

  return (

    <nav className="bg-gradient-to-b from-blue-500 to-white pb-130">
      <div className=" container  mx-auto flex items-center justify-between rounded-full bg-white  p-4">
        {/* Logo */}
        <Link to="/">
          <img src={ATSlogo} alt="Logo" className="w-40 object-contain " />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex  text-base text-gray-800 font-sans">
          <li className="font-medium">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
          </li>

          {/* ✅ Services Dropdown - Desktop */}
          <li className="relative group font-medium">
            <button className="flex items-center hover:text-[#0057D3] transition-colors">
              Services
              <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <ul className="absolute z-50 text-sm bg-white mt-2 py-2 w-48 rounded-md shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
              <li>
                <Link to="/web-app" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses('/web-app')}`}>
                  Web App Development
                </Link>
              </li>
              <li>
                <Link to="/embedded" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses('/embedded')}`}>
                  Embedded System
                </Link>
              </li>
              <li>
                <Link to="/iot" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses('/iot')}`}>
                  IoT
                </Link>
              </li>
              <li>
                <Link to="/machine-learning" className={`block px-4 py-2 hover:bg-blue-50 hover:text-[#0057D3] transition-colors ${getLinkClasses('/machine-learning')}`}>
                  Machine Learning
                </Link>
              </li>
            </ul>
          </li>

          <li className="font-medium">
            <Link to="/Products" className={getLinkClasses('/Products')}>Products</Link>
          </li>
          <li className="font-medium">
            <Link to="/Blogs" className={getLinkClasses('/Blogs')}>Blogs</Link>
          </li>
          <li className="font-medium">
            <Link to="/Careers" className={getLinkClasses('/Careers')}>Careers</Link>
          </li>
          <li className="font-medium">
            <Link to="/contact" className={getLinkClasses('/contact')}>Contact Us</Link>
          </li>
        </ul>


        {/* Register Button & Mobile Toggle */}

        <div className="flex items-center">
          <div className="relative w-full max-w-xs mr-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full  border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0057D3]"
            />
            <i className="bi bi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0057D3] text-xl pointer-events-none"></i>
          </div>

          {/* Register Button */}
          <Link
            to="/register"
            className="hidden lg:inline-block px-5 py-2 rounded-3xl bg-[#0057D3] text-white border border-transparent hover:bg-white hover:text-[#0057D3] hover:border-blue-700 transition-all"
          >
            Register
          </Link>
          <div className="lg:hidden ml-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-4 space-y-2 text-base font-medium px-4 pb-4">
          <li>
            <Link to="/" className={getLinkClasses('/')} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* ✅ Services Dropdown - Mobile */}
          <li>
            <div
              className="flex justify-between items-center py-2 px-2 cursor-pointer"
              onClick={() => toggleMobileDropdown('services')}
            >
              <span className="text-gray-800">Services</span>
              {mobileDropdowns.services ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {mobileDropdowns.services && (
              <ul className="pl-4 pb-2 space-y-2 text-sm">
                <li><Link to="/web-app" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Web App Development</Link></li>
                <li><Link to="/embedded" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Embedded System</Link></li>
                <li><Link to="/iot" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>IoT</Link></li>
                <li><Link to="/machine-learning" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Machine Learning</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/Products" className={getLinkClasses('/Products')} onClick={() => setIsMobileMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/Blogs" className={getLinkClasses('/Blogs')} onClick={() => setIsMobileMenuOpen(false)}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/Careers" className={getLinkClasses('/Careers')} onClick={() => setIsMobileMenuOpen(false)}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClasses('/contact')} onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>


  );
};

export default Navbar1;
