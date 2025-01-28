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
        {/* Foto do Usuário com Animação */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <img src="/assets/minha-foto.jpeg" alt="Minha Foto" />
        </motion.div>

        {/* Texto Sobre Mim com Efeito de Digitação */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <h2>Sobre Mim</h2>
          <p className="typing-effect">
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência
            em desenvolvimento web, trabalhando com tecnologias como React, TypeScript, Node.js e muito mais.
          </p>
          <p className="typing-effect">
            Meu objetivo é criar soluções eficientes e impactantes, sempre buscando aprender e evoluir como programador.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
