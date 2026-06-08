'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const FB_PIXEL_ID = '925971887127074'

declare global {
    interface Window {
          fbq: (...args: unknown[]) => void
    }
}

export default function MetaPixel() {
    const pathname = usePathname()

  useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'PageView')
        }
  }, [pathname])

  useEffect(() => {
        const handleClick = (e: MouseEvent) => {
                const target = e.target as HTMLElement
                const anchor = target.closest('a')
                if (anchor && anchor.href && anchor.href.includes('wa.me/5511992795348')) {
                          if (typeof window !== 'undefined' && window.fbq) {
                                      window.fbq('track', 'Lead')
                          }
                }
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
                                                                                                                    fbq('init', '925971887127074');
                                                                                                                              fbq('track', 'PageView');
                                                                                                                                      `,
                }}
              />
      )
}
