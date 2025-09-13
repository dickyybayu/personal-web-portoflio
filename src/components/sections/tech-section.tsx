'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { FadeInView } from '@/components/animations/fade-in-view'
import { techStack } from '@/data/tech-stack'
import { SectionProps } from '@/lib/types'

const TechCard = memo(({ tech }: { tech: typeof techStack[0] }) => (
  <motion.div
    className="group flex-shrink-0 w-36 h-44 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-5 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-300 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20"
    whileHover={{ 
      y: -8,
      scale: 1.05,
      boxShadow: "0 15px 25px -8px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.05)"
    }}
    transition={{ 
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
  >
    <div className="flex flex-col items-center justify-center text-center h-full relative">
      {/* Enhanced animated background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shadow layer behind card */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-blue/3 to-accent-cyan/3 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-102" />
      
      {/* Icon container with enhanced styling */}
      <div className="relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center shadow-lg group-hover:shadow-primary-blue/40 transition-all duration-300 border border-slate-600/30 group-hover:border-primary-blue/40 group-hover:scale-110 overflow-hidden">
        {tech.image ? (
          <motion.img
            src={tech.image}
            alt={tech.name}
            className="w-10 h-10 object-contain filter drop-shadow-lg"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        ) : (
          <motion.span 
            className="text-3xl filter drop-shadow-lg"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            {tech.icon}
          </motion.span>
        )}
      </div>
      
      {/* Enhanced text styling with animation */}
      <motion.h3 
        className="font-bold text-white text-sm leading-tight group-hover:text-accent-cyan transition-colors duration-300 px-2"
        whileHover={{ 
          scale: 1.05,
          y: -2
        }}
        transition={{ duration: 0.2 }}
      >
        {tech.name}
      </motion.h3>
    </div>
  </motion.div>
))

TechCard.displayName = 'TechCard'

export const TechSection = memo<SectionProps>(({ id = 'tech', className = '' }) => {
  // Group technologies by category
  const groupedTech = {
    'Programming Languages': techStack.filter(tech => tech.category === 'languages'),
    'Frameworks & Libraries': techStack.filter(tech => tech.category === 'frameworks & libraries'),
    'Tools & Technologies': techStack.filter(tech => tech.category === 'tools & technologies'),
  }

  return (
    <section id={id} className={`py-16 mb-16 mt-16 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <FadeInView>
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient relative z-10">
                Tech Stack
              </h2>
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-4 w-8 h-8 bg-gradient-to-br from-primary-blue/20 to-accent-cyan/20 rounded-full blur-lg" />
              <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-gradient-to-br from-accent-cyan/20 to-primary-blue/20 rounded-full blur-lg" />
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Always exploring and passionate about learning new technologies across languages, frameworks, libraries, and tools
            </p>
          </div>
        </FadeInView>

        {/* Technology Sections */}
        <div className="space-y-12">
          {Object.entries(groupedTech).map(([categoryName, technologies]) => (
            technologies.length > 0 && (
              <FadeInView key={categoryName}>
                <motion.div 
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/30 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 transition-all duration-500"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {/* Category Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {categoryName}
                  </h3>
                  
                  {/* Horizontal Scrollable Tech Cards */}
                  <div className="relative">
                    <div className="flex gap-6 overflow-x-auto py-8 px-2 scrollbar-thin scrollbar-track-slate-800/50 scrollbar-thumb-primary-blue/50 hover:scrollbar-thumb-primary-blue/70 scroll-smooth">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={tech.id}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.05,
                            ease: "easeOut"
                          }}
                        >
                          <TechCard tech={tech} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            )
          ))}
        </div>
      </div>
    </section>
  )
})

TechSection.displayName = 'TechSection'