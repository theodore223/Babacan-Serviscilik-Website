'use client'
import { motion } from 'framer-motion'

interface SectionBackgroundProps {
  /** Büyük dairenin çapı — sol alt köşe (default: 500) */
  circleSize?: number
  /** Küçük dairenin çapı — sağ üst köşe (default: 400) */
  circleSize2?: number
  /** Yüzen nokta sayısı (default: 5) */
  dotCount?: number
}

export default function SectionBackground({
  circleSize  = 500,
  circleSize2 = 400,
  dotCount    = 5,
}: SectionBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Büyük dönen daire — sol alt */}
      <motion.div
        className="absolute -bottom-40 -left-40 rounded-full border border-gold/10"
        style={{ width: circleSize, height: circleSize }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Küçük dönen daire — sağ üst */}
      <motion.div
        className="absolute -top-40 -right-40 rounded-full border border-gold/8"
        style={{ width: circleSize2, height: circleSize2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Yüzen altın noktalar */}
      {[...Array(dotCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/25"
          style={{
            left: `${10 + i * 18}%`,
            top:  `${15 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-12, 12, -12], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3.5 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.45,
          }}
        />
      ))}

      {/* Diagonal altın çizgiler */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={`${-10 + i * 20}%`} y1="100%"
            x2={`${15 + i * 20}%`}  y2="0%"
            stroke="#C89B3C" strokeWidth="1"
          />
        ))}
      </svg>

    </div>
  )
}
