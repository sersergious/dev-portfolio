import { createContext } from "react";

type HeroVisibilityContextType = {
  heroInView: boolean;
  setHeroInView: (inView: boolean) => void;
};

export const HeroVisibilityContext = createContext<
  HeroVisibilityContextType | undefined
>(undefined);
