import './projects.css';
import HackerTyper from './HackerTyper';
import FlappyTech from './FlappyTech';
import AstroDodge from './AstroDodge';

// Lista dos projetos em destaque (jogos)
const featuredProjects = [
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

// Lista dos outros projetos (cards menores)
const otherProjects = [
  {
    title: "Meu Portfólio no GitHub",
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/seu-usuario/seu-repositorio",
  },
  // Adicione mais projetos aqui
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      {/* Projetos em destaque */}
      <div className="projects-container">
        {featuredProjects.map(({ title, description, component }, idx) => (
          <div key={idx} className="project">
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            {component}
          </div>
        ))}
      </div>

      {/* Outros projetos */}
      <h3 className="other-projects-title">Outros Projetos</h3>
      <div className="other-projects-container">
        {otherProjects.map(({ title, image, link }, idx) => (
          <div key={idx} className="other-project-card">
            <img src={image} alt={title} className="other-project-image" />
            <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
