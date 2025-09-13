'use client'

import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInView } from '@/components/animations/fade-in-view'
import { SectionProps } from '@/lib/types'

export const AboutSection = memo<SectionProps>(({ id = 'about', className = '' }) => {
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          </div>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <motion.div
            className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative overflow-hidden"
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
              <p className="text-lg mb-6 text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                I'm a third-year Computer Science student at Universitas Indonesia with a strong interest in software engineering, artificial intelligence, and financial technology. I'm passionate about building efficient, scalable systems and exploring how intelligent and decentralized technologies can solve real-world problems, particularly in the finance sector.
              </p>
            
            <AnimatePresence>
              {showFullBio && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    Through a combination of academic learning and hands-on projects, I'm developing a solid foundation in programming, algorithms, and system design. I'm also exploring the fundamentals of machine learning, AI development, and the growing impact of fintech on the global economy.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    I enjoy working on practical solutions, learning new tools, and collaborating on projects that challenge me to grow as both a developer and a thinker. I'm always looking for opportunities to learn, create, and contribute to meaningful tech projects across software, AI, and finance.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              onClick={() => setShowFullBio(!showFullBio)}
              className="mt-6 flex items-center gap-2 text-xs text-slate-300 capitalize px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full border border-slate-500/30 group-hover:from-primary-blue/30 group-hover:to-accent-cyan/30 group-hover:border-primary-blue/50 transition-all duration-300 hover:text-white"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 5px 15px rgba(96, 165, 250, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-5 h-5 rounded bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border border-slate-600/30">
                📖
              </div>
              {showFullBio ? 'Show Less' : 'Read More'}
            </motion.button>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'