import Link from 'next/link'
import { Metadata } from 'next'
import {
  Calculator, Wallet, TrendingDown, CreditCard,
  Landmark, Shield, PiggyBank, ArrowRight,
  CheckCircle2, BarChart3, ScrollText, Percent,
  AlertTriangle, DollarSign, Calendar, Info,
  BookOpen, Search, HelpCircle, TrendingUp,
  FileText, Scale, GraduationCap, Sparkles,
  Target, LayoutDashboard
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_URL } from '@/lib/config'
import { getAllPosts } from '@/lib/posts'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Bolso do Trabalhador - Finanças Simples para Quem Trabalha e Paga Boletos',
  description: 'Calculadoras financeiras gratuitas, dicas para sair das dívidas, cartão de crédito, score, empréstimos e organização financeira. Educação financeira sem enrolação.',
  keywords: ['finanças pessoais', 'educação financeira', 'sair das dívidas', 'calcular juros', 'score de crédito', 'cartão de crédito', 'empréstimo', 'organização financeira', 'orçamento familiar', 'reserva de emergência'],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Bolso do Trabalhador - Finanças Simples para Quem Trabalha e Paga Boletos',
    description: 'Calculadoras financeiras gratuitas, dicas para sair das dívidas e organização financeira para trabalhadores brasileiros.',
    url: SITE_URL,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolso do Trabalhador - Finanças Simples',
    description: 'Calculadoras financeiras gratuitas e educação financeira para trabalhadores brasileiros.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

const quickStarts = [
  {
    title: 'Organizar finanças',
    desc: 'Aprenda a controlar gastos, criar orçamento e montar reserva de emergência.',
    href: '/organizacao-financeira',
    icon: ScrollText,
  },
  {
    title: 'Sair das dívidas',
    desc: 'Veja estratégias práticas para negociar, priorizar e quitar dívidas.',
    href: '/dividas',
    icon: AlertTriangle,
  },
  {
    title: 'Entender cartões',
    desc: 'Saiba como usar o cartão sem cair no rotativo e aumentar seu limite.',
    href: '/cartoes',
    icon: CreditCard,
  },
  {
    title: 'Comparar empréstimos',
    desc: 'Compare taxas, CET e prazos antes de contratar um empréstimo.',
    href: '/emprestimos',
    icon: DollarSign,
  },
  {
    title: 'Aumentar score',
    desc: 'Descubra como melhorar sua pontuação de crédito com ações simples.',
    href: '/score',
    icon: BarChart3,
  },
  {
    title: 'Calcular custo de vida',
    desc: 'Simule gastos para morar sozinho, ter carro, criar um filho e mais.',
    href: '/custo-de-vida',
    icon: Wallet,
  },
]

const painelItems = [
  { nome: 'Calculadoras', href: '/calculadoras', icon: Calculator, cor: 'bg-blue-100 text-blue-700' },
  { nome: 'Dívidas', href: '/dividas', icon: AlertTriangle, cor: 'bg-red-100 text-red-700' },
  { nome: 'Cartões', href: '/cartoes', icon: CreditCard, cor: 'bg-indigo-100 text-indigo-700' },
  { nome: 'Empréstimos', href: '/emprestimos', icon: DollarSign, cor: 'bg-amber-100 text-amber-700' },
  { nome: 'Score', href: '/score', icon: BarChart3, cor: 'bg-blue-100 text-blue-700' },
  { nome: 'Organização', href: '/organizacao-financeira', icon: ScrollText, cor: 'bg-teal-100 text-teal-700' },
  { nome: 'Custo de Vida', href: '/custo-de-vida', icon: Wallet, cor: 'bg-violet-100 text-violet-700' },
  { nome: 'Blog', href: '/blog', icon: BookOpen, cor: 'bg-green-100 text-green-700' },
]

