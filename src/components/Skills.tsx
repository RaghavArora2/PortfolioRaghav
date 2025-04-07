import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, BriefcaseIcon, Clock, Handshake, Brain, Target } from 'lucide-react';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostman, SiWix, SiKalilinux, SiJavascript, SiMysql } from 'react-icons/si';

interface SkillProps {
  icon: any;
  label: string;
  color: string;
  category: string;
}

const SkillIcon = ({ icon: Icon, label, color }: SkillProps) => {
  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      whileHover="hover"
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-full ${color}`}>
        {typeof Icon === 'string' ? (
          <span className="text-sm font-semibold">{Icon}</span>
        ) : (
          <Icon className="w-8 h-8" />
        )}
      </div>
      <span className="text-sm font-medium text-gray-700 mt-4 text-center">
        {label}
      </span>
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
      className="mb-16"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-8">{title}</h3>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        variants={containerVariants}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
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
    { icon: FaJava, label: 'Java', color: 'bg-orange-100 text-orange-600', category: 'backend' },
    { icon: SiJavascript, label: 'JavaScript', color: 'bg-yellow-100 text-yellow-600', category: 'frontend' },
    { icon: FaReact, label: 'React', color: 'bg-blue-100 text-blue-600', category: 'frontend' },
    { icon: FaHtml5, label: 'HTML5', color: 'bg-red-100 text-red-600', category: 'frontend' },
    { icon: FaCss3, label: 'CSS3', color: 'bg-blue-100 text-blue-600', category: 'frontend' },
    { icon: SiSpringboot, label: 'Spring Boot', color: 'bg-green-100 text-green-600', category: 'backend' },
    { icon: FaNodeJs, label: 'Node.js', color: 'bg-green-100 text-green-600', category: 'backend' },
    { icon: SiMysql, label: 'MySQL', color: 'bg-blue-100 text-blue-600', category: 'backend' },
    { icon: SiMongodb, label: 'MongoDB', color: 'bg-green-100 text-green-600', category: 'backend' },
    { icon: FaDocker, label: 'Docker', color: 'bg-blue-100 text-blue-600', category: 'tools' },
    { icon: FaAws, label: 'AWS', color: 'bg-orange-100 text-orange-600', category: 'tools' },
    { icon: SiPostman, label: 'Postman', color: 'bg-orange-100 text-orange-600', category: 'tools' },
    { icon: 'BI', label: 'Power BI', color: 'bg-yellow-100 text-yellow-600', category: 'tools' },
    { icon: FaWordpress, label: 'WordPress', color: 'bg-blue-100 text-blue-600', category: 'tools' },
    { icon: SiWix, label: 'Wix', color: 'bg-purple-100 text-purple-600', category: 'tools' },
    { icon: SiKalilinux, label: 'Kali Linux', color: 'bg-red-100 text-red-600', category: 'tools' }
  ];

  const softSkills = [
    { icon: BriefcaseIcon, label: 'Technical Sales', color: 'bg-blue-100 text-blue-600', category: 'soft' },
    { icon: Target, label: 'Marketing', color: 'bg-red-100 text-red-600', category: 'soft' },
    { icon: Handshake, label: 'Customer Success', color: 'bg-green-100 text-green-600', category: 'soft' },
    { icon: MessageSquare, label: 'Communication', color: 'bg-purple-100 text-purple-600', category: 'soft' },
    { icon: Users, label: 'Leadership', color: 'bg-yellow-100 text-yellow-600', category: 'soft' },
    { icon: Brain, label: 'Problem Solving', color: 'bg-orange-100 text-orange-600', category: 'soft' },
    { icon: Clock, label: 'Time Management', color: 'bg-indigo-100 text-indigo-600', category: 'soft' }
  ];

  const filters = ['all', 'frontend', 'backend', 'tools', 'soft'];

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-20 bg-gray-50 px-4 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
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
              className={`px-4 py-2 rounded-full capitalize ${
                filter === f
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
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