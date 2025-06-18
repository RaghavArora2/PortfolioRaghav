import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Rocket, Code, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut"
      }
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20],
      x: [-10, 10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const EducationCard = ({ 
    icon: Icon, 
    school, 
    degree, 
    year,
    isLast,
    index
  }: { 
    icon: any; 
    school: string; 
    degree: string; 
    year?: string;
    isLast?: boolean;
    index: number;
  }) => (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          className="absolute left-8 top-20 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 z-0"
          initial={{ height: 0 }}
          animate={inView ? { height: "calc(100% + 2rem)" } : {}}
          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
        />
      )}
      
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative flex gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
        
        {/* Timeline dot with pulse effect */}
        <div className="relative">
          <motion.div
            className="absolute -left-3 -top-3 w-16 h-16 bg-blue-100 rounded-full opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl z-10 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
            <Icon className="w-7 h-7 text-blue-600" />
          </div>
        </div>

        <div className="flex-1 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-bold text-gray-800 text-xl mb-2">{school}</h4>
              <p className="text-blue-600 font-medium text-lg">{degree}</p>
            </div>
            {year && (
              <motion.span 
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                {year}
              </motion.span>
            )}
          </div>
          
          {/* Animated progress indicator */}
          <motion.div
            className="h-2 bg-gray-100 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
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
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`p-6 rounded-2xl ${color} shadow-lg hover:shadow-xl transition-all group cursor-pointer`}
    >
      <Icon className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
      <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
      <p className="text-white/90 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-white px-4 relative overflow-hidden"
      id="about"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"
        variants={floatingVariants}
        animate="animate"
        custom={1}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            About Me
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <HighlightCard
            icon={Rocket}
            title="Innovation Driven"
            description="Always exploring new technologies and pushing boundaries"
            color="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <HighlightCard
            icon={Code}
            title="Full Stack Expertise"
            description="End-to-end development with modern tech stack"
            color="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <HighlightCard
            icon={Heart}
            title="Client Focused"
            description="Building relationships and delivering exceptional results"
            color="bg-gradient-to-br from-pink-500 to-pink-600"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="prose prose-lg max-w-none"
              variants={itemVariants}
            >
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                A proactive and versatile engineering student at <span className="font-semibold text-blue-600">Guru Nanak Dev University</span> (B.Tech in CSE, 2021–2025), 
                with a solid foundation in software development and a strong inclination towards backend engineering, 
                web development, and data visualization.
              </p>
              
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Experienced in <span className="font-semibold text-purple-600">freelance web development</span>, technical consulting, and handling multiple full-cycle projects. 
                I'm currently working as a <span className="font-semibold text-green-600">Sales Engineer Intern at WellnessZ</span>, where I introduced a new technical 
                coordination workflow to streamline collaboration between the Sales and CSM teams.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                My journey is driven by a passion for solving complex problems and creating impactful digital experiences 
                that bridge the gap between technology and human needs.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center lg:text-left">Education Journey</h3>
            <div className="space-y-12">
              <EducationCard
                icon={GraduationCap}
                school="Guru Nanak Dev University, Amritsar"
                degree="BTech Computer Science Engineering"
                year="2021–2025"
                index={0}
              />
              <EducationCard
                icon={Award}
                school="Madhav Vidya Niketan, Amritsar"
                degree="12th Standard - Science Stream"
                year="2019–2021"
                index={1}
              />
              <EducationCard
                icon={BookOpen}
                school="GD Goenka Public School"
                degree="10th Standard"
                year="2017–2019"
                isLast
                index={2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;