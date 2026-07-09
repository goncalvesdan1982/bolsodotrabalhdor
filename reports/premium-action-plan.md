# Plano de Ação Premium — Bolso do Trabalhador

**Objetivo:** Elevar o site de Near-Premium (~8.5) para Premium (9+) eliminando todos os achados do Impeccable Detector e pendências editoriais.

---

## Fase 1 — Side-tab borders (AI tell)

| # | Local | Atual | Correção |
|---|-------|-------|----------|
| 1 | `app/blog/[slug]/page.tsx:271` | `border-l-4` | `border-l-2` |
| 2 | `app/blog/[slug]/page.tsx:313` | `border-l-4` | `border-l-2` |
| 3 | `app/globals.css:386` | `border-left: 4px solid` | `border-left: 3px solid` |
| 4 | `app/globals.css:401` | `border-left: 4px solid` | `border-left: 3px solid` |

## Fase 2 — AI color palette (category badges)

| # | Categoria | Gradiente atual | Novo gradiente |
|---|-----------|----------------|----------------|
| 1 | Cartões | `from-indigo-800 to-indigo-600` | `from-orange-800 to-orange-600` |
| 2 | Custo de Vida | `from-violet-800 to-violet-600` | `from-cyan-800 to-cyan-600` |

## Fase 3 — Dark mode premium-table

Adicionar `.dark .premium-table-wrapper` em `app/globals.css` (após linha 164).

## Fase 4 — OG image route

Criar `app/og/route.tsx` com geração de imagem OG dinâmica.

## Fase 5 — Template breaking

Remover "Resumo rápido" ou "Erros comuns" de mais 4 posts para totalizar 8.

| # | Post | Seção a remover | Motivo |
|---|------|----------------|--------|
| 1 | `melhores-cartoes-score-baixo` | Resumo rápido | Intro já cobre |
| 2 | `emprestimo-pessoal-ou-consignado` | Resumo rápido | Intro já cobre |
| 3 | `qual-divida-devo-pagar-primeiro` | Resumo rápido | Intro já cobre |
| 4 | `o-que-acontece-se-parar-de-pagar-cartao` | Erros comuns | Genérico |

## Fase 6 — Validação

- [ ] `npm run build`
- [ ] `npm run lint`
- [ ] Impeccable detector limpo
- [ ] Commit + push
