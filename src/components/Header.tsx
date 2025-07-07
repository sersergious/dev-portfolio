//Header.tsx
import { useHeroVisibility } from "../hooks/useHeroVibility";
import Navigation from "./sections/Navigation";

export default function Header() {
  const { heroInView } = useHeroVisibility();

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        heroInView ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Navigation />
    </div>
  );
}
