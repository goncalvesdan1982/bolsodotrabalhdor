import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, AlertTriangle, TrendingDown, FileText, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Dívidas - Como Sair das Dívidas e Limpar o Nome',
  description: 'Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro. Dicas práticas e calculadoras gratuitas.',
  keywords: ['sair das dívidas', 'negociar dívidas', 'limpar nome', 'como sair das dívidas', 'renegociar dívidas', 'dividas', 'nome negativado'],
  openGraph: {
    title: 'Dívidas - Como Sair das Dívidas e Limpar o Nome',
    description: 'Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro.',
    url: `${SITE_URL}/dividas`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Dívidas — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dívidas - Como Sair das Dívidas e Limpar o Nome',
    description: 'Guia completo para sair das dívidas, negociar credores e recuperar o controle financeiro.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/dividas` },
}

const calculators = [
  { slug: 'quitacao-dividas', icon: TrendingDown, title: 'Quitação de Dívidas', desc: 'Simule quanto tempo leva para quitar dívidas com diferentes estratégias de pagamento.' },
  { slug: 'comprometimento-renda', icon: Calculator, title: 'Comprometimento de Renda', desc: 'Descubra quanto da sua renda está comprometido com dívidas e se você precisa renegociar.' },
  { slug: 'troca-dividas', icon: FileText, title: 'Troca de Dívidas', desc: 'Compare cenários e veja se vale a pena trocar uma dívida cara por outra com juros menores.' },
]

const steps = [
  { href: '/blog/como-sair-das-dividas-guia-completo', title: 'Guia completo para sair das dívidas', desc: 'O passo a passo essencial para recuperar o controle financeiro.' },
  { href: '/blog/qual-divida-devo-pagar-primeiro', title: 'Qual dívida pagar primeiro?', desc: 'Entenda os métodos avalanche e bola de neve para priorizar suas dívidas.' },
  { href: '/blog/como-negociar-dividas-diretamente-com-banco', title: 'Negociar dívidas com o banco', desc: 'Estratégias práticas para conseguir descontos e condições melhores.' },
  { href: '/blog/vale-a-pena-trocar-divida-cartao-por-emprestimo', title: 'Trocar dívida por empréstimo?', desc: 'Saiba quando vale a pena e quando é melhor evitar essa troca.' },
  { href: '/blog/o-que-acontece-se-parar-de-pagar-cartao', title: 'E se eu parar de pagar o cartão?', desc: 'Entenda as consequências e o que fazer antes de tomar essa decisão.' },
]

const articleSlugs = [
  'como-sair-das-dividas-guia-completo',
  'como-negociar-dividas-diretamente-com-banco',
  'qual-divida-devo-pagar-primeiro',
  'vale-a-pena-trocar-divida-cartao-por-emprestimo',
  'o-que-acontece-se-parar-de-pagar-cartao',
  'como-montar-plano-sair-das-dividas',
]

export default function DividasPage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Dívidas' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-red-50 via-background to-orange-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-red-200 text-red-700 bg-red-100/50">Dívidas</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Dívidas</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Guia completo para sair das dívidas, negociar credores, limpar o nome e recuperar o controle financeiro. Dicas práticas e calculadoras gratuitas.
              </p>
            </div>
            <div className="rounded-2xl bg-red-100 p-4 text-red-600 shrink-0">
              <AlertTriangle className="h-8 w-8" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {calculators.map((calc) => {
            const Icon = calc.icon
            return (
              <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-red-700 transition-colors">{calc.title}</CardTitle>
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
            <p className="text-muted-foreground">Uma trilha simples para organizar suas finanças e sair das dívidas.</p>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Dívidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-red-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-red-700 to-red-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700">Dívidas</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-red-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-red-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
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
          <h2>Entendendo as Dívidas</h2>
          <p>
            As dívidas são uma realidade para milhões de brasileiros. Seja por emergências médicas, desemprego, falta de planejamento ou simplesmente imprevistos da vida, estar endividado não é o fim do mundo. O importante é ter um plano para resolver a situação.
          </p>
          <p>
            O primeiro passo é entender que tipo de dívida você tem. Dívidas de cartão de crédito rotativo e cheque especial são as mais caras, com juros que podem ultrapassar 400% ao ano. Já dívidas de financiamento imobiliário ou consignado têm juros muito mais baixos e podem ser administradas com mais tranquilidade.
          </p>
          <h2>Estratégias para Sair das Dívidas</h2>
          <p>
            Existem diferentes estratégias para sair das dívidas. A mais recomendada é listar todas as dívidas, priorizar as mais caras, negociar com os credores e criar um orçamento realista. Nossas calculadoras foram feitas para ajudar em cada etapa desse processo.
          </p>
          <h2>Negociação com Credores</h2>
          <p>
            A maioria dos bancos e empresas prefere receber um valor menor do que não receber nada. Por isso, negociar é sempre uma opção válida. Plataformas como Serasa Limpa Nome e Acordo OK oferecem descontos significativos para pagamento à vista ou parcelado.
          </p>
        </div>

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <Calculator className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Calcule seu plano de saída das dívidas</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Use nossas calculadoras gratuitas para simular cenários e encontrar a melhor estratégia para seu caso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/quitacao-dividas">Calculadora de Quitação <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/comprometimento-renda">Comprometimento de Renda <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
