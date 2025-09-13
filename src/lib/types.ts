export interface TechItem {
  id: string
  name: string
  icon: string
  image?: string 
  tooltip: string
  category: 'languages' | 'frameworks & libraries' | 'tools & technologies'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  image: string
  featured: boolean
  category: 'web3' | 'ai' | 'fullstack' | 'mobile'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  achievements?: string[]
  tags: string[]
  current?: boolean
  image?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  text: string
  timestamp: Date
}

export interface ContactForm {
  name: string
  email: string
  message: string
}

export interface SectionProps {
  id?: string
  className?: string
}

export interface AnimationConfig {
  duration: number
  delay: number
  ease: string
}