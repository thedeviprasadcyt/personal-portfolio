import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/deviprasadmuduli@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Message from Secure Comm-Link"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 w-full mb-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white pb-2 inline-block relative after:content-[''] after:absolute after:w-1/2 after:h-1 after:bg-accent-blue dark:after:bg-accent-neon after:bottom-0 after:left-1/4">
            Get in Touch – <span className="font-mono text-accent-blue dark:text-accent-neon">Let's Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 font-mono">Establish a direct connection for operations or inquiries.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-2xl flex flex-col gap-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-accent-blue dark:focus:border-accent-neon outline-none py-2 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-600 focus:bg-white/5 dark:focus:bg-black/20 px-2 rounded-t-lg"
                  placeholder="What’s your good name?"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="bg-transparent border-b-2 border-gray-300 dark:border-gray-700 focus:border-accent-blue dark:focus:border-accent-neon outline-none py-2 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-600 focus:bg-white/5 dark:focus:bg-black/20 px-2 rounded-t-lg"
                  placeholder="What's your email address?"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="bg-transparent border-2 border-gray-300 dark:border-gray-700 focus:border-accent-blue dark:focus:border-accent-neon outline-none p-4 text-gray-900 dark:text-white transition-colors placeholder-gray-400 dark:placeholder-gray-600 rounded-lg resize-none focus:bg-white/5 dark:focus:bg-black/20"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 btn-primary flex items-center justify-center gap-3 self-start md:self-end ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="font-mono animate-pulse">Transmitting...</span>
              ) : (
                <>
                  <span className="font-mono">Send Data</span>
                  <FaPaperPlane />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-10 left-10 text-green-500 font-mono font-bold"
              >
                Transmission Successful.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-10 left-10 text-red-500 font-mono font-bold"
              >
                Transmission Failed. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
