import React from "react";
import upcmoing from "../assets/upcoming.png";
import quickAccess from "../assets/quick_access.png";
import language from "../assets/language.png";

const HeroImageSection = () => {
  return (
    <section
      id="heroImageSection"
      className="absolute"
      style={{ top: "30rem", width: "calc(100vw - 21rem)" }}
    >
      <div className="relative w-full flex flex-col items-center gap-6 mt-15 px-6 md:px-16 lg:flex-row lg:justify-center lg:items-center max-w-7xl mx-auto">
        {/* Floating Left Cards */}
        <div className="flex flex-col gap-4 z-20 lg:absolute lg:left-12 lg:top-1/2 lg:-translate-y-1/2">
          <img
            src={upcmoing}
            alt="Upcoming"
            className="w-full max-w-[320px] md:max-w-[360px] lg:w-[400px] drop-shadow-2xl rounded-3xl"
          />
          <img
            src={quickAccess}
            alt="Quick Access"
            className="w-full max-w-[320px] md:max-w-[360px] lg:w-[400px] drop-shadow-2xl rounded-3xl"
          />
        </div>

        {/* Main Video Section */}
        <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl w-full max-w-[700px] aspect-video z-10">
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

        {/* Floating Right Language Select */}
        <div className="hidden lg:flex justify-center z-20 mt-4 lg:mt-0 lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2">
          <img
            src={language}
            alt="Language Select"
            className="w-full max-w-[320px] md:max-w-[360px] lg:w-[300px] drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroImageSection };
