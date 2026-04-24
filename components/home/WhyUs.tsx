'use client'
import { motion } from 'framer-motion'
import { Star, Clock, Shield, MapPin } from 'lucide-react'
import { WHY_US } from '@/lib/constants'
import SectionBackground from '@/components/ui/SectionBackground'

const ICONS = { Star, Clock, Shield, MapPin }

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0F1E35]">

      <SectionBackground circleSize={450} circleSize2={350} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Farkımız
          </span>
          <h2 className="font-serif text-4xl text-white mt-2 gold-line">
            Neden Biz?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, type: 'spring' }}
              >
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4
                                hover:scale-110 transition-transform duration-200 cursor-default">
                  <Icon className="w-9 h-9 text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-white/75 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
