import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GitHubCalendar from 'react-github-calendar';
import { Github, Star, GitFork, Code2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const GitHubStats = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const StatCard = ({ icon: Icon, title, value, description }: {
    icon: any;
    title: string;
    value: string;
    description: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="p-2 sm:p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
        </div>
        <div>
          <h4 className="font-bold text-white/90 dark:text-white/90 text-sm sm:text-base">{title}</h4>
          <p className="text-xl sm:text-2xl font-bold text-purple-400">{value}</p>
        </div>
      </div>
      <p className="text-white/70 dark:text-white/70 text-xs sm:text-sm">{description}</p>
    </motion.div>
  );

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 bg-transparent px-4"
      id="github-stats"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 dark:text-white/90 mb-4">
            <Github className="inline-block mr-3 text-purple-400" />
            GitHub Activity
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
          <p className="text-white/70 dark:text-white/70 text-sm sm:text-base lg:text-lg px-4">My coding journey across the digital cosmos</p>
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
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
        </div>

        {/* GitHub Contribution Calendar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-white/10 mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white/90 dark:text-white/90 mb-4 sm:mb-6 text-center">
            Contribution Activity
          </h3>
          <div className="flex justify-center overflow-x-auto p-4">
            <div style={{ minWidth: '100%', display: 'flex', justifyContent: 'center' }}>
              <GitHubCalendar
                username="RaghavArora2"
                colorScheme="dark"
                fontSize={14}
                blockSize={14}
                blockMargin={5}
                weekStart={1}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                style={{ 
                  color: '#ffffff',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* GitHub Profile Stats Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-white/10"
          >
            <h3 className="text-lg font-bold text-white/90 mb-3 text-center">GitHub Statistics</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=RaghavArora2&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=a855f7&text_color=ffffff&include_all_commits=true&count_private=true&cache_seconds=3600`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://github-readme-stats.vercel.app/api?username=RaghavArora2&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&title_color=a855f7&icon_color=a855f7&text_color=ffffff`;
              }}
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-white/10"
          >
            <h3 className="text-lg font-bold text-white/90 mb-3 text-center">Top Languages</h3>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=RaghavArora2&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=ffffff&langs_count=8&cache_seconds=3600`}
              alt="Top Languages"
              className="w-full rounded-lg"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=RaghavArora2&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&title_color=a855f7&text_color=ffffff`;
              }}
            />
          </motion.div>
        </div>
        
        {/* Additional GitHub Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-white/5 dark:bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-white/10"
        >
          <h3 className="text-lg font-bold text-white/90 mb-3 text-center">GitHub Streak</h3>
          <img
            src={`https://github-readme-streak-stats.demolab.com/?user=RaghavArora2&theme=radical&hide_border=true&background=0d1117&ring=a855f7&fire=a855f7&currStreakLabel=a855f7&cache_seconds=3600`}
            alt="GitHub Streak"
            className="w-full rounded-lg"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;