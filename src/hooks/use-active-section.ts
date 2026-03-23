import { useState, useEffect, useCallback, useRef } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '')
  const activeSectionRef = useRef(activeSection)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  const updateActiveSection = useCallback(() => {
    if (frameRef.current !== null) return

    frameRef.current = window.requestAnimationFrame(() => {
      const sections = sectionIds
        .map(id => {
          const element = document.getElementById(id)
          if (!element) return null

          const rect = element.getBoundingClientRect()
          return {
            id,
            top: rect.top,
            bottom: rect.bottom,
            isVisible: rect.top <= 100 && rect.bottom >= 100,
            distanceFromTop: Math.abs(rect.top)
          }
        })
        .filter(Boolean)

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200

      if (isNearBottom) {
        const lastSection = sectionIds[sectionIds.length - 1] || ''
        if (lastSection !== activeSectionRef.current) {
          setActiveSection(lastSection)
        }
        frameRef.current = null
        return
      }

      let nextActiveSection = activeSectionRef.current
      const visibleSection = sections.find(section => section?.isVisible)

      if (visibleSection) {
        nextActiveSection = visibleSection.id
      } else {
        const closestSection = sections.reduce((closest, current) => {
          if (!current || !closest) return current || closest
          return current.distanceFromTop < closest.distanceFromTop ? current : closest
        }, null as typeof sections[0])

        if (closestSection) {
          nextActiveSection = closestSection.id
        }
      }

      if (nextActiveSection !== activeSectionRef.current) {
        setActiveSection(nextActiveSection)
      }

      frameRef.current = null
    })
  }, [sectionIds])

  useEffect(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [updateActiveSection])

  return activeSection
}
