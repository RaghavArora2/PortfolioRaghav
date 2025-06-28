import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Video, BarChart3, Bitcoin, X, Star, ArrowRight, Sparkles, Zap } from 'lucide-react';

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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.03 }}
        className="group cursor-pointer relative"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all overflow-hidden border border-white/10">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          />

          {details.featured && (
            <motion.div 
              className="absolute top-4 right-4 z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-3 h-3" />
                </motion.div>
                Featured
              </div>
            </motion.div>
          )}

          <div className="relative h-48 overflow-hidden">
            <motion.img 
              src={details.image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating tech icon */}
            <motion.div 
              className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-5 h-5 text-purple-400" />
            </motion.div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 4 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${30 + i * 15}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <motion.h3 
                className="text-xl font-bold text-white mb-2"
                whileHover={{ x: 5 }}
              >
                {title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {tech.split(',').slice(0, 3).map((t, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-xs border border-white/20"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t.trim()}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 p-6">
            <ul className="space-y-2 mb-6">
              {description.slice(0, 2).map((item, index) => (
                <motion.li 
                  key={index} 
                  className="text-white/70 text-sm flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                {details.demoUrl && (
                  <motion.a
                    href={details.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.05, x: 3 }}
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
                  className="flex items-center gap-2 text-white/60 hover:text-white/80 text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={14} />
                  Code
                </motion.a>
              </div>
              
              <motion.div 
                className="flex items-center gap-2 text-purple-400 text-sm font-medium"
                whileHover={{ x: 5 }}
              >
                Details
                <ArrowRight size={14} />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="relative bg-gradient-to-br from-gray-900/98 via-purple-900/95 to-black/98 backdrop-blur-2xl rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, 30, -30, 0],
                      y: [0, -30, 30, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 6 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Close button */}
              <motion.button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 z-20 p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all border border-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Header image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <motion.img 
                  src={details.image} 
                  alt={title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6">
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {title}
                  </motion.h3>
                  {details.featured && (
                    <motion.div 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Featured Project
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="relative z-10 p-8">
                {/* Tech stack */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {details.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {details.description.map((desc, i) => (
                    <motion.p 
                      key={i} 
                      className="text-white/80 leading-relaxed text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      {desc}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Action buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {details.demoUrl && (
                    <motion.a
                      href={details.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all relative overflow-hidden"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex items-center gap-3">
                        <ExternalLink size={18} />
                        Live Demo
                        <Zap className="w-4 h-4" />
                      </div>
                    </motion.a>
                  )}
                  <motion.a
                    href={details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Source Code
                  </motion.a>
                </motion.div>
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
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
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
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
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
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"
      }
    }
  ];

  return (
    <section className="py-20 bg-transparent px-4 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-white/90 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="inline-flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <Code className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.span>
          </motion.h2>
          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.p
            className="text-white/70 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Showcasing innovative solutions across the digital universe with cutting-edge technologies
          </motion.p>
        </motion.div>
        
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;