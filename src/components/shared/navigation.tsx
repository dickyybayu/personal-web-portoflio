'use client'

import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/hooks/use-active-section'

const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech', label: 'Tech' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
] as const

interface NavigationProps {
  className?: string
}

export const Navigation = memo<NavigationProps>(({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useActiveSection(navigationItems.map(item => item.id))

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key and outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (mobileMenuOpen && !target.closest('#mobile-navigation') && !target.closest('[aria-controls="mobile-navigation"]')) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
        <motion.nav
          className={`transition-all duration-500 rounded-full px-8 py-4 relative overflow-hidden backdrop-blur-lg ${
            isScrolled 
              ? 'bg-gradient-to-r from-slate-800/70 to-slate-900/70 border border-slate-600/30 shadow-xl shadow-slate-900/50' 
              : 'bg-gradient-to-r from-slate-800/60 to-slate-900/60 border border-slate-700/20 shadow-lg shadow-slate-900/30'
          } ${className}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 300, damping: 30 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          {/* Enhanced animated background glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/5 to-accent-cyan/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Enhanced shadow layers */}
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-slate-800/30 to-slate-900/30 blur-md opacity-60 hover:opacity-80 transition-all duration-500 scale-105" />
          <div className="absolute inset-0 -z-20 rounded-full bg-primary-blue/3 blur-xl opacity-0 hover:opacity-30 transition-all duration-700 scale-110" />
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={`${item.id}-${isActive}`}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-6 py-3 text-sm font-semibold rounded-full overflow-hidden
                  ${isActive 
                    ? 'bg-gradient-to-r from-primary-blue to-accent-cyan text-white shadow-lg shadow-primary-blue/30' 
                    : 'text-primary hover:text-primary-blue bg-slate-800/30 hover:bg-slate-700/40 border border-slate-600/20 hover:border-slate-500/40 transition-colors duration-300'
                  }
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-3 text-primary hover:text-primary-blue transition-all duration-300 rounded-full bg-slate-800/40 hover:bg-slate-700/50 border border-slate-600/30 hover:border-primary-blue/40 overflow-hidden"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/10 to-accent-cyan/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 filter drop-shadow-lg" />
              ) : (
                <Menu className="w-6 h-6 filter drop-shadow-lg" />
              )}
            </motion.div>
            
            {/* Sparkle effect when menu is open */}
            {mobileMenuOpen && (
              <motion.div 
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent-cyan rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.button>
        </div>
      </motion.nav>
    </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-20 left-4 right-4 z-50 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <motion.div
              id="mobile-navigation"
              className="bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-600/30 shadow-2xl shadow-slate-900/50 p-6"
              role="navigation"
              aria-label="Mobile navigation menu"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
            >
              <h2 id="mobile-menu-title" className="sr-only">Navigation Menu</h2>
              <div className="grid grid-cols-2 gap-3">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id
                
                return (
                  <motion.button
                    key={`mobile-${item.id}-${isActive}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-r from-primary-blue to-accent-cyan text-white shadow-lg shadow-primary-blue/30' 
                        : 'text-primary hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-600/30 hover:border-primary-blue/50'
                      }
                    `}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                )
              })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

Navigation.displayName = 'Navigation'