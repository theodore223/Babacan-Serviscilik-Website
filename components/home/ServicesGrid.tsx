'use client'
import { motion } from 'framer-motion'
import { GraduationCap, HardHat, Briefcase, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import SectionBackground from '@/components/ui/SectionBackground'

const ICONS = { GraduationCap, HardHat, Briefcase }

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-[#0D1F3C] to-[#0F1E35]">

      <SectionBackground />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Hizmetlerimiz
          </span>
          <h2 className="font-serif text-4xl text-white mt-2 gold-line">
            Ne Sunuyoruz?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={s.title}
                className="rounded-2xl p-8 card-hover cursor-pointer group"
                style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8" style={{ color: s.accent }} />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link
                  href="/hizmetler"
                  className="flex items-center gap-2 text-sm font-medium
                             text-white/60 group-hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Detaylı Bilgi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
