import developer from "../assets/developer.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">
          Hey! I'm
        </p>

        <h1>
          Santhosh <span>G P</span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web
          applications using React, JavaScript, HTML and CSS.
          I also enjoy solving Data Structures and Algorithms
          problems.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="btn secondary"
          >
            Contact Me
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/itsmesanthu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gp-santhosh-santhu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/SANTHOSH_2118/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>

        </div>

      </div>


      <div className="hero-image-container">

        <div className="hero-image-border">

          <img
            src={developer}
            alt="Santhosh GP"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;