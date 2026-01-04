import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Amulya Machhan
            </h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Building modern, scalable, and elegant web experiences with React,
              performance, and clean architecture in mind.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60">
              {[
                {
                  label: "Home",
                  link: "/home",
                },
                {
                  label: "About",
                  link: "/about",
                },
                {
                  label: "Resume",
                  link: "/resume",
                },
                {
                  label: "Contact",
                  link: "/contact",
                },
                {
                  label: "Projects",
                  link: "/projects",
                },
              ].map((l, idx) => (
                <li key={idx} className="hover:text-white transition">
                  <Link to={l.link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/AmulyaMachhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/amulya-machhan-5876bb261/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:machhanamulya@example.com"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com/2o504/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <span>
            © {new Date().getFullYear()} Amulya Machhan. All rights reserved.
          </span>
          <span>Designed & Built using React</span>
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />
    </footer>
  );
}
