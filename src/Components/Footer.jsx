import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand Section */}
          <div className="flex items-center text-lg font-bold">
            <FaCode className="text-yellow-300 mr-2" />
            <HashLink smooth to="/" className="hover:text-yellow-300">
              Hriday Kumar
            </HashLink>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <HashLink smooth to="/projects" className="hover:text-yellow-300">
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/skills" className="hover:text-yellow-300">
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/about" className="hover:text-yellow-300">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/contact" className="hover:text-yellow-300">
                Contact
              </HashLink>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/hridaykumar31"  // Corrected GitHub URL
              className="hover:text-yellow-300 text-5xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/your-linkedin" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-yellow-300 text-5xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:hridaykumarcse31@gmail.com" // Added email link
              className="hover:text-yellow-300 text-5xl"
            >
              <span className="text-5xl">📧</span> {/* Email icon */}
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} Hriday Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
