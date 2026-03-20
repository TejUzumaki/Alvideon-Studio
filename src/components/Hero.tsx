'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b8923f]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-[0.3em] text-[#9a9aa3] border border-[rgba(255,255,255,0.08)] rounded-full bg-[rgba(15,15,18,0.6)] backdrop-blur-sm">
            A DIVISION OF AB GROUPS
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #d4a853, #e8c97a, #d4a853, #b8923f)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradientShift 8s ease infinite',
          }}
        >
          ALVIDEON
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#f5f5f7] mb-12 tracking-wide"
        >
          Cinematic Storytelling. Dark Worlds. Powerful Narratives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('#projects')}
            className="group relative px-8 py-6 text-base font-medium tracking-wide overflow-hidden rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #d4a853, #b8923f)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection('#about')}
            variant="outline"
            className="px-8 py-6 text-base font-medium tracking-wide rounded-lg border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm text-[#f5f5f7] hover:bg-[rgba(255,255,255,0.08)] hover:text-[#d4a853] hover:border-[#d4a853]/30 transition-all duration-300"
          >
            About Studio
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-[#d4a853]/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-[#d4a853] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}
