import Link from 'next/link'
import { Metadata } from 'next'
import { 
  Calculator, Wallet, TrendingDown, CreditCard, 
  Landmark, Shield, PiggyBank, ArrowRight,
  CheckCircle2, BarChart3, ScrollText, Percent,
  AlertTriangle, DollarSign
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Bolso do Trabalhador - Finanças Simples para Quem Trabalha e Paga Boletos',
  description: 'Calculadoras financeiras gratuitas, dicas para sair das dívidas, cartão de crédito, score, empréstimos e organização financeira. Educação financeira sem enrolação.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Bolso do Trabalhador - Finanças Simples',
    description: 'Calculadoras financeiras gratuitas, dicas para sair das dívidas e organização financeira para trabalhadores brasileiros.',
  },
}

const calculadoras = [
  { nome: 'Juros Compostos', descricao: 'Simule o crescimento do seu dinheiro com juros compostos e veja o poder dos aportes mensais.', href: '/calculadoras/juros-compostos', icon: TrendingDown, cor: 'bg-emerald-100 text-emerald-600' },
  { nome: 'Juros Simples', descricao: 'Calcule juros simples de forma rápida para empréstimos e financiamentos.', href: '/calculadoras/juros-simples', icon: Percent, cor: 'bg-blue-100 text-blue-600' },
  { nome: 'Empréstimo', descricao: 'Simule parcelas, juros e CET de empréstimos pessoais com tabela Price.', href: '/calculadoras/emprestimo', icon: DollarSign, cor: 'bg-amber-100 text-amber-600' },
  { nome: 'Financiamento', descricao: 'Calcule financiamento imobiliário ou de veículos pelo sistema SAC.', href: '/calculadoras/financiamento', icon: Landmark, cor: 'bg-purple-100 text-purple-600' },
  { nome: 'Reserva de Emergência', descricao: 'Descubra quanto você precisa guardar para sua reserva de emergência.', href: '/calculadoras/reserva-emergencia', icon: Shield, cor: 'bg-cyan-100 text-cyan-600' },
  { nome: 'Orçamento Familiar', descricao: 'Organize seu orçamento mensal e veja para onde está indo seu dinheiro.', href: '/calculadoras/orcamento-familiar', icon: PiggyBank, cor: 'bg-green-100 text-green-600' },
]

const categorias = [
  { nome: 'Dívidas', descricao: 'Aprenda a negociar, renegociar e sair das dívidas de vez.', href: '/dividas', icon: AlertTriangle, cor: 'bg-red-100 text-red-600' },
  { nome: 'Cartões', descricao: 'Cartão de crédito sem anuidade, como aumentar limite e dicas.', href: '/cartoes', icon: CreditCard, cor: 'bg-indigo-100 text-indigo-600' },
  { nome: 'Empréstimos', descricao: 'Compare modalidades, calcule juros e escolha o melhor empréstimo.', href: '/emprestimos', icon: DollarSign, cor: 'bg-amber-100 text-amber-600' },
  { nome: 'Score', descricao: 'Entenda como funciona e aprenda a aumentar seu score de crédito.', href: '/score', icon: BarChart3, cor: 'bg-blue-100 text-blue-600' },
  { nome: 'Organização Financeira', descricao: 'Métodos práticos para controlar gastos e organizar as contas.', href: '/organizacao-financeira', icon: ScrollText, cor: 'bg-teal-100 text-teal-600' },
  { nome: 'Custo de Vida', descricao: 'Descubra quanto custa morar, ter carro, criar um filho e mais.', href: '/custo-de-vida', icon: Wallet, cor: 'bg-violet-100 text-violet-600' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary/20">
              <Wallet className="w-4 h-4" />
              Finanças simples para quem trabalha
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Organize seu dinheiro, saia das dívidas e tome decisões financeiras melhores.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Calculadoras financeiras gratuitas, dicas práticas e ferramentas para trabalhadores brasileiros. 
              Sem enrolação, sem promessas milagrosas. Finanças da vida real.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Tudo gratuito', 'Sem cadastro', 'Resultados na hora', 'Educação financeira real'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/calculadoras">
                  Ver Calculadoras
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/blog">
                  Ler Artigos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadoras em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Calculadoras em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas gratuitas para calcular juros, simular empréstimos, organizar o orçamento e planejar seu futuro financeiro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculadoras.map((calc) => {
              const Icon = calc.icon
              return (
                <Link key={calc.href} href={calc.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group-hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${calc.cor} flex items-center justify-center mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{calc.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{calc.descricao}</CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Calcular agora <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/calculadoras">
                Ver todas as calculadoras <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categorias Grid */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Tudo sobre finanças pessoais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conteúdo organizado por categorias para você encontrar exatamente o que precisa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.href} href={cat.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 group-hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${cat.cor} flex items-center justify-center mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{cat.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{cat.descricao}</CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium">
                        Explorar <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Finanças da vida real
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                O Bolso do Trabalhador nasceu para ajudar brasileiros a tomarem decisões financeiras melhores. 
                Não somos mais um site de investimentos ou criptomoedas. Somos um portal de educação financeira 
                prática para quem trabalha, paga boletos e quer organizar a vida.
              </p>
              <p className="text-muted-foreground mb-4">
                Aqui você encontra calculadoras gratuitas para simular juros, empréstimos e financiamentos, 
                além de conteúdo educativo sobre dívidas, cartões, score e organização financeira. 
                Tudo explicado de forma clara, sem termos complicados.
              </p>
              <p className="text-muted-foreground">
                Nossas calculadoras são baseadas em fórmulas matemáticas padrão de mercado. 
                Os conteúdos são produzidos com base em fontes oficiais como Banco Central, 
                Serasa, IBGE e Febraban. Seus dados não são armazenados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
