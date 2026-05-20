import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Brain } from 'lucide-react'
import { navLinks } from '../../data/portfolio'
import { useScrollSpy } from '../../hooks/useScrollSpy'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(navLinks.map((l) => l.id))

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
    >
      <nav className="max-w-6xl mx-auto glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group"
        >
          <span className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors">
            <Brain className="w-5 h-5 text-cyan-400" />
          </span>
          <span className="font-semibold text-sm sm:text-base hidden sm:block">
            <span className="text-gradient">VC</span>
            <span className="text-slate-400 font-normal ml-1">Portfolio</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeId === link.id
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-6xl mx-auto mt-2 glass rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
                      activeId === link.id
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-slate-400 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
