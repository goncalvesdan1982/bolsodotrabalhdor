import { Metadata } from 'next'
import { AdPlaceholder } from '@/components/ad-placeholder'
import { SITE_URL, SITE_EMAIL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Termos de Uso | Bolso do Trabalhador',
  description: 'Termos de Uso do Bolso do Trabalhador. Conheça as regras e condições para utilização do nosso site.',
  alternates: {
    canonical: `${SITE_URL}/termos-uso`,
  },
  openGraph: {
    title: 'Termos de Uso | Bolso do Trabalhador',
    description: 'Conheça as regras e condições para utilização do site Bolso do Trabalhador.',
    url: `${SITE_URL}/termos-uso`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Termos de Uso — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termos de Uso | Bolso do Trabalhador',
    description: 'Conheça as regras e condições para utilização do nosso site.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function TermosUsoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Janeiro de 2026
            </p>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mb-8" slot="termos-top" />

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground mb-4">
                Ao acessar e utilizar o site Bolso do Trabalhador (bolsodotrabalhador.online), 
                você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não 
                concordar com qualquer parte destes termos, não deverá utilizar nosso site.
              </p>
              <p className="text-muted-foreground">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no site. O uso continuado do 
                site após tais modificações constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground mb-4">
                O Bolso do Trabalhador oferece ferramentas online gratuitas para cálculos 
                e simulações financeiras voltadas à educação financeira do trabalhador 
                brasileiro, incluindo mas não se limitando a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Simulação de investimentos em renda fixa</li>
                <li>Calculadora de juros compostos</li>
                <li>Simulação de financiamento imobiliário</li>
                <li>Calculadora de orçamento mensal</li>
                <li>Planejamento de aposentadoria</li>
                <li>Simulação de CDB, LCI e LCA</li>
                <li>Calculadora de câmbio</li>
                <li>Simulação de consórcio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Natureza Informativa</h2>
              <p className="text-muted-foreground mb-4">
                <strong>IMPORTANTE:</strong> Os resultados fornecidos pelas calculadoras deste site 
                têm caráter exclusivamente informativo e educacional. Eles NÃO constituem:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Assessoria jurídica ou contábil</li>
                <li>Parecer legal ou fiscal</li>
                <li>Garantia de valores exatos a serem recebidos</li>
                <li>Substituto para consulta profissional</li>
              </ul>
              <p className="text-muted-foreground">
                Recomendamos fortemente que você consulte um profissional qualificado (contador, 
                consultor financeiro ou economista) para questões específicas sobre sua 
                situação financeira.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Precisão das Informações</h2>
              <p className="text-muted-foreground mb-4">
                Embora nos esforcemos para manter as calculadoras atualizadas com as taxas 
                e índices financeiros vigentes, não garantimos que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>As informações estejam sempre atualizadas em tempo real</li>
                <li>Os cálculos sejam 100% precisos em todas as situações</li>
                <li>O site esteja livre de erros técnicos ou de programação</li>
                <li>Os resultados sejam aplicáveis à sua situação específica</li>
              </ul>
              <p className="text-muted-foreground">
                As taxas e índices utilizados são baseados nos valores vigentes e podem 
                sofrer alterações conforme determinação dos órgãos reguladores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground mb-4">
                O Bolso do Trabalhador, seus proprietários, funcionários e colaboradores NÃO 
                serão responsáveis por:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do site</li>
                <li>Perdas financeiras baseadas nos resultados das calculadoras</li>
                <li>Decisões tomadas com base nas informações fornecidas</li>
                <li>Erros nos cálculos ou informações desatualizadas</li>
                <li>Interrupções no serviço ou indisponibilidade do site</li>
              </ul>
              <p className="text-muted-foreground">
                O uso do site é por sua conta e risco. Você é o único responsável por verificar 
                a precisão dos resultados e tomar decisões informadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens, 
                códigos e software,                 é de propriedade do Bolso do Trabalhador ou de seus  
                licenciadores e está protegido por leis de direitos autorais e propriedade 
                intelectual. É proibida a reprodução, distribuição ou modificação do conteúdo 
                sem autorização prévia por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Uso Permitido</h2>
              <p className="text-muted-foreground mb-4">
                Você concorda em utilizar o site apenas para fins legais e de acordo com estes 
                termos. É proibido:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Tentar acessar áreas restritas do site ou seus sistemas</li>
                <li>Usar o site para fins fraudulentos ou ilegais</li>
                <li>Transmitir vírus ou códigos maliciosos</li>
                <li>Sobrecarregar o servidor com requisições excessivas</li>
                <li>Copiar ou reproduzir o site para fins comerciais</li>
                <li>Utilizar robôs ou scrapers sem autorização</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disponibilidade do Serviço</h2>
              <p className="text-muted-foreground">
                Não garantimos que o site estará disponível de forma ininterrupta ou livre de 
                erros. Reservamo-nos o direito de suspender, modificar ou descontinuar qualquer 
                aspecto do site a qualquer momento, sem aviso prévio e sem responsabilidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Links Externos</h2>
              <p className="text-muted-foreground">
                Nosso site pode conter links para sites de terceiros. Esses links são fornecidos 
                apenas para conveniência e não implicam endosso ou responsabilidade pelo conteúdo 
                de sites externos. Recomendamos que você leia os termos de uso e políticas de 
                privacidade de qualquer site que visitar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Lei Aplicável</h2>
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da República 
                Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida 
                à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indenização</h2>
              <p className="text-muted-foreground">
                Você concorda em indenizar e isentar o Bolso do Trabalhador de quaisquer 
                reivindicações, danos, perdas ou despesas (incluindo honorários advocatícios) 
                decorrentes do seu uso do site ou violação destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contato</h2>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco 
                através do e-mail:{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
                  {SITE_EMAIL}
                </a>
              </p>
            </section>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mt-8" slot="termos-bottom" />
        </div>
      </div>
    </div>
  )
}
