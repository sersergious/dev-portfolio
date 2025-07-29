//Navigation.tsx

import { ThemeToggle } from "../theme/ThemeToggle";

type Section = {
  href: string;
  name: string;
};

const sections: Section[] = [
  { href: "#about", name: "About" },
  { href: "#skills", name: "Skills" },
  { href: "#projects", name: "Projects" },
  { href: "#experience", name: "Experience" },
  { href: "#contact", name: "Contact" },
];

type NavigationProps = {
  heroInView: boolean;
};

export default function Navigation({ heroInView }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-transform duration-300 ease-in-out ${
        heroInView ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto">
        <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/20">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 dark:from-white/5 dark:via-white/10 dark:to-white/5 rounded-2xl pointer-events-none"></div>

          <div className="relative flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a
              href="#"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-200"
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="bg-white/20 dark:bg-gray-800/20 rounded-xl px-2 py-1 border border-white/10 dark:border-white/10">
                {sections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    {section.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Theme toggle + Mobile menu */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 dark:bg-gray-800/20 rounded-xl border border-white/20 dark:border-white/10">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden relative group">
                <button className="p-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/20 rounded-xl bg-white/20 dark:bg-gray-800/20 border border-white/20 dark:border-white/10 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Mobile Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/20 dark:border-gray-700/20">
                  {/* Glass effect overlay for dropdown */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5 dark:from-white/5 dark:via-white/10 dark:to-white/5 rounded-2xl"></div>

                  <div className="relative p-2">
                    {sections.map((section) => (
                      <a
                        key={section.href}
                        href={section.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/20 rounded-xl transition-colors duration-200"
                      >
                        {section.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
