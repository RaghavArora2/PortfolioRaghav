import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919815919243";
    const message = "Hi! Got here from your portfolio";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 0 rgba(34, 197, 94, 0.7)',
        '0 0 0 10px rgba(34, 197, 94, 0)',
        '0 0 0 0 rgba(34, 197, 94, 0)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        variants={pulseVariants}
        animate="animate"
      >
        <MessageCircle className="w-6 h-6 relative z-10" />
        
        {/* Enhanced Tooltip - Fixed positioning */}
        <motion.div 
          className="absolute bottom-full left-0 mb-4 px-4 py-3 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-gray-700 min-w-max"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <div className="font-semibold text-green-400">💬 Chat on WhatsApp</div>
          <div className="text-xs text-gray-300 mt-1">Quick response guaranteed!</div>
          <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
        </motion.div>

        {/* Cosmic glow effect */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full opacity-30 blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default WhatsAppButton;