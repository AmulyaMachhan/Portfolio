import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-900 overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black opacity-90" />

      {/* Subtle radial gradient effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - Takes more space */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent tracking-tight">
              Amulya Machhan
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-md">
              Building modern, scalable, and elegant web experiences with React,
              performance, and clean architecture in mind.
            </p>
          </div>

          {/* Navigation - Clean vertical layout */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", link: "/home" },
                { label: "About", link: "/about" },
                { label: "Resume", link: "/resume" },
                { label: "Projects", link: "/projects" },
                { label: "Contact", link: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Minimalist approach */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/AmulyaMachhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/amulya-machhan-5876bb261/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="mailto:machhanamulya@example.com"
                className="group relative w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com/2o504/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider - Subtle and refined */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-8" />

        {/* Bottom Section - Apple-style minimal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} Amulya Machhan</span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Designed & Built with React</span>
          </div>
        </div>
      </div>

      {/* Bottom edge glow - very subtle */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
    </footer>
  );
}
