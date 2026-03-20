'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react'

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-[#1a1a1f] bg-[#0a0a0c]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">
              <span
                style={{
                  background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ALVIDEON STUDIOS
              </span>
            </h3>
            <p className="text-[#9a9aa3] text-sm leading-relaxed">
              A division of AB GROUPS
            </p>
            <p className="text-[#9a9aa3] text-sm leading-relaxed">
              Crafting powerful cinematic experiences that merge human psychology with cutting-edge
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[#f5f5f7] font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#9a9aa3] hover:text-[#d4a853] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-[#f5f5f7] font-semibold text-sm uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(15,15,18,0.6)] flex items-center justify-center text-[#9a9aa3] hover:text-[#d4a853] hover:border-[#d4a853]/30 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#9a9aa3] text-sm">
              © {new Date().getFullYear()} Alvideon Studios. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#9a9aa3] hover:text-[#d4a853] transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#9a9aa3] hover:text-[#d4a853] transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
