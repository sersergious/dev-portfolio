// ThemeProvider.tsx
import { useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import type { Theme } from "../../context/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";

    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }

    return "system";
  });

  // Resolved theme state (actual light/dark value)
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return theme === "dark" ? "dark" : "light";
  });

  // Handle system theme changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        setResolvedTheme(media.matches ? "dark" : "light");
      }
    };

    // Listen for system theme changes
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  // Update resolved theme when theme changes
  useEffect(() => {
    if (theme === "system") {
      setResolvedTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    } else {
      setResolvedTheme(theme === "dark" ? "dark" : "light");
    }
  }, [theme]);

  // Persist theme to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      resolvedTheme === "dark" ? "dark" : "light",
    );
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
