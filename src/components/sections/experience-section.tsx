'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeInView } from '@/components/animations/fade-in-view'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { experience } from '@/data/experience'
import { SectionProps } from '@/lib/types'
import { Calendar, Building2, Briefcase, Clock } from 'lucide-react'

export const ExperienceSection = memo<SectionProps>(({ id = 'experience', className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className} relative`}>
      {/* Background Timeline Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary-blue/15 to-accent-cyan/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-bl from-accent-cyan/15 to-primary-blue-light/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <FadeInView>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Experience
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-3 -left-6 text-2xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💼
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-6 text-2xl"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                🚀
              </motion.div>
            </motion.h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              My journey so far through leadership, education, and entrepreneurship - each experience shaping who I am today
            </p>
          </div>
        </FadeInView>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-accent-cyan to-primary-blue opacity-30">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary-blue via-accent-cyan to-primary-blue"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [1, 1.5, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <StaggerContainer className="space-y-12" staggerDelay={0.2}>
            {experience.map((exp, index) => (
              <StaggerItem key={exp.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="relative flex items-start">
                  {/* Timeline Dot */}
                  <motion.div 
                    className={`absolute left-4 md:left-8 w-4 h-4 rounded-full bg-gradient-to-r from-primary-blue to-accent-cyan shadow-lg shadow-primary-blue/50 z-10 transform -translate-x-1/2 ${exp.current ? 'animate-pulse' : ''}`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                    style={{ top: '2rem' }}
                  >
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue to-accent-cyan animate-ping"></div>
                    )}
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="flex-1 ml-12 md:ml-20"
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
                    <div className="group flex-shrink-0 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative overflow-hidden">
                      {/* Enhanced animated background glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Multiple shadow layers for enhanced depth */}
                      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-blue/3 to-accent-cyan/3 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-102" />
                      <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 scale-105" />
                      <div className="absolute inset-0 -z-30 rounded-2xl bg-primary-blue/5 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 scale-110" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <motion.div
                                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center shadow-lg group-hover:shadow-primary-blue/40 transition-all duration-300 border border-slate-600/30 group-hover:border-primary-blue/40 group-hover:scale-110 overflow-hidden"
                                whileHover={{ rotate: exp.image ? 0 : 180, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                {exp.image ? (
                                  <Image
                                    src={exp.image}
                                    alt={`${exp.company} logo`}
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 object-contain rounded-lg"
                                  />
                                ) : (
                                  <Briefcase className="w-5 h-5 text-primary-blue filter drop-shadow-lg" />
                                )}
                                
                                {/* Enhanced sparkle effects */}
                                <motion.div 
                                  className="absolute -top-1 -right-1 w-2 h-2 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100"
                                  animate={{ 
                                    scale: [1, 1.5, 1],
                                    rotate: [0, 180, 360]
                                  }}
                                  transition={{ 
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                <motion.div 
                                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary-blue rounded-full opacity-0 group-hover:opacity-80"
                                  animate={{ 
                                    scale: [1, 1.3, 1],
                                    opacity: [0.8, 0.3, 0.8]
                                  }}
                                  transition={{ 
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                />
                              </motion.div>
                              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-accent-cyan transition-colors duration-300">
                                {exp.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border border-slate-600/30 shadow-lg">
                                <Building2 className="w-4 h-4 text-slate-400" />
                              </div>
                              <p className="text-primary-blue font-semibold">{exp.company}</p>
                            </div>
                          </div>
                          
                          {/* Period Badge */}
                          <div className="flex items-center gap-3 mt-4 md:mt-0">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border border-slate-600/30 shadow-lg">
                                <Calendar className="w-4 h-4 text-slate-400" />
                              </div>
                              <span className="text-slate-300 text-sm capitalize bg-gradient-to-r from-slate-700/50 to-slate-600/50 px-3 py-1 rounded-full border border-slate-500/30 group-hover:from-primary-blue/30 group-hover:to-accent-cyan/30 group-hover:border-primary-blue/50 transition-all duration-300">
                                {exp.period}
                              </span>
                            </div>
                            {exp.current && (
                              <motion.span 
                                className="bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/50 shadow-lg shadow-green-500/20 flex items-center gap-2"
                                animate={{ 
                                  boxShadow: [
                                    "0 0 0 0 rgba(34, 197, 94, 0.2)",
                                    "0 0 0 8px rgba(34, 197, 94, 0)",
                                  ]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeOut"
                                }}
                              >
                                <div className="w-4 h-4 rounded bg-gradient-to-br from-green-400/50 to-emerald-400/50 flex items-center justify-center">
                                  <Clock className="w-2 h-2" />
                                </div>
                                Current
                              </motion.span>
                            )}
                          </div>
                        </div>
                        
                        {/* Job Description/Achievements Section */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mb-6">
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <motion.li 
                                  key={achievementIndex}
                                  className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.4,
                                    delay: achievementIndex * 0.1 + 0.3
                                  }}
                                >
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-blue/30 to-accent-cyan/30 border border-primary-blue/50 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue"></div>
                                  </div>
                                  <span className="leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Enhanced Tags */}
                        <div className="flex flex-wrap gap-3">
                          {exp.tags.map((tag, tagIndex) => (
                            <motion.span 
                              key={tag}
                              className="text-xs text-slate-300 capitalize px-3 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full border border-slate-500/30 group-hover:from-primary-blue/30 group-hover:to-accent-cyan/30 group-hover:border-primary-blue/50 transition-all duration-300 hover:text-white"
                              whileHover={{ 
                                scale: 1.05,
                                y: -2,
                                boxShadow: "0 5px 15px rgba(96, 165, 250, 0.2)"
                              }}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ 
                                duration: 0.4,
                                delay: tagIndex * 0.1 + 0.5,
                                type: "spring",
                                stiffness: 200
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Connector line from timeline to card */}
                      <div className="absolute left-0 top-8 w-6 h-px bg-gradient-to-r from-primary-blue/50 to-transparent transform -translate-x-full"></div>
                    </div>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'