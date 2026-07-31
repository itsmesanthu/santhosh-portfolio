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
    </div>
  );
}

export default App;