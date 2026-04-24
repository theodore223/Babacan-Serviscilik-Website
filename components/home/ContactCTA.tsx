'use client'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-navyDark to-navy">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Top line */}
        <div className="w-16 h-px bg-gold mx-auto mb-8" />

        <h2 className="font-serif text-4xl text-white mb-4">Hemen Ulaşın</h2>
        <p className="text-white/75 text-lg mb-10">
          Servis talebi, bilgi veya rezervasyon için
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2.5 bg-gold text-navy font-bold
                       px-8 py-4 rounded-full text-base
                       hover:bg-goldLight hover:scale-105 transition-all duration-200
                       animate-pulse-gold cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Hemen Ara
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-green-600 text-white font-bold
                       px-8 py-4 rounded-full text-base
                       hover:bg-green-500 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={COMPANY.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 border-2 border-white/30 text-white font-bold
                       px-8 py-4 rounded-full text-base
                       hover:border-gold hover:text-gold hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <MapPin className="w-5 h-5" />
            Konuma Git
          </a>
        </div>
      </motion.div>
    </section>
  )
}
