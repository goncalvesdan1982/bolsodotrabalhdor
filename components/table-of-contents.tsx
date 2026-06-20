'use client'

import { useEffect, useState } from 'react'
import { List, ChevronDown } from 'lucide-react'

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [isOpen, setIsOpen] = useState(true)

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
    <div className="bg-muted/50 rounded-xl mb-8 border border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 p-4 text-primary font-bold hover:bg-muted/80 transition-colors rounded-xl"
        aria-expanded={isOpen}
        aria-controls="toc-content"
      >
        <span className="flex items-center gap-2">
          <List className="w-5 h-5" />
          <span>Índice do Artigo</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? '' : '-rotate-90'
          }`}
        />
      </button>
      <div
        id="toc-content"
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4">
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
    </div>
  )
}
