import React, { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection("home");
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
