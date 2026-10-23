import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/useLanguage";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {t.footer.madeWith}
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#inicio" aria-label={t.footer.backToTop}><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
