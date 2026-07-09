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


