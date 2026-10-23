import { createContext } from "react";
import type { Content, Lang } from "../data/types";

export type LanguageContextValue = {
  lang: Lang;
  t: Content;
  toggleLang: () => void;
  // true até a pessoa escolher um idioma pela primeira vez
  needsChoice: boolean;
  chooseLang: (lang: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
