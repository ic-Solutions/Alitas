import { useState } from "react";
import icon from "../assets/icon.png";

import { IconMenu2, IconKey, IconX } from "@tabler/icons-react";
import { NavLink, useNavigate } from "react-router";

const Navbar = ({ activeTab = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false); // state to manage the mobile menu visibility

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = useNavigate();

  return (
    // my-6 px-4 md:px-10 lg:px-24 font-[SF-Pro-Display]
    <>
      {/* max-w-[1440px] - removed */}
      <div className="lg:px-5 px-2 py-4 flex justify-between items-center mx-auto" style={{ marginInline: 0 }}>
        <NavLink to="/">
          <div className="flex items-center text-[1.25rem] lg:text-[2rem] font-[600] tracking-wider text-(--color-primary)">
            <img className="w-8 h-8 lg:h-16 lg:w-16" src={icon} alt="alitas" />
            alitas
          </div>
        </NavLink>

        <div className="hidden md:flex space-x-10 items-center text-lg">
          <span
            key={"#platform"}
            onClick={() => navigate("/#platform")}
            className={`hover:text-gray-400 relative transition-colors duration-300 cursor-pointer ${activeTab === "#platform" ? "hover:text-stone-950 font-bold " : ""}`}
          >
            Platform
            {activeTab === "#platform" && <span className="absolute top-12 left-0 w-full h-1 bg-(--color-primary) rounded-t-full"></span>}
          </span>
          <NavLink
            key={"#solutions"}
            to="/#solutions"
            className={`hover:text-gray-400 relative transition-colors duration-300 cursor-pointer ${activeTab === "#solutions" ? "hover:text-stone-950 font-bold " : ""}`}
          >
            Solutions
            {activeTab === "#solutions" && <span className="absolute top-12 left-0 w-full h-1 bg-(--color-primary) rounded-t-full"></span>}
          </NavLink>
          <NavLink
            key={"/about-us"}
            to="/about-us"
            className={`hover:text-gray-400 relative transition-colors duration-300 cursor-pointer ${activeTab === "/about-us" ? "hover:text-stone-950 font-bold " : ""}`}
          >
            About Us
            {activeTab === "/about-us" && <span className="absolute top-12 left-0 w-full h-1 bg-(--color-primary) rounded-t-full"></span>}
          </NavLink>
          <NavLink
            key={"/contact-us"}
            to="/contact-us"
            className={`hover:text-gray-400 relative transition-colors duration-300 cursor-pointer ${activeTab === "/contact-us" ? "hover:text-stone-950 font-bold " : ""}`}
          >
            Contact Us
            {activeTab === "/contact-us" && <span className="absolute top-12 left-0 w-full h-1 bg-(--color-primary) rounded-t-full"></span>}
          </NavLink>
        </div>

        <div className="hidden md:block">
          <button className="border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text">
              <IconKey className="text-(--color-primary)" stroke={1} /> Sign In
            </div>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <div>
            <button className="border border-purple-600 px-3 py-2 rounded-full hover:bg-purple-50 transition">
              <div className="flex items-center gap-0 bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text text-sm">
                <IconKey className="text-(--color-primary)" stroke={1} size={20} /> Sign In
              </div>
            </button>
          </div>
          {/* toggle to show or hide menu, visible only on mobile */}
          <div className="md:hidden text-purple-500 text-2xl cursor-pointer rounded-full border border-purple-500 p-1" onClick={toggleMenu}>
            {menuOpen ? <IconX /> : <IconMenu2 />}
          </div>
        </div>
      </div>
      {/* mobile menu hidden on Desktop along with the toggle to show or hide menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-md py-6 px-6 flex flex-col items-center space-y-4 w-[100%] mx-auto absolute left-0 z-10">
          <span
            key={"#platform"}
            onClick={() => {
              navigate("#platform");
              setMenuOpen(false);
            }}
            className={`text-lg ${activeTab === "#platform" ? "text-purple-500" : "text-gray-800"}`}
          >
            Platform
          </span>
          <NavLink
            key={"#solutions"}
            to="/#solutions"
            onClick={() => {
              // needed only here, for when solutions are navigated to from the homescreen itself (everywhere else triggers a rerender of components so menu is closed by default)
              setMenuOpen(false);
            }}
            className={`text-lg ${activeTab === "#solutions" ? "text-purple-500" : "text-gray-800"}`}
          >
            Solutions
          </NavLink>
          <NavLink key={"#about-us"} to={"/about-us"} className={`text-lg ${activeTab === "/about-us" ? "text-purple-500" : "text-gray-800"}`}>
            About Us
          </NavLink>
          <NavLink key={"#contact-us"} to={"/contact-us"} className={`text-lg ${activeTab === "/contact-us" ? "text-purple-500" : "text-gray-800"}`}>
            Contact Us
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
