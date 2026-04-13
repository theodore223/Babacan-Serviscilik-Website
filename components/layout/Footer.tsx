import Link from 'next/link'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const LINKS = [
  { href: '/',           label: 'Anasayfa'   },
  { href: '/hizmetler',  label: 'Hizmetler'  },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim',   label: 'İletişim'   },
]

export default function Footer() {
  return (
    <footer className="bg-navyDark pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-12">

        {/* Left: Brand */}
        <div>
          <div className="flex flex-col leading-tight mb-4">
            <span className="font-bold text-white text-xl tracking-wide">BABACAN</span>
            <span className="text-gold text-xs tracking-[0.2em] uppercase">Serviscilik</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Dörtyol ve çevresinde güvenilir öğrenci, işçi ve personel taşımacılığı.
            15+ yıllık deneyimle hizmetinizdeyiz.
          </p>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-green-400
                       hover:text-green-300 transition-colors duration-200 text-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ile Ulaşın
          </a>
        </div>

        {/* Middle: Pages */}
        <div>
          <h3 className="text-gold font-bold text-sm tracking-widest uppercase mb-5">Sayfalar</h3>
          <ul className="space-y-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/70 hover:text-gold transition-colors duration-200 text-sm py-1.5 block cursor-pointer"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h3 className="text-gold font-bold text-sm tracking-widest uppercase mb-5">İletişim</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">{COMPANY.address}</p>
            </div>
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-3 text-white/70 hover:text-gold
                         transition-colors duration-200 text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4 text-gold" />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/70 hover:text-green-400
                         transition-colors duration-200 text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-2 pt-6 pb-4 px-8">
        <p className="text-white/50 text-center text-xs">
          © {new Date().getFullYear()} Babacan Serviscilik Dörtyol Ltd. Şti. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}
