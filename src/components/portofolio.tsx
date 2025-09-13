'use client'

import { memo, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

import { Navigation } from '@/components/shared/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ParticleBackground } from '@/components/shared/particle-background'
import { ShootingStars } from '@/components/shared/shooting-stars'

const TechSection = lazy(() => import('@/components/sections/tech-section').then(m => ({ default: m.TechSection })))
const ExperienceSection = lazy(() => import('@/components/sections/experience-section').then(m => ({ default: m.ExperienceSection })))
const ProjectsSection = lazy(() => import('@/components/sections/projects-section').then(m => ({ default: m.ProjectsSection })))
const ContactSection = lazy(() => import('@/components/sections/contact-section').then(m => ({ default: m.ContactSection })))
const ChatBot = lazy(() => import('@/components/shared/chat-bot'))

const SectionSkeleton = memo(() => (
  <div className="py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="h-12 bg-card/60 rounded-lg mb-12 mx-auto w-64 animate-pulse" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 bg-card/60 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
))

SectionSkeleton.displayName = 'SectionSkeleton'

const Portfolio = memo(() => {
  const { scrollProgress } = useScrollProgress()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white overflow-x-hidden relative">
      <ParticleBackground />
      <ShootingStars />
      
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/30 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-jedi-blue to-force-cyan will-change-transform"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />

      <Suspense fallback={<SectionSkeleton />}>
        <TechSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>

      {/* Chat Bot - Lazy loaded */}
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Dicky Bayu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
})

Portfolio.displayName = 'Portfolio'

export default Portfolio