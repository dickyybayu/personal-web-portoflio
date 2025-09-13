'use client'

import { memo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { ChatMessage } from '@/lib/types'

const RobotIcon = memo(() => (
  <motion.div 
    className="relative w-12 h-12 transform-gpu"
    animate={{
      y: [0, -4, 0],
      rotate: [0, 1, -1, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {/* Robot Head - Side Profile */}
    <motion.div 
      className="absolute top-0 left-2 w-8 h-6 bg-gradient-to-br from-slate-100 to-slate-300 rounded-full border border-slate-400/30 shadow-xl"
      animate={{ 
        scaleY: [1, 1.02, 1],
        x: [0, 0.5, 0]
      }}
      transition={{ 
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
      }}
    >
      {/* Antenna */}
      <motion.div 
        className="absolute -top-2 right-2 w-1 h-3 bg-gradient-to-t from-slate-300 to-accent-cyan rounded-full"
        animate={{
          scaleY: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-cyan rounded-full shadow-lg"></div>
      </motion.div>
      
      {/* Side Profile Eye */}
      <motion.div 
        className="absolute top-1.5 right-1 w-3 h-3 bg-gradient-to-br from-accent-cyan to-primary-blue rounded-full shadow-inner"
        animate={{ 
          boxShadow: [
            "0 0 6px rgba(6, 182, 212, 0.6), inset 0 0 4px rgba(59, 130, 246, 0.3)",
            "0 0 12px rgba(6, 182, 212, 0.9), inset 0 0 6px rgba(59, 130, 246, 0.5)",
            "0 0 6px rgba(6, 182, 212, 0.6), inset 0 0 4px rgba(59, 130, 246, 0.3)"
          ],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Eye pupil/iris */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-80"></div>
      </motion.div>
      
      {/* Side mouth */}
      <motion.div 
        className="absolute bottom-1 right-1 w-2 h-0.5 bg-gradient-to-r from-accent-cyan to-primary-blue rounded-full opacity-80"
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </motion.div>
    
    {/* Robot Body */}
    <motion.div 
      className="absolute top-5 left-2.5 w-7 h-5 bg-gradient-to-br from-slate-200 to-slate-400 rounded-lg border border-slate-400/30 shadow-xl"
      animate={{ 
        scaleY: [1, 1.01, 1],
        x: [0, 0.3, 0]
      }}
      transition={{ 
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2
      }}
    >
      {/* Side chest panel */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-slate-300/60 to-slate-500/40 rounded border border-slate-400/30"></div>
      {/* Status lights */}
      <motion.div 
        className="absolute top-0.5 right-0.5 w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
        animate={{ 
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-2 right-0.5 w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      ></motion.div>
    </motion.div>
    
    {/* Robot Arms - Side view */}
    <motion.div 
      className="absolute top-6 left-1 w-1.5 h-4 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border border-slate-400/30 shadow-lg"
      animate={{ 
        rotate: [0, -8, 8, 0],
        scaleY: [1, 1.02, 1]
      }}
      transition={{ 
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    ></motion.div>
    <motion.div 
      className="absolute top-6 right-0.5 w-2 h-4 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border border-slate-400/30 shadow-lg"
      animate={{ 
        rotate: [0, 10, -6, 0],
        scaleY: [1, 1.03, 1]
      }}
      transition={{ 
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4
      }}
    ></motion.div>
    
    {/* Robot Base/Legs - Floating base */}
    <motion.div 
      className="absolute bottom-0 left-2.5 w-7 h-2.5 bg-gradient-to-br from-slate-300 to-slate-500 rounded-b-xl border border-slate-400/30 shadow-xl"
      animate={{ 
        scaleX: [1, 1.03, 1],
        y: [0, -0.5, 0]
      }}
      transition={{ 
        duration: 2.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6
      }}
    >
      {/* Floating glow effect */}
      <motion.div 
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent rounded-full blur-sm"
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scaleX: [1, 1.3, 1],
          scaleY: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </motion.div>
    
    {/* Enhanced floating particles */}
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-accent-cyan/70 rounded-full"
        style={{
          left: `${15 + i * 18}%`,
          top: `${25 + (i % 2) * 30}%`,
        }}
        animate={{
          y: [0, -12, 0],
          x: [0, 6, -3, 0],
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut"
        }}
      />
    ))}
    
    {/* Floating energy rings */}
    <motion.div
      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-0.5 border border-accent-cyan/30 rounded-full"
      animate={{
        scaleX: [1, 1.4, 1],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 border border-primary-blue/20 rounded-full"
      animate={{
        scaleX: [1, 1.2, 1],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </motion.div>
))

RobotIcon.displayName = 'RobotIcon'

const suggestedQuestions = [
  "🚀 What's Dicky's full-stack development journey?",
  "💻 Show me his featured projects!",
  "⚽ Tell me about his interests beyond coding",
  "⚡ What technologies does he specialize in?"
] as const

const ChatBot = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = async (message: string): Promise<string> => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          return "🚦 Whoa there! I'm getting a bit overwhelmed with questions. Please wait a minute before asking another question. I promise I'll be worth the wait! ⏰"
        }
        if (response.status === 503) {
          return "🤖 I'm temporarily overloaded! The AI service is experiencing high traffic. Please try again in a few moments. ⏳"
        }
        throw new Error(data.error || 'Failed to get response')
      }

      return data.response
    } catch (error: any) {
      console.error('Error generating response:', error)
      
      // Handle specific error messages from the API
      if (error.message && (error.message.includes('overloaded') || error.message.includes('high traffic'))) {
        return "🤖 I'm temporarily overloaded! The AI service is experiencing high traffic. Please try again in a few moments. ⏳"
      }
      
      return "🤔 I'm having a bit of trouble connecting to my AI brain right now, but I'm still here to help! Try asking about Dicky's development journey, projects, technical expertise, or his interests beyond coding!"
    }
  }

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim()
    if (!text) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const responseText = await generateResponse(text)

    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      text: responseText,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiResponse])
    setIsTyping(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage()
  }

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-15 right-15 z-50 flex flex-col items-center"
        initial={false}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring', damping: 15 }}
      >
        {/* Floating Helper Text */}
        <motion.div
          className="absolute -top-16 -left-20 text-xs font-medium pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 1, 0.7, 1, 0.7, 1],
            y: [10, 0, -2, 2, -1, 1, 0],
            x: [0, -2, 2, -1, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            delay: 3,
            ease: "easeInOut"
          }}
        >
          <span className="bg-gradient-to-r from-accent-cyan to-primary-blue bg-clip-text text-transparent drop-shadow-sm">
            ← Ask me anything!
          </span>
        </motion.div>

        <motion.div
          className="absolute -bottom-8 -left-16 text-xs font-medium pointer-events-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: [0, 0.8, 0.8, 0.5, 0.8, 0.5, 0.8],
            y: [-10, 0, 2, -2, 1, -1, 0],
            x: [0, 1, -1, 2, -1, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            delay: 5.5,
            ease: "easeInOut"
          }}
        >
          <span className="bg-gradient-to-r from-primary-blue to-accent-cyan bg-clip-text text-transparent drop-shadow-sm">
            Portfolio Helper ↗
          </span>
        </motion.div>

        {/* Robot Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative group"
          whileHover={{ 
            scale: 1.15,
            y: -8
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with Dicky's AI assistant"
        >
          {/* Speech Bubble - appears on hover */}
          <div
            className="absolute -top-20 -left-40 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 ease-out z-50"
          >
            <div className="relative px-4 py-2 bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-600/30 shadow-lg">
              <p className="text-xs text-slate-300 font-medium whitespace-nowrap">
                � Hi! I'm <span className="text-accent-cyan">Dicky's</span> AI Assistant
              </p>
              <p className="text-xs text-slate-400 font-normal mt-1 whitespace-nowrap">
                Click to get to know Dicky better!
              </p>
              
              {/* Speech bubble tail pointing to robot's head */}
              <div className="absolute -bottom-2 right-6">
                <div className="w-4 h-4 bg-gradient-to-br from-slate-800/95 to-slate-900/95 rotate-45 border-b border-r border-slate-600/30"></div>
              </div>
            </div>
          </div>

          {/* Floating glow ring */}
          <motion.div
            className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-accent-cyan/20 to-primary-blue/20 blur-xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Enhanced hover glow */}
          <motion.div
            className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-accent-cyan/30 to-primary-blue/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          />
          
          <RobotIcon />
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-600/50 rounded-2xl w-full max-w-lg h-[650px] flex flex-col shadow-2xl ring-1 ring-accent-cyan/20"
              initial={{ scale: 0.8, y: 50, rotateX: -15 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 50, rotateX: -15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-600/30 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-primary-blue rounded-full flex items-center justify-center shadow-lg ring-2 ring-accent-cyan/30">
                    <div className="relative w-6 h-6">
                      {/* Front-facing Robot Head */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gradient-to-br from-slate-100 to-slate-300 rounded-full border border-slate-400/20">
                        {/* Eyes */}
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-gradient-to-br from-accent-cyan to-primary-blue rounded-full"></div>
                        <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gradient-to-br from-accent-cyan to-primary-blue rounded-full"></div>
                        {/* Mouth */}
                        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-0.5 bg-slate-400 rounded-full"></div>
                      </div>
                      {/* Body */}
                      <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-3 h-2.5 bg-gradient-to-br from-slate-200 to-slate-400 rounded border border-slate-400/20">
                        {/* Chest panel */}
                        <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1 bg-slate-300/50 rounded border border-slate-400/20"></div>
                      </div>
                      {/* Arms */}
                      <div className="absolute top-3 left-0 w-1 h-1.5 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border border-slate-400/20"></div>
                      <div className="absolute top-3 right-0 w-1 h-1.5 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border border-slate-400/20"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Dicky's AI Assistant</h3>
                    <p className="text-xs text-slate-300">✨ Your personal guide to explore amazing projects & skills</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900/20 to-slate-800/20">
                {messages.length === 0 && (
                  <div className="text-center text-slate-300">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <span className="inline-block align-middle mr-2">
                          <div className="relative w-4 h-4">
                            {/* Mini Robot Head */}
                            <div 
                              className="absolute top-0 left-0 w-3.5 h-3 bg-gradient-to-br from-slate-100 to-slate-300 rounded-full border border-slate-400/30"
                              style={{
                                clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
                              }}
                            >
                              {/* Mini Eye */}
                              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gradient-to-br from-accent-cyan to-primary-blue rounded-full">
                                <div className="absolute top-0 left-0 w-0.5 h-0.5 bg-white rounded-full opacity-80"></div>
                              </div>
                              {/* Mini Antenna */}
                              <div className="absolute -top-0.5 right-0.5 w-0.5 h-1 bg-gradient-to-t from-slate-300 to-accent-cyan rounded-full">
                                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-accent-cyan rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </span>
                        Hey there! 👋 I'm Dicky's personal AI companion. Ready to dive deep into his world? I've got all the insider info on his full-stack development journey, amazing projects, technical expertise, and personal interests beyond coding! Fire away with any questions!
                      </div>
                      <div className="space-y-2">
                        {suggestedQuestions.map((question, index) => (
                          <motion.button
                            key={question}
                            onClick={() => handleSendMessage(question)}
                            className="block w-full text-left p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-200 text-sm text-slate-300 hover:text-white hover:scale-[1.02] border border-slate-600/30 hover:border-accent-cyan/30"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ x: 4 }}
                          >
                            {question}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
                
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-r from-accent-cyan to-primary-blue text-white ml-4 shadow-lg' 
                        : 'bg-slate-800/70 text-slate-200 mr-4 border border-slate-600/30'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-slate-800/70 text-slate-300 p-3 rounded-2xl mr-4 border border-slate-600/30">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-current rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-current rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-current rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-slate-600/30 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 p-3 bg-slate-800/50 border border-slate-600/50 rounded-xl focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 focus:outline-none transition-all duration-300 text-sm text-white placeholder-slate-400"
                    disabled={isTyping}
                  />
                  <motion.button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-accent-cyan to-primary-blue hover:from-accent-cyan/80 hover:to-primary-blue/80 disabled:from-slate-600 disabled:to-slate-700 px-4 py-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed shadow-lg"
                    whileHover={{ scale: inputValue.trim() && !isTyping ? 1.05 : 1 }}
                    whileTap={{ scale: inputValue.trim() && !isTyping ? 0.95 : 1 }}
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

ChatBot.displayName = 'ChatBot'

export default ChatBot