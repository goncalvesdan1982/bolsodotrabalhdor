import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface ArtigoRelacionado {
  titulo: string
  descricao: string
  href: string
}

interface ArtigosRelacionadosProps {
  artigos: ArtigoRelacionado[]
}

export function ArtigosRelacionados({ artigos }: ArtigosRelacionadosProps) {
  if (artigos.length === 0) return null

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6">Artigos Relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {artigos.map((artigo) => (
          <Link key={artigo.href} href={artigo.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/40 group-hover:-translate-y-0.5 border-border/60">
              <CardContent className="pt-6 flex flex-col h-full">
                <CardTitle className="text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                  {artigo.titulo}
                </CardTitle>
                <CardDescription className="text-xs flex-1">{artigo.descricao}</CardDescription>
                <span className="mt-3 text-xs font-semibold text-secondary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ler artigo <ArrowRight className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
