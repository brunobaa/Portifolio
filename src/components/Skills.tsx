import './Skills.css';

function Skills() {
  const skills = {
    "Desenvolvimento Web": ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Vite', 'TypeScript', 'Node.js'],
    "Programação": ['JavaScript', 'Java', 'C', 'C++', 'Python'],
    "Banco de Dados": ['SQL', 'MongoDB'],
    "Ferramentas & Versionamento": ['GitHub', 'Unity']
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <div className="skill-badges">
              {skillList.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
