---
name: Bolso do Trabalhador
description: Portal informativo independente sobre benefícios, programas sociais e
  educação financeira para o trabalhador brasileiro.
colors:
  primary: "#1a365d"
  secondary: "#2d8a56"
  neutral-bg: "#ffffff"
  neutral-fg: "#1a365d"
  neutral-muted: "#f1f5f9"
  neutral-border: "#e2e8f0"
  accent: "#2d8a56"
  destructive: "#dc2626"
  ring: "#1a365d"
typography:
  display:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: clamp(1.75rem, 4vw, 2.5rem)
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: clamp(1.5rem, 3vw, 2rem)
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: clamp(1.125rem, 2vw, 1.375rem)
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.01em
rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.625rem
  xl: 0.75rem
spacing:
  xs: 0.5rem
  sm: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  xxl: 3rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: 0.75rem 1.5rem
  button-primary-hover:
    backgroundColor: "#1e4280"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: 0.75rem 1.5rem
  card-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: 0.5rem 0.75rem
---

# Design System: Bolso do Trabalhador

## 1. Overview

**Creative North Star: "A Banca de Jornal"**

Um sistema visual que se comunica com a confiança de um jornal impresso e a proximidade de uma conversa de bairro. O design existe para servir o conteúdo — não para competir com ele. Cada elemento tipográfico, cor e componente foi escolhido para transmitir credibilidade institucional sem parecer frio ou burocrático.

A paleta azul-profundo (`#1a365d`) ancora a marca com solidez; o verde (`#2d8a56`) traz equilíbrio e evoca segurança financeira. A tipografia usa Inter em toda a superfície, criando consistência vertical entre títulos e corpo. O layout é generoso no desktop e adaptável no mobile, priorizando escaneabilidade e leitura confortável (65–75 caracteres por linha no corpo).

Este sistema rejeita ativamente: excesso de decoração, glassmorphism, gradientes chamativos, sombras exageradas e qualquer coisa que pareça "vendedor de curso". A profundidade visual vem de camadas tonais (background, surface, border), não de sombras.

**Key Characteristics:**
- Conteúdo em primeiro lugar — o grid e a tipografia servem à informação
- Contraste forte para leitura confiável (body ≥4.5:1 contra fundo)
- Azul-profundo como âncora de credibilidade, verde como acento de confiança
- Flat por padrão, com elevação tonal e não por sombras
- Componentes sólidos e confiantes, não etéreos ou ornamentais

## 2. Colors

Uma paleta enxuta e intencional. Azul-profundo domina como identidade; verde funciona como contraponto funcional. Em dark mode, os papéis se invertem: o verde assume a liderança visual.

### Primary
- **Azul-Profundo** (`#1a365d` /* light */, `#2d8a56` /* dark */): Cor principal da marca. Usada em headers, botões primários, links no conteúdo, títulos de destaque. Em dark mode, o verde-sólido assume este papel.

### Secondary
- **Verde-Sólido** (`#2d8a56` /* light */, `#1a365d` /* dark */): Contraponto funcional. Usada em botões secundários, badges, acentos em cards, calls-to-action. Em dark mode, o azul-profundo ocupa este papel.

### Neutral
- **Branco-Puro** (`#ffffff`): Fundo principal em light mode.
- **Azul-Profundo** (`#1a365d`): Cor do texto principal (foreground) em light mode.
- **Azul-Muito-Claro** (`#f1f5f9`): Fundo de superfícies secundárias (muted, card acentos).
- **Slate-200** (`#e2e8f0`): Borda de elementos, separadores.
- **Slate-900** (`#0f172a`): Fundo principal em dark mode.
- **Slate-100** (`#f1f5f9`): Foreground do texto em dark mode (ajustado para `#f8fafc`).

### Named Rules
**A Regra do Acento Único.** O verde-sólido aparece em ≤15% de qualquer tela. Sua função é destacar o essencial — nunca decorar. Quando tudo é verde, nada é importante.

## 3. Typography

**Display & Body Font:** Inter (com fallback system-ui, sans-serif)
**Mono Font:** Geist Mono (com fallback monospace)

**Caráter:** Monotipo consistente. Uma só família tipográfica (Inter) atravessa toda a hierarquia, criando coesão vertical e eliminando o ruído visual de múltiplas fontes. A personalidade vem do peso e do tracking, não de trocas de família.

