import type { Metadata } from 'next'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'İletişim | Babacan Serviscilik',
  description: `Babacan Serviscilik ile iletişime geçin. Tel: ${COMPANY.phone}`,
}

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081529] to-[#0D1F3C]">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
          İletişim
        </span>
        <h1 className="font-serif text-5xl text-white mt-3 mb-4">
          Bize Ulaşın
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          Servis talebi, fiyat bilgisi veya her türlü soru için aşağıdaki kanallardan ulaşabilirsiniz.
        </p>
      </section>

      {/* Contact cards */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

          {/* Phone */}
          <a
            href={COMPANY.phoneHref}
            className="bg-white/8 border border-white/10 rounded-2xl p-8
                       hover:border-gold/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5
                            group-hover:bg-gold/25 transition-colors duration-200">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-white font-bold text-lg mb-1">Telefon</h2>
            <p className="text-gold text-xl font-bold">{COMPANY.phone}</p>
            <p className="text-white/50 text-sm mt-2">Hemen aramak için tıklayın</p>
          </a>

          {/* WhatsApp */}
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/8 border border-white/10 rounded-2xl p-8
                       hover:border-green-400/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-green-500/15 rounded-xl flex items-center justify-center mb-5
                            group-hover:bg-green-500/25 transition-colors duration-200">
              <MessageCircle className="w-7 h-7 text-green-400" />
            </div>
            <h2 className="text-white font-bold text-lg mb-1">WhatsApp</h2>
            <p className="text-green-400 text-xl font-bold">{COMPANY.phone}</p>
            <p className="text-white/50 text-sm mt-2">Mesaj göndermek için tıklayın</p>
          </a>

          {/* Address */}
          <a
            href={COMPANY.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/8 border border-white/10 rounded-2xl p-8
                       hover:border-gold/40 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5
                            group-hover:bg-gold/25 transition-colors duration-200">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-white font-bold text-lg mb-1">Adres</h2>
            <p className="text-white/80 text-sm leading-relaxed">{COMPANY.address}</p>
            <p className="text-gold/70 text-sm mt-2">Haritada görüntüle →</p>
          </a>

          {/* Working hours */}
          <div className="bg-white/8 border border-white/10 rounded-2xl p-8">
            <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-white font-bold text-lg mb-4">Çalışma Saatleri</h2>
            <div className="space-y-2">
              {[
                { gun: 'Pazartesi – Cuma', saat: '06:00 – 22:00' },
                { gun: 'Cumartesi',        saat: '07:00 – 20:00' },
                { gun: 'Pazar',            saat: 'Acil hatlarda ulaşılabilir' },
              ].map(({ gun, saat }) => (
                <div key={gun} className="flex justify-between text-sm">
                  <span className="text-white/60">{gun}</span>
                  <span className="text-white/90 font-medium">{saat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-[350px] rounded-2xl bg-white/5 border border-white/10
                          flex flex-col items-center justify-center text-center">
            <MapPin className="w-12 h-12 text-gold/50 mb-3" />
            <p className="text-white/40 text-sm">Dörtyol, Hatay</p>
            <a
              href={COMPANY.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 border border-gold/40 text-gold/70 text-xs
                         px-4 py-2 rounded-full hover:border-gold hover:text-gold
                         transition-colors duration-200"
            >
              Google Maps&apos;te Görüntüle
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
