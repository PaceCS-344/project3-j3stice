import Button from "./Button";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project">
        <h3>Store API</h3>
        <p>
          Built a secure REST API with JWT authentication, role-based access,
          and MariaDB integration.
        </p>
        <Button text="View Code" link="https://github.com/j3stice/project2" />
      </div>

      <div className="project">
        <h3>Portfolio Website</h3>
        <p>
          Designed and developed a personal portfolio using React.
        </p>
      </div>
    </section>
  );
}

export default Projects;