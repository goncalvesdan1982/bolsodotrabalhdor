# Auditoria Editorial Premium

**Projeto:** Bolso do Trabalhador  
**Data:** 08/07/2026  
**Auditor:** Revisão automatizada multi-agente  
**Escopo:** Qualidade editorial, acabamento, percepção de profissionalismo

---

## Resumo Executivo

| Métrica | Nota |
|---------|------|
| **Nota editorial** (ortografia, gramática, consistência) | **7,5/10** |
| **Nota de acabamento** (detalhes, polimento, consistência visual) | **7/10** |
| **Nota de profissionalismo** (aparenta ser de um portal consolidado) | **8/10** |

**Total de problemas encontrados:** 21  
**🔴 Críticos:** 5 | **🟠 Altos:** 5 | **🟡 Médios:** 7 | **🟢 Baixos:** 4

---

## 🔴 Problemas Críticos

### C1. HTML inválido — tags `<strong>` aninhadas (8 ocorrências)

**Localização:** `lib/posts.ts` — linhas 289, 497, 520, 1210, 1214, 2376, 3101, 3454  
**Padrão:**
```html
<li><strong>Confirme os <strong>canais oficiais</strong></strong>
```
**Problema:** `<strong>` aninhado dentro de `<strong>` é HTML inválido. Pode renderizar incorretamente em alguns navegadores e é semanticamente sem sentido.  
**Impacto:** 🔴 Crítico — HTML inválido, credibilidade técnica.  
**Correção:** Substituir o `<strong>` externo por marcação semântica adequada ou remover a tag externa.  
**Esforço:** 🟢 Baixo (8 substituições manuais)

### C2. Erro ortográfico: "Listi" → "Listei"

**Localização:** `lib/posts.ts`, linha 597  
**Texto:**
```html
<li><input type="checkbox" disabled /> Listi todas as dívidas com valores, juros e credores</li>
```
**Problema:** "Listi" é erro ortográfico grave em português. O correto é "Listei" (pretérito perfeito de "listar").  
**Impacto:** 🔴 Crítico — erro básico de português em local visível (checklist), mina credibilidade.  
**Correção:** Substituir "Listi" por "Listei".  
**Esforço:** 🟢 Baixo (1 caractere)

### C3. Inconsistência ortográfica: "bureaus" vs "birôs"

**Localização:** `lib/posts.ts`, linha 634 (FAQ de `como-sair-das-dividas-guia-completo`)  
**Texto:** `"...atualizar os bureaus de crédito (Serasa, Boa Vista, SPC)"`  
**Problema:** O arquivo usa "birôs" (aportuguesamento correto) em mais de 75 ocorrências, mas "bureaus" (estrangeirismo cru) aparece 1 vez no FAQ do primeiro post.  
**Impacto:** 🔴 Crítico — inconsistência denuncia falta de revisão final.  
**Correção:** Substituir "bureaus" por "birôs" na linha 634.  
**Esforço:** 🟢 Baixo

### C4. Links de categoria quebrados (4 de 6 categorias → 404)

**Localização:** `app/blog/[slug]/page.tsx`, linhas 225 e 233  
**Código atual:**
```js
`/blog/categoria/${post.category.toLowerCase().replace(/\s+/g, '-')}`
```
**Problema:** O código gera slugs com acentos ("dívidas", "cartões", "empréstimos", "organização-financeira"), mas as rotas reais usam slugs sem acento ("dividas", "cartoes", "emprestimos", "organizacao-financeira"). A função `getAllCategories()` em `lib/posts.ts` (linhas 4180-4187) já possui um mapa manual de slugs normalizados, mas ele não é usado no blog post page. As duas categorias que funcionam ("Score" e "Custo de Vida") são as que não têm acento.  
**Impacto:** 🔴 Crítico — todo link de badge de categoria e breadcrumb em posts dessas 4 categorias navega para 404. Afeta UX e SEO (links internos quebrados).  
**Correção:** Importar `getAllCategories()` e usar o slug normalizado do mapa, ou aplicar `normalize('NFD').replace(/[\u0300-\u036f]/g, '')` para remover acentos.  
**Esforço:** 🟡 Médio (criar função utilitária + aplicar em 2 locais)

### C5. Atributos `style` inline no conteúdo (3 ocorrências)

