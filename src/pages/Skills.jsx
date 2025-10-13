function Skills() {
  const skills = [
    { name: "JavaScript", pct: 80 },
    { name: "HTML", pct: 90 },
    { name: "CSS/SCSS", pct: 85 },
    { name: "ReactJS", pct: 70 },
    { name: "NodeJS", pct: 55 },
    { name: "Tailwind CSS", pct: 85 },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold">My skills</h3>
      <div className="mt-4 space-y-4">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex justify-between text-sm">
              <span>{s.name}</span>
              <span>{s.pct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
              <div
                style={{ width: `${s.pct}%` }}
                className="h-full rounded-full bg-indigo-600"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
