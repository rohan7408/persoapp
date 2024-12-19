import React, { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "home")}
              className={`text-xl font-bold font-heading transition-colors ${
                isScrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              ROHAN POUDEL
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleClick(e, item)}
                  className={`capitalize transition-colors ${
                    isScrolled
                      ? "text-gray-600 hover:text-purple-600"
                      : "text-gray-800 hover:text-purple-600"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className="w-full h-0.5 bg-gray-600 group-hover:bg-purple-600 transition-colors duration-200 rounded-full"></span>
                <span className="w-full h-0.5 bg-gray-600 group-hover:bg-purple-600 transition-colors duration-200 rounded-full"></span>
                <span className="w-full h-0.5 bg-gray-600 group-hover:bg-purple-600 transition-colors duration-200 rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLinkClick={(id) => {
          scrollToSection(id);
        }}
      />
    </>
  );
};

export default Navbar;
