function RepoModal({ repo, onClose }) {
    if (!repo) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="repo-modal" onClick={(e) => e.stopPropagation()}>
          <h2>{repo.name}</h2>
  
          <p className="repo-description">
            {repo.description || "This repository contains actively maintained development work."}
          </p>
  
          <div className="repo-stats">
            <div><span>Language</span><p>{repo.language || "N/A"}</p></div>
            <div><span>Stars</span><p>{repo.stargazers_count}</p></div>
            <div><span>Watchers</span><p>{repo.watchers_count}</p></div>
            <div><span>Issues</span><p>{repo.open_issues_count}</p></div>
          </div>
  
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <button className="btn">Open Repository</button>
          </a>
  
          <button className="btn-outline close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  export default RepoModal;