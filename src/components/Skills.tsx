import { motion } from "framer-motion";
import { FaServer, FaCode, FaLandmark } from "react-icons/fa";
import { skillGroups } from "../data/profile";
import { SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import "./Skills.css";

// Ícone de cada grupo, na mesma ordem de skillGroups
const groupIcons = [FaServer, FaCode, FaLandmark];

const chip = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <SectionHeading
        index="03"
        label="habilidades"
        title="Ferramentas que uso no dia a dia"
        subtitle="Da bancada ao código: suporte, infraestrutura e desenvolvimento."
      />

      <motion.div
        className="skills-groups"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {skillGroups.map((group, idx) => {
          const Icon = groupIcons[idx] ?? FaCode;
          return (
            <motion.div key={group.title} className="card skill-group" variants={fadeUp}>
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