const calculadoras = [
  { nome: 'Juros Compostos', descricao: 'Simule o crescimento do seu dinheiro com juros compostos.', href: '/calculadoras/juros-compostos', icon: TrendingDown, cor: 'bg-emerald-100 text-emerald-600' },
  { nome: 'Juros Simples', descricao: 'Calcule juros simples de forma rápida.', href: '/calculadoras/juros-simples', icon: Percent, cor: 'bg-blue-100 text-blue-600' },
  { nome: 'Empréstimo', descricao: 'Simule parcelas, juros e CET de empréstimos.', href: '/calculadoras/emprestimo', icon: DollarSign, cor: 'bg-amber-100 text-amber-600' },
  { nome: 'Financiamento', descricao: 'Calcule financiamento imobiliário ou de veículos.', href: '/calculadoras/financiamento', icon: Landmark, cor: 'bg-purple-100 text-purple-600' },
  { nome: 'Reserva de Emergência', descricao: 'Descubra quanto guardar para emergências.', href: '/calculadoras/reserva-emergencia', icon: Shield, cor: 'bg-cyan-100 text-cyan-600' },
  { nome: 'Orçamento Familiar', descricao: 'Organize seu orçamento mensal.', href: '/calculadoras/orcamento-familiar', icon: PiggyBank, cor: 'bg-green-100 text-green-600' },
]

const categorias = [
  { nome: 'Dívidas', descricao: 'Aprenda a negociar, renegociar e sair das dívidas de vez.', href: '/dividas', icon: AlertTriangle, cor: 'bg-red-100 text-red-600' },
  { nome: 'Cartões', descricao: 'Cartão sem anuidade, como aumentar limite e dicas.', href: '/cartoes', icon: CreditCard, cor: 'bg-indigo-100 text-indigo-600' },
  { nome: 'Empréstimos', descricao: 'Compare modalidades, calcule juros e escolha o melhor.', href: '/emprestimos', icon: DollarSign, cor: 'bg-amber-100 text-amber-600' },
  { nome: 'Score', descricao: 'Entenda como funciona e aprenda a aumentar seu score.', href: '/score', icon: BarChart3, cor: 'bg-blue-100 text-blue-600' },
  { nome: 'Organização Financeira', descricao: 'Métodos práticos para controlar gastos.', href: '/organizacao-financeira', icon: ScrollText, cor: 'bg-teal-100 text-teal-600' },
  { nome: 'Custo de Vida', descricao: 'Descubra quanto custa morar, ter carro, criar um filho.', href: '/custo-de-vida', icon: Wallet, cor: 'bg-violet-100 text-violet-600' },
]

const categoryBadgeColors: Record<string, string> = {
  'Dívidas': 'bg-red-100 text-red-700',
  'Score': 'bg-blue-100 text-blue-700',
  'Cartões': 'bg-indigo-100 text-indigo-700',
  'Empréstimos': 'bg-amber-100 text-amber-700',
  'Organização Financeira': 'bg-teal-100 text-teal-700',
  'Custo de Vida': 'bg-violet-100 text-violet-700',
}

const ctaTexts: Record<string, string> = {
  'Juros Compostos': 'Simular crescimento',
  'Juros Simples': 'Calcular juros',
  'Empréstimo': 'Calcular parcelas',
  'Financiamento': 'Simular financiamento',
  'Reserva de Emergência': 'Quanto devo guardar?',
  'Orçamento Familiar': 'Organizar orçamento',
}

