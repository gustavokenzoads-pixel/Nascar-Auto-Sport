'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  MessageCircle,
  ArrowRight,
  Youtube,
  Instagram,
  Play,
  Mic,
  Trophy,
  Tv,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { StatBadge } from '@/components/ui/stat-badge'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { CTASection } from '@/components/ui/cta-section'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/data/projects'

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'
const INSTAGRAM_LINK = 'https://www.instagram.com/nascarautosport/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCVQtm9415r8NqXuC_AloQHQ'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const services = [
  { 
    title: 'Funilaria & Pintura', 
    description: 'Pintura candy, metálica e personalizada. Reparos de colisão e acabamento impecável.',
    tag: 'Bodywork',
    image: '/services/funilaria.webp', // sua foto aqui
  },
  { 
    title: 'Martelinho de Ouro', 
    description: 'Reparação de amassados sem pintura (PDR). Preserva a pintura original com precisão.',
    tag: 'PDR',
    image: '/services/martelinho.webp',
  },
  { 
    title: 'Cabine de Pintura', 
    description: 'Cabine climatizada profissional. Acabamento espelhado e partículas controladas.',
    tag: 'Pro Booth',
    image: '/services/cabine.webp',
  },
  { 
    title: 'Tunning & Customização', 
    description: 'Wrapping, aerografia, kits aerodinâmicos, rodas e rebaixamento.',
    tag: 'Custom',
    image: '/services/tunning.webp',
  },
  { 
    title: 'Alta Performance', 
    description: 'Motor, suspensão, freios, escapamento e chip tuning de alta precisão.',
    tag: 'Performance',
    image: '/services/performance.webp',
  },
  { 
    title: 'Estética Automotiva', 
    description: 'Polimento técnico, vitrificação cerâmica, higienização e espelhamento.',
    tag: 'Detail',
    image: '/services/estetica.webp',
  },
]

const testimonials = [
  { 
    name: 'Saiyuri G.', 
    city: 'São Paulo, SP', 
    text: 'Oficina ótima! Me enviavam diariamente o passo a passo do conserto do carro, o preço foi justo, o trabalho ficou perfeito, pintura linda, alinhamento da funilaria impecável, super indico!!!', 
    stars: 5,
    image: '/saiyurigonçalves.webp' // Substitua pela URL real da foto do cliente
  },
  { 
    name: 'Silmara O.', 
    city: 'São Paulo, SP', 
    text: 'Excelente serviço de qualidade, profissionais comprometidos e honestos super recomendo estão de parabéns fiquei muito satisfeita com o serviço.', 
    stars: 5,
    image: '/silmaraoliveira.webp' // Substitua pela URL real da foto do cliente
  },
  { 
    name: 'Flavio S.', 
    city: 'São Paulo, SP', 
    text: 'Esse eh o melhor lugar de SP se não do Brasil para se levar o carro quando algum problema acontece, o Ney eh uma pessoa maravilhosa e essa mudança só fez bem a ele a a oficina… lugar muito maior e com uma equipe refinada Aconselho a todos levarem seus carros lá', 
    stars: 5,
    image: '/flaviosaera.webp' // Substitua pela URL real da foto do cliente
  },
]

const vips = [
  { icon: Mic, role: 'Artista / Cantor', quote: 'Pintura exclusiva personalizada' },
  { icon: Trophy, role: 'Atleta / Esportista', quote: 'Preparacao especial de alta performance' },
  { icon: Tv, role: 'Personalidade TV', quote: 'Tunning e customizacao completa' },
]

const youtubeVideos = [
  { id: 's-qKxAa1zMQ', title: 'Desafio: Hyundai I30 Destruído' },
  { id: '0U-7It7WnaU', title: 'Lancer GT para Evolution X' },
  { id: 'g-_X82kWALU', title: 'Cabine de Pintura Renovada' },
  { id: 'pTwVsxTa_xI', title: 'O Retorno do GTR Godzilla' },
  { id: 'MLv2_hwIq5g', title: 'B20 na ACF Performance' },
]

