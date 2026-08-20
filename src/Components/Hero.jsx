import { motion } from "framer-motion";
import developer from "../assets/developer.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-greeting">Hello, I’m</p>
        <h1>
          Santhosh <span>G P</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <p className="hero-description">
          I build polished web experiences and scalable applications with React, Django, Python, SQL, and a strong focus on thoughtful problem solving.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/itsmesanthu" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gp-santhosh-santhu/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/SANTHOSH_2118/" target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-image-border">
          <img src={developer} alt="Santhosh GP" className="hero-image" />
        </div>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
      </motion.div>
    </section>
  );
}

export default Hero;
