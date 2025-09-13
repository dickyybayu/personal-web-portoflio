import { useState, useEffect } from 'react'

interface UseTypewriterOptions {
  speed?: number
  loop?: boolean
  delay?: number
}

export const useTypewriter = (
  text: string, 
  options: UseTypewriterOptions = {}
) => {
  const { speed = 100, loop = false, delay = 0 } = options
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    let timer: NodeJS.Timeout

    const startTyping = () => {
      timer = setInterval(() => {
        setDisplayText(text.slice(0, index))
        index++
        
        if (index > text.length) {
          setIsComplete(true)
          clearInterval(timer)
          
          if (loop) {
            setTimeout(() => {
              index = 0
              setDisplayText('')
              setIsComplete(false)
              startTyping()
            }, 2000)
          }
        }
      }, speed)
    }

    const delayTimer = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(delayTimer)
      clearInterval(timer)
    }
  }, [text, speed, loop, delay])

  return { displayText, isComplete }
}