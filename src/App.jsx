import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import DSA from "./Components/DSA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DSA />
        <Contact />
      </main>
      <Footer />
      <a href="#home" className={`back-to-top ${showBackTop ? "visible" : ""}`} aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}

export default App;
