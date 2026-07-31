import React from "react";
function Contact() {
  return (
    <section id="contact" className="contact-section section">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h2>
        Let's build something
        <span> together.</span>
      </h2>

      <p className="contact-description">
        I'm currently looking for opportunities to grow as
        a software developer and work on interesting projects.
        If you'd like to connect, feel free to reach out.
      </p>

      <div className="contact-buttons">

        <a
          href="mailto:gpsanthoshsanthu@gmail.com"
          className="btn primary"
        >
          Email Me ↗
        </a>

        <a
          href="https://github.com/itsmesanthu"
          target="_blank"
          rel="noreferrer"
          className="btn secondary"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/in/gp-santhosh-santhu/"
          target="_blank"
          rel="noreferrer"
          className="btn secondary"
        >
          LinkedIn ↗
        </a>

      </div>

    </section>
  );
}

export default Contact;