import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { getPostBySlug, getRelatedPosts, getAllPosts } from '../../../lib/posts'
import DOMPurify from 'isomorphic-dompurify'
import { BlogAnalytics } from '@/components/blog-analytics'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getCategoryConfig, getCategorySlug } from '@/lib/blog-categories'
import { Calendar, Clock, ChevronLeft, ArrowRight, Calculator, CheckCircle, ExternalLink, Info, User, FileText, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { TableOfContents } from '@/components/table-of-contents'
import { FAQSection } from '@/components/faq-section'

const officialSources: Record<string, { name: string; url: string }[]> = {
  'Dívidas': [
    { name: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
    { name: 'Serasa', url: 'https://www.serasa.com.br' },
    { name: 'Procon', url: 'https://www.procon.sp.gov.br' },
  ],
  'Score': [
    { name: 'Serasa', url: 'https://www.serasa.com.br' },
    { name: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
    { name: 'Cadastro Positivo', url: 'https://www.bcb.gov.br/cidadaniafinanceira/cadastropositivo' },
  ],
  'Cartões': [
    { name: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
    { name: 'Febraban', url: 'https://www.febraban.org.br' },
  ],
  'Empréstimos': [
    { name: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
    { name: 'Febraban', url: 'https://www.febraban.org.br' },
    { name: 'INSS', url: 'https://www.gov.br/inss' },
  ],
  'Organização Financeira': [
    { name: 'Banco Central do Brasil', url: 'https://www.bcb.gov.br' },
  ],
  'Custo de Vida': [
    { name: 'IBGE', url: 'https://www.ibge.gov.br' },
  ],
}

const sourceDescriptions: Record<string, string> = {
  'Custo de Vida': 'Conteúdo revisado editorialmente pelo Bolso do Trabalhador com base em referências públicas, dados de mercado, critérios de planejamento financeiro pessoal e estimativas ilustrativas. As informações têm caráter educativo e não substituem uma análise individual. Valores de aluguel, contas e alimentação variam conforme cidade, bairro, imóvel e padrão de consumo.',
  'Score': 'Conteúdo revisado pela equipe do Bolso do Trabalhador com base em fontes oficiais e institucionais sobre crédito, Cadastro Positivo, score e educação financeira, como Banco Central do Brasil, Serasa e legislação vigente. Este conteúdo tem caráter informativo e educacional, não substituindo a consulta a um profissional qualificado. As regras, critérios de análise e metodologias de score podem sofrer alterações. Consulte sempre os canais oficiais.',
  'Organização Financeira': 'Conteúdo revisado editorialmente pelo Bolso do Trabalhador com base em referências públicas, educação financeira, critérios de planejamento pessoal e exemplos didáticos. As informações têm caráter educativo e não substituem análise individual. Os percentuais do método 50-30-20 devem ser adaptados conforme renda, custo de vida, dívidas e objetivos financeiros.',
  'Cartões': 'Conteúdo revisado editorialmente pelo Bolso do Trabalhador com base em referências públicas, educação financeira, regras gerais de produtos financeiros e critérios de uso consciente do crédito. As informações têm caráter educativo e não substituem análise individual. Juros, tarifas, limites, benefícios e condições podem variar conforme instituição, contrato e perfil do cliente.',
}

const defaultSourceDescription = 'Conteúdo revisado pela equipe do Bolso do Trabalhador com base em fontes oficiais: Banco Central do Brasil, IBGE, Serasa, Febraban e legislação vigente. Este conteúdo tem caráter informativo e educacional, não substituindo a consulta a um profissional qualificado. As taxas e regras podem sofrer alterações. Consulte sempre as fontes oficiais.'

const authorDescriptions: Record<string, string> = {
  'Custo de Vida': 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. O conteúdo tem caráter educativo e usa critérios de planejamento financeiro pessoal, estimativas ilustrativas e organização de orçamento para ajudar o leitor a simular a própria realidade.',
  'Score': 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. O conteúdo é baseado em fontes oficiais e institucionais sobre crédito, Cadastro Positivo, score e educação financeira, como Banco Central do Brasil, Serasa e legislação vigente.',
  'Organização Financeira': 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. O conteúdo tem caráter educativo e usa critérios de organização financeira pessoal, exemplos didáticos e simulações simples para ajudar o leitor a adaptar o método à própria realidade.',
  'Cartões': 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. O conteúdo tem caráter educativo e usa critérios de organização financeira, análise de custos, juros, tarifas e uso consciente do crédito.',
}

const defaultAuthorDescription = 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. Todo conteúdo é baseado em fontes oficiais (BCB, IBGE, Serasa, Febraban) e cálculos transparentes.'

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  const words = text.split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

function enhanceArticleHtml(html: string): string {
  let sanitized = DOMPurify.sanitize(html)
  let enhanced = sanitized

  enhanced = enhanced.replace(/<table(?!\s*[^>]*class=['"]premium-table-wrapper)/gi, '<div class="premium-table-wrapper"><table')
  enhanced = enhanced.replace(/<\/table>(?!\s*<\/div>)/gi, '</table></div>')

  enhanced = enhanced.replace(/<li><input[^>]*type="checkbox"[^>]*disabled[^>]*>\s*([\s\S]*?)<\/li>/gi, '<li class="premium-checklist-item"><span class="premium-checkbox" aria-hidden="true"></span><span>$1</span></li>')

  enhanced = enhanced.replace(/<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin:24px 0;">/gi, '<div class="callout callout-attention">')
  enhanced = enhanced.replace(/<div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;margin:24px 0">/gi, '<div class="callout callout-attention">')

  enhanced = enhanced.replace(/<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;margin:24px 0;">/gi, '<div class="callout callout-dica">')
  enhanced = enhanced.replace(/<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px;margin:24px 0">/gi, '<div class="callout callout-dica">')

  enhanced = enhanced.replace(/<th(?![^>]*scope)/gi, '<th scope="col"')

  enhanced = enhanced.replace(
    /<p>(Artigos relacionados|Para continuar sua pesquisa, veja tamb[eé]m):?<\/p>\s*<ul>([\s\S]*?)<\/ul>/gi,
    '<div class="related-links-premium"><p class="related-links-title">$1</p><ul>$2</ul></div>'
  )

  return enhanced
}

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Post não encontrado' }

  const ogImageUrl = `${SITE_URL}/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'Bolso do Trabalhador',
      locale: 'pt_BR',
      type: 'article',
      publishedTime: post.date,
      authors: ['Bolso do Trabalhador'],
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 6)
  const readingTime = estimateReadingTime(post.content)
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR')
  const lastReview = post.lastModified || post.date
  const lastReviewFormatted = new Date(lastReview).toLocaleDateString('pt-BR')
  const ogImageUrl = `${SITE_URL}/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.description,
    'datePublished': post.date,
    'dateModified': post.lastModified || post.date,
    'image': ogImageUrl,
    'url': `${SITE_URL}/blog/${post.slug}`,
    'inLanguage': 'pt-BR',
    'author': {
      '@type': 'Person',
      'name': 'Equipe Bolso do Trabalhador'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Bolso do Trabalhador',
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/og-image.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`
    }
  }

  const faqSchema = post.faq ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': post.faq.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  } : null

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <BlogAnalytics slug={post.slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.category, href: `/blog/categoria/${getCategorySlug(post.category)}` },
            { label: post.title }
          ]} 
        />

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4">

          {/* ── Article column ── */}
          <article className="lg:col-span-3">
            <header className="mb-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-muted-foreground">
                <Link href={`/blog/categoria/${getCategorySlug(post.category)}`}>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none hover:bg-secondary/20 cursor-pointer">
                    {post.category}
                  </Badge>
                </Link>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime} min de leitura
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Revisado em {lastReviewFormatted}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/40">
                <Link href="/autor" className="shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm hover:opacity-90 transition-opacity">
                    DG
                  </div>
                </Link>
                <div className="text-sm">
                  <p className="font-medium text-foreground">
                    Por <Link href="/autor" className="text-secondary hover:underline">Daniel Gonçalves</Link>
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {formattedDate} · {readingTime} min de leitura
                  </p>
                </div>
              </div>
            </header>

            <div className="mb-8 p-4 bg-muted/40 rounded-lg border border-border/60 text-sm text-muted-foreground leading-relaxed">
              <p>{post.description}</p>
            </div>

            {['Dívidas', 'Cartões', 'Empréstimos', 'Score'].includes(post.category) && (
              <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800 flex items-start gap-3">
                <Info className="w-5 h-5 shrink-0 mt-0.5 text-blue-500" />
                <p>
                  As informações apresentadas têm caráter educativo e não constituem recomendação financeira individual. 
                  Antes de contratar produtos financeiros, avalie sua situação e consulte fontes oficiais.
                </p>
              </div>
            )}

            <div 
              className="article-content prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary prose-strong:text-primary text-foreground/90 leading-relaxed mb-12"
              dangerouslySetInnerHTML={{ __html: enhanceArticleHtml(post.content) }}
            />

            <div className="mb-12 p-5 bg-muted/30 rounded-xl border border-border/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  DG
                </div>
                <div>
                  <p className="font-semibold text-foreground">Daniel Gonçalves</p>
                  <p className="text-xs text-muted-foreground">Criador do Bolso do Trabalhador</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {authorDescriptions[post.category] || defaultAuthorDescription}
                {' '}<Link href="/autor" className="text-secondary hover:underline">Conheça o autor</Link>.
              </p>
            </div>

            {post.faq && (
              <FAQSection items={post.faq} pageUrl={`${SITE_URL}/blog/${post.slug}`} />
            )}

            <div className="mb-12 p-6 bg-muted/30 rounded-lg border border-border/60 text-sm text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground mb-1">Sobre esta informação</p>
              <p>{sourceDescriptions[post.category] || defaultSourceDescription}</p>
              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="font-medium text-foreground mb-2">Fontes oficiais consultadas:</p>
                <ul className="space-y-1">
                  {(officialSources[post.category] || []).map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:underline inline-flex items-center gap-1 text-xs"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {source.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2">
                <Link href="/metodologia" className="text-secondary hover:underline font-medium">Veja nossa metodologia de cálculo</Link> e <Link href="/#calculadoras" className="text-secondary hover:underline font-medium">acesse todas as calculadoras</Link>.
              </p>
            </div>

            <div className="my-12 p-6 md:p-8 bg-gradient-to-br from-primary to-primary/95 rounded-2xl text-primary-foreground shadow-xl border border-primary/80">
              <Calculator className="w-8 h-8 text-secondary mb-3" />
              <h2 className="text-xl font-bold mb-2">Simule agora gratuitamente</h2>
              <p className="text-primary-foreground/80 mb-6 max-w-lg">
                Utilize nossas ferramentas gratuitas para simular cenários e tomar decisões financeiras mais conscientes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.relatedCalculators.map((calc) => (
                  <Link 
                    key={calc.href} 
                    href={calc.href}
                    className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                  >
                    <span className="font-medium text-sm">{calc.name}</span>
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border/40">
                <h2 className="text-2xl font-bold text-primary mb-8">Veja também</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.slice(0, 4).map((rPost) => (
                    <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded-xl">
                      <Card className="h-full transition-all hover:shadow-md hover:border-primary/30 group-hover:-translate-y-0.5 border-border/60 flex flex-col">
                        <CardHeader className="p-5 flex-1">
                          <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-2 ${getCategoryConfig(rPost.category).color} ${getCategoryConfig(rPost.category).textColor}`}>
                            {rPost.category}
                          </span>
                          <CardTitle className="text-base leading-snug group-hover:text-secondary transition-colors">
                            {rPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-5 pb-5 pt-0">
                          <span className="text-sm text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Ler mais <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* ── Sidebar column ── */}
          <aside className="lg:col-span-1">
            <div className="space-y-6 lg:sticky lg:top-24">
              
              {/* Author card */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    DG
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Daniel Gonçalves</p>
                    <p className="text-xs text-muted-foreground">Autor</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Criador do Bolso do Trabalhador, portal independente de educação financeira e benefícios.
                </p>
                <Link href="/autor" className="text-xs font-medium text-secondary hover:underline inline-flex items-center gap-1">
                  Ver perfil completo <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Table of Contents */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  Neste artigo
                </h3>
                <TableOfContents variant="sidebar" />
              </div>

              {/* Related calculators */}
              {post.relatedCalculators.length > 0 && (
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-secondary" />
                    Calculadoras
                  </h3>
                  <ul className="space-y-2">
                    {post.relatedCalculators.map((calc) => (
                      <li key={calc.href}>
                        <Link
                          href={calc.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                        >
                          <ArrowRight className="w-3 h-3 text-secondary/70 shrink-0" />
                          <span>{calc.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related articles */}
              {relatedPosts.length > 0 && (
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4 text-secondary" />
                    Artigos relacionados
                  </h3>
                  <ul className="space-y-3">
                    {relatedPosts.slice(0, 5).map((rPost) => (
                      <li key={rPost.slug}>
                        <Link
                          href={`/blog/${rPost.slug}`}
                          className="block text-sm text-muted-foreground hover:text-secondary transition-colors leading-snug"
                        >
                          <span className="font-medium text-foreground/90 hover:text-secondary block">{rPost.title}</span>
                          <span className="text-xs text-muted-foreground/70 mt-0.5 block">{rPost.category} · {new Date(rPost.date).toLocaleDateString('pt-BR')}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
