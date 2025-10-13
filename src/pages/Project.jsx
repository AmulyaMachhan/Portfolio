import { motion as Motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { projects } from "../constants/projects";

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Node: <FaNodeJs className="text-green-400" />,
  Python: <FaPython className="text-yellow-400" />,
  MySQL: <FaDatabase className="text-blue-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJsSquare className="text-yellow-300" />,
};

function Projects() {
  return (
    <section className="mt-32 px-6 sm:px-12">
      <Motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400 relative z-10"
      >
        My Projects
      </Motion.h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {projects.map((project, index) => (
          <Motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="py-4 bg-black group rounded-2xl overflow-hidden backdrop-blur-xl 
                       border border-white/10 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]
                       hover:shadow-[0_20px_50px_-12px_rgba(45,212,191,0.3)]
                       transition-all duration-500 ease-out"
          >
            <div className="relative flex flex-col h-full">
              {/* Project Image */}
              {project.image ? (
                <div className="relative overflow-hidden rounded-2xl px-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ) : (
                <div className="w-full h-52 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 rounded-2xl mx-5">
                  No Image
                </div>
              )}

              {/* Project Info */}
              <div className="px-5 pt-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2 group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-gray-800/60 px-3 py-1.5 rounded-full 
                                 text-xs font-medium text-teal-100 border border-gray-700/60 
                                 shadow-[inset_0_1px_8px_rgba(45,212,191,0.15)]
                                 hover:bg-gray-700/60 hover:border-teal-400/30 transition-all duration-300"
                    >
                      {techIcons[tech] || (
                        <FaDatabase className="text-gray-400" />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-300 hover:text-teal-100 text-sm font-semibold transition-all hover:gap-3 duration-300 group/link"
                    >
                      <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-100 text-sm font-semibold transition-all hover:gap-3 duration-300 group/link"
                  >
                    <FaGithub className="group-hover/link:scale-110 transition-transform" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
