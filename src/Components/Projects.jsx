import { motion } from "framer-motion";
import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "Quantum-Resistant Cybersecurity System",
      description:
        "A secure web experience focused on safe data handling, responsive interfaces, and strong backend fundamentals for cybersecurity-minded applications.",
      tech: "Python • HTML • CSS • JavaScript",
      github: "https://github.com/itsmesanthu",
      demo: "https://github.com/itsmesanthu",
    },
    {
      title: "Online Shopping Website",
      description:
        "A responsive storefront experience with reusable product layouts, mobile-friendly interface decisions, and modern presentation patterns.",
      tech: "HTML • CSS",
      github: "https://github.com/itsmesanthu",
      demo: "https://github.com/itsmesanthu",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <Reveal>
        <div className="section-heading">
          <p className="section-label">SELECTED PROJECTS</p>
          <h2>
            Projects that reflect <span>careful craft</span>.
          </h2>
          <p className="section-description">
            These experiences highlight my growth in full-stack development, user-focused UI decisions, and practical problem solving.
          </p>
        </div>
      </Reveal>

      <div className="projects">
        {projects.map((project, index) => (
          <Reveal key={project.title} className="project-card" delay={0.05 * index} direction="up">
            <motion.div
              className="project-visual"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="project-visual-ring" />
              <span>{project.title.split(" ")[0][0]}</span>
            </motion.div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech-list">
              {project.tech.split("•").map((tech) => (
                <span key={tech}>{tech.trim()}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                GitHub ↗
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn secondary-btn">
                Live Demo ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
