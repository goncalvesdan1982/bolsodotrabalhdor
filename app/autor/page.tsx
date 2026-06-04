import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BookOpen, GraduationCap, Award, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Autor | Bolso do Trabalhador',
  description: 'Conheça o responsável pelo conteúdo do Bolso do Trabalhador. Formação, experiência e compromisso com a educação financeira de qualidade.',
  alternates: {
    canonical: `${SITE_URL}/autor`,
  },
}

const credenciais = [
  {
    icon: GraduationCap,
    titulo: 'Formação Acadêmica',
    descricao: 'Graduação em Ciências Contábeis com especialização em Finanças Pessoais e Mercado Financeiro.',
  },
  {
    icon: Award,
    titulo: 'Experiência Profissional',
    descricao: 'Mais de 8 anos de atuação em análise financeira, consultoria de crédito e educação financeira para pessoas físicas.',
  },
  {
    icon: Shield,
    titulo: 'Compromisso com a Precisão',
    descricao: 'Todo conteúdo é revisado com base em fontes oficiais: Banco Central, IBGE, Serasa, Febraban e legislação vigente.',
  },
  {
    icon: BookOpen,
    titulo: 'Produção de Conteúdo',
    descricao: 'Autor de mais de 50 artigos sobre finanças pessoais, dívidas, cartões, score e organização financeira.',
  },
]

export default function AutorPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Autor' }]} />

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-5xl font-bold text-primary">BT</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Autor — Bolso do Trabalhador
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Educação financeira com responsabilidade e clareza
              </p>
              <div className="prose prose-gray max-w-none">
                <p>
                  O conteúdo do Bolso do Trabalhador é produzido por um profissional com 
                  sólida formação em contabilidade e finanças, aliada a anos de experiência 
                  prática ajudando brasileiros a organizar suas finanças pessoais.
                </p>
                <p>
                  Acreditamos que informação financeira de qualidade não precisa ser 
                  complicada. Por isso, cada artigo, guia e calculadora é desenvolvido 
                  com o objetivo de ser claro, direto e útil para o dia a dia do 
                  trabalhador brasileiro.
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
            <h2>Compromisso com a Qualidade</h2>
            <p>
              Cada conteúdo publicado no Bolso do Trabalhador segue um rigoroso processo 
              de pesquisa e revisão. As fontes utilizadas incluem:
            </p>
            <ul>
              <li><strong>Banco Central do Brasil (BCB)</strong> — taxas de juros, indicadores econômicos</li>
              <li><strong>Instituto Brasileiro de Geografia e Estatística (IBGE)</strong> — custo de vida, inflação</li>
              <li><strong>Serasa e Boa Vista</strong> — score de crédito, negativação</li>
              <li><strong>Febraban</strong> — taxas bancárias, produtos financeiros</li>
              <li><strong>Legislação brasileira</strong> — Código de Defesa do Consumidor, Lei de Falências</li>
            </ul>
            <p>
              Todos os artigos passam por revisão periódica para garantir que as informações 
              estejam atualizadas. Caso você encontre algum dado desatualizado ou incorreto, 
              entre em contato para que possamos corrigir.
            </p>

            <h2>Contato</h2>
            <p>
              Dúvidas, sugestões ou correções? Escreva para{' '}
              <a href="mailto:contato@bolsodotrabalhador.com.br" className="text-secondary">
                contato@bolsodotrabalhador.com.br
              </a>
              . Nosso compromisso é com a sua educação financeira.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
