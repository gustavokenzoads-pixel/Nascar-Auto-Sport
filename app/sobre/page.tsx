'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Youtube,
  Instagram,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  Heart,
  Target,
  Lightbulb,
  Star
} from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { CTASection } from '@/components/ui/cta-section'

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'
const INSTAGRAM_LINK = 'https://www.instagram.com/nascarautosport/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCVQtm9415r8NqXuC_AloQHQ'

const timeline = [
  { year: '1994', title: 'Fundação', description: 'Ney funda a NASCAR Auto Sport em São Paulo com a missão de transformar carros em obras de arte.' },
  { year: '2000s', title: 'Expansão', description: 'Modernização da oficina com novas tecnologias e expansão da equipe de profissionais.' },
  { year: '2010s', title: 'Especialização', description: 'Foco em alta performance e tunning. Entrada no mundo digital com canal no YouTube.' },
  { year: '2020s', title: 'Referência', description: '150K+ seguidores nas redes. Reconhecimento como uma das melhores funilarias de SP.' },
]

const valores = [
  { icon: Award, title: 'Qualidade', description: 'Compromisso com excelência em cada detalhe do trabalho' },
  { icon: Heart, title: 'Paixão', description: 'Amor genuíno por carros e pela arte de transformá-los' },
  { icon: Target, title: 'Honestidade', description: 'Transparência total em prazos, preços e processos' },
  { icon: Lightbulb, title: 'Inovação', description: 'Sempre buscando novas técnicas e tecnologias' },
]

const certificacoes = [
  { nome: 'CESVI Brasil', descricao: 'Centro de Experimentação e Segurança Viária' },
  { nome: 'IQA', descricao: 'Instituto da Qualidade Automotiva' },
  { nome: 'SENAI', descricao: 'Formação técnica especializada' },
]

