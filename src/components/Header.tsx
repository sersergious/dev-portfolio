//Header.tsx

import { useState, useEffect, useRef } from "react";
import Navigation from "./sections/Navigation";

export default function Header() {
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  //Hide the navigation meny when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Navigation />
    </div>
  );
}
