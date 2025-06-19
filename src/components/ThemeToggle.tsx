import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="relative w-6 h-6"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-5 h-5 text-yellow-400" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-5 h-5 text-purple-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;