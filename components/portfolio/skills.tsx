"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiMysql, 
  SiExpress, 
  SiLua, 
  SiGit, 
  SiDocker, 
  SiTailwindcss,
  SiDiscord
} from "react-icons/si"

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "" },
  { name: "Discord.js", icon: SiDiscord, color: "#5865F2" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Express.js", icon: SiExpress, color: "" },
  { name: "Lua", icon: SiLua, color: "#000080" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
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
                className="px-5 py-3 rounded-full bg-secondary border border-border text-foreground font-medium hover:bg-border hover:border-accent transition-all cursor-default flex items-center gap-2 group"
              >
                <skill.icon 
                  className="w-5 h-5 transition-colors" 
                  style={skill.color ? { color: skill.color } : {}} 
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
