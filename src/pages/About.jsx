import LiquidEther from "../backgrounds/liquidether/LiquidEther";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-0 w-full">
        <div style={{ width: "100%", height: 600, position: "relative" }}>
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={100}
            autoRampDuration={0.6}
          />
        </div>
      </div>
      <div className="text-center w-full h-full z-10">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          The web, made fluid at
          <br />
          your fingertips
        </h1>
      </div>
      {/* <h3 className="text-2xl font-bold">About me</h3>
      <p className="mt-4 text-gray-700">
        Hey there! I'm Amulya, an aspiring web developer with a passion for
        crafting immersive digital experiences. I enjoy building responsive UIs
        and learning backend technologies to ship full-stack apps.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Web Development</h4>
          <p className="text-sm text-gray-600 mt-2">
            Building modern websites and interfaces using React and Tailwind.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Web Design</h4>
          <p className="text-sm text-gray-600 mt-2">
            Creating clean and accessible designs that translate well across
            devices.
          </p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Mobile Web Apps</h4>
          <p className="text-sm text-gray-600 mt-2">
            Responsive layouts that work smoothly on phones and tablets.
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default About;
