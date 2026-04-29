
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project">
        <h3>Store API Security Project</h3>
        <p>
          Developed a FastAPI REST API featuring JWT authentication,
          role-based authorization, protected CRUD endpoints,
          and MariaDB database integration.
        </p>
        <p><em>Private academic repository available upon request.</em></p>
      </div>

      <div className="project">
        <h3>Personal Portfolio Website</h3>
        <p>
          Designed and developed a responsive portfolio website using React
          components, reusable styling, and interactive UI elements.
        </p>
      </div>
    </section>
  );
}

export default Projects;