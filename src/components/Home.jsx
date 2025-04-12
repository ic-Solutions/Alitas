import React, { useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

import dImage from "../assets/doc.png";
import deviceImage from "../assets/devices.png";
import upcmoing from "../assets/upcoming.png";
import choose from "../assets/choose.svg";
import maxSample from "../assets/max_sample.png";
import tab from "../assets/rfrfr.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import phone0 from "../assets/phone.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Faqs from "./Faqs";

import LivePreview from "./LivePreview";
import { HeroImageSection } from "./HeroImageSection";
import { FeaturesSection } from "./FeaturesSection";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected FAQ
  };

  return (
    <>
      <div className="py-10 relative">
        <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40">
          <HeroImageSection />
          {/* relative w-full min-h-screen bg-[#EFE7FD] pb-20 overflow-hidden rounded-3xl */}
          <div
            className="relative bg-[#EFE7FD] pb-20 overflow-hidden rounded-3xl"
            style={{ height: "calc(100vh - 300px)" }}
          >
            <Navbar />

            {/* Hero Text */}
            <div className="text-center mx-auto px-6 md:px-16 max-w-6xl mt-10 font-[SF-Pro-Display]">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[SF Pro Display] leading-tight text-[#1F1F1F]">
                Break Language Barriers in Healthcare with
                <span className="text-[#4A09C7]"> Alitas AI</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl mt-6 text-gray-500 font-[SF Pro Display]">
                Alitas AI provides real-time, accurate, and secure language
                translation for hospitals. <br />
                Enhance communication between doctors and patients effortlessly.
              </p>
            </div>

            {/* Hero Cards + Video Layout */}
            {/* relative w-full flex flex-col items-center gap-6 mt-15 px-6 md:px-16 lg:flex-row lg:justify-center lg:items-center max-w-7xl mx-auto */}
          </div>

          {/* <HeroImageSection /> */}

          <FeaturesSection />
          <LivePreview />

          <div className="text-center my-40 px-4 font-[SF-Pro-Display]">
            <h1 className="text-3xl sm:text-5xl font-bold">What we Offer ?</h1>
            <p className="text-base sm:text-lg mt-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br className="hidden sm:block" /> standard dummy text ever since
              the 1500s, when an
            </p>
          </div>

          <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start my-16 md:my-28 gap-14 px-6 md:px-24">
            {/* Accordion Section */}
            <div className="w-full md:w-1/2 space-y-10">
              {[
                `Overcoming Language Barriers in Healthcare`,
                "Overcoming Language Barriers",
                "Overcoming Language Barriers",
                "Overcoming Language Barriers",
              ].map((title, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "bg-[#F5F3FF]  p-6"
                        : "border-b border-gray-300 pb-10"
                    }`}
                  >
                    <h3
                      className="text-xl font-semibold flex justify-between items-center cursor-pointer"
                      onClick={() => toggleAccordion(index)}
                    >
                      {title}
                      <ChevronDownIcon
                        className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </h3>
                    {isActive && (
                      <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 min-h-[500px] relative flex justify-center items-center mt-10 md:mt-0">
              <img
                src={maxSample}
                alt="Overcoming Language Barriers"
                className="w-[120%] sm:w-[130%] md:w-[140%] h-auto object-contain relative z-10"
              />

              {/* Top-left pill ("Upcoming") */}
              <img
                src={upcmoing}
                alt="Upcoming Session"
                className="absolute top-[-20%] right-[50%] w-[300px] sm:w-[360px] md:w-[440px] z-30"
              />

              {/* Top-right translated audio box */}
              <img
                src={tab}
                alt="Spanish Translation"
                className="absolute bottom-[55%] right-[-30%] w-[400px] sm:w-[460px] md:w-[540px] z-20"
              />

              {/* Bottom-right language dropdown pill */}
              <img
                src={choose}
                alt="Language Selector"
                className="absolute bottom-[35%] left-[55%] w-[200px] sm:w-[300px] md:w-[340px] z-30"
              />
            </div>
          </div>

          <div className="text-center mt-12 px-4 sm:px-8 font-[SF-Pro-Display]">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Industries we serve
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-5 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br className="hidden sm:block" /> Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>
          </div>

          <div className="mt-16 px-4 font-[SF-Pro-Display]">
            <div className="flex justify-start sm:justify-center overflow-x-auto gap-4 sm:gap-6 pb-4 whitespace-nowrap no-scrollbar">
              {[
                "Healthcare",
                "Immigration",
                "Tourism",
                "Finance",
                "Manufacturing",
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`text-sm sm:text-lg font-medium pb-2 px-15 ${
                    index === 0
                      ? "border-b-2 border-purple-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center my-20 gap-12">
              <div className="w-full mx-20 lg:w-1/2">
                <img
                  src={dImage}
                  alt="Industry Example"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10 font-[SF-Pro-Display]">
                <h2 className="text-sm sm:text-4xl">
                  How Alitas AI is changing lifes?
                </h2>
                <p className="text-base sm:text-lg mt-4 text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting <br /> industry. Lorem Ipsum has been the
                  industry's standard dummy text
                  <br /> ever since the 1500s, when an Lorem Ipsum has been the
                  industry's
                  <br /> standard dummy text ever since the 1500s, when an Lorem
                  Ipsum
                  <br /> has been the industry's standard dummy text ever since
                  the 1500s,
                  <br /> when an
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "No language barriers in communication",
                    "Flawless communication between doctors & patients",
                    "Instant communication in real time",
                    "No need for a translator anymore",
                  ].map((txt, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-purple-600 text-xl mr-4">✔</span>
                      <p className="text-base sm:text-lg text-gray-500">
                        {txt}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
      <div className="w-full px-6 md:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image with Layered Background */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="absolute bottom-6 left-6 bg-purple-100 w-[75%] h-[105%] rounded-3xl z-0"></div>{" "}
            {/* Reduced size */}
            <div className="relative bg-white rounded-3xl z-10 p-6 w-[90%] md:w-[80%]">
              <img
                src={deviceImage}
                alt="devices illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-10 font-[SF-Pro-Display]">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                App Works From
                <br /> Desktop, Tablet To Mobile
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                IOS app for iPhone and iPad, Android app for mobile
                <br /> phones, IOS app for iPhone and iPad.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                All Your Data Is Safe & Secured
              </h3>
              <p className="text-gray-500 mt-2 text-sm md:text-base">
                IOS app for iPhone and iPad, Android app for mobile
                <br /> phones, IOS app for iPhone and iPad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-purple-200 flex items-center justify-center p-3 md:p-6 rounded-xl mx-auto font-[SF-Pro-Display] mt-10 mb-10 max-w-7xl w-full">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Try It Yourself
              <br />
              Get The App Now
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Alitas AI translator can translate up to 2,000 characters. Alitas
              Alitas AI translator can translate up to 2,000 characters. Alitas
              Alitas AI translator can translate up to 2,000 characters. Alitas
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 md:h-14"
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 md:h-14"
                />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-end h-[350px] md:h-[400px] w-full">
            {/* Left Phone */}
            <img
              src={phone5}
              alt="Login Screen"
              className="absolute bottom-[6%] left-1/2 transform -translate-x-[110%] w-28 md:w-40 lg:w-44"
            />

            {/* Center Phone (Front) */}
            <img
              src={phone4}
              alt="Splash Screen"
              className="z-10 w-36 md:w-48 lg:w-56"
            />

            {/* Right Phone */}
            <img
              src={phone0}
              alt="Dashboard Screen"
              className="absolute bottom-[6%] right-1/2 transform translate-x-[110%] w-28 md:w-40 lg:w-44"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
