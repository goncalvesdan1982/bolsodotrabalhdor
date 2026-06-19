import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { getPostBySlug, getRelatedPosts } from '../../../lib/posts'
import { Button } from '@/components/ui/button'
import { BlogAnalytics } from '@/components/blog-analytics'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, ChevronLeft, ArrowRight, Calculator, HelpCircle, CheckCircle, ExternalLink, Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { TableOfContents } from '@/components/table-of-contents'

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
    { name: 'IBGE', url: 'https://www.ibge.gov.br' },
  ],
  'Custo de Vida': [
    { name: 'IBGE', url: 'https://www.ibge.gov.br' },
    { name: 'FGV', url: 'https://portal.fgv.br' },
  ],
}

const sourceDescriptions: Record<string, string> = {
  'Score': 'Conteúdo revisado pela equipe do Bolso do Trabalhador com base em fontes oficiais e institucionais sobre crédito, Cadastro Positivo, score e educação financeira, como Banco Central do Brasil, Serasa e legislação vigente. Este conteúdo tem caráter informativo e educacional, não substituindo a consulta a um profissional qualificado. As regras, critérios de análise e metodologias de score podem sofrer alterações. Consulte sempre os canais oficiais.',
}

const defaultSourceDescription = 'Conteúdo revisado pela equipe do Bolso do Trabalhador com base em fontes oficiais: Banco Central do Brasil, IBGE, Serasa, Febraban e legislação vigente. Este conteúdo tem caráter informativo e educacional, não substituindo a consulta a um profissional qualificado. As taxas e regras podem sofrer alterações. Consulte sempre as fontes oficiais.'

const authorDescriptions: Record<string, string> = {
  'Score': 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. O conteúdo é baseado em fontes oficiais e institucionais sobre crédito, Cadastro Positivo, score e educação financeira, como Banco Central do Brasil, Serasa e legislação vigente.',
}

const defaultAuthorDescription = 'Este artigo foi produzido por Daniel Gonçalves, criador do Bolso do Trabalhador. Todo conteúdo é baseado em fontes oficiais (BCB, IBGE, Serasa, Febraban) e cálculos transparentes.'

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  const words = text.split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Post não encontrado' }

  const ogImageUrl = `${SITE_URL}/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(post.category)}`

  return {
    title: `${post.title} | Bolso do Trabalhador`,
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

  const relatedPosts = getRelatedPosts(post.slug, 3)
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Blog', 'item': `${SITE_URL}/blog` },
      { '@type': 'ListItem', 'position': 2, 'name': post.category, 'item': `${SITE_URL}/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}` },
      { '@type': 'ListItem', 'position': 3, 'name': post.title, 'item': `${SITE_URL}/blog/${post.slug}` },
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.category, href: `/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}` },
            { label: post.title }
          ]} 
        />

          <article>
          <header className="mb-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-muted-foreground">
              <Link href={`/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
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

          <div className="mb-8 p-4 bg-muted/40 border-l-4 border-secondary rounded-r-lg text-sm text-muted-foreground leading-relaxed">
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

          <TableOfContents />

          <div 
            className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary prose-strong:text-primary prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-tr:even:bg-muted/30 text-foreground/90 leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
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
        </article>

        {post.faq && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <HelpCircle className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Perguntas Frequentes (FAQ)</h2>
            </div>
            <div className="space-y-4">
              {post.faq.map((item, index) => (
                <div key={index} className="p-5 bg-background rounded-xl border border-border/60">
                  <h3 className="font-bold text-primary mb-2">{item.question}</h3>
                  <div className="text-muted-foreground prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12 p-6 bg-muted/30 border-l-4 border-secondary rounded-r-lg text-sm text-muted-foreground leading-relaxed">
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

        <div className="my-12 p-6 md:p-8 bg-primary rounded-2xl text-primary-foreground shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-bold">Simule agora gratuitamente</h3>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Utilize nossas ferramentas gratuitas para simular cenários e tomar decisões financeiras mais conscientes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {post.relatedCalculators.map((calc) => (
              <Link 
                key={calc.href} 
                href={calc.href}
                className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all group"
              >
                <span className="font-medium">{calc.name}</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h3 className="text-2xl font-bold text-primary mb-8">Veja também</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Card key={rPost.slug} className="hover:shadow-md transition-shadow border-border/60 flex flex-col h-full">
                  <CardHeader className="p-5 flex-1">
                    <div className="text-xs text-secondary font-semibold mb-2 uppercase tracking-wider">{rPost.category}</div>
                    <CardTitle className="text-lg leading-snug">
                      <Link href={`/blog/${rPost.slug}`} className="hover:text-secondary transition-colors">
                        {rPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0">
                    <Link href={`/blog/${rPost.slug}`} className="text-sm text-secondary font-medium flex items-center gap-1 group">
                      Ler mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
