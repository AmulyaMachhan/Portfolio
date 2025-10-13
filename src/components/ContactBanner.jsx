import { Clock, HeadphonesIcon, RefreshCcw } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { lazy } from "react";

const Prism = lazy(() => import("../backgrounds/prism/Prism.jsx"));

const bannerData = [
  {
    icon: <HeadphonesIcon className="w-5 h-5 text-indigo-800" />,
    title: "24/7 Assistance",
    desc: "Always available to help with your queries anytime, anywhere.",
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-indigo-800" />,
    title: "Quick Change Resolutions",
    desc: "Rapid turnaround for revisions and project updates.",
  },
  {
    icon: <Clock className="w-5 h-5 text-indigo-800" />,
    title: "Flexible Working Hours",
    desc: "Adapting to your timezone and schedule for seamless collaboration.",
  },
];

function ContactBanner() {
  return (
    <div className="w-full h-screen relative z-10">
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />

      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center text-center">
        <Motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Get In Touch
        </Motion.h1>

        <Motion.p
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Here’s what my satisfied clients say about me.
        </Motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bannerData.map((item, idx) => (
            <Motion.div
              key={idx}
              className="bg-white/90 p-3 rounded-xl border border-white/40 shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "linear", duration: 1.2 }}
            >
              <div className="flex items-center justify-center gap-2">
                {item.icon}
                <h3 className="font-light text-indigo-800">{item.title}</h3>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
