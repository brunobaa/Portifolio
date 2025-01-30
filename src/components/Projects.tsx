import './Projects.css';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Quer se sentir um hacker?</h3>
          <HackerTyper />
        </div>
        <div className="project">
          <h3>Flappy Tech</h3>
          <FlappyTech />
        </div>
        <div className="project">
          <h3>Astro Dodge</h3>
          <AstroDodge />
        </div>
      </div>
    </section>
  );
};

export default Projects;
