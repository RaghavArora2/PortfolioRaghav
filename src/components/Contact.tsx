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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group block"
  >
    <div className="bg-white/5 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all border border-white/10 overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 backdrop-blur-sm">
          <Icon className="w-5 h-5 text-purple-400" />
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-white/60 mb-1 font-medium">{label}</p>
          <p className="text-white/90 font-semibold group-hover:text-purple-300 transition-colors">{value}</p>
        </div>
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next cosmic project? Let's connect across the digital universe!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <ContactItem
            icon={Mail}
            label="Email"
            value="raghavarora419@gmail.com"
            link="mailto:raghavarora419@gmail.com"
          />
          
          <ContactItem
            icon={Phone}
            label="Mobile"
            value="9815919243"
            link="tel:+919815919243"
          />
          
          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value="raghavarora2003"
            link="https://www.linkedin.com/in/raghavarora2003"
          />
          
          <ContactItem
            icon={Github}
            label="GitHub"
            value="RaghavArora2"
            link="https://github.com/RaghavArora2"
          />
        </div>

        <div className="mb-8">
          <ContactItem
            icon={MapPin}
            label="Location"
            value="Amritsar, Punjab, India"
          />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl backdrop-blur-xl border border-purple-500/30">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-white/90 font-medium">
              Let's build something amazing together!
            </span>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button - Positioned to avoid overlap */}
      <motion.button
        onClick={handleScroll}
        className="fixed bottom-6 right-6 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20">
          <ArrowUp className="w-5 h-5 text-white" />
        </div>

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900/95 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-purple-500/30 pointer-events-none">
          Back to top
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      </motion.button>
    </section>
  );
};

export default Contact;