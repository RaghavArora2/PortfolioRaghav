import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUp, Rocket } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, link }: {
  icon: any;
  label: string;
  value: string;
  link?: string;
}) => (
  <motion.a
    href={link}
    target={link ? "_blank" : undefined}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group block"
  >
    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all border border-white/10 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        whileHover={{ scale: 1.1 }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-4 p-6">
        <motion.div 
          className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 backdrop-blur-sm"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-6 h-6 text-purple-400" />
        </motion.div>
        
        <div className="flex-1">
          <p className="text-sm text-white/60 mb-1 font-medium">{label}</p>
          <p className="text-white/90 font-semibold text-lg group-hover:text-purple-300 transition-colors">{value}</p>
        </div>

        {/* Hover arrow */}
        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowUp className="w-5 h-5 text-purple-400 rotate-45" />
        </motion.div>
      </div>
    </div>
  </motion.a>
);

const Contact = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 bg-transparent px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white/90 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Get in Touch
            </motion.span>
          </motion.h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Ready to collaborate on your next cosmic project? Let's connect across the digital universe!
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <ContactItem
            icon={Mail}
            label="Email"
            value="raghavarora419@gmail.com"
            link="mailto:raghavarora419@gmail.com"
          />
          
          <ContactItem
            icon={Phone}
            label="Phone"
            value="+91 9815919243"
            link="tel:+919815919243"
          />
          
          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value="Raghav Arora"
            link="https://linkedin.com/in/raghav-arora2003"
          />
          
          <ContactItem
            icon={Github}
            label="GitHub"
            value="RaghavArora2"
            link="https://github.com/RaghavArora2"
          />
        </div>

        <div className="mb-12">
          <ContactItem
            icon={MapPin}
            label="Location"
            value="Amritsar, Punjab, India"
          />
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl backdrop-blur-xl border border-purple-500/30"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Rocket className="w-6 h-6 text-purple-400" />
            <span className="text-white/90 font-medium text-lg">
              Let's build something amazing together!
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Back to Top Button */}
      <motion.button
        onClick={handleScroll}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 group"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative">
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm" />
          </motion.div>
          
          {/* Main button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowUp className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900/95 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl border border-purple-500/30 pointer-events-none">
            Back to top
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </motion.button>
    </section>
  );
};

export default Contact;