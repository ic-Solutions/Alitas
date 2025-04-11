// src/components/Navbar.jsx

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon from '../assets/icon.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Live Preview', href: '#live-preview' },
    { label: 'FAQs', href: '#faqs' }
  ];

  return (
    <div className="my-6 px-4 md:px-10 lg:px-24 font-[SF-Pro-Display]">
      <div className="bg-white rounded-3xl px-6 lg:px-5 py-6 flex justify-between items-center max-w-[1440px] mx-auto">
        <div className="flex items-center text-3xl text-purple-600">
          <img className="w-9 h-9" src={icon} alt="alitas" />
          alitas
        </div>

        <div className="hidden md:flex space-x-10 items-center text-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActiveTab(href)}
              className="hover:text-gray-400 relative transition-colors duration-300" 
            >
              {label}
              {activeTab === href && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></span>
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="text-purple-600 border border-purple-600 px-6 py-2 rounded-full hover:bg-purple-50 transition">
            Get in Touch
          </button>
        </div>

        <div
          className="md:hidden text-purple-500 text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-md py-6 px-6 flex flex-col items-center space-y-4 max-w-[1440px] mx-auto">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActiveTab(href);
                setMenuOpen(false);
              }}
              className={`text-lg ${
                activeTab === href ? 'text-purple-500' : 'text-gray-800'
              }`}
            >
              {label}
            </a>
          ))}
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-2">
            Get in Touch
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
