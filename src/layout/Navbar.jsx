import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import { FaStar } from "react-icons/fa";
import { projects } from "../constants/projects";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <Motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed left-1/2 transform -translate-x-1/2 top-0 z-50 
                 bg-white/10 backdrop-blur-xl border border-white/20
                 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                 rounded-full px-6 py-2 flex justify-between items-center 
                 w-[80%] sm:px-8"
    >
      {/* Brand */}
      <Motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="select-none cursor-pointer"
      >
        <div className="w-20 h-10 overflow-hidden">
          <Logo fill="#fff" className="w-full h-full" />
        </div>
      </Motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                isActive
                  ? "text-indigo-400"
                  : "text-white/80 hover:text-indigo-300"
              }`
            }
          >
            {link.label}
            <Motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full"
            ></Motion.span>
          </NavLink>
        ))}

        {/* Projects Button */}
        <NavLink
          to="/projects"
          onClick={() => setMenuOpen(false)}
          className="px-5 py-2 rounded-full text-white
             bg-[length:200%_200%] bg-gradient-to-br from-[#7c3aed] to-[#182fff99]
             transition-all duration-700 hover:bg-[length:100%_100%] flex items-center gap-2"
        >
          Projects
          <span
            className="inline-flex items-center justify-center text-xs font-bold 
               bg-white/90 text-indigo-600 rounded-full px-2 py-[2px] gap-1"
          >
            <FaStar className="w-3 h-3 text-yellow-400" />
            <span>{projects.length}</span>
          </span>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-indigo-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full mt-3 right-0 bg-gray-700 backdrop-blur-2xl
                       border border-white/30 shadow-lg rounded-2xl p-3 md:hidden"
          >
            <div className="flex flex-col items-center space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-indigo-400 bg-white/10"
                        : "text-white/80 hover:text-indigo-300 hover:bg-white/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Projects Button for Mobile */}
              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full text-white
                           bg-[length:200%_200%] bg-gradient-to-r from-[#7c3aed] to-[#182fff99]
                           transition-all duration-700 hover:bg-[length:100%_100%] flex items-center gap-2"
              >
                Projects
                <span
                  className="inline-flex items-center justify-center text-xs font-bold 
                                 bg-white text-indigo-600 rounded-full px-2 py-[2px]"
                >
                  <FaStar width={5} height={5} />
                  <span>{projects.length}</span>
                </span>
              </NavLink>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
