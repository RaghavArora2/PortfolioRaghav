import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  // Memoize star positions for better performance
  const stars = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2
    })), []
  );

  const largeStars = useMemo(() => 
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-950 dark:to-black" />
      
      {/* Simplified nebula effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Optimized stars with reduced animations */}
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

      {/* Larger twinkling stars */}
      {largeStars.map((star) => (
        <motion.div
          key={`large-${star.id}`}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(SpaceBackground);