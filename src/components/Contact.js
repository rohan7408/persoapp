import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10" />{" "}
        <img
          src="/images/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-medium uppercase text-sm tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mt-4 mb-6">
            Contact Me
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-1.5 bg-purple-600 rounded-full"></div>
            <div className="w-24 h-1.5 bg-purple-600 rounded-full"></div>
            <div className="w-8 h-1.5 bg-purple-600 rounded-full"></div>
          </div>
          <p className="mt-8 text-gray-700 text-lg max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <form className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="md:col-span-2 group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                Send Message
                <svg
                  className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
