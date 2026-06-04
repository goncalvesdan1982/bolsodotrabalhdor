const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type EventParams = Record<string, string | number | boolean | undefined>

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag(...args)
  }
}

export function pageview(path: string) {
  if (!GA_ID) return
  gtag('config', GA_ID, {
    page_path: path,
  })
}

export function event(action: string, params?: EventParams) {
  if (!GA_ID) return
  gtag('event', action, params)
}

export function calculadoraUtilizada(nome: string) {
  event('calculadora_utilizada', { nome_calculadora: nome, timestamp: Date.now() })
}

export function resultadoGerado(nome: string) {
  event('resultado_gerado', { nome_calculadora: nome, timestamp: Date.now() })
}

export function artigoVisualizado(slug: string) {
  event('artigo_visualizado', { slug_artigo: slug, timestamp: Date.now() })
}

export function scrollProfundidade(profundidade: 50 | 90) {
  event(`scroll_${profundidade}`, { timestamp: Date.now() })
}

export function resultadoCompartilhado() {
  event('resultado_compartilhado', { timestamp: Date.now() })
}

export function pdfExportado() {
  event('pdf_exportado', { timestamp: Date.now() })
}

export function resultadoImpresso() {
  event('resultado_impresso', { timestamp: Date.now() })
}
