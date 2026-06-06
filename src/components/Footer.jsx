import React from 'react';
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 py-10 relative z-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold font-mono tracking-tighter mb-2">
            <span className="text-accent-blue dark:text-accent-neon">{"<"}</span>
            Devi<span className="dark:text-accent-purple text-accent-blue">prasad</span>
            <span className="text-accent-blue dark:text-accent-neon">{"/>"}</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Architect: Deviprasad Muduli &copy; {currentYear}| All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors transform hover:-translate-y-1">
            <FaInstagram size={24} />
          </a>
          <a href="mailto:deviprasadmuduli@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors transform hover:-translate-y-1">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.linkedin.com/in/deviprasad-muduli-13b2b1387" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors transform hover:-translate-y-1">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/thedeviprasadcyt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:-translate-y-1">
            <FaGithub size={24} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
