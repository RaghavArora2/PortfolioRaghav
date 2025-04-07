import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  type?: 'wave' | 'curve' | 'angle';
  color?: string;
  bgColor?: string;
}

const SectionDivider = ({ 
  type = 'wave', 
  color = 'white', 
  bgColor = 'bg-gray-50' 
}: SectionDividerProps) => {
  const lineVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative w-full ${bgColor} py-12 overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Animated line with glowing dots */}
        <div className="relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
            variants={lineVariants}
          />
          
          {/* Decorative dots */}
          {[0, 25, 50, 75, 100].map((position) => (
            <motion.div
              key={position}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={dotVariants}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${position}%` }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <motion.div
                  variants={glowVariants}
                  animate="animate"
                  className="absolute inset-0 bg-blue-400 rounded-full blur-sm"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 w-20 h-20 border-l-2 border-t-2 border-blue-500" />
          <div className="absolute right-0 bottom-0 w-20 h-20 border-r-2 border-b-2 border-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;