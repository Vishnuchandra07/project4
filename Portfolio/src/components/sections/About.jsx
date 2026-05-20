import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { about } from '../../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="Passionate about AI, deep learning, and building intelligent systems"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-8"
        >
          <GlassCard className="lg:col-span-3 p-6 md:p-8" delay={0.1}>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {about.bio}
            </p>
          </GlassCard>

          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="p-6" delay={0.2}>
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <GraduationCap size={24} />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Current Education
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">
                    {about.education.institution}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    {about.education.degree}
                  </p>
                  <p className="text-sm text-cyan-400/90 mt-2 font-mono">
                    CGPA: {about.education.cgpa}
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" delay={0.3}>
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <BookOpen size={24} />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-3">
                    Relevant Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {about.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
