import React from "react";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Santhosh<span>GP</span>
      </a>
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#dsa" onClick={closeMenu}>DSA</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;