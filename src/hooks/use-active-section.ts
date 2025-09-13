import { useState, useEffect, useCallback } from 'react'

type ThrottledFunction = (...args: unknown[]) => void

const throttle = (func: ThrottledFunction, limit: number): ThrottledFunction => {
  let inThrottle: boolean
  return function(this: unknown, ...args: unknown[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')

  const updateActiveSection = useCallback(() => {
    const throttledUpdate = throttle(() => {
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id)
        if (!element) return null
        
        const rect = element.getBoundingClientRect()
        return {
          id,
          element,
          top: rect.top,
          bottom: rect.bottom,
          isVisible: rect.top <= 100 && rect.bottom >= 100,
          distanceFromTop: Math.abs(rect.top)
        }
      }).filter(Boolean)

      // Check if we're near the bottom of the page (within 200px)
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200
      
      // If we're near the bottom, always select the last section (contact)
      if (isNearBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      // Find the visible section or the one closest to the top
      let activeId = activeSection
      const visibleSection = sections.find(section => section?.isVisible)
      
      if (visibleSection) {
        activeId = visibleSection.id
      } else {
        // Find the section closest to the top
        const closestSection = sections.reduce((closest, current) => {
          if (!current || !closest) return current || closest
          return current.distanceFromTop < closest.distanceFromTop ? current : closest
        }, null as typeof sections[0])
        
        if (closestSection) {
          activeId = closestSection.id
        }
      }
      
      if (activeId !== activeSection) {
        setActiveSection(activeId)
      }
    }, 50)
    
    throttledUpdate()
  }, [sectionIds, activeSection])

  useEffect(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [updateActiveSection])

  return activeSection
}