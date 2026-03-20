'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { X, Calendar, Clock, Film } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const project = {
  title: 'The Last Sight',
  description: 'Dark psychological thriller about technology, hacking, manipulation, betrayal, and revenge.',
  genres: ['Thriller', 'Action', 'Revenge', 'Psychological', 'Crime', 'Sci-Fi'],
  director: 'Aayush M. Lambhade',
  starring: 'Tejas S. Gafat',
  writer: 'Arya M. Moharle',
  cinematography: 'Utkarsh P. Wankhede',
  releaseDate: 'Coming Soon',
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,10,12,0.5)] to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 max-w-7xl mx-auto"
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
                Our Projects
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#d4a853] to-[#b8923f]" />
            <p className="mt-6 text-lg text-[#9a9aa3] max-w-2xl mx-auto">
              Discover our cinematic creations that push boundaries and explore the depths of human
              experience
            </p>
          </motion.div>

          {/* Project Card */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm hover:border-[#d4a853]/30 transition-all duration-300 group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-64 sm:h-80 bg-gradient-to-br from-[#0a0a0c] to-[#1a1a1f] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Film className="w-24 h-24 text-[#d4a853]/30 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,3,3,0.9)] via-[rgba(3,3,3,0.5)] to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#d4a853]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f7] mb-3 group-hover:text-[#d4a853] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#9a9aa3] mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Genres */}
                <div className="flex flex-wrap gap-2">
                  {project.genres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium text-[#d4a853] border border-[#d4a853]/30 rounded-full bg-[rgba(212,168,83,0.1)]"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <div className="mt-6 flex items-center text-[#d4a853] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  View Details
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-2xl w-full bg-[#0a0a0c] border-[#1a1a1f] text-[#f5f5f7]">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl sm:text-3xl font-bold">
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {project.title}
                    </span>
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-[#9a9aa3] leading-relaxed">{project.description}</p>
                  </div>

                  {/* Genres */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#f5f5f7] mb-3 uppercase tracking-wider">
                      Genres
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.genres.map((genre, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium text-[#d4a853] border border-[#d4a853]/30 rounded-full bg-[rgba(212,168,83,0.1)]"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credits */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)]">
                      <div className="flex items-center gap-3 mb-2">
                        <Film className="w-5 h-5 text-[#d4a853]" />
                        <span className="text-sm text-[#9a9aa3]">Director</span>
                      </div>
                      <p className="text-[#f5f5f7] font-medium">{project.director}</p>
                    </div>

                    <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)]">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-[#d4a853]" />
                        <span className="text-sm text-[#9a9aa3]">Writer</span>
                      </div>
                      <p className="text-[#f5f5f7] font-medium">{project.writer}</p>
                    </div>

                    <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)]">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-[#d4a853]" />
                        <span className="text-sm text-[#9a9aa3]">Starring</span>
                      </div>
                      <p className="text-[#f5f5f7] font-medium">{project.starring}</p>
                    </div>

                    <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)]">
                      <div className="flex items-center gap-3 mb-2">
                        <Film className="w-5 h-5 text-[#d4a853]" />
                        <span className="text-sm text-[#9a9aa3]">Cinematography</span>
                      </div>
                      <p className="text-[#f5f5f7] font-medium">{project.cinematography}</p>
                    </div>
                  </div>

                  {/* Release Info */}
                  <div className="p-4 rounded-lg border border-[#d4a853]/30 bg-[rgba(212,168,83,0.1)]">
                    <p className="text-center text-[#d4a853] font-semibold">
                      {project.releaseDate}
                    </p>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
