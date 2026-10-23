import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "../i18n/useLanguage";
import { Reveal, SectionHeading } from './ui';
import "./Experience.css";

const Experience = () => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  // A linha da linha do tempo "se desenha" conforme a rolagem
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 80%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="section">
      <SectionHeading
        index="01"
        label={t.experience.label}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-track">
          <motion.div className="timeline-line" style={{ scaleY: lineScale }} />
        </div>

        {t.experience.items.map((exp, idx) => (
          <Reveal key={idx} className="timeline-item" delay={idx * 0.1}>
            <span className={`timeline-dot ${idx === 0 ? "current" : ""}`} />
            <article className="card timeline-card">
              <header className="timeline-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="timeline-org">{exp.org}</p>
                </div>
                <span className="chip chip-mono">{exp.period}</span>
              </header>
              <p className="timeline-description">{exp.description}</p>
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
