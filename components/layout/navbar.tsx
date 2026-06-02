'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Instagram, Youtube } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
]

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'
const INSTAGRAM_LINK = 'https://www.instagram.com/nascarautosport/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCVQtm9415r8NqXuC_AloQHQ'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  // Hamburger line variants
  const line1Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 }
  }
  const line2Variants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 }
  }
  const line3Variants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 }
  }

  // Drawer variants
  const drawerVariants = {
    closed: { x: '100%', opacity: 0.5 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 28, stiffness: 300 }
    }
  }

  // Overlay variants
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1, transition: { duration: 0.3 } }
  }

  // Nav item variants for stagger effect
  const navItemVariants = {
    closed: { x: 30, opacity: 0 },
    open: (i: number) => ({
      x: 0, 
      opacity: 1,
      transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' }
    })
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-[rgba(255,105,0,0.1)]' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              onClick={closeMenu}
            >
              {/* 
                TODO: Substituir pela logo oficial se necessário
                Arquivo atual: /images/logo-nascar.png
              */}
              <Image
                src="/images/logo-nascar.png"
                alt="NASCAR Auto Sport"
                width={180}
                height={40}
                className="h-8 w-auto sm:h-10 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-barlow)] text-sm font-semibold uppercase tracking-wider text-[#F5F5F3] hover:text-[#FF6900] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6900] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#FF6900] hover:bg-[#ff8533] text-[#0a0a0a] px-5 py-2.5 font-[var(--font-bebas)] text-lg tracking-wide transition-all hover:shadow-[0_0_30px_rgba(255,105,0,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              PEDIR ORÇAMENTO
            </a>

            {/* Mobile Hamburger Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[10000]"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.85 }}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              <motion.span
                className={`block w-6 h-0.5 ${isOpen ? 'bg-[#FF6900]' : 'bg-[#F5F5F3]'} origin-center`}
                variants={line1Variants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className={`block w-6 h-0.5 ${isOpen ? 'bg-[#FF6900]' : 'bg-[#F5F5F3]'} origin-center`}
                variants={line2Variants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className={`block w-6 h-0.5 ${isOpen ? 'bg-[#FF6900]' : 'bg-[#F5F5F3]'} origin-center`}
                variants={line3Variants}
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[9998] lg:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[340px] bg-[#0f0f0f] border-l-2 border-[#FF6900] z-[9999] lg:hidden flex flex-col"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[rgba(255,105,0,0.2)]">
                {/* Logo no menu mobile */}
                <Image
                  src="/images/logo-nascar.png"
                  alt="NASCAR Auto Sport"
                  width={140}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between px-6 py-4 border-b border-[rgba(255,105,0,0.1)] hover:bg-[rgba(255,105,0,0.05)] transition-all"
                    >
                      <span className="font-[var(--font-bebas)] text-2xl text-[#F5F5F3] group-hover:text-[#FF6900] group-hover:translate-x-2 transition-all">
                        {link.label}
                      </span>
                      <motion.span 
                        className="text-[#FF6900] opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        {'\u2192'}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 space-y-4 border-t border-[rgba(255,105,0,0.2)]">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#FF6900] text-[#0a0a0a] py-4 font-[var(--font-bebas)] text-xl tracking-wide hover:bg-[#ff8533] transition-colors"
                  onClick={closeMenu}
                >
                  <MessageCircle className="w-5 h-5" />
                  PEDIR ORÇAMENTO
                </a>
                
                <div className="flex items-center justify-center gap-6">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8A8A] hover:text-[#FF6900] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={YOUTUBE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8A8A] hover:text-[#FF6900] transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
