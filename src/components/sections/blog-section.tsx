'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { FadeInView } from '@/components/animations/fade-in-view'
import { SectionProps } from '@/lib/types'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const BlogSection = memo<SectionProps>(({ id = 'blog', className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Blog</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Sharing experiences, discoveries, and learnings from my journey in Web3, AI, and modern development
            </p>
          </div>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <motion.div
            className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative overflow-hidden text-center"
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
              {/* Blog Icon */}
              <motion.div 
                className="text-6xl mb-6"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📝
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors duration-300">
                Coming Soon
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 max-w-2xl mx-auto">
                I&apos;m working on a space where I&apos;ll share my experiences with Web3 development, AI exploration, coding discoveries, and reflections on the latest technology trends. Join me on this learning journey!
              </p>
              
              {/* Features Preview */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
                  <Calendar className="w-4 h-4 text-primary-blue" />
                  <span className="text-sm text-slate-300">Regular Updates</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
                  <Clock className="w-4 h-4 text-accent-cyan" />
                  <span className="text-sm text-slate-300">In-depth Articles</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-slate-800/40 rounded-lg border border-slate-700/50">
                  <ArrowRight className="w-4 h-4 text-accent-gold" />
                  <span className="text-sm text-slate-300">Code Examples</span>
                </div>
              </div>
              
              {/* Newsletter Signup Placeholder */}
              <motion.div
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-blue/20 to-accent-cyan/20 text-primary-blue border border-primary-blue/30 rounded-full shadow-lg group-hover:from-primary-blue/30 group-hover:to-accent-cyan/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">🚀</span>
                <span className="font-medium">Get notified when it&apos;s ready!</span>
              </motion.div>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
})

BlogSection.displayName = 'BlogSection'
