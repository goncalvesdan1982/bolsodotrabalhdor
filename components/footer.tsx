import Link from 'next/link'
import { Wallet } from 'lucide-react'

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

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Wallet className="w-4 h-4 text-primary-foreground" />
              </div>
              <span>Bolso do Trabalhador</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Finanças simples para quem trabalha e paga boletos. Calculadoras gratuitas, dicas práticas e educação financeira sem enrolação.
            </p>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categorias</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-foreground">Calculadoras</h3>
            <ul className="space-y-2">
              {calculadoras.map((calc) => (
                <li key={calc.href}>
                  <Link href={calc.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {calc.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Institucional</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link></li>
              <li><Link href="/autor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Autor</Link></li>
              <li><Link href="/politica-editorial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política Editorial</Link></li>
              <li><Link href="/metodologia" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Metodologia</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Links Legais */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/politica-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos-uso" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bolso do Trabalhador. Todos os direitos reservados.</p>
          <p className="mt-2">As informações fornecidas têm caráter informativo e não substituem a consulta a um profissional qualificado.</p>
        </div>
      </div>
    </footer>
  )
}
