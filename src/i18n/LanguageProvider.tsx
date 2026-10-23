import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { pt } from "../data/pt";
import { en } from "../data/en";
import type { Lang } from "../data/types";
import { LanguageContext } from "./context";

const STORAGE_KEY = "lang";
const dictionaries = { pt, en };

// Escolha salva > idioma do navegador > português
const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // armazenamento bloqueado: segue para o idioma do navegador
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = dictionaries[lang];

  const toggleLang = useCallback(() => setLang((l) => (l === "pt" ? "en" : "pt")), []);

  // Mantém <html lang>, título da aba e descrição em sincronia com o idioma
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sem armazenamento: a escolha vale só nesta visita
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, toggleLang }), [lang, t, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
