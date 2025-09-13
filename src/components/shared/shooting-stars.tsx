"use client"

import { useEffect, useRef } from "react"

interface ShootingStar {
  x: number
  y: number
  vx: number
  vy: number
  length: number
  opacity: number
  life: number
  maxLife: number
}

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const shootingStars: ShootingStar[] = []

    // Create shooting star
    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width
          y = -50
          vx = (Math.random() - 0.5) * 1.5 // Slower horizontal speed
          vy = Math.random() * 1.2 + 0.8 // Slower vertical speed
          break
        case 1: // Right
          x = canvas.width + 50
          y = Math.random() * canvas.height
          vx = -(Math.random() * 1.2 + 0.8) // Slower speed
          vy = (Math.random() - 0.5) * 1.5
          break
        case 2: // Bottom
          x = Math.random() * canvas.width
          y = canvas.height + 50
          vx = (Math.random() - 0.5) * 1.5
          vy = -(Math.random() * 1.2 + 0.8) // Slower speed
          break
        default: // Left
          x = -50
          y = Math.random() * canvas.height
          vx = Math.random() * 1.2 + 0.8 // Slower speed
          vy = (Math.random() - 0.5) * 1.5
          break
      }

      shootingStars.push({
        x,
        y,
        vx,
        vy,
        length: Math.random() * 80 + 50, // Longer trails for better visibility
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 120 + 100, // Much longer lifespan
      })
    }

    // Create shooting stars very infrequently for special moments
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.15) { // Much lower chance to appear
        createShootingStar()
      }
    }, 8000) // Much longer intervals between attempts

    function animate() {
      if (!ctx || !canvas) return

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i]

        // Update position
        star.x += star.vx
        star.y += star.vy
        star.life++

        // Calculate opacity based on life
        star.opacity = Math.max(0, 1 - star.life / star.maxLife)

        // Remove if dead or off screen
        if (
          star.life >= star.maxLife ||
          star.x < -100 ||
          star.x > canvas.width + 100 ||
          star.y < -100 ||
          star.y > canvas.height + 100
        ) {
          shootingStars.splice(i, 1)
          continue
        }

        // Draw shooting star trail
        ctx.save()
        ctx.globalAlpha = star.opacity

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.vx * star.length,
          star.y - star.vy * star.length,
        )
        gradient.addColorStop(0, "#FFFFFF")
        gradient.addColorStop(0.3, "#F59E0B") // accent-gold
        gradient.addColorStop(0.6, "#22D3EE") // accent-cyan
        gradient.addColorStop(1, "transparent")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3 // Thicker trail for better visibility
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - star.vx * star.length, star.y - star.vy * star.length)
        ctx.stroke()

        // Draw bright head
        const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 8)
        headGradient.addColorStop(0, "#FFFFFF")
        headGradient.addColorStop(0.5, "#F59E0B") // accent-gold
        headGradient.addColorStop(1, "transparent")

        ctx.fillStyle = headGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2) // Bigger head for visibility
        ctx.fill()

        ctx.restore()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(shootingStarInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-1" />
}
