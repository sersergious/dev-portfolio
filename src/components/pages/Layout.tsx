import type { ReactNode } from "react";
import { ThemeProvider } from "../../theme/ThemeProvider";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">{children}</div>
    </ThemeProvider>
  );
}
