import React, { useState, useEffect } from "react";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const duration = 5000;
    const steps = 60;
    const increment = 100 / steps;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);

        // Fade out after reaching 100%
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 400);
      } else {
        setProgress(currentProgress);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${progress === 100 ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative">
        {/* Animated circle background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
        </div>

        {/* Main logo container */}
        <div className="relative flex flex-col items-center space-y-8">
          {/* AM Logo with staggered animation */}
          <div className="flex items-center space-x-1">
            <span
              className="text-8xl font-bold text-white transition-all duration-500"
              style={{
                opacity: Math.min(progress / 30, 1),
                transform: `translateY(${Math.max(20 - progress / 2, 0)}px)`,
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A
            </span>
            <span
              className="text-8xl font-bold text-white transition-all duration-500"
              style={{
                opacity: Math.min((progress - 15) / 30, 1),
                transform: `translateY(${Math.max(20 - (progress - 15) / 2, 0)}px)`,
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              M
            </span>
          </div>

          {/* Full name reveal */}
          <div
            className="text-white text-xl font-light tracking-[0.3em] uppercase transition-all duration-700"
            style={{
              opacity: Math.max((progress - 40) / 40, 0),
              transform: `translateY(${Math.max(10 - (progress - 40) / 5, 0)}px)`,
            }}
          >
            Amulya Machhan
          </div>

          {/* Progress bar */}
          <div className="w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-full bg-white/30 animate-shimmer"></div>
            </div>
          </div>

          {/* Loading percentage */}
          <div
            className="text-white/60 text-sm font-mono transition-opacity duration-300"
            style={{ opacity: Math.min(progress / 50, 0.6) }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                animation: `orbit 3s linear infinite`,
                animationDelay: `${i * 1}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
