import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14 md:mb-16"
    >
      <span className="inline-block font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400/90 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
      </div>
    </motion.div>
  )
}
