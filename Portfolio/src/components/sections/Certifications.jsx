import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { certifications } from '../../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={cert.id} className="p-6 group" delay={index * 0.08}>
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-amber-400 mb-4 border border-amber-500/20"
              >
                <Award size={24} />
              </motion.div>
              <h3 className="font-semibold text-white text-sm md:text-base mb-1 group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-slate-400 mb-3">{cert.issuer}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-purple-400/90">
                  {cert.year}
                </span>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                    aria-label={`View ${cert.title} credential`}
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-slate-600 uppercase">
                    Link pending
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
