import { motion } from "framer-motion";
import { FaServer, FaCode } from "react-icons/fa";
import { useLanguage } from "../i18n/useLanguage";
import { SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import "./Skills.css";

// Ícone de cada grupo, na mesma ordem de skills.groups
const groupIcons = [FaServer, FaCode];

const chip = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="section">
      <SectionHeading
        index="03"
        label={t.skills.label}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <motion.div
        className="skills-groups"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {t.skills.groups.map((group, idx) => {
          const Icon = groupIcons[idx] ?? FaCode;
          return (
            <motion.div key={idx} className="card skill-group" variants={fadeUp}>
              <h3>
                <span className="icon-box"><Icon /></span>
                {group.title}
              </h3>
              <motion.ul className="skill-chips" variants={stagger(0.03)}>
                {group.items.map((item) => (
                  <motion.li key={item} className="chip" variants={chip}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
