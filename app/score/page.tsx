import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, ShieldCheck, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Score de Crédito - Como Aumentar e Manter',
  description: 'Entenda como funciona o score de crédito, aprenda estratégias para aumentar sua pontuação e conquistar melhores condições financeiras.',
  keywords: ['score de crédito', 'aumentar score', 'score serasa', 'como aumentar score', 'pontuação crédito', 'cadastro positivo', 'score baixo'],
  openGraph: {
    title: 'Score de Crédito - Como Aumentar e Manter',
    description: 'Entenda como funciona o score de crédito, aprenda estratégias para aumentar sua pontuação e conquistar melhores condições financeiras.',
    url: `${SITE_URL}/score`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Score de Crédito — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Score de Crédito - Como Aumentar e Manter',
    description: 'Entenda como funciona o score de crédito e aprenda estratégias para aumentar sua pontuação.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/score` },
}

const calculators = [
  { slug: 'comprometimento-renda', icon: Calculator, title: 'Comprometimento de Renda', desc: 'Descubra como seu nível de endividamento afeta seu score de crédito.' },
  { slug: 'capacidade-endividamento', icon: ShieldCheck, title: 'Capacidade de Endividamento', desc: 'Veja qual o limite ideal de crédito para seu perfil financeiro.' },
]

const steps = [
  { href: '/blog/o-que-realmente-influencia-score-credito', title: 'O que influencia o score', desc: 'Entenda os fatores que afetam sua pontuação de crédito.' },
  { href: '/blog/como-consultar-score-gratuitamente', title: 'Consultar score gratuitamente', desc: 'Veja sua pontuação sem pagar nada nos canais oficiais.' },
  { href: '/blog/como-aumentar-score-de-credito', title: 'Como aumentar o score', desc: 'Estratégias práticas para subir a pontuação de crédito.' },
  { href: '/blog/cadastro-positivo-vale-a-pena', title: 'Cadastro Positivo', desc: 'Entenda como o cadastro positivo pode ajudar seu score.' },
  { href: '/blog/quanto-tempo-leva-para-score-aumentar', title: 'Tempo para aumentar', desc: 'Saiba o prazo real para ver resultados na sua pontuação.' },
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
                Entenda como funciona o score de crédito, aprenda estratégias para aumentar sua pontuação e conquistar melhores condições financeiras.
              </p>
            </div>
            <div className="rounded-2xl bg-purple-100 p-4 text-purple-600 shrink-0">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {calculators.map((calc) => {
            const Icon = calc.icon
            return (
              <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-purple-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-purple-700 transition-colors">{calc.title}</CardTitle>
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
            <p className="text-muted-foreground">Uma trilha simples para entender e melhorar seu score de crédito.</p>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Score</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-blue-700 to-blue-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">Score</span>
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
          <h2>O que é Score de Crédito?</h2>
          <p>
            O score de crédito é uma pontuação que varia de 0 a 1000 e indica para as instituições financeiras qual a probabilidade de você pagar suas contas em dia. Quanto maior o score, mais fácil é conseguir crédito, cartões e financiamentos com taxas melhores.
          </p>
          <p>
            No Brasil, as principais empresas que calculam o score são <strong>Serasa</strong>, <strong>Boa Vista</strong> e <strong>SPC Brasil</strong>. Cada uma tem sua metodologia, mas os fatores que influenciam são semelhantes.
          </p>
          <h2>Fatores que Afetam o Score</h2>
          <ul>
            <li><strong>Histórico de pagamentos:</strong> pagar contas em dia é o fator mais importante</li>
            <li><strong>Cadastro Positivo:</strong> permite que as empresas vejam seu bom histórico</li>
            <li><strong>Utilização do crédito:</strong> usar até 30% do limite do cartão é ideal</li>
            <li><strong>Dívidas abertas:</strong> quanto mais dívidas, menor o score</li>
            <li><strong>Tempo de histórico:</strong> quanto mais tempo com bom histórico, melhor</li>
          </ul>
          <h2>Como Ativar o Cadastro Positivo</h2>
          <p>
            O Cadastro Positivo é gratuito e pode ser ativado pelo site da Serasa, Boa Vista ou diretamente no Banco Central. Com ele ativo, seu histórico de pagamentos em dia é registrado e seu score tende a aumentar mais rapidamente.
          </p>
        </div>

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
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/capacidade-endividamento">Capacidade de Endividamento <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
