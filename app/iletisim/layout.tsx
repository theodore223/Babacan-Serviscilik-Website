import type { Metadata } from 'next'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'İletişim | Babacan Serviscilik',
  description: `Babacan Serviscilik ile iletişime geçin. Tel: ${COMPANY.phone}`,
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
