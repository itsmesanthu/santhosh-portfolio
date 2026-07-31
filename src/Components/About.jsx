import React from "react";
function About() {
  return (
    <section id="about" className="about section">
      <div className="about-heading">
        <p className="section-label">ABOUT ME</p>
        <h2>
          Turning ideas into
          <span> real applications.</span>
        </h2>
      </div>
      <div className="about-content">
        <div className="about-text">

          <p>
            I'm Santhosh GP, a Computer Science and Engineering
            student and aspiring Full Stack Developer.
          </p>

          <p>
            I enjoy building web applications and solving
            programming problems. I'm continuously improving
            my skills in React, JavaScript, Python, Django,
            SQL and Data Structures & Algorithms.
          </p>

          <p>
            My goal is to become a strong software developer
            and build useful, scalable and user-friendly
            applications.
          </p>

        </div>


        <div className="about-info">

          <div className="info-card">
            <h3>Education</h3>
            <p>
           Bachelor of Engineering in Computer Science and Engineering
            </p>
          </div>

          <div className="info-card">
            <h3>Focus</h3>
            <p>
            software devloveper
            </p>
          </div>

          <div className="info-card">
            <h3>Problem Solving</h3>
            <p>
              DSA & LeetCode
            </p>
          </div>

          <div className="info-card">
            <h3>Currently Learning</h3>
            <p>
             Python,JavaScript,HTML,CSS,Django, React & Advanced Development
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;