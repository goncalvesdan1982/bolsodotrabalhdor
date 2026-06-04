'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { resultadoCompartilhado } from '@/lib/analytics'

interface CompartilharResultadoProps {
  titulo: string
  texto: string
  url?: string
}

export function CompartilharResultado({ titulo, texto, url }: CompartilharResultadoProps) {
  const [copiado, setCopiado] = useState(false)

  async function handleCompartilhar() {
    const shareUrl = url || window.location.href

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: titulo, text: texto, url: shareUrl })
        resultadoCompartilhado()
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 2000)
      } catch {
        setCopiado(true)
        setTimeout(() => setCopiado(false), 2000)
      }
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleCompartilhar}>
      <Share2 className="h-4 w-4" />
      {copiado ? 'Copiado!' : 'Compartilhar'}
    </Button>
  )
}
