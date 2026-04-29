function RepoModal({ repo, onClose }) {
    if (!repo) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="repo-modal" onClick={(e) => e.stopPropagation()}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p><strong>Language:</strong> {repo.language}</p>
          <p><strong>Stars:</strong> {repo.stargazers_count}</p>
          <p><strong>Watchers:</strong> {repo.watchers_count}</p>
          <p><strong>Open Issues:</strong> {repo.open_issues_count}</p>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            View Repository
          </a>
          <br /><br />
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default RepoModal;