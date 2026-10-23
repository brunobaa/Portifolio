import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { pt } from "../data/pt";
import { en } from "../data/en";
import type { Lang } from "../data/types";
import { LanguageContext } from "./context";

const STORAGE_KEY = "lang";
const dictionaries = { pt, en };

const loadSaved = (): Lang | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "pt" || saved === "en" ? saved : null;
  } catch {
    return null;
  }
};

const save = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // sem armazenamento: a escolha vale só nesta visita
  }
};

// Sem escolha salva, começa no idioma do navegador (e o aviso pergunta qual usar)
const browserLang = (): Lang => (navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en");

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [saved] = useState(loadSaved);
  const [lang, setLang] = useState<Lang>(() => saved ?? browserLang());
  const [needsChoice, setNeedsChoice] = useState(saved === null);
  const t = dictionaries[lang];

  const chooseLang = useCallback((next: Lang) => {
    setLang(next);
    setNeedsChoice(false);
    save(next);
  }, []);

  const toggleLang = useCallback(() => chooseLang(lang === "pt" ? "en" : "pt"), [chooseLang, lang]);

  // Mantém <html lang>, título da aba e descrição em sincronia com o idioma
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const value = useMemo(
    () => ({ lang, t, toggleLang, needsChoice, chooseLang }),
    [lang, t, toggleLang, needsChoice, chooseLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
