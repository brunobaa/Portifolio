import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <p>
        © {new Date().getFullYear()} {profile.name} · Feito com React, TypeScript e Framer Motion
      </p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#inicio" aria-label="Voltar ao topo"><FaArrowUp /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
