'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' // <--- Faltava esta linha!
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight,
  MessageCircle,
  Star,
  Zap,
  Filter,
  Wrench,
  Sparkles,
  Gauge,
  Hammer,
  PaintBucket,
  LayoutGrid,
} from 'lucide-react'
import { ProjectCard } from '@/components/ui/project-card'
import { projects, type ProjectCategory } from '@/data/projects'
import { CTASection } from '@/components/ui/cta-section'

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'

// Para ativar a seção do vídeo do Ney, cole aqui a URL de embed do YouTube:
// https://www.youtube.com/embed/ID_DO_VIDEO
// Deixando vazio, a seção inteira fica oculta para os visitantes.
const VIDEO_URL = ''

type FilterCategory = ProjectCategory | 'todos' | 'famosos'

const filterOptions: {
  value: FilterCategory
  label: string
  icon: React.ElementType
  inactiveClass: string
  activeClass: string
  activeShadow?: string
}[] = [
  {
    value: 'todos',
    label: 'Todos',
    icon: LayoutGrid,
    inactiveClass: 'border-[rgba(255,255,255,0.15)] text-[#8A8A8A] hover:border-white/30 hover:text-white',
    activeClass:   'bg-white text-[#0a0a0a] border-white',
  },
  {
    value: 'famosos',
    label: 'Famosos',
    icon: Star,
    inactiveClass: 'border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10',
    activeClass:   'bg-gradient-to-r from-yellow-400 to-amber-500 text-[#0a0a0a] border-yellow-400',
    activeShadow:  '0 0 16px rgba(251,191,36,0.4)',
  },
  {
    value: 'funilaria-pintura',
    label: 'Funilaria & Pintura',
    icon: PaintBucket,
    inactiveClass: 'border-[#FF6900]/40 text-[#FF6900]/80 hover:bg-[#FF6900]/10',
    activeClass:   'bg-[#FF6900] text-[#0a0a0a] border-[#FF6900]',
    activeShadow:  '0 0 14px rgba(255,105,0,0.35)',
  },
  {
    value: 'tunning',
    label: 'Tunning',
    icon: Zap,
    inactiveClass: 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10',
    activeClass:   'bg-gradient-to-r from-cyan-500 to-blue-500 text-[#0a0a0a] border-cyan-500',
    activeShadow:  '0 0 14px rgba(6,182,212,0.35)',
  },
  {
    value: 'estetica',
    label: 'Estética',
    icon: Sparkles,
    inactiveClass: 'border-pink-500/50 text-pink-400 hover:bg-pink-500/10',
    activeClass:   'bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500',
    activeShadow:  '0 0 14px rgba(236,72,153,0.35)',
  },
  {
    value: 'performance',
    label: 'Alta Performance',
    icon: Gauge,
    inactiveClass: 'border-green-500/50 text-green-400 hover:bg-green-500/10',
    activeClass:   'bg-gradient-to-r from-green-500 to-emerald-500 text-[#0a0a0a] border-green-500',
    activeShadow:  '0 0 14px rgba(34,197,94,0.35)',
  },
  {
    value: 'martelinho',
    label: 'Martelinho de Ouro',
    icon: Hammer,
    inactiveClass: 'border-orange-400/50 text-orange-300 hover:bg-orange-500/10',
    activeClass:   'bg-gradient-to-r from-orange-400 to-yellow-500 text-[#0a0a0a] border-orange-400',
    activeShadow:  '0 0 14px rgba(251,146,60,0.35)',
  },
  {
    value: 'restauracao',
    label: 'Restauração',
    icon: Wrench,
    inactiveClass: 'border-violet-500/40 text-violet-400 hover:bg-violet-500/10',
    activeClass:   'bg-gradient-to-r from-violet-500 to-purple-600 text-white border-violet-500',
    activeShadow:  '0 0 14px rgba(139,92,246,0.35)',
  },
]

