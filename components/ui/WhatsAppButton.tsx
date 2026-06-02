'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_NUMBER = '5511992795348'
const WA_MESSAGE = 'Oi Ney! Vi o site da NASCAR Auto Sport e quero fazer um orçamento 🚗'

const MESSAGES = [
  { line1: 'Agenda aberta essa semana!', line2: 'Vem fazer seu orçamento com o Ney 👋' },
  { line1: 'O Ney está esperando você!', line2: 'Resposta em minutos no WhatsApp ⚡' },
  { line1: 'Temos horário disponível!', line2: 'Solicite agora, sem compromisso 😊' },
  { line1: '30 anos de experiência!', line2: 'Transforme seu carro com quem entende 🔧' },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.52 5.83L.055 23.544a.5.5 0 0 0 .613.612l5.879-1.516A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.384l-.36-.215-3.733.962.992-3.62-.236-.374A9.81 9.81 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.389 9.818 9.818 0 5.43-4.389 9.818-9.818 9.818z"/>
    </svg>
  )
}

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [bubbleOpen, setBubbleOpen] = useState(false)
  const [msgIndex, setMsgIndex] = useState(0)
  const [hasNotif, setHasNotif] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

  // Aparece após 2s
const bubbleOpenRef = useRef(false)

// Aparece após 2s
useEffect(() => {
  const t = setTimeout(() => {
    setVisible(true)
    setTimeout(() => {
      setBubbleOpen(true)
      bubbleOpenRef.current = true
    }, 700)
  }, 2000)
  return () => clearTimeout(t)
}, [])

// Cicla mensagens: fica aberta, fecha, 10s depois abre com nova mensagem
useEffect(() => {
  if (!visible) return

  const interval = setInterval(() => {
    if (bubbleOpenRef.current) {
      // fecha a bubble atual
      setBubbleOpen(false)
      bubbleOpenRef.current = false

      // 10 segundos depois abre com próxima mensagem
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % MESSAGES.length)
        setAnimKey(k => k + 1)
        setBubbleOpen(true)
        bubbleOpenRef.current = true
      }, 10000)
    } else {
      // estava fechada (usuário fechou manualmente) — só notifica
      setHasNotif(true)
    }
  }, 10000)

  return () => clearInterval(interval)
}, [visible])

function handleBtnClick() {
  if (bubbleOpen) {
    setBubbleOpen(false)
    bubbleOpenRef.current = false
  } else {
    setBubbleOpen(true)
    bubbleOpenRef.current = true
    setHasNotif(false)
  }
}

  const msg = MESSAGES[msgIndex]

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
        >
          {/* BUBBLE */}
          <AnimatePresence mode="wait">
            {bubbleOpen && (
              <motion.a
                key={animKey}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1c1c1c] border border-[#FF6900]/20
                  rounded-2xl rounded-br-sm px-4 py-3 max-w-[220px] min-w-[180px]
                  cursor-pointer hover:border-[#FF6900]/50 transition-colors duration-200"
                initial={{ opacity: 0, scale: 0.8, y: 8, originX: 1, originY: 1 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 6 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
<img
  src="/notificacao.png"
  alt="Ney"
  className="w-7 h-7 rounded-full object-cover flex-shrink-0"
/>
                  <span className="text-[#FF6900] text-[12px] font-bold tracking-wide">
                    Ney
                  </span>
                  <span className="ml-auto text-[10px] text-white/30">agora</span>
                </div>

                {/* Mensagem */}
                <p className="text-[13px] font-semibold text-white/90 leading-snug mb-0.5">
                  {msg.line1}
                </p>
                <p className="text-[12px] text-white/55 leading-snug">
                  {msg.line2}
                </p>
              </motion.a>
            )}
          </AnimatePresence>

          {/* BOTÃO */}
          <div className="relative">
            {/* Pulse rings */}
            {[0, 1.4].map((delay, i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-2xl rounded-br-sm border-2 border-[#FF6900] pointer-events-none"
                initial={{ inset: '0px', opacity: 0.5 }}
                animate={{ inset: '-14px', opacity: 0 }}
                transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeOut' }}
              />
            ))}

            {/* Badge Online */}
            <div className="absolute -top-2.5 -right-1.5 z-10
              bg-[#22c55e] border-2 border-[#0a0a0a]
              rounded-full px-2 py-[2px]
              flex items-center gap-1 whitespace-nowrap">
              <span className="w-[5px] h-[5px] rounded-full bg-white animate-pulse" />
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                Online
              </span>
            </div>

            {/* Badge notificação */}
            <AnimatePresence>
              {hasNotif && (
                <motion.span
                  className="absolute -top-2 -left-2 z-10
                    w-5 h-5 bg-red-500 border-2 border-[#0a0a0a]
                    rounded-full flex items-center justify-center
                    text-[9px] font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                >
                  1
                </motion.span>
              )}
            </AnimatePresence>

            {/* Botão principal */}
            <motion.button
              onClick={handleBtnClick}
              aria-label="Abrir chat WhatsApp"
              className="relative w-[58px] h-[58px] bg-[#FF6900]
                rounded-2xl rounded-br-sm overflow-hidden
                flex items-center justify-content text-[#0a0a0a]
                cursor-pointer"
              style={{ justifyContent: 'center' }}
              whileHover={{ scale: 1.08, backgroundColor: '#ff8533' }}
              whileTap={{ scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              {/* Shimmer */}
              <motion.span
                className="absolute top-0 left-[-60%] w-1/2 h-full
                  bg-gradient-to-r from-transparent via-white/25 to-transparent
                  pointer-events-none"
                animate={{ left: ['-60%', '160%'] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              />
              <WhatsAppIcon className="w-[27px] h-[27px] relative z-10" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}