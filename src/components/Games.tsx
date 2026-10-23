import { motion } from 'framer-motion';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';
import { SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import './Games.css';

const games = [
  { title: 'Terminal de suporte', description: 'Digite qualquer coisa e veja um script de diagnóstico se escrever.', component: <HackerTyper /> },
  { title: 'Flappy Tech', description: 'Desvie dos canos sem encostar. Quanto mais longe, melhor.', component: <FlappyTech /> },
  { title: 'Astro Dodge', description: 'Pilote a nave e desvie dos asteroides, que ficam cada vez mais rápidos.', component: <AstroDodge /> },
];

const Games = () => {
  return (
    <section id="games" className="section">
      <SectionHeading
        index="05"
        label="playground"
        title="Brincadeiras interativas"
        subtitle="Mini-jogos que programei do zero em TypeScript e Canvas, rodando aqui mesmo no navegador."
      />

      <motion.div
        className="games-grid"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {games.map(({ title, description, component }) => (
          <motion.div key={title} className="game-item" variants={fadeUp}>
            <h3>{title}</h3>
            <p>{description}</p>
            {component}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Games;
