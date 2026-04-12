import type { Metadata } from 'next'
import { GraduationCap, HardHat, Briefcase, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { COMPANY, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Babacan Serviscilik',
  description: 'Öğrenci servisi, işçi servisi ve personel taşımacılığı hizmetlerimiz hakkında detaylı bilgi.',
}

const ICON_MAP = { GraduationCap, HardHat, Briefcase }

const DETAILS = [
  {
    points: [
      'Okul saatlerine göre esnek güzergah planlaması',
      'Deneyimli ve ehliyetli sürücüler',
      'Temiz ve bakımlı araçlar',
      'Veli bilgilendirme sistemi',
      'Kapıdan kapıya servis imkânı',
    ],
  },
  {
    points: [
      'Vardiya saatlerine tam uyum',
      'Fabrika ve atölye güzergahları',
      'Toplu taşıma anlaşmaları',
      'Gece vardiyası desteği',
      'Büyük gruplar için araç kapasitesi',
    ],
  },
  {
    points: [
      'Kurumsal fatura ve anlaşma imkânı',
      'Esnek güzergah yönetimi',
      'Klimalı ve konforlu araçlar',
      'Uzun vadeli hizmet sözleşmeleri',
      'Firma ihtiyacına özel planlama',
    ],
  },
]

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081529] to-[#0D1F3C]">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
          Hizmetlerimiz
        </span>
        <h1 className="font-serif text-5xl text-white mt-3 mb-4">
          Ne Sunuyoruz?
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Dörtyol ve çevresinde güvenilir, dakik ve konforlu taşımacılık çözümleri.
        </p>
      </section>

      {/* Service cards */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.icon as keyof typeof ICON_MAP]
            return (
              <div
                key={s.title}
                className="rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start"
                style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" style={{ color: s.accent }} />
                  </div>
                  <h2 className="text-white text-3xl font-bold mb-3">{s.title}</h2>
                  <p className="text-white/75 leading-relaxed">{s.desc}</p>
                </div>
                <ul className="space-y-3">
                  {DETAILS[i].points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-white/10">
        <h2 className="font-serif text-3xl text-white mb-4">Hemen Bilgi Alın</h2>
        <p className="text-white/60 mb-8">Servis talebi veya fiyat bilgisi için bizi arayın.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={COMPANY.phoneHref}
            className="bg-gold text-navy font-bold px-8 py-4 rounded-full
                       hover:bg-goldLight transition-all duration-200 hover:scale-105"
          >
            Hemen Ara
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-8 py-4 rounded-full
                       hover:bg-green-500 transition-all duration-200 hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}
