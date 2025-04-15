// src/components/Navbar.jsx

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../assets/icon.png";

import { IconMenu2, IconPhone, IconX } from "@tabler/icons-react";

const Navbar = () => {
  // const [activeTab, setActiveTab] = useState("#home");
  const activeTab = "#home"
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = (id) => {
    let element = document.getElementById(id.slice(1));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Live Preview", href: "#live-preview" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    // my-6 px-4 md:px-10 lg:px-24 font-[SF-Pro-Display]
    <nav className="my-6 font-[SF-Pro-Display] w-full" style={{ paddingInline: "0.02rem" }} id="nav">
      {/* max-w-[1440px] - removed */}
      <div className="bg-white rounded-3xl lg:px-5 px-2 py-4 flex justify-between items-center mx-auto" style={{ marginInline: 0 }}>
        <div className="flex items-center text-[20px] font-[600] tracking-wider text-(--color-primary)">
          <img className="w-8 h-8" src={icon} alt="alitas" />
          alitas
        </div>

        <div className="hidden md:flex space-x-10 items-center text-lg">
          {navLinks.map(({ label, href }) => (
            <span
              key={href}
              onClick={() => navigate(href)}
              className={`hover:text-gray-400 relative transition-colors duration-300 cursor-pointer ${
                activeTab === href ? "hover:text-stone-950 font-bold " : ""
              }`}
            >
              {label}
              {activeTab === href && <span className="absolute top-12 left-0 w-full h-1 bg-(--color-primary) rounded-t-full"></span>}
            </span>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text">
              <IconPhone className="text-(--color-primary)" stroke={1} /> Get in Touch
            </div>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <div>
            <button className="border border-purple-600 px-3 py-2 rounded-full hover:bg-purple-50 transition">
              <div className="flex items-center gap-0 bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text text-sm">
                <IconPhone className="text-(--color-primary)" stroke={1} size={20} /> Get in Touch
              </div>
            </button>
          </div>
          <div className="md:hidden text-purple-500 text-2xl cursor-pointer rounded-full border border-purple-500 p-1" onClick={toggleMenu}>
            {menuOpen ? <IconX /> : <IconMenu2 />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-md py-6 px-6 flex flex-col items-center space-y-4 w-[100%] mx-auto absolute left-0">
          {navLinks.map(({ label, href }) => (
            <span
              key={href}
              onClick={() => {
                navigate(href);
                setMenuOpen(false);
              }}
              className={`text-lg ${activeTab === href ? "text-purple-500" : "text-gray-800"}`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
