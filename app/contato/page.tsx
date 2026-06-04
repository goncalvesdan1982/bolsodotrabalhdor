'use client'

import { Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AdPlaceholder } from '@/components/ad-placeholder'
import { SITE_EMAIL } from '@/lib/config'

export default function ContatoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contato
            </h1>
            <p className="text-lg text-muted-foreground">
              Tem dúvidas, sugestões ou encontrou algum erro? Entre em contato conosco.
            </p>
          </div>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mb-8" slot="contato-top" />

          {/* Contact Card */}
          <Card>
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Fale Conosco</CardTitle>
              <CardDescription>
                Envie suas dúvidas, sugestões ou relatando erros diretamente para nosso e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
  <div className="overflow-x-auto pb-2">
    <a 
      href={`mailto:${SITE_EMAIL}`} 
      className="inline-flex items-center gap-2 text-primary hover:underline font-semibold whitespace-nowrap text-sm sm:text-base md:text-xl"
    >
      <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      <span>{SITE_EMAIL}</span>
    </a>
  </div>
  <p className="text-muted-foreground text-sm mt-4">
    Responderemos o mais breve possível.
  </p>
</CardContent>
          </Card>

          {/* Ad Placeholder */}
          <AdPlaceholder className="mt-8" slot="contato-bottom" />
        </div>
      </div>
    </div>
  )
}
