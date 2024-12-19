import React, { useRef } from "react";
import { useMagneticEffect } from "../hooks/useMagneticEffect";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const Hero = () => {
  const buttonRef = useRef(null);
  const { x, y } = useMagneticEffect(buttonRef, 0.8);
  const scrollToSection = useSmoothScroll();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/rohan7408",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohan-poudel-426628212/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/rohan_poudel007",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection("projects");
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/20" />
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social Links Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col items-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              aria-label={link.name}
            >
              <span className="absolute inset-0 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative text-gray-700 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </span>
              <span className="absolute left-full ml-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
                {link.name}
              </span>
            </a>
          ))}
          <div className="w-px h-24 bg-gray-300/50 backdrop-blur-sm rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-6 md:mb-8 leading-tight text-gray-900">
          HEY, I'M ROHAN POUDEL
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
          A passionate Frontend Developer and IT student, crafting engaging web
          experiences with modern technologies. I specialize in building
          responsive and user-friendly websites that make an impact.
        </p>
        <div
          ref={buttonRef}
          className="inline-block transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
        >
          <a
            href="#projects"
            onClick={handleClick}
            className="group inline-flex items-center gap-3 bg-purple-600 text-white px-10 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg font-medium shadow-lg"
          >
            <span className="relative">
              View My Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg
              className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
