import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certs = [
  { id: 4, name: "Google Data Analytics Professional Certificate", issuer: "Coursera", date: "2026" },
  { id: 1, name: "Google CyberSecurity Professional Certificate", issuer: "Coursera", date: "2024" },
  { id: 2, name: "IBM Full Stack Software Developer", issuer: "Coursera", date: "2024" },
  { id: 3, name: "Offensive Security Certified Professional (OSCP) preparation", issuer: "Self", date: "Ongoing" },
];

const Certifications = () => {
  return (
    <section className="py-20 relative z-10 w-full mb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            Official <span className="font-mono text-accent-blue dark:text-accent-neon">Clearances</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl border-t-2 border-t-transparent hover:border-t-accent-neon hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all flex flex-col items-start gap-4 group"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-accent-blue dark:text-accent-neon group-hover:rotate-12 transition-transform">
                <FaCertificate size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                <div className="flex justify-between items-center w-full">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                  <span className="text-xs font-mono text-accent-blue dark:text-accent-purple">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
