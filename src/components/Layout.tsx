//Layout.tsx

import type { ReactNode } from "react";
import Header from "./Header";
import { ThemeProvider } from "./theme/ThemeProvider";
import { HeroVisibilityProvider } from "./sections/hero/HeroVisibilityProvider";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <HeroVisibilityProvider>
        <div className="flex flex-col min-h-screen bg-base-100">
          <Header />
          {children}
        </div>
      </HeroVisibilityProvider>
    </ThemeProvider>
  );
}
