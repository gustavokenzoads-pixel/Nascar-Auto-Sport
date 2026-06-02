'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, CheckCircle, Camera } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  city: string
  text: string
  stars?: number
  verified?: boolean
  image?: string
}

export function TestimonialCard({ 
  name, 
  city, 
  text, 
  stars = 5, 
  verified = true,
  image
}: TestimonialCardProps) {
  return (
    <motion.div 
      className="relative bg-[#111111] border border-[rgba(255,105,0,0.1)] p-6 lg:p-8"
      style={{ borderRadius: '12px' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative quote */}
      <span className="absolute top-4 right-4 font-[var(--font-bebas)] text-6xl text-[#FF6900]/10 leading-none">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#FF6900] text-[#FF6900]" />
        ))}
      </div>

      {/* Text */}
      <blockquote className="font-sans text-[#F5F5F3] text-base lg:text-lg leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar com imagem do cliente */}
        <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ borderRadius: '50%' }}>
          {image ? (
            <Image 
              src={image}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="w-5 h-5 text-[#8A8A8A]" />
          )}
        </div>
        <div>
          <span className="block font-[var(--font-barlow)] font-semibold text-[#F5F5F3]">
            {name}
          </span>
          <span className="text-sm text-[#8A8A8A]">{city}</span>
        </div>
      </div>

      {/* Verified badge */}
      {verified && (
        <div className="flex items-center gap-1.5 mt-4 text-green-500 text-xs">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Verificado no Google</span>
        </div>
      )}
    </motion.div>
  )
}
