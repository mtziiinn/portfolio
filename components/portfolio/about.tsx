"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
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
            Sobre mim
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Sou desenvolvedor full stack desde 2020. Meu foco é o back-end, é onde realmente me encontro.
            </p>
            
            <p>
              Tenho experiência sólida construindo soluções completas, com destaque para APIs, sistemas de autenticação, integrações e automações. Apesar de atuar como full stack, sempre preferi estar nos bastidores da aplicação, lidando com lógica, performance e estrutura de sistemas.
            </p>
            
            <p>
              Movido por desafios, gosto de construir sistemas inteligentes, bem estruturados e que realmente resolvam problemas. Tenho familiaridade com metodologias ágeis, versionamento com Git e deploy automatizado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
