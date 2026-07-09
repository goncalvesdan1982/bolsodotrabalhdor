'use client'

import { useEffect } from 'react'
import { event } from '@/lib/analytics'

export function BlogAnalytics({ slug }: { slug: string }) {
  useEffect(() => {
    event('artigo_visualizado', { slug_artigo: slug, timestamp: Date.now() })

    let fired50 = false
    let fired90 = false

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (window.scrollY / scrollHeight) * 100

      if (!fired50 && scrollPercent >= 50) {
        fired50 = true
        event(`scroll_${50}`, { timestamp: Date.now() })
      }
      if (!fired90 && scrollPercent >= 90) {
        fired90 = true
        event(`scroll_${90}`, { timestamp: Date.now() })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  return null
}
