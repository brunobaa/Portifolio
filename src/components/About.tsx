import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        {/* Foto do Usuário */}
        <div className="about-image">
          <img src="/assets/minha-foto.jpeg" alt="Minha Foto" />
        </div>

        {/* Texto Sobre Mim */}
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência
            em desenvolvimento web, trabalhando com tecnologias como React, TypeScript, Node.js e muito mais.
          </p>
          <p>
            Meu objetivo é criar soluções eficientes e impactantes, sempre buscando aprender e evoluir como programador.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
