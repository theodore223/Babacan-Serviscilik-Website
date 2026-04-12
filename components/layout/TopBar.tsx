import { MapPin, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export default function TopBar() {
  return (
    <div className="bg-navyDark text-gold text-sm py-2.5 px-6 flex justify-between items-center">
      {/* Adres — yalnızca md ve üstü */}
      <div className="hidden md:flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span className="text-white/70">{COMPANY.address}</span>
      </div>

      {/* Mobilde adres kısa — md'de gizli */}
      <div className="flex md:hidden items-center gap-2">
        <MapPin className="w-4 h-4" />
        <span className="text-white/70 text-xs">Dörtyol / Hatay</span>
      </div>

      {/* Telefon — her ekranda görünür */}
      <a
        href={COMPANY.phoneHref}
        className="flex items-center gap-2 hover:text-goldLight transition-colors duration-200 font-medium cursor-pointer"
      >
        <Phone className="w-4 h-4" />
        <span className="text-xs md:text-sm">{COMPANY.phone}</span>
      </a>
    </div>
  )
}
