'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatBadgeProps {
  number: string
  label: string
  suffix?: string
  animate?: boolean
}

export function StatBadge({ number, label, suffix = '', animate = true }: StatBadgeProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayNumber, setDisplayNumber] = useState(animate ? '0' : number)

  useEffect(() => {
    if (!animate || !isInView) {
      setDisplayNumber(number)
      return
    }

    // Extract numeric value from the number string (e.g., "319" from "319K")
    const numericValue = parseInt(number.replace(/\D/g, ''), 10)
    // Extract non-numeric suffix from the number string (e.g., "K" from "319K")
    const internalSuffix = number.replace(/[0-9]/g, '')

    if (isNaN(numericValue)) {
      setDisplayNumber(number)
      return
    }

    const duration = 2000 // 2 seconds
    const frameRate = 60
    const totalFrames = (duration / 1000) * frameRate
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out quad function for smoother animation
      const easeOutProgress = 1 - (1 - progress) * (1 - progress)
      const current = Math.round(easeOutProgress * numericValue)
      
      setDisplayNumber(`${current}${internalSuffix}`)

      if (frame >= totalFrames) {
        clearInterval(timer)
        setDisplayNumber(number)
      }
    }, 1000 / frameRate)

    return () => clearInterval(timer)
  }, [isInView, number, animate])

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="block font-[var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl text-[#FF6900] tracking-wide">
        {displayNumber}{suffix}
      </span>
      <span className="block font-[var(--font-barlow)] text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-[#8A8A8A] mt-1 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  )
}
