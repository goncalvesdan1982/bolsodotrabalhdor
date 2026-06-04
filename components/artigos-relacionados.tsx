import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {artigos.map((artigo) => (
          <Link key={artigo.href} href={artigo.href} className="group">
            <Card className="h-full transition-colors hover:border-primary/50">
              <CardContent className="pt-6">
                <CardTitle className="text-sm mb-2 group-hover:text-primary transition-colors">
                  {artigo.titulo}
                </CardTitle>
                <CardDescription className="text-xs">{artigo.descricao}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
