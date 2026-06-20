import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface CalculadoraRelacionada {
  nome: string
  descricao: string
  href: string
  icon: LucideIcon
  cor: string
}

interface CalculadorasRelacionadasProps {
  calculadoras: CalculadoraRelacionada[]
}

export function CalculadorasRelacionadas({ calculadoras }: CalculadorasRelacionadasProps) {
  if (calculadoras.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Calculadoras Relacionadas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculadoras.map((calc) => {
          const Icon = calc.icon
          return (
            <Link
              key={calc.href}
              href={calc.href}
              className="group block rounded-xl border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-lg ${calc.cor} p-2.5 shrink-0 transition-transform group-hover:scale-105`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {calc.nome}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {calc.descricao}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    Calcular <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
