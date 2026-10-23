import { useContext } from "react";
import { LanguageContext } from "./context";

// Idioma atual e textos traduzidos: const { t, lang, toggleLang } = useLanguage();
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage precisa estar dentro de <LanguageProvider>");
  return ctx;
};
