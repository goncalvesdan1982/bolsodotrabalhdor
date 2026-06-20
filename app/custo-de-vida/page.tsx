import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Home, PiggyBank, TrendingDown, Target, Calculator } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Custo de Vida - Quanto Custa Morar no Brasil',
  description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras. Planejamento financeiro realista.',
  keywords: ['custo de vida', 'morar sozinho', 'custo morar no brasil', 'quanto custa morar sozinho', 'aluguel', 'planejamento financeiro', 'custo de vida brasil'],
  openGraph: {
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras.',
    url: `${SITE_URL}/custo-de-vida`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Custo de Vida — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/custo-de-vida` },
}

const calculators = [
  { slug: 'orcamento-familiar', icon: Home, title: 'Orçamento Familiar', desc: 'Simule todos os gastos mensais e veja se sua renda é suficiente para o custo de vida desejado.' },
  { slug: 'reserva-emergencia', icon: PiggyBank, title: 'Reserva de Emergência', desc: 'Calcule quanto guardar para emergências com base no seu custo de vida mensal.' },
  { slug: 'economia-mensal', icon: TrendingDown, title: 'Economia Mensal', desc: 'Descubra quanto economizar para atingir metas como comprar um imóvel ou carro.' },
  { slug: 'meta-financeira', icon: Target, title: 'Meta Financeira', desc: 'Planeje seus objetivos financeiros com base no seu custo de vida real.' },
]

const steps = [
  { href: '/blog/quanto-custa-morar-sozinho', title: 'Quanto custa morar sozinho', desc: 'Guia completo com todos os gastos que você terá ao morar só.' },
  { href: '/calculadoras/orcamento-familiar', title: 'Simule seu orçamento', desc: 'Use a calculadora para ver se sua renda cobre o custo de vida desejado.' },
  { href: '/calculadoras/reserva-emergencia', title: 'Reserva de emergência', desc: 'Baseie sua reserva no seu custo de vida real.' },
  { href: '/calculadoras/economia-mensal', title: 'Metas de economia', desc: 'Planeje quanto economizar para seus objetivos.' },
  { href: '/blog/metodo-50-30-20-como-aplicar', title: 'Método 50-30-20', desc: 'Aprenda a organizar seu orçamento com base no seu custo de vida.' },
]

const articleSlugs = [
  'quanto-custa-morar-sozinho',
]

export default function CustoDeVidaPage() {
  const artigos = articleSlugs.map(slug => getPostBySlug(slug)).filter(Boolean) as Post[]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Custo de Vida' }]} />

        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-amber-50 via-background to-orange-50/50 p-6 shadow-sm md:p-8 mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-100/50">Custo de Vida</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">Custo de Vida</h1>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Descubra quanto custa morar sozinho, ter um carro, criar um filho e viver nas principais cidades brasileiras. Planejamento financeiro realista.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-100 p-4 text-amber-600 shrink-0">
              <Home className="h-8 w-8" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {calculators.map((calc) => {
            const Icon = calc.icon
            return (
              <Link key={calc.slug} href={`/calculadoras/${calc.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                <Card className="h-full border-border/60 transition-all group-hover:shadow-md group-hover:border-amber-300 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-base group-hover:text-amber-700 transition-colors">{calc.title}</CardTitle>
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
            <p className="text-muted-foreground">Entenda seu custo de vida com esta trilha de leitura e ferramentas.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Link key={`${step.href}-${i}`} href={step.href} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
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
          <h2 className="text-2xl font-bold text-foreground mb-6">Artigos sobre Custo de Vida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.map((artigo) => (
              <article key={artigo.slug} className="group flex flex-col h-full border border-border/60 hover:border-amber-300 hover:shadow-md transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1 bg-gradient-to-r from-amber-700 to-amber-500" />
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700">Custo de Vida</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{artigo.description}</p>
                  )}
                  <Link
                    href={`/blog/${artigo.slug}`}
                    className="mt-auto text-sm font-semibold text-amber-700 hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                    aria-label={`Ler artigo: ${artigo.title}`}
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
            <Link href="/blog/categoria/custo-de-vida" className="group flex flex-col items-center justify-center h-full border border-dashed border-border/60 hover:border-amber-300 hover:shadow-sm transition-all rounded-xl p-6 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <span className="text-3xl mb-2 text-amber-600">+</span>
              <span className="text-sm font-semibold text-amber-700 group-hover:underline">Ver todos os artigos de custo de vida</span>
            </Link>
          </div>
        </section>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Entendendo o Custo de Vida no Brasil</h2>
          <p>
            O custo de vida no Brasil varia significativamente entre regiões e cidades. Morar em São Paulo ou Rio de Janeiro é consideravelmente mais caro que em cidades de médio porte do interior. Além disso, o estilo de vida escolhido impacta diretamente no orçamento mensal.
          </p>
          <h2>Principais Gastos Mensais</h2>
          <p>
            Os principais gastos de uma pessoa que mora sozinha incluem: aluguel (R$ 800 a R$ 2.500), condomínio (R$ 200 a R$ 600), contas de água, luz e internet (R$ 250 a R$ 500), supermercado (R$ 400 a R$ 800) e plano de saúde (R$ 200 a R$ 500).
          </p>
          <h2>Planejamento para Morar Sozinho</h2>
          <p>
            Antes de morar sozinho, é importante ter uma reserva para custos iniciais como caução do aluguel (geralmente 3 aluguéis), mobília básica e eletrodomésticos. Uma regra segura é que o aluguel não ultrapasse 30% da sua renda líquida.
          </p>
          <h2>Diferenças por Cidade</h2>
          <p>
            O custo de vida em capitais como São Paulo e Rio de Janeiro pode ser até 50% maior que em cidades de médio porte. Cidades como Curitiba, Belo Horizonte e Florianópolis oferecem um bom equilíbrio entre qualidade de vida e custo.
          </p>
        </div>

        <section className="rounded-3xl border bg-gradient-to-br from-primary to-primary/90 p-8 md:p-12 text-center text-primary-foreground shadow-lg">
          <Calculator className="w-10 h-10 mx-auto mb-4 text-secondary" />
          <h2 className="text-2xl font-bold mb-3">Planeje seu orçamento mensal</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Use nossas calculadoras gratuitas para simular seu custo de vida e planejar suas finanças com realismo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="shadow-md" asChild>
              <Link href="/calculadoras/orcamento-familiar">Orçamento Familiar <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/calculadoras/economia-mensal">Economia Mensal <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
