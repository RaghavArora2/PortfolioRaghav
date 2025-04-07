import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, Code } from 'lucide-react';

const ExperienceCard = ({ title, company, date, description, icon: Icon }: {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: any;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"
      initial={false}
      animate={{ opacity: [0, 0.1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-blue-600 font-medium">{company}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
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
    <section className="py-20 bg-white px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="h-1 w-20 bg-blue-600 rounded mb-12" />
        </motion.div>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;