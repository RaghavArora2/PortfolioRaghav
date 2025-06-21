import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Video, BarChart3, Bitcoin, X, Star, ArrowRight } from 'lucide-react';

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all overflow-hidden border border-white/10 relative">
          {details.featured && (
            <div className="absolute top-3 right-3 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3" />
                Featured
              </div>
            </div>
          )}

          <div className="relative h-32 sm:h-40 overflow-hidden">
            <img 
              src={details.image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            <div className="absolute top-3 left-3 p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{title}</h3>
              <div className="flex flex-wrap gap-1">
                {tech.split(',').slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/10 text-white/90 rounded text-xs"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <ul className="space-y-1 mb-3 sm:mb-4">
              {description.slice(0, 2).map((item, index) => (
                <li key={index} className="text-white/70 dark:text-white/70 text-xs sm:text-sm flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 sm:gap-3">
                {details.demoUrl && (
                  <a
                    href={details.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 text-xs sm:text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={12} />
                    Demo
                  </a>
                )}
                <a
                  href={details.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/60 hover:text-white/80 text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={12} />
                  Code
                </a>
              </div>
              
              <div className="flex items-center gap-1 text-purple-400 text-xs sm:text-sm">
                Details
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-gray-900/98 to-purple-900/98 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={details.image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:left-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
                  {details.featured && (
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      <Star className="w-3 h-3" />
                      Featured Project
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {details.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  {details.description.map((desc, i) => (
                    <p key={i} className="text-white/80 leading-relaxed text-sm sm:text-base">{desc}</p>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {details.demoUrl && (
                    <a
                      href={details.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20 text-sm sm:text-base"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
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
    <section className="py-12 sm:py-16 bg-transparent px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 dark:text-white/90 mb-4">
            <Code className="inline-block mr-3 text-purple-400" />
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
          <p className="text-white/70 dark:text-white/70 text-sm sm:text-base lg:text-lg px-4">
            Showcasing innovative solutions across the digital universe
          </p>
        </motion.div>
        
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;