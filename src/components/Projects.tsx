import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaRegFolder } from 'react-icons/fa';
import { projects, profile } from '../data/profile';
import { Reveal, SectionHeading } from './ui';
import { fadeUp, stagger } from './motion';
import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="04"
        label="projetos"
        title="Código que já escrevi"
        subtitle="Trabalhos da faculdade e projetos pessoais, de sistemas operacionais a jogos em rede."
      />

      <motion.div
        className="code-projects"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map(({ title, description, tech, link }) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card project-card"
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <div className="project-top">
              <FaRegFolder className="project-folder" />
              <FaGithub className="project-gh" aria-label="Ver no GitHub" />
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
          Ver todos os repositórios <FaArrowRight />
        </a>
      </Reveal>
    </section>
  );
};

export default Projects;
