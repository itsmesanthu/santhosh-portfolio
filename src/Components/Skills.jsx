import React from "react";
function Skills() {
  const skills = [
    {
      name: "Python",
      category: "Language"
    },
    {
      name: "JavaScript",
      category: "Language"
    },
    {
      name: "React",
      category: "Frontend"
    },
    {
      name: "HTML",
      category: "Frontend"
    },
    {
      name: "CSS",
      category: "Frontend"
    },
    {
      name: "Django",
      category: "Backend"
    },
    {
      name: "SQL",
      category: "Database"
    },
    {
      name: "Git & GitHub",
      category: "Tools"
    },
    {
      name: "DSA",
      category: "Problem Solving"
    }
  ];

  return (
    <section id="skills" className="skills-section section">

      <div className="skills-heading">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Technologies I <span>work with.</span>
        </h2>

        <p>
          Technologies and concepts I'm learning and using
          to build applications and improve my development
          skills.
        </p>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.name}
          >

            <div className="skill-number">
              {String(
                skills.indexOf(skill) + 1
              ).padStart(2, "0")}
            </div>

            <div>

              <h3>
                {skill.name}
              </h3>

              <p>
                {skill.category}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;