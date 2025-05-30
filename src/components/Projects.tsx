import './projects.css';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';

const projects = [
  {
    title: "Quer se sentir um hacker?",
    description: "Digite qualquer tecla e veja um código de brincadeira sendo escrito.",
    component: <HackerTyper />,
  },
  {
    title: "Flappy Tech",
    description: "Toque na tela para o personagem pular e desviar dos canos.",
    component: <FlappyTech />,
  },
  {
    title: "Astro Dodge",
    description: "Use as setas do teclado para mover a nave e desviar dos asteroides.",
    component: <AstroDodge />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map(({ title, description, component }, idx) => (
          <div key={idx} className="project">
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            {component}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
