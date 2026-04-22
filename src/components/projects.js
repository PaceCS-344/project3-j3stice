import Button from "./Button";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project">
        <h3>Store API</h3>
        <p>
          Developed a secure REST API using FastAPI with JWT authentication,
          role-based authorization, and MariaDB integration.
        </p>
        <Button text="View Code" link="https://github.com/YOUR_USERNAME/project2" />
      </div>

      <div className="project">
        <h3>Portfolio Website</h3>
        <p>
          Built a responsive portfolio using React to showcase projects,
          technical skills, and contact information.
        </p>
      </div>
    </section>
  );
}

export default Projects;