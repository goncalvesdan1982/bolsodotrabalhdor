import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BookOpen, Search, RefreshCcw, AlertTriangle, Link as LinkIcon, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política Editorial | Bolso do Trabalhador',
  description: 'Saiba como o conteúdo do Bolso do Trabalhador é pesquisado, revisado e atualizado. Transparência sobre fontes, processo editorial, correções e links afiliados.',
  alternates: {
    canonical: `${SITE_URL}/politica-editorial`,
  },
}

export default function PoliticaEditorialPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Política Editorial' }]} />

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Política Editorial</h1>
            <p className="text-muted-foreground">Transparência sobre como produzimos nosso conteúdo</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Pesquisa e Fontes</h2>
              </div>
              <p>
                Todo conteúdo publicado no Bolso do Trabalhador é baseado em fontes oficiais 
                e confiáveis. Nossas principais fontes de informação são:
              </p>
              <ul>
                <li>
                  <strong>Banco Central do Brasil (BCB)</strong> — taxas de juros (Selic, 
                  rotativo do cartão, cheque especial), indicadores econômicos, cadastro 
                  positivo e regulamentações financeiras
                </li>
                <li>
                  <strong>Instituto Brasileiro de Geografia e Estatística (IBGE)</strong> — 
                  IPCA (inflação), custo de vida, dados socioeconômicos
                </li>
                <li>
                  <strong>Serasa e Boa Vista</strong> — score de crédito, indicadores de 
                  inadimplência, perfil do consumidor brasileiro
                </li>
                <li>
                  <strong>Febraban</strong> — taxas bancárias, produtos financeiros, 
                  estatísticas do setor bancário
                </li>
                <li>
                  <strong>Legislação Brasileira</strong> — Código de Defesa do Consumidor 
                  (Lei 8.078/90), Lei de Falências (Lei 11.101/05), resoluções do CMN e BCB
                </li>
                <li>
                  <strong>Procon</strong> — direitos do consumidor, canais de reclamação
                </li>
              </ul>
              <p>
                Sempre que possível, os artigos incluem links diretos para as fontes 
                utilizadas, permitindo que o leitor verifique as informações por conta própria.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Processo de Produção</h2>
              </div>
              <p>Nosso processo editorial segue estas etapas:</p>
              <ol>
                <li><strong>Planejamento:</strong> identificamos temas relevantes com base nas dúvidas mais comuns dos trabalhadores brasileiros</li>
                <li><strong>Pesquisa:</strong> consultamos fontes oficiais, dados atualizados e legislação vigente</li>
                <li><strong>Redação:</strong> o conteúdo é escrito em linguagem clara e acessível, evitando jargões financeiros desnecessários</li>
                <li><strong>Revisão:</strong> verificamos a precisão dos dados, fontes e cálculos apresentados</li>
                <li><strong>Publicação:</strong> o artigo é publicado com data e indicação das fontes utilizadas</li>
                <li><strong>Atualização:</strong> conteúdos são revisados periodicamente para garantir que estejam atualizados</li>
              </ol>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCcw className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Revisão e Atualização</h2>
              </div>
              <p>
                O Bolso do Trabalhador se compromete a manter seu conteúdo atualizado. 
                Artigos são revisados sempre que há mudanças significativas em taxas, 
                legislação ou regulamentações que afetam as informações apresentadas.
              </p>
              <p>
                A data da última revisão é informada no início de cada artigo. 
                Recomendamos que o leitor sempre verifique a data de atualização 
                ao consultar nosso conteúdo.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Política de Correções</h2>
              </div>
              <p>
                Nos esforçamos para que todo o conteúdo seja preciso, mas erros podem 
                ocorrer. Quando identificamos um erro — seja por mudança na legislação, 
                atualização de dados ou falha na produção — comprometemo-nos a:
              </p>
              <ul>
                <li>Corrigir o erro o mais rapidamente possível</li>
                <li>Informar claramente no artigo que houve uma correção</li>
                <li>Manter um registro da data da correção</li>
              </ul>
              <p>
                Se você identificar algum erro ou informação desatualizada em nossos 
                conteúdos, por favor, entre em contato pelo e-mail{' '}
                <a href="mailto:contato@bolsodotrabalhador.com.br" className="text-secondary">
                  contato@bolsodotrabalhador.com.br
                </a>
                .
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Links Afiliados e Transparência</h2>
              </div>
              <p>
                O Bolso do Trabalhador pode conter links afiliados para produtos e 
                serviços financeiros. Quando você clica em um link afiliado e realiza 
                uma contratação, podemos receber uma comissão — sem nenhum custo 
                adicional para você.
              </p>
              <p>
                Nossa política em relação a links afiliados:
              </p>
              <ul>
                <li>Links afiliados são claramente sinalizados quando relevantes</li>
                <li>A presença de um link afiliado nunca influencia a recomendação ou a qualidade da informação</li>
                <li>Não recomendamos produtos que não consideramos úteis para nosso público</li>
                <li>Todo conteúdo é produzido independentemente, sem interferência de parceiros comerciais</li>
              </ul>
              <p>
                A receita de links afiliados ajuda a manter o Bolso do Trabalhador 
                gratuito e acessível para todos os brasileiros.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Isenção de Responsabilidade</h2>
              </div>
              <p>
                O conteúdo do Bolso do Trabalhador tem caráter informativo e educacional. 
                Não constitui aconselhamento financeiro, jurídico ou profissional. 
                Recomendamos que o leitor consulte profissionais qualificados para 
                decisões financeiras específicas.
              </p>
              <p>
                Taxas, regras e condições de produtos financeiros podem mudar sem 
                aviso prévio. Sempre verifique as informações diretamente com as 
                instituições financeiras antes de tomar decisões.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
