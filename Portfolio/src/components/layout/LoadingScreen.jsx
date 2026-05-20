import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="relative mb-8"
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-purple-500"
          style={{ width: 72, height: 72 }}
        />
        <div className="w-[72px] h-[72px] flex items-center justify-center">
          <Brain className="w-8 h-8 text-cyan-400" />
        </div>
      </motion.div>

      <motion.p
        className="font-mono text-sm text-slate-400 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        INITIALIZING AI SYSTEMS
      </motion.p>

      <motion.div
        className="mt-6 h-1 w-48 rounded-full bg-white/5 overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
