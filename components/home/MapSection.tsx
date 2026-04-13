import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import { COMPANY, WORKING_HOURS } from '@/lib/constants'

export default function MapSection() {
  return (
    <section className="bg-[#0F1E35] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* SOL — Bilgiler */}
        <div className="space-y-8">

          {/* Adres */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center
                            justify-center flex-shrink-0 mt-1">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Adres</p>
              <p className="text-white text-sm leading-relaxed">
                Sanayi Mahallesi Garaj Altı<br />
                2 Nolu Sk. No:6<br />
                31600 Dörtyol / Hatay
              </p>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center
                            justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Telefon</p>
              <a
                href={COMPANY.phoneHref}
                className="text-white text-sm hover:text-gold transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center
                            justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">WhatsApp</p>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-gold transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center
                            justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">
                Çalışma Saatleri
              </p>
              <div className="space-y-1">
                {WORKING_HOURS.map(({ gun, saat }) => (
                  <p key={gun} className="text-white text-sm leading-relaxed">
                    <span className="text-white/60">{gun}:</span> {saat}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp butonu */}
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500
                       text-white font-bold px-6 py-3 rounded-full text-sm
                       transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ile Yaz
          </a>

        </div>

        {/* SAĞ — Küçük Harita */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80">
          <iframe
            src={COMPANY.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Babacan Serviscilik Konumu"
          />
        </div>

      </div>
    </section>
  )
}
