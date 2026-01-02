import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="mx-auto px-6 py-20 text-gray-100 min-h-screen relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-6xl mx-auto mb-12 pb-12 border-b border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-semibold text-white mb-4">
              Amulya Machhan
            </h1>

            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="text-gray-400">📍 Shimla, Himachal Pradesh</div>
              <div className="hidden md:block w-px bg-white/20" />
              <a
                href="tel:+9198778XXXXX"
                className="text-blue-400 hover:text-blue-300"
              >
                +91 98778 XXXXX
              </a>
            </div>

            <div className="flex gap-4 mb-6">
              {["GitHub", "LinkedIn", "Portfolio"].map((p) => (
                <a
                  key={p}
                  href="#"
                  className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
                >
                  {p}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="/Resume_Amulya.pdf"
                download
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition"
              >
                <Download className="w-5 h-5" /> Download CV
              </a>
              <a
                href="/Resume_Amulya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
              >
                View CV
              </a>
            </div>
          </div>
        </header>

        {/* Education & Skills */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="space-y-10">
            {/* Education */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">Education</h2>
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
              ].map((e, i) => (
                <div
                  key={i}
                  className="p-6 mb-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {e.school}
                  </h3>
                  <p className="text-gray-400">{e.degree}</p>
                  <span className="text-blue-400 text-sm">{e.info}</span>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Languages", ["JavaScript", "HTML", "CSS"]],
                  ["Frontend", ["React", "Tailwind", "Bootstrap"]],
                  ["Backend", ["Node", "Express", "MongoDB"]],
                  ["Tools", ["Git", "GitHub", "Postman"]],
                ].map(([title, items], i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <h4 className="text-blue-400 text-sm mb-3">{title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-white/10 rounded-lg text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">Interests</h2>
              {[
                "🏀 Basketball & Lakers supporter",
                "📚 Reading — Inner Engineering",
                "🌌 Space & astronomy",
              ].map((i) => (
                <div
                  key={i}
                  className="p-4 mb-3 text-sm bg-white/5 border border-white/10 rounded-xl"
                >
                  {i}
                </div>
              ))}
            </section>
          </div>

          <div className="space-y-10">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
              {[
                {
                  role: "Freelance Web Developer",
                  company: "Early Learning Pvt. Ltd.",
                  period: "Jan 2025 – Present",
                  points: [
                    "Built preschool website using React & Zustand",
                    "Developed forms, animations, and FAQ sections",
                  ],
                },
                {
                  role: "Frontend Developer",
                  company: "Space Window",
                  period: "6 Months",
                  points: [
                    "Improved UI/UX using React",
                    "Worked closely with backend team",
                  ],
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="mb-6 p-6 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold">{job.role}</h3>
                    <span className="text-blue-400 text-xs">{job.period}</span>
                  </div>
                  <p className="text-gray-400 mb-3">{job.company}</p>
                  <ul className="space-y-2 text-sm">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-blue-400">•</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Projects */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
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
              ].map((p, i) => (
                <div
                  key={i}
                  className="mb-6 p-6 bg-white/5 border-l-2 border-blue-500 rounded-xl"
                >
                  <h3 className="font-semibold mb-3">{p.name}</h3>
                  {p.features.map((f) => (
                    <div key={f} className="text-sm mb-2 text-gray-300">
                      • {f}
                    </div>
                  ))}
                </div>
              ))}
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Achievements</h2>
              {[
                "Internship at Solitaire Infosys",
                "Web Development Certification (Udemy)",
              ].map((a) => (
                <div
                  key={a}
                  className="p-2 text-sm mb-3 bg-white/5 border border-white/10 rounded-xl"
                >
                  ✓ {a}
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
