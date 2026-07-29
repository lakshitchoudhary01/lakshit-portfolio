import "./App.css";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";

import Reveal from "./components/Reveal/Reveal";

import Aurora from "./components/Aurora/Aurora";

import MouseGlow from "./components/MouseGlow/MouseGlow";

function App() {

  // Loading State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Show Loader First
  if (loading) {
    return <Loader />;
  }

  // Main Portfolio
  return (
    <>
      <MouseGlow/>

      <Aurora/>

      <ScrollProgress />

      <Navbar />

      <main>

  <Hero />

  <Reveal>
    <About />
  </Reveal>

  <Reveal>
    <Skills />
  </Reveal>

  <Reveal>
    <Projects />
  </Reveal>

  <Reveal>
    <Education />
  </Reveal>

  <Reveal>
    <Contact />
  </Reveal>

</main>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;