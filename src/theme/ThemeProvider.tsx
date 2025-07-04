import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

type Theme = "winter" | "dim";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "winter";

    // Check localStorage first, then system preference
    const saved = localStorage.getItem("theme");
    if (saved === "winter" || saved === "dim") return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dim"
      : "winter";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "winter" ? "dim" : "winter"));
  };

  return ThemeContext.Provider({
    value: { theme, toggleTheme },
    children,
  });
}
