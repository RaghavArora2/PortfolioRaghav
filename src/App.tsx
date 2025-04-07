import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundDesign from './components/CircuitLines';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <BackgroundDesign />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider color="#ffffff" bgColor="bg-white" />
        <About />
        <SectionDivider color="#f9fafb" bgColor="bg-gray-50" />
        <Skills />
        <SectionDivider color="#ffffff" bgColor="bg-white" />
        <Experience />
        <SectionDivider color="#f9fafb" bgColor="bg-gray-50" />
        <Projects />
        <SectionDivider color="#ffffff" bgColor="bg-white" />
        <Contact />
      </main>
    </div>
  );
}

export default App;