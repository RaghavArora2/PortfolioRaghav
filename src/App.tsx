import { useEffect, useState } from 'react';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SpaceBackground from './components/SpaceBackground';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-black' 
        : 'bg-gradient-to-b from-gray-100 via-purple-50 to-white'
    }`}>
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
      <Chatbot />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Much faster loading
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;