import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUp, Star } from 'lucide-react';

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
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all group border border-white/10"
  >
    <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors border border-purple-500/30">
      <Icon className="w-5 h-5 text-purple-400" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-white/60">{label}</p>
      <p className="text-white/90 font-medium">{value}</p>
    </div>
    <Star className="w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
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
    <section className="py-20 bg-transparent px-4 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white/90 mb-4">Get in Touch</h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
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
          
          <ContactItem
            icon={MapPin}
            label="Location"
            value="Amritsar, Punjab, India"
          />
        </div>
      </div>

      <motion.button
        onClick={handleScroll}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all z-40 border border-purple-500/30"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Contact;