**Localização:** `lib/posts.ts` — linhas 890, 2385, 2386, 2387  
**Problema:** Uso de `style="margin-bottom:0"`, `style="font-weight:700;margin:0 0 8px 0"`, `style="margin:0;padding-left:20px"` dentro do conteúdo HTML. Isso foge do sistema Tailwind do projeto.  
**Impacto:** 🔴 Crítico — inconsistência técnica e possível quebra de responsividade.  
**Correção:** Mover regras inline para classes CSS ou usar utilitários Tailwind.  
**Esforço:** 🟢 Baixo

---

## 🟠 Problemas de Alta Prioridade

### A1. Erro de concordância em tabela: "correndo"

**Localização:** `lib/posts.ts`, linha 160 (tabela em `como-sair-das-dividas-guia-completo`)  
**Contexto:** Coluna "Atraso" da tabela de priorização de dívidas. Os valores nas outras linhas são numéricos ("90 dias", "30 dias", "15 dias"), mas uma linha usa "correndo" (gerúndio — em andamento). O termo correto seria "em aberto" ou "corrente".  
**Impacto:** 🟠 Alto — erro de concordância e inconsistência de tipo em tabela informativa.  
**Correção:** Substituir "correndo" por "em aberto" ou "variável".  
**Esforço:** 🟢 Baixo

### A2. Conteúdo de FAQ duplicado entre posts (3 perguntas)

**Localização:** `lib/posts.ts` — múltiplos FAQs  
**Problema:** As mesmas perguntas e respostas aparecem com redação quase idêntica em posts diferentes:
- **"CPF na nota não aumenta score"** — idêntico em 3 posts: `como-aumentar-score-de-credito` (linha 915), `quanto-tempo-leva-para-score-aumentar` (linha 2419), `o-que-realmente-influencia-score-credito` (linha 2516)
- **"Pix não aumenta score"** — idêntico em 2 posts (linhas 916, 2515)
- **"Pagar dívida aumenta score na hora?"** — mesma estrutura em 2 posts (linhas 918, 2414)
- **"5 dias úteis para atualizar..."** — mesmo fato repetido em pelo menos 7 ocorrências (linhas 634, 798, 918, 1851, 2027, 2225, 2414)  
**Impacto:** 🟠 Alto — canibalização de conteúdo, percepção de conteúdo produzido em massa. Google pode marcar como conteúdo fino.  
**Correção:** Para cada FAQ duplicada, variar a resposta por post ou referenciar o post principal com link interno.  
**Esforço:** 🟡 Médio

### A3. Padrão formulaico: "Resultado possível, mas não garantido"

**Localização:** `lib/posts.ts` — linhas 833, 843, 855, 2354, 2360, 2365  
**Problema:** A frase "Resultado possível, mas não garantido:" seguida de linguagem de hedge genérica aparece **6 vezes** em formato claramente templatizado. O padrão é idêntico: "em um cenário favorável, a pontuação poderia [verbo]... dependendo da metodologia... e da consistência..."  
**Impacto:** 🟠 Alto — padrão clássico de IA generativa, reduz percepção de autoria humana.  
**Correção:** Reescrever cada ocorrência de forma única e contextual, ou centralizar o disclaimer no início da seção.  
**Esforço:** 🟡 Médio

### A4. Frase de encerramento repetida: "Use este artigo como referência educativa"

**Localização:** `lib/posts.ts` — linhas 1599, 2975, e variações em 658, 1252, 1639, 2075, 2729, 2832, 3011, 4015  
**Problema:** A frase "Use este artigo como referência educativa" ou "As informações têm caráter educativo" aparece com redação quase idêntica em 8+ posts.  
**Impacto:** 🟠 Alto — reforça percepção de template, conteúdo genérico.  
**Correção:** Variar o texto de encerramento por post, contextualizando com o tema específico.  
**Esforço:** 🟡 Médio

### A5. Hyperlink ausente em "Consumidor.gov.br"

**Localização:** `lib/posts.ts`, linha 1809  
**Texto:**
```html
<li><strong>Consumidor.<strong>gov.br</strong>:</strong> canal oficial do governo..."
```
**Problema:** Além do HTML inválido (strong aninhado), o nome do serviço não tem link `<a href>`. Deveria ser um hyperlink funcional.  
**Impacto:** 🟠 Alto — perda de oportunidade de link externo oficial, HTML quebrado.  
**Correção:** Criar link `<a href="https://consumidor.gov.br">Consumidor.gov.br</a>`.  
**Esforço:** 🟢 Baixo

---

