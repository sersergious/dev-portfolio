//Navigation.tsx

import { ThemeToggle } from "../../theme/ThemeToggle";

export default function Navigation() {
  return (
    <nav className="mx-4 mt-4 max-w-screen-lg lg:mx-auto">
      <div className="navbar bg-base-100/80 shadow-lg rounded-xl backdrop-blur px-4 sm:px-6">
        {/* Mobile menu dropdown */}
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost text-xl font-bold">
            Portfolio
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a
                href="#about"
                className="text-base hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-base hover:text-primary transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-base hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-base hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end">
          <ThemeToggle />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="#about" className="text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
