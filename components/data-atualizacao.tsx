import { Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { cn } from '@/lib/utils'

interface DataAtualizacaoProps {
  data: string
  className?: string
}

export function DataAtualizacao({ data, className }: DataAtualizacaoProps) {
  const dataObj = new Date(data)
  const mesAno = format(dataObj, "MMMM 'de' yyyy", { locale: pt })

  return (
    <div className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium', className)}>
      <Calendar className="h-3.5 w-3.5" />
      Atualizado em: {mesAno}
    </div>
  )
}
