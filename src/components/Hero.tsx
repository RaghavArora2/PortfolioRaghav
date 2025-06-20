import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown, Sparkles, Star } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  const StatItem = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="text-center group"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div 
        className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <CountUp end={value} duration={2} />+
      </motion.div>
      <div className="text-white/70 font-medium">{label}</div>
    </motion.div>
  );

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:flex-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4" />
            Available for opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold text-white/90 mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
              Raghav
              <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300" />
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl lg:text-3xl text-white/80 mb-8 h-16 flex items-center justify-center lg:justify-start"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer 🚀',
                2000,
                'Spring Boot Expert ☕',
                2000,
                'React Specialist ⚛️',
                2000,
                'Cloud Enthusiast ☁️',
                2000,
                'Problem Solver 🧩',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed"
          >
            Passionate software engineer crafting exceptional digital experiences across the cosmic web. 
            Specialized in full-stack development with a focus on scalable backend solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <motion.a
              href="https://drive.google.com/file/d/1LKfT_xnzJSdKsMJ5BM9KyshecP0VzaTL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-2xl hover:shadow-purple-500/25 transition-all backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white/80 rounded-full font-semibold hover:border-purple-400 hover:text-purple-300 transition-all flex items-center gap-3 backdrop-blur-sm"
            >
              Explore Work
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            <StatItem value={50} label="Projects" />
            <StatItem value={100} label="Clients" />
            <StatItem value={3} label="Years Exp" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative lg:flex-1 max-w-lg"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1755734400&v=beta&t=jQ-A-nfjVW6KiVNqcW1zu5IyhGTMcRTOAZBwm5A5wDM"
                alt="Raghav Arora"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold shadow-2xl border border-purple-500/30"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold shadow-2xl border border-green-500/30"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ☕
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold shadow-2xl border border-pink-500/30"
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-2xl hover:bg-white/20 transition-colors border border-white/20"
        >
          <ArrowDown className="w-6 h-6 text-white/80" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;