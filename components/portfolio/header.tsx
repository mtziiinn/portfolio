"use client"

import { motion } from "framer-motion"
import MatheusGoncalvesLogo from "@/components/MatheusGoncalvesLogo"
import { ThemeToggle } from "./theme-toggle"
import { DiscordStatus } from "./discord-status"
import { Github, Linkedin } from "lucide-react"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <MatheusGoncalvesLogo size="md" />
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-4 mr-4">
             <a href="https://github.com/mtziiinn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
               <Github className="w-5 h-5" />
             </a>
             <a href="https://www.linkedin.com/in/matheus-gon%C3%A7alves-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
               <Linkedin className="w-5 h-5" />
             </a>
          </nav>
          <div className="flex items-center gap-4">
            <DiscordStatus />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
