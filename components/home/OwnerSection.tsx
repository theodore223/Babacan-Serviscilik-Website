'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionBackground from '@/components/ui/SectionBackground'

export default function OwnerSection() {
  const [ownerImgError, setOwnerImgError] = useState(false)

  return (
    <section className="relative bg-[#0F1E35] py-24 px-6 overflow-hidden">

      <SectionBackground circleSize={400} circleSize2={300} dotCount={4} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* SOL — Fotoğraf */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[420px]">
              {/* Altın çerçeve efekti */}
              <div className="absolute -bottom-4 -right-4 w-full h-full
                              border-2 border-gold/40 rounded-2xl z-0" />
              {/* Fotoğraf kutusu */}
              <div className="relative z-10 w-full max-w-[420px] h-[380px] md:h-[520px] rounded-2xl overflow-hidden
                              border border-white/10 bg-white/5 flex items-center justify-center
                              shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                {!ownerImgError ? (
                  <Image
                    src="/images/owner.jpg"
                    alt="Ahmet Işıkoğlu"
                    fill
                    className="object-cover scale-105"
                    onError={() => setOwnerImgError(true)}
                  />
                ) : (
                  /* Fallback: dekoratif kutu */
                  <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center p-12">
                    <div className="absolute inset-0 opacity-5">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        {[...Array(6)].map((_, i) => (
                          <circle key={i} cx="50%" cy="50%" r={`${25 + i * 12}%`}
                            fill="none" stroke="#C89B3C" strokeWidth="1" />
                        ))}
                      </svg>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="text-[100px] font-black text-white/10 leading-none select-none">A</div>
                      <p className="text-gold text-3xl font-bold leading-none mt-2">Ahmet</p>
                      <p className="text-white font-bold text-xl mt-1">Işıkoğlu</p>
                      <div className="w-12 h-px bg-gold mx-auto my-4" />
                      <p className="text-white/70 text-sm tracking-widest uppercase">Kurucu</p>
                      <p className="text-gold text-xs tracking-[0.2em] uppercase mt-1">15+ Yıl Deneyim</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Gold nokta dekoru */}
              <div className="absolute -top-3 -left-3 w-6 h-6
                              rounded-full bg-gold z-20" />
            </div>
          </motion.div>

          {/* SAĞ — Bilgiler */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* İsim */}
            <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-2">
              Ahmet
            </h2>
            <h2 className="font-serif text-4xl md:text-5xl text-gold font-bold mb-8">
              Işıkoğlu
            </h2>

            {/* Yapılan işler listesi */}
            <div className="space-y-4">
              {[
                'Dörtyol\'da 15+ yıllık taşımacılık deneyimi',
                'Öğrenci, işçi ve personel servis güzergahları yönetimi',
                '20+ araçlık filonun operasyonel koordinasyonu',
                'Kurumsal firmalarla uzun vadeli servis anlaşmaları',
                'Müşteri memnuniyeti ve sürücü kadrosu denetimi',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-white/70 text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