## 🟡 Problemas de Média Prioridade

### M1. Estrutura de posts excessivamente uniforme

**Localização:** Todos os 23 posts em `lib/posts.ts`  
**Problema:** Todos seguem exatamente o mesmo template: Seção → Resumo rápido → Tabela → Passo a passo → Erros comuns → Callout-conclusão → FAQ. A uniformidade é total — nenhum post foge do padrão.  
**Impacto:** 🟡 Médio — Google Helpful Content System pode interpretar como produzido em massa. Leitor percebe repetição.  
**Correção:** Variar estrutura: alguns posts sem "Resumo rápido", outros sem "Erros comuns", usar diferentes sequências de heading.  
**Esforço:** 🔴 Alto (requer reestruturação editorial)

### M2. Excesso de callout boxes (38 ocorrências)

**Localização:** `lib/posts.ts` — múltiplas ocorrências  
**Problema:** 38 divs de callout (callout-attention, callout-dica, callout-conclusao). Todo post tem exatamente 1 callout-conclusao. Mais da metade tem callout-attention repetindo "Desconfie de golpes".  
**Impacto:** 🟡 Médio — cansaço visual por repetição de elementos. Percepção de conteúdo "engessado".  
**Correção:** Reduzir callouts redundantes; integrar avisos no texto corrido onde possível.  
**Esforço:** 🟡 Médio

### M3. Palavra "Desconfie" repetida 37 vezes

**Localização:** `lib/posts.ts` — disperso  
**Problema:** "Desconfie" aparece 37 vezes (~1,6/post), muitas vezes no mesmo contexto "Desconfie de ofertas com aprovação garantida".  
**Impacto:** 🟡 Médio — repetição lexical excessiva, parece alerta genérico colado em todo post.  
**Correção:** Consolidar avisos de golpe em um post central e linkar; reduzir para 1-2 menções por post.  
**Esforço:** 🟡 Médio

### M4. Introduções genéricas no "Resumo rápido"

**Localização:** `lib/posts.ts` — início de cada post  
**Problema:** "Veja o que realmente...", "Entenda como...", "Veja..." — estruturas de abertura muito similares entre posts.  
**Impacto:** 🟡 Médio — falta de hook único por post.  
**Correção:** Escrever introduções personalizadas que contextualizam o problema específico do leitor.  
**Esforço:** 🟡 Médio

### M5. Links externos sem hyperlink adequado

**Localização:** `lib/posts.ts` — linha 1809, e outras  
**Problema:** Referências a sites oficiais (Consumidor.gov.br, gov.br) aparecem como texto simples, não como hyperlinks clicáveis.  
**Impacto:** 🟡 Médio — perda de link juice, pior UX.  
**Correção:** Envolver todas as referências a sites oficiais em tags `<a>` com `target="_blank"` e `rel="noopener noreferrer"`.  
**Esforço:** 🟡 Médio (levantar todas as ocorrências)

### M6. Navegação inconsistente: "Organização" vs "Organização Financeira"

**Localização:**
- `components/header.tsx` linha 99: desktop nav → "Organização"
- `components/header.tsx` linha 143: mobile sheet → "Organização Financeira"
- `app/page.tsx` linha 86: painel → "Organização"
- `app/page.tsx` linha 105: categorias → "Organização Financeira"
- `components/footer.tsx` linha 9: footer → "Organização Financeira"
**Problema:** O nome da categoria aparece truncado como "Organização" em alguns lugares e completo como "Organização Financeira" em outros. Isso causa confusão e quebra a consistência de naming.  
**Impacto:** 🟡 Médio — inconsistência de nomenclatura, parece falta de revisão.  
**Correção:** Padronizar para "Organização Financeira" em todos os locais.  
**Esforço:** 🟢 Baixo

### M7. Paralelismo quebrado na página de contato

**Localização:** `app/contato/page.tsx`, linha 34  
**Texto:** `"Envie suas dúvidas, sugestões ou relatando erros diretamente para nosso e-mail."`  
**Problema:** Quebra de paralelismo — "suas dúvidas, sugestões ou relatando erros". O correto seria "suas dúvidas, sugestões ou relatos de erros" ou "dúvidas, sugestões ou relate erros".  
**Impacto:** 🟡 Médio — erro gramatical visível em página pública de contato.  
**Correção:** Substituir por "relatos de erros" ou "correções".  
**Esforço:** 🟢 Baixo (1 linha)

