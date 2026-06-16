import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import MetaPixel from '@/components/MetaPixel'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas', display: 'swap' })
const barlowCondensed = Barlow_Condensed({ weight: ['400', '600', '700', '900'], subsets: ['latin'], variable: '--font-barlow', display: 'swap' })

const GTM_ID = 'GTM-WL8Z7JC7'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nascarautosport.com.br'),
  title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
  description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva. Mais de 30 anos de experiência em São Paulo.',
  keywords: 'funilaria,pintura automotiva,tunning,customização,martelinho de ouro,São Paulo,NASCAR Auto Sport',
  authors: [{ name: 'NASCAR Auto Sport' }],
  creator: 'NASCAR Auto Sport',
  robots: 'index, follow',
  openGraph: {
    title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
    description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva. Mais de 30 anos de experiência em São Paulo.',
    url: 'https://nascarautosport.com.br',
    siteName: 'NASCAR Auto Sport',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASCAR Auto Sport | Funilaria, Pintura e Customização em SP',
    description: 'Oficina especializada em funilaria, pintura, tunning e customização automotiva.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bebasNeue.variable} ${barlowCondensed.variable} bg-[#0a0a0a]`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <MetaPixel />
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
