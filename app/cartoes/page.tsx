import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CreditCard, FileText, AlertTriangle, TrendingUp, Percent, Calculator } from 'lucide-react'
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

const beforeCards = [
  { icon: FileText, title: 'Entenda a fatura', desc: 'Saiba ler cada item da fatura, identificar cobranças indevidas e evitar juros por atraso.' },
  { icon: Percent, title: 'Compare custos', desc: 'Anuidade, taxas de saque, juros do rotativo e do parcelamento — compare antes de escolher.' },
  { icon: AlertTriangle, title: 'Evite o rotativo', desc: 'Os juros do crédito rotativo estão entre os mais altos do mercado. Saiba como não cair nessa armadilha.' },
]

const articleSlugs = [
  'melhores-cartoes-score-baixo',
  'cartao-sem-anuidade-vale-a-pena',
  'como-evitar-juros-rotativo',
  'como-aumentar-limite-cartao-credito',
  'fatura-parcelada-compensa',
  'o-que-fazer-quando-limite-cartao-acaba',
]

const situacoes = [
  { href: '/blog/melhores-cartoes-score-baixo', label: 'Score baixo: qual cartão escolher?' },
  { href: '/blog/o-que-fazer-quando-limite-cartao-acaba', label: 'Limite do cartão acabou, e agora?' },
  { href: '/blog/fatura-parcelada-compensa', label: 'Compensa parcelar a fatura?' },
  { href: '/blog/como-aumentar-limite-cartao-credito', label: 'Como aumentar o limite do cartão' },
  { href: '/blog/cartao-sem-anuidade-vale-a-pena', label: 'Cartão sem anuidade vale a pena?' },
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

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Antes de pedir ou usar um cartão</h2>
            <p className="text-muted-foreground">Três pontos essenciais para usar o cartão com segurança e evitar dívidas.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {beforeCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="border border-border/60 rounded-xl p-5 bg-card">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Cartões de Crédito</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 w-fit">Cartões</span>
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

        <section className="mb-12 border border-border/60 rounded-2xl p-6 md:p-8 bg-card">
          <h2 className="text-xl font-bold text-foreground mb-5">Situações comuns com cartão</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {situacoes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-100/50 rounded-xl border border-blue-100 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-blue-700 transition-colors">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras relacionadas</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/calculadoras/parcelas" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-blue-100 text-blue-600 p-3 transition-transform group-hover:scale-105">
                  <Percent className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-blue-700 transition-colors">Calculadora de Parcelas</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Veja o valor real das parcelas com juros</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/juros-compostos" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-blue-100 text-blue-600 p-3 transition-transform group-hover:scale-105">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-blue-700 transition-colors">Juros Compostos</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Entenda o efeito dos juros no rotativo</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/comprometimento-renda" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-blue-100 text-blue-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-blue-700 transition-colors">Comprometimento de Renda</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Descubra o limite ideal para seu cartão</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

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
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-md" asChild>
              <Link href="/calculadoras/juros-compostos">Juros Compostos <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
