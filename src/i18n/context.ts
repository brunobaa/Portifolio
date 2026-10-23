import { createContext } from "react";
import type { Content, Lang } from "../data/types";

export type LanguageContextValue = {
  lang: Lang;
  t: Content;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
