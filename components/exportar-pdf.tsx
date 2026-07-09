'use client'

import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { event } from '@/lib/analytics'

export function ExportarPdf() {
  return (
    <Button variant="outline" size="sm" onClick={() => { window.print(); event('pdf_exportado', { timestamp: Date.now() }) }}>
      <FileText className="h-4 w-4" />
      Exportar PDF
    </Button>
  )
}
