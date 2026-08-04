import Reveal from "./Reveal";

function About() {
  const highlights = [
    { title: "Education", text: "Bachelor of Engineering in Computer Science and Engineering" },
    { title: "Primary Focus", text: "Full stack development with clean UI and resilient backend architecture" },
    { title: "Problem Solving", text: "DSA, LeetCode, and analytical thinking sharpened through daily practice" },
    { title: "Currently Learning", text: "React, Django, Python, SQL, and modern development workflows" },
  ];

  return (
    <section id="about" className="about section">
      <Reveal>
        <div className="about-heading">
          <p className="section-label">ABOUT ME</p>
          <h2>
            Turning ideas into <span>real applications</span>.
          </h2>
        </div>
      </Reveal>

      <div className="about-content">
        <Reveal className="about-text" direction="left">
          <p>
            I’m Santhosh GP, a Computer Science and Engineering student with a growing focus on building polished and practical web applications.
          </p>
          <p>
            I enjoy turning ideas into usable software, refining interfaces, and strengthening backend logic through continuous learning in React, JavaScript, Python, Django, SQL, and Data Structures & Algorithms.
          </p>
          <p>
            My goal is to grow into a strong software engineer who creates user-friendly, scalable, and meaningful products.
          </p>
        </Reveal>

        <div className="about-info">
          {highlights.map((item, index) => (
            <Reveal key={item.title} className="info-card" delay={0.05 * index} direction="right">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
