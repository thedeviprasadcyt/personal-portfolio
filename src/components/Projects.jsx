import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Personal Expense Tracker',
    category: 'Web',
    description: 'A comprehensive full-stack application to track, manage, and analyze personal finances. Includes secure JWT authentication, multi-account support, and intuitive dashboard analytics.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'MySQL'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60' // Placeholder
  },
  {
    id: 2,
    title: 'AI CrowdShield',
    category: 'AI',
    description: 'An advanced AI-powered security tool designed to detect anomalies and potential threats in large crowd environments using real-time computer vision models.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'React'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60' // Placeholder
  },
  {
    id: 3,
    title: 'Vulnerability Scanner',
    category: 'Tools',
    description: 'A custom Python script utility that automatically scans target IP ranges for common CVEs and open ports, generating a comprehensive security report.',
    tech: ['Python', 'Nmap', 'Socket', 'Argparse'],
    github: '#',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60' // Placeholder
  }
];

const categories = ['All', 'Web', 'AI', 'Tools'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);

  const filteredProjects = projectsData.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 relative z-10 w-full mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            Mission <span className="font-mono text-accent-blue dark:text-accent-neon">Logs</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase transition-all duration-300 ${
                filter === cat 
                  ? 'bg-accent-blue dark:bg-accent-neon text-white dark:text-background-dark shadow-[0_0_15px_rgba(0,243,255,0.5)]' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Gallery */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-10 pt-4 snap-x snap-mandatory hide-scroll-bar space-x-6 sm:space-x-8 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[450px]"
              >
                <Tilt options={{ max: 10, scale: 1.02 }} className="h-full">
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="glass-card h-full rounded-2xl overflow-hidden cursor-pointer group flex flex-col border border-transparent hover:border-gray-300 dark:hover:border-accent-neon transition-all"
                  >
                    <div className="h-48 md:h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-xs font-mono text-accent-blue dark:text-accent-neon mb-2 uppercase tracking-wider">{project.category}</div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="text-xs py-1 px-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-xs py-1 px-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Profile */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-accent-neon/30 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm font-mono text-accent-blue dark:text-accent-neon mb-1">{selectedProject.category}</div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  </div>
                  <div className="flex space-x-3">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:text-accent-blue dark:hover:text-accent-neon transition-colors text-gray-800 dark:text-gray-200">
                      <FaGithub size={20} />
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:text-accent-blue dark:hover:text-accent-neon transition-colors text-gray-800 dark:text-gray-200">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tech Stack Utilized:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
