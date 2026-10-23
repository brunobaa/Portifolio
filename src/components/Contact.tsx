import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import { Reveal, SectionHeading } from './ui';
import "./Contact.css";

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
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
    { href: `mailto:${profile.email}`, icon: <FaEnvelope />, label: "E-mail", value: profile.email },
    { href: profile.linkedin, icon: <FaLinkedin />, label: "LinkedIn", value: "bruno-andrade" },
    { href: profile.github, icon: <FaGithub />, label: "GitHub", value: "brunobaa" },
  ];

  return (
    <section id="contact" className="section">
      <SectionHeading
        index="06"
        label="contato"
        title={<>Vamos <span className="gradient-text">conversar?</span></>}
        subtitle="Estou aberto a oportunidades de estágio e trabalho. Respondo rápido."
      />

      <div className="contact-grid">
        <Reveal className="contact-links">
          {links.map(({ href, icon, label, value }) => (
            <a
              key={label}
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
              Nome
              <input type="text" name="from_name" placeholder="Seu nome" required />
            </label>
            <label>
              E-mail
              <input type="email" name="from_email" placeholder="voce@empresa.com" required />
            </label>
            <label>
              Mensagem
              <textarea name="message" placeholder="Conte um pouco sobre a oportunidade…" required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : <>Enviar mensagem <FaPaperPlane /></>}
            </button>
            {status === "sent" && <p className="form-feedback success">Mensagem enviada! Retorno em breve.</p>}
            {status === "error" && (
              <p className="form-feedback error">Não foi possível enviar. Tente pelo e-mail ao lado.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
