'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { HERO_SLIDES, COMPANY } from '@/lib/constants'

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-b from-[#081529] to-[#0D1F3C] flex items-center">

      {/* ── BACKGROUND: Geometric SVG Animations ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Large rotating circle — bottom left (md ve üstü) */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]
                     rounded-full border border-gold/10 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px]
                     rounded-full border border-gold/15 hidden md:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Large rotating circle — top right (md ve üstü) */}
        <motion.div
          className="absolute -top-60 -right-60 w-[700px] h-[700px]
                     rounded-full border-[1px] border-gold/20 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />

        {/* Diagonal road lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${-20 + i * 18}%`} y1="100%"
              x2={`${20 + i * 18}%`}  y2="0%"
              stroke="#C89B3C" strokeWidth="1"
            />
          ))}
        </svg>

        {/* Right gold gradient blob */}
        <div className="absolute right-0 top-0 w-1/2 h-full
                        bg-gradient-to-l from-gold/8 to-transparent" />

        {/* Floating gold particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
            style={{
              left: `${15 + i * 15}%`,
              top:  `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}

      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="lg:w-1/2">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              Babacan Serviscilik
            </span>
          </motion.div>

          {/* Animated heading */}
          <div className="overflow-hidden mb-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={current}
                className="font-serif font-light text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)' }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              >
                {HERO_SLIDES[current].title}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Animated subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              className="text-white/60 text-xl md:text-2xl mb-10 font-light"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {HERO_SLIDES[current].sub}
            </motion.p>
          </AnimatePresence>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2.5 bg-gold text-navy
                         font-bold px-8 py-4 rounded-full text-lg
                         hover:bg-goldLight transition-all duration-200
                         hover:scale-105 hover:shadow-[0_8px_32px_rgba(200,155,60,0.5)]
                         animate-pulse-gold cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Hemen Ara
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-2 border-white/30 text-white
                         font-bold px-8 py-4 rounded-full text-lg
                         hover:border-gold hover:text-gold transition-all duration-200 cursor-pointer"
            >
              WhatsApp
            </a>
          </motion.div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-12">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? 'w-8 bg-gold' : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: logo */}
      <div className="hidden lg:flex items-center justify-center
                      absolute right-40 top-1/2 -translate-y-1/2 z-30">
        <div className="w-[560px] h-[560px] rounded-full border-2 border-gold/40
                        flex items-center justify-center bg-white/8
                        backdrop-blur-md shadow-[0_0_120px_rgba(200,155,60,0.2)]">
          <Image
            src="/images/logo.png"
            alt="Babacan Serviscilik Logo"
            width={420}
            height={420}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24
                      bg-gradient-to-b from-transparent to-[#0F1E35]
                      pointer-events-none z-10" />
    </section>
  )
}
