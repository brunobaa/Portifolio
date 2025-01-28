import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <p>Sinta-se à vontade para entrar em contato comigo através do formulário abaixo ou pelas redes sociais.</p>
      
      <form className="contact-form">
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu Email" required />
        <textarea placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div className="contact-links">
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:seuemail@email.com">Email</a>
      </div>
    </section>
  );
}

export default Contact;
