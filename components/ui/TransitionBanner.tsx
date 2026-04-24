'use client'
import { motion } from 'framer-motion'
import { GraduationCap, HardHat, Briefcase, Star, Clock, Shield, MapPin, Bus, Megaphone, FileText, Bell, Camera } from 'lucide-react'

interface TransitionBannerProps {
  variant: 'owner' | 'services' | 'whyus' | 'reviews' | 'about' | 'gallery' | 'galeri'
}

export default function TransitionBanner({ variant }: TransitionBannerProps) {
  if (variant === 'whyus')   return <WhyUsBanner />
  if (variant === 'reviews') return <ReviewsBanner />
  if (variant === 'about')   return <AboutBanner />
  if (variant === 'gallery') return <GalleryBanner />
  if (variant === 'galeri')  return <GaleriBanner />

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
            <p className="text-white/70 text-sm mt-1 tracking-wide">Kurucu & Genel Müdür — 20+ Yıl Deneyim</p>
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
          <p className="text-white/70 text-sm mt-1">Öğrenci · İşçi · Personel Taşımacılığı</p>
        </motion.div>

        {/* Right: icon row */}
        <motion.div
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[GraduationCap, HardHat, Briefcase].map((Icon, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-white/8 border border-gold/20
                         flex items-center justify-center"
            >
              <Icon className="w-5 h-5 text-gold" />
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
          {[Star, Clock, Shield, MapPin].map((Icon, i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-white/8 border border-gold/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold" />
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
          <p className="text-white/70 text-sm mt-1">Güven · Dakiklik · Deneyim · Yerel Hakimiyet</p>
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
          <p className="text-white/70 text-sm mt-1">Binlerce memnun yolcu · 5.0 Google Puanı</p>
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

function GaleriBanner() {
  return (
    <div className="relative bg-[#081529] py-6 px-6 flex items-center justify-center">
      <div className="flex items-center gap-5 max-w-xs w-full">
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="flex items-center gap-2 shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Camera className="w-4 h-4 text-gold" />
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Araç Filosu</span>
        </motion.div>
        <motion.div
          className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  )
}

function GalleryBanner() {
  return (
    <div className="relative bg-[#0F1E35] py-6 px-6 flex items-center justify-center">
      <div className="flex items-center gap-5 max-w-xs w-full">
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="flex items-center gap-2 shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Megaphone className="w-4 h-4 text-gold" />
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Servis İlanları</span>
        </motion.div>
        <motion.div
          className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  )
}

function AboutBanner() {
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-1">Hakkımızda</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light">
            Dörtyol&apos;un <span className="text-gold font-bold">Köklü Taşımacısı</span>
          </h2>
          <p className="text-white/70 text-sm mt-1">20+ Yıl · 20+ Araç · 500+ Mutlu Müşteri</p>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[Bus, Shield, Star].map((Icon, i) => (
            <div key={i} className="w-12 h-12 rounded-full bg-white/8 border border-gold/20 flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold" />
            </div>
          ))}
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
