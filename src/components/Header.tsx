import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'

const links = [
  { id: 'experience', label: 'Experiência' },
  { id: 'education', label: 'Formação' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  { id: 'games', label: 'Jogos' },
  { id: 'contact', label: 'Contato' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

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
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="header-logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">BA</span>
          <span className="logo-text">Bruno Andrade</span>
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {label}
              {active === id && <motion.span layoutId="nav-underline" className="nav-underline" />}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label="Navegação"
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
