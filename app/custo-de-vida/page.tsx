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
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Custo de Vida — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras.',
    images: [`${SITE_URL}/og-image.png`],
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
          <Card className="border-amber-200 bg-amber-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Home className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
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
          <Card className="border-amber-200 bg-amber-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
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
          <Card className="border-amber-200 bg-amber-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <TrendingDown className="w-8 h-8 text-amber-600 mb-2 group-hover:scale-110 transition-transform" />
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

        <div className="mb-8 p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-3">Por onde começar</h2>
          <p className="text-muted-foreground mb-4">
            Quer entender seu custo de vida? Siga esta trilha de leitura e ferramentas:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
            <li><Link href="/blog/quanto-custa-morar-sozinho" className="text-secondary hover:underline font-medium">Quanto custa morar sozinho</Link> — guia completo de gastos</li>
            <li><Link href="/calculadoras/orcamento-familiar" className="text-secondary hover:underline font-medium">Calculadora de Orçamento Familiar</Link> — simule seus gastos mensais</li>
            <li><Link href="/calculadoras/reserva-emergencia" className="text-secondary hover:underline font-medium">Calculadora de Reserva de Emergência</Link> — baseada no seu custo de vida</li>
            <li><Link href="/calculadoras/economia-mensal" className="text-secondary hover:underline font-medium">Calculadora de Economia Mensal</Link> — planeje suas metas</li>
            <li><Link href="/calculadoras/meta-financeira" className="text-secondary hover:underline font-medium">Calculadora de Meta Financeira</Link> — simule objetivos de curto e longo prazo</li>
          </ol>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Custo de Vida</h2>
          <p className="text-white/80 mb-6">
            Veja nossos artigos detalhados sobre custo de vida e planejamento financeiro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/quanto-custa-morar-sozinho"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Quanto custa morar sozinho no Brasil</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/metodo-50-30-20-como-aplicar"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Método 50-30-20: organize seu orçamento</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
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
