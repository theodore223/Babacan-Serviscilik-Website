'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const LINKS = [
  { href: '/',           label: 'Anasayfa'   },
  { href: '/hizmetler',  label: 'Hizmetler'  },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim',   label: 'İletişim'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0D1F3C] transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.3)]' : ''
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight cursor-pointer">
          <span className="font-bold text-white text-xl tracking-wide">BABACAN</span>
          <span className="text-gold text-xs tracking-[0.2em] uppercase">Serviscilik</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 relative pb-1 cursor-pointer
                ${pathname === href
                  ? 'text-white border-b-2 border-gold'
                  : 'text-white/75 hover:text-white'
                }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={COMPANY.phoneHref}
          className="hidden md:flex items-center gap-2 bg-gold text-navy
                     font-bold px-5 py-2.5 rounded-full text-sm
                     hover:bg-goldLight transition-all duration-200
                     hover:scale-105 animate-pulse-gold cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          Hemen Ara
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Menüyü aç"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-navy z-50 p-8 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button
                className="self-end text-white mb-8 cursor-pointer"
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X className="w-6 h-6" />
              </button>
              {LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={href}
                    className="block text-white text-xl font-medium py-4
                               border-b border-white/10 hover:text-gold transition-colors duration-200 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={COMPANY.phoneHref}
                className="mt-8 bg-gold text-navy font-bold px-6 py-3 rounded-full
                           text-center flex items-center justify-center gap-2 cursor-pointer
                           hover:bg-goldLight transition-colors duration-200"
              >
                <Phone className="w-4 h-4" /> {COMPANY.phone}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
