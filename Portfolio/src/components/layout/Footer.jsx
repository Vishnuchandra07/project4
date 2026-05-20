import { Brain } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-cyan-500/70" />
          <span>
            © {year}{' '}
            <span className="text-slate-400">{personalInfo.name}</span>
          </span>
        </div>
        <p className="font-mono text-xs">
          Built with React · Vite · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  )
}
