import React from "react";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaYoutube, FaTiktok, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import icon from "../assets/icon.png";

const Footer = () => {
  const icons = [
    { icon: <MdEmail />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaTiktok />, href: "#" },
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
  ];

  return (
    <div className="bg-[#EFEFFB] text-gray-700 py-10 px-4 sm:px-6 lg:px-10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between border-b border-gray-300 pb-16 gap-16 max-w-screen-2xl mx-auto px-4 sm:px-8">
        {/* Left Section */}
        <div className="lg:mx-15 w-full lg:w-1/2">
          <div className="flex items-center text-4xl text-purple-600 font-light font-[SF-Pro-Display]">
            <img className="w-10 h-10 mr-2" src={icon} alt="alitas" /> alitas
          </div>
          <p className="mt-6 font-semibold text-base leading-relaxed">Subscribe to our newsletter for the latest updates on features and releases.</p>
          <div className="flex flex-row items-start mt-6 lg:gap-4 gap-2 w-full">
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="border border-purple-600 rounded-full lg:px-4 p-2 focus:outline-none w-[100%]"
              />
            </div>
            <div className="flex">
              <button className="text-(--color-primary) border border-(--color-primary) lg:px-4 p-2 rounded-full font-semibold hover:text-white hover:bg-(--color-primary) hover:cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
          <p className="lg:text-sm mt-2 text-gray-600 text-xs lg:w-full w-3/4">
            By subscribing, you consent to our Privacy Policy and receive updates.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-16 font-[DM Sans] text-base">
          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-5">Products</h3>
            <ul className="space-y-4">
              <li>Background Remover</li>
              <li>Text Remover</li>
              <li>Background Changer</li>
              <li>Image Upscaler</li>
              <li>Text Remover</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-5">Resources</h3>
            <ul className="space-y-4">
              <li>Background Remover</li>
              <li>Background Changer</li>
              <li>Image Upscaler</li>
              <li>Text Remover</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-5">Support</h3>
            <ul className="space-y-4">
              <li>Background Remover</li>
              <li>Text Remover</li>
              <li>Background Changer</li>
              <li>Image Upscaler</li>
              <li>Background Changer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Mobile Links */}
      <div className="lg:hidden block">
        <div className="flex justify-between py-2">
          <p>&copy;2025 All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <span className="text-xl text-black">🌐</span>
            <select className="bg-transparent text-sm focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <a href="#" className="text-(--color-primary)">
            Terms of use
          </a>{" "}
          |
          <a href="#" className="text-(--color-primary)">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="text-(--color-primary)">
            Policies
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center lg:mt-8 mt-3 gap-6 max-w-screen-2xl mx-auto">
        {/* Desktop links */}
        <div className="text-sm text-center md:text-left hidden lg:block">
          <p className="flex gap-3">
            <span>&copy;2025 All Rights Reserved &nbsp;&nbsp;|</span>
            <a href="#" className="text-(--color-primary)">
              Terms of use
            </a>
            |
            <a href="#" className="text-(--color-primary)">
              Privacy Policy
            </a>
            |
            <a href="#" className="text-(--color-primary)">
              Policies
            </a>
          </p>
        </div>

        {/* Social Icons + Language Selector */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex justify-center gap-2 text-lg text-white flex-wrap">
            {icons.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="bg-(--color-primary) p-3 rounded-full hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="items-center gap-2 hidden lg:flex">
            <span className="text-xl text-black">🌐</span>
            <select className="bg-transparent text-sm focus:outline-none">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
