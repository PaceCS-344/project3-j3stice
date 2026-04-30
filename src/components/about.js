function About() {
  return (
    <section id="about" className="about-card reveal">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          I’m Justice Brayboy, a software engineer focused on full stack
          application development, backend security, and premium user interface
          design. My work centers around building scalable systems that not only
          function efficiently, but also deliver polished user experiences.
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