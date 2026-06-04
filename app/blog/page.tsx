import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { getAllPosts, getAllCategories } from '../../lib/posts'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { BlogFilters } from '@/components/blog-filters'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>
}): Promise<Metadata> {
  const params = await searchParams
  const currentPage = Math.max(1, parseInt(params.page || '1'))
  const query = (params.q || '').trim().toLowerCase()

  const title = currentPage > 1 && !query
    ? `Blog - Página ${currentPage} | Bolso do Trabalhador`
    : 'Blog - Educação Financeira Prática | Bolso do Trabalhador'

  const canonical = currentPage > 1 && !query
    ? `${SITE_URL}/blog?page=${currentPage}`
    : `${SITE_URL}/blog`

  return {
    title,
    description: 'Artigos sobre finanças pessoais para trabalhadores brasileiros: dívidas, cartões de crédito, score, empréstimos, orçamento familiar e educação financeira.',
    alternates: { canonical },
    openGraph: {
      title: query ? `Busca: ${query} | Bolso do Trabalhador` : currentPage > 1 ? `Blog - Página ${currentPage} | Bolso do Trabalhador` : 'Blog — Educação Financeira | Bolso do Trabalhador',
      description: 'Artigos sobre finanças pessoais para trabalhadores brasileiros: dívidas, cartões de crédito, score, empréstimos e organização financeira.',
      url: canonical,
      siteName: 'Bolso do Trabalhador',
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Blog — Bolso do Trabalhador' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: query ? `Busca: ${query} | Bolso do Trabalhador` : currentPage > 1 ? `Blog - Página ${currentPage} | Bolso do Trabalhador` : 'Blog — Educação Financeira | Bolso do Trabalhador',
      description: 'Artigos sobre finanças pessoais para trabalhadores brasileiros.',
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; q?: string }>
}) {
  const params = await searchParams
  const query = (params.q || '').trim().toLowerCase()

  const allPosts = getAllPosts()
  const categories = getAllCategories()

  const postSummaries = allPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    category: p.category,
    keywords: p.keywords,
  }))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-4 px-3 py-1 text-secondary border-secondary">
          Educacional
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4">
          Blog — Educação Financeira
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Artigos práticos e diretos para ajudar você a organizar suas finanças, sair das dívidas e tomar decisões financeiras mais inteligentes.
        </p>
      </div>

      <BlogFilters posts={postSummaries} categories={categories} initialQuery={query} />

      <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-secondary rounded-xl">
            <BookOpen className="w-8 h-8 text-secondary-foreground" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Quer simular antes de decidir?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Nossas calculadoras financeiras são gratuitas, precisas e ajudam você a planejar cada passo.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
            <Link href="/#calculadoras">
              Ver todas as calculadoras
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
