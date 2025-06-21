import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  // Memoize star positions for better performance
  const stars = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2
    })), []
  );

  const shootingStars = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      delay: i * 8 + Math.random() * 5
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-950 dark:to-black" />
      
      {/* Simplified nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
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
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(147, 51, 234, 0.4)'
          }}
          animate={{
            x: [0, 300, 600],
            y: [0, 150, 300],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeOut",
            times: [0, 0.1, 0.9, 1]
          }}
        >
          {/* Shooting star trail */}
          <motion.div
            className="absolute w-20 h-0.5 bg-gradient-to-r from-white via-purple-300 to-transparent rounded-full"
            style={{ left: '-80px', top: '50%', transform: 'translateY(-50%) rotate(30deg)' }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              scaleX: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(SpaceBackground);