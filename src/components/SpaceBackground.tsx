import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  const starVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const galaxyVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const nebulaVariants = {
    animate: {
      x: [-20, 20, -20],
      y: [-10, 10, -10],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shootingStarVariants = {
    animate: {
      x: [-100, window.innerWidth + 100],
      y: [Math.random() * 200, Math.random() * 200 + 100],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-950 dark:to-black">
      {/* Galaxy Background */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `
        }}
        variants={galaxyVariants}
        animate="animate"
      />

      {/* Nebula Clouds */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-3xl"
        variants={nebulaVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-3xl"
        variants={nebulaVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 dark:bg-pink-400/30 rounded-full blur-3xl"
        variants={nebulaVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
          }}
          variants={starVariants}
          animate="animate"
          custom={i}
        />
      ))}

      {/* Larger Twinkling Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 255, 255, 0.6)'
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: 1.5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), -100px 0 20px rgba(255, 255, 255, 0.3)'
          }}
          variants={shootingStarVariants}
          animate="animate"
          custom={i}
        />
      ))}

      {/* Cosmic Dust */}
      <div className="absolute inset-0 opacity-30 dark:opacity-50">
        <div 
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
              radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.3), transparent),
              radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.2), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }}
        />
      </div>
    </div>
  );
};

export default SpaceBackground;