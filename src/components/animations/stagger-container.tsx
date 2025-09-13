'use client'

import { motion, easeOut } from 'framer-motion'
import { ReactNode, memo } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
}

export const StaggerContainer = memo<StaggerContainerProps>(({
  children,
  staggerDelay = 0.1,
  className,
  once = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
})

StaggerContainer.displayName = 'StaggerContainer'

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

export const StaggerItem = memo<StaggerItemProps>(({
  children,
  className,
  direction = 'up',
  distance = 30
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
})

StaggerItem.displayName = 'StaggerItem'