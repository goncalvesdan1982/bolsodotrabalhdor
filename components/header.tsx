'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Wallet, Menu, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const calculadoras = [
  { nome: 'Juros Compostos', href: '/calculadoras/juros-compostos' },
  { nome: 'Juros Simples', href: '/calculadoras/juros-simples' },
  { nome: 'Empréstimo', href: '/calculadoras/emprestimo' },
  { nome: 'Financiamento', href: '/calculadoras/financiamento' },
  { nome: 'Parcelas', href: '/calculadoras/parcelas' },
  { nome: 'Reserva de Emergência', href: '/calculadoras/reserva-emergencia' },
  { nome: 'Orçamento Familiar', href: '/calculadoras/orcamento-familiar' },
  { nome: 'Capacidade de Endividamento', href: '/calculadoras/capacidade-endividamento' },
  { nome: 'Comprometimento de Renda', href: '/calculadoras/comprometimento-renda' },
  { nome: 'Quitação de Dívidas', href: '/calculadoras/quitacao-dividas' },
  { nome: 'Troca de Dívidas', href: '/calculadoras/troca-dividas' },
  { nome: 'Economia Mensal', href: '/calculadoras/economia-mensal' },
  { nome: 'Meta Financeira', href: '/calculadoras/meta-financeira' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-secondary">
            <Wallet className="w-5 h-5 text-secondary-foreground" />
          </div>
          <span className="hidden sm:inline">Bolso do Trabalhador</span>
          <span className="sm:hidden">Bolso do Trab.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Calculadoras
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {calculadoras.map((calc) => (
                <DropdownMenuItem key={calc.href} asChild>
                  <Link href={calc.href} className="cursor-pointer">
                    {calc.nome}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/dividas" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Dívidas
          </Link>
          <Link 
            href="/cartoes" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Cartões
          </Link>
          <Link 
            href="/emprestimos" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Empréstimos
          </Link>
          <Link 
            href="/score" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Score
          </Link>
          <Link 
            href="/organizacao-financeira" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Organização
          </Link>
          <Link 
            href="/custo-de-vida" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Custo de Vida
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium hover:text-primary-foreground/80 transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="flex items-center gap-2 mb-6">
              <Wallet className="w-5 h-5 text-primary" />
              Menu
            </SheetTitle>
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Navegação</p>
                <Link href="/" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Início</Link>
                <Link href="/blog" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/dividas" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Dívidas</Link>
                <Link href="/cartoes" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Cartões</Link>
                <Link href="/emprestimos" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Empréstimos</Link>
                <Link href="/score" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Score</Link>
                <Link href="/organizacao-financeira" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Organização Financeira</Link>
                <Link href="/custo-de-vida" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Custo de Vida</Link>
              </div>
              <div className="border-t pt-4 space-y-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Calculadoras</p>
                {calculadoras.map((calc) => (
                  <Link key={calc.href} href={calc.href} className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>
                    {calc.nome}
                  </Link>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Institucional</p>
                <Link href="/sobre" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Sobre</Link>
                <Link href="/contato" className="block py-2 px-3 text-sm rounded-md hover:bg-muted transition-colors" onClick={() => setIsOpen(false)}>Contato</Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
