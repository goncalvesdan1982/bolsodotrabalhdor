import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Banknote, AlertTriangle, Search, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Empréstimos - Comparar e Escolher o Melhor',
  description: 'Compare modalidades de empréstimo, calcule juros, entenda o CET e escolha a melhor opção para seu bolso. Calculadoras gratuitas.',
  keywords: ['empréstimo', 'emprestimo pessoal', 'emprestimo consignado', 'comparar emprestimo', 'taxas emprestimo', 'CET', 'financiamento'],
  openGraph: {
    title: 'Empréstimos - Comparar e Escolher o Melhor',
    description: 'Compare modalidades de empréstimo, calcule juros, entenda o CET e escolha a melhor opção para seu bolso.',
    url: `${SITE_URL}/emprestimos`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Empréstimos — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empréstimos - Comparar e Escolher o Melhor',
    description: 'Compare modalidades de empréstimo, calcule juros, entenda o CET e escolha a melhor opção.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/emprestimos` },
}

const warningSigns = [
  { icon: AlertTriangle, title: 'Parcela cabe, mas custo total é alto', desc: 'Uma parcela baixa pode esconder um prazo longo que dobra o valor total pago no final.' },
  { icon: Search, title: 'Taxa menor não significa menor custo', desc: 'Sempre compare o CET (Custo Efetivo Total), que inclui juros, taxas, seguros e impostos.' },
  { icon: AlertTriangle, title: 'Cuidado com taxa antecipada', desc: 'Instituições sérias não cobram taxa para liberar crédito. Desconfie de qualquer cobrança antecipada.' },
]

const steps = [
  { href: '/blog/o-que-e-cet-e-por-que-importa', title: 'Entender o CET', desc: 'O indicador mais importante na hora de contratar um empréstimo.' },
  { href: '/blog/como-comparar-emprestimos-corretamente', title: 'Comparar empréstimos', desc: 'Aprenda a analisar taxas, CET e prazos antes de contratar.' },
  { href: '/blog/como-calcular-custo-real-emprestimo', title: 'Calcular custo real', desc: 'Veja quanto você vai pagar de fato ao final do contrato.' },
  { href: '/blog/emprestimo-pessoal-ou-consignado', title: 'Escolher modalidade', desc: 'Pessoal ou consignado? Entenda as diferenças e qual se encaixa no seu perfil.' },
  { href: '/blog/quando-nao-vale-a-pena-fazer-emprestimo', title: 'Avaliar se vale a pena', desc: 'Situações em que o crédito pode trazer mais riscos que benefícios.' },
]

const articleSlugs = [
  'emprestimo-pessoal-ou-consignado',
  'como-comparar-emprestimos-corretamente',
  'o-que-e-cet-e-por-que-importa',
  'como-calcular-custo-real-emprestimo',
  'emprestimo-consignado-vale-a-pena',
  'quando-nao-vale-a-pena-fazer-emprestimo',
]

export default function EmprestimosPage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Empréstimos' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-green-50 via-background to-emerald-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-green-200 text-green-700 bg-green-100/50">Empréstimos</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Empréstimos</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Compare modalidades de empréstimo, calcule juros, entenda o CET e escolha a melhor opção para seu bolso. Calculadoras gratuitas.
              </p>
            </div>
            <div className="rounded-2xl bg-green-100 p-4 text-green-600 shrink-0">
              <Banknote className="h-8 w-8" />
            </div>
          </div>
        </section>

        <section className="mb-12 border border-green-200 bg-green-50/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <Search className="w-6 h-6 text-green-700 shrink-0" />
            <h2 className="text-xl font-bold text-foreground">Compare antes de contratar</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
            Antes de contratar qualquer empréstimo, siga esta ordem de leitura para tomar uma decisão informada. Pular etapas pode custar caro.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Link key={step.href} href={step.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-green-200/60 bg-white transition-all group-hover:shadow-md group-hover:border-green-400 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <CardTitle className="text-sm leading-snug group-hover:text-green-700 transition-colors">{step.title}</CardTitle>
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

        <section className="mb-12 border border-red-200 bg-red-50/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
            <h2 className="text-xl font-bold text-foreground">Sinais de atenção</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {warningSigns.map((sign) => {
              const Icon = sign.icon
              return (
                <div key={sign.title} className="bg-white rounded-xl p-5 border border-red-200/60 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{sign.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{sign.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Empréstimos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-green-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-green-700 to-green-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 w-fit">Empréstimos</span>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-green-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-green-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                    aria-label={`Ler artigo: ${artigo.title}`}
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras relacionadas</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/calculadoras/emprestimo" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-green-100 text-green-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-green-700 transition-colors">Simulação de Empréstimo</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Calcule parcelas, juros totais e CET</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                Simular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/financiamento" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-green-100 text-green-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-green-700 transition-colors">Simulação de Financiamento</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Simule financiamentos imobiliários e de veículos</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                Simular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/troca-dividas" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-green-100 text-green-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-green-700 transition-colors">Troca de Dívidas</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Veja se vale trocar uma dívida cara por outra</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <Calculator className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Simule seu empréstimo agora</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Antes de contratar, use nossas calculadoras gratuitas para simular parcelas e comparar diferentes cenários.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/emprestimo">Calculadora de Empréstimo <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/financiamento">Calculadora de Financiamento <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
