import { useEffect, useState } from "react";
import RepoModal from "./RepoModal";

function Projects({ searchTerm }) {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/j3stice/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="projects" className="section">
      <h2>Live GitHub Projects</h2>

      {filteredRepos.map((repo) => (
        <div
          className="project"
          key={repo.id}
          onClick={() => setSelectedRepo(repo)}
        >
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description available."}</p>
          <p><strong>Language:</strong> {repo.language || "Not specified"}</p>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      ))}

      <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />
    </section>
  );
}

export default Projects;