function About() {
  return (
    <section id="about" className="about-card reveal">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I’m Justice Brayboy, a full stack software engineer specializing in backend
          architecture, secure API development, and high-end web interface design.
          My focus is creating systems that perform reliably, scale intelligently,
          and deliver clean, memorable user experiences.
        </p>
      </div>

      <div className="about-right">
        <div className="about-highlight">
          <h3>Frontend</h3>
          <p>React, JavaScript, Responsive UI</p>
        </div>

        <div className="about-highlight">
          <h3>Backend</h3>
          <p>Python, FastAPI, REST Architecture</p>
        </div>

        <div className="about-highlight">
          <h3>Database</h3>
          <p>MySQL, MariaDB, SQL Modeling</p>
        </div>
      </div>
    </section>
  );
}

export default About;