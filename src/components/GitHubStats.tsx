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
      className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all group border border-white/10 dark:border-white/10"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-purple-500/20 dark:bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors border border-purple-500/30">
          <Icon className="w-6 h-6 text-purple-400 dark:text-purple-400" />
        </div>
        <div>
          <h4 className="font-bold text-white/90 dark:text-white/90">{title}</h4>
          <p className="text-2xl font-bold text-purple-400 dark:text-purple-400">{value}</p>
        </div>
      </div>
      <p className="text-white/70 dark:text-white/70 text-sm">{description}</p>
    </motion.div>
  );

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-transparent px-4 relative overflow-hidden"
      id="github-stats"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white/90 dark:text-white/90 mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="inline-block mr-3 text-purple-400 dark:text-purple-400" />
            GitHub Activity
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-white/70 dark:text-white/70 text-lg">My coding journey across the digital cosmos</p>
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
          className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10 dark:border-white/10"
        >
          <h3 className="text-2xl font-bold text-white/90 dark:text-white/90 mb-6 text-center">
            Contribution Activity
          </h3>
          <div className="flex justify-center">
            <GitHubCalendar
              username="RaghavArora2"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              theme={{
                dark: ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#7209b7'],
                light: ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#7209b7'],
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
            className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 dark:border-white/10"
          >
            <img
              src="https://github-readme-stats.vercel.app/api?username=RaghavArora2&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=a855f7&text_color=ffffff"
              alt="GitHub Stats"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 dark:border-white/10"
          >
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=RaghavArora2&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=ffffff"
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