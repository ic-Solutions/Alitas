import { useRef, useState } from "react";
import Navbar from "./Navbar";
import RotatingText from "../util/RotatingText";

import HeroBackground from "../assets/hero_section_bg.png";
import upcoming from "../assets/rtrt.png";
import quickAccess from "../assets/quick_access_new.png";
import language from "../assets/language.png";
import mobileFeatures from "../assets/mobile features.png";
import heroVideo from "../assets/Hero assets/Hero video.mp4";

const textItems = [
  "Mejorar la Salud Rompiendo Barreras de Idioma", //spanish
  "Améliorer la Santé en Brisant les Barrières Linguistiques", //french
  "Zorg Verbeteren door Taalbarrières te Doorbreken", //dutch
];

function HeroSection() {
  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingOnMobile, setIsPlayingOnMobile] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleMobilePlay = () => {
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play();
      setIsPlayingOnMobile(true);
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat pb-[100px]" style={{ backgroundImage: `url(${HeroBackground})` }}>
      <div className="bg-[linear-gradient(90deg,#F6EAFF_0%,#EDF0FF_41%,#BAC8FF_75%,#BBA3FF_100%)] lg:m-10 lg:pt-4 lg:p-8 m-4 pt-1 p-2 rounded-3xl lg:pb-[13%] pb-[50%]">
        <nav className="my-6 font-[SF-Pro-Display] w-full bg-white lg:rounded-3xl rounded-full" style={{ paddingInline: "0.02rem" }} id="nav">
          <Navbar />
        </nav>
        <div className="lg:mx-[15%] mx-1 text-center lg:pt-10 pt-5">
          <h1 className="text-lg sm:text-5xl md:text-6xl lg:text-4xl font-[700] font-[SF Pro Display] leading-[138%] text-[#1F1F1F] mb-6">
            {" "}
            <p className="bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text"> Alitas AI</p>
            <p>Enhancing Healthcare by Breaking Language Barriers</p>
            <p className="lg:whitespace-nowrap line-clamp-2 overflow-clip">
              <RotatingText items={textItems} cursor={true} typingInterval={50} />
            </p>
          </h1>
          {/* <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl/22 font-[700] font-[SF Pro Display] leading-tight text-[#1F1F1F] mb-6">
            <span className="bg-gradient-to-r from-[#AA73D7] to-[#4A09C7] text-transparent bg-clip-text"> Alitas AI</span>– Enhancing Healthcare by
            Breaking Language Barriers
          </h1> */}
          <p className="lg:text-lg text-sm/6 lg:max-w-[80%] lg:mx-auto leading-[148%]">
            <b>Alitas AI</b> uses advanced technology to overcome language barriers that hinder patient care, reducing considerable wait times. Available 24/7, this innovative solution promotes
            effortless communication between healthcare providers and patients, regardless of language. By enhancing care quality and empowering patients, Alitas creates a more inclusive, and
            patient-centric healthcare ecosystem.
          </p>
        </div>
      </div>
      <div className="relative mt-[-200px] hidden lg:block">
        {/* Effects around Video */}
        <div className="relative w-full flex flex-col items-center gap-6 mt-15 px-6 md:px-16 lg:flex-row lg:justify-center lg:items-center max-w-7xl mx-auto">
          {/* Upcoming - Top Left */}
          <img src={upcoming} alt="Upcoming" className="hidden lg:block absolute left-0 top-5 max-w-[23.5%] drop-shadow-lg rounded-3xl object-contain z-20" />

          {/* Languages - Mid Right */}
          <img src={language} alt="Languages" className="hidden lg:block absolute right-20 top-10 max-w-[17.5%] drop-shadow-lg rounded-3xl object-contain z-20" />

          {/* Quick Access - Bottom Left */}
          <img src={quickAccess} alt="Quick Access" className="hidden lg:block absolute left-0 top-50 max-w-[23.75%] drop-shadow-lg rounded-3xl object-contain z-20" />
        </div>
        {/* Main Video Section */}
        <div className="relative bg-[#efe8fc] rounded-[20px] overflow-hidden drop-shadow-2xl w-full max-w-[759px] aspect-video z-10 m-auto">
          <video ref={videoRef} className="absolute top-0 left-[50%] transform -translate-x-1/2 h-full object-contain" src={heroVideo} onEnded={() => setIsPlaying(false)} />
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center border-t-2 border-purple-500 shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="relative mt-[-125px] lg:hidden pb-10">
        {/* Effects around Video */}
        <div className="relative w-full flex flex-col items-center gap-6 mt-15 px-6 md:px-16 lg:flex-row lg:justify-center lg:items-center mx-auto">
          {/* Upcoming - Top Left */}
          <img src={upcoming} alt="Upcoming" className="absolute left-6 top-[-76px] max-w-[150px] drop-shadow-lg rounded-sm object-contain z-20" />

          {/* Quick Access - Top Right */}
          <img src={quickAccess} alt="Quick Access" className="absolute right-6 top-[-94px] max-w-[150px] drop-shadow-lg rounded-sm object-contain z-20" />

          {/* More Features - Bottom */}
          <img src={mobileFeatures} alt="Mobile Features" className="absolute right-6 bottom-[-280px] max-w-[300px] drop-shadow-lg rounded-sm object-contain z-20" />
        </div>
        {/* Main Video Section */}
        <div className="relative bg-[#efe8fc] rounded-xl overflow-hidden drop-shadow-2xl w-full max-w-[80%] aspect-video z-10 m-auto">
          <video ref={mobileVideoRef} className="absolute top-0 left-[50%] transform -translate-x-1/2 h-full object-conta" src={heroVideo} onEnded={() => setIsPlayingOnMobile(false)} />
          {!isPlayingOnMobile && (
            <button
              onClick={handleMobilePlay}
              className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#262626] flex items-center justify-center border-t-2 border-purple-500 shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