### Hierarchy
- **Display** (700, `clamp(1.75rem, 4vw, 2.5rem)`, 1.2): Títulos de página e hero sections. Uso exclusivo para a abertura de conteúdo principal.
- **Headline** (700, `clamp(1.5rem, 3vw, 2rem)`, 1.25): Títulos de seção dentro de páginas. Separa blocos de conteúdo.
- **Title** (600, `clamp(1.125rem, 2vw, 1.375rem)`, 1.3): Títulos de cards e componentes. Subtítulos de seção.
- **Body** (400, `1rem`, 1.625): Texto corrido e conteúdo de artigos. Máximo de 65–75 caracteres por linha para leitura confortável.
- **Label** (500, `0.875rem`, 1.25, tracking 1%): Rótulos de formulário, metadata, badges, navegação secundária.

## 4. Elevation

Sistema flat por padrão. A profundidade visual é construída exclusivamente por camadas tonais (variações sutis de background) e não por sombras projetadas. Onde sombras são usadas, são mínimas e servem apenas para distinguir modais e dropdowns do conteúdo subjacente.

Não há drop shadows na maioria dos componentes. A hierarquia visual é comunicada por peso tipográfico, cor e espaçamento — não por elevação artificial.

**A Regra do Plano Único.** Superfícies são planas em repouso. Sombra, se existir, aparece apenas como resposta a estado (hover de componente interativo, foco de teclado). Jamais como artifício decorativo.

## 5. Components

### Buttons
- **Shape:** Cantos levemente arredondados (10px)
- **Primary:** Fundo azul-profundo (`#1a365d`), texto branco, padding vertical 12px, horizontal 24px. Peso 500.
- **Hover:** Darken de 8% no fundo (`#1e4280`). Transição suave de 150ms.
- **Focus:** Outline de 2px com a cor de ring (`#1a365d`), offset 2px.
- **Secondary:** Fundo verde (`#2d8a56`), texto branco. Mesmo padding e raio.
- **Ghost:** Sem fundo, texto azul-profundo, hover com fundo sutil.

### Cards
- **Corner Style:** Cantos arredondados (10px)
- **Background:** Branco puro (light) ou slate-900 (dark)
- **Border:** `1px solid #e2e8f0` (light) ou `#334155` (dark)
- **Shadow Strategy:** Nenhuma. A separação visual vem da borda e do background.
- **Internal Padding:** 24px (padrão), 16px (compacto em mobile)

### Inputs / Fields
- **Style:** Borda de 1px (`#e2e8f0`), background branco, raio de 8px.
- **Focus:** Borda azul-profundo, ring de 2px com opacidade.
- **Error:** Borda vermelha (`#dc2626`), ring vermelho com opacidade.
- **Disabled:** Opacidade 50%, cursor not-allowed.

### Navigation (Header)
- **Estilo:** Sticky top, fundo branco/transparente com blur. Altura ~64px.
- **Links:** Texto azul-profundo, peso 500. Hover com underline sutil.
- **Mobile:** Menu em slide lateral (Sheet/drawer), fundo branco, links em pilha vertical.

### Table (Premium)
- **Estilo:** Azul-claro no header, zebra striping no corpo, bordas horizontais sutis.
- **Primeira coluna:** Sticky (fixa à esquerda em scroll horizontal).
- **Hover:** Linha destacada com fundo mais escuro.

### Footer
- **Estilo:** Fundo azul-profundo (`#1a365d`), texto branco. Dividido em colunas de links e informações institucionais.
- **Links:** Branco com opacidade 80%, hover opacidade 100%.

## 6. Do's and Don'ts

### Do:
- **Do** usar azul-profundo como cor dominante e verde como acento funcional.
- **Do** manter body text com contraste ≥4.5:1 contra o fundo.
- **Do** usar a hierarquia tipográfica definida (Display → Headline → Title → Body → Label).
- **Do** preferir camadas tonais a sombras para indicar profundidade.
- **Do** manter cards com borda sutil em vez de sombra.
- **Do** limitar o verde-sólido a ≤15% da tela para preservar seu impacto.
- **Do** usar linguagem clara e direta em botões e CTAs ("Calcular", "Simular", "Ler mais").

### Don't:
- **Don't** usar glassmorphism, gradientes chamativos ou purple gradients.
- **Don't** usar sombras exageradas ou múltiplas camadas de drop shadow.
- **Don't** misturar múltiplas famílias tipográficas (Inter é a única sans-serif do sistema).
- **Don't** usar texto cinza claro sobre fundo colorido — parece lavado e reduz legibilidade.
- **Don't** decorar elementos sem função — cada componente existe para servir o conteúdo.
- **Don't** imitar estética de "vendedor de curso" ou "SaaS genérico".
- **Don't** usar neon accents, glassmorphism, ghost cards ou over-rounding.
