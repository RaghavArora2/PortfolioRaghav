import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Rocket, Code, Heart, Certificate } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const EducationCard = ({ 
    icon: Icon, 
    school, 
    degree, 
    year,
    index
  }: { 
    icon: any; 
    school: string; 
    degree: string; 
    year?: string;
    index: number;
  }) => (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col sm:flex-row gap-4 bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10"
      >
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 self-start">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
            <div>
              <h4 className="font-bold text-white/90 text-base sm:text-lg mb-1">{school}</h4>
              <p className="text-purple-400 font-medium text-sm sm:text-base">{degree}</p>
            </div>
            {year && (
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white rounded-full text-xs sm:text-sm font-medium border border-purple-500/30 self-start">
                {year}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const HighlightCard = ({ icon: Icon, title, description, color }: {
    icon: any;
    title: string;
    description: string;
    color: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`p-4 sm:p-6 rounded-xl ${color} shadow-lg hover:shadow-purple-500/25 transition-all backdrop-blur-sm border border-white/10`}
    >
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-3 sm:mb-4" />
      <h4 className="text-white font-bold text-base sm:text-lg mb-2">{title}</h4>
      <p className="text-white/90 text-xs sm:text-sm">{description}</p>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 bg-transparent px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Passionate about creating digital solutions across the cosmic web
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <HighlightCard
            icon={Rocket}
            title="Innovation Driven"
            description="Always exploring new technologies and pushing cosmic boundaries"
            color="bg-gradient-to-br from-purple-500/20 to-purple-600/20"
          />
          <HighlightCard
            icon={Code}
            title="Full Stack Expertise"
            description="End-to-end development across the digital universe"
            color="bg-gradient-to-br from-pink-500/20 to-pink-600/20"
          />
          <HighlightCard
            icon={Heart}
            title="Client Focused"
            description="Building stellar relationships and delivering exceptional results"
            color="bg-gradient-to-br from-blue-500/20 to-blue-600/20"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
                I'm a <span className="font-semibold text-purple-400">Tech Lead</span> managing web, app, and UI/UX teams at <span className="font-semibold text-pink-400">WellnessZ</span>. 
                I work closely with high-value clients, translate requirements into technical plans, and drive end-to-end execution 
                across development, DevOps, and product delivery.
              </p>
              
              <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
                With a background of serving <span className="font-semibold text-blue-400">100+ clients as a freelancer</span>, I 
                bring strong technical skills, fast problem-solving, and clear communication. I focus on building scalable systems using 
                React, Next.js, Node.js, Redis, MongoDB, Docker, and AWS.
              </p>

              <p className="text-white/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                Passionate about leading teams, improving processes, and building impactful digital products.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-6 sm:mb-8 text-center lg:text-left">Education Journey</h3>
            <div className="space-y-4 sm:space-y-6">
              <EducationCard
                icon={GraduationCap}
                school="Guru Nanak Dev University, Amritsar"
                degree="Bachelor of Technology - BTech, Computer Science"
                year="2021 - 2025"
                index={0}
              />
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white/90 mb-6 sm:mb-8 text-center">
            <Certificate className="inline-block mr-3 text-purple-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'CSS Certificate',
              'Software Engineer Certificate',
              'Java (Basic) Certificate',
              'SQL (Basic) Certificate',
              'Software Engineer Intern Certificate'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10 flex items-center gap-4"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <p className="text-white/90 font-semibold text-sm sm:text-base">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;