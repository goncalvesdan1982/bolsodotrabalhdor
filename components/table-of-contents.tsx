'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const elements = Array.from(article.querySelectorAll('h2, h3'))
      .map((element) => {
        const id = element.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
        element.id = id
        return {
          id,
          text: element.textContent || '',
          level: Number(element.tagName.charAt(1)),
        }
      })
    setHeadings(elements)
  }, [])

  if (headings.length < 2) return null

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
        <nav id="article-toc-content" className="border-t border-border px-4 py-3">
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  )
}
