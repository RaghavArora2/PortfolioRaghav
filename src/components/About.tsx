import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const underlineVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingBlobVariants = {
    animate: {
      y: [-20, 20],
      x: [-10, 10],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const EducationCard = ({ 
    icon: Icon, 
    school, 
    degree, 
    year,
    isLast 
  }: { 
    icon: any; 
    school: string; 
    degree: string; 
    year?: string;
    isLast?: boolean;
  }) => (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          className="absolute left-8 top-16 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
          variants={timelineVariants}
          style={{ height: "calc(100% + 2rem)" }}
        />
      )}
      
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="relative flex gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
      >
        {/* Animated dot on timeline */}
        <div className="relative">
          <motion.div
            className="absolute -left-2 -top-2 w-12 h-12 bg-blue-100 rounded-full opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative p-3 bg-blue-100 rounded-lg z-10">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">{school}</h4>
              <p className="text-blue-600">{degree}</p>
            </div>
            {year && (
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                {year}
              </span>
            )}
          </div>
          
          {/* Animated progress bar */}
          <motion.div
            className="mt-4 h-1 bg-blue-100 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
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
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"
        variants={floatingBlobVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"
        variants={floatingBlobVariants}
        animate="animate"
        custom={1}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-2 relative inline-block">
            About Me
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-blue-600 rounded"
              variants={underlineVariants}
            />
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <motion.p 
            className="text-gray-600 leading-relaxed text-lg"
            variants={itemVariants}
          >
            A proactive and versatile engineering student at Guru Nanak Dev University (B.Tech in CSE, 2021–2025), 
            with a solid foundation in software development and a strong inclination towards backend engineering, 
            web development, and data visualization.
          </motion.p>
          
          <motion.p 
            className="text-gray-600 leading-relaxed text-lg"
            variants={itemVariants}
          >
            Experienced in freelance web development, technical consulting, and handling multiple full-cycle projects. 
            I'm currently working as a Sales Engineer Intern at WellnessZ, where I introduced a new technical 
            coordination workflow to streamline collaboration between the Sales and CSM teams — demonstrating 
            leadership, initiative, and systems thinking.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Education Journey</h3>
          <div className="space-y-12">
            <EducationCard
              icon={GraduationCap}
              school="Guru Nanak Dev University, Amritsar"
              degree="BTech CSE"
              year="2021–2025"
            />
            <EducationCard
              icon={Award}
              school="Madhav Vidya Niketan, Amritsar"
              degree="12th Standard"
              year="2019–2021"
            />
            <EducationCard
              icon={BookOpen}
              school="GD Goenka Public School"
              degree="10th Standard"
              year="2017–2019"
              isLast
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;