import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, PieChart, PiggyBank, TrendingDown, Target, Calculator, BarChart3 } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

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

const routineCards = [
  { icon: BarChart3, title: 'Mapear sua renda e gastos', desc: 'O primeiro passo é saber exatamente quanto entra e quanto sai todo mês.' },
  { icon: PieChart, title: 'Separar gastos por categoria', desc: 'Divida as despesas entre essenciais, estilo de vida e metas financeiras.' },
  { icon: Target, title: 'Definir uma meta mensal', desc: 'Estabeleça um objetivo realista para o mês, como poupar R$ 100 ou reduzir uma despesa.' },
]

const articleSlugs = ['metodo-50-30-20-como-aplicar']

const useTogether = [
  { href: '/calculadoras/orcamento-familiar', title: 'Orçamento Familiar', desc: 'Monte seu orçamento completo com receitas e despesas' },
  { href: '/calculadoras/economia-mensal', title: 'Economia Mensal', desc: 'Descubra quanto economizar por mês para atingir suas metas' },
  { href: '/calculadoras/reserva-emergencia', title: 'Reserva de Emergência', desc: 'Calcule quanto guardar para imprevistos' },
  { href: '/calculadoras/meta-financeira', title: 'Meta Financeira', desc: 'Planeje seus objetivos financeiros com prazos realistas' },
]

export default function OrganizacaoFinanceiraPage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Organização Financeira' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-teal-50 via-background to-cyan-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-teal-200 text-teal-700 bg-teal-100/50">Organização</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Organização Financeira</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Aprenda a organizar suas finanças com métodos práticos. Calculadora de orçamento familiar, reserva de emergência e economia mensal.
              </p>
            </div>
            <div className="rounded-2xl bg-teal-100 p-4 text-teal-600 shrink-0">
              <PieChart className="h-8 w-8" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Monte sua rotina financeira</h2>
            <p className="text-muted-foreground">Três passos simples para começar a organizar suas contas hoje.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {routineCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="border border-border/60 rounded-xl p-5 bg-card">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center mb-3">
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigo principal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group md:col-span-2 flex flex-col h-full border-2 border-teal-200 hover:border-teal-400 hover:shadow-lg transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1.5 bg-gradient-to-r from-teal-700 to-teal-500" />
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-700 w-fit">Organização</span>
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-teal-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-teal-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                    aria-label={`Ler artigo: ${artigo.title}`}
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
            <Link href="/blog/categoria/organizacao-financeira" className="group flex flex-col items-center justify-center h-full border border-dashed border-border/60 hover:border-teal-300 hover:shadow-sm transition-all rounded-xl p-6 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <span className="text-3xl mb-2 text-teal-600">+</span>
              <span className="text-sm font-semibold text-teal-700 group-hover:underline">Ver mais artigos</span>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras relacionadas</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useTogether.map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="rounded-xl bg-teal-100 text-teal-600 p-3 transition-transform group-hover:scale-105">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-teal-700 transition-colors">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                  Usar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12 border border-teal-200 bg-teal-50/40 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-foreground mb-5">Use junto com</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-teal-200/60">
              <PiggyBank className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">Reserva de emergência</h3>
                <p className="text-xs text-muted-foreground mt-1">Monte uma reserva antes de investir. Use a calculadora para saber quanto guardar.</p>
                <Link href="/calculadoras/reserva-emergencia" className="text-xs font-semibold text-teal-700 hover:underline inline-flex items-center gap-1 mt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded">
                  Calcular reserva <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-teal-200/60">
              <Target className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground">Meta financeira</h3>
                <p className="text-xs text-muted-foreground mt-1">Defina prazos e valores para realizar seus planos com a calculadora de metas.</p>
                <Link href="/calculadoras/meta-financeira" className="text-xs font-semibold text-teal-700 hover:underline inline-flex items-center gap-1 mt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded">
                  Planejar meta <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <Calculator className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Organize suas finanças agora</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Use nossas calculadoras gratuitas para criar um orçamento e planejar sua reserva de emergência.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/orcamento-familiar">Orçamento Familiar <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/reserva-emergencia">Reserva de Emergência <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
