import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Home, PiggyBank, TrendingDown, Target, Calculator, HelpCircle } from 'lucide-react'
import { getPostBySlug } from '@/lib/posts'
import type { Post } from '@/lib/posts'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Custo de Vida - Quanto Custa Morar no Brasil',
  description: 'Guias para planejar custo de vida, morar sozinho, estimar gastos mensais e avaliar se o orçamento comporta novas despesas.',
  keywords: ['custo de vida', 'morar sozinho', 'custo morar no brasil', 'quanto custa morar sozinho', 'aluguel', 'planejamento financeiro', 'custo de vida brasil'],
  openGraph: {
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Guias para planejar custo de vida, morar sozinho, estimar gastos mensais e avaliar se o orçamento comporta novas despesas.',
    url: `${SITE_URL}/custo-de-vida`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Custo de Vida — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custo de Vida - Quanto Custa Morar no Brasil',
    description: 'Guias para planejar custo de vida e estimar gastos mensais para morar sozinho.',
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: { canonical: `${SITE_URL}/custo-de-vida` },
}

const planCards = [
  { icon: Home, title: 'Aluguel e contas fixas', desc: 'Aluguel, condomínio, água, luz, internet e IPTU são as despesas que mais pesam no orçamento mensal.' },
  { icon: TrendingDown, title: 'Alimentação e transporte', desc: 'Cozinhar em casa reduz custos. Transporte público é mais econômico que carro na maioria dos casos.' },
  { icon: PiggyBank, title: 'Reserva para imprevistos', desc: 'Antes de mudar, tenha uma reserva para custos iniciais como caução, mudança e móveis.' },
]

const articleSlugs = ['quanto-custa-morar-sozinho']

const perguntas = [
  'Minha renda cobre os gastos fixos com folga?',
  'Tenho reserva para os custos iniciais da mudança?',
  'Consigo manter os gastos variáveis sem depender do cartão?',
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

        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground">Planeje antes de mudar</h2>
            <p className="text-muted-foreground">Três categorias de gasto para considerar antes de sair da casa dos pais ou mudar de imóvel.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {planCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="border border-border/60 rounded-xl p-5 bg-card">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
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
              <article key={artigo.slug} className="group md:col-span-2 flex flex-col h-full border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <div className="h-1.5 bg-gradient-to-r from-amber-700 to-amber-500" />
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-700 w-fit">Custo de Vida</span>
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">{artigo.title}</h3>
                  {artigo.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{artigo.description}</p>
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
              <span className="text-sm font-semibold text-amber-700 group-hover:underline">Ver mais artigos</span>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Calculadoras relacionadas</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/calculadoras/orcamento-familiar" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-amber-100 text-amber-600 p-3 transition-transform group-hover:scale-105">
                  <Home className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-amber-700 transition-colors">Orçamento Familiar</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Simule seus gastos mensais</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                Simular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/reserva-emergencia" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-amber-100 text-amber-600 p-3 transition-transform group-hover:scale-105">
                  <PiggyBank className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-amber-700 transition-colors">Reserva de Emergência</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Baseie no seu custo de vida</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/economia-mensal" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-amber-100 text-amber-600 p-3 transition-transform group-hover:scale-105">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-amber-700 transition-colors">Economia Mensal</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Planeje metas de economia</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                Calcular <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link href="/calculadoras/meta-financeira" className="group block rounded-xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="rounded-xl bg-amber-100 text-amber-600 p-3 transition-transform group-hover:scale-105">
                  <Target className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">Gratuita</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-amber-700 transition-colors">Meta Financeira</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">Planeje objetivos financeiros</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                Planejar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <section className="mb-12 border border-amber-200 bg-amber-50/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <HelpCircle className="w-6 h-6 text-amber-600 shrink-0" />
            <h2 className="text-xl font-bold text-foreground">Perguntas para responder antes de morar sozinho</h2>
          </div>
          <div className="grid gap-4">
            {perguntas.map((pergunta, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-amber-200/60 shadow-sm">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                <p className="text-sm text-foreground leading-relaxed">{pergunta}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection
          items={[
            { question: 'O que é custo de vida?', answer: 'Custo de vida é o montante de gastos necessários para manter um determinado padrão de vida, incluindo moradia, alimentação, transporte, saúde, educação e lazer. Varia conforme a cidade e o perfil familiar.' },
            { question: 'Como calcular meu custo de vida?', answer: 'Use uma planilha ou aplicativo para registrar todos os gastos fixos e variáveis por pelo menos três meses. Inclua despesas anuais rateadas. Nossa calculadora de orçamento familiar pode ajudar.' },
            { question: 'Qual cidade brasileira tem o custo de vida mais alto?', answer: 'São Paulo e Rio de Janeiro estão entre as cidades com maior custo de vida no Brasil, especialmente em moradia e transporte. Capitais do Nordeste e Norte tendem a ter custo mais baixo em algumas categorias.' },
          ]}
          pageUrl={`${SITE_URL}/custo-de-vida`}
        />
        <p className="text-xs text-muted-foreground text-center mt-8">Última atualização: julho de 2026</p>
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
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-md" asChild>
              <Link href="/calculadoras/economia-mensal">Economia Mensal <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
