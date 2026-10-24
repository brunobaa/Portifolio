import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/useLanguage";
import { fadeUp, stagger } from './motion';
import "./Hero.css";

// Digita e apaga cada frase em sequência
const Typewriter = ({ words }: { words: string[] }) => {
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

  return <>{text}</>;
};

const Hero = () => {
  const { t, lang } = useLanguage();
  const h = t.hero;

  return (
    <section id="inicio" className="hero section">
      <div className="hero-grid">
        <motion.div className="hero-text" variants={stagger(0.1)} initial="hidden" animate="visible">
          <motion.span className="hero-status" variants={fadeUp}>
            <span className="status-dot" /> {h.status}
          </motion.span>

          <motion.h1 className="hero-name" variants={fadeUp}>
            {h.greeting} <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p className="hero-role" variants={fadeUp}>
            <span className="prompt">&gt;</span> <Typewriter key={lang} words={h.roles} />
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero-summary" variants={fadeUp}>
            {h.summary}
          </motion.p>

          <motion.ul className="hero-highlights" variants={fadeUp}>
            {h.highlights.map((item) => (
              <li key={item}>
                <FaCheck className="check" /> {item}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-actions" variants={fadeUp}>
            <a href="#contact" className="btn btn-primary">
              {h.contactCta} <FaArrowRight />
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
            <img src={profile.photo} alt={h.photoAlt} />
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
              {h.terminalLines.map((line) => (
                <span key={line} className="t-line">
                  <span className="t-muted">$</span> {line}
                </span>
              ))}
              <span className="t-line">
                <FaMapMarkerAlt className="t-pin" /> {h.location}
              </span>
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
        {h.stats.map((stat) => (
          <motion.li key={stat.href} variants={fadeUp}>
            <a href={stat.href} className="card stat">
              <strong className="gradient-text">{stat.value}</strong>
              <span>{stat.label}</span>
              <FaArrowRight className="stat-arrow" aria-hidden="true" />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Hero;
