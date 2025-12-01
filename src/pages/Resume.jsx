import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="mx-10 px-6 py-16 text-gray-100 bg-gradient-to-br from-silver-900 via-silver-800 to-silver-900 min-h-screen">
      {/* Header */}
      <header className="m-12 pb-8 border-b-4 bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 -mx-6 border border-slate-700/50">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight drop-shadow-2xl">
            Amulya Machhan
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-xl text-slate-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              Shimla, Himachal Pradesh
            </div>
            <div className="w-px h-8 bg-slate-600 hidden md:block" />
            <a
              href="tel:+9198778 XXXXX"
              className="flex items-center gap-2 text-xl text-fuchsia-400 hover:text-fuchsia-300 font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 98778 XXXXX
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {["GitHub", "LinkedIn", "Portfolio"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="group relative px-6 py-3 text-sm font-bold text-slate-200 bg-slate-700/50 hover:bg-fuchsia-500/20 border border-slate-600/50 hover:border-fuchsia-400/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/25 flex items-center gap-2"
                >
                  {platform}
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-1 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Download / View CV Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="public/Resume_Amulya.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4
               bg-gradient-to-r from-fuchsia-500 to-purple-500
               text-white font-black text-lg rounded-2xl
               shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/40
               transition-all duration-300 hover:scale-105"
              >
                <Download />
                Download CV
              </a>

              <a
                href="public/Resume_Amulya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4
               bg-slate-700/60 hover:bg-slate-600/70
               text-slate-200 font-black text-lg rounded-2xl
               border border-slate-600/50 hover:border-fuchsia-400/50
               shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12 2a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0V7h-2a1 1 0 110-2h2V3a1 1 0 011-1z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 100-2H5z" />
                </svg>
                View CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sections Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Education & Skills */}
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
              <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  school: "Government Post Graduate College, Dharamshala",
                  degree: "B.Tech in Computer Science and Engineering",
                  info: "GPA: 8.13",
                },
                {
                  school: "Dayanand Public School, Shimla",
                  degree: "Higher Secondary Certificate",
                  info: "95.4%",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="group relative pl-10 pr-6 py-8 border-l-4 border-fuchsia-500/30 bg-slate-800/80 backdrop-blur-xl rounded-3xl hover:border-fuchsia-400/60 hover:bg-slate-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:-translate-x-2"
                >
                  <div className="absolute left-0 w-6 h-6 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full -translate-x-3 shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  <h3 className="text-2xl font-bold text-slate-100 mb-2 leading-tight">
                    {edu.school}
                  </h3>
                  <p className="text-slate-300 font-semibold text-lg mb-3">
                    {edu.degree}
                  </p>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border border-fuchsia-500/40 font-bold rounded-2xl text-sm shadow-lg backdrop-blur-sm">
                    {edu.info}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
              <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Languages", items: ["JavaScript", "HTML5", "CSS3"] },
                {
                  title: "Frontend",
                  items: ["React.js", "Tailwind CSS", "Bootstrap"],
                },
                {
                  title: "Backend",
                  items: ["Node.js", "Express.js", "MongoDB"],
                },
                { title: "Tools", items: ["Git/GitHub", "VS Code", "Postman"] },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 hover:border-fuchsia-500/40 rounded-2xl hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300 backdrop-blur-xl"
                >
                  <h4 className="font-bold mb-4 text-base uppercase tracking-wider text-fuchsia-400">
                    {category.title}
                  </h4>
                  <div className="space-y-2">
                    {category.items.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="inline-block bg-slate-700/50 hover:bg-fuchsia-500/20 px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 border border-slate-600/50 hover:border-fuchsia-400/50 hover:text-fuchsia-300 transition-all duration-300 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Experience */}
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
              <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  role: "Freelance Web Developer",
                  company: "Early Learning Pvt. Ltd.",
                  period: "Shimla • Jan 2025 – Present",
                  achievements: [
                    "Designed preschool website using React, React Router, and Zustand",
                    "Built dynamic forms, animations, and interactive FAQs",
                    "Integrated educational content and social media embeds",
                  ],
                },
                {
                  role: "Frontend Web Developer",
                  company: "Space Window",
                  period: "Mohali • 6 Months",
                  achievements: [
                    "Enhanced UI/UX for multiple applications using React.js",
                    "Built responsive interfaces and optimized API integrations",
                    "Collaborated with backend teams for seamless delivery",
                  ],
                },
              ].map((job, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-black text-slate-100 group-hover:text-fuchsia-300 transition-colors">
                      {job.role}
                    </h3>
                    <span className="px-4 py-2 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-xs font-bold text-fuchsia-300 border border-fuchsia-500/40 rounded-xl backdrop-blur-sm">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-slate-400 font-semibold text-lg mb-6">
                    {job.company}
                  </p>
                  <ul className="space-y-3 text-base">
                    {job.achievements.map((achievement, achIdx) => (
                      <li
                        key={achIdx}
                        className="flex items-start gap-4 text-slate-300 group-hover:text-slate-100 transition-colors"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg group-hover:scale-125 transition-all duration-300" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Projects & Achievements */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <section>
          <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
            <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
            Featured Projects
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Thrifty — MERN E-commerce Store",
                features: [
                  "JWT authentication & Razorpay",
                  "Admin dashboard & analytics",
                  "Redux state management",
                  "Fully responsive UI",
                ],
              },
              {
                name: "GeminiGPT — Custom AI Platform",
                features: [
                  "Google AI API integration",
                  "Custom AI personalities",
                  "Chat history & JSON export",
                  "Real-time processing",
                ],
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-slate-800/60 to-fuchsia-500/5 border-l-4 border-fuchsia-500/40 rounded-3xl hover:shadow-2xl hover:shadow-fuchsia-500/25 transition-all duration-500 hover:-translate-y-3 backdrop-blur-xl hover:border-fuchsia-400/60"
              >
                <h3 className="text-2xl font-black text-slate-100 mb-4 group-hover:text-fuchsia-300 transition-colors">
                  {project.name}
                </h3>
                <div className="space-y-3">
                  {project.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-4 text-lg text-slate-300 group-hover:text-slate-100 transition-colors"
                    >
                      <div className="w-3 h-3 bg-fuchsia-500 rounded-full shadow-lg group-hover:scale-125 transition-transform" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
              <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
              Achievements
            </h2>
            <div className="space-y-4">
              {[
                "Internship at Solitaire Infosys as Web Developer",
                "Web Development Certification from Udemy",
              ].map((achievement, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-slate-800/60 rounded-2xl border border-fuchsia-500/20 hover:shadow-xl hover:shadow-fuchsia-500/20 hover:bg-slate-700/80 transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl mt-0.5">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-semibold text-lg leading-relaxed">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-8 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-4 drop-shadow-lg">
              <span className="w-3 h-10 bg-gradient-to-b from-fuchsia-400 via-pink-400 to-purple-400 rounded-full shadow-lg" />
              Interests
            </h2>
            <div className="grid grid-cols-1 gap-4 p-8 bg-gradient-to-br from-slate-800/60 to-fuchsia-500/5 border border-fuchsia-500/20 rounded-3xl backdrop-blur-xl shadow-2xl">
              {[
                {
                  icon: "🏀",
                  text: "Basketball enthusiast & Lakers supporter",
                },
                { icon: "📚", text: "Avid reader — Inner Engineering" },
                { icon: "🌌", text: "Space exploration & astronomy" },
              ].map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 p-4 bg-slate-700/50 hover:bg-fuchsia-500/10 rounded-2xl hover:shadow-lg hover:shadow-fuchsia-500/20 transition-all duration-300 border border-slate-700/50 hover:border-fuchsia-400/30"
                >
                  <span className="text-3xl">{interest.icon}</span>
                  <span className="font-semibold text-slate-200 text-lg">
                    {interest.text}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
