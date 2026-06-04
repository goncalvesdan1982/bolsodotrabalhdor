import { Metadata } from 'next'
import Link from 'next/link'
import { PiggyBank, Home, BarChart3, RefreshCw, TrendingUp, AlertTriangle, CreditCard, Target, Calculator, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Calculadoras Financeiras | Bolso do Trabalhador',
  description: 'Ferramentas gratuitas para calcular juros, simular empréstimos, organizar o orçamento e planejar seu futuro financeiro.',
  keywords: ['calculadora financeira', 'calcular juros', 'simular empréstimo', 'calculadora online', 'ferramenta financeira'],
  alternates: { canonical: `${SITE_URL}/calculadoras` },
  openGraph: {
    title: 'Calculadoras Financeiras | Bolso do Trabalhador',
    description: 'Ferramentas gratuitas para calcular juros, simular empréstimos, organizar o orçamento e planejar seu futuro financeiro.',
    url: `${SITE_URL}/calculadoras`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Calculadoras Financeiras — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadoras Financeiras | Bolso do Trabalhador',
    description: 'Ferramentas gratuitas para calcular juros, simular empréstimos e organizar o orçamento.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

const calculadoras = [
  { nome: 'Reserva de Emergência', descricao: 'Calcule quanto você precisa para formar uma reserva de emergência.', href: '/calculadoras/reserva-emergencia', icon: PiggyBank, cor: 'bg-green-100 text-green-600' },
  { nome: 'Orçamento Familiar', descricao: 'Organize suas finanças e veja para onde seu dinheiro está indo.', href: '/calculadoras/orcamento-familiar', icon: Home, cor: 'bg-blue-100 text-blue-600' },
  { nome: 'Capacidade de Endividamento', descricao: 'Descubra quanto da sua renda pode ser comprometido com dívidas.', href: '/calculadoras/capacidade-endividamento', icon: BarChart3, cor: 'bg-orange-100 text-orange-600' },
  { nome: 'Troca de Dívidas', descricao: 'Simule a troca de uma dívida por outra com juros menores.', href: '/calculadoras/troca-dividas', icon: RefreshCw, cor: 'bg-purple-100 text-purple-600' },
  { nome: 'Economia Mensal', descricao: 'Calcule seu potencial de economia mensal.', href: '/calculadoras/economia-mensal', icon: TrendingUp, cor: 'bg-emerald-100 text-emerald-600' },
  { nome: 'Comprometimento de Renda', descricao: 'Calcule o percentual da sua renda comprometido com dívidas.', href: '/calculadoras/comprometimento-renda', icon: AlertTriangle, cor: 'bg-red-100 text-red-600' },
  { nome: 'Quitação de Dívidas', descricao: 'Simule a quitação de dívidas e veja em quanto tempo fica livre.', href: '/calculadoras/quitacao-dividas', icon: CreditCard, cor: 'bg-rose-100 text-rose-600' },
  { nome: 'Meta Financeira', descricao: 'Calcule quanto tempo leva para atingir sua meta financeira.', href: '/calculadoras/meta-financeira', icon: Target, cor: 'bg-indigo-100 text-indigo-600' },
  { nome: 'Juros Compostos', descricao: 'Calcule juros compostos com aportes mensais.', href: '/calculadoras/juros-compostos', icon: TrendingUp, cor: 'bg-cyan-100 text-cyan-600' },
  { nome: 'Juros Simples', descricao: 'Calcule juros simples de forma rápida e precisa.', href: '/calculadoras/juros-simples', icon: Calculator, cor: 'bg-gray-100 text-gray-600' },
  { nome: 'Empréstimo', descricao: 'Simule empréstimos com tabela Price.', href: '/calculadoras/emprestimo', icon: CreditCard, cor: 'bg-amber-100 text-amber-600' },
  { nome: 'Financiamento', descricao: 'Calcule financiamento pelo sistema SAC.', href: '/calculadoras/financiamento', icon: Home, cor: 'bg-violet-100 text-violet-600' },
  { nome: 'Parcelas', descricao: 'Calcule o valor de parcelas com ou sem juros.', href: '/calculadoras/parcelas', icon: Calculator, cor: 'bg-pink-100 text-pink-600' },
]

const ctaTexts: Record<string, string> = {
  'Reserva de Emergência': 'Quanto devo guardar?',
  'Orçamento Familiar': 'Organizar meu orçamento',
  'Capacidade de Endividamento': 'Calcular meu limite',
  'Troca de Dívidas': 'Comparar cenários',
  'Economia Mensal': 'Quanto posso poupar?',
  'Comprometimento de Renda': 'Ver meu percentual',
  'Quitação de Dívidas': 'Montar plano de quitação',
  'Meta Financeira': 'Simular minha meta',
  'Juros Compostos': 'Simular crescimento',
  'Juros Simples': 'Calcular juros',
  'Empréstimo': 'Calcular parcelas',
  'Financiamento': 'Simular financiamento',
  'Parcelas': 'Calcular parcelamento',
}

export default function CalculadorasPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs items={[{ label: 'Calculadoras' }]} />

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Calculadoras Financeiras</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas gratuitas para calcular juros, simular empréstimos, organizar o orçamento e planejar seu futuro financeiro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {calculadoras.map((calc) => {
              const Icon = calc.icon
              return (
                <Link key={calc.href} href={calc.href} className="group">
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 group-hover:-translate-y-0.5">
                    <CardContent className="flex items-start gap-4 pt-6">
                      <div className={`w-12 h-12 rounded-lg ${calc.cor} flex items-center justify-center shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-sm mb-1 group-hover:text-primary transition-colors">{calc.nome}</CardTitle>
                        <CardDescription className="text-xs">{calc.descricao}</CardDescription>
                        <div className="mt-2 flex items-center text-primary text-xs font-medium gap-1 group-hover:gap-2 transition-all">
                          {ctaTexts[calc.nome] || 'Calcular'} <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
