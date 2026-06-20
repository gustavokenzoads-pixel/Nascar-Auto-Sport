'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface CTASectionProps {
  headline: string
  headlineAccent?: string
  subheadline?: string
  buttonText: string
  buttonLink: string
  badge?: string
  variant?: string
}

export function CTASection({
  headline,
  headlineAccent,
  subheadline,
  buttonText,
  buttonLink,
  badge = 'NASCAR Auto Sport · São Paulo',
  variant: _variant,
}: CTASectionProps) {
  return (
    <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/cta-bg.webp')`,
          filter: 'grayscale(30%) brightness(0.35)',
        }}
      />

      {/* Overlay gradiente direcional com toque laranja */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/75 via-[#FF6900]/18 to-[#0a0a0a]/90" />

      {/* Linhas diagonais decorativas racing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1400 420"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="-100" y1="420" x2="500" y2="0" stroke="#FF6900" strokeWidth="0.5" opacity="0.15" />
          <line x1="100"  y1="420" x2="700" y2="0" stroke="#FF6900" strokeWidth="0.5" opacity="0.10" />
          <line x1="900"  y1="420" x2="1500" y2="0" stroke="#FF6900" strokeWidth="0.5" opacity="0.15" />
          <line x1="1100" y1="420" x2="1700" y2="0" stroke="#FF6900" strokeWidth="0.5" opacity="0.10" />
          <rect x="0"    y="0" width="4" height="420" fill="#FF6900" opacity="0.25" />
          <rect x="1396" y="0" width="4" height="420" fill="#FF6900" opacity="0.25" />
          <line x1="0" y1="418" x2="1400" y2="418" stroke="#FF6900" strokeWidth="1" opacity="0.20" />
          <line x1="0" y1="2"   x2="1400" y2="2"   stroke="#FF6900" strokeWidth="1" opacity="0.20" />
        </svg>
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center">

        {/* Badge com dot animado */}
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5
            bg-[#FF6900]/10 border border-[#FF6900]/35
            text-[#FF6900] text-[11px] font-semibold tracking-[0.18em] uppercase
            font-[var(--font-barlow)]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6900] animate-pulse" />
          {badge}
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-[var(--font-bebas)] text-[clamp(42px,6vw,68px)] leading-[0.95]
            tracking-wide text-[#F5F5F3] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {headline}{' '}
          {headlineAccent && (
            <span className="text-[#FF6900]">{headlineAccent}</span>
          )}
        </motion.h2>

        {/* Subheadline */}
        {subheadline && (
          <motion.p
            className="font-[var(--font-barlow)] text-base text-[#F5F5F3]/60 mb-9 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>
        )}

        {/* Botão com shimmer */}
        <motion.a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-9 py-4 overflow-hidden
            bg-[#FF6900] text-[#0a0a0a]
            font-[var(--font-bebas)] text-xl tracking-widest
            transition-all duration-300
            hover:bg-[#ff8533] hover:shadow-[0_8px_32px_rgba(255,105,0,0.4)] hover:-translate-y-px"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Shimmer */}
          <span
            className="absolute top-0 left-[-100%] w-1/2 h-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              group-hover:left-[150%] transition-all duration-500 pointer-events-none"
          />
          <MessageCircle className="w-5 h-5 relative z-10" />
          <span className="relative z-10">{buttonText}</span>
        </motion.a>

        {/* Footnote */}
        <motion.p
          className="mt-4 text-[11px] text-[#F5F5F3]/35 tracking-widest uppercase font-[var(--font-barlow)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Resposta rápida
          <span className="mx-2 text-[#FF6900]/50">·</span>
          Sem compromisso
          <span className="mx-2 text-[#FF6900]/50">·</span>
          30 anos de experiência
        </motion.p>
      </div>
    </section>
  )
}