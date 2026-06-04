import { getCategoryConfig } from '@/lib/blog-categories'
import { Wallet } from 'lucide-react'

interface BlogCardCoverProps {
  slug: string
  title: string
  category: string
  className?: string
  priority?: boolean
}

export function BlogCardCover({ slug, title, category, className = '', priority = false }: BlogCardCoverProps) {
  const config = getCategoryConfig(category)

  const shortTitle = title.length > 40 ? title.substring(0, 37) + '…' : title

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: '1200/630' }}
      aria-hidden="true"
      {...(priority ? { fetchPriority: 'high' as any } : {})}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.15) 20px, rgba(255,255,255,0.15) 21px)`,
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Wallet className="text-white/20 w-32 h-32" aria-hidden="true" />
      </div>

      <div className="absolute top-3 right-3">
        <Wallet className="text-white/60 w-8 h-8" aria-hidden="true" />
      </div>

      <div className="absolute top-3 left-3">
        <span
          className="inline-block bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/30"
        >
          {config.label}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-semibold leading-tight line-clamp-2 drop-shadow-md">
          {shortTitle}
        </p>
      </div>

      <div className="absolute bottom-2 right-3">
        <span className="text-white/30 text-[10px] font-medium">
          bolsodotrabalhador.online
        </span>
      </div>
    </div>
  )
}
