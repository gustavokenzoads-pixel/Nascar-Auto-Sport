import Link from 'next/link'
import { Instagram, Youtube, MessageCircle, MapPin } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/5511992795348?text=Fala%20Ney%2C%20tudo%20certo%3F%20Vim%20direto%20do%20website%20da%20Nascar%21'
const INSTAGRAM_LINK = 'https://www.instagram.com/nascarautosport/'
const YOUTUBE_LINK = 'https://www.youtube.com/channel/UCVQtm9415r8NqXuC_AloQHQ'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#FF6900]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
<Link href="/" className="flex items-center gap-2">
<img 
  src="/images/logo-nascar.png" 
  alt="NASCAR Auto Sport" 
  className="h-12 w-auto"
/>
</Link>
            <p className="font-[var(--font-barlow)] text-[#8A8A8A] text-sm leading-relaxed">
              Realizando sonhos automotivos desde 1994. Mais de 30 anos transformando carros em São Paulo.
            </p>
            <div className="flex items-start gap-2 text-[#8A8A8A]">
              <MapPin className="w-4 h-4 mt-0.5 text-[#FF6900] flex-shrink-0" />
              <span className="text-sm">
                São Paulo, SP — Brasil
              </span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-xl text-[#F5F5F3] mb-4 tracking-wide">
              LINKS RÁPIDOS
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-[var(--font-barlow)] text-[#8A8A8A] hover:text-[#FF6900] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-[var(--font-barlow)] text-[#8A8A8A] hover:text-[#FF6900] transition-colors text-sm"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-xl text-[#F5F5F3] mb-4 tracking-wide">
              REDES SOCIAIS
            </h3>
            <div className="space-y-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="w-5 h-5 text-[#FF6900]" />
                <div>
                  <span className="block font-[var(--font-barlow)] text-[#F5F5F3] text-sm group-hover:text-[#FF6900] transition-colors">
                    @nascarautosport
                  </span>
                  <span className="text-xs text-[#8A8A8A]">
                    152K seguidores
                  </span>
                </div>
              </a>
              <a
                href={YOUTUBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Youtube className="w-5 h-5 text-[#FF6900]" />
                <div>
                  <span className="block font-[var(--font-barlow)] text-[#F5F5F3] text-sm group-hover:text-[#FF6900] transition-colors">
                    @NascarAutoSport
                  </span>
                  <span className="text-xs text-[#8A8A8A]">
                    Canal verificado
                  </span>
                </div>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 text-[#FF6900]" />
                <span className="font-[var(--font-barlow)] text-[#F5F5F3] text-sm group-hover:text-[#FF6900] transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(255,105,0,0.1)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8A8A8A] text-xs text-center sm:text-left">
              © 2026 NASCAR Auto Sport · Todos os direitos reservados
            </p>
            <a
              href="https://kenzoads.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8A8A] text-xs hover:text-[#FF6900] transition-colors"
            >
              Desenvolvido por KenzoAds
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
