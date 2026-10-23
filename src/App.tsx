import { useEffect, useRef } from 'react';
import { MotionConfig, animate } from 'framer-motion';
import { useLanguage } from './i18n/useLanguage';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Education from './components/Education.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Games from './components/Games.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import LanguageGate from './components/LanguageGate.tsx';

function App() {
  const { lang } = useLanguage();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  // Transição suave do conteúdo ao trocar de idioma
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (mainRef.current) {
      animate(mainRef.current, { opacity: [0.2, 1], filter: ['blur(6px)', 'blur(0px)'] }, { duration: 0.45 });
    }
  }, [lang]);

  // Brilho dos cartões (.card) que acompanha o mouse
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow one" aria-hidden="true" />
      <div className="bg-glow two" aria-hidden="true" />
      <Header />
      <main ref={mainRef}>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Games />
        <Contact />
      </main>
      <Footer />
      <LanguageGate />
    </MotionConfig>
  );
}

export default App;
