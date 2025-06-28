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
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    })), []
  );

  const shootingStars = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      delay: i * 6 + Math.random() * 3,
      angle: Math.random() * 45 + 15
    })), []
  );

  const nebulaClouds = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      y: Math.random() * 120 - 10,
      size: Math.random() * 400 + 200,
      color: ['purple', 'blue', 'pink', 'indigo', 'violet', 'cyan'][i],
      delay: i * 2
    })), []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black dark:from-black dark:via-purple-950 dark:to-black"
        animate={{
          background: [
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)',
            'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0f0f23 100%)',
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)'
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Advanced nebula effects with 3D feel */}
      <div className="absolute inset-0 opacity-30">
        {nebulaClouds.map((cloud) => (
          <motion.div
            key={cloud.id}
            className={`absolute bg-${cloud.color}-500/20 rounded-full blur-3xl`}
            style={{
              left: `${cloud.x}%`,
              top: `${cloud.y}%`,
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
              x: [-20, 20, -20],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 15 + cloud.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay
            }}
          />
        ))}
      </div>

      {/* Optimized twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8), 0 0 ${star.size * 4}px rgba(147, 51, 234, 0.4)`
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Shooting Stars with realistic trails */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shooting-${star.id}`}
          className="absolute"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
          }}
          animate={{
            x: [0, 400, 800],
            y: [0, 200, 400],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeOut",
            times: [0, 0.1, 0.8, 1]
          }}
        >
          {/* Main shooting star */}
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
            }}
            animate={{
              scale: [0, 1.5, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut"
            }}
          />
          
          {/* Enhanced trail effect */}
          <motion.div
            className="absolute w-32 h-1 bg-gradient-to-r from-white via-purple-300 via-blue-300 to-transparent rounded-full"
            style={{ 
              left: '-128px', 
              top: '50%', 
              transform: `translateY(-50%) rotate(${star.angle}deg)`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0, 0.9, 0.9, 0],
              scaleX: [0, 1, 1, 0],
              scaleY: [0, 1.5, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut"
            }}
          />
          
          {/* Secondary trail for depth */}
          <motion.div
            className="absolute w-20 h-0.5 bg-gradient-to-r from-purple-400 via-pink-300 to-transparent rounded-full"
            style={{ 
              left: '-80px', 
              top: '50%', 
              transform: `translateY(-50%) rotate(${star.angle}deg)`,
              filter: 'blur(1px)'
            }}
            animate={{
              opacity: [0, 0.6, 0.6, 0],
              scaleX: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay + 0.1,
              ease: "easeOut"
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles for depth */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Cosmic dust effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)'
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default React.memo(SpaceBackground);