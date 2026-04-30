import { useEffect, useState } from "react";

function Stats() {
  const [projects, setProjects] = useState(0);
  const [repos, setRepos] = useState(0);
  const [years, setYears] = useState(0);
  const [tech, setTech] = useState(0);

  useEffect(() => {
    let p = 0, r = 0, y = 0, t = 0;

    const interval = setInterval(() => {
      if (p < 10) p++;
      if (r < 20) r++;
      if (y < 2) y++;
      if (t < 8) t++;

      setProjects(p);
      setRepos(r);
      setYears(y);
      setTech(t);

      if (p === 10 && r === 20 && y === 2 && t === 8) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-strip reveal">
      <div className="stat-card">
        <h3>{projects}+</h3>
        <p>Completed Builds</p>
      </div>

      <div className="stat-card">
        <h3>{repos}+</h3>
        <p>Repositories Published</p>
      </div>

      <div className="stat-card">
        <h3>{years}+</h3>
        <p>Years of Development</p>
      </div>

      <div className="stat-card">
        <h3>{tech}+</h3>
        <p>Core Technologies</p>
      </div>
    </section>
  );
}

export default Stats;