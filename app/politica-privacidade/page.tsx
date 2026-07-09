import { Metadata } from 'next'
import { AdPlaceholder } from '@/components/ad-placeholder'
import { SITE_URL, SITE_EMAIL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade do Bolso do Trabalhador. Saiba como tratamos seus dados e garantimos sua privacidade.',
  alternates: {
    canonical: `${SITE_URL}/politica-privacidade`,
  },
  openGraph: {
    title: 'Política de Privacidade | Bolso do Trabalhador',
    description: 'Saiba como tratamos seus dados e garantimos sua privacidade no Bolso do Trabalhador.',
    url: `${SITE_URL}/politica-privacidade`,
    siteName: 'Bolso do Trabalhador',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Política de Privacidade — Bolso do Trabalhador' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Política de Privacidade | Bolso do Trabalhador',
    description: 'Saiba como tratamos seus dados e garantimos sua privacidade.',
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: Janeiro de 2026
            </p>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mb-8" slot="privacidade-top" />

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground mb-4">
                O Bolso do Trabalhador (&quot;nós&quot;, &quot;nosso&quot; ou &quot;site&quot;) está comprometido em proteger 
                sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e 
                protegemos as informações quando você utiliza nosso site bolsodotrabalhador.online.
              </p>
              <p className="text-muted-foreground">
                Ao utilizar nosso site, você concorda com a coleta e uso de informações de acordo 
                com esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">2.1. Dados de Cálculo</h3>
              <p className="text-muted-foreground mb-4">
                Os dados inseridos nas calculadoras (salários, datas, valores) são processados 
                exclusivamente no seu navegador. <strong>Não armazenamos, transmitimos ou coletamos 
                essas informações em nossos servidores.</strong> Todos os cálculos são realizados 
                localmente no seu dispositivo.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2. Dados de Navegação</h3>
              <p className="text-muted-foreground mb-4">
                Podemos coletar automaticamente certas informações quando você visita nosso site, incluindo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Endereço IP (anonimizado)</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Data e hora de acesso</li>
                <li>Página de referência</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.3. Cookies</h3>
              <p className="text-muted-foreground">
                Utilizamos cookies essenciais para o funcionamento do site e cookies de análise 
                (como Google Analytics) para entender como os usuários interagem com nosso conteúdo. 
                Você pode configurar seu navegador para recusar cookies, embora isso possa afetar 
                algumas funcionalidades do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Como Usamos as Informações</h2>
              <p className="text-muted-foreground mb-4">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Fornecer e manter nosso serviço</li>
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar o uso do site para aprimorar nosso conteúdo</li>
                <li>Exibir anúncios relevantes (através de parceiros como Google AdSense)</li>
                <li>Detectar e prevenir fraudes ou problemas técnicos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Publicidade</h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos serviços de publicidade de terceiros, incluindo o Google AdSense, para 
                exibir anúncios em nosso site. Esses parceiros podem usar cookies para exibir 
                anúncios baseados em suas visitas anteriores a este e outros sites.
              </p>
              <p className="text-muted-foreground">
                Você pode optar por desativar a publicidade personalizada visitando as 
                Configurações de Anúncios do Google em{' '}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  google.com/settings/ads
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto conforme descrito nesta política ou quando exigido por lei. Podemos 
                compartilhar dados agregados e anonimizados com parceiros para fins de análise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Segurança</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais para proteger as 
                informações contra acesso não autorizado, alteração, divulgação ou destruição. 
                Nosso site utiliza certificado SSL para criptografar a comunicação entre seu 
                navegador e nossos servidores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Seus Direitos</h2>
              <p className="text-muted-foreground mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Links para Outros Sites</h2>
              <p className="text-muted-foreground">
                Nosso site pode conter links para outros sites que não são operados por nós. 
                Não temos controle sobre o conteúdo e práticas desses sites e não podemos 
                aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações nesta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos 
                sobre quaisquer alterações publicando a nova política nesta página e atualizando 
                a data de &quot;Última atualização&quot; no topo deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contato</h2>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco 
                através do e-mail:{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
                  {SITE_EMAIL}
                </a>
              </p>
            </section>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mt-8" slot="privacidade-bottom" />
        </div>
      </div>
    </div>
  )
}
