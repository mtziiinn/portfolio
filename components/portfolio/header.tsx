"use client"

import { motion } from "framer-motion"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { DiscordStatus } from "./discord-status"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-4">
          <DiscordStatus />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
