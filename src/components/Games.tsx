import { motion } from 'framer-motion';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';
import { SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import { useLanguage } from '../i18n/useLanguage';
import './Games.css';

const Games = () => {
  const { t, lang } = useLanguage();
  const g = t.games;

  const games = [
    { key: 'terminal', text: g.terminal, component: <HackerTyper key={lang} /> }, // recomeça o script ao trocar de idioma
    { key: 'flappy', text: g.flappy, component: <FlappyTech /> },
    { key: 'astro', text: g.astro, component: <AstroDodge /> },
  ];

  return (
    <section id="games" className="section">
      <SectionHeading index="05" label={g.label} title={g.title} subtitle={g.subtitle} />

      <motion.div
        className="games-grid"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {games.map(({ key, text, component }) => (
          <motion.div key={key} className="game-item" variants={fadeUp}>
            <h3>{text.title}</h3>
            <p>{text.description}</p>
            {component}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Games;
