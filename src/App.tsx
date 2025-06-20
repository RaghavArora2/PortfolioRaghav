import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';
import SpaceBackground from './components/SpaceBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Faster loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-950 dark:to-black relative transition-colors duration-300">
        <SpaceBackground />
        <Navbar />
        <main className="relative">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="github-stats">
            <GitHubStats />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;