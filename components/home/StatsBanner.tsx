'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'
import SectionBackground from '@/components/ui/SectionBackground'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const step = value / 40
    const timer = setInterval(() => {
      setCount(c => {
        if (c + step >= value) {
          clearInterval(timer)
          return value
        }
        return c + step
      })
    }, 40)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-gold font-black text-5xl leading-none">
        {Math.floor(count)}{suffix}
      </span>
      <span className="text-white/60 text-sm font-medium mt-2">{label}</span>
    </motion.div>
  )
}

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0F1E35] py-16 px-6">

      <SectionBackground circleSize={300} circleSize2={250} dotCount={4} />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  )
}
