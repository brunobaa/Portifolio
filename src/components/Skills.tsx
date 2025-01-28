import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss, SiUnity, SiC, SiCplusplus, SiPython, SiVite, SiGithub } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
  { name: "TypeScript", icon: <SiTypescript className="skill-icon" /> },
  { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
  { name: "GitHub", icon: <SiGithub className="skill-icon" /> },
  { name: "SQL", icon: <FaDatabase className="skill-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="skill-icon" /> },
  { name: "Unity", icon: <SiUnity className="skill-icon" /> },
  { name: "C", icon: <SiC className="skill-icon" /> },
  { name: "C++", icon: <SiCplusplus className="skill-icon" /> },
  { name: "Python", icon: <SiPython className="skill-icon" /> },
  { name: "Vite", icon: <SiVite className="skill-icon" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades e Tecnologias</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
