import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    school: "GITA Autonomous College",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 - 2028",
    description: "Focusing on advanced algorithms, data structures, full-stack web development, and cyber security principles.",
  },
  {
    id: 2,
    school: "SOA University",
    degree: "Higher Secondary Education",
    period: "2022 - 2024",
    description: "Completed higher secondary education with a strong foundation in Mathematics and Computer Science.",
  }
];

const Education = () => {
  return (
    <section className="py-20 relative z-10 w-full mb-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-purple dark:after:bg-accent-purple after:bottom-0 after:left-1/4">
            Academic <span className="font-mono text-accent-blue dark:text-accent-neon">Training</span>
          </h2>
        </motion.div>

        <div className="relative border-l-4 border-gray-200 dark:border-gray-800 ml-4 md:ml-8 pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[45px] top-6 w-6 h-6 rounded-full bg-accent-blue dark:bg-accent-purple border-4 border-white dark:border-background-dark z-10 shadow-[0_0_10px_rgba(188,19,254,0.8)]"></div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl hover:neon-border-purple transition-all duration-300">
                <span className="text-sm font-mono text-accent-blue dark:text-accent-purple mb-2 block font-semibold">{edu.period}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">{edu.school}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
