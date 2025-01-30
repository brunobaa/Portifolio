
import './Projects.css';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-container">
        <div className="project-row">
          <div className="project">
            <HackerTyper />
          </div>
          <div className="project">
            <FlappyTech />
          </div>
          <div className="project">
            <AstroDodge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
