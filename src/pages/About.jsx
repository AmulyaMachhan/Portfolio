import { Link } from "react-router";
import CurvedLoop from "../components/CurvedLoop";

function About() {
  return (
    <>
      {/* This outer div creates the scrollable height */}
      <div className="relative py-10">
        <section id="about" className="w-full overflow-hidden">
          {/* Floating particles effect */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.3 + 0.4,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <div className="text-center space-y-8 max-w-6xl">
              <div className="space-y-4">
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-none">
                  The web,
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    made fluid.
                  </span>
                </h1>
                <p className="text-3xl md:text-4xl text-white/60 font-light tracking-wide">
                  At your fingertips.
                </p>
              </div>

              <div className="mt-16 flex justify-center animate-bounce">
                <svg
                  className="w-8 h-8 text-white/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="">
            <CurvedLoop
              marqueeText="✦ REACT ✦ NODE ✦ VERCEL ✦ MONGODB ✦ GIT "
              speed={2}
              curveAmount={0}
              interactive={true}
            />
          </div>

          {/* Main Content */}
          <div className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-7xl w-full space-y-32">
              {/* Profile Section */}
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Enhanced Image Section */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10">
                    {/* Main Avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 flex items-center justify-center text-white text-8xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        A
                      </div>
                    </div>

                    {/* Decorative floating elements */}
                    <div className="absolute top-10 right-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 rotate-12 group-hover:rotate-[24deg] transition-transform duration-700" />
                    <div className="absolute bottom-16 left-10 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 -rotate-12 group-hover:-rotate-[24deg] transition-transform duration-700" />
                    <div className="absolute top-1/2 left-8 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 group-hover:translate-x-2 transition-transform duration-500" />

                    {/* Code snippet decoration */}
                    <div className="absolute bottom-8 right-8 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 font-mono text-xs text-green-400">
                      &lt;Developer /&gt;
                    </div>
                  </div>
                </div>

                {/* Enhanced Text Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                      Hi, I'm{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Amulya
                      </span>
                    </h2>

                    <div className="space-y-4 text-lg lg:text-xl text-white/70 leading-relaxed">
                      <p>
                        A passionate web developer and digital craftsman based
                        in <span className="text-white font-medium">India</span>
                        . I transform complex ideas into elegant, performant web
                        experiences that users love.
                      </p>
                      <p>
                        Almost all my life i wanted to be creative and extra
                        ordinary Doing this makes me achieve that dream, to
                        enhance and create something elegant yet helpful to
                        people.
                      </p>
                      <p className="text-white/60">
                        When I'm not crafting pixels and code, you'll find me
                        exploring the latest web technologies, contributing to
                        open-source projects, or enjoying a good cup of coffee
                        while reading tech blogs. I believe the best interfaces
                        are invisible—they just work, naturally and intuitively.
                      </p>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {[
                      {
                        label: "GitHub",
                        icon: "→",
                        url: "https://github.com/AmulyaMachhan",
                      },
                      {
                        label: "LinkedIn",
                        icon: "→",
                        url: "https://www.linkedin.com/in/amulya-machhan-5876bb261/",
                      },
                    ].map((link, i) => (
                      <a
                        href={link.url}
                        key={i}
                        className="group px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-white/80 group-hover:text-white font-medium text-sm flex items-center gap-2">
                          {link.label}
                          <span className="group-hover:translate-x-1 group-hover:translate-y-0.5 transition-transform">
                            {link.icon}
                          </span>
                        </span>
                      </a>
                    ))}
                    <Link
                      to="/resume"
                      className="group px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-white/80 group-hover:text-white font-medium text-sm flex items-center gap-2">
                        Resume
                        <span className="group-hover:translate-x-1 group-hover:translate-y-0.5 transition-transform">
                          ↓
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stylish Divider */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              {/* Stats Section with Enhanced Design */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    number: "10+",
                    label: "Projects Created",
                    subtext: "Production ready",
                  },
                  {
                    number: "1+",
                    label: "Years Experience",
                    subtext: "And counting",
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    subtext: "Always strive for excellence",
                  },
                  {
                    number: "∞",
                    label: "Lines of Code",
                    subtext: "Coffee-fueled",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform" />
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/50">{stat.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Expertise Section */}
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white">
                    What I Do Best
                  </h3>
                  <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Specialized skills honed through years of building for the
                    modern web
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "💻",
                      title: "Web Development",
                      description:
                        "Building modern, scalable applications using React, Next.js, and TypeScript. From single-page apps to complex enterprise platforms, I create solutions that perform.",
                      tech: ["React", "Next.js", "TypeScript", "Node.js"],
                      gradient: "from-blue-500/10 to-cyan-500/10",
                    },
                    {
                      icon: "🎨",
                      title: "Interface Design",
                      description:
                        "Crafting beautiful, intuitive interfaces that prioritize user experience. Every element is purposeful, every interaction is smooth.",
                      tech: ["Figma", "Tailwind CSS", "Framer Motion", "GSAP"],
                      gradient: "from-purple-500/10 to-pink-500/10",
                    },
                    {
                      icon: "📱",
                      title: "Responsive Systems",
                      description:
                        "Creating seamless experiences across all devices. Mobile-first approach ensures your users get the best experience, everywhere.",
                      tech: [
                        "PWA",
                        "Mobile-First",
                        "CSS Grid",
                        "Accessibility",
                      ],
                      gradient: "from-green-500/10 to-emerald-500/10",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                    >
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />

                      <div className="relative z-10 space-y-6">
                        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-2xl font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-white/60 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tech.map((tech, j) => (
                            <span
                              key={j}
                              className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Arrow indicator */}
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg
                            className="w-6 h-6 text-white/60"
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-8 py-12">
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white">
                    Let's Create Something
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Amazing Together
                    </span>
                  </h3>
                  <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Have a project in mind? Let's discuss how we can bring your
                    vision to life.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group relative px-10 py-5 bg-white text-black font-semibold text-lg rounded-full hover:scale-105 transition-all duration-300 overflow-hidden shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get In Touch
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <Link
                    to="/projects"
                    className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

export default About;
