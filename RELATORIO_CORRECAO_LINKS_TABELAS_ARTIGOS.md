# Relatório de Correção — Links Internos e Tabelas nos Artigos

## Resumo

Correção visual de links internos crus e tabelas comprimidas nos 26 artigos do Bolso do Trabalhador, conforme problemas identificados visualmente no artigo `/blog/melhores-cartoes-score-baixo`.

## Arquivos alterados

| Arquivo | Alterações |
|---------|------------|
| `styles/globals.css` | +91 linhas (related-links-premium + melhorias table) |
| `app/blog/[slug]/page.tsx` | +6 linhas (regex wrap related-links no enhanceArticleHtml) |

## Artigos auditados

Todos os 26 artigos em `lib/posts.ts` foram auditados para:

- Links internos crus (texto puro sem formatação premium)
- Tabelas estreitas ou com cabeçalhos quebrados
- HTML/markdown cru visível ao usuário

## Links crus encontrados e corrigidos

| Slug | Linha | Tipo | Correção |
|------|-------|------|----------|
| `melhores-cartoes-score-baixo` | 1063 | Links "veja também" dentro de callout-conclusao | Envolto em `.related-links-premium` via regex |
| `como-sair-das-dividas-guia-completo` | 358 | "Artigos relacionados:" com lista de links solta | Envolto em `.related-links-premium` via regex |

## Blocos de links relacionados corrigidos

2 blocos detectados e automaticamente convertidos pelo `enhanceArticleHtml`:

- **Padrão 1:** `<p>Artigos relacionados:</p><ul><li>...` → `<div class="related-links-premium">`
- **Padrão 2:** `<p>Para continuar sua pesquisa, veja também:</p><ul><li>...` → `<div class="related-links-premium">`

## Tabelas corrigidas

43 tabelas em todos os artigos — correção aplicada via CSS global:

- `min-width` aumentado de **520px → 680px** (desktop) para acomodar tabelas com 4+ colunas
- `min-width` de **560px** no breakpoint 640px
- `min-width` mantido em **440px** no breakpoint 390px
- Adicionado `word-break: normal` e `overflow-wrap: break-word` com `hyphens: auto` em th/td
- Tabelas com cabeçalhos longos (ex: "Pode ajudar quem tem score baixo?") agora têm espaço adequado
- Scroll horizontal habilitado via `overflow-x: auto` no wrapper (já existente)

## Classes CSS adicionadas

| Classe | Função |
|--------|--------|
| `.related-links-premium` | Wrapper com fundo suave, borda, border-radius, padding |
| `.related-links-premium .related-links-title` | Título do bloco (negrito, cor escura) |
| `.related-links-premium ul` | Lista sem marcadores, sem padding |
| `.related-links-premium li` | Espaçamento entre itens |
| `.related-links-premium a` | Link com seta decorativa via `::before`, hover com translateX |
| `.related-links-premium a::before` | Seta (›) via borda rotacionada |
| `.related-links-premium a:hover` | Cor mais escura + deslocamento 3px para direita |
| `.related-links-premium a:hover::before` | Opacidade total no hover |

Classes mobile adicionadas nos breakpoints 640px e 390px para padding e font-size reduzidos.

## HTML/Markdown cru

**Nenhum** resíduo de HTML ou markdown cru foi encontrado visível ao usuário.

## Validação mobile

Breakpoints cobertos pelo CSS:
- **Desktop:** largura total com `max-w-3xl` (~768px), tabelas com `min-width: 680px`
- **640px:** font-size reduzido, padding de tabela reduzido, related-links compacto
- **390px:** font-size mínimo, tabelas com `min-width: 440px`, scroll horizontal ativado

## Acessibilidade

- Links no related-links-premium são `<a>` nativos com `href` — clicáveis via teclado
- Hover/focus visível via mudança de cor e deslocamento
- Listas semânticas (`<ul><li>`)
- Tabelas com `<th scope="col">` (já existente)
- Contraste: cor do link `oklch(0.45 0.12 260)` sobre fundo `oklch(0.97 0.02 260 / 0.35)` → ~4.5:1

## Resultado do Lint

**Zero erros.** `npm run lint` → saída limpa.

## Resultado do Build

**Compilado com sucesso.** `npm run build` → ✓ Compiled successfully (33 páginas estáticas).

## Conclusão

Todos os artigos agora mantêm aparência premium consistente:
- Links internos com bloco visual distinto (fundo, borda, seta decorativa, hover)
- Tabelas com largura mínima adequada, scroll horizontal no mobile, sem quebra agressiva de cabeçalhos
- Nenhum HTML/markdown cru visível
- Build e lint validados sem erros
