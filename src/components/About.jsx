import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,
	max:            15,
	perspective:    1000,
	scale:          1.02,
	speed:          1000,
	transition:     true,
	axis:           null,
	reset:          true,
	easing:         "cubic-bezier(.03,.98,.52,.99)",
}

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            System Analysis: <span className="font-mono text-accent-blue dark:text-accent-neon">About Me</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <Tilt options={defaultOptions} className="w-full max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden group"
            >
              {/* Neon accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue dark:bg-accent-neon opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-inter z-10 relative">
                I am <span className="font-bold text-gray-900 dark:text-white">Deviprasad Muduli</span>, a passionate technologist and cyber security enthusiast on a mission to build secure, robust, and innovative digital solutions. 
                <br /><br />
                Currently diving deep into the realms of <span className="text-accent-blue dark:text-accent-neon">Ethical Hacking</span> and <span className="dark:text-accent-purple text-accent-blue">Web Development</span>, I blend creative problem-solving with rigorous security principles. 
                My goal is to become an elite Penetration Tester, ensuring the digital frontier remains safe against evolving threats.
                <br /><br />
                Whether hunting for vulnerabilities or writing elegant React code, I treat every project as a critical mission. Welcome to my operational hub.
              </p>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
