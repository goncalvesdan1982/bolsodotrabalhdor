import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, ShieldCheck, Calculator } from 'lucide-react'

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

export default function ScorePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Score de Crédito' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Score de Crédito
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda como funciona o score de crédito, aprenda estratégias para aumentar sua pontuação e conquistar melhores condições financeiras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader>
              <Calculator className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Comprometimento de Renda</CardTitle>
              <CardDescription>Descubra como seu nível de endividamento afeta seu score de crédito.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/comprometimento-renda">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader>
              <ShieldCheck className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Capacidade de Endividamento</CardTitle>
              <CardDescription>Veja qual o limite ideal de crédito para seu perfil financeiro.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/capacidade-endividamento">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-primary rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Score</h2>
          <p className="text-primary-foreground/80 mb-6">
            Leia nossos artigos para entender como o score funciona e como aumentar sua pontuação.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/blog/como-aumentar-score-de-credito"
              className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all group"
            >
              <span className="font-medium">Como aumentar o score de crédito rápido</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>

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

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 md:p-12 text-center border border-purple-200">
          <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Monitore sua saúde financeira</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Use nossas calculadoras para entender como suas finanças impactam seu score de crédito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/comprometimento-renda">
                Comprometimento de Renda <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/capacidade-endividamento">
                Capacidade de Endividamento <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
