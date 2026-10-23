import { motion } from "framer-motion";
import { FaGraduationCap, FaNetworkWired, FaLanguage } from "react-icons/fa";
import { useLanguage } from "../i18n/useLanguage";
import { SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import "./Education.css";

// Ícone de cada item de `education`, na mesma ordem
const icons = [FaGraduationCap, FaNetworkWired];

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="section">
      <SectionHeading index="02" label={t.education.label} title={t.education.title} />

      <motion.div
        className="education-grid"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {t.education.items.map((item, idx) => {
          const Icon = icons[idx] ?? FaGraduationCap;
          return (
            <motion.div key={idx} className="card education-card" variants={fadeUp}>
              <div className="icon-box"><Icon /></div>
              <h3>{item.course}</h3>
              <p className="education-institution">{item.institution}</p>
              <span className="chip chip-mono">{item.period}</span>
            </motion.div>
          );
        })}

        <motion.div className="card education-card" variants={fadeUp}>
          <div className="icon-box"><FaLanguage /></div>
          <h3>{t.education.languagesTitle}</h3>
          <ul className="language-list">
            {t.education.languages.map((lang) => (
              <li key={lang.name}>
                <span>{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
