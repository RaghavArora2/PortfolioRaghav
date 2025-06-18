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
import SectionDivider from './components/SectionDivider';
import TechyBackground from './components/TechyBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Faster loading with minimal delay
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative transition-colors duration-300">
        <TechyBackground />
        <Navbar />
        <main className="relative">
          <Hero />
          <SectionDivider color="#ffffff" bgColor="bg-white dark:bg-gray-800" />
          <About />
          <SectionDivider color="#f9fafb" bgColor="bg-gray-50 dark:bg-gray-900" />
          <Skills />
          <SectionDivider color="#ffffff" bgColor="bg-white dark:bg-gray-800" />
          <Experience />
          <SectionDivider color="#f9fafb" bgColor="bg-gray-50 dark:bg-gray-900" />
          <Projects />
          <SectionDivider color="#ffffff" bgColor="bg-white dark:bg-gray-800" />
          <GitHubStats />
          <SectionDivider color="#f9fafb" bgColor="bg-gray-50 dark:bg-gray-900" />
          <Contact />
        </main>
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;