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
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>
              Desenvolvedor <span className="text-foreground font-medium">Full Stack focado em Back-end</span> com experiência na construção de ecossistemas robustos e escaláveis, onde a lógica complexa e a performance são as prioridades.
            </p>
            
            <p>
              Ao longo dos anos, especializei-me no desenvolvimento de <span className="text-foreground font-medium">APIs de alta disponibilidade, sistemas de autenticação seguros e automações inteligentes</span>. Embora domine o ciclo completo de uma aplicação, é na arquitetura de sistemas e na manipulação eficiente de dados onde entrego meu maior valor técnico.
            </p>
            
            <p>
              Sou movido pela resolução de problemas reais através de código limpo e bem estruturado. Tenho domínio sobre ferramentas modernas como <span className="text-foreground font-medium">Node.js, TypeScript e diversos bancos de dados (SQL e NoSQL)</span>, sempre aplicando boas práticas de versionamento, metodologias ágeis e deploy automatizado para garantir entregas de alta qualidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
