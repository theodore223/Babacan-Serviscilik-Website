import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import { COMPANY, STATS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hakkımızda | Babacan Serviscilik',
  description: "Hatay Dörtyol'da 15 yılı aşkın deneyimiyle öğrenci, işçi ve personel taşımacılığı yapan Babacan Serviscilik hakkında.",
}

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081529] to-[#0D1F3C]">

      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
          Hakkımızda
        </span>
        <h1 className="font-serif text-5xl text-white mt-3 mb-4">
          Babacan Serviscilik
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          {COMPANY.fullName} olarak Dörtyol ve çevresinde güvenilir taşımacılık hizmeti sunuyoruz.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <span className="text-gold font-black text-5xl leading-none">
                {s.value}{s.suffix}
              </span>
              <p className="text-white/60 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Hikayemiz</h2>
            <div className="space-y-4 text-white/65 leading-relaxed">
              <p>
                Babacan Serviscilik, 2009 yılında Ahmet Işıkoğlu tarafından Dörtyol'da kuruldu.
                İlk günden itibaren tek hedefimiz vardı: ailelerin ve kurumların güvenle
                bıraktığı yolcuları zamanında ve güvenle taşımak.
              </p>
              <p>
                Bugün 20'yi aşkın araçlık filomuz ve deneyimli sürücü kadromuzla Dörtyol,
                İskenderun ve çevre ilçelerde öğrenci servisi, işçi taşımacılığı ve kurumsal
                personel servisi hizmetleri veriyoruz.
              </p>
              <p>
                500'den fazla mutlu müşteri ve 5.0 Google puanı, hizmet kalitemizin en iyi
                göstergesidir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Değerlerimiz</h2>
            <ul className="space-y-4">
              {[
                'Güvenlik her şeyin önünde — araçlarımız düzenli bakımdan geçer',
                'Dakiklik bizim için bir kural, istisna değil',
                'Sürücülerimiz eğitimli, kibar ve deneyimli',
                'Müşteri memnuniyeti olmadan başarı olmaz',
                'Dörtyol\'u iyi biliriz, rotaları biz planlarız',
              ].map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm leading-relaxed">{val}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Owner */}
      <section className="px-6 pb-24 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center pt-16">
          <h2 className="font-serif text-3xl text-white mb-3">Kurucu</h2>
          <p className="text-gold font-bold text-xl mb-2">Ahmet Işıkoğlu</p>
          <p className="text-white/60 leading-relaxed">
            15 yılı aşkın taşımacılık deneyimiyle Dörtyol'un güvenilir servis firmasını
            kurdu ve büyüttü. Müşteri memnuniyeti ve güvenli taşımacılık onun önceliğidir.
          </p>
          <a
            href={COMPANY.phoneHref}
            className="inline-block mt-8 bg-gold text-navy font-bold px-8 py-4 rounded-full
                       hover:bg-goldLight transition-all duration-200 hover:scale-105"
          >
            İletişime Geç
          </a>
        </div>
      </section>

    </div>
  )
}
