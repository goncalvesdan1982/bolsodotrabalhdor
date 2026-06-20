import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, PieChart, PiggyBank, TrendingDown, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Organização Financeira - Controle Suas Contas',
  description: 'Aprenda a organizar suas finanças com métodos práticos. Calculadora de orçamento familiar, reserva de emergência e economia mensal.',
  keywords: ['organização financeira', 'controlar gastos', 'orcamento pessoal', 'planejamento financeiro', 'reserva de emergência', 'economia mensal', 'metodo 50 30 20'],
  openGraph: {
    title: 'Organização Financeira - Controle Suas Contas',
    description: 'Aprenda a organizar suas finanças com métodos práticos. Calculadora de orçamento familiar, reserva de emergência e economia mensal.',
    url: `${SITE_URL}/organizacao-financeira`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Organização Financeira — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organização Financeira - Controle Suas Contas',
    description: 'Aprenda a organizar suas finanças com métodos práticos e calculadoras gratuitas.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/organizacao-financeira` },
}

export default function OrganizacaoFinanceiraPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Organização Financeira' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-4">
            <PieChart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Organização Financeira
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprenda a organizar suas finanças com métodos práticos. Calculadora de orçamento familiar, reserva de emergência e economia mensal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-teal-200 bg-teal-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <PieChart className="w-8 h-8 text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Orçamento Familiar</CardTitle>
              <CardDescription>Organize suas receitas e despesas com o método 50-30-20 ou crie seu próprio plano.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/orcamento-familiar">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-teal-200 bg-teal-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <PiggyBank className="w-8 h-8 text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Reserva de Emergência</CardTitle>
              <CardDescription>Calcule quanto você precisa poupar para construir uma reserva financeira segura.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/reserva-emergencia">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-teal-200 bg-teal-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <TrendingDown className="w-8 h-8 text-teal-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Economia Mensal</CardTitle>
              <CardDescription>Descubra quanto você pode economizar por mês e em quanto tempo atinge suas metas.</CardDescription>
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
            Quer organizar suas finanças? Siga esta trilha de leitura:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
            <li><Link href="/blog/metodo-50-30-20-como-aplicar" className="text-secondary hover:underline font-medium">Método 50-30-20</Link> — aprenda a dividir sua renda de forma simples</li>
            <li><Link href="/calculadoras/orcamento-familiar" className="text-secondary hover:underline font-medium">Calculadora de Orçamento Familiar</Link> — organize receitas e despesas</li>
            <li><Link href="/calculadoras/reserva-emergencia" className="text-secondary hover:underline font-medium">Calculadora de Reserva de Emergência</Link> — descubra quanto guardar</li>
            <li><Link href="/calculadoras/economia-mensal" className="text-secondary hover:underline font-medium">Calculadora de Economia Mensal</Link> — veja quanto economizar por mês</li>
            <li><Link href="/calculadoras/meta-financeira" className="text-secondary hover:underline font-medium">Calculadora de Meta Financeira</Link> — planeje seus objetivos</li>
          </ol>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-teal-700 to-teal-600 rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Organização Financeira</h2>
          <p className="text-white/80 mb-6">
            Aprenda métodos práticos para organizar suas finanças e alcançar seus objetivos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/metodo-50-30-20-como-aplicar"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Método 50-30-20: como aplicar no Brasil</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/como-sair-das-dividas-guia-completo"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Como sair das dívidas: guia completo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Por que Organizar as Finanças?</h2>
          <p>
            Organizar as finanças é o primeiro passo para alcançar liberdade financeira. Saber exatamente quanto você ganha, gasta e poupa permite tomar decisões conscientes e evitar dívidas desnecessárias.
          </p>
          <h2>Método 50-30-20</h2>
          <p>
            O método 50-30-20 é uma forma simples e eficaz de organizar o orçamento. 50% da renda para gastos essenciais (moradia, alimentação, transporte), 30% para estilo de vida (lazer, viagens, assinaturas) e 20% para objetivos financeiros (pagar dívidas, poupar, investir).
          </p>
          <h2>Reserva de Emergência</h2>
          <p>
            A reserva de emergência é fundamental para imprevistos. O recomendado é ter de 3 a 6 meses de despesas mensais guardados em aplicações de fácil resgate, como poupança ou Tesouro Selic. Use nossa calculadora para descobrir quanto você precisa guardar.
          </p>
          <h2>Dicas para Economizar</h2>
          <p>
            Pequenas mudanças no dia a dia fazem grande diferença no final do mês. Corte assinaturas que você não usa, cozinhe mais em casa, negocie contas como internet e plano de saúde, e evite compras por impulso.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 text-center border border-teal-200">
          <Calculator className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Organize suas finanças agora</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use nossas calculadoras gratuitas para criar um orçamento e planejar sua reserva de emergência.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/orcamento-familiar">
                Orçamento Familiar <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/reserva-emergencia">
                Reserva de Emergência <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
