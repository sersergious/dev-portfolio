//Navigation.tsx

import { ThemeToggle } from "../../theme/ThemeToggle";

type Section = {
  href: string;
  name: string;
};

const sections: Section[] = [
  { href: "#about", name: "About" },
  { href: "#skills", name: "Skills" },
  { href: "#projects", name: "Projects" },
  { href: "#contact", name: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="mx-4 mt-4 max-w-screen-lg lg:mx-auto">
      <div className="navbar bg-base-100/80 shadow-lg rounded-xl backdrop-blur px-4 sm:px-6">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost text-xl font-bold">
            Portfolio
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {sections.map((section) => {
              return (
                <li key={section.href}>
                  <a
                    href={section.href}
                    className="text-base hover:text-primary transition-colors"
                  >
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu dropdown */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {sections.map((section) => {
                return (
                  <li key={section.href}>
                    <a href={section.href} className="text-base">
                      {section.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
