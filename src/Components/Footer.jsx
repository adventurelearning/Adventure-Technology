import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from '../assets/logo/ATS WEB LOGO 3.svg';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    const [emailHref, setEmailHref] = useState(
        'https://mail.google.com/mail/?view=cm&fs=1&to=info@adventuretechnologysolutions.com'
    );

    useEffect(() => {
        // Simple mobile check
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            setEmailHref('mailto:info@adventuretechnologysolutions.com');
        }
    }, []);
    return (
        <footer className="bg-gradient-to-t from-black via-slate-900 to-blue-900 text-white pt-12 pb-5">
            <div className="container mx-auto px-6 md:px-8 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-12 xl:gap-5">
                    {/* Left side - Logo and description */}
                    <div className="lg:w-2/5 xl:w-1/3">
                        <img
                            src={LogoWhite}
                            alt="Adventure Technology Solutions Pvt Ltd Logo"
                            className="w-72"
                        />
                        <div className="mt-6">
                            <p className="text-sm lg:text-base w-3/4 md:w-3/4 ">
                                Driven by reliability and a commitment to excellence, we deliver exceptional service and
                                dependable support wherever and whenever it's needed
                            </p>

                            <h3 className="text-lg font-semibold mt-6 mb-3">Follow Us</h3>
                            <div className="flex space-x-4 text-white">
                                <div className="flex space-x-4">
                                    <a href="https://in.linkedin.com/company/adventure-technology-solutions-pvt-ltd" className="text-white hover:text-blue-400 transition-colors">
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                    <a
                                        href="https://wa.me/9884445571"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-300 transition-colors duration-200"
                                    >
                                        <FaWhatsapp size={20} />
                                    </a>

                                    <a href="https://www.instagram.com/adventure_ats_official/" className="text-white hover:text-blue-400 transition-colors">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Links */}
                    <div className="lg:w-3/5 xl:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
                            {/* HOME */}
                            <div>
                                <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">HOME</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/" className="hover:text-gray-300">Our Services</Link></li>
                                    <li><Link to="/" className="hover:text-gray-300">Why Choose Us</Link></li>
                                    <li><Link to="/" className="hover:text-gray-300">Explore Tools</Link></li>
                                    <li><Link to="/" className="hover:text-gray-300">Lets Connect</Link></li>
                                    <li><Link to="/" className="hover:text-gray-300">FAQ</Link></li>
                                </ul>
                            </div>

                            {/* SERVICES */}
                            <div>
                                <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">SERVICES</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/Web-Development" className="hover:text-gray-300">WebApp Development</Link></li>
                                    <li><Link to="/App-Development" className="hover:text-gray-300">Software Development</Link></li>
                                    <li><Link to="/UiUx-Design" className="hover:text-gray-300">UI & UX Design</Link></li>
                                    <li><Link to="/Iot-development" className="hover:text-gray-300">IOT Development</Link></li>
                                    <li><Link to="/Iot-development" className="hover:text-gray-300">Embedded Product Design</Link></li>
                                    <li><Link to="/Embedded-Software" className="hover:text-gray-300">Embedded Software</Link></li>
                                    <li><Link to="/Ai&Ml-Solutions" className="hover:text-gray-300">AI & ML Solutions</Link></li>
                                    <li><Link to="/DataScience-Analytics" className="hover:text-gray-300">Data Science & Analytics</Link></li>
                                </ul>
                            </div>

                            {/* INDUSTRIES */}
                            <div>
                                <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">INDUSTRIES</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/Manufaturing" className="hover:text-gray-300">Manufacturing</Link></li>
                                    <li><Link to="/Agriculture" className="hover:text-gray-300">Agriculture</Link></li>
                                    <li><Link to="/Healthcare" className="hover:text-gray-300">Healthcare</Link></li>
                                    <li><Link to="/Education" className="hover:text-gray-300">Education</Link></li>
                                    <li><Link to="/Automotive" className="hover:text-gray-300">Automotive</Link></li>
                                    <li><Link to="/Ecommerce" className="hover:text-gray-300">E-commerce</Link></li>
                                    <li><Link to="/SaaS" className="hover:text-gray-300">SaaS</Link></li>
                                    <li><Link to="/IndustrialAuto" className="hover:text-gray-300">IndustrialAuto</Link></li>

                                </ul>
                            </div>

                            {/* COMPANY */}
                            <div>
                                <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">COMPANY</h3>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/AboutUs" className="hover:text-gray-300">About</Link></li>
                                    <li><Link to="/Internship" className="hover:text-gray-300">Internship</Link></li>
                                    <li><Link to="/Career" className="hover:text-gray-300">Career</Link></li>
                                </ul>
                            </div>

                            {/* CONTACT */}
                            <div>
                                <h3 className="text-base font-semibold mb-3 uppercase tracking-wider">CONTACT</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start">
                                        {/* <FiPhone className="w-5 h-5 mt-1 mr-2 flex-shrink-0" /> */}
                                        <div className="text-sm">
                                            <p>Coimbatore<span className="block">+91-9884445571</span></p>
                                            <p className="mt-2">Chennai<span className="block">+91-8111005300</span></p>
                                            <p className="mt-2">Hire from us<span className="block">+91-9884220600</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start ">
                                        <div className="flex items-start ">
                                            <HiOutlineMail className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                                            <a
                                                href={emailHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-300 transition-colors duration-200"
                                            >
                                                info@adventure<span className="md:block">technologysolutions.com</span>
                                            </a>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   {/* Bottom line */}
                    <div className="mt-12 pt-4 border-t w-full border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="mb-2 md:mb-0">© 2025 Adventure Technology Solutions Pvt Ltd.</p>
                        <div className='flex space-x-3 sm:space-x-4'>
                            <h5>
                                <Link to="/TermsAndConditions" className="hover:text-gray-300 underline">Terms & Conditions</Link>
                                <span> | </span>
                                <Link to="/PrivacyPolicy" className="hover:text-gray-300 underline">Privacy Policy</Link>
                            </h5>
                            <div className='flex space-x-3 sm:space-x-4'>
                                <h5>
                                    <Link to="/TermsAndConditions" className="hover:text-gray-300 underline">Terms & Conditions</Link>
                                    <span> | </span>
                                    <Link to="/PrivacyPolicy" className="hover:text-gray-300 underline">Privacy Policy</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
