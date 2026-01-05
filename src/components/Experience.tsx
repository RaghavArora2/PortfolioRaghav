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
      title: "Operations Engineer",
      company: "WellnessZ",
      date: "July 2024 – Present | Noida, Uttar Pradesh, India",
      description: [
        "Manage DevOps for company applications, including CI/CD pipelines, deployment processes, and environment configuration",
        "Perform daily debugging, testing, bug tracking, and issue resolution to ensure app reliability and stability",
        "Support application development cycles with backend coordination and technical troubleshooting",
        "Oversee internal operations across all teams, ensuring streamlined workflows and accountability"
      ]
    },
    {
      icon: BriefcaseIcon,
      title: "Sales Engineer",
      company: "WellnessZ",
      date: "January 2024 – July 2024 | Punjab, India",
      description: [
        "Responsible for sales activities, including cold calling, product demonstrations, and customer success management (CSM)",
        "Engaging with potential clients to drive product adoption and ensure a seamless customer experience"
      ]
    },
    {
      icon: Code,
      title: "Freelance Web Developer",
      company: "Self-Employed",
      date: "January 2023 – Present | Remote",
      description: [
        "Developed and maintained websites for various clients using HTML, CSS, JavaScript, React, WordPress, and Wix",
        "Managed multiple projects simultaneously, ensuring timely delivery and client satisfaction",
        "Designed and implemented backend solutions using Spring Boot and Flask, integrating databases like MySQL",
        "Collaborated with clients to gather requirements, provide updates, and implement feedback",
        "Gained experience in cybersecurity through projects involving Kali Linux, performing passive reconnaissance",
        "Demonstrated ability to deliver high-quality work under tight deadlines, often completing projects within a day"
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