import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, BriefcaseIcon, Clock, Handshake, Brain, Target, Zap, Star } from 'lucide-react';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostman, SiWix, SiKalilinux, SiJavascript, SiMysql, SiExpress } from 'react-icons/si';

interface SkillProps {
  icon: any;
  label: string;
  color: string;
  category: string;
}

const SkillIcon = ({ icon: Icon, label, color }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.15,
      rotateY: 360,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="flex flex-col items-center p-6 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all relative overflow-hidden border border-white/10 dark:border-white/10"
        whileHover={{ y: -8 }}
      >
        {/* Cosmic background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        {/* Skill icon */}
        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${color} relative z-10 mb-4 shadow-lg`}>
          {typeof Icon === 'string' ? (
            <span className="text-lg font-bold">{Icon}</span>
          ) : (
            <Icon className="w-8 h-8" />
          )}
          
          {/* Stellar glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-current opacity-20 blur-xl"
            animate={isHovered ? { 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            } : {}}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          />
        </div>
        
        <span className="text-sm font-semibold text-white/90 dark:text-white/90 text-center relative z-10">
          {label}
        </span>
        
        {/* Floating stars */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  y: -150,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              >
                <Star className="w-3 h-3 text-yellow-300" />
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills, filter }: { title: string; skills: SkillProps[]; filter: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category.toLowerCase() === filter.toLowerCase());

  if (filteredSkills.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="mb-20"
    >
      <motion.h3 
        className="text-3xl font-bold text-white/90 dark:text-white/90 mb-12 text-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        {title}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.h3>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.8 },
              show: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }
            }}
          >
            <SkillIcon {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const techSkills = [
    { icon: FaJava, label: 'Java', color: 'bg-orange-500/20 text-orange-300 border border-orange-500/30', category: 'backend' },
    { icon: SiJavascript, label: 'JavaScript', color: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30', category: 'frontend' },
    { icon: FaReact, label: 'React', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'frontend' },
    { icon: FaHtml5, label: 'HTML5', color: 'bg-red-500/20 text-red-300 border border-red-500/30', category: 'frontend' },
    { icon: FaCss3, label: 'CSS3', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'frontend' },
    { icon: SiSpringboot, label: 'Spring Boot', color: 'bg-green-500/20 text-green-300 border border-green-500/30', category: 'backend' },
    { icon: FaNodeJs, label: 'Node.js', color: 'bg-green-500/20 text-green-300 border border-green-500/30', category: 'backend' },
    { icon: SiExpress, label: 'Express.js', color: 'bg-gray-500/20 text-gray-300 border border-gray-500/30', category: 'backend' },
    { icon: SiMysql, label: 'MySQL', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'backend' },
    { icon: SiMongodb, label: 'MongoDB', color: 'bg-green-500/20 text-green-300 border border-green-500/30', category: 'backend' },
    { icon: FaDocker, label: 'Docker', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'tools' },
    { icon: FaAws, label: 'AWS', color: 'bg-orange-500/20 text-orange-300 border border-orange-500/30', category: 'tools' },
    { icon: SiPostman, label: 'Postman', color: 'bg-orange-500/20 text-orange-300 border border-orange-500/30', category: 'tools' },
    { icon: 'BI', label: 'Power BI', color: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30', category: 'tools' },
    { icon: FaWordpress, label: 'WordPress', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'tools' },
    { icon: SiWix, label: 'Wix', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30', category: 'tools' },
    { icon: SiKalilinux, label: 'Kali Linux', color: 'bg-red-500/20 text-red-300 border border-red-500/30', category: 'tools' }
  ];

  const softSkills = [
    { icon: BriefcaseIcon, label: 'Technical Sales', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30', category: 'soft' },
    { icon: Target, label: 'Marketing', color: 'bg-red-500/20 text-red-300 border border-red-500/30', category: 'soft' },
    { icon: Handshake, label: 'Customer Success', color: 'bg-green-500/20 text-green-300 border border-green-500/30', category: 'soft' },
    { icon: MessageSquare, label: 'Communication', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30', category: 'soft' },
    { icon: Users, label: 'Leadership', color: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30', category: 'soft' },
    { icon: Brain, label: 'Problem Solving', color: 'bg-orange-500/20 text-orange-300 border border-orange-500/30', category: 'soft' },
    { icon: Clock, label: 'Time Management', color: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30', category: 'soft' }
  ];

  const filters = ['all', 'frontend', 'backend', 'tools', 'soft'];

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-20 bg-transparent px-4 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white/90 dark:text-white/90 mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="inline-block mr-3 text-purple-400" />
            Skills & Expertise
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-white/70 dark:text-white/70 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies across the digital cosmos
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all backdrop-blur-xl border ${
                filter === f
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border-purple-400/50 shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <SkillSection title="Technical Skills" skills={techSkills} filter={filter} />
        <SkillSection title="Soft Skills" skills={softSkills} filter={filter} />
      </div>
    </section>
  );
};

export default Skills;