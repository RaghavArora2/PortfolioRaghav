import React, { useState, useEffect } from 'react';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadImages = [
      'https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1755734400&v=beta&t=jQ-A-nfjVW6KiVNqcW1zu5IyhGTMcRTOAZBwm5A5wDM'
    ];

    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      })
    ).then(() => {
      // Images loaded, but keep loading screen for minimum time
      setTimeout(() => setIsLoading(false), 2000);
    }).catch(() => {
      // Even if images fail, show the site
      setTimeout(() => setIsLoading(false), 2000);
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      <main className="relative">
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
        <GitHubStats />
        <SectionDivider color="#f9fafb" bgColor="bg-gray-50" />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;