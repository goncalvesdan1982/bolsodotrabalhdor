# 📅 Atualização Anual 2027 — Checklist

> **Próxima atualização programada: Janeiro/Fevereiro de 2027**

As tabelas de INSS, IRRF e Seguro Desemprego são reajustadas anualmente. É **essencial** revisar os valores assim que o governo publicar as portarias.

---

## 🔴 Checklist Obrigatório

| Item | Fonte oficial | Localização | Ação |
|------|---------------|-------------|------|
| Salário mínimo 2027 | Decreto presidencial | `lib/calculadora.ts` | Criar `SALARIO_MINIMO_2027` |
| Tabela INSS (faixas e alíquotas) | Portaria MPS | `lib/calculadora.ts` | Criar `INSS_2027` |
| Teto INSS | Portaria MPS | `lib/calculadora.ts` | Criar `TETO_INSS_2027` |
| Tabela IRRF (faixas e deduções) | Instrução Normativa RFB | `lib/calculadora.ts` | Criar `IRRF_2027` |
| Dedução por dependente IRRF | Instrução Normativa RFB | `lib/calculadora.ts` | Atualizar `DEDUCAO_DEPENDENTE_IRRF` |
| Faixas do Seguro Desemprego | Resolução CODEFAT | `lib/calculadora.ts` | Criar `SEGURO_DESEMPREGO_2027` |

---

## 🟡 Verificar também

- [ ] Atualizar data (`data="2026-05-31"` → `data="2027-02-01"`) nas 18 calculadoras
- [ ] Data no metadata de todas as páginas
- [ ] Página `/historico-atualizacoes` — adicionar entrada "Fev/2027"
- [ ] Página `/fontes-oficiais` — verificar portarias 2027
- [ ] Post sobre tabela INSS/IRRF — criar versão 2027
- [ ] Post sobre salário mínimo — atualizar valor
- [ ] README.md — atualizar referências de 2026 para 2027

---

## 🔵 Novas leis trabalhistas

- [ ] Verificar novas MPs ou Leis alterando a CLT
- [ ] Verificar alterações na Reforma Trabalhista (Lei 13.467/2017)
- [ ] Verificar novas Súmulas do TST
- [ ] Verificar alterações no eSocial
- [ ] Verificar novas regras de FGTS digital

---

## Sugestão de rotina

1. **Janeiro**: Acompanhar DOU para publicação das portarias
2. **Fevereiro**: Atualizar constantes em `lib/calculadora.ts`
3. **Fevereiro**: Executar `pnpm run build` e validar
4. **Fevereiro**: Commit + push → deploy Vercel
5. **Março**: Publicar post "Tabelas INSS e IRRF 2027: o que mudou"
