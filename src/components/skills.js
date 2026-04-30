function Skills() {
  const skills = [
    "⚛ React",
    "🟨 JavaScript",
    "🐍 Python",
    "⚡ FastAPI",
    "🛢 MySQL",
    "🌐 REST APIs",
    "🐙 GitHub",
    "🔧 Git",
    "🎨 CSS3",
    "📄 HTML5",
    "🖥 Node.js",
    "🚀 Deployment"
  ];

  return (
    <section id="skills" className="skills-panel">
      <h2>Technology Stack</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tile">
            {skill}
          </div>
        ))}
      </div>

      <p className="skills-footer">Engineering polished systems from front to back.</p>
    </section>
  );
}

export default Skills;