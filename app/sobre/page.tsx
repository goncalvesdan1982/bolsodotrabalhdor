import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Users, Target, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça o Bolso do Trabalhador — um portal de educação financeira criado por Daniel Gonçalves, focado na realidade de quem ganha entre R$ 3.500 e R$ 9.000 e quer organizar as contas, sair das dívidas e fazer escolhas mais inteligentes.',
  alternates: {
    canonical: `${SITE_URL}/sobre`,
  },
  openGraph: {
    title: 'Sobre o Bolso do Trabalhador',
    description: 'Portal de educação financeira para trabalhadores brasileiros. Calculadoras gratuitas, artigos práticos e ferramentas para organizar a vida financeira.',
    url: `${SITE_URL}/sobre`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Sobre o Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre o Bolso do Trabalhador',
    description: 'Portal de educação financeira para trabalhadores brasileiros.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

const valores = [
  {
    icon: Calculator,
    titulo: 'Praticidade',
    descricao: 'Ferramentas e conteúdos diretos, sem enrolação. Você encontra o que precisa em minutos.',
  },
  {
    icon: Users,
    titulo: 'Acessibilidade',
    descricao: '100% gratuito e sem cadastro. Educação financeira para todos os brasileiros.',
  },
  {
    icon: Target,
    titulo: 'Foco na realidade',
    descricao: 'Conteúdo pensado para quem ganha entre R$ 3.500 e R$ 9.000 — a classe trabalhadora que mais precisa de organização financeira.',
  },
  {
    icon: Heart,
    titulo: 'Transparência',
    descricao: 'Todas as fontes são informadas. Links afiliados são sinalizados. Nosso compromisso é com a clareza.',
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Sobre' }]} />

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Sobre o Bolso do Trabalhador
            </h1>
            <p className="text-lg text-muted-foreground">
              Finanças simples para quem trabalha e paga boletos
            </p>
          </div>

          <div className="prose prose-gray max-w-none mb-12">
            <h2>Nossa História</h2>
            <p>
              O Bolso do Trabalhador foi criado por <strong>Daniel Gonçalves</strong> a partir de 
              uma constatação simples: a maior parte do conteúdo de finanças pessoais no Brasil é 
              pensada para quem já tem dinheiro. Quem ganha entre R$ 3.500 e R$ 9.000 por mês — 
              a maioria dos trabalhadores brasileiros — vive uma realidade financeira completamente 
              diferente.
            </p>
            <p>
              São pessoas que precisam de respostas práticas: como sair das dívidas, qual cartão 
              pedir, como negociar com o banco, quanto gastar com aluguel, como fazer um 
              orçamento que realmente funciona. Não adianta falar em &quot;investir na bolsa&quot; para 
              quem está tentando pagar o cartão de crédito todo mês.
            </p>
            <p>
              Por isso criamos o Bolso do Trabalhador: calculadoras financeiras simples e 
              gratuitas, artigos práticos baseados em fontes oficiais e um compromisso real 
              com a educação financeira de quem mais precisa.
            </p>

            <h2>Nossa Missão</h2>
            <p>
              Democratizar o acesso à educação financeira no Brasil, oferecendo ferramentas 
              gratuitas e conteúdo de qualidade para que o trabalhador brasileiro possa tomar 
              decisões financeiras mais conscientes — desde o orçamento doméstico até a escolha 
              de um empréstimo ou cartão de crédito.
            </p>

            <h2>Para Quem é Este Portal</h2>
            <p>
              Nosso conteúdo é feito principalmente para:
            </p>
            <ul>
              <li>Trabalhadores CLT e autônomos com renda entre R$ 3.500 e R$ 9.000</li>
              <li>Quem está endividado e busca um caminho prático para sair das dívidas</li>
              <li>Quem quer entender melhor cartões de crédito, score e empréstimos</li>
              <li>Quem deseja organizar o orçamento familiar sem planilhas complicadas</li>
              <li>Brasileiros que querem tomar decisões financeiras com mais informação e menos ansiedade</li>
            </ul>

            <h2>Foco em &quot;Finanças da Vida Real&quot;</h2>
            <p>
              Aqui você não vai encontrar dicas de como ficar milionário rápido ou promessas 
              de enriquecimento fácil. Nosso foco são as finanças da vida real: pagar contas, 
              negociar dívidas, escolher o melhor cartão, entender os juros de um empréstimo, 
              planejar uma grande compra, economizar sem radicalismo.
            </p>
            <p>
              Acreditamos que educação financeira de qualidade transforma vidas — não porque 
              torna as pessoas ricas, mas porque dá a elas controle e tranquilidade sobre 
              o próprio dinheiro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {valores.map((valor) => {
              const Icon = valor.icon
              return (
                <Card key={valor.titulo}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{valor.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{valor.descricao}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
