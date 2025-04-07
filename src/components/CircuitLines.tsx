import React from 'react';
import { motion } from 'framer-motion';

const BackgroundDesign = () => {
  const gradientVariants = {
    animate: {
      background: [
        'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
        'linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }
    }
  };

  const shapeVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={gradientVariants.animate}
      />
      
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl"
        variants={shapeVariants}
        animate="animate"
        custom={1}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl"
        variants={shapeVariants}
        animate="animate"
        custom={2}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/10 to-purple-100/10 blur-3xl"
        variants={shapeVariants}
        animate="animate"
        custom={3}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
};

export default BackgroundDesign;