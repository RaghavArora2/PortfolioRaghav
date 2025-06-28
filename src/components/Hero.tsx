import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown, Sparkles, Star, Rocket, Zap } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  const StatItem = ({ value, label, icon: Icon }: { value: number; label: string; icon: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="text-center group relative"
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <motion.div 
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
          borderColor: "rgba(147, 51, 234, 0.5)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <motion.div
          className="relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
        >
          <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            <CountUp end={value} duration={2.5} />+
          </div>
          <div className="text-white/70 font-medium text-sm">{label}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent px-4 relative overflow-hidden pt-20 sm:pt-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:flex-1 order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-xl border border-purple-500/30 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Available for opportunities
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white/90 mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <motion.span 
              className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Raghav
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-300" />
              </motion.div>
              
              {/* Magical sparkles around name */}
              <motion.div
                className="absolute -top-1 left-1/4 w-1 h-1 bg-purple-400 rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [-10, -20, -10]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-1 right-1/4 w-1 h-1 bg-pink-400 rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [10, 20, 10]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/80 mb-8 h-16 flex items-center justify-center lg:justify-start"
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
                'Innovation Creator 💡',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed"
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
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-2xl hover:shadow-purple-500/40 transition-all backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="relative z-10 flex items-center gap-3"
                whileHover={{ x: 2 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100"
                style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.a>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-white/20 text-white/80 rounded-2xl font-semibold hover:border-purple-400 hover:text-purple-300 transition-all flex items-center justify-center gap-3 backdrop-blur-xl hover:bg-white/5"
            >
              <span>Explore Work</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            <StatItem value={50} label="Projects" icon={Rocket} />
            <StatItem value={100} label="Clients" icon={Zap} />
            <StatItem value={3} label="Years Exp" icon={Star} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative lg:flex-1 max-w-sm sm:max-w-md lg:max-w-lg order-1 lg:order-2"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Animated ring around profile */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
                padding: '4px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm" />
            </motion.div>

            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm mx-auto z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              style={{ margin: '4px' }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1755734400&v=beta&t=jQ-A-nfjVW6KiVNqcW1zu5IyhGTMcRTOAZBwm5A5wDM"
                alt="Raghav Arora"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Enhanced floating tech icons with 3D effect */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl border border-purple-500/30 text-2xl"
              animate={{ 
                y: [-8, 8, -8],
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.2, rotateZ: 15 }}
            >
              ⚛️
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl border border-green-500/30 text-2xl"
              animate={{ 
                y: [8, -8, 8],
                rotateY: [360, 180, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.2, rotateZ: -15 }}
            >
              ☕
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-500/30 to-pink-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl border border-pink-500/30 text-lg"
              animate={{ 
                x: [-6, 6, -6],
                rotateZ: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.3, y: -5 }}
            >
              🚀
            </motion.div>

            <motion.div
              className="absolute top-1/4 -left-6 w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white font-bold shadow-2xl border border-blue-500/30 text-sm"
              animate={{ 
                x: [4, -4, 4],
                y: [-2, 2, -2],
                rotateZ: [0, -360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              whileHover={{ scale: 1.2, rotateZ: 45 }}
            >
              💻
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.button
          onClick={scrollToNext}
          className="group p-4 rounded-full bg-white/10 backdrop-blur-xl shadow-2xl hover:bg-white/20 transition-all border border-white/20 hover:border-purple-400/50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-white/80 group-hover:text-purple-300" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;