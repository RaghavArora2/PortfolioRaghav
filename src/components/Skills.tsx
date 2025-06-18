import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, BriefcaseIcon, Clock, Handshake, Brain, Target, Zap } from 'lucide-react';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostman, SiWix, SiKalilinux, SiJavascript, SiMysql, SiExpress } from 'react-icons/si';

interface SkillProps {
  icon: any;
  label: string;
  color: string;
  category: string;
  level: number;
}

const SkillIcon = ({ icon: Icon, label, color, level }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.1,
      rotateY: 180,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: { 
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
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
        className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
        
        {/* Skill icon */}
        <div className={`w-16 h-16 flex items-center justify-center rounded-full ${color} relative z-10 mb-4`}>
          {typeof Icon === 'string' ? (
            <span className="text-lg font-bold">{Icon}</span>
          ) : (
            <Icon className="w-8 h-8" />
          )}
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-current opacity-20 blur-lg"
            animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          />
        </div>
        
        <span className="text-sm font-semibold text-gray-700 mb-3 text-center relative z-10">
          {label}
        </span>
        
        {/* Skill level progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 relative z-10">
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            variants={progressVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          />
        </div>
        <span className="text-xs text-gray-500 mt-1 relative z-10">{level}%</span>
        
        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{ 
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  opacity: 0 
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
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
        staggerChildren: 0.1
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
        className="text-3xl font-bold text-gray-800 mb-12 text-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        {title}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.h3>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        variants={containerVariants}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
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
    { icon: FaJava, label: 'Java', color: 'bg-orange-100 text-orange-600', category: 'backend', level: 90 },
    { icon: SiJavascript, label: 'JavaScript', color: 'bg-yellow-100 text-yellow-600', category: 'frontend', level: 85 },
    { icon: FaReact, label: 'React', color: 'bg-blue-100 text-blue-600', category: 'frontend', level: 88 },
    { icon: FaHtml5, label: 'HTML5', color: 'bg-red-100 text-red-600', category: 'frontend', level: 95 },
    { icon: FaCss3, label: 'CSS3', color: 'bg-blue-100 text-blue-600', category: 'frontend', level: 90 },
    { icon: SiSpringboot, label: 'Spring Boot', color: 'bg-green-100 text-green-600', category: 'backend', level: 92 },
    { icon: FaNodeJs, label: 'Node.js', color: 'bg-green-100 text-green-600', category: 'backend', level: 80 },
    { icon: SiExpress, label: 'Express.js', color: 'bg-gray-100 text-gray-700', category: 'backend', level: 78 },
    { icon: SiMysql, label: 'MySQL', color: 'bg-blue-100 text-blue-600', category: 'backend', level: 85 },
    { icon: SiMongodb, label: 'MongoDB', color: 'bg-green-100 text-green-600', category: 'backend', level: 82 },
    { icon: FaDocker, label: 'Docker', color: 'bg-blue-100 text-blue-600', category: 'tools', level: 75 },
    { icon: FaAws, label: 'AWS', color: 'bg-orange-100 text-orange-600', category: 'tools', level: 70 },
    { icon: SiPostman, label: 'Postman', color: 'bg-orange-100 text-orange-600', category: 'tools', level: 90 },
    { icon: 'BI', label: 'Power BI', color: 'bg-yellow-100 text-yellow-600', category: 'tools', level: 85 },
    { icon: FaWordpress, label: 'WordPress', color: 'bg-blue-100 text-blue-600', category: 'tools', level: 80 },
    { icon: SiWix, label: 'Wix', color: 'bg-purple-100 text-purple-600', category: 'tools', level: 75 },
    { icon: SiKalilinux, label: 'Kali Linux', color: 'bg-red-100 text-red-600', category: 'tools', level: 70 }
  ];

  const softSkills = [
    { icon: BriefcaseIcon, label: 'Technical Sales', color: 'bg-blue-100 text-blue-600', category: 'soft', level: 90 },
    { icon: Target, label: 'Marketing', color: 'bg-red-100 text-red-600', category: 'soft', level: 85 },
    { icon: Handshake, label: 'Customer Success', color: 'bg-green-100 text-green-600', category: 'soft', level: 88 },
    { icon: MessageSquare, label: 'Communication', color: 'bg-purple-100 text-purple-600', category: 'soft', level: 92 },
    { icon: Users, label: 'Leadership', color: 'bg-yellow-100 text-yellow-600', category: 'soft', level: 80 },
    { icon: Brain, label: 'Problem Solving', color: 'bg-orange-100 text-orange-600', category: 'soft', level: 95 },
    { icon: Clock, label: 'Time Management', color: 'bg-indigo-100 text-indigo-600', category: 'soft', level: 87 }
  ];

  const filters = ['all', 'frontend', 'backend', 'tools', 'soft'];

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="inline-block mr-3 text-blue-600" />
            Skills & Expertise
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
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