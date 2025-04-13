import React from "react";
import upcmoing from "../assets/upcoming.png";
import quickAccess from "../assets/quick_access.png";
import language from "../assets/language.png";

const HeroImageSection = () => {
  return (
    <div>
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
      <section id="heroImageSection" className="absolute" style={{ top: "30rem", width: "calc(100vw - 21rem)" }}>
        <div className="relative w-full flex flex-col items-center gap-6 mt-15 px-6 md:px-16 lg:flex-row lg:justify-center lg:items-center max-w-7xl mx-auto">
          {/* Upcoming - Top Left */}
          <img
            src={upcmoing}
            alt="Upcoming"
            className="hidden lg:block absolute left-10 top-[-20%] w-[480px] h-[400px] drop-shadow-2xl rounded-3xl object-contain z-20"
          />

          {/* Quick Access - Bottom Left */}
          <img
            src={quickAccess}
            alt="Quick Access"
            className="hidden lg:block absolute left-16 top-[45%] w-[480px] h-[320px] drop-shadow-2xl rounded-3xl object-contain z-20"
          />

          {/* Main Video Section */}
          <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl w-full max-w-[800px] aspect-video z-10">
            <button className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center border-t-2 border-purple-500 shadow-md">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Language - Right Side Centered */}
          <div className="hidden lg:flex justify-center z-20 mt-4 lg:mt-0 lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2">
            <img src={language} alt="Language Select" className="w-full max-w-[320px] md:max-w-[360px] lg:w-[300px] drop-shadow-2xl rounded-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export { HeroImageSection };
