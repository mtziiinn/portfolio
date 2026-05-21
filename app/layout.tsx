import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/portfolio/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Matheus Gonçalves | Full Stack Developer',
  description: 'Desenvolvedor Full Stack focado em back-end, construindo APIs robustas, sistemas de autenticação e automações.',
  openGraph: {
    title: 'Matheus Gonçalves | Full Stack Developer',
    description: 'Desenvolvedor Full Stack focado em back-end, construindo APIs robustas e sistemas escaláveis.',
    url: 'https://mts7.vercel.app/',
    siteName: 'Matheus Gonçalves Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg?v=2',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}




