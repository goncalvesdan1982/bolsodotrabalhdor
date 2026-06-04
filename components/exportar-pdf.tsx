'use client'

import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { pdfExportado } from '@/lib/analytics'

export function ExportarPdf() {
  return (
    <Button variant="outline" size="sm" onClick={() => { window.print(); pdfExportado() }}>
      <FileText className="h-4 w-4" />
      Exportar PDF
    </Button>
  )
}
