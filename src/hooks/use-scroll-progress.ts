import { useState, useEffect, useCallback, useRef } from 'react'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)

  const updateScrollProgress = useCallback(() => {
    const scrolled = window.scrollY
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxHeight > 0 ? Math.min((scrolled / maxHeight) * 100, 100) : 0
    
    setScrollProgress(progress)
    setIsScrolled(scrolled > 10)
    
    ticking.current = false
  }, [])

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(updateScrollProgress)
      ticking.current = true
    }
  }, [updateScrollProgress])

  useEffect(() => {
    // Initial call
    updateScrollProgress()
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll, updateScrollProgress])

  return { 
    scrollProgress, 
    isScrolled 
  }
}