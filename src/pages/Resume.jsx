function Resume() {
  return (
    <section id="resume" className="max-w-4xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-bold">Resume</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Education</h4>
          <ul className="mt-3 list-disc ml-5 text-gray-700">
            <li>
              <strong>Government PG College, Dharamshala</strong> — B.Tech
              Computer Science (2020-2024)
            </li>
            <li>
              <strong>Dayanand Public School, Shimla</strong> — Higher Education
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Experience</h4>
          <p className="mt-2 text-gray-700">
            Front-end Web developer at Space Window (Present) — worked on
            improving UI & developing interactive components with JavaScript and
            libraries.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