---

## 🟢 Problemas de Baixa Prioridade

### B1. "Senhas(s)" — inconsistência singular/plural entre posts

**Localização:** `lib/posts.ts` — linhas 523 vs 1820  
**Problema:** "Nunca informe sua senha bancária" (singular) vs "Não informe senhas bancárias" (plural). Cada um está gramaticalmente correto, mas o conceito deveria ser padronizado.  
**Impacto:** 🟢 Baixo  
**Correção:** Padronizar para plural ou singular.  
**Esforço:** 🟢 Muito baixo

### B2. Cross-links para calculadoras genéricos demais

**Localização:** `lib/posts.ts` — seções de "Calculadoras Relacionadas"  
**Problema:** Posts da mesma categoria linkam exatamente as mesmas 3-4 calculadoras (orçamento-familiar, quitacao-dividas, troca-dividas), sem diferenciação contextual.  
**Impacto:** 🟢 Baixo — linkagem interna subótima.  
**Correção:** Escolher calculadoras mais específicas para o tema de cada post.  
**Esforço:** 🟡 Médio

### B3. Disclaimer "caráter educativo" idêntico em 8+ posts

**Localização:** `lib/posts.ts` — linhas 658, 1252, 1639, 2075, 2729, 2832, 3011, 4015  
**Problema:** Mesmo disclaimer com wording quase idêntico. Embora juridicamente necessário, poderia ter micro-variações por post.  
**Impacto:** 🟢 Baixo  
**Correção:** Adicionar variações mínimas (ex: "Este guia sobre [tema] tem caráter educativo...").  
**Esforço:** 🟢 Baixo

### B4. Duplicação de `relatedArticles` em calculadoras

**Localização:** `lib/schemas-financeiro.ts` — linhas 126-127, 279-280, 310-311, 405-406, 500-501  
**Problema:** Em 5 calculadoras, dois `relatedArticles` consecutivos apontam para a mesma página `/organizacao financeira`. Isso gera dois cards idênticos lado a lado.  
**Impacto:** 🟢 Baixo — UX pobre, mas não quebra nada.  
**Correção:** Substituir um dos links por um artigo de blog específico.  
**Esforço:** 🟢 Baixo

---

## Análise Qualitativa

### O texto parece ter sido escrito por um especialista?

**Parcialmente.** O tom geral é adequado para um portal de educação financeira — linguagem clara, acessível, sem jargão excessivo. No entanto:

- **Sinais de IA:** Estrutura excessivamente uniforme (23 posts, mesmo template), frases de transição repetitivas, hedge language clonada ("Resultado possível, mas não garantido" 6x)
- **Especialista:** As informações factuais (juros, prazos, regras) estão corretas. As fontes oficiais são citadas. O tom de cuidado com golpes é adequado.
- **Conclusão:** O conteúdo tem **qualidade informacional de especialista** mas **apresentação de template automatizado**.

### Existe algum detalhe que faça parecer feito às pressas?

**Sim, 3 detalhes principais:**

1. **"Listi" em vez de "Listei"** (C2) — erro tão básico que salta aos olhos de qualquer falante nativo. É o maior indício de "feito às pressas".
2. **Links de categoria quebrados** (C4) — 4 de 6 categorias navegam para 404. Isso é funcionalmente quebrado em produção, resultado de não testar os links após implementar.
3. **Inconsistência "Organização" vs "Organização Financeira"** (M6) — sugere que diferentes páginas foram feitas em momentos diferentes sem revisão unificada.

### Há sinais de conteúdo produzido em massa por IA?

**Sim, moderadamente.** Os sinais mais claros:

1. **Template idêntico em 23 posts** — Mesma estrutura, mesmas seções (Resumo rápido → Tabela → Erros comuns → Callout-conclusão → FAQ), mesma quantidade de callouts.
2. **Repetição de frases** — "Resultado possível, mas não garantido" (6x), "Desconfie" (37x), disclaimer educativo idêntico (8x).
3. **FAQs duplicadas** — A mesma pergunta "CPF na nota aumenta score?" com resposta quase idêntica em 3 posts diferentes.
4. **Hedge language padronizada** — "pode variar conforme...", "dependendo da metodologia..." — mesmas construções em posts diferentes.

### Há erros de português ou acabamento que prejudiquem a credibilidade?

**Sim, 1 crítico:** "Listi" (C2) chama atenção negativa. É o tipo de erro que um revisor humano jamais deixaria passar. O restante da ortografia está correto.

