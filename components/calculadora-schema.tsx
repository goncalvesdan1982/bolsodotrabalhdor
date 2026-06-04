'use client'

import { useEffect } from 'react'
import { calculatorsConfig, gerarWebApplication, gerarHowTo } from '@/lib/schemas-financeiro'

export function CalculadoraSchema({ calculadoraKey }: { calculadoraKey: string }) {
  useEffect(() => {
    const config = calculatorsConfig[calculadoraKey]
    if (!config) return

    const webApp = gerarWebApplication(config.webAppName, config.webAppDescription, config.path)
    const howTo = gerarHowTo(
      config.howToName,
      config.howToDescription,
      config.steps.map((s, i) => ({ ...s, position: i + 1 })),
      config.path
    )

    const schemasArray = [webApp, howTo]
    const scriptIds = [`schema-webapp-${calculadoraKey}`, `schema-howto-${calculadoraKey}`]

    schemasArray.forEach((schema, index) => {
      const existing = document.getElementById(scriptIds[index])
      if (existing) existing.remove()

      const script = document.createElement('script')
      script.id = scriptIds[index]
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      scriptIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) el.remove()
      })
    }
  }, [calculadoraKey])

  return null
}
