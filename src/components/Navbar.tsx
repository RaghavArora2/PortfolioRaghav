import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = scrollPosition + 100; // Adjusted offset
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 py-3 px-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 dark:bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          <Sparkles className="w-6 h-6 text-purple-400" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Raghav Arora
          </h1>
        </motion.div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <button
                  onClick={() => scrollTo(item)}
                  className={`capitalize transition-all duration-300 relative px-3 py-2 rounded-lg ${
                    activeSection === item
                      ? 'text-purple-400 font-medium bg-purple-500/10'
                      : 'text-white/70 hover:text-purple-300 hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl shadow-2xl md:hidden border-t border-white/10`}
        >
          <ul className="px-4 py-2">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`block w-full text-left py-3 px-4 capitalize transition-all duration-300 rounded-lg ${
                    activeSection === item
                      ? 'text-purple-400 font-medium bg-purple-500/10'
                      : 'text-white/70 hover:text-purple-300 hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;