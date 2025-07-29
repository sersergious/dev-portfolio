//import { useState } from "react";

import Layout from "./components/Layout";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
