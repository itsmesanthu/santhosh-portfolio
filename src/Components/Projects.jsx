import React from 'react'

function Projects() {
    const projects=[
        { title: "Quantum-Resistant Cybersecurity System", description: "A secure web application focused on secure data handling and cybersecurity fundamentals. Developed the user interface and contributed to backend performance.", tech: "Python • HTML • CSS • JavaScript", github: "https://github.com/itsmesanthu" },
        { title: "Online Shopping Website", description: "A responsive shopping website with reusable product layouts, product pages and mobile-friendly designs across different screen sizes.", tech: "HTML • CSS", github: "https://github.com/itsmesanthu" },

    ]
  return ( 
    <>
      <section id="projects" className="section"> 
        <h2>Projects</h2>
         <p className="section-description"> Here are some of the projects and technical work I have developed while building my skills in full-stack development, cybersecurity and problem solving. </p> 
         <div className="projects"> {projects.map((project) => ( <div className="project-card" key={project.title}>
            <h3> {project.title} </h3> 
            <p> {project.description} 
            </p> <span className="project-tech">{project.tech} </span>
            <div className="project-buttons"> 
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn" > View Project → </a> </div> </div> ))} 
      </div> 
      </section>
    </>
  )
}

export default Projects
