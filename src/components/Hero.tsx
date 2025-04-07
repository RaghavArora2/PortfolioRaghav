import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  const backgroundVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.2, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const StatItem = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      variants={statsVariants}
      className="text-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl font-bold text-blue-600 mb-2">
        <CountUp end={value} duration={2.5} />+
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4 relative overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              width: `${(i + 1) * 300}px`,
              height: `${(i + 1) * 300}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            variants={backgroundVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="text-center md:text-left md:flex-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm{' '}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{
                  backgroundPosition: ['0%', '100%'],
                  backgroundSize: ['100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                Raghav Arora
              </motion.span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-600 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Spring Boot Expert',
                  2000,
                  'React Developer',
                  2000,
                  'PowerBI Specialist',
                  2000,
                  'AWS Cloud Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <a
              href="https://drive.google.com/file/d/1yKTi2gzocIUn0T4ZQOaCzbkdHBZ2VEoA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-700 transition-colors relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <Download size={20} />
                Download Resume
              </motion.button>
            </a>

            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <StatItem value={50} label="Projects" />
              <StatItem value={100} label="Clients" />
              <StatItem value={3} label="Years Experience" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFD5fs7yldDgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728588715860?e=1749686400&v=beta&t=M7gQ6nVTOlXdinPaePRR-FUIaJrKw57S2McbHFPqvK4"
              alt="Raghav Arora"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59, 130, 246, 0.4)',
                '0 0 0 20px rgba(59, 130, 246, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
