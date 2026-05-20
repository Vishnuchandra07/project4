import { motion } from 'framer-motion'
import {
  ArrowDown,
  Download,
  FolderKanban,
  Github,
  Linkedin,
  Code2,
  Trophy,
} from 'lucide-react'
import { personalInfo } from '../../data/portfolio'
import { useTypingEffect } from '../../hooks/useTypingEffect'

const socialIcons = [
  { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Code2, href: personalInfo.social.leetcode, label: 'LeetCode' },
  { icon: Trophy, href: personalInfo.social.hackerrank, label: 'HackerRank' },
]

export default function Hero() {
  const typedRole = useTypingEffect(personalInfo.roles)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-sm text-cyan-400/90 mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            <span className="block text-white">Galipelli</span>
            <motion.span
              className="text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Vishnu Chandra
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="h-8 md:h-10 mb-6 font-mono text-sm md:text-base text-slate-300"
          >
            <span className="text-purple-400">&gt;</span>{' '}
            {typedRole}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 align-middle"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
            >
              <FolderKanban size={18} />
              View Projects
            </button>
            <a
              href={personalInfo.resumePath}
              target={
                personalInfo.resumePath.startsWith('http') ? '_blank' : undefined
              }
              rel={
                personalInfo.resumePath.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              download={
                personalInfo.resumePath.startsWith('http')
                  ? undefined
                  : personalInfo.resumeFileName || 'Resume.pdf'
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm font-medium text-slate-200"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl glass glass-hover text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 blur-sm"
            />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full glow-ring overflow-hidden glass">
              <img
                src="/profile.jpg"
                alt="Galipelli Vishnu Chandra"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 glass px-3 py-2 rounded-xl text-xs font-mono text-cyan-400 border border-cyan-500/30"
            >
              AI/ML Engineer
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  )
}