export default function ProjetosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos')

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : activeFilter === 'famosos'
      ? projects.filter((p) => p.isFamoso === true)
      : projects.filter(
          (p) =>
            p.category === activeFilter ||
            p.extraCategories?.includes(activeFilter as ProjectCategory)
        )

  const famosoCount = projects.filter((p) => p.isFamoso).length

  return (
    <>
      {/* ============================================ */}
      {/* BLOCO 1 — HERO                              */}
      {/* ============================================ */}
      <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center pt-[80px] lg:pt-[120px] pb-12 lg:pb-10 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo: Conteúdo */}
            <div className="relative z-20">
              {/* Breadcrumb com mais espaço no topo */}
              <motion.nav
                className="flex items-center gap-2 text-sm mb-8 mt-4 lg:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="text-[#8A8A8A] hover:text-[#FF6900] transition-colors font-[var(--font-barlow)]">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-[#8A8A8A]" />
                <span className="text-[#FF6900] font-[var(--font-barlow)]">Projetos</span>
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Título Ajustado (Menor no PC) */}
                <h1 className="font-[var(--font-bebas)] text-4xl lg:text-9xl text-[#F5F5F3] tracking-wide mb-4">
                  NOSSOS PROJETOS
                </h1>
                {/* TODO: revisar copy — opções: B) "Cada projeto entregue com o mesmo rigor: acabamento impecável, prazo respeitado." C) "Para quem não aceita resultado mediano. Alto padrão em funilaria, pintura e estética automotiva." */}
                <p className="font-[var(--font-barlow)] text-lg text-[#8A8A8A] max-w-2xl">
                  Trabalho de alto padrão para quem cuida do carro como patrimônio.
                </p>
              </motion.div>

              {/* Contadores */}
              <motion.div
                className="mt-6 flex flex-wrap items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-[var(--font-bebas)] text-3xl text-[#FF6900]">
                    {projects.length}
                  </span>
                  <span className="font-[var(--font-barlow)] text-[#8A8A8A] uppercase tracking-wider text-sm">
                    projetos realizados
                  </span>
                </div>

                <div
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(217,119,6,0.1) 100%)',
                    border: '1px solid rgba(245,158,11,0.3)',
                    borderRadius: '2px',
                  }}
                >
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-[var(--font-bebas)] text-xl text-amber-400">{famosoCount}</span>
                  <span className="font-[var(--font-barlow)] text-amber-400/70 uppercase tracking-wider text-xs">
                    projetos de famosos
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Lado Direito: Foto do Ney (Visível em todos os dispositivos agora) */}
            <motion.div 
              className="relative mt-8 lg:mt-0 lg:translate-x-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
                <div className="absolute -inset-4 bg-[#FF6900]/15 blur-3xl rounded-full" />
                <div className="relative h-full overflow-hidden">
                  <Image 
                    src="/arteprojetos.webp" 
                    alt="Ney - NASCAR Auto Sport" 
                    fill 
                    className="object-contain object-bottom scale-110"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* BLOCO 1.5 — VÍDEO NEY                       */}
      {/* Oculto enquanto VIDEO_URL (acima) estiver   */}
      {/* vazio. Preencha VIDEO_URL para ativar.       */}
      {/* ============================================ */}
      {VIDEO_URL && (
        <section className="bg-[#0a0a0a] py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <p className="font-[var(--font-barlow)] uppercase tracking-widest text-[#FF6900] text-xs mb-2">
                O dono fala
              </p>
              <h2 className="font-[var(--font-bebas)] text-2xl lg:text-3xl text-[#F5F5F3]">
                O padrão de atendimento, na voz do Ney
              </h2>
            </div>
            <iframe
              className="w-full aspect-video"
              style={{ borderRadius: '2px' }}
              src={VIDEO_URL}
              title="Ney fala sobre o padrão NASCAR Auto Sport"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="mt-3 text-center font-[var(--font-barlow)] text-[#8A8A8A] text-xs">
              Ney conta como funciona o atendimento e o cuidado com cada projeto.
            </p>
          </div>
        </section>
      )}

      {/* FILTROS E GRID CONTINUAM IGUAIS ABAIXO... */}
      <div className="sticky top-16 lg:top-20 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[rgba(255,105,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
          <div className="hidden lg:flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2 flex-1">
              {filterOptions.map((opt) => {
                const Icon = opt.icon
                const isActive = activeFilter === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setActiveFilter(opt.value)}
                    className={`flex items-center gap-2 px-4 py-2 font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-wide transition-all border ${
                      isActive ? opt.activeClass : opt.inactiveClass
                    }`}
                    style={{
                      borderRadius: '2px',
                      boxShadow: isActive && opt.activeShadow ? opt.activeShadow : undefined,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {opt.label}
                  </button>
                )
              })}
            </div>
            <span className="text-[#8A8A8A] text-sm font-[var(--font-barlow)]">
              Mostrando{' '}
              <span className="text-[#FF6900] font-bold">{filteredProjects.length}</span>{' '}
              projetos
            </span>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-[#8A8A8A]">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-[var(--font-barlow)] uppercase tracking-wider">Filtros</span>
              </div>
              <span className="text-xs font-[var(--font-barlow)] text-[#8A8A8A]">
                Mostrando{' '}
                <span className="text-[#FF6900] font-bold">{filteredProjects.length}</span>{' '}
                projetos
              </span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
              {filterOptions.map((opt) => {
                const Icon = opt.icon
                const isActive = activeFilter === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setActiveFilter(opt.value)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 font-[var(--font-barlow)] text-xs font-semibold uppercase tracking-wide transition-all border whitespace-nowrap flex-shrink-0 ${
                      isActive ? opt.activeClass : opt.inactiveClass
                    }`}
                    style={{
                      borderRadius: '2px',
                      boxShadow: isActive && opt.activeShadow ? opt.activeShadow : undefined,
                    }}
                  >
                    <Icon className="w-3 h-3" />
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-7" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={project.highlight} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <p className="font-[var(--font-barlow)] text-[#8A8A8A] text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <div className="line-separator" />

      <CTASection 
        headline="PRONTO PARA TRANSFORMAR SEU CARRO?"
        subheadline="Peça seu orçamento agora. Atendemos em São Paulo."
        buttonText="FALAR COM O NEY NO WHATSAPP"
        buttonLink={WHATSAPP_LINK}
        variant="orange"
      />    
    </>
  )
}
