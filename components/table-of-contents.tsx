'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  variant?: 'inline' | 'sidebar'
}

export function TableOfContents({ variant = 'inline' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = Array.from(article.querySelectorAll('h2, h3'))
      .map((element) => {
        const id = (element.textContent?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || '').replace(/^-+|-+$/g, '')
        element.id = id
        return {
          id,
          text: element.textContent || '',
          level: Number(element.tagName.charAt(1)),
        }
      })
    setHeadings(elements)
  }, [])

  useEffect(() => {
    if (variant !== 'sidebar') return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )
    for (const h of headings) {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [headings, variant])

  if (headings.length < 2) return null

  if (variant === 'sidebar') {
    return (
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block rounded px-3 py-1.5 text-xs leading-relaxed transition-colors hover:bg-secondary/10 ${
                  activeId === heading.id
                    ? 'bg-secondary/10 text-secondary font-medium'
                    : heading.level === 3
                      ? 'ml-4 text-muted-foreground/70'
                      : 'text-foreground/80 font-medium'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <section className="rounded-xl border border-border bg-card shadow-sm mb-8">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors rounded-xl"
        aria-expanded={isOpen}
        aria-controls="article-toc-content"
      >
        <span className="flex items-center gap-2 font-semibold text-foreground">
          <List className="w-4 h-4" />
          <span>Índice do artigo</span>
        </span>
        <span className="text-sm text-muted-foreground font-medium">
          {isOpen ? 'Ocultar' : 'Mostrar'}
        </span>
      </button>

      {isOpen && (
        <nav id="article-toc-content" className="border-t border-border px-3 py-3">
          <ul className="space-y-1">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    heading.level === 3
                      ? 'ml-5 text-sm text-muted-foreground hover:text-primary'
                      : 'text-sm font-medium text-primary'
                  }`}
                >
                  <span
                    className={`shrink-0 rounded-full transition-colors group-hover:bg-primary ${
                      heading.level === 3
                        ? 'h-1 w-1 bg-primary/40'
                        : 'h-1.5 w-1.5 bg-primary/50'
                    }`}
                  />
                  <span>{heading.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  )
}