const faqItems = [
  {
    question: 'O Bolso do Trabalhador é um site oficial do governo?',
    answer: 'Não. O Bolso do Trabalhador é um portal informativo independente sobre finanças pessoais, educação financeira e direitos do trabalhador. Não temos vínculo com o governo, Caixa Econômica Federal, INSS ou qualquer órgão oficial. Para consultar valores, solicitar benefícios, atualizar cadastro ou confirmar pagamentos, acesse os canais oficiais do governo ou órgão responsável.',
  },
  {
    question: 'O site consulta CPF ou libera pagamento?',
    answer: 'Não. O site não solicita CPF, senha, dados bancários nem libera pagamentos. Nossas calculadoras são ferramentas educativas que usam apenas dados informados por você para simulações. As consultas oficiais devem ser feitas nos canais do governo ou instituições responsáveis.',
  },
  {
    question: 'Como sair das dívidas?',
    answer: 'Sair das dívidas exige um plano: 1) liste todas as dívidas com valores e juros, 2) priorize as mais caras (cartão, cheque especial), 3) negocie descontos com os credores, 4) crie um orçamento que caiba no seu bolso, 5) mantenha o foco. Veja nosso <a href="/blog/como-sair-das-dividas-guia-completo" class="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">guia completo para sair das dívidas</a> e use a <a href="/calculadoras/quitacao-dividas" class="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">calculadora de quitação de dívidas</a>.',
  },
  {
    question: 'O que é score de crédito e como aumentar?',
    answer: 'O score de crédito é uma pontuação de 0 a 1000 que indica a probabilidade de você pagar contas em dia. Para aumentar: ative o Cadastro Positivo, pague todas as contas em dia, use até 30% do limite do cartão e evite muitas consultas ao CPF.',
  },
  {
    question: 'As calculadoras são gratuitas?',
    answer: 'Sim, todas as calculadoras do Bolso do Trabalhador são 100% gratuitas. Não pedimos cadastro, não armazenamos dados e não há limite de uso. São ferramentas educativas baseadas em fórmulas matemáticas padrão de mercado.',
  },
  {
    question: 'Onde confirmar informações oficiais sobre benefícios e programas sociais?',
    answer: 'Para informações oficiais, consulte sempre: site da Caixa Econômica Federal (caixa.gov.br), INSS (gov.br/inss), Ministério do Trabalho (gov.br/trabalho), Receita Federal (gov.br/receita) e prefeituras municipais. Desconfie de sites que pedem dados bancários ou prometem liberação de benefícios.',
  },
  {
    question: 'Como evitar golpes financeiros?',
    answer: 'Nunca informe senhas, dados bancários ou códigos de verificação em sites desconhecidos. O governo não pede pagamento para liberar benefícios. Desconfie de promessas de dinheiro fácil. Consulte sempre os canais oficiais e registre denúncias na Delegacia de Crimes Cibernéticos.',
  },
  {
    question: 'Qual a diferença entre empréstimo pessoal e consignado?',
    answer: 'O empréstimo consignado tem parcelas descontadas direto da folha de pagamento, com taxas mais baixas (1,5% a 3% ao mês), mas é restrito a servidores, aposentados e CLT de grandes empresas. O pessoal tem taxas mais altas (3% a 10% ao mês) mas é disponível para qualquer pessoa com renda.',
  },
]

