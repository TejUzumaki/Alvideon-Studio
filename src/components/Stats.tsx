'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Film, Users, Activity, Heart } from 'lucide-react'

interface StatItem {
  icon: any
  value: number
  label: string
  suffix?: string
}

const stats: StatItem[] = [
  { icon: Film, value: 1, label: 'Projects' },
  { icon: Users, value: 4, label: 'Team Members' },
  { icon: Activity, value: 6, label: 'Genres' },
  { icon: Heart, value: 100, label: 'Passion', suffix: '%' },
]

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const incrementTime = duration / end
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl sm:text-5xl md:text-6xl font-bold">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(212,168,83,0.03)] to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center p-6 sm:p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm hover:border-[#d4a853]/30 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#d4a853]/20 to-[#b8923f]/20 flex items-center justify-center border border-[rgba(212,168,83,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#d4a853]" />
                </div>
              </div>
              {isInView && (
                <div
                  className="mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
              )}
              <p className="text-sm sm:text-base text-[#9a9aa3] font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
