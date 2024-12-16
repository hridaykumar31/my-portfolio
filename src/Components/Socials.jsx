import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Socials = () => {
  return (
    <section id="socials" className="bg-gray-800 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Connect with Me</h2>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          {/* GitHub */}
          <a 
            href="https://github.com/your-github" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-3xl hover:text-yellow-300 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/your-linkedin" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-3xl hover:text-yellow-300 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Twitter */}
          <a 
            href="https://twitter.com/your-twitter" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-3xl hover:text-yellow-300 transition duration-300"
          >
            <FaTwitter />
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/your-instagram" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white text-3xl hover:text-yellow-300 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
