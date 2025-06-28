import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 100);
          return 100;
        }
        return prev + 10; // Much faster progress
      });
    }, 50); // Faster updates

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center z-50"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto"
          >
            <Rocket className="w-6 h-6 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white mb-3"
          >
            Raghav Arora
          </motion.h1>

          <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white/80 text-sm">{progress}%</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;