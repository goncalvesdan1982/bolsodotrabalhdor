import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, AlertTriangle, TrendingDown, FileText, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dívidas - Como Sair das Dívidas e Limpar o Nome',
  description: 'Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro. Dicas práticas e calculadoras gratuitas.',
  keywords: ['sair das dívidas', 'negociar dívidas', 'limpar nome', 'como sair das dívidas', 'renegociar dívidas', 'dividas', 'nome negativado'],
  openGraph: {
    title: 'Dívidas - Como Sair das Dívidas e Limpar o Nome',
    description: 'Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro.',
    url: `${SITE_URL}/dividas`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: { canonical: `${SITE_URL}/dividas` },
}

export default function DividasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Dívidas' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Dívidas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro. Dicas práticas e calculadoras gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <TrendingDown className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle>Quitação de Dívidas</CardTitle>
              <CardDescription>Simule quanto tempo leva para quitar suas dívidas com diferentes estratégias de pagamento.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/quitacao-dividas">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <Calculator className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle>Comprometimento de Renda</CardTitle>
              <CardDescription>Descubra quanto da sua renda está comprometida com dívidas e se você precisa renegociar.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/comprometimento-renda">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <FileText className="w-8 h-8 text-red-600 mb-2" />
              <CardTitle>Troca de Dívidas</CardTitle>
              <CardDescription>Compare cenários e veja se vale a pena trocar uma dívida cara por outra com juros menores.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/troca-dividas">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-primary rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Dívidas</h2>
          <p className="text-primary-foreground/80 mb-6">
            Aprofunde seu conhecimento com nossos artigos completos sobre como lidar com dívidas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/como-sair-das-dividas-guia-completo"
              className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all group"
            >
              <span className="font-medium">Como sair das dívidas: guia passo a passo completo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Entendendo as Dívidas</h2>
          <p>
            As dívidas são uma realidade para milhões de brasileiros. Seja por emergências médicas, desemprego, falta de planejamento ou simplesmente imprevistos da vida, estar endividado não é o fim do mundo. O importante é ter um plano para resolver a situação.
          </p>
          <p>
            O primeiro passo é entender que tipo de dívida você tem. Dívidas de cartão de crédito rotativo e cheque especial são as mais caras, com juros que podem ultrapassar 400% ao ano. Já dívidas de financiamento imobiliário ou consignado têm juros muito mais baixos e podem ser administradas com mais tranquilidade.
          </p>
          <h2>Estratégias para Sair das Dívidas</h2>
          <p>
            Existem diferentes estratégias para sair das dívidas. A mais recomendada é listar todas as dívidas, priorizar as mais caras, negociar com os credores e criar um orçamento realista. Nossas calculadoras foram feitas para ajudar em cada etapa desse processo.
          </p>
          <h2>Negociação com Credores</h2>
          <p>
            A maioria dos bancos e empresas prefere receber um valor menor do que não receber nada. Por isso, negociar é sempre uma opção válida. Plataformas como Serasa Limpa Nome e Acordo OK oferecem descontos significativos para pagamento à vista ou parcelado.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center border border-red-200">
          <Calculator className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Calcule seu plano de saída das dívidas</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use nossas calculadoras gratuitas para simular cenários e encontrar a melhor estratégia para seu caso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/quitacao-dividas">
                Calculadora de Quitação <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/comprometimento-renda">
                Comprometimento de Renda <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
