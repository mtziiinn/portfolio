"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-accent text-sm font-medium uppercase tracking-wider mb-6">
            Contato
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos trabalhar juntos?
          </h3>
          
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia ou projeto em mente, entre em contato!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:matheusgoncalves1502@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-all"
            >
              <Mail className="w-5 h-5" />
              Enviar email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/905313779827"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-secondary border border-border text-foreground font-medium hover:border-accent transition-all"
            >
              <SiWhatsapp className="w-5 h-5" />
              WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
