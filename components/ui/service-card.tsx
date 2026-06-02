'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
  badge?: string
}

export function ServiceCard({ icon: Icon, title, description, items, badge }: ServiceCardProps) {
  return (
    <motion.div 
      className="group relative bg-[#111111] border border-[rgba(255,105,0,0.15)] p-6 transition-all duration-300 hover:border-[#FF6900] hover:shadow-[0_10px_40px_rgba(255,105,0,0.1)]"
      style={{ borderRadius: '4px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 bg-[#FF6900]/10 text-[#FF6900] text-xs font-[var(--font-barlow)] font-semibold px-2 py-1 tracking-wide">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-[#FF6900]/10 mb-4 group-hover:bg-[#FF6900]/20 transition-colors" style={{ borderRadius: '4px' }}>
        <Icon className="w-6 h-6 text-[#FF6900]" />
      </div>

      {/* Content */}
      <h3 className="font-[var(--font-bebas)] text-xl text-[#F5F5F3] tracking-wide mb-2">
        {title}
      </h3>
      <p className="font-sans text-[#8A8A8A] text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Items list */}
      {items && items.length > 0 && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-[#FF6900] font-bold mt-0.5">✓</span>
              <span className="text-[#8A8A8A]">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Hover indicator */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6900] group-hover:w-full transition-all duration-300" />
    </motion.div>
  )
}
