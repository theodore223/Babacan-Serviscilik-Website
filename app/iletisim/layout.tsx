import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'İletişim | Babacan Serviscilik',
  description: `Babacan Serviscilik ile iletişime geçin. Tel: ${COMPANY.phone}`,
  openGraph: {
    title: 'İletişim | Babacan Serviscilik',
    description: `Servis talebi veya bilgi için arayın: ${COMPANY.phone}`,
    images: [{ url: '/images/logo.png', width: 512, height: 512, alt: 'Babacan Serviscilik' }],
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
