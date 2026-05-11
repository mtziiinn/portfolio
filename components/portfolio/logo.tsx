"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-12 h-12 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-accent/20 rounded-xl rotate-6" />
      <div className="relative bg-accent rounded-xl w-full h-full flex items-center justify-center">
        <span className="text-accent-foreground font-bold text-lg tracking-tight">MG</span>
      </div>
    </motion.div>
  )
}
