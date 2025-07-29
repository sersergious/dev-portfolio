import data from "../../../data/data.json";
import { useEffect, useRef } from "react";
import { useHeroVisibility } from "../../../hooks/useHeroVibility";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { setHeroInView } = useHeroVisibility();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "50px 0px -50px 0px",
      },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, [setHeroInView]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-16">
          {/* Content Section */}
          <div className="flex-[0.5] w-full">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* Greeting */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                <span>{data.hero.greeting}</span>
              </h1>

              {/* Description */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 slide-in-left-delayed">
                {data.hero.description}
              </h2>

              {/* Image for mobile view */}
              <div className="flex justify-center my-6 lg:hidden">
                <div className="relative">
                  <div className="w-64 h-64 rounded-xl shadow-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                      alt={`${data.hero.greeting.split("I'm ")[1]} - Professional Portrait`}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 slide-in-left-delayed-2">
                {data.hero.tagline}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 slide-in-left-delayed-3">
                <a
                  href={data.hero.socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                </a>

                <a
                  href={data.hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-[0.5] w-full hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80"
                  alt={`${data.hero.greeting.split("I'm ")[1]} - Professional Portrait`}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