export default function HomePage() {
  const posts = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section — duas colunas */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Coluna esquerda — texto */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary/20">
                <Sparkles className="w-4 h-4" />
                Educação financeira prática e gratuita
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
                <span className="text-primary">Bolso do Trabalhador:</span> finanças simples para quem trabalha e paga boletos
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty max-w-2xl">
                Calculadoras gratuitas, guias sobre dívidas, cartões, score, empréstimos e organização financeira. 
                Conteúdo educativo em linguagem simples, sem enrolação e sem promessas milagrosas.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
                  <Link href="/calculadoras">
                    Ver calculadoras
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  <Link href="/blog">
                    Ler guias
                    <BookOpen className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-primary">
                  <Link href="/dividas">
                    Sair das dívidas
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['Tudo gratuito', 'Sem cadastro', 'Resultados na hora', 'Linguagem simples'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita — painel do trabalhador */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-card/50 rounded-2xl border border-border/60 shadow-lg shadow-primary/5 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <LayoutDashboard className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground text-sm">Painel do Trabalhador</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {painelItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-muted/60 transition-all hover:shadow-sm text-center group"
                      >
                        <div className={`w-9 h-9 rounded-lg ${item.cor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium text-foreground leading-tight">{item.nome}</span>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <Info className="w-3 h-3 mt-0.5 shrink-0 text-secondary" />
                    <span>Portal independente. Confirme informações nos canais oficiais do governo.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso de portal informativo independente */}
      <div className="container mx-auto px-4 -mt-2 mb-8">
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl px-4 py-3 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong className="font-semibold">Portal informativo independente.</strong> O Bolso do Trabalhador oferece conteúdo educativo sobre finanças pessoais e direitos do trabalhador. 
            Para solicitar benefícios, consultar valores oficiais ou atualizar cadastros, acesse os canais oficiais do governo ou órgão responsável.
          </p>
        </div>
      </div>

      {/* Seção: Comece pelo que você precisa */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Comece pelo que você precisa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o caminho mais rápido para organizar suas finanças, entender seu score, 
              comparar empréstimos ou sair das dívidas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickStarts.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-0.5">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{item.desc}</CardDescription>
                      <div className="mt-3 flex items-center text-primary text-sm font-medium">
                        Acessar <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Separador com anúncio */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border/40 my-6" />
      </div>

      {/* Seção: Calculadoras em Destaque */}
      <section id="calculadoras" className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Ferramentas gratuitas</h2>
              <p className="text-muted-foreground max-w-xl">
                Calculadoras financeiras para simular juros, empréstimos, financiamentos e organizar seu orçamento.
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/calculadoras">
                Ver todas as calculadoras <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {calculadoras.map((calc) => {
              const Icon = calc.icon
              return (
                <Link key={calc.href} href={calc.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/40 group-hover:-translate-y-0.5">
                    <CardHeader className="pb-3">
                      <div className={`w-11 h-11 rounded-lg ${calc.cor} flex items-center justify-center mb-2`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">{calc.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{calc.descricao}</CardDescription>
                      <div className="mt-3 flex items-center text-primary text-sm font-medium">
                        {ctaTexts[calc.nome] || 'Calcular agora'} <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção: Categorias */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Conteúdo organizado por tema</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navegue por categorias para encontrar exatamente o que você precisa sobre cada assunto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categorias.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.href} href={cat.href} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-0.5">
                    <CardHeader className="pb-3">
                      <div className={`w-11 h-11 rounded-lg ${cat.cor} flex items-center justify-center mb-2`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">{cat.nome}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">{cat.descricao}</CardDescription>
                      <div className="mt-3 flex items-center text-primary text-sm font-medium">
                        Explorar <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção: Últimos Artigos / Guias Recomendados */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Guias recomendados</h2>
              <p className="text-muted-foreground max-w-xl">
                Artigos educativos para ajudar você a tomar decisões financeiras melhores no dia a dia.
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/blog">
                Ver todos os guias <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-0.5">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${categoryBadgeColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm line-clamp-2">
                      {post.description}
                    </CardDescription>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ler guia <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Por que usar o Bolso do Trabalhador */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Por que usar o Bolso do Trabalhador?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um portal feito para ajudar brasileiros a organizar as finanças e tomar decisões com mais informação.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: GraduationCap,
                title: 'Informação em linguagem simples',
                desc: 'Guias e calculadoras para entender finanças, benefícios e direitos sem complicação.',
              },
              {
                icon: Target,
                title: 'Organização por tema',
                desc: 'Conteúdo organizado por categorias: dívidas, cartões, score, empréstimos e orçamento.',
              },
              {
                icon: Shield,
                title: 'Portal gratuito e independente',
                desc: 'Conteúdo informativo para ajudar no planejamento financeiro, sem substituir canais oficiais.',
              },
              {
                icon: AlertTriangle,
                title: 'Foco em segurança',
                desc: 'Orientações para evitar golpes financeiros e confirmar informações em fontes oficiais.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="border-border/60 shadow-sm">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seção: Consulta, cadastro e canais oficiais */}
      <section className="py-10 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">Onde buscar informações oficiais</h2>
              <p className="text-muted-foreground">
                O Bolso do Trabalhador é um portal informativo. Para solicitações oficiais, consulte os canais do governo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Consulte sempre nos canais oficiais', desc: 'Use sites como gov.br, Caixa, INSS e Receita Federal para informações oficiais.' },
                { icon: AlertTriangle, title: 'Nunca informe dados bancários', desc: 'O governo não pede senhas, códigos ou dados bancários para liberar benefícios.' },
                { icon: Calendar, title: 'Confira calendários atualizados', desc: 'As datas de pagamento são publicadas nos canais oficiais de cada programa.' },
                { icon: FileText, title: 'Verifique documentos exigidos', desc: 'Cada benefício tem requisitos específicos. Consulte antes de solicitar.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-white dark:bg-card/30 border border-border/60">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FAQSection items={faqItems} pageUrl={SITE_URL} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para organizar suas finanças?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Comece com nossas calculadoras gratuitas ou explore os guias educativos. 
            Tudo sem cadastro, sem enrolação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/calculadoras">
                Ver calculadoras <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/blog">
                Explorar guias <BookOpen className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
