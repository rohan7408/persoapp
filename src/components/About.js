import React from "react";

const About = () => {
  const skills = [
    {
      category: "Core Technologies",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js", "Tailwind CSS", "Material-UI", "Redux"],
    },
    {
      category: "Tools & Expertise",
      items: [
        "Git",
        "VS Code",
        "Responsive Design",
        "UI/UX",
        "Figma",
        "Web Performance",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-purple-600 font-medium uppercase text-sm tracking-wider">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mt-4 mb-6">
            Passionate Frontend Developer
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-1.5 bg-purple-600 rounded-full"></div>
            <div className="w-24 h-1.5 bg-purple-600 rounded-full"></div>
            <div className="w-8 h-1.5 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-[1000px] mx-auto">
          {/* About Me Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Hello! I'm a dedicated{" "}
                <span className="text-purple-600 font-semibold">
                  Frontend Developer
                </span>{" "}
                and IT student with a passion for creating engaging digital
                experiences. I specialize in building responsive, user-friendly
                websites that combine aesthetic appeal with functional
                excellence.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                My journey in web development is driven by a constant desire to
                learn and grow. I stay up-to-date with the latest frontend
                technologies and best practices, ensuring that I can deliver
                modern, efficient, and scalable solutions.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm currently seeking opportunities to apply my skills and
                contribute to meaningful projects. Let's connect and discuss how
                we can work together!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-all duration-300 group"
              >
                Contact Me
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 transition-colors group"
              >
                View Projects
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Technical Expertise
            </h3>
            <div className="space-y-10">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-purple-600 mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
