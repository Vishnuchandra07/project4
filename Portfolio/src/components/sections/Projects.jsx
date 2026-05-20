import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { projects, projectFilters } from '../../data/portfolio'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="AI/ML and computer vision work with real-world impact"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                filter === f.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'glass text-slate-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group glass rounded-2xl overflow-hidden glass-hover flex flex-col ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-xs font-semibold text-white shadow-lg">
                      <Star size={12} fill="currentColor" />
                      Featured Project
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-white text-base md:text-lg mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {project.features.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {project.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs text-slate-500"
                        >
                          <Sparkles size={12} className="text-purple-400 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] md:text-xs rounded-md bg-cyan-500/10 text-cyan-300/90 border border-cyan-500/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-slate-200 transition-colors border border-white/10"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
