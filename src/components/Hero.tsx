import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown, Sparkles, Star, Rocket, Zap } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  const StatItem = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="text-center group"
      whileHover={{ scale: 1.05, y: -3 }}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all">
        <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
          <CountUp end={value} duration={2} />+
        </div>
        <div className="text-white/70 font-medium text-xs">{label}</div>
      </div>
    </motion.div>
  );

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent px-4 relative overflow-hidden pt-20 sm:pt-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left lg:flex-1 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4" />
            Available for opportunities
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent relative">
              Raghav
              <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300" />
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-6 h-12 flex items-center justify-center lg:justify-start"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer 🚀',
                2000,
                'Spring Boot Expert ☕',
                2000,
                'React Specialist ⚛️',
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed"
          >
            Passionate software engineer crafting exceptional digital experiences across the cosmic web. 
            Specialized in full-stack development with a focus on scalable backend solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/1LKfT_xnzJSdKsMJ5BM9KyshecP0VzaTL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white/20 text-white/80 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-300 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:bg-white/5"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            <StatItem value={50} label="Projects" icon={Rocket} />
            <StatItem value={100} label="Clients" icon={Zap} />
            <StatItem value={3} label="Years Exp" icon={Star} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative lg:flex-1 max-w-sm lg:max-w-md order-1 lg:order-2"
        >
          <div className="relative">
            {/* Simplified animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-black/50" />
            </motion.div>

            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl mx-auto z-10" style={{ margin: '4px' }}>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1755734400&v=beta&t=jQ-A-nfjVW6KiVNqcW1zu5IyhGTMcRTOAZBwm5A5wDM"
                alt="Raghav Arora"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Simplified floating tech icons */}
            <motion.div
              className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold shadow-lg border border-purple-500/30 text-lg"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚛️
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold shadow-lg border border-green-500/30 text-lg"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ☕
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-4 w-10 h-10 bg-gradient-to-br from-pink-500/30 to-pink-600/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold shadow-lg border border-pink-500/30"
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Simplified scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:bg-white/20 transition-all border border-white/20"
        >
          <ArrowDown className="w-5 h-5 text-white/80" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;