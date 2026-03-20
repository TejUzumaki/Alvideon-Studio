'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Film, Target, Calendar } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Alvideon
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#d4a853] to-[#b8923f]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg sm:text-xl text-[#f5f5f7] leading-relaxed">
              Independent film production studio creating dark, psychological, emotional, and
              technology-driven stories.
            </p>

            <div className="p-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4a853]/20 to-[#b8923f]/20 flex items-center justify-center border border-[rgba(212,168,83,0.2)]">
                  <Target className="w-6 h-6 text-[#d4a853]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#f5f5f7] mb-2">Our Vision</h3>
                  <p className="text-[#9a9aa3] leading-relaxed">
                    Craft powerful cinematic experiences merging human psychology with cutting-edge
                    technology
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm">
              <Calendar className="w-6 h-6 text-[#d4a853] flex-shrink-0" />
              <div>
                <p className="text-sm text-[#9a9aa3]">Founded</p>
                <p className="text-2xl font-bold text-[#f5f5f7]">2024</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              {
                icon: Film,
                title: 'Dark Narratives',
                description: 'Exploring the depths of human psychology',
              },
              {
                icon: Target,
                title: 'Emotional Stories',
                description: 'Creating powerful, memorable experiences',
              },
              {
                icon: Film,
                title: 'Tech-Driven',
                description: 'Innovation meets traditional storytelling',
              },
              {
                icon: Calendar,
                title: 'Independent Spirit',
                description: 'Creative freedom and artistic vision',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm hover:border-[#d4a853]/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-[#d4a853] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-[#f5f5f7] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#9a9aa3] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
