import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CreditCard, Percent, TrendingUp, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

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

const calculators = [
  { slug: 'parcelas', icon: Percent, title: 'Calculadora de Parcelas', desc: 'Veja o valor real das parcelas com juros e entenda quanto você pagará no final.' },
  { slug: 'juros-compostos', icon: TrendingUp, title: 'Juros Compostos', desc: 'Entenda o efeito dos juros compostos no rotativo do cartão e veja como evitar dívidas.' },
  { slug: 'comprometimento-renda', icon: Calculator, title: 'Comprometimento de Renda', desc: 'Descubra se o limite do seu cartão está compatível com sua renda mensal.' },
]

const steps = [
  { href: '/blog/cartao-sem-anuidade-vale-a-pena', title: 'Cartão sem anuidade vale a pena?', desc: 'Entenda se vale pagar taxa de anuidade ou se os cartões gratuitos atendem melhor.' },
  { href: '/blog/melhores-cartoes-score-baixo', title: 'Melhores cartões para score baixo', desc: 'Opções reais de cartão para quem está negativado ou com score baixo.' },
  { href: '/blog/como-evitar-juros-rotativo', title: 'Como evitar juros rotativo', desc: 'A armadilha mais cara do cartão e como escapar dela.' },
  { href: '/blog/fatura-parcelada-compensa', title: 'Fatura parcelada compensa?', desc: 'Quando vale a pena parcelar a fatura e quando é melhor evitar.' },
  { href: '/blog/como-aumentar-limite-cartao-credito', title: 'Como aumentar o limite', desc: 'Estratégias práticas para conquistar mais limite no cartão.' },
]

const articleSlugs = [
  'melhores-cartoes-score-baixo',
  'cartao-sem-anuidade-vale-a-pena',
  'como-evitar-juros-rotativo',
  'como-aumentar-limite-cartao-credito',
  'fatura-parcelada-compensa',
  'o-que-fazer-quando-limite-cartao-acaba',
]

export default function CartoesPage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Cartões de Crédito' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-blue-50 via-background to-indigo-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-100/50">Cartões</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Cartões de Crédito</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Tudo sobre cartões de crédito: melhores cartões sem anuidade, como aumentar limite, cartão para score baixo e dicas para usar com inteligência.
              </p>
            </div>
            <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 shrink-0">
              <CreditCard className="h-8 w-8" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {calculators.map((calc) => {
            const Icon = calc.icon
            return (
              <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-blue-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-blue-700 transition-colors">{calc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{calc.desc}</CardDescription>
                    <div className="mt-3 flex items-center text-primary text-sm font-medium">
                      Calcular <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Por onde começar</h2>
            <p className="text-muted-foreground">Uma trilha simples para ler os guias na ordem certa.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Link key={step.href} href={step.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-primary/30 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <CardTitle className="text-sm leading-snug group-hover:text-primary transition-colors">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs">{step.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Cartões de Crédito</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">Cartões</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-blue-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                    aria-label={`Ler artigo: ${artigo.title}`}
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

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

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <Calculator className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Simule antes de parcelar</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Antes de parcelar qualquer compra, use nossas calculadoras gratuitas para saber o valor real das parcelas com juros.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/parcelas">Calculadora de Parcelas <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/juros-compostos">Juros Compostos <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
