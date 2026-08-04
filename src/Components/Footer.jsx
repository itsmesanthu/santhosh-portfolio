function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <a href="#home" className="footer-logo">
            Santhosh <span>G P</span>
          </a>
          <p>Full Stack Developer • Building thoughtful digital experiences.</p>
        </div>

        <div className="footer-links">
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
      </div>

      <div className="footer-bottom">
        <p>© 2026 Santhosh GP. Built with React and care.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
