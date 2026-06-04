'use client'

import { Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { resultadoImpresso } from '@/lib/analytics'

export function ImprimirResultado() {
  return (
    <Button variant="outline" size="sm" onClick={() => { window.print(); resultadoImpresso() }}>
      <Printer className="h-4 w-4" />
      Imprimir
    </Button>
  )
}
