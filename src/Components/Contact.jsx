import { useState } from "react";
import Reveal from "./Reveal";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:gpsanthoshsanthu@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section section">
      <Reveal>
        <p className="section-label">GET IN TOUCH</p>
        <h2>
          Let’s build something <span>meaningful</span> together.
        </h2>
        <p className="contact-description">
          I’m open to opportunities, meaningful collaborations, and projects that make an impact. Reach out if you’d like to connect.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-card" direction="left">
          <h3>Connect with me</h3>
          <p>
            Whether you’re looking for a developer, a collaborator, or a thoughtful teammate, I’d love to hear from you.
          </p>
          <div className="contact-buttons">
            <a href="mailto:gpsanthoshsanthu@gmail.com" className="btn primary">
              Email Me ↗
            </a>
            <a href="https://github.com/itsmesanthu" target="_blank" rel="noreferrer" className="btn secondary">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/gp-santhosh-santhu/" target="_blank" rel="noreferrer" className="btn secondary">
              LinkedIn ↗
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-form-card" direction="right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea rows="4" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me a bit about your idea..." />
            </label>
            <button className="btn primary" type="submit">
              Send Email
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
