import Layout from '../src/components/Layout';
import Hero from '../src/components/sections/hero/Hero';
import About from '../src/components/sections/About';
import Skills from '../src/components/sections/Skills';
import Projects from '../src/components/sections/Projects';
import Contact from '../src/components/sections/Contact';

export default function Home() {
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
