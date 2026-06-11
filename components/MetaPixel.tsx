'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const FB_PIXEL_ID = '925971887127074'
const WHATSAPP_NUMBER = '5511992795348'

declare global {
    interface Window {
        fbq: (...args: unknown[]) => void
    }
}

// Evita disparo duplicado de Lead dentro da mesma sessão / por clique repetido.
let leadFiredInThisLoad = false

export default function MetaPixel() {
    const pathname = usePathname()

    // PageView em cada navegação (SPA). O disparo do script inline foi removido
    // para não duplicar o PageView no primeiro carregamento.
    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'PageView')
        }
    }, [pathname])

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest('a')
            if (!anchor || !anchor.href || !anchor.href.includes(`wa.me/${WHATSAPP_NUMBER}`)) {
                return
            }

            if (typeof window === 'undefined' || !window.fbq) return

            // Deduplicação:
            // 1) trava em memória contra duplo-clique acidental no mesmo load.
            // 2) trava por sessão (sessionStorage) para o mesmo visitante não
            //    contar vários Leads ao voltar e clicar de novo.
            let alreadyFiredThisSession = false
            try {
                alreadyFiredThisSession = sessionStorage.getItem('nascar_lead_fired') === '1'
            } catch {
                // sessionStorage indisponível (modo privado/bloqueado): cai na trava em memória.
            }

            if (leadFiredInThisLoad || alreadyFiredThisSession) return

            leadFiredInThisLoad = true
            try {
                sessionStorage.setItem('nascar_lead_fired', '1')
            } catch {
                // ignora se não puder gravar
            }

            // eventID permite deduplicação com o servidor (CAPI) no futuro.
            const eventID = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`

            window.fbq(
                'track',
                'Lead',
                {
                    content_name: 'Orçamento WhatsApp',
                    content_category: 'Funilaria e Pintura',
                },
                { eventID }
            )
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${FB_PIXEL_ID}');
                `,
            }}
        />
    )
}
