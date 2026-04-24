'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { STATS } from '@/lib/constants'
import SectionBackground from '@/components/ui/SectionBackground'

export default function AboutSnippet() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0F1E35]">

      <SectionBackground circleSize={500} circleSize2={400} dotCount={4} />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Sol: Metin */}
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
          <p className="text-white/75 leading-relaxed mb-8">
            20 yılı aşkın süredir Dörtyol ve çevresinde öğrenci, işçi ve personel taşımacılığı
            yapıyoruz. Güvenli, dakik ve konforlu hizmet anlayışımızla binlerce aileye ve kuruma
            güven verdik. Bakımlı araç filomuz ve deneyimli sürücü kadromuzla her gün yollardayız.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-gold pl-4">
                <span className="text-gold font-black text-3xl">{s.value}{s.suffix}</span>
                <p className="text-white/75 text-sm mt-0.5">{s.label}</p>
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

        {/* Sağ: Fotoğraf */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Altın çerçeve offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-4 border-gold/60" />

          <div className="relative rounded-3xl overflow-hidden aspect-square border border-gold/20
                          shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/about/hakkimizda.jpg"
              alt="Babacan Serviscilik"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E35]/30 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
