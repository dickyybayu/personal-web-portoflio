'use client'

import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'

interface FadeInViewProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  className?: string
  once?: boolean
}

export const FadeInView = memo<FadeInViewProps>(({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  className,
  once = true
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
})

FadeInView.displayName = 'FadeInView'