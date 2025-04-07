import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Video, BarChart3, Bitcoin } from 'lucide-react';

interface ProjectDetails {
  title: string;
  description: string[];
  tech: string[];
  demoUrl?: string;
  githubUrl: string;
  image: string;
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
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
        className="relative"
        onClick={() => setIsExpanded(true)}
      >
        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={details.image} 
              alt={title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.split(',').map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                >
                  {t.trim()}
                </span>
              ))}
            </div>

            <ul className="space-y-2 mb-4">
              {description.map((item, index) => (
                <li key={index} className="text-gray-600 text-sm">• {item}</li>
              ))}
            </ul>

            <div className="flex gap-3">
              {details.demoUrl && (
                <a
                  href={details.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <a
                href={details.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Source Code
              </a>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={details.image} 
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {details.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-4 mb-6">
                  {details.description.map((desc, i) => (
                    <p key={i} className="text-gray-600">{desc}</p>
                  ))}
                </div>
                <div className="flex gap-4">
                  {details.demoUrl && (
                    <a
                      href={details.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Live Demo
                    </a>
                  )}
                  <a
                    href={details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    View Source Code
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
          "Real-time video calling application built with Spring Boot",
          "Uses ZegoCloud for reliable video and audio streaming",
          "Supports multiple participants and includes chat functionality",
          "Implements WebRTC for peer-to-peer communication"
        ],
        tech: ["Spring Boot", "ZegoCloud", "WebRTC", "WebSocket"],
        githubUrl: "https://github.com/RaghavArora2/VideoChatApplication",
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
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
          "Comprehensive financial dashboard for tracking ETFs, cryptocurrencies, and stocks",
          "Integrates Power BI with Python scripts for data processing",
          "Features real-time market data visualization and analysis tools",
          "Custom DAX measures for financial calculations"
        ],
        tech: ["Power BI", "Python", "Financial APIs", "DAX"],
        githubUrl: "https://github.com/RaghavArora2/Market-Dashboard-Project-in-Power-BI",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
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
          "Professional-grade cryptocurrency trading platform",
          "Real-time order execution and market data streaming",
          "Advanced technical analysis tools and custom indicators",
          "Portfolio management and trade history tracking"
        ],
        tech: ["React", "Node.js", "WebSocket", "Trading APIs"],
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
          "Modern therapy and counseling website with React and TypeScript",
          "Intuitive appointment scheduling and client management",
          "Fully responsive design with accessibility features",
          "Secure patient data handling and communication"
        ],
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
          "Streamlined cryptocurrency trading platform",
          "Real-time price updates and market data visualization",
          "Intuitive trading interface for beginners",
          "Basic portfolio tracking and analysis tools"
        ],
        tech: ["TypeScript", "React", "Tailwind CSS", "CryptoAPI"],
        demoUrl: "https://cryptotradeplat.netlify.app/",
        githubUrl: "https://github.com/RaghavArora2/CryptocurrencyPlatform",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Projects
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
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