'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionBackground from '@/components/ui/SectionBackground'

export default function OwnerSection() {
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
                              border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/owner/ahmet-isikoglu.jpg"
                  alt="Ahmet Işıkoğlu"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/30 to-transparent" />
              </div>
              {/* Gold nokta dekoru */}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gold z-20" />
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
                'Dörtyol\'da 20+ yıllık taşımacılık deneyimi',
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
                  <span className="text-white/75 text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
