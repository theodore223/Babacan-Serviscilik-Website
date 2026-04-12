'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { STATS } from '@/lib/constants'
import SectionBackground from '@/components/ui/SectionBackground'

export default function AboutSnippet() {
  const [fleetImgError, setFleetImgError] = useState(false)

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0F1E35]">

      <SectionBackground circleSize={500} circleSize2={400} dotCount={4} />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Hakkımızda
          </span>
          <h2 className="font-serif text-3xl text-white mt-2 mb-6 gold-line-left">
            Dörtyol&apos;un Köklü Taşımacısı
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            15 yılı aşkın süredir Dörtyol ve çevresinde öğrenci, işçi ve personel taşımacılığı
            yapıyoruz. Güvenli, dakik ve konforlu hizmet anlayışımızla binlerce aileye ve kuruma
            güven verdik. Bakımlı araç filomuz ve deneyimli sürücü kadromuzla her gün yollardayız.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-gold pl-4">
                <span className="text-gold font-black text-3xl">{s.value}{s.suffix}</span>
                <p className="text-white/60 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <Link
            href="/hakkimizda"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white
                       font-bold px-6 py-3 rounded-full text-sm
                       hover:border-gold hover:text-gold transition-all duration-200 cursor-pointer"
          >
            Daha Fazla Bilgi →
          </Link>
        </motion.div>

        {/* Right: Filo fotoğrafı — yoksa dekoratif fallback */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Gold frame offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-4 border-gold" />

          <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10
                          shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            {!fleetImgError ? (
              <img
                src="/images/fleet.jpg"
                alt="Babacan Serviscilik araç filosu"
                className="w-full h-full object-cover"
                onError={() => setFleetImgError(true)}
              />
            ) : (
              /* Fallback: dekoratif kutu */
              <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center p-12">
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(6)].map((_, i) => (
                      <circle key={i} cx="50%" cy="50%" r={`${30 + i * 15}%`}
                        fill="none" stroke="#C89B3C" strokeWidth="1" />
                    ))}
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-[100px] font-black text-white/10 leading-none select-none">B</div>
                  <p className="text-gold text-5xl font-black leading-none mt-2">15+</p>
                  <p className="text-white/70 text-sm tracking-widest uppercase mt-2">Yıl Deneyim</p>
                  <div className="w-12 h-px bg-gold mx-auto my-4" />
                  <p className="text-white font-bold text-xl">BABACAN</p>
                  <p className="text-gold text-xs tracking-[0.3em] uppercase">Serviscilik</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
