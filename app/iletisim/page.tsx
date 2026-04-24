'use client'
import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, Send, ChevronDown, CheckCircle2 } from 'lucide-react'
import { COMPANY, WORKING_HOURS } from '@/lib/constants'

const HIZMET_TURLERI = [
  'Öğrenci Servisi',
  'İşçi / Personel Taşımacılığı',
  'Kurumsal Taşımacılık',
  'Diğer',
]

export default function IletisimPage() {
  const [form, setForm] = useState({ ad: '', telefon: '', hizmet: '', mesaj: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Merhaba, servis talebim var:\n\nAd Soyad: ${form.ad}\nTelefon: ${form.telefon}\nHizmet Türü: ${form.hizmet}\nMesaj: ${form.mesaj}`
    window.open(`https://wa.me/905322562203?text=${encodeURIComponent(text)}`, '_blank')
    setForm({ ad: '', telefon: '', hizmet: '', mesaj: '' })
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

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
        <p className="text-white/75 text-lg max-w-xl mx-auto">
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
            <p className="text-white/70 text-sm mt-2">Hemen aramak için tıklayın</p>
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
            <p className="text-white/70 text-sm mt-2">Mesaj göndermek için tıklayın</p>
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
              {WORKING_HOURS.map(({ gun, saat }) => (
                <div key={gun} className="flex justify-between text-sm">
                  <span className="text-white/75">{gun}</span>
                  <span className="text-white/90 font-medium">{saat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact form */}
      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl text-white text-center mb-2">Servis Talebi Gönder</h2>
          <p className="text-white/70 text-center text-sm mb-10">
            Formu doldurun, WhatsApp üzerinden anında iletişim kuralım.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="ad" className="block text-white/70 text-sm mb-1.5">Ad Soyad *</label>
                <input
                  id="ad"
                  name="ad"
                  type="text"
                  required
                  value={form.ad}
                  onChange={handleChange}
                  placeholder="Ahmet Yılmaz"
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3
                             text-white placeholder:text-white/30 text-sm
                             focus:outline-none focus:border-gold/60 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-white/70 text-sm mb-1.5">Telefon *</label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  required
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="05XX XXX XX XX"
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3
                             text-white placeholder:text-white/30 text-sm
                             focus:outline-none focus:border-gold/60 transition-colors duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="hizmet" className="block text-white/70 text-sm mb-1.5">Hizmet Türü</label>
              <div className="relative">
                <select
                  id="hizmet"
                  name="hizmet"
                  value={form.hizmet}
                  onChange={handleChange}
                  className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3
                             text-white text-sm appearance-none cursor-pointer
                             focus:outline-none focus:border-gold/60 transition-colors duration-200"
                >
                  <option value="" disabled className="bg-[#0D1F3C] text-white/40">Tür seçiniz</option>
                  {HIZMET_TURLERI.map(h => (
                    <option key={h} value={h} className="bg-[#0D1F3C]">{h}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="mesaj" className="block text-white/70 text-sm mb-1.5">Mesaj</label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                value={form.mesaj}
                onChange={handleChange}
                placeholder="Güzergah, öğrenci sayısı, çalışma günleri gibi detayları yazabilirsiniz…"
                className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3
                           text-white placeholder:text-white/30 text-sm resize-none
                           focus:outline-none focus:border-gold/60 transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-gold text-navy
                         font-bold py-4 rounded-xl text-base
                         hover:bg-goldLight hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(200,155,60,0.4)]
                         transition-all duration-200 cursor-pointer"
            >
              <Send className="w-5 h-5" />
              WhatsApp ile Gönder
            </button>

            {sent && (
              <div className="flex items-center gap-3 bg-green-500/15 border border-green-500/30
                              rounded-xl px-4 py-3 text-green-400 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                WhatsApp açıldı! Mesajınız hazır, gönder tuşuna basmanız yeterli.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[350px]">
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
      </section>

    </div>
  )
}
