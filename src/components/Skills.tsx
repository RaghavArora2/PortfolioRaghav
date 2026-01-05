import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageSquare, BriefcaseIcon, Clock, Handshake, Brain, Target, Zap, Award, TrendingUp, Network } from 'lucide-react';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaWordpress, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostman, SiWix, SiKalilinux, SiJavascript, SiMysql, SiExpress } from 'react-icons/si';

interface SkillProps {
  icon: any;
  label: string;
  color: string;
  category: string;
}

const SkillIcon = ({ icon: Icon, label, color }: SkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="group"
    >
      <div className="flex flex-col items-center p-3 sm:p-4 bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${color} mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
          {typeof Icon === 'string' ? (
            <span className="text-xs sm:text-sm font-bold">{Icon}</span>
          ) : (
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </div>
        
        <span className="text-xs sm:text-sm font-semibold text-white/90 dark:text-white/90 text-center leading-tight">
          {label}
        </span>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills, filter }: { title: string; skills: SkillProps[]; filter: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category.toLowerCase() === filter.toLowerCase());

  if (filteredSkills.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      className="mb-12 sm:mb-16"
    >
      <motion.h3 
        className="text-xl sm:text-2xl font-bold text-white/90 dark:text-white/90 mb-6 sm:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        {title}
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2" />
      </motion.h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredSkills.map((skill, index) => (
          <SkillIcon key={skill.label} {...skill} />
        ))}
      </div>
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

  return (
    <section className="py-12 sm:py-16 bg-transparent px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 dark:text-white/90 mb-4">
            <Zap className="inline-block mr-3 text-purple-400" />
            Skills & Expertise
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
          <p className="text-white/70 dark:text-white/70 text-sm sm:text-base lg:text-lg px-4">
            Mastering cutting-edge technologies across the digital cosmos
          </p>
        </motion.div>

        {/* Top Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white/90 dark:text-white/90 mb-6 sm:mb-8 text-center">
            Top Skills
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all border border-purple-500/30 text-center"
            >
              <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">Client Communication</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all border border-pink-500/30 text-center"
            >
              <TrendingUp className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">Project Management</h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all border border-blue-500/30 text-center"
            >
              <Network className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">System Architecture</h4>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 sm:px-4 py-2 rounded-full capitalize font-medium transition-all backdrop-blur-sm border text-xs sm:text-sm ${
                filter === f
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white border-purple-400/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <SkillSection title="Technical Skills" skills={techSkills} filter={filter} />
        <SkillSection title="Soft Skills" skills={softSkills} filter={filter} />
      </div>
    </section>
  );
};

export default Skills;