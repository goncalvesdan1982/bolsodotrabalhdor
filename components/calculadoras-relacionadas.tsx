import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
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
            <Link key={calc.href} href={calc.href} className="group">
              <Card className="h-full transition-colors hover:border-primary/50">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className={`w-10 h-10 rounded-lg ${calc.cor} flex items-center justify-center shrink-0`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-sm mb-1">{calc.nome}</CardTitle>
                    <CardDescription className="text-xs">{calc.descricao}</CardDescription>
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
