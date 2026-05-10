"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Next.js", icon: "▲" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "Express.js", icon: "🚀" },
  { name: "Lua", icon: "🌙" },
  { name: "Git", icon: "📦" },
  { name: "Docker", icon: "🐳" },
  { name: "Tailwind CSS", icon: "🎨" },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-accent text-sm font-medium uppercase tracking-wider mb-6">
            Habilidades
          </h2>
          <p className="text-muted-foreground mb-10">
            Essas são minhas principais habilidades de desenvolvimento.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-5 py-3 rounded-full bg-secondary border border-border text-foreground font-medium hover:bg-border hover:border-accent transition-all cursor-default flex items-center gap-2"
              >
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
