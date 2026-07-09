'use client'

import { Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { event } from '@/lib/analytics'

export function ImprimirResultado() {
  return (
    <Button variant="outline" size="sm" onClick={() => { window.print(); event('resultado_impresso', { timestamp: Date.now() }) }}>
      <Printer className="h-4 w-4" />
      Imprimir
    </Button>
  )
}
