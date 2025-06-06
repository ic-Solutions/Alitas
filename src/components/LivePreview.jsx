import { useState, useEffect } from "react";
import phone0 from "../assets/livePreview/1.png";
import phone1 from "../assets/livePreview/2.png";
import phone2 from "../assets/livePreview/3.png";
import phone3 from "../assets/livePreview/4.png";
import phone4 from "../assets/livePreview/5.png";

const images = [phone0, phone1, phone2, phone3, phone4];

const LivePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="text-center lg:px-14 font-[SF-Pro-Display]" id="live-preview">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
          Real-time Access. Efficient Workflow. Superior Care.
        </h1>
        <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[80%] mx-auto">
          Alitas AI comes in-built with single sign-on (SSO), enabling easy and uninterrupted access to Alitas anytime, anywhere. Our round-the-clock
          language interpretation tool helps providers reduce wait times and deliver real-time, superior-quality patient care.
          <br />
          Healthcare providers can quickly access appointment schedules, patient feedback, and consultation summaries—all in a single place, at their
          convenience.
        </p>
        {/* Scrollable image container for mobile using Grid */}
        {isMobile && (
          <div className="mt-2 overflow-hidden scale-[90%]">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((img, index) => (
                <img key={index} src={img} alt={`Preview ${index + 1}`} className="w-full max-w-[80%] object-cover flex-shrink-0 mx-[10%]" />
              ))}
            </div>
          </div>
        )}

        {/* Image container for desktop */}
        {!isMobile && (
          <div className="flex justify-center mt-2 gap-10 lg:py-10">
            {images.map((img, index) => {
              const isMiddle = index === currentIndex;
              const isLeft = index === (currentIndex - 1 + images.length) % images.length;
              const isRight = index === (currentIndex + 1) % images.length;
              const scale = isMiddle ? "scale-110" : "scale-90";
              const zIndex = isMiddle ? "z-10" : "z-0";
              const opacity = isMiddle ? "opacity-100" : "opacity-75";

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className={`w-[30%] max-w-[240px] object-cover transition-all duration-300 ease-in-out ${scale} ${zIndex} ${opacity}`}
                  style={{
                    marginLeft: isRight ? "-20px" : "",
                    marginRight: isLeft ? "-20px" : "",
                  }}
                />
              );
            })}
          </div>
        )}
        {/* Arrows and dots */}
        <div className="flex items-center justify-center space-x-5 mt-2">
          <button
            className="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition"
            onClick={prevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {!isMobile && (
            <div className="flex items-center space-x-2">
              {images.map((_, index) => (
                <span key={index} className={`w-2.5 h-2.5 rounded-full block ${index === currentIndex ? "bg-purple-600" : "bg-gray-300"}`}></span>
              ))}
            </div>
          )}

          <button
            className="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition"
            onClick={nextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LivePreview;
