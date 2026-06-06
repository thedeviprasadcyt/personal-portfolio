import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 3,
    role: "Summer Intern",
    company: "OKCL",
    period: "2026",
    description: "Gaining practical experience in network security, vulnerability assessment, security monitoring, and cybersecurity best practices through real-world projects. 🚀",
  },
  {
    id: 1,
    role: "Freelance Penetration Tester",
    company: "Self-Employed",
    period: "2025",
    description: "Conducting independent network and web application vulnerability assessments. Identifying security flaws like SQLi, XSS, and broken access controls. Producing detailed remediation reports for clients.",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Tech Solutions",
    period: "2023 - 2024",
    description: "Developed and maintained full-stack web applications using React and Node.js. Implemented secure RESTful APIs and integrated third-party payment gateways. Enhanced UI/UX for internal tools.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10 w-full mb-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            Service <span className="font-mono text-accent-blue dark:text-accent-neon">Record</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 rounded-full hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-accent-blue dark:bg-accent-neon md:-translate-x-1/2 border-4 border-white dark:border-background-dark z-10 hidden md:block shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
                
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-card p-6 md:p-8 rounded-2xl hover:neon-border-blue dark:hover:neon-border-purple transition-all duration-300 relative group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent-blue dark:bg-accent-purple opacity-10 rounded-bl-[100px] transition-all group-hover:opacity-30"></div>
                    <span className="text-sm font-mono text-accent-blue dark:text-accent-neon mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-md font-semibold text-gray-700 dark:text-gray-400 mb-4">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
