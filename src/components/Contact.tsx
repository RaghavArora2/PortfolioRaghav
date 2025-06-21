import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUp } from 'lucide-react';

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
    whileHover={{ y: -5 }}
    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10"
  >
    <div className="p-2 sm:p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
    </div>
    <div className="flex-1">
      <p className="text-xs sm:text-sm text-white/60">{label}</p>
      <p className="text-white/90 font-medium text-sm sm:text-base">{value}</p>
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
    <section className="py-12 sm:py-16 bg-transparent px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">Get in Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
          
          <div className="sm:col-span-2">
            <ContactItem
              icon={MapPin}
              label="Location"
              value="Amritsar, Punjab, India"
            />
          </div>
        </div>
      </div>

      <motion.button
        onClick={handleScroll}
        className="fixed bottom-8 right-20 sm:right-8 p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </section>
  );
};

export default Contact;