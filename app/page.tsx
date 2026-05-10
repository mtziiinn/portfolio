import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Stats } from "@/components/portfolio/stats"
import { Skills } from "@/components/portfolio/skills"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
