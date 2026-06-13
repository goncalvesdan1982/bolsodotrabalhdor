import Link from 'next/link'
import { Wallet, Info } from 'lucide-react'

const categorias = [
  { nome: 'Dívidas', href: '/dividas' },
  { nome: 'Cartões', href: '/cartoes' },
  { nome: 'Empréstimos', href: '/emprestimos' },
  { nome: 'Score', href: '/score' },
  { nome: 'Organização Financeira', href: '/organizacao-financeira' },
  { nome: 'Custo de Vida', href: '/custo-de-vida' },
]

const calculadoras = [
  { nome: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
  { nome: 'Juros Simples', href: '/calculadoras/juros-simples' },
  { nome: 'Empréstimo', href: '/calculadoras/emprestimo' },
  { nome: 'Financiamento', href: '/calculadoras/financiamento' },
  { nome: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
  { nome: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
]

const guias = [
  { nome: 'Blog', href: '/blog' },
  { nome: 'Como sair das dívidas', href: '/blog/como-sair-das-dividas-guia-completo' },
  { nome: 'Como aumentar o score', href: '/blog/como-aumentar-score-de-credito' },
  { nome: 'Cartão sem anuidade', href: '/blog/cartao-sem-anuidade-vale-a-pena' },
  { nome: 'Empréstimo pessoal vs consignado', href: '/blog/emprestimo-pessoal-ou-consignado' },
  { nome: 'Método 50-30-20', href: '/blog/metodo-50-30-20-como-aplicar' },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Wallet className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>Bolso do Trabalhador</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Finanças simples para quem trabalha e paga boletos. Calculadoras gratuitas, guias educativos e educação financeira sem enrolação.
            </p>
            <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/30 rounded-lg p-3 text-xs text-blue-700 dark:text-blue-300">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
              <span>Portal informativo independente. Confirme informações, valores e solicitações nos canais oficiais do governo ou órgão responsável.</span>
            </div>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Categorias</h3>
            <ul className="space-y-2.5">
              {categorias.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {cat.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculadoras */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Calculadoras</h3>
            <ul className="space-y-2.5">
              {calculadoras.map((calc) => (
                <li key={calc.href}>
                  <Link href={calc.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {calc.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guias */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Guias</h3>
            <ul className="space-y-2.5">
              {guias.map((guia) => (
                <li key={guia.href}>
                  <Link href={guia.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {guia.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-sm">Institucional</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link></li>
              <li><Link href="/autor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Autor</Link></li>
              <li><Link href="/politica-editorial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política Editorial</Link></li>
              <li><Link href="/metodologia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Metodologia</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link></li>
              <li><Link href="/politica-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</Link></li>
              <li><Link href="/termos-uso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bolso do Trabalhador. Todos os direitos reservados.</p>
          <p className="mt-2">As informações fornecidas têm caráter informativo e educativo e não substituem a consulta a um profissional qualificado ou aos canais oficiais do governo.</p>
        </div>
      </div>
    </footer>
  )
}
