# Plano de Ação — Correções Editoriais

**Base:** `reports/editorial-premium-audit.md`  
**Início:** 08/07/2026

---

## Fase 1 — 🔴 Links de categoria quebrados (C4)

**Tarefa:** Corrigir geração de slugs de categoria no `app/blog/[slug]/page.tsx` para usar o mapa normalizado de `getAllCategories()`.

- [x] Criar função utilitária `getCategorySlug()` em `lib/blog-categories.ts`
- [x] Substituir `post.category.toLowerCase().replace(/\s+/g, '-')` nas linhas 225 e 233
- [x] Build verificado ✅

---

## Fase 2 — 🔴 Correções críticas de texto e HTML

### 2.1 Erro ortográfico "Listi" → "Listei" (C2)
- [x] `lib/posts.ts:597` — Substituir "Listi" por "Listei"

### 2.2 "bureaus" → "birôs" (C3)
- [x] `lib/posts.ts:634` — Substituir "bureaus" por "birôs"

### 2.3 HTML inválido — tags `<strong>` aninhadas (C1)
- [x] `lib/posts.ts` — 32 ocorrências de `<strong>` dentro de `<strong>` corrigidas
- [x] `lib/posts.ts:1809` — Consumer.gov.br link adicionado (A5)

### 2.4 Atributos `style` inline (C5)
- [x] `lib/posts.ts:890` — `<ul style="margin-bottom:0;">` removido
- [x] `lib/posts.ts:2385-2387` — styles inline removidos

---

## Fase 3 — 🟠 Correções de alta prioridade

### 3.1 "correndo" na tabela (A1)
- [x] `lib/posts.ts:160` — Substituir "correndo" por "em aberto"

### 3.2 Paralelismo quebrado no contato (M7)
- [x] `app/contato/page.tsx:34` — "relatando erros" → "relatos de erros"

### 3.3 "Organização" vs "Organização Financeira" (M6)
- [x] `components/header.tsx:99` — "Organização" → "Organização Financeira"
- [x] `app/page.tsx:86` — "Organização" → "Organização Financeira"

### 3.4 `relatedArticles` duplicados (B4)
- [x] `lib/schemas-financeiro.ts` — 5 calculadoras com duplicatas corrigidas

---

## Fase 4 — 🟡 Conteúdo duplicado e variação

### 4.1 FAQs duplicadas (A2)
- [ ] `lib/posts.ts` — Variar respostas de FAQ replicadas entre posts (3 perguntas)
- [ ] Garantir que cada FAQ tenha wording único por post

### 4.2 "Resultado possível, mas não garantido" (A3)
- [ ] `lib/posts.ts` — 6 ocorrências para reescrever

### 4.3 Disclaimer genérico repetido (A4)
- [ ] `lib/posts.ts` — 8+ ocorrências para contextualizar por post

---

## Fase 5 — ✅ Build + Lint + Re-audit

- [x] `npm run build` — compilação sem erros
- [x] `npm run lint` — sem warnings/errors
- [ ] Re-audit editorial (comparar notas)

---

## Legenda

- `[ ]` Pendente
- `[x]` Concluído
- `[~]` Em andamento
