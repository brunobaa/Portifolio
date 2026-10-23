import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaRegFolder } from 'react-icons/fa';
import { profile } from '../data/profile';
import { useLanguage } from "../i18n/useLanguage";
import { Reveal, SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import './projects.css';

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="04"
        label={t.projects.label}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <motion.div
        className="code-projects"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {t.projects.items.map(({ title, description, tech, link }) => (
          <motion.a
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card project-card"
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <div className="project-top">
              <FaRegFolder className="project-folder" />
              <FaGithub className="project-gh" aria-label={t.projects.viewOnGithub} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul className="project-tech">
              {tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </motion.a>
        ))}
      </motion.div>

      <Reveal className="all-projects">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">
          {t.projects.viewAll} <FaArrowRight />
        </a>
      </Reveal>
    </section>
  );
};

export default Projects;
