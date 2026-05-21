"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Glow de fundo que segue o mouse */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 145, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Círculo que segue o mouse com suavidade (Spring) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-blue-500/30 rounded-full z-50 hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Ponto central mais rápido */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 bg-blue-500 rounded-full z-50 hidden md:block"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
