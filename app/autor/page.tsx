import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BookOpen, GraduationCap, Award, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Autor | Bolso do Trabalhador',
  description: 'Conheça Daniel Gonçalves, criador do Bolso do Trabalhador. Desenvolvedor web e entusiasta de educação financeira, focado em ferramentas práticas para trabalhadores brasileiros.',
  alternates: {
    canonical: `${SITE_URL}/autor`,
  },
  openGraph: {
    title: 'Autor — Daniel Gonçalves | Bolso do Trabalhador',
    description: 'Conheça Daniel Gonçalves, criador do Bolso do Trabalhador. Desenvolvedor web e entusiasta de educação financeira.',
    url: `${SITE_URL}/autor`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'profile',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Daniel Gonçalves — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autor — Daniel Gonçalves | Bolso do Trabalhador',
    description: 'Conheça Daniel Gonçalves, criador do Bolso do Trabalhador.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

const credenciais = [
  {
    icon: GraduationCap,
    titulo: 'Formação',
    descricao: 'Bacharel em Ciência da Computação com especialização em Desenvolvimento Web. Experiência em criação de ferramentas financeiras e aplicações educacionais.',
  },
  {
    icon: Award,
    titulo: 'Experiência',
    descricao: 'Desenvolvedor de aplicações web com foco em usabilidade e soluções práticas. Criador do Bolso do Trabalhador, portal de educação financeira para trabalhadores brasileiros.',
  },
  {
    icon: Shield,
    titulo: 'Compromisso com a Precisão',
    descricao: 'Todo conteúdo é baseado em fontes oficiais: Banco Central, IBGE, Serasa, Febraban e legislação vigente. Cálculos transparentes e verificáveis.',
  },
  {
    icon: BookOpen,
    titulo: 'Produção de Conteúdo',
    descricao: 'Autor dos artigos e guias do Bolso do Trabalhador, com foco em linguagem clara e conteúdo prático para o dia a dia do trabalhador brasileiro.',
  },
]

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Daniel Gonçalves',
  url: `${SITE_URL}/autor`,
  description: 'Criador e editor do Bolso do Trabalhador, portal independente de educação financeira. Desenvolvedor web focado em ferramentas práticas e conteúdo educativo sobre finanças pessoais, crédito, dívidas, organização financeira e direitos do trabalhador.',
  sameAs: [
    `${SITE_URL}/autor`,
  ],
}

export default function AutorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Autor' }]} />

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-4xl md:text-5xl font-bold text-white">DG</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Daniel Gonçalves
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Criador do Bolso do Trabalhador
              </p>
              <div className="prose prose-gray max-w-none">
                <p>
                  Sou desenvolvedor de aplicações web e entusiasta de educação financeira. 
                  Criei o Bolso do Trabalhador com um objetivo simples: oferecer ferramentas 
                  práticas e gratuitas para que o trabalhador brasileiro possa tomar decisões 
                  financeiras mais conscientes.
                </p>
                <p>
                  Acredito que informação financeira de qualidade não precisa ser complicada. 
                  Por isso, cada artigo, guia e calculadora é desenvolvido com foco em clareza, 
                  transparência e utilidade real para o dia a dia de quem trabalha, paga contas 
                  e busca organizar a vida financeira.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {credenciais.map((cred) => {
              const Icon = cred.icon
              return (
                <Card key={cred.titulo}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cred.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{cred.descricao}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Como este portal é mantido</h2>
            <p>
              O Bolso do Trabalhador é um projeto independente, mantido com recursos 
              próprios. Todo o conteúdo é produzido com base em fontes oficiais e 
              cálculos transparentes. Não recebo patrocínio de instituições financeiras 
              para influenciar recomendações.
            </p>

            <h2>Compromisso com a Qualidade</h2>
            <p>
              Cada conteúdo publicado segue um processo de pesquisa e revisão. 
              As fontes utilizadas incluem:
            </p>
            <ul>
              <li><strong>Banco Central do Brasil (BCB)</strong> — taxas de juros, indicadores econômicos</li>
              <li><strong>Instituto Brasileiro de Geografia e Estatística (IBGE)</strong> — custo de vida, inflação</li>
              <li><strong>Serasa e Boa Vista</strong> — score de crédito, negativação</li>
              <li><strong>Febraban</strong> — taxas bancárias, produtos financeiros</li>
              <li><strong>Legislação brasileira</strong> — Código de Defesa do Consumidor</li>
            </ul>
            <p>
              Os artigos passam por revisão periódica. Caso você encontre algum dado 
              desatualizado, entre em contato para correção.
            </p>

            <h2>Contato</h2>
            <p>
              Dúvidas, sugestões ou correções? Escreva para{' '}
              <a href="mailto:contato@bolsodotrabalhador.online" className="text-secondary">
                contato@bolsodotrabalhador.online
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
