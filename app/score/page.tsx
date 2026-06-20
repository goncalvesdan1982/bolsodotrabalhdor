import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, AlertTriangle, ThumbsUp, Search, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Score de Crédito - Como Aumentar e Manter',
  description: 'Entenda como funciona o score de crédito, aprenda estratégias para aumentar sua pontuação e conquistar melhores condições financeiras.',
  keywords: ['score de crédito', 'aumentar score', 'score serasa', 'como aumentar score', 'pontuação crédito', 'cadastro positivo', 'score baixo'],
  openGraph: {
    title: 'Score de Crédito - Como Aumentar e Manter',
  description: 'Entenda o que influencia o score de crédito, como consultar sua pontuação, o papel do Cadastro Positivo e cuidados para melhorar seu histórico com segurança.',
    url: `${SITE_URL}/score`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Score de Crédito — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Score de Crédito - Como Aumentar e Manter',
    description: 'Entenda o que influencia o score, como consultar sua pontuação e cuidados para melhorar seu histórico.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/score` },
}

const factors = [
  { icon: ThumbsUp, title: 'Pagamentos em dia', desc: 'É o fator com maior peso. Um histórico consistente de contas pagas até o vencimento é a base de um score alto.' },
  { icon: Search, title: 'Consultas ao CPF', desc: 'Muitas solicitações de crédito em curto período podem reduzir a pontuação. Pesquise antes de pedir.' },
  { icon: TrendingUp, title: 'Cadastro Positivo', desc: 'Quando ativo, permite que seus pagamentos em dia sejam registrados. Ajuda quem tem bom histórico.' },
]

const steps = [
  { href: '/blog/o-que-realmente-influencia-score-credito', title: 'O que influencia o score', desc: 'Os fatores que mais pesam no cálculo da sua pontuação.' },
  { href: '/blog/como-consultar-score-gratuitamente', title: 'Consultar score gratuitamente', desc: 'Veja sua pontuação sem pagar nada nos canais oficiais.' },
  { href: '/blog/como-aumentar-score-de-credito', title: 'Como aumentar o score', desc: 'Estratégias práticas para subir a pontuação consistentemente.' },
  { href: '/blog/cadastro-positivo-vale-a-pena', title: 'Cadastro Positivo', desc: 'Entenda se ativar o cadastro positivo realmente ajuda.' },
  { href: '/blog/quanto-tempo-leva-para-score-aumentar', title: 'Tempo para aumentar', desc: 'Saiba o prazo real para ver resultados na sua pontuação.' },
]

const myths = [
  { title: 'Score alto não garante aprovação', desc: 'O score é um dos fatores analisados, mas cada banco avalia também renda, histórico de relacionamento e política interna.' },
  { title: 'Cadastro Positivo ajuda, mas tem limite', desc: 'Ele permite que pagamentos em dia sejam registrados, mas atrasos recentes pesam mais que um histórico longo de acertos.' },
  { title: 'Não existe prazo fixo para subir', desc: 'Cada caso é único. Com consistência é possível ver mudanças em 3 a 6 meses, mas grandes saltos levam de 12 a 24 meses.' },
]

const articleSlugs = [
  'como-aumentar-score-de-credito',
  'o-que-realmente-influencia-score-credito',
  'como-consultar-score-gratuitamente',
  'cadastro-positivo-vale-a-pena',
  'quanto-tempo-leva-para-score-aumentar',
  'score-400-aprova-cartao',
]

export default function ScorePage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Score de Crédito' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-purple-50 via-background to-violet-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-100/50">Score</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Score de Crédito</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Entenda os fatores que realmente influenciam sua pontuação, aprenda a consultar gratuitamente e veja como melhorar sem promessas milagrosas.
              </p>
            </div>
            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600 shrink-0">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">O que realmente pesa no score</h2>
            <p className="text-muted-foreground">Três fatores principais que os birôs de crédito consideram para calcular sua pontuação.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {factors.map((factor) => {
              const Icon = factor.icon
              return (
                <div key={factor.title} className="border border-border/60 rounded-xl p-5 bg-card">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Por onde começar</h2>
            <p className="text-muted-foreground">Uma trilha de leitura para entender e melhorar seu score de crédito.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Link key={step.href} href={step.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-purple-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <CardTitle className="text-sm leading-snug group-hover:text-purple-700 transition-colors">{step.title}</CardTitle>
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

        <section className="mb-12 border border-amber-200 bg-amber-50/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="text-xl font-bold text-foreground">Mitos comuns sobre score</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {myths.map((myth) => (
              <div key={myth.title} className="bg-white rounded-xl p-5 border border-amber-200/60 shadow-sm">
                <h3 className="text-sm font-bold text-foreground mb-2">{myth.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{myth.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-purple-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-purple-700 to-purple-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 w-fit">Score</span>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-purple-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-purple-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
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
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/calculadoras/comprometimento-renda" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-purple-100 text-purple-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-purple-700 transition-colors">Comprometimento de Renda</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Descubra como seu nível de endividamento afeta seu score</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/capacidade-endividamento" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-purple-100 text-purple-600 p-3 transition-transform group-hover:scale-105">
                  <Calculator className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-purple-700 transition-colors">Capacidade de Endividamento</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Veja o limite ideal de crédito para seu perfil</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <TrendingUp className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Monitore sua saúde financeira</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Use nossas calculadoras gratuitas para entender como suas finanças impactam seu score de crédito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/comprometimento-renda">Comprometimento de Renda <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-md" asChild>
              <Link href="/calculadoras/capacidade-endividamento">Capacidade de Endividamento <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
