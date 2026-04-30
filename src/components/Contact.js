function Contact() {
  return (
    <section id="contact" className="contact-panel reveal">
      <h2>Let’s Build Something Great.</h2>

      <p>
        Whether you're looking for a developer, collaborator, or someone to bring
        ambitious ideas to life, I'm always open to discussing new opportunities.
      </p>

      <div className="contact-buttons">
        <a href="mailto:brayboyjustice@gmail.com">
          <button className="btn">Email Me</button>
        </a>

        <a href="https://github.com/j3stice" target="_blank" rel="noreferrer">
          <button className="btn-outline">GitHub</button>
        </a>

        <a href="https://linkedin.com/in/justice-brayboy" target="_blank" rel="noreferrer">
          <button className="btn-outline">LinkedIn</button>
        </a>
      </div>
    </section>
  );
}

export default Contact;