export default function SobrePage() {
  return (
    <>
      {/* ============================================ */}
      {/* BLOCO 1 — HERO DA PÁGINA */}
      {/* 
        TODO: Adicionar imagem de fundo com opacidade baixa
        Altura fixa: min-h-[450px] no desktop, min-h-[490px] no desktop
        Imagem sugerida: hero/sobre-bg.webp (1920x600px)
      */}
      {/* ============================================ */}
      <section className="relative min-h-[450px] lg:min-h-[490px] flex items-center pt-[51px] lg:pt-[100px] pb-12 lg:pb-10 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        
        {/* 
          TODO: Descomentar quando tiver a imagem de fundo
          <div className="absolute inset-0 opacity-15">
            <Image src="/images/hero/sobre-bg.webp" alt="" fill className="object-cover" />
          </div>
        */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <motion.nav 
            className="flex items-center gap-2 text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-[#8A8A8A] hover:text-[#FF6900] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-[#8A8A8A]" />
            <span className="text-[#FF6900]">Sobre</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[var(--font-bebas)] headline-hero text-[#F5F5F3] tracking-wide mb-4">
              NASCAR AUTO SPORT
            </h1>
            <p className="font-[var(--font-barlow)] text-lg text-[#8A8A8A] max-w-2xl">
              Uma história de paixão por carros, construída desde 1994 em São Paulo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOCO 1.5 — TIMELINE */}
      {/* ============================================ */}
      <section className="py-12 lg:py-16 gradient-hero border-b border-[rgba(255,105,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Desktop Timeline - Horizontal */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Line */}
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-[rgba(255,105,0,0.3)]" />
                
                <div className="grid grid-cols-4 gap-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      {/* Dot */}
                      <div className="w-4 h-4 bg-[#FF6900] rounded-full mx-auto mb-4 relative z-10 shadow-[0_0_20px_rgba(255,105,0,0.5)]" />
                      
                      <div className="text-center">
                        <span className="font-[var(--font-bebas)] text-2xl text-[#FF6900]">{item.year}</span>
                        <h3 className="font-[var(--font-barlow)] font-bold text-[#F5F5F3] mt-2 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#8A8A8A] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="lg:hidden space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {/* Line and dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-[#FF6900] rounded-full shadow-[0_0_15px_rgba(255,105,0,0.5)]" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[rgba(255,105,0,0.3)] mt-2" />
                    )}
                  </div>
                  
                  <div className="pb-8">
                    <span className="font-[var(--font-bebas)] text-xl text-[#FF6900]">{item.year}</span>
                    <h3 className="font-[var(--font-barlow)] font-bold text-[#F5F5F3] mt-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8A8A8A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 2 — HISTÓRIA E MISSÃO */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-widest text-[#FF6900]">
                NOSSA HISTÓRIA
              </span>
              <h2 className="font-[var(--font-bebas)] headline-section text-[#F5F5F3] tracking-wide">
                MAIS DE 30 ANOS REALIZANDO SONHOS
              </h2>
              <div className="space-y-4 text-[#8A8A8A] leading-relaxed">
                <p>
                  A NASCAR Auto Sport nasceu em 1994 de um sonho: transformar carros em verdadeiras obras de arte. 
                  O que começou como uma pequena oficina de funilaria e pintura, hoje é referência em São Paulo 
                  quando o assunto é qualidade e excelência automotiva.
                </p>
                <p>
                  Durante esses 30 anos, passamos por aqui milhares de carros — desde veículos do dia a dia 
                  até superesportivos de luxo. Cada um deles recebeu o mesmo cuidado e dedicação que colocamos 
                  em tudo que fazemos.
                </p>
                <p>
                  Nossa missão é simples: <span className="text-[#F5F5F3] font-semibold">realizar sonhos dos 
                  amantes do automobilismo</span>. Seja uma pintura nova, uma customização ousada ou um 
                  martelinho de ouro discreto, estamos aqui para fazer seu carro brilhar.
                </p>
              </div>

              {/* Valores */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {valores.map((valor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <valor.icon className="w-5 h-5 text-[#FF6900]" />
                    <span className="font-[var(--font-barlow)] font-semibold text-[#F5F5F3] text-sm">
                      {valor.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] bg-[#111111] border border-[rgba(255,105,0,0.2)] overflow-hidden" style={{ borderRadius: '8px' }}>
                <div className="absolute -inset-3 bg-gradient-to-br from-[#FF6900]/20 to-transparent blur-2xl -z-10" />
                <img
                  src="/sobrenos/neysobrenos.webp"
                  alt="NASCAR Auto Sport — Oficina"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 3 — NEY EM DESTAQUE */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 gradient-mesh-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

             <div className="relative aspect-[4/5] max-w-md mx-auto overflow-hidden" style={{ borderRadius: '16px' }}>
  <div className="absolute -inset-4 bg-[#FF6900]/20 blur-3xl rounded-full" />
  <img 
    src="/certificadoney.webp" 
    alt="Ney" 
    className="w-full h-full object-cover relative z-10 border border-[#FF6900]/30"
    style={{ borderRadius: '16px' }}
  />
</div>


            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-widest text-[#FF6900]">
                O FUNDADOR
              </span>
              <h2 className="font-[var(--font-bebas)] text-6xl lg:text-8xl text-[#F5F5F3] tracking-wide">
                NEY
              </h2>
              <div className="space-y-4 text-[#8A8A8A] leading-relaxed">
                <p>
                  Apaixonado por carros desde criança, Ney cresceu cercado de motores e latarias. 
                  Aos 20 anos, decidiu transformar essa paixão em profissão e fundou a NASCAR Auto Sport.
                </p>
                <p>
                  Com mais de 30 anos de experiência, ele conhece cada detalhe do universo automotivo. 
                  Não existe desafio que ele não tenha enfrentado — de restaurações clássicas até as 
                  customizações mais ousadas.
                </p>
                <p>
                  Hoje, além de comandar a oficina, Ney compartilha seu conhecimento com milhares de 
                  seguidores nas redes sociais. Seu canal no YouTube é fonte de inspiração e aprendizado 
                  para entusiastas de todo o Brasil.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#111111] border border-[rgba(255,105,0,0.2)] px-4 py-2">
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                  <span className="font-[var(--font-barlow)] text-sm text-[#F5F5F3]">Youtuber</span>
                </div>
                <div className="flex items-center gap-2 bg-[#111111] border border-[rgba(255,105,0,0.2)] px-4 py-2">
                  <Award className="w-4 h-4 text-[#FF6900]" />
                  <span className="font-[var(--font-barlow)] text-sm text-[#F5F5F3]">30 anos de experiência</span>
                </div>
                <div className="flex items-center gap-2 bg-[#111111] border border-[rgba(255,105,0,0.2)] px-4 py-2">
                  <Star className="w-4 h-4 text-[#FF6900]" />
                  <span className="font-[var(--font-barlow)] text-sm text-[#F5F5F3]">Referência em SP</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white px-6 py-3 font-[var(--font-bebas)] text-lg tracking-wide transition-all mt-4"
              >
                <Youtube className="w-5 h-5" />
                ASSISTIR NO YOUTUBE
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 4 — EQUIPE & CERTIFICAÇÕES */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            tag="Excelência"
            title="EQUIPE & CERTIFICAÇÕES"
            subtitle="Profissionais capacitados e certificados para garantir o melhor resultado."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {certificacoes.map((cert, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-[#111111] border border-[rgba(255,105,0,0.1)]"
                style={{ borderRadius: '4px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#FF6900]/10 flex items-center justify-center" style={{ borderRadius: '50%' }}>
                  <Award className="w-8 h-8 text-[#FF6900]" />
                </div>
                <h3 className="font-[var(--font-bebas)] text-xl text-[#F5F5F3] tracking-wide mb-2">
                  {cert.nome}
                </h3>
                <p className="text-sm text-[#8A8A8A]">{cert.descricao}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-[#8A8A8A] mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nossa equipe passa por treinamentos constantes para garantir que você receba sempre 
            o serviço mais atualizado e de melhor qualidade do mercado.
          </motion.p>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 5 — YOUTUBE + INSTAGRAM */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 gradient-mesh-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            tag="Redes Sociais"
            title="NOSSA PRESENÇA DIGITAL"
            center
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* YouTube Card */}
            <motion.a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-[#111111] border border-[rgba(255,105,0,0.1)] hover:border-[#FF0000]/50 transition-all"
              style={{ borderRadius: '8px' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#FF0000] flex items-center justify-center flex-shrink-0" style={{ borderRadius: '12px' }}>
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-bebas)] text-2xl text-[#F5F5F3] tracking-wide mb-1 group-hover:text-[#FF0000] transition-colors">
                    YouTube
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mb-3">@NascarAutoSport</p>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">
                    Mais de 20 anos de conteúdo automotivo. Transformações, dicas e bastidores da oficina.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#FF0000] font-[var(--font-barlow)] font-semibold text-sm mt-4">
                    Inscreva-se <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-[#111111] border border-[rgba(255,105,0,0.1)] hover:border-[#E1306C]/50 transition-all"
              style={{ borderRadius: '8px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center flex-shrink-0" style={{ borderRadius: '12px' }}>
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-bebas)] text-2xl text-[#F5F5F3] tracking-wide mb-1 group-hover:text-[#E1306C] transition-colors">
                    Instagram
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mb-1">@nascarautosport</p>
                  <p className="text-[#FF6900] text-sm font-semibold mb-2">152K seguidores</p>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">
                    Acompanhe os projetos em tempo real. Fotos, stories e reels exclusivos.
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#E1306C] font-[var(--font-barlow)] font-semibold text-sm mt-4">
                    Seguir <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 6 — LOCALIZAÇÃO + CONTATO */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-widest text-[#FF6900]">
                Localização
              </span>
              <h2 className="font-[var(--font-bebas)] headline-section text-[#F5F5F3] tracking-wide">
                ONDE ESTAMOS
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6900] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#F5F5F3] font-semibold">Endereço</p>
                    <p className="text-[#8A8A8A]">São Paulo, SP — Brasil</p>
                    <p className="text-[#8A8A8A] text-sm mt-1">(Endereço completo a adicionar)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FF6900] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#F5F5F3] font-semibold">Horário de Funcionamento</p>
                    <p className="text-[#8A8A8A]">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-[#8A8A8A]">Sábado: 8h às 13h</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 font-[var(--font-bebas)] tracking-wide transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-5 py-3 font-[var(--font-bebas)] tracking-wide transition-opacity hover:opacity-90"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href={YOUTUBE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white px-5 py-3 font-[var(--font-bebas)] tracking-wide transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="relative h-[400px] bg-[#111111] border border-[rgba(255,105,0,0.1)] overflow-hidden"
              style={{ borderRadius: '8px' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2913769136694!2d-46.6040612!3d-23.593880900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b9af0c3c8a3%3A0x651aa9cca933b080!2sNascar%20Auto%20Sport%20-%20Funilaria%20e%20Pintura!5e0!3m2!1spt-BR!2sbr!4v1778849940416!5m2!1spt-BR!2sbr" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

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