import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaLinux, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { SiTailwindcss, SiKalilinux, SiWireshark, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: <FaReact />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Python', icon: <FaPython />, color: 'text-blue-400' },
  { name: 'Linux OS', icon: <FaLinux />, color: 'text-gray-800 dark:text-white' },
  { name: 'Networking', icon: <FaNetworkWired />, color: 'text-purple-500' },
  { name: 'Cyber Security', icon: <FaShieldAlt />, color: 'text-red-500' },
  { name: 'Kali Linux', icon: <SiKalilinux />, color: 'text-gray-600 dark:text-blue-300' },
  { name: 'Wireshark', icon: <SiWireshark />, color: 'text-blue-600' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative z-10 w-full mb-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            Combat <span className="font-mono text-accent-blue dark:text-accent-neon">Arsenal</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card flex flex-col items-center justify-center p-6 rounded-xl hover:neon-border-blue dark:hover:neon-border-purple transition-all duration-300 group"
            >
              <div className={`text-4xl md:text-5xl mb-4 group-hover:animate-bounce ${skill.color} drop-shadow-md`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold font-mono text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
