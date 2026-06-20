import Link from 'next/link'
import { Metadata } from 'next'
import { SITE_URL } from '@/lib/config'
import { getPostsByCategory, getAllCategories } from '../../../../lib/posts'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, BookOpen, Calendar, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BlogCardCover } from '@/components/blog-card-cover'
import { getCategoryConfig } from '@/lib/blog-categories'

const POSTS_PER_PAGE = 12

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params, searchParams }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const { page } = await searchParams
  const categories = getAllCategories()
  const category = categories.find(c => c.slug === slug)
  
  if (!category) return { title: 'Categoria não encontrada' }

  const currentPage = Math.max(1, parseInt(page || '1'))
  const title = currentPage > 1
    ? `Artigos sobre ${category.label} - Página ${currentPage} | Bolso do Trabalhador`
    : `Artigos sobre ${category.label} | Bolso do Trabalhador`

  return {
    title,
    description: `Confira todos os nossos artigos e guias sobre ${category.label}. Educação financeira prática para o dia a dia do trabalhador brasileiro.`,
    alternates: {
      canonical: `${SITE_URL}/blog/categoria/${slug}${currentPage > 1 ? `?page=${currentPage}` : ''}`,
    },
    openGraph: {
      title,
      description: `Confira todos os nossos artigos e guias sobre ${category.label}. Educação financeira prática.`,
      url: `${SITE_URL}/blog/categoria/${slug}${currentPage > 1 ? `?page=${currentPage}` : ''}`,
      siteName: 'Bolso do Trabalhador',
      locale: 'pt_BR',
      type: 'website',
      images: [{
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: category.label,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Confira todos os nossos artigos e guias sobre ${category.label}.`,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params
  const { page } = await searchParams
  const currentPage = Math.max(1, parseInt(page || '1'))
  const categories = getAllCategories()
  const category = categories.find(c => c.slug === slug)
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Categoria não encontrada</h1>
        <Button asChild className="mt-4">
          <Link href="/blog">Voltar para o blog</Link>
        </Button>
      </div>
    )
  }

  const allPosts = getPostsByCategory(category.label)
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const posts = allPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE)

  const prevPageUrl = safePage > 1
    ? (safePage === 2 ? `/blog/categoria/${slug}` : `/blog/categoria/${slug}?page=${safePage - 1}`)
    : null
  const nextPageUrl = safePage < totalPages
    ? `/blog/categoria/${slug}?page=${safePage + 1}`
    : null

  return (
    <div className="container mx-auto px-4 py-12">
      {prevPageUrl && <link rel="prev" href={prevPageUrl} />}
      {nextPageUrl && <link rel="next" href={nextPageUrl} />}

      <Breadcrumbs 
        items={[
          { label: 'Blog', href: '/blog' },
          { label: category.label }
        ]} 
      />

      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-4 px-3 py-1 text-secondary border-secondary">
          {category.label}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-4 capitalize">
          {category.label}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Tudo o que você precisa saber sobre {category.label.toLowerCase()} para organizar suas finanças e fazer escolhas mais conscientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col h-full border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
          >
            <Link href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
              <BlogCardCover
                slug={post.slug}
                title={post.title}
                category={post.category}
              />
            </Link>
            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${getCategoryConfig(post.category).color} ${getCategoryConfig(post.category).textColor}`}>
                  {post.category}
                </span>
                <time dateTime={post.date} className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </time>
              </div>
              <h2 className="text-base font-bold text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded">
                  {post.title}
                </Link>
              </h2>
              {post.description && (
                <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                  {post.description}
                </p>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto text-sm font-semibold text-secondary hover:underline inline-flex items-center gap-1 pt-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring rounded"
                aria-label={`Ler artigo: ${post.title}`}
              >
                Ler artigo
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-2 mb-16" aria-label="Navegação da categoria">
          {safePage > 1 ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={prevPageUrl!}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                Anterior
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
          )}
          <span className="text-sm text-muted-foreground px-4">
            Página {safePage} de {totalPages}
          </span>
          {safePage < totalPages ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={nextPageUrl!}>
                Próxima
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              Próxima
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </nav>
      )}

      <div className="bg-gradient-to-br from-primary to-primary/95 rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-xl border border-primary/80">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-secondary rounded-xl">
            <BookOpen className="w-8 h-8 text-secondary-foreground" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Quer simular antes de decidir?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Nossas calculadoras financeiras são gratuitas e ajudam você a planejar cada passo.
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
