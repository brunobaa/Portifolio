import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../i18n/useLanguage';
import type { Lang } from '../data/types';
import './LanguageGate.css';

// Textos fixos nos dois idiomas: quem chega ainda não escolheu nenhum
const options: { lang: Lang; code: string; name: string; hint: string }[] = [
  { lang: 'pt', code: 'PT', name: 'Português', hint: 'Ver o site em português' },
  { lang: 'en', code: 'EN', name: 'English', hint: 'View the site in English' },
];

// Aviso da primeira visita perguntando em qual idioma ver o site
const LanguageGate = () => {
  const { lang, needsChoice, chooseLang } = useLanguage();
  const suggestedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!needsChoice) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    suggestedRef.current?.focus();

    // Esc mantém o idioma sugerido
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') chooseLang(lang);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [needsChoice, chooseLang, lang]);

  return (
    <AnimatePresence>
      {needsChoice && (
        <motion.div
          className="gate-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => chooseLang(lang)}
        >
          <motion.div
            className="gate-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gate-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gate-icon">
              <FaGlobeAmericas />
            </div>
            <h2 id="gate-title" className="gate-title">
              <span lang="pt">Escolha o idioma</span>
              <span className="gate-sep" aria-hidden="true">/</span>
              <span lang="en">Choose your language</span>
            </h2>
            <p className="gate-subtitle">
              <span lang="pt">Você pode trocar a qualquer momento no topo da página.</span>
              <br />
              <span lang="en">You can switch anytime at the top of the page.</span>
            </p>

            <div className="gate-options">
              {options.map((opt) => (
                <button
                  key={opt.lang}
                  ref={opt.lang === lang ? suggestedRef : undefined}
                  className={`gate-option ${opt.lang === lang ? 'suggested' : ''}`}
                  onClick={() => chooseLang(opt.lang)}
                  lang={opt.lang}
                >
                  <span className="gate-code">{opt.code}</span>
                  <span className="gate-text">
                    <span className="gate-name">{opt.name}</span>
                    <span className="gate-hint">{opt.hint}</span>
                  </span>
                  <FaArrowRight className="gate-arrow" aria-hidden="true" />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguageGate;
