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
    <div className="bg-muted/50 rounded-xl p-6 mb-8 border border-border/50">
      <div className="flex items-center gap-2 mb-4 text-primary font-bold">
        <List className="w-5 h-5" />
        <span>Índice do Artigo</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li 
              key={heading.id} 
              style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
            >
              <a 
                href={`#${heading.id}`}
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
