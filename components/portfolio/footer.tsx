"use client"

import { Github } from "lucide-react"
import { SiDiscord } from "react-icons/si"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Matheus Gonçalves. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mtziiinn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://discord.com/users/yqc8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Discord"
          >
            <SiDiscord className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
