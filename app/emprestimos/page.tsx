import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Banknote, Building, Repeat, Calculator } from 'lucide-react'
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

const calculators = [
  { slug: 'emprestimo', icon: Banknote, title: 'Simulação de Empréstimo', desc: 'Calcule parcelas, juros totais e CET para qualquer modalidade de empréstimo.' },
  { slug: 'financiamento', icon: Building, title: 'Simulação de Financiamento', desc: 'Simule financiamentos imobiliários e de veículos com taxa e prazo flexíveis.' },
  { slug: 'troca-dividas', icon: Repeat, title: 'Troca de Dívidas', desc: 'Veja se vale a pena trocar um empréstimo caro por outro com juros mais baixos.' },
]

const steps = [
  { href: '/blog/emprestimo-pessoal-ou-consignado', title: 'Pessoal ou consignado?', desc: 'Entenda as diferenças entre as duas modalidades e qual se encaixa no seu perfil.' },
  { href: '/blog/como-comparar-emprestimos-corretamente', title: 'Como comparar empréstimos', desc: 'Aprenda a analisar taxas, CET e prazos antes de contratar.' },
  { href: '/blog/o-que-e-cet-e-por-que-importa', title: 'O que é CET?', desc: 'O indicador mais importante na hora de contratar um empréstimo.' },
  { href: '/blog/como-calcular-custo-real-emprestimo', title: 'Custo real do empréstimo', desc: 'Veja quanto você vai pagar de fato ao final do contrato.' },
  { href: '/blog/quando-nao-vale-a-pena-fazer-emprestimo', title: 'Quando NÃO fazer empréstimo', desc: 'Situações em que o crédito pode trazer mais riscos que benefícios.' },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {calculators.map((calc) => {
            const Icon = calc.icon
            return (
              <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-green-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-green-700 transition-colors">{calc.title}</CardTitle>
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
            <p className="text-muted-foreground">Uma trilha simples para tomar a melhor decisão sobre empréstimos.</p>
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Empréstimos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-green-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-green-700 to-green-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">Empréstimos</span>
                  </div>
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

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Modalidades de Empréstimo</h2>
          <p>
            Existem diversas modalidades de empréstimo no mercado brasileiro. O <strong>empréstimo consignado</strong> tem as menores taxas (1,5% a 3% ao mês) e é descontado diretamente da folha de pagamento. O <strong>empréstimo pessoal</strong> não exige vínculo empregatício específico, mas tem taxas mais altas (3% a 10% ao mês).
          </p>
          <p>
            Outras opções incluem o <strong>financiamento</strong> (para imóveis e veículos), o <strong>crédito rotativo</strong> (o mais caro, evite) e a <strong>portabilidade de crédito</strong> (transferir o saldo devedor para outro banco com juros menores).
          </p>
          <h2>Entendendo o CET</h2>
          <p>
            O Custo Efetivo Total (CET) é o indicador mais importante na hora de contratar um empréstimo. Ele inclui não apenas os juros, mas também taxas, seguros e outros encargos. Use a calculadora para comparar o CET de diferentes propostas.
          </p>
          <h2>Dicas para Contratar um Empréstimo</h2>
          <p>
            Antes de contratar, compare pelo menos 3 propostas de instituições diferentes. Verifique o CET, o valor total a pagar e se as parcelas cabem no seu orçamento. Nunca comprometa mais de 30% da sua renda com parcelas de empréstimos.
          </p>
        </div>

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
