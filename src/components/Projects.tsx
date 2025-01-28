import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Meu Primeiro Projeto',
      description: 'Este é um projeto incrível que desenvolvi usando React e TypeScript.',
      technologies: ['React', 'TypeScript', 'CSS'],
      link: '#',
    },
    {
      title: 'Aplicação Full Stack',
      description: 'Um projeto que conecta um frontend moderno com um backend robusto em Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Jogo 2D em JavaScript',
      description: 'Um jogo simples, mas divertido, feito com JavaScript puro e HTML5 Canvas.',
      technologies: ['JavaScript', 'HTML5', 'Canvas'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
