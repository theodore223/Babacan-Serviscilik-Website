import { Bus, MapPin, MessageCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export default function MobileBottomBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navyDark border-t border-gold/20"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-4">
        <Link
          href="/hizmetler"
          className="flex flex-col items-center py-3 gap-1 text-white/60
                     hover:text-gold transition-colors duration-200 text-xs cursor-pointer"
        >
          <Bus className="w-5 h-5" />
          Hizmetler
        </Link>

        <a
          href={COMPANY.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-3 gap-1 text-white/60
                     hover:text-gold transition-colors duration-200 text-xs cursor-pointer"
        >
          <MapPin className="w-5 h-5" />
          Konum
        </a>

        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-3 gap-1 text-green-400
                     hover:text-green-300 transition-colors duration-200 text-xs cursor-pointer"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>

        <a
          href={COMPANY.phoneHref}
          className="flex flex-col items-center py-3 gap-1
                     bg-gold text-navy rounded-tl-xl font-bold text-xs
                     hover:bg-goldLight transition-colors duration-200 cursor-pointer"
        >
          <Phone className="w-6 h-6" />
          Ara
        </a>
      </div>
    </nav>
  )
}
