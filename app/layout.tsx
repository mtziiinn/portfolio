import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/portfolio/theme-provider"
import { MouseEffect } from "@/components/portfolio/mouse-effect"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Matheus Gonçalves | Full Stack Developer",
  description: "Desenvolvedor Full Stack focado em back-end, construindo APIs robustas, sistemas de autenticação e automações.",
  icons: {
    icon: "/icon.svg?v=2",
  },
  openGraph: {
    title: "Matheus Gonçalves | Full Stack Developer",
    description: "Desenvolvedor Full Stack focado em back-end, construindo APIs robustas e sistemas escaláveis.",
    url: "https://mts7.vercel.app/",
    siteName: "Matheus Gonçalves Portfolio",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <MouseEffect />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
