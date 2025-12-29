import { Clock, HeadphonesIcon, RefreshCw } from "lucide-react";

const bannerData = [
  {
    icon: <HeadphonesIcon className="w-5 h-5" />,
    title: "24/7 Assistance",
    desc: "Always available to help with your queries anytime, anywhere.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 animate-spin-slow" />,
    title: "Quick Resolutions",
    desc: "Rapid turnaround for revisions and project updates within hours.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Flexible Hours",
    desc: "Adapting to your timezone for seamless collaboration.",
  },
];

function ContactBanner() {
  return (
    <div className="w-full h-screen">
      {/* Content - Centered & Compact */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 max-w-4xl mx-auto py-8">
        {/* Compact Main Title */}
        <div className="m-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-slate-100 to-gray-200 bg-clip-text text-transparent drop-shadow-xl leading-tight tracking-tight">
            Let's Get In Touch
          </h1>
          <div className="w-24 h-px mx-auto mt-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full shadow-md" />
        </div>

        {/* Compact Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200/90 font-light mb-8 max-w-lg mx-auto leading-relaxed backdrop-blur-sm">
          Here’s what my satisfied clients say
        </p>

        {/* Compact Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 w-full px-2 max-w-5xl">
          {bannerData.map((item, idx) => (
            <div
              key={idx}
              className="
        group relative rounded-2xl p-6 sm:p-7
        bg-white/10 backdrop-blur-lg
        border border-white/15 hover:border-white/30
        shadow-lg hover:shadow-fuchsia-500/20
        transition-all duration-300 ease-out
        hover:-translate-y-1
        [contain:layout]
      "
            >
              {/* Icon + Title */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div
                  className="
            flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
            bg-gradient-to-br from-fuchsia-500 to-cyan-500
            shadow-md
          "
                >
                  {item.icon}
                </div>

                <h3
                  className="
            text-lg sm:text-xl font-semibold
            bg-gradient-to-r from-white to-gray-200
            bg-clip-text text-transparent
            group-hover:from-fuchsia-400 group-hover:to-cyan-400
            transition-colors duration-300
            whitespace-nowrap
          "
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
