import { SITE_URL } from '@/lib/config'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastModified?: string;
  category: string;
  content: string;
  keywords: string[];
  relatedCalculators: { name: string; href: string }[];
  faq?: { question: string; answer: string }[];
}

function loadPosts(): Post[] {
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx')).sort()

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug: String(data.slug ?? ''),
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      date: String(data.date ?? ''),
      lastModified: data.lastModified ? String(data.lastModified) : undefined,
      category: String(data.category ?? ''),
      keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : [],
      relatedCalculators: Array.isArray(data.relatedCalculators) ? data.relatedCalculators : [],
      faq: Array.isArray(data.faq) && data.faq.length > 0 ? data.faq : undefined,
      content: content.trim(),
    } as Post
  })
}

export const posts: Post[] = loadPosts()

export function getAllPosts(): Post[] {
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category)
}

export function getRelatedPosts(currentSlug: string, maxPosts: number = 3): Post[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []
  return posts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.category === current.category)
    .slice(0, maxPosts)
}

export interface Category {
  slug: string
  label: string
  count: number
  name: string
}

export function getAllCategories(): Category[] {
  const map = new Map<string, number>()
  posts.forEach((p) => {
    map.set(p.category, (map.get(p.category) || 0) + 1)
  })
  const slugs: Record<string, string> = {
    'Dívidas': 'dividas',
    'Cartões': 'cartoes',
    'Empréstimos': 'emprestimos',
    'Score': 'score',
    'Organização Financeira': 'organizacao-financeira',
    'Custo de Vida': 'custo-de-vida',
  }
  return Array.from(map.entries()).map(([label, count]) => ({
    slug: slugs[label] || label.toLowerCase().replace(/ /g, '-'),
    label,
    count,
    name: label,
  }))
}
