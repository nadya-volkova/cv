import React from "react";
import projects from "./ProjectList";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-[#e4e4e4]">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#373741] text-center mb-8">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#373741] mb-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {project.title}
                </a>
              </h3>
              <div className="relative">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={project.staticImage}
                    alt={project.title}
                    className="w-full h-auto max-h-64 object-cover mb-4 transition-opacity duration-300 hover:opacity-0"
                  />
                  <img
                    src={project.gifImage}
                    alt={project.title}
                    className="w-full h-auto max-h-64 object-cover mb-4 absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  />
                </a>
              </div>
              <div className="text-gray-700 mt-2">
                {typeof project.description === "string" ? (
                  <p>{project.description}</p>
                ) : (
                  project.description
                )}
              </div>
              <a
                href={project.github}
                className="bg-[#373741] text-white py-1 px-3 rounded-lg hover:bg-[#2c2c34] mt-4 inline-block"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
