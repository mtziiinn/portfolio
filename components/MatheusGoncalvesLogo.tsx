"use client"

import React from "react"
import { motion } from "framer-motion"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showSubtitle?: boolean
}

const MatheusGoncalvesLogo: React.FC<LogoProps> = ({ size = "md", showSubtitle = true }) => {
  const sizes = {
    sm: { box: "w-8 h-8", text: "text-sm", name: "text-base", subtitle: "text-[8px]" },
    md: { box: "w-10 h-10", text: "text-base", name: "text-lg", subtitle: "text-[10px]" },
    lg: { box: "w-12 h-12", text: "text-xl", name: "text-xl", subtitle: "text-[12px]" },
  }

  const currentSize = sizes[size]

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 cursor-pointer group"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className={`${currentSize.box} bg-[#0091FF] rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform`}>
        <span className={currentSize.text}>MG</span>
      </div>
      {showSubtitle && (
        <div className="flex flex-col leading-none">
          <span className={`${currentSize.name} font-bold text-foreground tracking-tight`}>
            Matheus Gonçalves
          </span>
          <span className={`${currentSize.subtitle} font-medium text-muted-foreground tracking-[0.3em] uppercase mt-1`}>
            Portfolio
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default MatheusGoncalvesLogo
