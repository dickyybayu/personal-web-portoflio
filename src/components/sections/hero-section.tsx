'use client'

import { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Globe, Github, Linkedin, Mail } from 'lucide-react'
import { useTypewriter } from '@/hooks/use-typewriter'
import { SectionProps } from '@/lib/types'

export const HeroSection = memo<SectionProps>(({ id = 'hero', className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const { displayText, isComplete } = useTypewriter('Building the Future with Web3 + AI', { 
    speed: 80, 
    delay: 1000,
    loop: false
  })

  useEffect(() => {
    if (isComplete) {
      setHasAnimated(true)
    }
  }, [isComplete])

  const finalText = hasAnimated ? 'Building the Future with Web3 + AI' : displayText

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById(id)?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [id])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            x: mousePosition.x * 2,
            y: mousePosition.y * 2
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent-cyan/25 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-primary-blue-light/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: mousePosition.x * 3,
            y: mousePosition.y * 3
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-gold/15 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: mousePosition.x * -2,
            y: mousePosition.y * -2
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-primary-blue/60 rounded-full ${i % 2 === 0 ? 'bg-accent-cyan/60' : ''}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        {/* Profile Photo Section - Centered and Prominent */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            {/* Animated border rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue via-accent-cyan to-primary-blue p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-background"></div>
            </motion.div>
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-accent-cyan via-primary-blue to-accent-cyan p-1 opacity-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-transparent"></div>
            </motion.div>
            
            {/* Profile Image - Centered Size */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-gradient-to-br from-primary-blue/20 to-accent-cyan/20 backdrop-blur-sm border-4 border-primary-blue/30">
              {/* Optimized profile photo with Next.js Image */}
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/profiledicky.jpg" 
                  alt="Dicky Bayu Sadewo- Web3 & AI Engineer" 
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: '65% 30%' }}
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5vrLzK3XMZS7tYmt7FDLFEhBmUDxA6ksB9jUAivgJ"
                />
              </motion.div>
            </div>
            
            {/* Enhanced Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/30 to-accent-cyan/30 blur-2xl group-hover:from-primary-blue/50 group-hover:to-accent-cyan/50 transition-all duration-500"></div>
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            textShadow: '0 0 20px rgba(96, 165, 250, 0.5), 0 0 40px rgba(96, 165, 250, 0.2)',
            lineHeight: '1.1',
            paddingTop: '0.2em',
            paddingBottom: '0.2em',
          }}
        >
          {finalText}
          <motion.span 
            className="text-primary-blue"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>
        
        {/* Name and Title */}
        <motion.div
          className="mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-bright">
            Dicky Bayu Sadewo
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Web3 Engineer', 'AI Engineer'].map((title, i) => (
              <motion.span
                key={title}
                className="px-4 py-2 bg-primary-blue/20 border border-primary-blue/30 rounded-full text-sm font-medium text-primary-blue"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {title}
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.p
          className="text-lg md:text-xl mb-12 text-primary max-w-3xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{
            textShadow: '0 0 15px rgba(96, 165, 250, 0.4)'
          }}
        >
          Passionate about crafting innovative decentralized solutions that bridge blockchain technology 
          and artificial intelligence to shape tomorrow&apos;s digital landscape.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          {[
            { icon: Github, href: 'https://github.com/DickyyBayu', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/dickybayu/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:dicky.bayusadewo@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 border border-primary-blue/30 hover:border-primary-blue/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
            >
              <Icon className="w-5 h-5 text-primary-blue group-hover:text-primary-blue-light transition-colors" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-primary-blue to-accent-cyan hover:from-primary-blue-light hover:to-accent-cyan-light border border-primary-blue/20 hover:border-primary-blue/40 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-blue/25 hover-lift"
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              🚀 Explore My Work
              <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-blue-light to-accent-cyan-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-accent-cyan to-primary-blue hover:from-accent-cyan-light hover:to-primary-blue-light border border-accent-cyan/20 hover:border-accent-cyan/40 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-cyan/25 hover-lift"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center">
              🌟 Get In Touch
              <Globe className="inline ml-2 group-hover:rotate-12 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-cyan-light to-primary-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
})

HeroSection.displayName = 'HeroSection'