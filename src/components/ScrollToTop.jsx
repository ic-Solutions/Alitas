import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect to manage event listener that controls visibility of Scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 10) { // Modify value (set to 10px rn) to control when button is visible. (0 is visible at all times) 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 bg-(--color-primary) text-white rounded-[10px] w-15 h-15 flex items-center justify-center shadow-md cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
      style={{ zIndex: 10 }}
      disabled={!isVisible}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
