import About from './components/About';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import Navbar from './components/Navbar';
import SelectedWins from './components/SelectedWins';
import SelectedWork from './components/SelectedWork';
import ZaraPanel from './components/zara/ZaraPanel';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas text-body">
        <Navbar />
        <main>
          <Hero />
          <ImpactMetrics />
          <SelectedWins />
          <About />
          <Experience />
          <Capabilities />
          <SelectedWork />
          <Contact />
        </main>
        <Footer />
        <ZaraPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
