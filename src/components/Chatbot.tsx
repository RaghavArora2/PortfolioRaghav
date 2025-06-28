import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Brain } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("🚀 Hey there! I'm Raghav's AI assistant. I can help you learn more about his skills, experience, and projects. What would you like to know?");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return "📄 You can download Raghav's resume here: https://drive.google.com/file/d/1LKfT_xnzJSdKsMJ5BM9KyshecP0VzaTL/view?usp=sharing\n\nIt includes all his technical skills, work experience, and project details!";
    }

    if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
      return "💻 Raghav's Technical Skills:\n\n🔹 Programming: Java, JavaScript\n🔹 Web Tech: HTML, CSS, React, Spring Boot\n🔹 Database: MySQL, MongoDB\n🔹 Tools: Docker, AWS, Postman, Power BI\n🔹 Soft Skills: Technical Sales, Leadership, Problem Solving\n\nHe's particularly strong in full-stack development with Spring Boot and React!";
    }

    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return "💼 Raghav's Work Experience:\n\n🔹 Sales Engineer Intern at WellnessZ (Jan 2025 - Present)\n🔹 Freelance Web Developer (Jan 2023 - Present)\n\nHe's served 100+ clients and delivered projects that increased client revenue by 30-40%. Currently working on technical coordination workflows at WellnessZ!";
    }

    if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return "🚀 Featured Projects:\n\n🔹 Video Chat App - Spring Boot + ZegoCloud\n🔹 Cryptocurrency Trading Platform - React + Spring Boot\n🔹 Market Dashboard - Power BI + Python\n🔹 ShambhalaTrade - Advanced crypto platform\n🔹 AvedhaneAnuchintan - Therapy platform\n\nAll projects showcase full-stack development skills with modern tech stacks!";
    }

    if (input.includes('contact') || input.includes('reach') || input.includes('connect')) {
      return "📞 Get in Touch with Raghav:\n\n🔹 Email: raghavarora419@gmail.com\n🔹 Phone: +91 9815919243\n🔹 LinkedIn: linkedin.com/in/raghav-arora2003\n🔹 GitHub: github.com/RaghavArora2\n🔹 WhatsApp: Click the green button on the left!\n\nHe's always open to new opportunities and collaborations! 🌟";
    }

    if (input.includes('education') || input.includes('university') || input.includes('degree')) {
      return "🎓 Education Background:\n\n🔹 BTech Computer Science Engineering\n🔹 Guru Nanak Dev University, Amritsar\n🔹 2021-2025 | CGPA: 7.4\n\nAlso certified in SQL, Java (HackerRank), and Data Visualization with Power BI!";
    }

    if (input.includes('location') || input.includes('where') || input.includes('based')) {
      return "📍 Raghav is based in Amritsar, Punjab, India. He's open to remote work opportunities and has experience working with international clients through his freelancing career!";
    }

    if (input.includes('available') || input.includes('hire') || input.includes('opportunity')) {
      return "✅ Yes! Raghav is actively looking for new opportunities, especially in:\n\n🔹 Full Stack Development\n🔹 Backend Engineering\n🔹 Spring Boot Development\n🔹 Technical Sales Engineering\n\nHe's passionate about creating impactful digital solutions and ready to contribute to innovative projects!";
    }

    const defaultResponses = [
      "🤔 I'd love to help! You can ask me about:\n\n🔹 Raghav's skills and technologies\n🔹 His work experience and projects\n🔹 How to download his resume\n🔹 Contact information\n🔹 Education background\n🔹 Availability for opportunities",
      "🚀 Try asking me something like:\n• 'What are Raghav's skills?'\n• 'Where can I find his resume?'\n• 'Tell me about his projects'\n• 'How can I contact him?'\n• 'Is he available for work?'",
      "✨ I'm here to help you learn more about Raghav! Feel free to ask about his technical expertise, projects, or how to get in touch with him."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addBotMessage(response);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are Raghav's skills?",
    "Show me his resume",
    "Tell me about his projects",
    "How can I contact him?",
    "Is he available for work?"
  ];

  return (
    <>
      {/* Chatbot Toggle Button - Positioned to avoid overlap */}
      <motion.div
        className="fixed bottom-6 right-20 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-xl border border-white/20">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Brain className="w-5 h-5 text-white" />
              )}
            </motion.div>
          </div>
          
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900/95 backdrop-blur-xl text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl border border-purple-500/30 pointer-events-none">
            <div className="font-semibold text-purple-400">Ask me about Raghav!</div>
            <div className="absolute top-full right-3 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </motion.button>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900/98 backdrop-blur-2xl rounded-2xl shadow-2xl border border-purple-500/30 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white">Raghav's AI Assistant</h3>
                <p className="text-xs text-white/80">Ask me anything about Raghav!</p>
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-transparent to-purple-900/10">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm border border-purple-500/30">
                      <Bot className="w-3 h-3 text-purple-400" />
                    </div>
                  )}
                  
                  <div className={`max-w-[75%] p-2 rounded-lg text-sm backdrop-blur-sm ${
                    message.isBot 
                      ? 'bg-white/10 text-white/90 rounded-bl-sm border border-white/10' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-sm shadow-lg'
                  }`}>
                    <div className="whitespace-pre-line">{message.text}</div>
                  </div>

                  {!message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 backdrop-blur-sm border border-purple-500/30">
                    <Bot className="w-3 h-3 text-purple-400" />
                  </div>
                  <div className="bg-white/10 p-2 rounded-lg rounded-bl-sm backdrop-blur-sm border border-white/10">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-white/60 mb-2 font-medium">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        addUserMessage(question);
                        setIsTyping(true);
                        setTimeout(() => {
                          const response = getBotResponse(question);
                          addBotMessage(response);
                          setIsTyping(false);
                        }, 800);
                      }}
                      className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs hover:from-purple-500/30 hover:to-pink-500/30 transition-all backdrop-blur-sm border border-purple-500/30"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Raghav..."
                  className="flex-1 bg-white/10 text-white placeholder-white/50 px-3 py-2 rounded-lg border border-white/20 focus:border-purple-400 focus:outline-none text-sm backdrop-blur-sm transition-all focus:bg-white/15"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;