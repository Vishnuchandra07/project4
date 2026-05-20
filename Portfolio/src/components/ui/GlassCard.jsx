import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = true,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`glass rounded-2xl ${hover ? 'glass-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
