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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </ThemeProvider>
  );
}
