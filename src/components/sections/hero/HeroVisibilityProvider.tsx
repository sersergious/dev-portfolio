import { useState } from "react";
import { HeroVisibilityContext } from "../../../context/HeroVisibilityContext";

export const HeroVisibilityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [heroInView, setHeroInView] = useState(false);
  return (
    <HeroVisibilityContext.Provider value={{ heroInView, setHeroInView }}>
      {children}
    </HeroVisibilityContext.Provider>
  );
};
