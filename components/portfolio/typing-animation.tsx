"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const roles = [
  "Full Stack Developer",
  "Back-end Specialist",
  "Java Developer",
  "Spring Boot Specialist",
  "API Developer",
  "Node.js Expert",
  "TypeScript Dev",
]

export function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl md:text-2xl text-accent font-medium inline-flex items-center"
    >
      {displayText}
      <span className="ml-1 w-0.5 h-6 bg-accent animate-pulse" />
    </motion.span>
  )
}
