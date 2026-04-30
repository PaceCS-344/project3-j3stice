import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import portrait from "../assets/justice-pro.png";

function Hero() {
  const phrases = ["Scalable Platforms.", "Secure APIs.", "Premium Interfaces."];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="premium-hero">
      <div className="hero-left">
        <p className="hero-tag">JUSTICE BRAYBOY • SOFTWARE ENGINEER</p>

        <h4 className="hero-name-intro">Designing scalable software with modern precision.</h4>

        <h1>
          Crafting <span>{phrases[currentPhrase]}</span>
        </h1>

        <p className="hero-description">
          I design and develop scalable web platforms, secure backend systems,
          and polished user experiences that combine modern engineering with
          premium visual execution.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="btn">View My Work</button>
          </a>

          <a href="/JusticeBrayboyResume.pdf" target="_blank" rel="noreferrer">
            <button className="btn-outline">Resume</button>
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/j3stice" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/justice-brayboy" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:brayboyjustice@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-glow"></div>
        <div className="portrait-frame">
          <img
            src={portrait}
            alt="Justice Brayboy Professional Portrait"
            className="hero-portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;