import { motion as Motion } from "framer-motion";
import { Link } from "react-router";
import { lazy } from "react";
import SplitText from "./SplitText.jsx";

const Hyperspeed = lazy(
  () => import("../backgrounds/hyperspeed/Hyperspeed.jsx")
);

function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            className: "w-full h-full",
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
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[5] pointer-events-none" />

      {/* Text content - positioned above background */}
      <div className="relative text-center px-6 lg:px-8 z-20 max-w-5xl mx-auto pointer-events-none">
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center text-white gap-3 mb-6"
        >
          <Motion.h1
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/60 text-lg sm:text-xl md:text-2xl font-normal tracking-wide"
          >
            Hello, everyone
          </Motion.h1>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <SplitText
              text="Myself Amulya Machhan"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-center tracking-tight leading-none"
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-xl md:text-2xl text-white/70 mb-12 font-light tracking-wide"
        >
          Web Developer, Weeb and definitely a Baller
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pointer-events-auto"
        >
          <Link
            to="/resume"
            className="group relative px-8 py-3.5 rounded-full bg-white text-black font-medium text-base sm:text-lg transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">View Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            to="/contact"
            className="group relative px-8 py-3.5 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-base sm:text-lg transition-all duration-300 backdrop-blur-sm hover:border-white/60 hover:bg-white/5 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Contact Me</span>
          </Link>
        </Motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[5] pointer-events-none" />
    </div>
  );
}

export default Hero;
