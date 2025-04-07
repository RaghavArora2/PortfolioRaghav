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
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
  >
    <div className="p-2 bg-blue-100 rounded-lg">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-800 font-medium">{value}</p>
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
    <section className="py-20 bg-white px-4 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Get in Touch</h2>
        
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
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Contact;