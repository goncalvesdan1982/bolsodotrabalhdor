import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface CalculatorCardProps {
  nome: string
  descricao: string
  href: string
  icon: LucideIcon
  cor: string
  cta?: string
  categoriaCor?: string
}

export function CalculatorCard({
  nome,
  descricao,
  href,
  icon: Icon,
  cor,
  cta,
  categoriaCor,
}: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className={`rounded-xl ${cor} p-3 transition-transform group-hover:scale-105`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground whitespace-nowrap">
          Gratuita
        </span>
      </div>
      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
        {nome}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {descricao}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {cta || 'Calcular agora'}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
