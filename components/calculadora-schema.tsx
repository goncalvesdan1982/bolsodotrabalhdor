'use client'

import { useEffect, useState } from 'react'
import { calculatorsConfig, gerarWebApplication, gerarHowTo } from '@/lib/schemas-financeiro'

export function CalculadoraSchema({ calculadoraKey }: { calculadoraKey: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const config = calculatorsConfig[calculadoraKey]
  if (!config || !mounted) return null

  const webApp = gerarWebApplication(config.webAppName, config.webAppDescription, config.path)
  const howTo = gerarHowTo(
    config.howToName,
    config.howToDescription,
    config.steps.map((s, i) => ({ ...s, position: i + 1 })),
    config.path
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  )
}
