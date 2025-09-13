'use client'

import { memo, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { FadeInView } from '@/components/animations/fade-in-view'
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container'
import { featuredProjects } from '@/data/projects'
import { Project, SectionProps } from '@/lib/types'

// Lazy load the project modal for performance
const ProjectModal = lazy(() => import('@/components/shared/project-modal'))

const ProjectCard = memo(({ project }: { project: Project }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <StaggerItem>
        <motion.div
          className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/30 hover:border-primary-blue/60 transition-all duration-500 shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 h-full flex flex-col relative"
          whileHover={{ 
            scale: 1.02, 
            y: -8,
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
          
          <div className="relative z-10 p-8 flex-1 flex flex-col">
            <div className="relative w-full h-48 mb-4 flex items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={192}
                className="object-contain mx-auto"
                style={{ background: 'linear-gradient(to top, #0f172a 20%, transparent 100%)' }}
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent-cyan transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-300 mb-6 leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech) => (
                <motion.span 
                  key={tech} 
                  className="text-xs text-slate-300 px-3 py-2 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full border border-slate-500/30 group-hover:from-primary-blue/30 group-hover:to-accent-cyan/30 group-hover:border-primary-blue/50 transition-all duration-300 hover:text-white"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 5px 15px rgba(96, 165, 250, 0.2)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4 mb-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  className="flex-1 bg-gradient-to-r from-primary-blue to-accent-cyan hover:from-primary-blue-light hover:to-accent-cyan-light px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center font-medium text-white border border-primary-blue/20 hover:border-primary-blue/40 shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </motion.a>
              )}
              
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  className="flex-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/60 hover:to-slate-500/60 text-slate-300 hover:text-white border border-slate-500/30 hover:border-slate-400/50 px-4 py-2 rounded-xl transition-all duration-300 flex items-center justify-center font-medium shadow-lg shadow-slate-800/30 hover:shadow-xl hover:shadow-slate-700/40"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(71, 85, 105, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </motion.a>
              )}
            </div>
            
            <motion.button
              onClick={() => setSelectedProject(project)}
              className="w-full text-primary-blue hover:text-accent-cyan transition-colors text-sm font-medium py-2 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 border border-slate-600/30 hover:border-primary-blue/40"
              whileHover={{ 
                scale: 1.01,
                y: -1
              }}
              whileTap={{ scale: 0.99 }}
            >
              View Details
            </motion.button>
          </div>
        </motion.div>
      </StaggerItem>

      {/* Lazy loaded modal */}
      {selectedProject && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </>
  )
})

ProjectCard.displayName = 'ProjectCard'

export const ProjectsSection = memo<SectionProps>(({ id = 'projects', className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient leading-tight">Projects</h2>
        </FadeInView>
        
        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'