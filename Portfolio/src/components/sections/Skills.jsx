import * as LucideIcons from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { skillCategories } from '../../data/portfolio'

const skillIconMap = {
  Python: LucideIcons.FileCode,
  Java: LucideIcons.Coffee,
  C: LucideIcons.Terminal,
  'C++': LucideIcons.Terminal,
  'Machine Learning': LucideIcons.Brain,
  'YOLO Object Detection': LucideIcons.ScanEye,
  'Model Training': LucideIcons.Cpu,
  'Deep Learning': LucideIcons.Network,
  CNN: LucideIcons.Layers,
  YOLO: LucideIcons.ScanEye,
  TensorFlow: LucideIcons.Box,
  OpenCV: LucideIcons.Eye,
  HTML: LucideIcons.Code,
  CSS: LucideIcons.Palette,
  JavaScript: LucideIcons.Braces,
  SQL: LucideIcons.Table,
  MySQL: LucideIcons.Database,
  Git: LucideIcons.GitBranch,
  'Visual Studio Code': LucideIcons.Code2,
}

function CategoryIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Sparkles
  return <Icon size={22} />
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          subtitle="Tools and technologies I use to build intelligent systems"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={category.id} className="p-6" delay={index * 0.08}>
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-white/10">
                  <CategoryIcon name={category.icon} />
                </span>
                <h3 className="font-semibold text-white text-sm md:text-base">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => {
                  const SkillIcon = skillIconMap[skill] || LucideIcons.Circle
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-slate-300 group"
                    >
                      <span className="p-1.5 rounded-lg bg-white/5 text-cyan-400/80 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                        <SkillIcon size={16} />
                      </span>
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
