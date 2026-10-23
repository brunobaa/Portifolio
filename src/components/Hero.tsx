import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { profile, highlights, roles, stats } from "../data/profile";
import { fadeUp, stagger } from './motion';
import "./Hero.css";

// Digita e apaga cada frase de `roles` em sequência
const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1800 : deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(roles);

  return (
    <section id="inicio" className="hero section">
      <div className="hero-grid">
        <motion.div className="hero-text" variants={stagger(0.1)} initial="hidden" animate="visible">
          <motion.span className="hero-status" variants={fadeUp}>
            <span className="status-dot" /> {profile.status}
          </motion.span>

          <motion.h1 className="hero-name" variants={fadeUp}>
            Olá, eu sou <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p className="hero-role" variants={fadeUp}>
            <span className="prompt">&gt;</span> {typed}
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero-summary" variants={fadeUp}>
            {profile.summary}
          </motion.p>

          <motion.ul className="hero-highlights" variants={fadeUp}>
            {highlights.map((item) => (
              <li key={item}>
                <FaCheck className="check" /> {item}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary">
              Fale comigo <FaArrowRight />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">
              <FaGithub /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-ring">
            <img src={profile.photo} alt={`Foto de ${profile.name}`} />
          </div>

          <motion.div
            className="hero-terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="terminal-bar">
              <span /><span /><span />
            </div>
            <code>
              <span className="t-muted">$</span> whoami<br />
              <span className="t-accent">bruno</span> · estagiário @ SJCDH<br />
              <span className="t-muted">$</span> location<br />
              <FaMapMarkerAlt className="t-pin" /> {profile.location}
            </code>
          </motion.div>
        </motion.div>
      </div>

      <motion.ul
        className="hero-stats"
        variants={stagger(0.1)}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.6 }}
      >
        {stats.map((stat) => (
          <motion.li key={stat.label} className="card stat" variants={fadeUp}>
            <strong className="gradient-text">{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Hero;
