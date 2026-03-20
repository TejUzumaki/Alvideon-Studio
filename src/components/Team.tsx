'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { User, Briefcase, PenTool, Camera } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const teamMembers = [
  {
    name: 'Aayush M. Lambhade',
    role: 'Founder / Studio Head',
    bio: 'Visionary leader driving creative direction',
    icon: Briefcase,
  },
  {
    name: 'Tejas S. Gafat',
    role: 'Lead Actor',
    bio: 'Brings depth and realism to characters',
    icon: User,
  },
  {
    name: 'Arya M. Moharle',
    role: 'Scriptwriter',
    bio: 'Creates dark and compelling narratives',
    icon: PenTool,
  },
  {
    name: 'Utkarsh P. Wankhede',
    role: 'Director of Photography',
    bio: 'Captures cinematic visuals',
    icon: Camera,
  },
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null)
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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <>
      <section
        id="team"
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
                Our Team
              </span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#d4a853] to-[#b8923f]" />
            <p className="mt-6 text-lg text-[#9a9aa3] max-w-2xl mx-auto">
              Meet the creative minds behind our cinematic masterpieces
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedMember(member)}
                className="group relative p-6 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] backdrop-blur-sm hover:border-[#d4a853]/30 transition-all duration-300 cursor-pointer"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <Avatar className="w-24 h-24 rounded-2xl border-2 border-[#d4a853]/30 group-hover:border-[#d4a853] transition-colors duration-300">
                    <AvatarFallback
                      className="text-2xl font-semibold bg-gradient-to-br from-[#d4a853]/20 to-[#b8923f]/20 text-[#d4a853]"
                    >
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#f5f5f7] mb-2 group-hover:text-[#d4a853] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#9a9aa3] mb-4">{member.role}</p>
                </div>

                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(212,168,83,0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <member.icon className="w-5 h-5 text-[#d4a853]" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-[#d4a853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="max-w-md w-full bg-[#0a0a0c] border-[#1a1a1f] text-[#f5f5f7]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <DialogHeader>
                  <div className="flex flex-col items-center mb-4">
                    <Avatar className="w-24 h-24 rounded-2xl border-2 border-[#d4a853] mb-4">
                      <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-[#d4a853]/20 to-[#b8923f]/20 text-[#d4a853]">
                        {getInitials(selectedMember.name)}
                      </AvatarFallback>
                    </Avatar>
                    <DialogTitle className="text-2xl font-bold text-center">
                      <span
                        style={{
                          background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {selectedMember.name}
                      </span>
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="text-center space-y-4">
                  <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)]">
                    <p className="text-sm text-[#9a9aa3] mb-1">Role</p>
                    <p className="text-[#f5f5f7] font-medium">{selectedMember.role}</p>
                  </div>

                  <div className="p-4 rounded-lg border border-[#d4a853]/30 bg-[rgba(212,168,83,0.1)]">
                    <p className="text-sm text-[#9a9aa3] mb-1">About</p>
                    <p className="text-[#d4a853] font-medium">{selectedMember.bio}</p>
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
