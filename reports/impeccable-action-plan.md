# Plano de Ação — Bolso do Trabalhador

**Baseado na Auditoria Impeccable (reports/impeccable-full-audit.md)**

## Fases

| Fase | Descrição | Issues | Status |
|------|-----------|--------|--------|
| 1 | Quick Wins — SEO, títulos, breadcrumbs, dead code | P1.4, P2.5, P2.6, P2.7, P2.8, P2.13, P3.1, P3.2, P3.3, P3.4, P3.5, P3.6, P3.7, P3.10, P3.11 | ✅ |
| 2 | Acessibilidade — Contraste, reduced-motion, cookie, focus | P0.1, P2.2, P2.3, P2.4, P2.6, P2.11 | ✅ |
| 3 | Segurança — CSP, DOMPurify | P0.2, P0.4 | ✅ |
| 4 | Design System — Dark mode, AI tells, design tokens | P0.3, P3.12 | ✅ |
| 5 | Código — Refactor calculadoras, types, dedup | P1.1, P1.2, P1.5, P1.7, P2.10, P3.8 | ✅ |
| 6 | Conteúdo — FAQ dedup, thin clusters | P2.9, P2.12, P1.6 | ✅ |
| 7 | Mobile — Touch targets, overflow, breakpoints | P2.1 | ✅ |
| 8 | Validação Final — Build, lint, detector | Todos | ✅ |

## Detalhamento por Fase

---

### Fase 1 — Quick Wins

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 1.1 | Remover "| Bolso do Trabalhador" dos titles (double branding) | Todas page.tsx | Baixo | ✅ |
| 1.2 | Remover duplicate BreadcrumbList JSON-LD de blog posts | app/blog/[slug]/page.tsx | Baixo | ✅ |
| 1.3 | Adicionar breadcrumbs ao blog listing e contato | app/blog/page.tsx, app/contato/ | Baixo | ✅ |
| 1.4 | Corrigir SearchAction template (search → q) | app/layout.tsx | Baixo | ✅ |
| 1.5 | Padronizar OG image dimensions para 1200×630 | app/layout.tsx | Baixo | ✅ |
| 1.6 | Remover imports não usados (ícones, font Geist Mono) | app/page.tsx, app/layout.tsx | Baixo | ✅ |
| 1.7 | Remover dead code (analytics functions, use-mobile, etc.) | lib/analytics.ts, hooks/use-mobile.ts | Baixo | ✅ |
| 1.8 | Corrigir heading h1→h3 nos blog posts | app/blog/[slug]/page.tsx | Baixo | ✅ |
| 1.9 | Remover componentes subutilizados/órfãos | components/input-com-erro.tsx | Baixo | ✅ |
| 1.10 | Corrigir sameAs do Person schema | app/autor/page.tsx | Baixo | ✅ |
| 1.11 | Extrair round2 helper em calculadoras-financeiras | lib/calculadoras-financeiras.ts | Baixo | ✅ |

---

### Fase 2 — Acessibilidade

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 2.1 | Escurecer verde #38a169 para #2d8a56 (contraste AA) | app/globals.css, DESIGN.md | Baixo |
| 2.2 | Adicionar prefers-reduced-motion no CSS e TS | app/globals.css, back-to-top-button | Baixo |
| 2.3 | Adicionar role=dialog, aria-modal, Escape ao cookie banner | components/cookie-banner.tsx | Baixo |
| 2.4 | Adicionar aria-hidden no back-to-top quando invisível | components/back-to-top-button.tsx | Baixo |
| 2.5 | Sanitizar IDs do Table of Contents | components/table-of-contents.tsx | Baixo |

---

### Fase 3 — Segurança

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 3.1 | Adicionar CSP headers no next.config.mjs | next.config.mjs | Baixo |
| 3.2 | Adicionar DOMPurify no enhanceArticleHtml e FAQ answers | app/blog/[slug]/page.tsx, faq-section.tsx | Baixo |

---

### Fase 4 — Design System

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 4.1 | Converter premium-table, callouts, related-links para CSS vars | app/globals.css | Médio |
| 4.2 | Adicionar .dark overrides para todas as seções | app/globals.css | Médio |
| 4.3 | Remover purple AI palette do score page | app/score/page.tsx | Baixo |
| 4.4 | Remover side-tab borders do styles/globals.css (legado não usado) | styles/globals.css | Baixo |
| 4.5 | Atualizar DESIGN.md com cores corrigidas | DESIGN.md | Baixo |

---

### Fase 5 — Código

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 5.1 | Extrair metadata de calculadora para helper em lib | lib/schemas-financeiro.ts, 13× page.tsx | Baixo |
| 5.2 | Refatorar 3 switches para strategy/handler pattern | components/calculadora-template.tsx | Alto |
| 5.3 | Tipar result/state com discriminated unions | components/calculadora-template.tsx | Médio |
| 5.4 | Extrair navegação/categorias para config central | lib/config.ts, header, footer, homepage | Baixo |
| 5.5 | Remover 'use client' desnecessário do contato | app/contato/page.tsx | Baixo |
| 5.6 | Mover calculator schemas para server component | components/calculadora-schema.tsx | Médio |

---

### Fase 6 — Conteúdo

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 6.1 | Deduplicar FAQ entre posts (manter no post principal) | lib/posts.ts | Médio |
| 6.2 | Adicionar DataAtualizacao nas cluster pages | 6 cluster pages | Baixo |
| 6.3 | Adicionar FAQSection nas cluster pages | 6 cluster pages | Baixo |
| 6.4 | Criar 2-3 artigos para custo-de-vida e organização-financeira | lib/posts.ts | Alto |

---

### Fase 7 — Mobile

| # | Tarefa | Arquivos | Esforço |
|---|--------|----------|---------|
| 7.1 | Aumentar touch targets da nav mobile para 44px | components/header.tsx | Baixo |
| 7.2 | Aumentar hamburger button para 44×44 | components/header.tsx | Baixo |
| 7.3 | Ajustar overflow de tabelas em mobile | app/globals.css | Baixo |

---

### Fase 8 — Validação Final

| # | Tarefa | Comando |
|---|--------|---------|
| 8.1 | Build | npm run build |
| 8.2 | Lint | npm run lint |
| 8.3 | Test | npm run test |
| 8.4 | Impeccable Detector | npx impeccable detect |
| 8.5 | git status | git status |

---

## Legenda

- ✅ Concluído
- ⏳ Pendente
- 🔄 Em andamento
- ❌ Bloqueado
- ➖ Não necessário
