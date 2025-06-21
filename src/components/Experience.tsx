import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, Code, Star } from 'lucide-react';

const ExperienceCard = ({ title, company, date, description, icon: Icon }: {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: any;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all border border-white/10"
  >
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30 self-start">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-white/90">{title}</h3>
        <p className="text-purple-400 font-medium text-sm sm:text-base">{company}</p>
        <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">{date}</p>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-white/70 text-xs sm:text-sm flex items-start gap-2">
              <Star className="w-3 h-3 text-purple-400 mt-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      icon: BriefcaseIcon,
      title: "Sales Engineer Intern",
      company: "WellnessZ",
      date: "Jan 2025 – Present | Amritsar, Punjab",
      description: [
        "Led development of new internal workflow improving Sales-CSM coordination",
        "Technical bridge for product architecture and deployment consultation",
        "Created automated systems for lead and customer touchpoint tracking",
        "Conducted technical product demos emphasizing backend capabilities"
      ]
    },
    {
      icon: Code,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "Jan 2023 – Present | Remote",
      description: [
        "Delivered 100+ high-quality websites/web apps across industries",
        "Increased client conversions by 30-40% through impactful websites",
        "Full-stack development using React, Spring Boot, MySQL, and more",
        "Managed end-to-end development cycles and client relationships",
        "Completed urgent projects within 24-48 hours consistently"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-transparent px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4" />
        </motion.div>
        
        <div
          ref={ref}
          className="space-y-6 sm:space-y-8"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;