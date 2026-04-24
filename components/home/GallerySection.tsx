'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'
import Image from 'next/image'
import SectionBackground from '@/components/ui/SectionBackground'
import TransitionBanner from '@/components/ui/TransitionBanner'

const ARACLAR = [
  { src: '/images/gallery/arac-1.jpg', caption: 'Araç Filosu'     },
  { src: '/images/gallery/arac-2.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-3.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-4.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-5.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-6.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-7.jpg', caption: 'Servis Araçlarımız' },
  { src: '/images/gallery/arac-8.jpg', caption: 'Servis Araçlarımız' },
]

const ILANLAR = [
  { src: '/images/gallery/ilan-1.jpg', caption: 'Öğrenci Servisi'       },
  { src: '/images/gallery/ilan-2.jpg', caption: 'Personel Taşımacılığı' },
  { src: '/images/gallery/ilan-3.jpg', caption: 'Servis İlanı'          },
  { src: '/images/gallery/ilan-4.jpg', caption: 'Servis İlanı'          },
  { src: '/images/gallery/ilan-5.jpg', caption: 'Servis İlanı'          },
]

const variants = {
  enter:  (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

function GalleryBlock({
  images,
  autoplay = true,
  ratio = '3/4',
}: {
  images: { src: string; caption: string }[]
  autoplay?: boolean
  ratio?: string
}) {
  const [current, setCurrent]     = useState(0)
  const [lightbox, setLightbox]   = useState(false)
  const [direction, setDirection] = useState(1)
  const [resetKey, setResetKey]   = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + images.length) % images.length)
    setResetKey(k => k + 1)
  }, [images.length])

  const next = useCallback((manual = false) => {
    setDirection(1)
    setCurrent(c => (c + 1) % images.length)
    if (manual) setResetKey(k => k + 1)
  }, [images.length])

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next(true) : prev()
    touchStartX.current = null
  }

  useEffect(() => {
    if (!autoplay || lightbox) return
    const t = setInterval(() => next(false), 4000)
    return () => clearInterval(t)
  }, [next, lightbox, autoplay, resetKey])

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     setLightbox(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  return (
    <>
      {/* Çerçeveli slider */}
      <div className="relative rounded-2xl overflow-hidden border border-gold/20
                      shadow-[0_0_40px_rgba(200,155,60,0.08)] bg-[#0a1a2e]
                      mx-auto w-full max-w-lg"
           style={{ aspectRatio: ratio }}
           onTouchStart={handleTouchStart}
           onTouchEnd={handleTouchEnd}>

        {/* Fotoğraf */}
        <AnimatePresence custom={direction} mode="sync">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].caption}
              fill
              sizes="(max-width: 768px) 100vw, 512px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t
                            from-[#0a1a2e]/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Köşe süsü — sol üst */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2
                        border-gold/50 rounded-tl-2xl z-10 pointer-events-none" />
        {/* Köşe süsü — sağ alt */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2
                        border-gold/50 rounded-br-2xl z-10 pointer-events-none" />

        {/* Sayaç */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20
                        text-white/40 text-xs tabular-nums">
          {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>

        {/* Büyüt */}
        <button
          onClick={() => setLightbox(true)}
          className="absolute top-3 right-3 z-20
                     w-8 h-8 rounded-full bg-black/40 border border-white/15
                     flex items-center justify-center text-white/60
                     hover:text-white hover:bg-black/60 transition-all"
        >
          <Expand className="w-4 h-4" />
        </button>

        {/* Oklar */}
        <button onClick={() => prev()}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 rounded-full bg-black/40 border border-white/20
                     flex items-center justify-center text-white
                     hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => next(true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                     w-9 h-9 rounded-full bg-black/40 border border-white/20
                     flex items-center justify-center text-white
                     hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Caption + indikatörler */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-4">
          <motion.p
            key={`cap-${current}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/75 text-sm mb-2 font-medium tracking-wide"
          >
            {images[current].caption}
          </motion.p>
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); setResetKey(k => k + 1) }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? 'w-7 bg-gold' : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10"
              onClick={() => setLightbox(false)}
              aria-label="Galeriyi kapat"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                         w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                         text-white hover:bg-gold hover:text-navy transition-all"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Önceki fotoğraf"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <AnimatePresence custom={direction} mode="sync">
              <motion.div
                key={`lb-${current}`}
                custom={direction}
                variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.4 }}
                className="relative max-h-[85vh] max-w-[85vw] h-[85vh] w-[85vw]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[current].src}
                  alt={images[current].caption}
                  fill
                  sizes="85vw"
                  className="object-contain rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10
                         w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                         text-white hover:bg-gold hover:text-navy transition-all"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Sonraki fotoğraf"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 text-white/40 text-sm">
              {String(current + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function GallerySection() {
  return (
    <>
      {/* ── Araç Filosu ── */}
      <section className="relative overflow-hidden bg-[#0F1E35] py-20 px-6">
        <SectionBackground circleSize={450} circleSize2={350} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Galeri
            </span>
            <h2 className="font-serif text-3xl text-white mt-2 gold-line">
              Araç Filosu
            </h2>
          </div>
          <GalleryBlock images={ARACLAR} autoplay />
        </div>
      </section>

      <TransitionBanner variant="gallery" />

      {/* ── Servis İlanları ── */}
      <section className="relative overflow-hidden bg-[#081529] py-20 px-6">
        <SectionBackground circleSize={400} circleSize2={300} dotCount={4} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Duyurular
            </span>
            <h2 className="font-serif text-3xl text-white mt-2 gold-line">
              Servis İlanlarımız
            </h2>
          </div>
          <GalleryBlock images={ILANLAR} autoplay ratio="2/3" />
        </div>
      </section>
    </>
  )
}
