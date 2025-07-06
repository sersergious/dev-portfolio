//Layout.tsx

import type { ReactNode } from "react";
import Header from "./Header";
import { ThemeProvider } from "../theme/ThemeProvider";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-base-100">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  );
}