export default function HomePage() {
  const highlightedProjects = projects.filter(p => p.highlight).slice(0, 3)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % youtubeVideos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length)
  }

  const selectVideo = (index: number) => {
    setCurrentVideoIndex(index)
  }

  // Get visible videos for carousel (3 at a time on desktop, 1 on mobile)
  const getVisibleVideos = () => {
    const videos = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentVideoIndex + i + youtubeVideos.length) % youtubeVideos.length
      videos.push({ ...youtubeVideos[index], originalIndex: index, position: i })
    }
    return videos
  }

  return (
    <>
      {/* ============================================ */}
      {/* BLOCO 1 — HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden gradient-hero">
        {/* Background with grain */}
        <div className="absolute inset-0 grain-overlay" />
        
        {/* Decorative number */}
        <span className="section-number top-10 left-10 hidden lg:block">01</span>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-4 lg:space-y-6 order-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="font-[var(--font-bebas)] text-6xl md:text-7xl lg:text-8xl text-[#F5F5F3] tracking-wide leading-[0.9]"
                variants={fadeInUp}
              >
                SEU CARRO.<br />
                <span className="text-[#FF6900] text-glow-orange">NOSSA ARTE.</span>
              </motion.h1>

              <motion.p 
                className="font-[var(--font-barlow)] text-base lg:text-lg text-[#8A8A8A] max-w-md leading-relaxed"
                variants={fadeInUp}
              >
                Funilaria, pintura e customizacao de alta performance em SP desde 1994
              </motion.p>

              {/* CTAs */}
              <motion.div className="flex flex-col sm:flex-row gap-3" variants={fadeInUp}>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6900] hover:bg-[#ff8533] text-[#0a0a0a] px-5 py-3 font-[var(--font-bebas)] text-lg tracking-wide transition-all hover:shadow-[0_0_30px_rgba(255,105,0,0.3)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  PEDIR ORÇAMENTO
                </a>
                <Link
                  href="/projetos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:text-[#0a0a0a] px-5 py-3 font-[var(--font-bebas)] text-lg tracking-wide transition-all"
                >
                  VER PROJETOS
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Stats - Grid fixo para alinhamento correto */}
              <motion.div 
                className="grid grid-cols-4 gap-4 pt-4 border-t border-[rgba(255,105,0,0.2)]"
                variants={fadeInUp}
              >
                <StatBadge number="30" suffix="+" label="Anos" />
                <StatBadge number="319K" label="Seguidores" />
                <StatBadge number="1000" suffix="+" label="Carros" animate={false} />
                <StatBadge number="SP" label="Capital" animate={false} />
              </motion.div>
            </motion.div>

            {/* Ney Photo Section */}
            <motion.div 
              className="relative order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-[4/5] max-w-md lg:max-w-lg mx-auto">
                <div className="absolute -inset-4 bg-[#FF6900]/15 blur-3xl rounded-full" />
                <div className="relative h-full overflow-hidden">
                  <Image 
                    src="/images/arteneyheader.webp" 
                    alt="Ney - NASCAR Auto Sport" 
                    fill 
                    className="object-contain object-bottom scale-110 lg:scale-105"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-[#FF6900]/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#FF6900] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 2 — APRESENTACAO NEY */}
      {/* ============================================ */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <span className="section-number top-10 right-10 hidden lg:block">02</span>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader 
                tag="O Especialista"
                title="CONHECA O NEY"
                subtitle="Mais de 30 anos transformando sonhos em realidade sobre rodas."
              />
              <div className="space-y-4 font-sans text-[#8A8A8A] text-lg leading-relaxed mt-6">
                <p>
                  Fundador da NASCAR Auto Sport, Ney se tornou referencia nacional em funilaria de alta performance e customizacao exclusiva.
                </p>
                <p>
                  Sua paixao por carros e o perfeccionismo em cada detalhe atrairam colecionadores, entusiastas e personalidades de todo o Brasil.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative aspect-video bg-[#1a1a1a] overflow-hidden"
              style={{ borderRadius: '8px' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kqFnD8dISzc"
                title="Conheça o Ney - NASCAR Auto Sport"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 3 — SERVICOS */}
      {/* ============================================ */}
{/* Seção Serviços */}
<section className="relative py-20 lg:py-32 overflow-hidden bg-[#0a0a0a]">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,105,0,0.07),transparent)]" />
  </div>
  <div className="absolute inset-0 grain-overlay" />
  <span className="section-number top-10 left-10 hidden lg:block">03</span>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      tag="Nossas Especialidades"
      title="SERVIÇOS DE ELITE"
      center
    />

    {/* Grid de Cards */}
    <div className="mt-12 max-w-5xl mx-auto flex flex-col gap-[2px] lg:grid lg:grid-cols-2 lg:gap-[2px]">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
          className="group relative overflow-hidden h-[130px] lg:h-[150px] cursor-pointer"
        >
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 brightness-[0.25] group-hover:brightness-[0.38]"
            style={{ backgroundImage: `url('${service.image}')` }}
          />

          {/* Overlay direcional */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/55 to-transparent" />

          {/* Barra laranja esquerda */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF6900] origin-center scale-y-[0.4] transition-transform duration-300 group-hover:scale-y-100 z-10" />

          {/* Número fantasma */}
          <span className="absolute right-4 top-3 font-[var(--font-bebas)] text-[44px] text-[#FF6900]/[0.12] leading-none z-10 transition-colors duration-300 group-hover:text-[#FF6900]/[0.22] select-none">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Conteúdo */}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 py-5">
            <span className="inline-block text-[9px] font-bold tracking-[2px] uppercase text-[#FF6900] border border-[#FF6900]/30 px-2 py-[2px] mb-2 w-fit">
              {service.tag}
            </span>
            <h3 className="font-[var(--font-bebas)] text-[22px] text-white tracking-[1.5px] leading-none mb-1.5">
              {service.title}
            </h3>
            <p className="text-[12px] text-white/55 leading-[1.5] max-w-[220px]">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Divisor */}
    <div className="max-w-5xl mx-auto mt-8 mb-8 h-px bg-gradient-to-r from-[#FF6900]/60 via-[#FF6900]/10 to-transparent" />

    {/* Botão Premium */}
    <div className="flex flex-col items-center gap-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Link
          href="/servicos"
          className="group relative inline-flex items-center overflow-hidden cursor-pointer"
        >
          {/* Fill slide */}
          <span className="absolute inset-0 bg-[#FF6900] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />

          {/* Label */}
          <span className="relative z-10 font-[var(--font-bebas)] text-[18px] tracking-[3px] text-white group-hover:text-[#0a0a0a] transition-colors duration-300 px-7 py-4 border border-[#FF6900]/50 border-r-0">
            TODOS OS SERVIÇOS
          </span>

          {/* Ícone bloco */}
          <span className="relative z-10 w-[52px] h-[52px] flex items-center justify-center bg-[#FF6900] group-hover:bg-[#ff8533] transition-colors duration-300 flex-shrink-0">
            <ArrowRight className="w-5 h-5 text-[#0a0a0a]" />
          </span>
        </Link>
      </motion.div>

      <span className="font-[var(--font-bebas)] text-[11px] tracking-[2px] text-[#FF6900]/50">
        {services.length} ESPECIALIDADES DISPONÍVEIS
      </span>
    </div>
  </div>
