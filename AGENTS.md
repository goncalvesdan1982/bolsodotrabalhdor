# Bolso do Trabalhador

**Domínio:** `https://www.bolsodotrabalhador.online/`

## Objetivo do projeto

Portal informativo independente sobre benefícios, programas sociais, educação financeira, direitos do trabalhador, renda e consulta de informações públicas. Não substitui canais oficiais.

## Stack detectada

- Next.js 16.2.6 (App Router)
- React 19.2.4
- TypeScript 5.7.3
- Tailwind CSS 4.2.0
- shadcn/ui (Radix UI)
- ESLint 10.4.1 (flat config)
- PostCSS 8.5
- Vitest (testes)
- pnpm (gerenciador de pacotes)

## Comandos do projeto

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor de desenvolvimento |
| `npm run build` | Compilar projeto para produção |
| `npm run start` | Iniciar servidor de produção |
| `npm run lint` | ESLint em todos os arquivos |
| `npm run test` | Vitest |
| `npm run test:coverage` | Vitest com cobertura |

## Regras de conteúdo

### Linguagem cautelosa (YMYL)
- Nunca usar "site oficial", "consulta oficial", "garantido", "100% correto", "sempre", "nunca", "direito garantido" sem base, "aprovado automaticamente", "você vai receber", "liberação garantida", "benefício garantido", "maior portal", "especialistas" sem credencial, "advogados" se não existir equipe jurídica.
- Preferir: "pode ter direito", "pode variar conforme as regras do programa", "consulte os canais oficiais", "use como referência inicial", "confirme no site do governo ou órgão responsável", "as regras podem mudar", "a aprovação depende da análise do órgão responsável", "o site não substitui atendimento oficial", "as informações são educativas e podem exigir confirmação".

### Transparência
- O site deve deixar claro que é um portal informativo independente.
- Não representa governo, Caixa, INSS, Ministério do Trabalho, Poupatempo, Gov.br ou qualquer órgão público.
- Não aprova benefícios, não faz cadastro oficial, não consulta dados sigilosos.
- Não substitui atendimento em canais oficiais.
- Não solicita senha, código de autenticação, dados bancários sensíveis ou pagamento.
- Orientar o usuário a confirmar informações em canais oficiais.

### Reforço em conteúdo de benefícios
- Critérios podem mudar.
- Aprovação depende do órgão responsável.
- Valores e datas podem variar.
- Links oficiais devem ser priorizados.
- Usuário deve desconfiar de golpes.

## Regras técnicas

- Preservar slugs existentes.
- Preservar canonical.
- Preservar sitemap dinâmico (`app/sitemap.ts`).
- Preservar schema JSON-LD.
- Não alterar rotas sem necessidade.
- Não adicionar dependências sem autorização.
- Sempre rodar `npm run build` antes de commit.
- Checar `git status --short` antes e depois de alterações.

## Regras de SEO

- Evitar canibalização de palavras-chave.
- Evitar conteúdo raso (thin content).
- Evitar páginas programáticas sem valor agregado.
- Usar FAQ com cautela (perguntas reais, respostas completas).
- Usar links internos reais e contextuais.
- Usar links oficiais para gov.br, Caixa, INSS, Receita Federal quando possível.
- Preservar metadata (title, description, canonical, OG, Twitter).

## Regras de segurança

- Não implementar formulários que solicitem CPF, senha, código de autenticação, dados bancários ou informações sigilosas.
- Não criar formulários de cadastro falso.
- Não simular atendimento oficial.
- Não induzir o usuário a pagar taxa para liberar benefício.
- Não armazenar dados sensíveis sem política de privacidade clara.

## Regras de commit

- Commits pequenos e claros por escopo.
- Relatório final com: arquivos alterados, resultado do build, lint se aplicável, hash do commit, push, working tree.
