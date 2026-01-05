import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SpaceBackground = () => {
  const { isDark } = useTheme();
  // Drastically reduced elements for performance
  const stars = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 3
    })), []
  );

  const shootingStars = useMemo(() => 
    Array.from({ length: 2 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      delay: i * 8 + Math.random() * 3,
      angle: Math.random() * 30 + 20
    })), []
  );

  const nebulaClouds = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      y: Math.random() * 120 - 10,
      size: Math.random() * 300 + 150,
      color: ['purple', 'blue', 'pink'][i],
      delay: i * 3
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified gradient background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black' 
          : 'bg-gradient-to-br from-gray-100 via-purple-50 to-white'
      }`} />
      
      {/* Reduced nebula effects */}
      <div className="absolute inset-0 opacity-20">
        {nebulaClouds.map((cloud) => (
          <motion.div
            key={cloud.id}
            className={`absolute bg-${cloud.color}-500/15 rounded-full blur-3xl`}
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
            }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay
            }}
          />
        ))}
      </div>

      {/* Optimized stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Simplified shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          animate={{
            x: [0, 300],
            y: [0, 150],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            style={{
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)'
            }}
          />
          <motion.div
            className="absolute w-16 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
            style={{ 
              left: '-64px', 
              top: '50%', 
              transform: `translateY(-50%) rotate(${star.angle}deg)`,
            }}
          />
        </motion.div>
      ))}

      {/* Minimal floating particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-purple-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(SpaceBackground);