### O projeto está pronto para ser apresentado como um portal Premium?

**Ainda não.** Para atingir nível Premium, é necessário:

- Corrigir os 5 problemas críticos (especialmente C4 — links quebrados é inaceitável)
- Corrigir o erro de português C2
- Diversificar a estrutura dos posts (M1) para remover a aparência de template
- Remover FAQs duplicadas (A2)

### Se você fosse um usuário comum, confiaria plenamente neste site?

**Quase sim.** O design é limpo, as calculadoras funcionam, as informações são corretas. O que abala a confiança:

- **Erro de português "Listi"** — faz pensar "se erraram isso, erraram o quê mais?"
- **Links quebrados** — clicar em uma categoria e cair em 404 frustra e faz duvidar da manutenção do site
- **Uniformidade excessiva** — o usuário pode não nomear, mas percebe que "todos os artigos parecem iguais"

---

## 📋 Checklist de Correções Prioritárias

| # | Problema | Prioridade | Arquivo | Esforço |
|---|----------|-----------|---------|---------|
| 1 | Links de categoria quebrados (404) | 🔴 Crítico | `app/blog/[slug]/page.tsx` | 🟡 Médio |
| 2 | HTML inválido (strong aninhado) | 🔴 Crítico | `lib/posts.ts` (8x) | 🟢 Baixo |
| 3 | Erro "Listi" → "Listei" | 🔴 Crítico | `lib/posts.ts:597` | 🟢 Baixo |
| 4 | "bureaus" → "birôs" | 🔴 Crítico | `lib/posts.ts:634` | 🟢 Baixo |
| 5 | Style inline no conteúdo | 🔴 Crítico | `lib/posts.ts` (3x) | 🟢 Baixo |
| 6 | "correndo" na tabela | 🟠 Alto | `lib/posts.ts:160` | 🟢 Baixo |
| 7 | FAQs duplicadas | 🟠 Alto | `lib/posts.ts` (3 perguntas) | 🟡 Médio |
| 8 | "Resultado possível..." repetido | 🟠 Alto | `lib/posts.ts` (6x) | 🟡 Médio |
| 9 | Disclaimer genérico repetido | 🟠 Alto | `lib/posts.ts` (8x) | 🟡 Médio |
| 10 | Link ausente Consumidor.gov.br | 🟠 Alto | `lib/posts.ts:1809` | 🟢 Baixo |
| 11 | Estrutura de posts uniforme | 🟡 Médio | `lib/posts.ts` (23 posts) | 🔴 Alto |
| 12 | Callout boxes em excesso | 🟡 Médio | `lib/posts.ts` (38x) | 🟡 Médio |
| 13 | "Desconfie" repetido 37x | 🟡 Médio | `lib/posts.ts` (37x) | 🟡 Médio |
| 14 | "Organização" vs "Organização Financeira" | 🟡 Médio | `header.tsx`, `page.tsx` | 🟢 Baixo |
| 15 | Paralelismo quebrado no contato | 🟡 Médio | `app/contato/page.tsx:34` | 🟢 Baixo |
| 16 | relatedArticles duplicados | 🟢 Baixo | `lib/schemas-financeiro.ts` | 🟢 Baixo |

---

## Conclusão Final

**O site transmite aparência de um portal profissional?** → Sim, na maior parte. O design, as calculadoras e a seleção de conteúdo passam uma imagem positiva.

**Existe algum detalhe que faça parecer um projeto feito às pressas?** → Sim: os links de categoria quebrados (C4) e o erro "Listi" (C2) são os maiores indicadores.

**Há sinais de conteúdo produzido em massa por IA?** → Sim. A estrutura idêntica dos 23 posts e a repetição de frases-chave são os sinais mais evidentes.

**Há erros de português ou acabamento que prejudiquem a credibilidade?** → Um erro crítico ("Listi") que precisa ser corrigido com urgência.

**O projeto está pronto para ser apresentado como um portal Premium?** → Não ainda. Precisa de uma rodada de correções focada nos 5 itens críticos e diversificação da estrutura de conteúdo.

**Se você fosse um usuário comum, confiaria plenamente neste site?** → Confiaria para consultas iniciais, mas o erro de português e os links quebrados reduziriam a confiança a longo prazo.

---

*Auditoria concluída em 08/07/2026. Nenhuma alteração de código foi realizada — apenas análise.*
