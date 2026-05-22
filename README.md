# Matheus Gonçalves | Full Stack Developer

Portfólio pessoal moderno, focado em performance e experiência do usuário, destacando habilidades em desenvolvimento Back-end e APIs.

🌐 **Live:** [mts7.vercel.app](https://mts7.vercel.app/)

## Funcionalidades

- **Design Responsivo:** Adaptado para todos os tamanhos de tela.
- **Modo Claro/Escuro:** Suporte nativo a temas via next-themes (dark mode padrão).
- **Status do Discord em Tempo Real:** Integração com a Lanyard API para exibir status online/ocupado/ausente, incluindo jogo atual.
- **Animações Fluídas:** Framer Motion para transições, scroll revealing e typing animation.
- **Efeito de Mouse:** Gradiente radial que segue o cursor do mouse.
- **Estatísticas Dinâmicas:** Contadores animados destacando projetos, linhas de código e anos de experiência.
- **Skills Interativas:** 21 habilidades técnicas exibidas com ícones coloridos.
- **Otimização de Performance:** Next.js 16 com Turbopack e imagens otimizadas.
- **Analytics:** Monitoramento via Vercel Analytics (apenas em produção).

## Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5 (strict mode)
- **Biblioteca:** React 19
- **Estilização:** Tailwind CSS v4
- **Componentes:** Shadcn/UI + Radix UI
- **Animações:** Framer Motion
- **Ícones:** Lucide React + React Icons
- **Formulários:** React Hook Form + Zod
- **Temas:** next-themes
- **Analytics:** Vercel Analytics
- **Fontes:** Geist + Geist Mono (via next/font)

## Estrutura

```
app/                     # Rotas e layout
  layout.tsx             # Layout root (fontes, providers, metadata)
  page.tsx               # Página principal (seções em ordem)
  globals.css            # Estilos globais e tema
components/
  portfolio/             # Componentes específicos do portfólio
    header.tsx           # Navbar fixa + Discord status + theme toggle
    hero.tsx             # Seção inicial com typing animation
    about.tsx            # Biografia
    stats.tsx            # Contadores animados
    skills.tsx           # Grid de habilidades técnicas
    projects.tsx         # Grid de projetos
    contact.tsx          # Seção de contato
    footer.tsx           # Rodapé
    discord-status.tsx   # Status Discord via Lanyard API
    mouse-effect.tsx     # Efeito de gradiente no cursor
    typing-animation.tsx # Efeito de digitação
    theme-toggle.tsx     # Alternador claro/escuro
  ui/                    # ~60 componentes Shadcn/UI reutilizáveis
hooks/                   # Custom hooks (use-mobile, use-toast)
lib/                     # Utilitários (cn, tailwind-merge)
public/                  # Assets estáticos
```

## Instalação

```bash
git clone <url-do-repositorio>
cd portfolio
npm install
npm run dev     # Servidor de desenvolvimento
npm run build   # Build de produção
npm run lint    # Verificação de lint
```

## Licença

MIT
