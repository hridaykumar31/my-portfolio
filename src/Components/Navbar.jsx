// Navbar.js
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto px-4 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md">
      {/* Logo Section */}
      <div className="logo text-2xl font-bold text-white">
        <HashLink smooth to="/">Hriday Kumar</HashLink>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <HashLink 
            smooth 
            to="/" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink 
            smooth 
            to="/projects" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink 
            smooth 
            to="/skills" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink 
            smooth 
            to="/about" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink 
            smooth 
            to="/contact" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Contact
          </HashLink>
        </li>
        <li>
          <a 
            href="/assets/Simple_Hipster_CV__1_.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
