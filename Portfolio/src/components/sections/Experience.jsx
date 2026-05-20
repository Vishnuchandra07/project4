import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { experience } from '../../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Internships and hands-on learning experiences"
        />

        <div className="relative pl-8 md:pl-10">
          <motion.div
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
          />

          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 md:-left-10 top-6 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />

              <div className="glass rounded-2xl p-6 md:p-8 glass-hover">
                <span className="font-mono text-xs text-purple-400">
                  {item.duration}
                </span>
                <div className="flex items-start gap-3 mt-3 mb-5">
                  <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Briefcase size={20} />
                  </span>
                  <h3 className="font-semibold text-white text-base md:text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {item.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-cyan-500 shrink-0 mt-0.5"
                      />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
