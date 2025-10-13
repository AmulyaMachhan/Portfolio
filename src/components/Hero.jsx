import { motion as Motion } from "framer-motion";
import { Link } from "react-router";
import { lazy } from "react";
import SplitText from "./SplitText.jsx";

const Hyperspeed = lazy(
  () => import("../backgrounds/hyperspeed/Hyperspeed.jsx")
);

function Hero() {
  return (
    <div className="w-full min-h-screen bg-grey-800 overflow-hidden flex items-center justify-center">
      <Hyperspeed
        effectOptions={{
          className: "z-10",
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      />

      {/* Text content */}
      <div className="text-center sm:px-6 lg:px-8 z-10">
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center text-white gap-2 mb-3"
        >
          <Motion.h1
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 text-3xl font-medium py-2"
          >
            Hello, everyone
          </Motion.h1>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SplitText
              text="Myself Amulya Machhan"
              className="text-5xl md:text-7xl font-semibold text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </Motion.div>
        </Motion.div>

        <Motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-xl text-white/80 mb-10"
        >
          Web Developer, Weeb and definitely a Baller
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            to="/resume"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-400 text-white font-semibold transition"
          >
            View Resume
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-white/90 border border-white/40 hover:bg-white/80 font-semibold transition"
          >
            Contact Me
          </Link>
        </Motion.div>
      </div>
    </div>
  );
}

export default Hero;
