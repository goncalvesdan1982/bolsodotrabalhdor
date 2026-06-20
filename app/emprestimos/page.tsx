import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Banknote, Building, Repeat, Calculator } from 'lucide-react'

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

export default function EmprestimosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={[{ label: 'Empréstimos' }]} />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Banknote className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
            Empréstimos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare modalidades de empréstimo, calcule juros, entenda o CET e escolha a melhor opção para seu bolso. Calculadoras gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-green-200 bg-green-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Banknote className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Simulação de Empréstimo</CardTitle>
              <CardDescription>Calcule parcelas, juros totais e CET para qualquer modalidade de empréstimo.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/emprestimo">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Building className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Simulação de Financiamento</CardTitle>
              <CardDescription>Simule financiamentos imobiliários e de veículos com taxa de juros e prazo flexíveis.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/financiamento">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50/30 group hover:shadow-md transition-all">
            <CardHeader>
              <Repeat className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
              <CardTitle>Troca de Dívidas</CardTitle>
              <CardDescription>Veja se vale a pena trocar um empréstimo caro por outro com juros mais baixos.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/calculadoras/troca-dividas">
                  Calcular <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8 p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-3">Por onde começar</h2>
          <p className="text-muted-foreground mb-4">
            Se você está considerando um empréstimo, siga esta trilha para tomar a melhor decisão:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
            <li><Link href="/blog/emprestimo-pessoal-ou-consignado" className="text-secondary hover:underline font-medium">Empréstimo pessoal ou consignado?</Link> — entenda as diferenças</li>
            <li><Link href="/blog/como-comparar-emprestimos-corretamente" className="text-secondary hover:underline font-medium">Como comparar empréstimos</Link> — aprenda a analisar taxas e CET</li>
            <li><Link href="/blog/o-que-e-cet-e-por-que-importa" className="text-secondary hover:underline font-medium">O que é CET e por que importa?</Link> — o indicador mais importante</li>
            <li><Link href="/blog/como-calcular-custo-real-emprestimo" className="text-secondary hover:underline font-medium">Calcule o custo real do empréstimo</Link> — veja quanto você vai pagar de fato</li>
            <li><Link href="/blog/quando-nao-vale-a-pena-fazer-emprestimo" className="text-secondary hover:underline font-medium">Quando NÃO fazer empréstimo</Link> — situações para evitar</li>
          </ol>
        </div>

        <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-green-700 to-green-600 rounded-2xl text-primary-foreground shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Artigos sobre Empréstimos</h2>
          <p className="text-white/80 mb-6">
            Aprenda a escolher a melhor modalidade de empréstimo para sua situação.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/blog/emprestimo-pessoal-ou-consignado"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Pessoal ou consignado: qual escolher?</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/como-comparar-emprestimos-corretamente"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Como comparar empréstimos corretamente</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/o-que-e-cet-e-por-que-importa"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">O que é CET e por que ele importa?</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/como-calcular-custo-real-emprestimo"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Calcular o custo real de um empréstimo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/emprestimo-consignado-vale-a-pena"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Empréstimo consignado vale a pena?</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
            <Link
              href="/blog/quando-nao-vale-a-pena-fazer-emprestimo"
              className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              <span className="font-medium text-sm">Quando NÃO fazer um empréstimo</span>
              <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary mb-12">
          <h2>Modalidades de Empréstimo</h2>
          <p>
            Existem diversas modalidades de empréstimo no mercado brasileiro. O <strong>empréstimo consignado</strong> tem as menores taxas (1,5% a 3% ao mês) e é descontado diretamente da folha de pagamento. O <strong>empréstimo pessoal</strong> não exige vínculo empregatício específico, mas tem taxas mais altas (3% a 10% ao mês).
          </p>
          <p>
            Outras opções incluem o <strong>financiamento</strong> (para imóveis e veículos), o <strong>crédito rotativo</strong> (o mais caro, evite) e o <strong>antecipação do FGTS</strong> (taxas moderadas).
          </p>
          <h2>Entendendo o CET</h2>
          <p>
            O Custo Efetivo Total (CET) é o indicador mais importante na hora de contratar um empréstimo. Ele inclui não apenas os juros, mas também taxas, seguros e outros encargos. Use nossa calculadora para comparar o CET de diferentes propostas.
          </p>
          <h2>Dicas para Contratar um Empréstimo</h2>
          <p>
            Antes de contratar, compare pelo menos 3 propostas de instituições diferentes. Verifique o CET, o valor total a pagar e se as parcelas cabem no seu orçamento. Nunca comprometa mais de 30% da sua renda com parcelas de empréstimos.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-green-200">
          <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Simule seu empréstimo agora</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Antes de contratar, use nossa calculadora para simular parcelas e comparar diferentes cenários.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/calculadoras/emprestimo">
                Calculadora de Empréstimo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculadoras/financiamento">
                Calculadora de Financiamento <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
