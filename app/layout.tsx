import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap'
})

const barlowCondensed = Barlow_Condensed({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
  description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva. Mais de 30 anos de experiência em São Paulo. Martelinho de ouro, preparação de alta performance e estética automotiva.',
  keywords: ['funilaria', 'pintura automotiva', 'tunning', 'customização', 'martelinho de ouro', 'São Paulo', 'NASCAR Auto Sport'],
  authors: [{ name: 'NASCAR Auto Sport' }],
  creator: 'NASCAR Auto Sport',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nascarautosport.com.br',
    siteName: 'NASCAR Auto Sport',
    title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
    description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva. Mais de 30 anos de experiência em São Paulo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
    description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${inter.variable} ${bebasNeue.variable} ${barlowCondensed.variable} bg-[#0a0a0a]`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}