// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p>&copy; {new Date().getFullYear()} Tomasz Bachula. All Rights Reserved.</p>
        <div className="flex items-center mt-4 space-x-4">
          <a href="https://github.com/bakomans" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/tomasz-bachula-2530871a6" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
