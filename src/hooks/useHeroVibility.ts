import { useContext } from "react";
import { HeroVisibilityContext } from "../context/HeroVisibilityContext";

export const useHeroVisibility = () => {
  const context = useContext(HeroVisibilityContext);
  if (!context)
    throw new Error(
      "useHeroVisibility must be used within HeroVisibilityProvider",
    );
  return context;
};
