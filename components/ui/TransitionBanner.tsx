'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TransitionBannerProps {
  variant: 'owner' | 'services' | 'whyus' | 'reviews'
}

export default function TransitionBanner({ variant }: TransitionBannerProps) {
  if (variant === 'whyus') return <WhyUsBanner />
  if (variant === 'reviews') return <ReviewsBanner />

  if (variant === 'owner') {
    return (
      <div className="relative overflow-hidden bg-[#081529] py-10 px-6">
        {/* Diagonal gold line decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1={`${-10 + i * 22}%`} y1="100%"
                x2={`${20 + i * 22}%`}  y2="0%"
                stroke="#C89B3C" strokeWidth="1"
              />
            ))}
          </svg>
          {/* Left gold glow */}
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-gold/10 to-transparent" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#081529]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-10">

          {/* Photo circle */}
          <motion.div
            className="shrink-0 hidden sm:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold/60
                            shadow-[0_0_32px_rgba(200,155,60,0.25)]">
              <Image
                src="/images/owner.jpg"
                alt="Ahmet Işıkoğlu"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Vertical gold line */}
          <motion.div
            className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent shrink-0"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">Tanışın</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
              Ahmet{' '}
              <span className="text-gold font-bold">Işıkoğlu</span>
            </h2>
            <p className="text-white/50 text-sm mt-1 tracking-wide">Kurucu & Genel Müdür — 15+ Yıl Deneyim</p>
          </motion.div>

          {/* Decorative right side dots */}
          <div className="ml-auto hidden md:flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold/40"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom gold line */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    )
  }

  // variant === 'services'
  return (
    <div className="relative overflow-hidden bg-[#0a1828] py-10 px-6">
      {/* Top gold line */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={`${-10 + i * 22}%`} y1="100%"
              x2={`${20 + i * 22}%`}  y2="0%"
              stroke="#C89B3C" strokeWidth="1"
            />
          ))}
        </svg>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8">

        {/* Left: label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">Keşfedin</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Neler{' '}
            <span className="text-gold font-bold">Sunuyoruz?</span>
          </h2>
          <p className="text-white/50 text-sm mt-1">Öğrenci · İşçi · Personel Taşımacılığı</p>
        </motion.div>

        {/* Right: icon row */}
        <motion.div
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['🎓', '🦺', '💼'].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-white/8 border border-gold/20
                         flex items-center justify-center text-xl"
            >
              {emoji}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  )
}

// variant === 'whyus'
function WhyUsBanner() {
  return (
    <div className="relative overflow-hidden bg-[#081529] py-10 px-6">
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(6)].map((_, i) => (
            <line key={i} x1={`${-10 + i * 22}%`} y1="100%" x2={`${20 + i * 22}%`} y2="0%"
              stroke="#C89B3C" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-gold/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8">
        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {['⭐', '🕐', '🛡️', '📍'].map((emoji, i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-white/8 border border-gold/20 flex items-center justify-center text-xl">
              {emoji}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">Farkımız</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Neden <span className="text-gold font-bold">Bizi</span> Seçmelisiniz?
          </h2>
          <p className="text-white/50 text-sm mt-1">Güven · Dakiklik · Deneyim · Yerel Hakimiyet</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  )
}

function ReviewsBanner() {
  return (
    <div className="relative overflow-hidden bg-[#0a1828] py-10 px-6">
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(6)].map((_, i) => (
            <line key={i} x1={`${-10 + i * 22}%`} y1="100%" x2={`${20 + i * 22}%`} y2="0%"
              stroke="#C89B3C" strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold/8 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">Referanslar</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Müşterilerimiz <span className="text-gold font-bold">Ne Diyor?</span>
          </h2>
          <p className="text-white/50 text-sm mt-1">Binlerce memnun yolcu · 5.0 Google Puanı</p>
        </motion.div>

        <motion.div
          className="hidden md:flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-gold text-2xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                ★
              </motion.span>
            ))}
          </div>
          <p className="text-white/40 text-xs tracking-widest uppercase">5.0 / 5.0</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent w-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  )
}
