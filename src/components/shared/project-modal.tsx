'use client'

import { memo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/lib/types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const ProjectModal = memo<ProjectModalProps>(({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/30 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg shadow-slate-900/30 hover:shadow-xl hover:shadow-primary-blue/20 relative"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Enhanced animated background glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Multiple shadow layers for enhanced depth */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary-blue/3 to-accent-cyan/3 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 scale-102" />
          <div className="absolute inset-0 -z-20 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 blur-lg opacity-60 group-hover:opacity-80 transition-all duration-500 scale-105" />
          <div className="absolute inset-0 -z-30 rounded-2xl bg-primary-blue/5 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700 scale-110" />
          
          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors duration-300">{project.title}</h3>
              <motion.button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg border border-slate-600/30 hover:border-primary-blue/40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div className="text-center mb-6">
              {project.image && project.image.startsWith('/') ? (
                <div className="relative w-full h-48 mb-4 flex items-center justify-center rounded-xl overflow-hidden mx-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={192}
                    className="object-contain mx-auto"
                    style={{ background: 'linear-gradient(to top, #0f172a 20%, transparent 100%)' }}
                  />
                </div>
              ) : (
                <div className="text-8xl mb-4">{project.image}</div>
              )}
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-blue/20 to-accent-cyan/20 text-primary-blue border border-primary-blue/30 rounded-full text-sm font-medium capitalize shadow-lg">
                {project.category}
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none mb-6">
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {project.longDescription}
              </p>
            </div>
            
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
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  className="flex-1 bg-gradient-to-r from-primary-blue to-accent-cyan hover:from-primary-blue-light hover:to-accent-cyan-light border border-primary-blue/20 hover:border-primary-blue/40 px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold text-white shadow-lg shadow-primary-blue/20 hover:shadow-xl hover:shadow-primary-blue/30"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  className="flex-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/60 hover:to-slate-500/60 text-slate-300 hover:text-white border border-slate-500/30 hover:border-slate-400/50 px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center font-semibold shadow-lg shadow-slate-800/30 hover:shadow-xl hover:shadow-slate-700/40"
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(71, 85, 105, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
})

ProjectModal.displayName = 'ProjectModal'

export default ProjectModal