'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export function SectionHeader({ 
  tag, 
  title, 
  subtitle, 
  center = false,
  className = ''
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={`space-y-3 ${center ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {tag && (
        <span className="inline-block font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-widest text-[#FF6900]">
          {tag}
        </span>
      )}
      <h2 className="font-[var(--font-bebas)] headline-section text-[#F5F5F3] tracking-wide text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[var(--font-barlow)] text-[#8A8A8A] text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
