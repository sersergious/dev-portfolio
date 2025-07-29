//Header.tsx
import { useHeroVisibility } from "@/hooks/useHeroVibility";
import Navigation from "./sections/Navigation";

export default function Header() {
  const { heroInView } = useHeroVisibility();

  return <Navigation heroInView={heroInView} />;
}
