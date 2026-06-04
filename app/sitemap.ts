import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import { calculatorsConfig } from '@/lib/schemas-financeiro'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Blog posts
  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Calculadoras
  const calculadoras = Object.values(calculatorsConfig).map((cfg) => ({
    url: `${baseUrl}${cfg.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Cluster pages
  const clusters = [
    '/dividas',
    '/cartoes',
    '/emprestimos',
    '/score',
    '/organizacao-financeira',
    '/custo-de-vida',
    '/calculadoras',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/sobre',
    '/autor',
    '/politica-editorial',
    '/metodologia',
    '/contato',
    '/politica-privacidade',
    '/termos-uso',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.6,
  }))

  const categoryPages = getAllCategories().map((cat) => ({
    url: `${baseUrl}/blog/categoria/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...clusters, ...calculadoras, ...posts, ...categoryPages]
}
