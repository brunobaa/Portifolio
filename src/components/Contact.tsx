import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_fuzsaeh",    // Seu Service ID
        "template_6q9y1m6",   // Seu Template ID
        form.current,
        "kXBNK5O12mcrwxxWO"   // Sua Public Key
      )
      .then(
        (result) => {
          console.log("Email enviado:", result.text);
          setIsSent(true);
          setLoading(false);
          form.current?.reset(); // Limpa o formulário após o envio
        },
        (error) => {
          console.error("Erro ao enviar email:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <p>
        Sinta-se à vontade para entrar em contato comigo através do formulário abaixo ou pelas redes sociais.
      </p>

      <div className="contact-links">
        <a href="https://github.com/brunobaa" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" /> GitHub
        </a>
        <a href="mailto:brunoandradeprof7@gmail.com">
          <FaEnvelope className="contact-icon" /> Email
        </a>
        <a href="https://www.linkedin.com/in/bruno-andrade-4a1581313/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" /> LinkedIn
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Seu Nome" required />
        <input type="email" name="from_email" placeholder="Seu Email" required />
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {isSent && <p className="success-message">Mensagem enviada com sucesso!</p>}
      </form>
    </section>
  );
};

export default Contact;
