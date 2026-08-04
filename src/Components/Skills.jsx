import Reveal from "./Reveal";

function Skills() {
  const skills = [
    { name: "Python", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Django", category: "Backend" },
    { name: "SQL", category: "Database" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "DSA", category: "Problem Solving" },
  ];

  return (
    <section id="skills" className="skills-section section">
      <Reveal>
        <div className="skills-heading">
          <p className="section-label">MY SKILLS</p>
          <h2>
            Technologies I <span>work with</span>.
          </h2>
          <p>
            I’m building a solid foundation across frontend, backend, databases, and problem-solving to create dependable applications.
          </p>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} className="skill-card" delay={0.04 * index} direction="up">
            <div className="skill-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
