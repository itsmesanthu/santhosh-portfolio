import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "dsa", label: "DSA" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const height = section.clientHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo" onClick={closeMenu}>
        Santhosh<span>GP</span>
      </a>

      <button className="menu-btn" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
        {menuOpen ? "×" : "☰"}
      </button>

      <nav className="nav-menu desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} className={activeSection === link.id ? "active" : ""} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-menu mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={activeSection === link.id ? "active" : ""} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
