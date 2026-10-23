import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Education from './components/Education.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Games from './components/Games.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
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
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Games />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
