import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Thrifty",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
    techStack: ["React", "Node", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "https://thrifty-qqkh.vercel.app",
    repoUrl: "https://github.com/AmulyaMachhan/Thrifty",
    featured: true,
  },
  {
    id: 2,
    title: "Universal App Opener",
    description:
      "A JavaScript library that converts standard HTTP URLs (YouTube, LinkedIn) into Native Mobile Deep Links (Custom Schemes & Android Intents).",
    techStack: ["Typescript", "React", "Node"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    liveUrl: "https://mdsaban.github.io/universal-app-opener/",
    repoUrl: "https://github.com/AmulyaMachhan/universal-app-opener",
    featured: true,
  },
  {
    id: 3,
    title: "GeminiGPT",
    description:
      "GeminiGPT is an LLM based on the Gemini GPT architecture. It provides powerful natural language processing capabilities, enabling users to generate human-like text based on given prompts. This project leverages the Google Generative AI API for seamless integration and enhanced performance.",
    techStack: ["React", "Node", "GoogleAPI"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "Early Learning",
    description:
      "Early Learning is a real-time, production-ready client-side web application built for a preschool. This repository contains the frontend (client) code used by an actual preschool to showcase programs, facilities, admissions, and parent engagement features in a playful and child-friendly way",
    techStack: ["React", "HTML", "CSS"],
    image:
      "https://images.unsplash.com/photo-1758790015863-4f9798bb818f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    liveUrl: "https://early-learning.vercel.app/",
    repoUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "2048 Game",
    description:
      "2048 is a single-player sliding block puzzle game. The game's objective is to slide numbered tiles on a grid to combine them, with the goal of creating a tile with the number 2048. The game continues until there are no more valid moves available.",
    techStack: ["Javasxript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1703319952169-4a3ed572ba0f",
    liveUrl: "https://amulyamachhan.github.io/2048-Game/",
    repoUrl: "https://github.com/AmulyaMachhan/2048-Game/",
    featured: false,
  },
];

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Node: <FaNodeJs className="text-green-400" />,
  Python: <FaPython className="text-yellow-400" />,
  MongoDB: <FaDatabase className="text-blue-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJsSquare className="text-yellow-300" />,
  GoogleApi: <FaGoogle className="text-amber-300" />,
};

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (project.featured) {
    return (
      <Motion.div
        ref={cardRef}
        style={{ opacity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative mb-32 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[70vh] min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          {/* Background Image */}
          <Motion.div
            className="absolute inset-0"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </Motion.div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-16">
            <Motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Motion.h3
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </Motion.h3>

              <Motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {project.description}
              </Motion.p>

              {/* Tech Stack */}
              <Motion.div
                className="flex flex-wrap gap-3 mb-10"
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-white border border-white/20"
                  >
                    {techIcons[tech]}
                    {tech}
                  </span>
                ))}
              </Motion.div>

              {/* Links */}
              <Motion.div
                className="flex gap-6"
                animate={{ y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white text-lg font-semibold hover:gap-4 transition-all duration-300"
                  >
                    View Live
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-300"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </Motion.div>
    );
  }

  return (
    <Motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
          {project.title}
        </h4>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 border border-white/10"
            >
              {techIcons[tech]}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 text-sm font-semibold transition-colors"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            <FaGithub />
            Code
          </a>
        </div>
      </div>
    </Motion.div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} className="py-20 px-6 sm:px-12 bg-black">
      <Motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Featured Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            A showcase of projects that blend innovation with elegant design
          </p>
        </Motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Regular Projects Grid */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {regularProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}

export default Projects;
