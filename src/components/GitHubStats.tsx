import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubCalendar from 'react-github-calendar';
import { Github, Star, GitFork, Code2 } from 'lucide-react';

const GitHubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const StatCard = ({ icon: Icon, title, value, description }: {
    icon: any;
    title: string;
    value: string;
    description: string;
  }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group border border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-gray-200">{title}</h4>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 px-4 relative overflow-hidden"
      id="github-stats"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="inline-block mr-3 text-blue-600 dark:text-blue-400" />
            GitHub Activity
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">My coding journey and contributions</p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <StatCard
            icon={Code2}
            title="Public Repos"
            value="25+"
            description="Open source projects and personal work"
          />
          <StatCard
            icon={Star}
            title="Total Stars"
            value="50+"
            description="Stars received across repositories"
          />
          <StatCard
            icon={GitFork}
            title="Contributions"
            value="500+"
            description="Commits in the last year"
          />
        </motion.div>

        {/* GitHub Contribution Calendar */}
        <motion.div 
          variants={itemVariants}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Contribution Activity
          </h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="RaghavArora2"
              colorScheme="light"
              fontSize={12}
              blockSize={12}
              theme={{
                light: ['#f0f9ff', '#bfdbfe', '#60a5fa', '#3b82f6', '#1d4ed8'],
                dark: ['#1e293b', '#334155', '#475569', '#64748b', '#94a3b8'],
              }}
            />
          </div>
        </motion.div>

        {/* GitHub Profile Stats Images */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=RaghavArora2&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=3b82f6&icon_color=3b82f6&text_color=374151"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=RaghavArora2&layout=compact&theme=default&hide_border=true&bg_color=ffffff&title_color=3b82f6&text_color=374151"
              alt="Top Languages"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GitHubStats;