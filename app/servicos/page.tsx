'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronRight, 
  ChevronDown, 
  MessageCircle, 
  SprayCan, 
  Hammer, 
  Box, 
  Zap, 
  Gauge, 
  Sparkles,
  Award,
  GraduationCap,
  Wrench,
  MapPin,
  Camera
} from 'lucide-react'
import { CTASection } from '@/components/ui/cta-section'
import NextImage from 'next/image'

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'

const services = [
  {
    id: 'funilaria-pintura',
    icon: SprayCan,
    title: 'FUNILARIA & PINTURA',
    description: 'Nossa especialidade há mais de 30 anos. Realizamos desde pequenos reparos até reformas completas de pintura, sempre com a qualidade que você merece.',
    items: [
      'Correção de amassados e reparos de colisão',
      'Pintura personalizada e artística',
      'Pintura original de fábrica',
      'Pintura metálica e perolizada',
      'Pintura Candy e efeitos especiais',
      'Aplicação de verniz cerâmico'
    ],
    badge: 'CESVI + IQA',
    image: '/servicos/funilariaepintura.webp'
  },
  {
    id: 'martelinho',
    icon: Hammer,
    title: 'MARTELINHO DE OURO',
    description: 'Técnica especializada para remoção de amassados sem necessidade de repintura. Preserva a pintura original do seu veículo e seu valor de mercado.',
    items: [
      'Reparação de amassados sem pintura (PDR)',
      'Danos causados por granizo',
      'Amassados em portas e capô',
      'Preservação da pintura original',
      'Prazo reduzido de entrega'
    ],
    badge: 'PROFISSIONAIS ESPECIALIZADOS',
    image: '/servicos/martelinho.webp'
  },
  {
    id: 'cabine',
    icon: Box,
    title: 'CABINE DE PINTURA PROFISSIONAL',
    description: 'Ambiente controlado para garantir acabamento perfeito. Nossa cabine climatizada elimina impurezas e garante aderência ideal da tinta.',
    items: [
      'Cabine climatizada com controle de temperatura',
      'Sistema de filtragem de ar',
      'Acabamento espelhado profissional',
      'Pintura com partículas controladas',
      'Secagem controlada'
    ],
    badge: 'CABINE PRESSURIZADA',
    image: '/servicos/cabine.webp'
  },
  {
    id: 'tunning',
    icon: Zap,
    title: 'TUNING & CUSTOMIZAÇÃO',
    description: 'Transforme seu carro em uma obra de arte única. Do wrapping completo até kits aerodinâmicos, realizamos qualquer personalização.',
    items: [
      'Wrapping e envelopamento completo',
      'Aerografia personalizada',
      'Kits aerodinâmicos e widebody',
      'Rodas customizadas',
      'Rebaixamento e suspensão',
      'Iluminação customizada'
    ],
    badge: 'CUSTOMIZAÇÃO COMPLETA',
    image: '/servicos/tunning.webp'
  },
  {
    id: 'performance',
    icon: Gauge,
    title: 'PREPARAÇÃO DE ALTA PERFORMANCE',
    description: 'Para quem quer mais potência e desempenho. Preparação completa para track days ou uso diário com performance superior.',
    items: [
      'Preparação de motor',
      'Upgrade de suspensão',
      'Sistema de freios esportivos',
      'Escapamento esportivo',
      'Chip tuning e remapeamento ECU',
      'Admissão de ar esportiva'
    ],
    badge: 'AUMENTO DE DESEMPENHO',
    image: '/servicos/performance.webp'
  },
  {
    id: 'estetica',
    icon: Sparkles,
    title: 'ESTÉTICA AUTOMOTIVA',
    description: 'Deixe seu carro brilhando como novo. Serviços completos de estética para valorizar e proteger a pintura do seu veículo.',
    items: [
      'Polimento técnico em etapas',
      'Vitrificação cerâmica 9H',
      'Higienização interna profunda',
      'Espelhamento de pintura',
      'Proteção de PPF',
      'Revitalização de plásticos'
    ],
    badge: 'DETALHAMENTO ESTÉTICO',
    image: '/servicos/estetica.webp'
  }
]

const diferenciais = [
  { icon: Award, title: '30+ Anos de Mercado', description: 'Experiência comprovada desde 1994' },
  { icon: GraduationCap, title: 'Equipe Certificada', description: 'Profissionais CESVI, IQA e SENAI' },
  { icon: Wrench, title: 'Tecnologia de Ponta', description: 'Equipamentos modernos e atualizados' },
  { icon: MapPin, title: 'Localização em SP', description: 'Fácil acesso na capital paulista' },
]

const faqs = [
  { 
    question: 'Qual o prazo para pintura completa?', 
    answer: 'O prazo varia de acordo com o tamanho do projeto. Uma pintura completa leva em média de 15 a 30 dias úteis, garantindo secagem adequada e acabamento perfeito.' 
  },
  { 
    question: 'Vocês trabalham com seguros?', 
    answer: 'Sim! Trabalhamos com todas as principais seguradoras do mercado. Nossa equipe cuida de toda a documentação e comunicação com a seguradora.' 
  },
  { 
    question: 'Oferecem garantia nos serviços?', 
    answer: 'Sim, oferecemos garantia em todos os nossos serviços. O prazo de garantia varia de acordo com o tipo de serviço realizado, podendo chegar a 5 anos para pinturas completas.' 
  },
  { 
    question: 'Como funciona o orçamento?', 
    answer: 'O orçamento é gratuito e sem compromisso. Basta enviar fotos do seu veículo pelo WhatsApp ou agendar uma visita presencial para avaliação.' 
  },
  { 
    question: 'Trabalham com carros importados?', 
    answer: 'Sim! Temos experiência com todas as marcas, incluindo importados de luxo como Porsche, Ferrari, BMW, Mercedes-Benz, Audi e outros.' 
  },
]

