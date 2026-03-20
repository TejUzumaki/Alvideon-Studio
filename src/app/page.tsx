'use client'

import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/3d/ParticleBackground'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#030303]">
      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Stats Section */}
      <Stats />

      {/* Projects Section */}
      <Projects />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </main>
  )
}
