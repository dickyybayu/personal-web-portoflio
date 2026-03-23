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
      canvas.height = window.innerHeight
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

      // Pre-create color map untuk menghindari string concat setiap frame
      const colorMap = [
        { r: 147, g: 197, b: 253 }, // Jedi blue
        { r: 103, g: 232, b: 249 }, // Force cyan
        { r: 251, g: 191, b: 36 },  // Imperial gold
        { r: 196, g: 181, b: 253 }, // Force violet
        { r: 255, g: 255, b: 255 }, // Distant stars
      ]

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const colorIndex = index % colorMap.length
        const color = colorMap[colorIndex]

        // Render tanpa shadow untuk performa lebih baik
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${particle.opacity})`
        ctx.fill()
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

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-70"
    />
  )
}
