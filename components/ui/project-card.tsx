'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Youtube, ArrowLeftRight } from 'lucide-react'
import { categoryLabels, type Project } from '@/data/projects'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [showAfter, setShowAfter] = useState(false)

  const hasYoutube = project.youtubeLinks && project.youtubeLinks.length > 0
  const primaryYoutube = project.youtubeLinks?.[0]
  const extraLinks = project.youtubeLinks?.slice(1) ?? []

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group relative flex flex-col bg-[#111111] border overflow-hidden
        ${featured
          ? 'border-[rgba(255,105,0,0.35)] shadow-[0_0_30px_rgba(255,105,0,0.08)]'
          : 'border-[rgba(255,255,255,0.06)]'
        }
        ${project.isFamoso ? 'ring-1 ring-[rgba(234,179,8,0.25)]' : ''}
      `}
      style={{ borderRadius: '3px' }}
    >
      {/* ════════════════════════════════════════════ */}
      {/* IMAGEM — toggle ANTES / DEPOIS por clique   */}
      {/* ════════════════════════════════════════════ */}
      <div
        className="relative w-full overflow-hidden cursor-pointer select-none"
        style={{ aspectRatio: '16/9' }}
        onClick={() => setShowAfter((v) => !v)}
        title="Clique para ver antes/depois"
      >
        {/* Imagem ANTES */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${project.beforeImage})`,
            opacity: showAfter ? 0 : 1,
            backgroundColor: '#1a1a1a',
          }}
        />

        {/* Imagem DEPOIS */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${project.afterImage})`,
            opacity: showAfter ? 1 : 0,
            backgroundColor: '#222',
          }}
        />

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />

        {/* ─── BADGE FAMOSO — canto superior esquerdo ─── */}
        {project.isFamoso && (
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-2"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #fbbf24 100%)',
              borderRadius: '2px',
              boxShadow: '0 0 16px rgba(251,191,36,0.55), 0 0 6px rgba(251,191,36,0.3)',
            }}
          >
            <Star className="w-4 h-4 fill-[#0a0a0a] text-[#0a0a0a]" />
            <span
              className="font-black uppercase text-[#0a0a0a]"
              style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.95rem', letterSpacing: '0.14em' }}
            >
              Famoso
            </span>
            {project.famosoInfo && (
              <>
                <span className="text-[#0a0a0a]/50 text-xs">•</span>
                <span
                  className="font-bold text-[#0a0a0a]/80 uppercase"
                  style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.75rem' }}
                >
                  {project.famosoInfo}
                </span>
              </>
            )}
          </div>
        )}

        {/* ─── BADGE CATEGORIA — canto superior direito ─── */}
        <div className="absolute top-3 right-3 z-20">
          <span
            className="font-bold uppercase tracking-wider bg-[#FF6900] text-[#0a0a0a]"
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '0.75rem',
              padding: '6px 10px',
              borderRadius: '2px',
              display: 'block',
            }}
          >
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* ─── BADGES ANTES / DEPOIS — canto inferior esquerdo ─── */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
          <button
            className={`font-bold uppercase tracking-wider transition-all duration-200 ${
              !showAfter
                ? 'bg-[#FF6900] text-[#0a0a0a]'
                : 'bg-[rgba(255,255,255,0.13)] text-white backdrop-blur-sm'
            }`}
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '0.75rem',
              padding: '6px 12px',
              borderRadius: '2px',
            }}
            onClick={(e) => { e.stopPropagation(); setShowAfter(false) }}
          >
            Antes
          </button>
          <button
            className={`font-bold uppercase tracking-wider transition-all duration-200 ${
              showAfter
                ? 'bg-[#FF6900] text-[#0a0a0a]'
                : 'bg-[rgba(255,255,255,0.13)] text-white backdrop-blur-sm'
            }`}
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '0.75rem',
              padding: '6px 12px',
              borderRadius: '2px',
            }}
            onClick={(e) => { e.stopPropagation(); setShowAfter(true) }}
          >
            Depois
          </button>
        </div>

        {/* ─── HINT hover — centro ─── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 bg-black/65 backdrop-blur-sm px-5 py-2.5 rounded-full">
            <ArrowLeftRight className="w-4 h-4 text-white/80" />
            <span
              className="text-white/80 font-medium"
              style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.85rem' }}
            >
              Clique para trocar
            </span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════ */}
      {/* CONTEÚDO DO CARD                            */}
      {/* ════════════════════════════════════════════ */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 gap-4">

        {/* Título — Bebas grande */}
        <h3
          className="text-[#F5F5F3] leading-tight group-hover:text-[#FF6900] transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: '1.65rem',
            letterSpacing: '0.04em',
          }}
        >
          {project.title}
        </h3>

        {/* Descrição — Barlow legível */}
        <p
          className="text-[#8A8A8A] leading-relaxed line-clamp-2"
          style={{ fontFamily: 'var(--font-barlow)', fontSize: '1rem' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-semibold uppercase tracking-wide text-[#777] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)]"
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '0.72rem',
                padding: '4px 10px',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ─── RODAPÉ: Ano + YouTube ─── */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-[rgba(255,255,255,0.06)]">

          {/* Ano */}
          <span
            className="text-[#555] font-medium"
            style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.9rem' }}
          >
            {project.year}
          </span>

          {/* Botão YouTube principal */}
          {hasYoutube && primaryYoutube && (
            <a
              href={primaryYoutube.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 font-bold uppercase tracking-wide text-white transition-all duration-200 hover:brightness-110 active:scale-95 hover:shadow-[0_0_20px_rgba(255,0,0,0.55)]"
              style={{
                fontFamily: 'var(--font-barlow)',
                fontSize: '0.85rem',
                padding: '9px 16px',
                background: 'linear-gradient(135deg, #cc0000 0%, #ff0000 100%)',
                borderRadius: '2px',
                boxShadow: '0 0 10px rgba(255,0,0,0.3)',
              }}
            >
              <Youtube className="w-4 h-4 flex-shrink-0" />
              {primaryYoutube.label ?? 'Ver no YouTube'}
            </a>
          )}
        </div>

        {/* Links extras do YouTube — Vídeo 2, Vídeo 3... */}
        {extraLinks.length > 0 && (
          <div className="flex flex-wrap gap-2 -mt-1">
            {extraLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-semibold text-[#ff4444] border border-[rgba(255,0,0,0.25)] bg-[rgba(255,0,0,0.05)] hover:bg-[rgba(255,0,0,0.12)] transition-colors"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontSize: '0.8rem',
                  padding: '6px 12px',
                  borderRadius: '2px',
                }}
              >
                <Youtube className="w-3.5 h-3.5" />
                {link.label ?? `Vídeo ${i + 2}`}
              </a>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  )
}