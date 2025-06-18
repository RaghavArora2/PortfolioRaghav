import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const StatItem = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      variants={itemVariants}
      className="text-center group"
      whileHover={{ scale: 1.1 }}
    >
      <motion.div 
        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <CountUp end={value} duration={2.5} />+
      </motion.div>
      <div className="text-gray-600 font-medium">{label}</div>
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
        layoutId={`stat-${label}`}
      />
    </motion.div>
  );

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4 relative overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        custom={1}
        className="absolute top-40 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        custom={2}
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">
        <motion.div 
          variants={itemVariants}
          className="text-center lg:text-left lg:flex-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Available for opportunities
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Raghav
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="text-2xl lg:text-3xl text-gray-600 mb-8 h-20 flex items-center justify-center lg:justify-start"
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
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed"
          >
            Passionate software engineer crafting exceptional digital experiences with modern technologies. 
            Specialized in full-stack development with a focus on scalable backend solutions.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
          >
            <motion.a
              href="https://drive.google.com/file/d/1LKfT_xnzJSdKsMJ5BM9KyshecP0VzaTL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>

            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-3"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-8"
          >
            <StatItem value={50} label="Projects" />
            <StatItem value={100} label="Clients" />
            <StatItem value={3} label="Years Exp" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative lg:flex-1 max-w-lg"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Animated rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 border-blue-200/30"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: `${100 + i * 10}%`,
                  height: `${100 + i * 10}%`,
                  left: `${-5 - i * 5}%`,
                  top: `${-5 - i * 5}%`,
                }}
              />
            ))}

            <motion.div
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1755734400&v=beta&t=jQ-A-nfjVW6KiVNqcW1zu5IyhGTMcRTOAZBwm5A5wDM"
                alt="Raghav Arora"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              animate={{
                y: [-5, 5, -5],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              animate={{
                y: [5, -5, 5],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              ☕
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              animate={{
                x: [-3, 3, -3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              🚀
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Hero;