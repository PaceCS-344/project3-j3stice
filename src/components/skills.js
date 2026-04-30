function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "Git",
    "GitHub",
    "REST APIs",
    "MySQL"
  ];

  return (
    <section id="skills" className="skills-panel">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tile">
            {skill}
          </div>
        ))}
      </div>

      <p className="skills-footer">Always learning something new 🚀</p>
    </section>
  );
}

export default Skills;