import { useEffect, useState } from "react";
import RepoModal from "./RepoModal";

function Projects({ searchTerm }) {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/j3stice/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 5)));
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects">
      <h2>Featured GitHub Work</h2>

      {filteredRepos.map((repo) => (
        <div
          className="project"
          key={repo.id}
          onClick={() => setSelectedRepo(repo)}
        >
          <div className="project-top">
            <h3>{repo.name}</h3>
            <span className="repo-status">LIVE</span>
          </div>

          <p>{repo.description || "Repository showcasing active development work."}</p>

          <div className="project-bottom">
            <span className="language-pill">
              {repo.language || "Codebase"}
            </span>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      ))}

      <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
    </section>
  );
}

export default Projects;