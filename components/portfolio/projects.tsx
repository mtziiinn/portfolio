"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio Pessoal",
    description: "Meu site pessoal desenvolvido com Next.js 15+, Tailwind CSS e Framer Motion, focado em performance, SEO e uma interface moderna.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    github: "https://github.com/mtziiinn/portfolio",
  },
  {
    title: "Sistema SaaS",
    description: "Uma plataforma complexa com foco em escalabilidade, gerenciamento de dados e funcionalidades modernas de software como serviço.",
    tech: ["TypeScript", "Next.js", "Node.js", "Drizzle ORM"],
    github: "https://github.com/mtziiinn/SAAS",
  },
  {
    title: "Sistema de Tickets",
    description: "Solução para gerenciamento de chamados e suporte, focada em organização de fluxo de trabalho e persistência de dados.",
    tech: ["TypeScript", "Backend", "MongoDB", "Node.js"],
    github: "https://github.com/mtziiinn/TICKET",
  },
  {
    title: "Barber Landing Page",
    description: "Landing page profissional e responsiva para barbearias, focada em conversão e experiência do usuário com integração de pagamentos.",
    tech: ["TypeScript", "Tailwind", "Supabase", "Mercado Pago"],
    github: "https://github.com/mtziiinn/BARBER-LANDING",
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-accent text-sm font-medium uppercase tracking-wider mb-6">
            Projetos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary border border-border hover:border-accent/50 transition-all group"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded bg-accent/10 text-accent font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
