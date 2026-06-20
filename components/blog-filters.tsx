'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight, ChevronLeft, BookOpen, Search, X, Calendar, ArrowRight } from 'lucide-react'
import { BlogCardCover } from '@/components/blog-card-cover'
import { getCategoryConfig } from '@/lib/blog-categories'

interface PostSummary {
  slug: string
  title: string
  description: string
  date: string
  category: string
  keywords: string[]
}

const POSTS_PER_PAGE = 12

interface BlogFiltersProps {
  posts: PostSummary[]
  categories: { name: string; slug: string }[]
  initialQuery: string
}

export function BlogFilters({ posts, categories, initialQuery }: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    let result = posts

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim()
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords?.some((k) => k.toLowerCase().includes(q))
      )
    }

    return result
  }, [posts, selectedCategory, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedPosts = filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE)

  function handleCategoryClick(category: string) {
    setSelectedCategory(category === selectedCategory ? '' : category)
    setCurrentPage(1)
  }

  function handleSearchInput(value: string) {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  function clearSearch() {
    setSearchQuery('')
    setCurrentPage(1)
  }

  return (
    <>
      {/* Search */}
      <div className="max-w-md mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar artigos..."
            value={searchQuery}
            onChange={(e) => handleSearchInput(e.target.value)}
            className="pl-9 pr-10"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none [-webkit-overflow-scrolling:touch] snap-x">
          <button
            onClick={() => { setSelectedCategory(''); setCurrentPage(1) }}
            className={`shrink-0 snap-start px-4 py-1.5 text-xs font-medium rounded-full border transition-colors whitespace-nowrap ${
              !selectedCategory
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.name)}
              className={`shrink-0 snap-start px-4 py-1.5 text-xs font-medium rounded-full border transition-colors whitespace-nowrap ${
                selectedCategory === cat.name
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results counter */}
      <p className="text-center text-sm text-muted-foreground mb-8">
        Mostrando {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''}
        {searchQuery && <> para &ldquo;{searchQuery}&rdquo;</>}
        {selectedCategory && !searchQuery && <> em {selectedCategory}</>}
      </p>

      {/* Articles Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col h-full border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-200 overflow-hidden bg-card rounded-xl focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
              <Link href={`/blog/${post.slug}`} aria-label={post.title} className="focus:outline-none">
                <BlogCardCover
                  slug={post.slug}
                  title={post.title}
                  category={post.category}
                  className="rounded-t-xl"
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
                  <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
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
      ) : (
        <div className="text-center py-16 mb-8">
          <BookOpen className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h2>
          <p className="text-muted-foreground mb-6">
            Nenhum artigo corresponde{searchQuery ? <> a &ldquo;{searchQuery}&rdquo;</> : ''}{selectedCategory ? <> na categoria {selectedCategory}</> : ''}. Tente outros termos.
          </p>
          <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory(''); setCurrentPage(1) }}>
            Limpar filtros
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex justify-center items-center gap-2 mb-16" aria-label="Navegação do blog">
          {safePage > 1 ? (
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(safePage - 1)}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
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
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(safePage + 1)}>
              Próxima
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button variant="outline" size="sm" disabled>
              Próxima
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </nav>
      )}
    </>
  )
}
