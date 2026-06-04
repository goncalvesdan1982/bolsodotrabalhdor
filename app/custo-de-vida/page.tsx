import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, PiggyBank, TrendingDown, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custo de Vida - Quanto Custa Morar no Brasil',
  description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras. Planejamento financeiro realista.',
  keywords: ['custo de vida', 'morar sozinho', 'custo morar no brasil', 'quanto custa morar sozinho', 'aluguel', 'planejamento financeiro', 'custo de vida brasil'],
  openGraph: {
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras.',
    url: `${SITE_URL}/custo-de-vida`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: { canonical: `${SITE_URL}/custo-de-vida` },
}

export default function CustoDeVidaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Custo de Vida' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
            <Home className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Custo de Vida
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras. Planejamento financeiro realista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <Home className="w-8 h-8 text-amber-600 mb-2" />
              <CardTitle>Orçamento Familiar</CardTitle>
              <CardDescription>Simule todos os gastos mensais e veja se sua renda é suficiente para o custo de vida desejado.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/orcamento-familiar">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-amber-600 mb-2" />
              <CardTitle>Reserva de Emergência</CardTitle>
              <CardDescription>Calcule quanto guardar para emergências com base no seu custo de vida mensal.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/reserva-emergencia">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader>
              <TrendingDown className="w-8 h-8 text-amber-600 mb-2" />
              <CardTitle>Economia Mensal</CardTitle>
              <CardDescription>Descubra quanto você precisa economizar para atingir metas como comprar um imóvel ou carro.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/economia-mensal">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-primary rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Custo de Vida</h2>
          <p className="text-primary-foreground/80 mb-6">
            Veja nossos artigos detalhados sobre custo de vida e planejamento financeiro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/quanto-custa-morar-sozinho"
              className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all group"
            >
              <span className="font-medium">Quanto custa morar sozinho no Brasil em 2026</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Entendendo o Custo de Vida no Brasil</h2>
          <p>
            O custo de vida no Brasil varia significativamente entre regiões e cidades. Morar em São Paulo ou Rio de Janeiro é consideravelmente mais caro que em cidades de médio porte do interior. Além disso, o estilo de vida escolhido impacta diretamente no orçamento mensal.
          </p>
          <h2>Principais Gastos Mensais</h2>
          <p>
            Os principais gastos de uma pessoa que mora sozinha incluem: aluguel (R$ 800 a R$ 2.500), condomínio (R$ 200 a R$ 600), contas de água, luz e internet (R$ 250 a R$ 500), supermercado (R$ 400 a R$ 800) e plano de saúde (R$ 200 a R$ 500).
          </p>
          <h2>Planejamento para Morar Sozinho</h2>
          <p>
            Antes de morar sozinho, é importante ter uma reserva para custos iniciais como caução do aluguel (geralmente 3 aluguéis), mobília básica e eletrodomésticos. Uma regra segura é que o aluguel não ultrapasse 30% da sua renda líquida.
          </p>
          <h2>Diferenças por Cidade</h2>
          <p>
            O custo de vida em capitais como São Paulo e Rio de Janeiro pode ser até 50% maior que em cidades de médio porte. Cidades como Curitiba, Belo Horizonte e Florianópolis oferecem um bom equilíbrio entre qualidade de vida e custo.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center border border-amber-200">
          <Calculator className="w-12 h-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Planeje seu orçamento mensal</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use nossas calculadoras para simular seu custo de vida e planejar suas finanças com realismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/orcamento-familiar">
                Orçamento Familiar <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/economia-mensal">
                Economia Mensal <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
