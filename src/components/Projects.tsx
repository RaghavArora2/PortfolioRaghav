import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Video, BarChart3, Bitcoin, X, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectDetails {
  title: string;
  description: string[];
  tech: string[];
  demoUrl?: string;
  githubUrl: string;
  image: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  icon: Icon, 
  title, 
  tech, 
  description,
  details
}: {
  icon: any;
  title: string;
  tech: string;
  description: string[];
  details: ProjectDetails;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative group cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden relative border border-gray-200/20 dark:border-gray-700/20">
          {details.featured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </div>
            </div>
          )}

          <div className="relative h-48 overflow-hidden">
            <motion.img 
              src={details.image} 
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Floating icon */}
            <motion.div 
              className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </motion.div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.split(',').slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                  >
                    {t.trim()}
                  </span>
                ))}
                {tech.split(',').length > 3 && (
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                    +{tech.split(',').length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-2 mb-6">
              {description.slice(0, 2).map((item, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                {details.demoUrl && (
                  <motion.a
                    href={details.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </motion.a>
                )}
                <motion.a
                  href={details.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={14} />
                  Code
                </motion.a>
              </div>
              
              <motion.div
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                View Details
                <ArrowRight size={14} />
              </motion.div>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            initial={false}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 overflow-hidden">
                <img 
                  src={details.image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                  {details.featured && (
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      <Sparkles className="w-4 h-4" />
                      Featured Project
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {details.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  {details.description.map((desc, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                  ))}
                </div>

                <div className="flex gap-4">
                  {details.demoUrl && (
                    <motion.a
                      href={details.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      View Live Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
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

  const projects = [
    {
      icon: Video,
      title: "Video Chat App",
      tech: "Spring Boot, ZegoCloud, WebRTC",
      description: [
        "Real-time video calling application with Spring Boot",
        "Integrated ZegoCloud for reliable streaming",
        "Multiple participant support and chat features"
      ],
      details: {
        title: "Video Chat App",
        description: [
          "A sophisticated real-time video calling application built with Spring Boot backend architecture, designed to handle multiple concurrent video sessions with high performance and reliability.",
          "Integrated ZegoCloud SDK for professional-grade video and audio streaming capabilities, ensuring crystal-clear communication across different network conditions.",
          "Features include multi-participant video calls, real-time text chat, screen sharing capabilities, and robust connection management with automatic reconnection.",
          "Implemented WebRTC protocols for peer-to-peer communication, reducing latency and improving overall user experience during video calls."
        ],
        tech: ["Spring Boot", "ZegoCloud SDK", "WebRTC", "WebSocket", "Java", "REST API"],
        githubUrl: "https://github.com/RaghavArora2/VideoChatApplication",
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80",
        featured: true
      }
    },
    {
      icon: BarChart3,
      title: "Market Dashboard",
      tech: "Power BI, Python, Financial APIs",
      description: [
        "Comprehensive financial market dashboard",
        "Real-time data visualization for ETFs and stocks",
        "Advanced analytics and reporting features"
      ],
      details: {
        title: "Market Dashboard in Power BI",
        description: [
          "A comprehensive financial analytics dashboard that provides real-time insights into ETFs, cryptocurrencies, and stock market performance with interactive visualizations.",
          "Seamlessly integrates Power BI with Python scripts for advanced data processing, enabling complex financial calculations and predictive analytics.",
          "Features dynamic charts, trend analysis, portfolio performance tracking, and customizable alerts for market movements and investment opportunities.",
          "Utilizes custom DAX measures and calculated columns for sophisticated financial metrics including ROI, volatility analysis, and risk assessment."
        ],
        tech: ["Power BI", "Python", "Financial APIs", "DAX", "Data Modeling", "ETL"],
        githubUrl: "https://github.com/RaghavArora2/Market-Dashboard-Project-in-Power-BI",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        featured: true
      }
    },
    {
      icon: Bitcoin,
      title: "ShambhalaTrade",
      tech: "React, Node.js, WebSocket",
      description: [
        "Advanced cryptocurrency trading platform",
        "Real-time market data and order execution",
        "Technical analysis tools and indicators"
      ],
      details: {
        title: "ShambhalaTrade",
        description: [
          "A professional-grade cryptocurrency trading platform built with modern web technologies, offering institutional-level trading capabilities for retail investors.",
          "Features real-time order execution engine with WebSocket connections for instant market data updates and lightning-fast trade processing.",
          "Includes comprehensive technical analysis suite with 20+ indicators, customizable charts, and advanced order types including stop-loss and take-profit.",
          "Implements robust portfolio management system with detailed trade history, P&L tracking, and risk management tools for informed trading decisions."
        ],
        tech: ["React", "Node.js", "WebSocket", "Trading APIs", "Chart.js", "MongoDB"],
        githubUrl: "https://github.com/RaghavArora2/ShambhalaTrade",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
      }
    },
    {
      icon: Code,
      title: "AvedhaneAnuchintan",
      tech: "React, TypeScript, Tailwind CSS",
      description: [
        "Modern therapy and counseling platform",
        "Seamless appointment scheduling system",
        "Responsive and accessible design"
      ],
      details: {
        title: "AvedhaneAnuchintan",
        description: [
          "A modern, compassionate therapy and counseling platform designed to connect mental health professionals with clients seeking support and guidance.",
          "Features an intuitive appointment scheduling system with calendar integration, automated reminders, and flexible booking options for both therapists and clients.",
          "Built with accessibility-first design principles, ensuring the platform is usable by individuals with diverse needs and technical abilities.",
          "Implements secure patient data handling with HIPAA-compliant practices and encrypted communication channels for confidential therapeutic sessions."
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Calendar API", "Security"],
        demoUrl: "https://avedhaneanuchintan.netlify.app/",
        githubUrl: "https://github.com/RaghavArora2/AvedhaneAnuchintan",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
      }
    },
    {
      icon: Bitcoin,
      title: "CryptoTrading Platform",
      tech: "TypeScript, React, Tailwind CSS",
      description: [
        "Lightweight crypto trading interface",
        "Real-time market data visualization",
        "User-friendly trading experience"
      ],
      details: {
        title: "CryptoTrading Platform",
        description: [
          "A streamlined cryptocurrency trading platform designed specifically for beginners entering the crypto market, with an emphasis on simplicity and education.",
          "Provides real-time price updates and market data visualization through interactive charts and graphs, helping users understand market trends and patterns.",
          "Features an intuitive trading interface that guides new users through their first cryptocurrency purchases with helpful tooltips and educational content.",
          "Includes basic portfolio tracking tools and performance analytics to help users monitor their investments and learn from their trading decisions."
        ],
        tech: ["TypeScript", "React", "Tailwind CSS", "CryptoAPI", "Chart Libraries", "Responsive Design"],
        demoUrl: "https://cryptotradeplat.netlify.app/",
        githubUrl: "https://github.com/RaghavArora2/CryptocurrencyPlatform",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 px-4 relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="inline-block mr-3 text-blue-600 dark:text-blue-400" />
            Featured Projects
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;