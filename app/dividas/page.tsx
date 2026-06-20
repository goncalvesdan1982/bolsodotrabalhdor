import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, AlertTriangle, ClipboardList, TrendingDown, CreditCard, Calculator } from 'lucide-react'
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

const planSteps = [
  { step: '1', title: 'Listar todas as dívidas', desc: 'Anote credor, valor, taxa de juros e tempo de atraso. Sem essa visão completa, não dá para planejar.', href: '/blog/como-sair-das-dividas-guia-completo' },
  { step: '2', title: 'Separar urgentes e caras', desc: 'Dívidas com juros altos (rotativo, cheque especial) e contas essenciais (água, luz, aluguel) vêm primeiro.', href: '/blog/qual-divida-devo-pagar-primeiro' },
  { step: '3', title: 'Negociar com credores', desc: 'Peça desconto à vista ou parcelamento que caiba no orçamento. A maioria dos bancos prefere receber menos do que não receber.', href: '/blog/como-negociar-dividas-diretamente-com-banco' },
  { step: '4', title: 'Acompanhar o orçamento', desc: 'Depois de negociar, monitore os gastos para não criar novas dívidas. Um orçamento simples já ajuda.', href: '/calculadoras/orcamento-familiar' },
]

const articleSlugs = [
  'como-sair-das-dividas-guia-completo',
  'como-negociar-dividas-diretamente-com-banco',
  'qual-divida-devo-pagar-primeiro',
  'vale-a-pena-trocar-divida-cartao-por-emprestimo',
  'o-que-acontece-se-parar-de-pagar-cartao',
  'como-montar-plano-sair-das-dividas',
]

const cartaoLinks = [
  { href: '/blog/como-evitar-juros-rotativo', label: 'Como evitar os juros do rotativo' },
  { href: '/blog/fatura-parcelada-compensa', label: 'Fatura parcelada compensa?' },
  { href: '/blog/o-que-fazer-quando-limite-cartao-acaba', label: 'O que fazer quando o limite acaba' },
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

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Plano de ação em 4 etapas</h2>
            <p className="text-muted-foreground">Um passo a passo direto para organizar suas dívidas e começar a resolver.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {planSteps.map((item) => (
              <Link key={item.step} href={item.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-base font-bold shrink-0">{item.step}</span>
                      <CardTitle className="text-base leading-snug group-hover:text-red-700 transition-colors">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras para ajudar no plano</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <Link href="/calculadoras/quitacao-dividas" className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
              <Card className="border-border/60 h-full transition-all group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-0.5">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base group-hover:text-red-700 transition-colors">Quitação de Dívidas</CardTitle>
                  <CardDescription className="text-sm">Simule quanto tempo leva para quitar</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-primary text-sm font-medium">
                    Calcular <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculadoras/comprometimento-renda" className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
              <Card className="border-border/60 h-full transition-all group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-0.5">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base group-hover:text-red-700 transition-colors">Comprometimento de Renda</CardTitle>
                  <CardDescription className="text-sm">Veja quanto da sua renda está comprometido</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-primary text-sm font-medium">
                    Calcular <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/calculadoras/troca-dividas" className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
              <Card className="border-border/60 h-full transition-all group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-0.5">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base group-hover:text-red-700 transition-colors">Troca de Dívidas</CardTitle>
                  <CardDescription className="text-sm">Veja se vale trocar uma dívida cara por outra</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-primary text-sm font-medium">
                    Comparar <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Dívidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-red-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-red-700 to-red-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 w-fit">Dívidas</span>
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

        <section className="mb-12 border border-border/60 rounded-2xl p-6 md:p-8 bg-card">
          <div className="flex items-center gap-3 mb-5">
            <CreditCard className="w-6 h-6 text-red-600 shrink-0" />
            <h2 className="text-xl font-bold text-foreground">Se você está com dívida no cartão</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">O cartão de crédito é a principal porta de entrada do endividamento. Veja artigos específicos para lidar com essa situação.</p>
          <div className="grid gap-3">
            {cartaoLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between p-4 bg-red-50/50 hover:bg-red-100/50 rounded-xl border border-red-100 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-red-700 transition-colors">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            ))}
          </div>
        </section>

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
