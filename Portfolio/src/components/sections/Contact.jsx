import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { personalInfo } from '../../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'galipellivishnuchandra999@gmail.com',
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.social.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View repositories',
      href: personalInfo.social.github,
    },
  ]

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and AI/ML opportunities"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((item, i) => (
              <GlassCard key={item.label} className="p-5" delay={i * 0.1} hover={false}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              </GlassCard>
            ))}

            <GlassCard className="p-5" delay={0.35} hover={false}>
              <div className="flex items-center gap-4 text-slate-400">
                <MapPin size={22} className="text-purple-400 shrink-0" />
                <p className="text-sm">Telangana, India</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="lg:col-span-3 p-6 md:p-8" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
              >
                <Send size={18} />
                {submitted ? 'Opening email client...' : 'Send Message'}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
