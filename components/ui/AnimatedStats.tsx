'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const step = value / 40
    const timer = setInterval(() => {
      setCount(c => {
        if (c + step >= value) { clearInterval(timer); return value }
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
      <p className="text-white/75 text-sm mt-2">{label}</p>
    </motion.div>
  )
}

export default function AnimatedStats() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {STATS.map((s) => (
        <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
      ))}
    </div>
  )
}