</section>


      {/* ============================================ */}
      {/* BLOCO 4 — PROJETOS EM DESTAQUE */}
      {/* ============================================ */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <span className="section-number top-10 right-10 hidden lg:block">04</span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeader 
              tag="Portfolio"
              title="PROJETOS RECENTES"
              subtitle="Uma amostra do que acontece dentro da nossa oficina."
            />
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 text-[#FF6900] font-[var(--font-bebas)] text-xl tracking-wide hover:gap-4 transition-all"
            >
              VER TODOS OS PROJETOS <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 5 — YOUTUBE CAROUSEL */}
      {/* ============================================ */}
            <section className="relative py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <span className="section-number top-10 left-10 hidden lg:block">05</span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-2 font-[var(--font-barlow)] text-base lg:text-sm font-semibold uppercase tracking-widest text-[#FF6900] mb-3 lg:mb-4">
              <Youtube className="w-4 h-4" /> NASCAR NO YOUTUBE
            </span>
            <h2 className="font-[var(--font-bebas)] text-5xl lg:text-7xl text-[#F5F5F3] tracking-wide">
              BASTIDORES DA OFICINA
            </h2>
          </div>

          {/* Video Carousel */}
          <div className="relative mt-8 lg:mt-10">
            <div className="flex items-center justify-center gap-4 lg:gap-8 overflow-hidden py-6 lg:py-8">
              {getVisibleVideos().map((video) => (
                <motion.div
                  key={`${video.id}-${video.position}`}
                  className={`relative flex-shrink-0 transition-all duration-500 ${
                    video.position === 0 
                      ? 'w-[320px] sm:w-[500px] lg:w-[750px] z-20 opacity-100 scale-100' 
                      : 'w-[200px] sm:w-[300px] lg:w-[400px] z-10 opacity-40 scale-90 hidden md:block'
                  }`}
                  initial={false}
                  animate={{
                    x: 0,
                    opacity: video.position === 0 ? 1 : 0.4,
                    scale: video.position === 0 ? 1 : 0.9,
                  }}
                >
                  <div className="aspect-video bg-[#1a1a1a] relative group overflow-hidden" style={{ borderRadius: '12px' }}>
                    {video.position === 0 ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    ) : (
                      <div className="absolute inset-0 cursor-pointer" onClick={() => selectVideo(video.originalIndex)}>
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white/50" />
                        </div>
                      </div>
                    )}
                  </div>
                  {video.position === 0 && (
                    <div className="mt-4 lg:mt-6 text-center">
                      <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-[#F5F5F3] tracking-wide">
                        {video.title}
                      </h3>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <button 
              onClick={prevVideo}
              className="absolute left-2 lg:left-[15%] top-[45%] -translate-y-1/2 z-30 bg-[#FF6900] p-2 lg:p-3 rounded-full text-[#0a0a0a] hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button 
              onClick={nextVideo}
              className="absolute right-2 lg:right-[15%] top-[45%] -translate-y-1/2 z-30 bg-[#FF6900] p-2 lg:p-3 rounded-full text-[#0a0a0a] hover:scale-110 transition-transform"
            >
              <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Subscribe CTA */}
          <div className="text-center mt-6 lg:mt-8">
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF0000] hover:bg-[#cc0000] text-white px-6 py-3 lg:px-8 lg:py-4 font-[var(--font-bebas)] text-2xl lg:text-2xl tracking-widest transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              <Youtube className="w-6 h-6 lg:w-7 lg:h-7" />
              INSCREVA-SE
            </a>
          </div>
        </div>
      </section>


      {/* Separator */}
      <div className="line-separator" />
      
{/* ============================================ */}
{/* BLOCO 6 — INSTAGRAM SOCIAL PROOF */}
{/* ============================================ */}
<section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
  <div className="absolute inset-0 grain-overlay" />
  
  {/* Luzes laranjas de fundo (Glow) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
    <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6900] blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6900] blur-[150px] rounded-full" />
  </div>

  <span className="section-number top-10 right-10 hidden lg:block">06</span>

  <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col items-center text-center mb-12">
      <span className="inline-flex items-center gap-2 font-[var(--font-barlow)] text-[11px] font-bold uppercase tracking-[.22em] text-[#FF6900] mb-4">
        <Instagram className="w-[15px] h-[15px]" />
        Instagram
      </span>
      <h2 className="font-[var(--font-bebas)] text-[clamp(32px,9vw,88px)] leading-[.95] tracking-wide text-[#F5F5F3] mb-6">
        @nascar<span className="text-[#FF6900]">autosport</span>
      </h2>
      <div className="flex items-stretch border border-[rgba(255,105,0,0.25)] bg-[#111]">
        {[
          { n: '152K', l: 'Seguidores' },
          { n: '1.275', l: 'Posts' },
          { n: '30+', l: 'Anos' },
        ].map((s, i) => (
          <div key={i} className={`flex flex-col items-center px-6 py-4 relative ${i > 0 ? 'before:content-[""] before:absolute before:left-0 before:top-[18%] before:h-[64%] before:w-px before:bg-[rgba(255,105,0,0.2)]' : ''}`}>
            <span className="font-[var(--font-bebas)] text-3xl text-[#FF6900] tracking-wide leading-none">{s.n}</span>
            <span className="font-[var(--font-barlow)] text-[9px] font-bold uppercase tracking-[.18em] text-[#666] mt-1">{s.l}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Magazine Grid */}
    <div className="grid grid-cols-12 gap-[10px] mb-8">

      {/* POST GRANDE — esquerda (Item 1) */}
      <motion.a
        href="https://www.instagram.com/p/DUvxFUlAOhJ/"
        target="_blank" rel="noopener noreferrer"
        className="col-span-12 md:col-span-5 relative p-[2px] overflow-hidden group"
        style={{ aspectRatio: '4/5' }}
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        {/* Borda Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6900] via-[#FF6900]/20 to-[#FF6900] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative w-full h-full overflow-hidden bg-[#1a1a1a]">
          <img
            src="/instagram/subaru.webp"
            alt="b20 do bitelo"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="inline-flex items-center gap-1.5 bg-[#FF6900] text-black font-[var(--font-barlow)] text-[9px] font-extrabold uppercase tracking-[.14em] px-2.5 py-1">
              <Play className="w-2 h-2 fill-current" /> Reel
            </span>
            <span className="font-[var(--font-bebas)] text-[13px] text-white tracking-wide text-right leading-tight max-w-[140px]">
              Subaru
            </span>
          </div>
        </div>
      </motion.a>

      {/* Coluna direita — Quadrados (Itens 2 a 6) */}
      <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-[10px]">
        {[
          { href: 'https://www.instagram.com/p/DKFEDrssXMz/', thumb: '/instagram/bmw.webp', label: 'Post', title: 'bmw reliquia', delay: 0.1, reel: true },
          { href: 'https://www.instagram.com/p/DTi3W-JkhSt/?img_index=1', thumb: '/instagram/b20.webp', label: 'Post', title: 'b20 bitelo', delay: 0.15, reel: false },
          { href: 'https://www.instagram.com/p/DRNzb-FDYRr/', thumb: '/instagram/dodgedart.webp', label: 'Post', title: 'dodge dart', delay: 0.2, reel: true },
          { href: 'https://www.instagram.com/p/DRhtSZtDjR2/?img_index=1', thumb: '/instagram/city tunning.webp', label: 'Post', title: 'city tunning', delay: 0.25, reel: false },
        ].map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            target="_blank" rel="noopener noreferrer"
            className="relative p-[2px] overflow-hidden group aspect-square"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: p.delay }}
          >
            {/* Borda Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6900] via-[#FF6900]/20 to-[#FF6900] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative w-full h-full overflow-hidden bg-[#1a1a1a]">
              <img
                src={p.thumb}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-flex items-center gap-1 bg-[#FF6900] text-black font-[var(--font-barlow)] text-[9px] font-extrabold uppercase tracking-[.14em] px-2 py-1">
                  {p.reel && <Play className="w-2 h-2 fill-current" />}
                  {p.label}
                </span>
                <span className="font-[var(--font-bebas)] text-[12px] text-white tracking-wide hidden sm:block">{p.title}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

    </div>

    {/* CTA */}
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="font-[var(--font-barlow)] text-[#666] text-sm tracking-wide">
        Acompanhe os projetos em tempo real — conteúdo novo toda semana
      </p>

      <a
        href="https://www.instagram.com/nascarautosport/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 px-8 py-5  font-[var(--font-barlow)] font-bold text-base text-white rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5"
  style={{
    background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%)',
    boxShadow: '0 4px 14px rgba(253,29,29,0.35)',
  }}
>
  <Instagram className="w-[22px] h-[22px] flex-shrink-0" />
  Seguir @nascarautosport
</a>
    </div>

  </div>
</section>



      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 7 — DEPOIMENTOS */}
      {/* ============================================ */}
      <section className="relative py-20 lg:py-32 gradient-mesh-secondary overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <span className="section-number top-10 left-10 hidden lg:block">07</span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            tag="Avaliações"
            title="O QUE NOSSOS CLIENTES DIZEM"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                city={testimonial.city}
                text={testimonial.text}
                stars={testimonial.stars}
                image={testimonial.image}
              />
            ))}
          </div>
