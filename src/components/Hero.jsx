import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-mono mb-4">
            Hello, Identity Established as
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
            Deviprasad Muduli
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold mb-8 h-16 md:h-12">
            <span className="text-accent-blue dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent-neon dark:to-accent-purple">
              <Typewriter
                words={[
                  'Cyber Security Learner',
                  'Ethical Hacking Enthusiast',
                  'Future Penetration Tester',
                  'Tech Enthusiast'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <motion.a
              href="/Deviprasad_Muduli_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Initiate Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
