# Matheus Gonçalves | Full Stack Developer

Portfólio pessoal moderno, focado em performance e experiência do usuário, destacando habilidades em desenvolvimento Back-end e APIs.

🌐 **Live:** [mts7.vercel.app](https://mts7.vercel.app/) &nbsp;|&nbsp; 📍 **Idioma:** pt-BR

## Seções

| # | Seção | Componente | Destaque |
|---|---|---|---|
| 1 | **Header** | `header.tsx` | Navbar fixa com glassmorphism, logo "MG", links sociais, status Discord e toggle de tema |
| 2 | **Hero** | `hero.tsx` | Foto de perfil, nome, typing animation: *Full Stack Developer → Back-end Specialist → API Developer → Node.js Expert → TypeScript Dev* |
| 3 | **Sobre** | `about.tsx` | Carreira desde 2020, especialista em APIs de alta disponibilidade, autenticação e automações |
| 4 | **Stats** | `stats.tsx` | +6 Projetos no GitHub · +22 Tecnologias dominadas · +2 Anos no GitHub (contadores animados) |
| 5 | **Skills** | `skills.tsx` | 22 habilidades com ícones coloridos (React, Node.js, Prisma, Redis, Docker, etc.) |
| 6 | **Projetos** | `projects.tsx` | Portfolio, SaaS, Tickets, Barber Landing Page, Pro-Auth-API |
| 7 | **Contato** | `contact.tsx` | Email e WhatsApp com links diretos |
| 8 | **Footer** | `footer.tsx` | Links para GitHub, LinkedIn e Discord |

## Funcionalidades

- **Design Responsivo:** Adaptado para todos os tamanhos de tela.
- **Modo Claro/Escuro:** next-themes com `defaultTheme="dark"`, toggle via `theme-toggle.tsx`.
- **Status do Discord ao Vivo:** Lanyard API (polling 30s) — exibe online/idle/dnd/offline e jogo atual.
- **Efeito de Mouse:** Gradiente radial azul (`rgba(0, 145, 255, 0.08)`, 600px) seguindo o cursor.
- **Animações Fluídas:** Framer Motion — scroll revealing, typing animation, fade-in, contadores.
- **Logo Customizada:** `MatheusGoncalvesLogo.tsx` — monograma "MG" com scroll-to-top ao clicar.
- **Otimização:** Next.js 16 + Turbopack, imagens desotimizadas (`unoptimized: true`).
- **Analytics:** Vercel Analytics (renderizado apenas em produção).

## Tecnologias

| Categoria | Tecnologias |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Linguagem** | TypeScript 5 (strict mode) |
| **Biblioteca** | React 19 |
| **Estilização** | Tailwind CSS v4 (`@tailwindcss/postcss`), cores OKLCH, `tw-animate-css` |
| **Componentes** | Shadcn/UI (new-york) + Radix UI (~60 primitives) |
| **Animações** | Framer Motion |
| **Ícones** | Lucide React + React Icons (simple-icons) |
| **Temas** | next-themes (atributo `class`, sistema respeitado) |
| **Analytics** | Vercel Analytics |
| **Fontes** | Geist + Geist Mono (`next/font/google`) |
| **Hooks** | `use-mobile` (breakpoint 768px), `use-toast` (sistema de notificações) |
| **Utilitários** | `clsx` + `tailwind-merge` (`cn()`) |

## Contato e Redes

| Plataforma | Link |
|---|---|
| **GitHub** | [github.com/mtziiinn](https://github.com/mtziiinn) |
| **LinkedIn** | [linkedin.com/in/matheus-goncalves-dev](https://www.linkedin.com/in/matheus-goncalves-dev) |
| **Discord** | `yqc8` ([discord.com/users/yqc8](https://discord.com/users/yqc8)) |
| **Email** | matheusgoncalves1502@gmail.com |
| **WhatsApp** | [+90 531 377 9827](https://wa.me/905313779827) |

## Projetos em Destaque

| Projeto | Stack | Repositório |
|---|---|---|
| **Portfolio Pessoal** | Next.js, Tailwind CSS, TypeScript, Framer Motion | [github.com/mtziiinn/portfolio](https://github.com/mtziiinn/portfolio) |
| **Sistema SaaS** | TypeScript, Next.js, Node.js, Drizzle ORM | [github.com/mtziiinn/SAAS](https://github.com/mtziiinn/SAAS) |
| **Sistema de Tickets** | TypeScript, MongoDB, Node.js | [github.com/mtziiinn/TICKET](https://github.com/mtziiinn/TICKET) |
| **Barber Landing Page** | TypeScript, Tailwind, Supabase, Mercado Pago | [github.com/mtziiinn/BARBER-LANDING](https://github.com/mtziiinn/BARBER-LANDING) |
| **Pro-Auth-API** | Node.js, Express, Prisma 7, Redis, JWT | [github.com/mtziiinn/Pro-Auth-API](https://github.com/mtziiinn/Pro-Auth-API) |

## Skills (22)

React · Node.js · TypeScript · JavaScript · Next.js · Discord.js · Drizzle ORM · Prisma · Redis · MongoDB · Supabase · PostgreSQL · MySQL · Zod · Express.js · TanStack Query · Mercado Pago · Shadcn/UI · Tailwind CSS · Lua · Git · Docker

## Estrutura

```
app/                        # Rotas e layout (App Router)
  layout.tsx                # Root layout: fonts, ThemeProvider, MouseEffect, Analytics
  page.tsx                  # SPA com 8 seções (Header → Footer)
  globals.css               # Estilos Tailwind v4 + variáveis OKLCH + tema
  icon.svg                  # Favicon SVG personalizado
components/
  MatheusGoncalvesLogo.tsx  # Logo "MG" com scroll-to-top
  theme-provider.tsx        # Provider next-themes (dark padrão)
  portfolio/                # Componentes do portfólio (13 arquivos)
  ui/                       # ~60 componentes Shadcn/UI (Radix primitives)
hooks/                      # use-mobile.ts, use-toast.ts
lib/                        # utils.ts (cn())
public/
  images/profile.png        # Foto de perfil
  placeholder-*.*           # Assets placeholder (não utilizados)
styles/
  globals.css                # ⚠️ Não utilizado (boilerplate shadcn residual)
```

## Configuração

| Arquivo | Detalhe |
|---|---|
| `next.config.mjs` | Turbopack root, `images.unoptimized: true` |
| `postcss.config.mjs` | Plugin `@tailwindcss/postcss` |
| `components.json` | Shadcn style new-york, baseColor neutral, alias `@/` |
| `tsconfig.json` | Strict, ES6 target, path alias `@/*` |
| `eslint.config.mjs` | `eslint-config-next` com 2 regras desabilitadas |
| `.gitignore` | `.next/`, `node_modules`, `.vercel/`, `.env*.local` |

## Instalação

```bash
git clone https://github.com/mtziiinn/portfolio
cd portfolio
npm install
npm run dev     # Desenvolvimento (localhost:3000)
npm run build   # Build de produção
npm run lint    # Verificação de lint
```

## Licença

MIT
