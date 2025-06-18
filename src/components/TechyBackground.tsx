import React from 'react';
import { motion } from 'framer-motion';

const TechyBackground = () => {
  const gridVariants = {
    animate: {
      opacity: [0.1, 0.3, 0.1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const circuitVariants = {
    animate: {
      pathLength: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        staggerChildren: 0.5
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        variants={gridVariants}
        animate="animate"
      />

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Animated Circuit Paths */}
        <motion.path
          d="M0,100 Q200,50 400,100 T800,100 L1200,100"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          variants={circuitVariants}
          animate="animate"
        />
        <motion.path
          d="M0,300 Q300,250 600,300 T1200,300"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          variants={circuitVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        />
        <motion.path
          d="M0,500 Q400,450 800,500 T1200,500"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
          variants={circuitVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default TechyBackground;