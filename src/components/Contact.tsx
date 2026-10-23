import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/useLanguage";
import { Reveal, SectionHeading } from './ui';
import "./Contact.css";

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_fuzsaeh",
        "template_6q9y1m6",
        form.current,
        "kXBNK5O12mcrwxxWO"
      )
      .then(
        () => {
          setStatus("sent");
          form.current?.reset();
        },
        (error) => {
          console.error("Erro ao enviar email:", error.text);
          setStatus("error");
        }
      );
  };

  const links = [
    { href: `mailto:${profile.email}`, icon: <FaEnvelope />, label: c.emailLabel, value: profile.email },
    { href: profile.linkedin, icon: <FaLinkedin />, label: "LinkedIn", value: "bruno-andrade" },
    { href: profile.github, icon: <FaGithub />, label: "GitHub", value: "brunobaa" },
  ];

  return (
    <section id="contact" className="section">
      <SectionHeading
        index="06"
        label={c.label}
        title={<>{c.titleStart} <span className="gradient-text">{c.titleHighlight}</span></>}
        subtitle={c.subtitle}
      />

      <div className="contact-grid">
        <Reveal className="contact-links">
          {links.map(({ href, icon, label, value }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="card contact-link"
            >
              <span className="icon-box">{icon}</span>
              <span>
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={form} onSubmit={sendEmail} className="card contact-form">
            <label>
              {c.name}
              <input type="text" name="from_name" placeholder={c.namePlaceholder} required />
            </label>
            <label>
              {c.email}
              <input type="email" name="from_email" placeholder={c.emailPlaceholder} required />
            </label>
            <label>
              {c.message}
              <textarea name="message" placeholder={c.messagePlaceholder} required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? c.sending : <>{c.send} <FaPaperPlane /></>}
            </button>
            {status === "sent" && <p className="form-feedback success">{c.sent}</p>}
            {status === "error" && (
              <p className="form-feedback error">{c.error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
