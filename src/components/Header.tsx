import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes, FaGlobeAmericas } from 'react-icons/fa';
import { useLanguage } from '../i18n/useLanguage';
import './Header.css'

const sectionIds = ['experience', 'education', 'skills', 'projects', 'games', 'contact'] as const;

function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  const links = sectionIds.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca no menu a seção que está na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // O botão fica escrito no idioma de destino, para quem não lê o atual
  const targetLang = lang === 'pt' ? 'en' : 'pt';
  const langButton = (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      lang={targetLang}
      aria-label={t.nav.switchAria}
      title={t.nav.switchAria}
    >
      <motion.span
        key={lang}
        className="lang-icon"
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <FaGlobeAmericas />
      </motion.span>
      <span className="lang-full">{t.nav.switchLabel}</span>
      <span className="lang-short">{t.nav.switchShort}</span>
    </button>
  );

  return (
    <header className={`header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="header-logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">BA</span>
          <span className="logo-text">Bruno Andrade</span>
        </a>

        <nav className="header-nav" aria-label="Menu">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
              {active === id && <motion.span layoutId="nav-underline" className="nav-underline" />}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {langButton}
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Menu"
          >
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
    </header>
  )
}

export default Header;
