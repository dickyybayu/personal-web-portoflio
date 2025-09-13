'use client'

import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { FadeInView } from '@/components/animations/fade-in-view'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { SectionProps, ContactForm } from '@/lib/types'
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com/DickyyBayu', color: 'hover:text-gray-400' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/dickybayu/', color: 'hover:text-blue-400' },
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/dickyybayu/', color: 'hover:text-pink-400' },
  { icon: Mail, label: 'Email', url: 'mailto:dicky.bayusadewo@gmail.com', color: 'hover:text-green-400' }
] as const

export const ContactSection = memo<SectionProps>(({ id = 'contact', className = '' }) => {
  const [contactForm, setContactForm] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );
      setShowSuccess(true);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setContactForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  }

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Let's Connect</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project or just say hello
            </p>
          </div>
        </FadeInView>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <FadeInView direction="left">
            <motion.div 
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative overflow-hidden h-full"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 15px 25px -8px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.05)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Enhanced animated background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Multiple shadow layers for enhanced depth */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-blue/3 to-accent-cyan/3 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-102" />
              <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 scale-105" />
              <div className="absolute inset-0 -z-30 rounded-2xl bg-primary-blue/5 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 scale-110" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent-cyan transition-colors duration-300">Get in Touch</h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {socialLinks.map((social) => (
                    <StaggerItem key={social.label}>
                      <motion.a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/60 hover:to-slate-500/60 rounded-xl transition-all duration-300 group/link border border-slate-500/30 hover:border-slate-400/50 shadow-lg shadow-slate-800/30 hover:shadow-xl hover:shadow-slate-700/40"
                        whileHover={{ 
                          scale: 1.02, 
                          x: 5,
                          y: -2,
                          boxShadow: "0 10px 25px rgba(71, 85, 105, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <social.icon className={`w-6 h-6 text-primary-blue group-hover/link:scale-110 transition-all duration-300 ${social.color}`} />
                        <span className="text-slate-300 group-hover/link:text-white font-medium transition-colors duration-300">{social.label}</span>
                      </motion.a>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </motion.div>
          </FadeInView>
          
          {/* Contact Form */}
          <FadeInView direction="right">
            <motion.div 
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative overflow-hidden h-full"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 15px 25px -8px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.05)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              {/* Enhanced animated background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Multiple shadow layers for enhanced depth */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-blue/3 to-accent-cyan/3 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-102" />
              <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 scale-105" />
              <div className="absolute inset-0 -z-30 rounded-2xl bg-primary-blue/5 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 scale-110" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent-cyan transition-colors duration-300">Send a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange('name')}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:border-primary-blue/60 focus:ring-2 focus:ring-primary-blue/20 focus:outline-none transition-all duration-300 text-white placeholder:text-slate-400 hover:bg-slate-600/50"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                  
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange('email')}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:border-primary-blue/60 focus:ring-2 focus:ring-primary-blue/20 focus:outline-none transition-all duration-300 text-white placeholder:text-slate-400 hover:bg-slate-600/50"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                  
                  <motion.textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange('message')}
                    rows={4}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:border-primary-blue/60 focus:ring-2 focus:ring-primary-blue/20 focus:outline-none transition-all duration-300 resize-none text-white placeholder:text-slate-400 hover:bg-slate-600/50"
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-blue to-accent-cyan hover:from-primary-blue-light hover:to-accent-cyan-light disabled:from-primary-blue/60 disabled:to-accent-cyan/60 px-6 py-4 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed text-white border border-primary-blue/20 hover:border-primary-blue/40 shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30"
                    whileHover={{ 
                      scale: isSubmitting ? 1 : 1.02,
                      y: isSubmitting ? 0 : -2,
                      boxShadow: isSubmitting ? undefined : "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </div>
      
      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-green-500/30 z-50 border border-green-400/30"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
})

ContactSection.displayName = 'ContactSection'