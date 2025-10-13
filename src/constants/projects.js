import * as ProjectImages from "../assets/project";

export const projects = [
  {
    id: 1,
    title: "Thrifty",
    description:
      "Thrifty is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless online shopping experience with a robust user authentication system, comprehensive admin management, and a modern, responsive user interface.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    liveUrl: "https://thrifty-qqkh.vercel.app/",
    repoUrl: "https://github.com/AmulyaMachhan/Thrifty",
    image: ProjectImages.Thrifty,
  },
  {
    id: 2,
    title: "Early Learning",
    description:
      "A preschool website built with React, Tailwind CSS, Zustand, and React Router DOM. Includes carousel, admissions, programs, and testimonial sections.",
    techStack: ["React", "Tailwind CSS", "Zustand", "Axios"],
    liveUrl: "https://earlylearning.vercel.app",
    repoUrl: "https://github.com/AmulyaMachhan/early-learning",
    image: ProjectImages.EarlyLearning,
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "A full-stack YouTube clone application built with the MERN stack (MongoDB, Express, React, Node.js) that mimics the core features of YouTube, including video upload, playback, user authentication, and more.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: null,
    repoUrl: "https://github.com/AmulyaMachhan/Youtube-Clone",
    image: "../assets/project/Youtube-Clone.png",
  },
  {
    id: 4,
    title: "Digital Clock",
    description:
      "This project is a simple React application that displays a digital clock. The clock updates every second to show the current time in a 12-hour format with AM/PM indication.",
    techStack: ["React", "JavaScript"],
    liveUrl: "https://amulyamachhan.github.io/Digital-Clock/",
    repoUrl: "https://github.com/AmulyaMachhan/Digital-Clock",
    image: ProjectImages.Stopwatch,
  },
  {
    id: 5,
    title: "Instagram Clone",
    description:
      "This project is a simplified version of Instagram, featuring dynamic post and story addition using JavaScript, as well as responsive design.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/AmulyaMachhan/instagram-clone",
    image: ProjectImages.Instagram,
  },
  {
    id: 6,
    title: "Password Generator",
    description:
      "A utility to generate strong passwords using JavaScript, with options for length, symbols, etc.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/AmulyaMachhan/passwordGenerator",
    image: ProjectImages.PasswordGenerator,
  },
  {
    id: 7,
    title: "2048 Game",
    description:
      "A browser-based implementation of the 2048 puzzle game using JavaScript.",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: null,
    repoUrl: "https://github.com/AmulyaMachhan/2048-Game",
    image: ProjectImages.Game2048,
  },
  {
    id: 8,
    title: "Currency Converter",
    description:
      "A simple React + Vite currency converter app that fetches real-time exchange rates.",
    techStack: ["React.js", "Vite", "JavaScript"],
    liveUrl: null,
    repoUrl: "https://github.com/AmulyaMachhan/currencyConverter",
    image: ProjectImages.CurrencyConverter,
  },
];
