import type { Metadata } from 'next'
import { Montserrat, Merriweather } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/layout/TopBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: "Babacan Serviscilik | Dörtyol Öğrenci ve Personel Taşımacılığı",
  description: "Hatay Dörtyol'da öğrenci servisi, işçi ve personel taşımacılığı. Güvenilir, dakik, profesyonel. Hemen arayın: 0532 256 22 03",
  keywords: ['Dörtyol servis', 'Hatay öğrenci servisi', 'personel taşımacılığı', 'Babacan Serviscilik'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} ${merriweather.variable} font-sans`}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
