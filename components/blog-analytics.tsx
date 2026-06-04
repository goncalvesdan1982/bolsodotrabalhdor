'use client'

import { useEffect } from 'react'
import { artigoVisualizado, scrollProfundidade } from '@/lib/analytics'

export function BlogAnalytics({ slug }: { slug: string }) {
  useEffect(() => {
    artigoVisualizado(slug)

    let fired50 = false
    let fired90 = false

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (window.scrollY / scrollHeight) * 100

      if (!fired50 && scrollPercent >= 50) {
        fired50 = true
        scrollProfundidade(50)
      }
      if (!fired90 && scrollPercent >= 90) {
        fired90 = true
        scrollProfundidade(90)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [slug])

  return null
}