export default function ServicosPage() {
  const [expandedService, setExpandedService] = useState<string | null>(services[0].id)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  return (
    <>
      {/* ============================================ */}
      {/* BLOCO 1 — HERO DA PÁGINA */}
      {/* ============================================ */}
      {/* ============================================ */}
      {/* BLOCO 1 — HERO DA PÁGINA (SERVIÇOS)         */}
      {/* ============================================ */}
      <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center pt-[80px] lg:pt-[120px] pb-12 lg:pb-10 gradient-hero overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Lado Esquerdo: Conteúdo */}
            <div className="relative z-20">
              {/* Breadcrumb */}
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
                <span className="text-[#FF6900] font-[var(--font-barlow)]">Serviços</span>
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Título Ajustado para manter o padrão */}
                <h1 className="font-[var(--font-bebas)] text-4xl lg:text-9xl text-[#F5F5F3] tracking-wide mb-4">
                  NOSSOS <br className="lg:hidden" /> SERVIÇOS
                </h1>
                <p className="font-[var(--font-barlow)] text-lg text-[#8A8A8A] max-w-2xl">
                  30 anos de expertise. Equipe treinada. Tecnologia de ponta. 
                  Conheça tudo o que podemos fazer pelo seu carro.
                </p>
              </motion.div>
            </div>

{/* Lado Direito: Foto do Ney */}
<motion.div 
  className="relative mt-8 lg:mt-0 lg:translate-x-12"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <div className="relative aspect-[4/5] max-w-[280px] sm:max-w-md mx-auto lg:mx-0 lg:ml-auto">
    <div className="absolute -inset-4 bg-[#FF6900]/15 blur-3xl rounded-full" />
    <div className="relative h-full overflow-hidden">
      {/* MUDAMOS DE Image PARA NextImage AQUI */}
      <NextImage 
        src="/arteservicos.webp" 
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
      {/* BLOCO 2 — SERVIÇOS DETALHADOS */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="border border-[rgba(255,105,0,0.15)] overflow-hidden"
                style={{ borderRadius: '4px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Header - Clickable */}
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between p-6 bg-[#111111] hover:bg-[#1a1a1a] transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#FF6900]/10">
                      <service.icon className="w-6 h-6 text-[#FF6900]" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-bebas)] text-xl lg:text-2xl text-[#F5F5F3] tracking-wide">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="text-xs text-[#FF6900] font-[var(--font-barlow)] font-semibold">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-[#FF6900]" />
                  </motion.div>
                </button>

                {/* Content - Expandable */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-[#111111] border-t border-[rgba(255,105,0,0.1)]">
                        <div className="grid lg:grid-cols-2 gap-8 pt-6">
                          {/* Text content */}
                          <div className="space-y-4">
                            <p className="font-sans text-[#8A8A8A] leading-relaxed">
                              {service.description}
                            </p>
                            <ul className="space-y-3">
                              {service.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="text-[#FF6900] font-bold mt-0.5">✓</span>
                                  <span className="text-[#F5F5F3] text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <a
                              href={WHATSAPP_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#FF6900] hover:text-[#ff8533] font-[var(--font-barlow)] font-semibold text-sm mt-4 transition-colors"
                            >
                              <MessageCircle className="w-4 h-4" />
                              Solicitar orçamento para este serviço
                            </a>
                          </div>

                          {/* Image */}
                          <div
                            className="relative aspect-video bg-[#1a1a1a] overflow-hidden"
                            style={{ borderRadius: '4px' }}
                          >
                            {service.image ? (
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                decoding={index === 0 ? 'auto' : 'async'}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Camera className="w-12 h-12 text-[#8A8A8A]/30" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 3 — DIFERENCIAIS */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 gradient-mesh-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[var(--font-bebas)] headline-section text-[#F5F5F3] tracking-wide">
              POR QUE ESCOLHER A NASCAR?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#111111] border border-[rgba(255,105,0,0.1)]"
                style={{ borderRadius: '4px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#FF6900]/10">
                  <item.icon className="w-6 h-6 text-[#FF6900]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-bebas)] text-lg text-[#F5F5F3] tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8A8A8A]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="line-separator" />

      {/* ============================================ */}
      {/* BLOCO 4 — FAQ */}
      {/* ============================================ */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-widest text-[#FF6900] mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="font-[var(--font-bebas)] headline-section text-[#F5F5F3] tracking-wide">
              PERGUNTAS FREQUENTES
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-[rgba(255,105,0,0.15)] overflow-hidden"
                style={{ borderRadius: '4px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.question ? null : faq.question)}
                  className="w-full flex items-center justify-between p-5 bg-[#111111] hover:bg-[#1a1a1a] transition-colors text-left"
                >
                  <span className="font-[var(--font-barlow)] font-semibold text-[#F5F5F3] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === faq.question ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-[#FF6900]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedFaq === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 bg-[#111111] border-t border-[rgba(255,105,0,0.1)]">
                        <p className="text-[#8A8A8A] leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOCO 5 — CTA */}
      {/* ============================================ */}
      <CTASection 
        headline="SOLICITE UM ORÇAMENTO SEM COMPROMISSO"
        subheadline="Nosso time está pronto para atender você."
        buttonText="FALAR NO WHATSAPP"
        buttonLink={WHATSAPP_LINK}
        variant="orange"
      />
    </>
  )
}