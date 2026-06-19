# Bolso do Trabalhador

Portal informativo independente sobre benefícios, programas sociais, educação financeira, direitos do trabalhador e renda. Oferece ferramentas informativas, guias educativos e conteúdo de referência para consulta de informações públicas no Brasil.

**Público-alvo:** Trabalhadores brasileiros, pessoas em busca de educação financeira, orientação sobre benefícios sociais e direitos trabalhistas.

**Principais funcionalidades:**
- Calculadoras financeiras gratuitas (juros compostos, juros simples, empréstimo, financiamento, reserva de emergência, orçamento familiar)
- Guias educativos sobre dívidas, cartões, score, empréstimos e organização financeira
- Conteúdo sobre benefícios sociais e direitos do trabalhador
- SEO completo com sitemap dinâmico, JSON-LD, breadcrumbs e Open Graph
- Design responsivo com tema claro/escuro
- Conteúdo independente — não substitui canais oficiais do governo

---

## Live Website

| Item | Detalhe |
|------|---------|
| **Produção** | [https://www.bolsodotrabalhador.online](https://www.bolsodotrabalhador.online) |
| **Domínio canônico** | `https://www.bolsodotrabalhador.online` |

---

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | 5.7.3 |
| Tailwind CSS | 4.2.0 |
| shadcn/ui (Radix UI) | Diversos componentes |
| ESLint (flat config) | 10.4.1 |
| PostCSS | 8.5 |

---

## Estrutura do Projeto

```
/
├── app/                           # App Router — páginas e layouts
│   ├── autor/                     # Página sobre o autor/responsável
│   ├── blog/                      # Blog listing e artigos
│   ├── calculadoras/              # Calculadoras financeiras
│   ├── cartoes/                   # Guia de cartões de crédito
│   ├── contato/                   # Página de contato
│   ├── custo-de-vida/             # Conteúdo sobre custo de vida
│   ├── dividas/                   # Guia para sair das dívidas
│   ├── emprestimos/               # Comparativo de empréstimos
│   ├── metodologia/               # Página de metodologia
│   ├── organizacao-financeira/    # Conteúdo sobre organização financeira
│   ├── politica-editorial/        # Política editorial
│   ├── politica-privacidade/      # Política de privacidade
│   ├── score/                     # Guia de score de crédito
│   ├── sobre/                     # Página sobre o portal
│   ├── termos-uso/                # Termos de uso
│   ├── globals.css                # Estilos globais
│   ├── layout.tsx                 # Layout raiz
│   ├── page.tsx                   # Home page
│   ├── robots.ts                  # Configuração robots.txt
│   └── sitemap.ts                 # Sitemap dinâmico
├── components/                    # Componentes React reutilizáveis
│   ├── ui/                        # Componentes shadcn/ui
│   └── ...                        # Componentes específicos do projeto
├── lib/                           # Lógica e dados
│   ├── config.ts                  # Config centralizada (SITE_URL, SITE_NAME)
│   ├── posts.ts                   # Artigos do blog
│   ├── schemas-financeiro.ts      # Schemas das calculadoras financeiras
│   └── utils.ts                   # Utilitários
├── public/                        # Arquivos estáticos
└── ...config files
```

---

## Deploy

| Item | Detalhe |
|------|---------|
| **Plataforma** | Vercel (auto-deploy em cada push para `main`) |
| **Instalação** | `pnpm install` |
| **Build** | `pnpm run build` |
| **Dev** | `pnpm run dev` |
| **Testes** | `pnpm run test` (Vitest) |
| **Lint** | `pnpm run lint` |
| **Gerenciador** | pnpm |