<div className="mt-12 flex justify-center">
  <a
    href="https://share.google/6Ew0m7Wbg26q7nTPk"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-3 bg-white text-[#444] border border-[#dadce0] hover:border-[#4285F4] px-8 py-4 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
  >
    <svg
      className="w-6 h-6"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.96 2.38 30.4 0 24 0 14.62 0 6.51 5.38 2.56 13.22l8.03 6.24C12.5 13.34 17.77 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.64-.14-2.86-.44-4.14H24v7.84h12.94c-.26 1.94-1.66 4.86-4.78 6.82l7.4 5.74C43.96 36.7 46.5 31.18 46.5 24.5z"
      />
      <path
        fill="#FBBC05"
        d="M10.6 28.54A14.6 14.6 0 0 1 9.5 24c0-1.58.28-3.1.76-4.54l-8.03-6.24A23.93 23.93 0 0 0 0 24c0 3.84.92 7.46 2.56 10.78l8.04-6.24z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.92-2.14 15.9-5.84l-7.4-5.74c-2 1.4-4.66 2.38-8.5 2.38-6.22 0-11.5-3.84-13.4-9.22l-8.04 6.24C6.5 42.62 14.62 48 24 48z"
      />
    </svg>

    <span className="group-hover:text-[#4285F4] transition-colors duration-300">
      NOSSO GOOGLE EMPRESA
    </span>
  </a>
</div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 8 — FAMOSOS E VIPs */}
      {/* ============================================ */}
      <section className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <span className="section-number top-10 right-10 hidden lg:block">08</span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <SectionHeader 
            tag="Clientes Especiais"
            title="QUEM CONFIA NA NASCAR"
            subtitle="Artistas, atletas e personalidades que ja passaram pela nossa oficina"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {vips.map((vip, index) => (
              <motion.div
                key={index}
                className="relative bg-[#111111] border border-[#FF6900]/30 p-6 lg:p-8 text-center"
                style={{ borderRadius: '8px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-[#1a1a1a] border border-[#FF6900]/20 flex items-center justify-center" style={{ borderRadius: '50%' }}>
                  <vip.icon className="w-8 h-8 text-[#FF6900]" />
                </div>
                <h3 className="font-[var(--font-barlow)] font-bold text-[#F5F5F3] text-lg mb-2">
                  {vip.role}
                </h3>
                <p className="font-sans text-[#8A8A8A] text-sm italic">
                  &ldquo;{vip.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 9 — CTA FINAL */}
      {/* ============================================ */}
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