# Relatório de Correção — Página Fontes Oficiais

## Arquivos Alterados

| Arquivo | Tipo de Alteração |
|---------|------------------|
| `app/fontes-oficiais/page.tsx` | Refatoração completa do layout + substituição de links |

---

## Links Removidos

| Fonte | Link Antigo | Motivo |
|-------|------------|--------|
| NR-15 | `https://www.gov.br/trabalho-e-previdencia/.../nr-15` | Retornava 403 Forbidden |
| Portarias INSS | `https://www.gov.br/trabalho-e-previdencia/pt-br` | Retornava 403 Forbidden |
| Tabela IRRF | `https://www.gov.br/receitafederal/.../imposto-de-renda-retido-na-fonte-irrf` | Retornava 404 Not Found |

## Links Substituídos

| Fonte | Novo Link | Status |
|-------|----------|--------|
| NR-15 | `https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs` | 200 OK |
| Portarias INSS | `https://www.gov.br/inss/pt-br` | 200 OK |
| Tabela IRRF | `https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/tributos` | 200 OK |

## Links Mantidos (9 de 12 originais)

Todos os links para `planalto.gov.br` (CLT, Constituição, Leis 8.212, 8.213, 7.998, 8.036, 12.506, Art. 193, Lei 4.090) continuam funcionando e foram mantidos.

---

## Melhorias no Layout Mobile

### Problema Original
- Tabela de 3 colunas quebrava em telas pequenas
- Coluna "Link Oficial" ficava estreita demais
- "Acessar" quebrava em duas linhas ("Acessa" / "r")
- Descrições espremidas sem margem adequada

### Solução Implementada

**Mobile (`md:hidden`)**
- Cards empilhados com borda e padding generoso
- Cada card contém: nome, decreto, descrição, botão "Acessar fonte oficial"
- Botão ocupa largura total em telas muito estreitas (`w-full`) e largura automática em telas maiores (`sm:w-auto`)
- `whitespace-nowrap` no botão para evitar quebra de linha
- Margem lateral via `px-4` do container + padding interno do card

**Desktop (`hidden md:block`)**
- Tabela tradicional mantida com 3 colunas
- Colunas com largura proporcional definida (`w-[30%]`, `w-[45%]`, `w-[25%]`)
- Nome + decreto combinados na primeira coluna
- Botões estilizados com fundo primary em vez de link simples

---

## Texto dos Botões

| Dispositivo | Antes | Depois |
|-------------|-------|--------|
| Desktop | "Acessar" | "Acessar fonte" |
| Mobile | "Acessar" | "Acessar fonte oficial" |

Ambos com `whitespace-nowrap` para evitar quebra de linha.

---

## Acessibilidade

- Todos os links externos possuem `aria-label` descritivo: `"Acessar fonte oficial: {nome da fonte}"`
- Links abrem com `target="_blank"` e `rel="noopener noreferrer"`
- Botões com contraste adequado (bg-primary + primary-foreground)

---

## Testes Realizados

| Teste | Resultado |
|-------|-----------|
| Links planalto.gov.br (9) | 200 OK cada |
| Novo link NR-15 (gov.br) | 200 OK |
| Novo link INSS (gov.br) | 200 OK |
| Novo link IRRF (gov.br) | 200 OK |
| Build Next.js | Compilado sem erros |
| TypeScript | Sem erros |
| Geração estática (36 páginas) | Completa sem falhas |
| Layout responsivo (CSS classes) | `md:hidden` / `hidden md:block` |

---

## Nenhuma Alteração Em

- Calculadoras
- Blog
- Layout global
- Metadata / Schema
- Rotas existentes
- Sitemap
- Header / Footer / Navegação
