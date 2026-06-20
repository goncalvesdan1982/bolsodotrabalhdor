import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {calculadoras.map((calc) => {
          const Icon = calc.icon
          return (
            <Link key={calc.href} href={calc.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
              <Card className="h-full transition-all hover:shadow-md hover:border-primary/40 group-hover:-translate-y-0.5 border-border/60">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className={`w-11 h-11 rounded-lg ${calc.cor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm mb-1 group-hover:text-primary transition-colors">{calc.nome}</CardTitle>
                    <CardDescription className="text-xs">{calc.descricao}</CardDescription>
                    <span className="mt-2 text-xs font-semibold text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Calcular <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
