import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, CreditCard, Percent, TrendingUp, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cartões de Crédito - Guia Completo',
  description: 'Tudo sobre cartões de crédito: melhores cartões sem anuidade, como aumentar limite, cartão para score baixo e dicas para usar com inteligência.',
  keywords: ['cartão de crédito', 'cartão sem anuidade', 'cartão score baixo', 'aumentar limite', 'melhor cartão', 'cartão crédito', 'cartão negativado'],
  openGraph: {
    title: 'Cartões de Crédito - Guia Completo',
    description: 'Tudo sobre cartões de crédito: melhores cartões sem anuidade, como aumentar limite, cartão para score baixo e dicas para usar com inteligência.',
    url: `${SITE_URL}/cartoes`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Cartões de Crédito — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartões de Crédito - Guia Completo',
    description: 'Tudo sobre cartões de crédito: melhores cartões sem anuidade, como aumentar limite e dicas.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/cartoes` },
}

export default function CartoesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Cartões de Crédito' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
            <CreditCard className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Cartões de Crédito
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo sobre cartões de crédito: melhores cartões sem anuidade, como aumentar limite, cartão para score baixo e dicas para usar com inteligência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-blue-200 bg-blue-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Percent className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Calculadora de Parcelas</CardTitle>
              <CardDescription>Veja o valor real das parcelas com juros e entenda quanto você pagará no final.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/parcelas">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Juros Compostos</CardTitle>
              <CardDescription>Entenda o efeito dos juros compostos no rotativo do cartão e veja como evitar dívidas.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/juros-compostos">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Calculator className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Comprometimento de Renda</CardTitle>
              <CardDescription>Descubra se o limite do seu cartão está compatível com sua renda mensal.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/comprometimento-renda">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-3">Por onde começar</h2>
          <p className="text-muted-foreground mb-4">
            Se você está começando a usar cartão de crédito ou quer usar melhor, siga esta trilha de leitura:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
            <li><Link href="/blog/cartao-sem-anuidade-vale-a-pena" className="text-secondary hover:underline font-medium">Cartão sem anuidade vale a pena?</Link> — entenda se vale pagar taxa</li>
            <li><Link href="/blog/melhores-cartoes-score-baixo" className="text-secondary hover:underline font-medium">Melhores cartões para score baixo</Link> — opções reais para quem está negativado</li>
            <li><Link href="/blog/como-evitar-juros-rotativo" className="text-secondary hover:underline font-medium">Como evitar juros rotativo</Link> — a armadilha mais cara do cartão</li>
            <li><Link href="/blog/fatura-parcelada-compensa" className="text-secondary hover:underline font-medium">Fatura parcelada compensa?</Link> — quando vale a pena parcelar a fatura</li>
            <li><Link href="/blog/como-aumentar-limite-cartao-credito" className="text-secondary hover:underline font-medium">Como aumentar o limite</Link> — estratégias práticas para conquistar mais limite</li>
          </ol>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-indigo-700 to-indigo-600 rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Cartões de Crédito</h2>
          <p className="text-white/80 mb-6">
            Leia nossos artigos para escolher o melhor cartão e usar o crédito com inteligência.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/melhores-cartoes-score-baixo"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Melhores cartões para score baixo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/cartao-sem-anuidade-vale-a-pena"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Cartão sem anuidade vale a pena?</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/como-evitar-juros-rotativo"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Como evitar juros rotativo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/como-aumentar-limite-cartao-credito"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Como aumentar o limite do cartão</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/fatura-parcelada-compensa"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Fatura parcelada compensa?</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/o-que-fazer-quando-limite-cartao-acaba"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">O que fazer quando o limite acaba</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Como Escolher o Melhor Cartão de Crédito</h2>
          <p>
            Escolher o cartão de crédito ideal depende do seu perfil de consumo, renda e objetivos financeiros. Para quem tem score baixo, existem opções como cartões de fintechs (Nubank, Inter, Mercado Pago) que costumam ser mais flexíveis na aprovação.
          </p>
          <p>
            Cartões sem anuidade são a melhor opção para a maioria das pessoas. Bancos digitais como Nubank, Inter, C6 Bank e PagBank oferecem cartões sem taxa de anuidade e com aplicativos completos para controle financeiro.
          </p>
          <h2>Como Aumentar o Limite do Cartão</h2>
          <p>
            Para aumentar o limite do seu cartão de crédito, use o cartão regularmente, pague a fatura integralmente antes do vencimento e mantenha um bom relacionamento com a instituição. O aumento costuma vir após 6 meses de uso consciente.
          </p>
          <h2>Dicas para Usar o Cartão com Inteligência</h2>
          <p>
            Use o cartão para compras do dia a dia e sempre pague a fatura integralmente. Evite o crédito rotativo, que tem os juros mais altos do mercado. Mantenha a utilização do limite em até 30% para não prejudicar seu score de crédito.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center border border-blue-200">
          <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Simule suas compras parceladas</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Antes de parcelar, use nossas calculadoras para saber o valor real das parcelas com juros.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/parcelas">
                Calculadora de Parcelas <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/juros-compostos">
                Juros Compostos <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
