import { useEffect, useState } from "react";

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Divya Bisht",
      role: "CEO, Early Learning Preschool",
      content:
        "Working with Amulya was an absolute pleasure. The attention to detail and the innovative solutions provided exceeded our expectations. Our web application now runs flawlessly.",
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9He3cAAHKqhznNX5kYio-ko_3UC4RTobRmQ&s",
    },
    {
      name: "Vishal Sharma",
      role: "Senior Software Developer, Space Window",
      content:
        "Exceptional React development skills! The UI/UX design was modern, responsive, and exactly what we needed. Delivered on time and within budget.",
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqy3fSDm4AGNNsIaHrUDcQ7OXYix_P3mHCiQ&s",
    },
    {
      name: "Vishrut Abrol",
      role: "Backend Developer, JC Software Solution",
      content:
        "The level of professionalism and technical expertise was outstanding. Understanding the requirements and delivering what exactly is needed.",
      rating: 5,
      image: "https://avatars.githubusercontent.com/u/242852330?v=4",
    },
    {
      name: "Apurav Uppal",
      role: "Software Developer, Techno Park IT",
      content:
        "Highly recommend! The full-stack development was seamless, and the communication throughout the project was excellent. A true professional.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="relative w-full max-w-sm sm:max-w-3xl mx-auto px-3 sm:px-6 overflow-hidden">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-2">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-white/10 transition">
                <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
                  {/* Avatar */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-fuchsia-500/30"
                  />

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic max-w-xl">
                    "{t.content}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-lg">
                      {t.name}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 sm:w-8 bg-fuchsia-500"
                : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
      {/* Arrows (desktop only) */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />{" "}
        </svg>{" "}
      </button>{" "}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />{" "}
        </svg>{" "}
      </button>
    </div>
  );
}

// Contact Banner
export default function ContactBanner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4">
          Let's Get In Touch
        </h1>

        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent mb-8" />

        <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl">
          Here's what my satisfied clients say
        </p>

        <TestimonialCarousel />
      </div>
    </div>
  );
}
