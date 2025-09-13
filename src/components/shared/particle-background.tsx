"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
      )
    }

    updateCanvasSize()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const colors = [
          `rgba(147, 197, 253, ${particle.opacity})`, // Jedi blue
          `rgba(103, 232, 249, ${particle.opacity})`, // Force cyan
          `rgba(251, 191, 36, ${particle.opacity})`,  // Imperial gold
          `rgba(196, 181, 253, ${particle.opacity})`, // Force violet
          `rgba(255, 255, 255, ${particle.opacity * 0.8})`, // Distant stars
        ]
        const colorIndex = index % colors.length

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = colors[colorIndex]
        ctx.fill()

        // Add enhanced glow effect for space atmosphere
        ctx.shadowColor = colors[colorIndex]
        ctx.shadowBlur = particle.size * 3
        ctx.fill()
        ctx.shadowBlur = 0

        // Add twinkling effect for distant stars
        if (colorIndex === 4) { // White stars
          const twinkle = Math.sin(Date.now() * 0.005 + index) * 0.3 + 0.7
          ctx.globalAlpha = twinkle
          ctx.fill()
          ctx.globalAlpha = 1
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
      particles.forEach(particle => {
        if (particle.x > canvas.width) particle.x = canvas.width - 50
        if (particle.y > canvas.height) particle.y = canvas.height - 50
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-70 z-0" />
}