import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Hilltown Restaurant",
      description:
        "A modern restaurant website showcasing authentic Nepali cuisine. Features include an interactive menu, online reservations, and a responsive design that brings the rich flavors of Nepal to life.",
      image: "/images/hilltown.jpg",
      link: "https://hilltown.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Next.js", "Responsive Design"],
    },
    {
      title: "Screenology",
      description:
        "A movie browsing platform with features like trending movies, ratings, and comprehensive movie information. Users can explore movies and TV shows with an intuitive interface.",
      image: "/images/screenology.jpg",
      link: "https://screenology.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Movie API", "Dark Theme"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">PROJECTS</h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          Here you will find some of my personal projects that I created, with
          each project containing its own case study
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
