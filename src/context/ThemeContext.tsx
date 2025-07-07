// ThemeContext.tsx
import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark"; // The actual theme after resolving "system"
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
