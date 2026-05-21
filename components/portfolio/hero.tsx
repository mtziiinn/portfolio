"use client"

import { motion } from "framer-motion"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
import { SiDiscord } from "react-icons/si"
import Image from "next/image"
import { TypingAnimation } from "./typing-animation"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-28">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-accent/30">
            <Image
              src="/images/profile.png"
              alt="Matheus Gonçalves"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm mb-8">
            <MapPin className="w-4 h-4" />
            <span>Brazil</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
        >
          Matheus Gonçalves
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 h-8"
        >
          <TypingAnimation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/mtziiinn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-gon%C3%A7alves-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com/users/yqc8"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="Discord"
          >
            <SiDiscord className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matheusgoncalves1502@gmail.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-border transition-colors text-foreground"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
