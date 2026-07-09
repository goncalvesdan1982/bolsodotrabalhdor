import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const CATEGORY_COLORS: Record<string, { accent: string; bg: string }> = {
  'Dívidas':        { accent: '#b91c1c', bg: '#7f1d1d' },
  'Cartões':         { accent: '#c2410c', bg: '#7c2d12' },
  'Empréstimos':     { accent: '#b45309', bg: '#78350f' },
  'Score':           { accent: '#1d4ed8', bg: '#1e3a5f' },
  'Organização Financeira': { accent: '#0f766e', bg: '#134e4a' },
  'Custo de Vida':   { accent: '#0e7490', bg: '#164e63' },
}

const FALLBACK = { accent: '#6b7280', bg: '#374151' }

function getColors(category: string) {
  return CATEGORY_COLORS[category] || FALLBACK
}

async function loadFont(weight: number): Promise<ArrayBuffer | null> {
  try {
    const family = weight === 700 ? 'Inter:wght@700' : weight === 600 ? 'Inter:wght@600' : 'Inter:wght@400'
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}&display=swap`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
    }).then(r => r.text())
    const match = css.match(/src:\s*url\(([^)]+)\)/)
    if (!match) return null
    const buf = await fetch(match[1]).then(r => r.arrayBuffer())
    return buf
  } catch {
    return null
  }
}

function truncateTitle(title: string, maxLen = 90): string {
  return title.length > maxLen ? title.slice(0, maxLen).replace(/\s+\S*$/, '') + '…' : title
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  const category = searchParams.get('category') || ''

  if (!title) {
    return new Response('Missing title parameter', { status: 400 })
  }

  const colors = getColors(category)
  const displayTitle = truncateTitle(title)
  const [font400, font600, font700] = await Promise.all([
    loadFont(400),
    loadFont(600),
    loadFont(700),
  ])

  const fonts: { name: string; data: ArrayBuffer; weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900; style: 'normal' }[] = []
  if (font400) fonts.push({ name: 'Inter', data: font400, weight: 400 as const, style: 'normal' })
  if (font600) fonts.push({ name: 'Inter', data: font600, weight: 600 as const, style: 'normal' })
  if (font700) fonts.push({ name: 'Inter', data: font700, weight: 700 as const, style: 'normal' })
  const fontFamily = fonts.length ? 'Inter' : 'system-ui, sans-serif'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily,
          background: 'linear-gradient(135deg, #030712 0%, #111827 50%, #1f2937 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: '100%',
            background: colors.accent,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '48px 64px 40px 56px',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              B
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 400,
                color: '#9ca3af',
                letterSpacing: '0.05em',
              }}
            >
              bolsodotrabalhador.online
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: 900,
            }}
          >
            {category && (
              <div
                style={{
                  display: 'flex',
                  padding: '6px 16px',
                  borderRadius: 999,
                  background: colors.bg,
                  color: colors.accent,
                  fontSize: 16,
                  fontWeight: 600,
                  width: 'fit-content',
                  border: `1px solid ${colors.accent}33`,
                }}
              >
                {category}
              </div>
            )}
            <h1
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#f9fafb',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: 0,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {displayTitle}
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderTop: '1px solid #1f2937',
              paddingTop: 16,
            }}
          >
            <span style={{ fontSize: 14, color: '#6b7280' }}>
              Portal informativo independente
            </span>
            <span style={{ fontSize: 14, color: '#6b7280' }}>
              {new Date().getFullYear()} &copy; Bolso do Trabalhador
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
      headers: {
        'cache-control': 'public, max-age=31536000, immutable',
      },
    },
  )
}
