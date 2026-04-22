import Button from "./button";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p>Email: your@email.com</p>

      <div className="contact-links">
        <Button text="GitHub" link="https://github.com/j3stice" />
        <Button text="LinkedIn" link="https://linkedin.com/in/justice-brayboy" />
      </div>
    </section>
  );
}

export default Contact;