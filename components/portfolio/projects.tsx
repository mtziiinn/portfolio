"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "API de Autenticação",
    description: "Sistema robusto de autenticação com JWT, refresh tokens, OAuth2 e rate limiting.",
    tech: ["Node.js", "Express", "Redis", "MongoDB"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard em tempo real para análise de métricas com gráficos interativos e exportação de relatórios.",
    tech: ["React", "TypeScript", "Chart.js", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Bot de Automação",
    description: "Bot para Discord com sistema de moderação, comandos customizados e integração com APIs externas.",
    tech: ["Discord.js", "TypeScript", "MySQL", "Docker"],
    github: "https://github.com",
    live: null,
  },
]

export function Projects() {
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
            Projetos
          </h2>
          <p className="text-muted-foreground mb-10">
            Alguns dos projetos que desenvolvi ao longo da minha carreira.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
