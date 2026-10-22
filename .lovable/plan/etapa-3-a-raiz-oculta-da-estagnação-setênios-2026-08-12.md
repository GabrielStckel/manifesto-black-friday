# Etapa 3 — A raiz oculta da estagnação (Setênios)

Primeira seção em pergaminho. Parte A corrige o design system antes da seção.

## Parte A — Tokens de acento para fundo claro (`src/styles.css`)

Adicionar (sem alterar nada existente):
- Em `@theme inline`: `--color-brass-ink` e `--color-red-ink`
- Em `:root`, abaixo dos tokens de latão: `--brass-ink: oklch(0.4542 0.0745 82.10)` (#6B5220) e `--red-ink: var(--red-deep)`, com o comentário explicando o motivo de contraste

Regra permanente: fundo `dark` usa `text-brass` / `text-red-accent`; fundo `light` usa `text-brass-ink` / `text-red-ink`. Filete, borda e linha decorativa podem seguir em `brass` em qualquer fundo.

## Parte B — A seção

### 1. Tipos (`manifesto.types.ts`)
`SectionSetenios` com `kind`, `fundo`, `titulo`, `abertura` e `elos[] { titulo, texto }`, adicionado à união `ManifestoSection` (e ao guard de exaustividade do `ManifestoPage`).

### 2. Conteúdo (`manifesto.ts`)
Seção `setenios` com fundo `light`, adicionada após `mentiras`, copiada caractere por caractere, com as aspas internas escapadas.

### 3. `SectionSetenios.tsx`
Cadeia causal de três elos (Registro → Busca → Medo), não uma linha do tempo.
- Grid `md:grid-cols-12`
- Coluna esquerda `md:col-span-5`, sticky só no desktop: título serifado + filete de latão + abertura, em `Reveal`
- Coluna direita `md:col-span-7`: `<ol>` relativa com linha vertical de latão translúcida indo do primeiro ao último marcador, sem sobra abaixo do terceiro
- Cada elo em `<Reveal as="li">` com delay 0/120/240ms: marcador circular com fundo pergaminho (corta a linha) e número em `text-brass-ink`, título e texto
- Sem cards, sem bordas, sem ícones; latão em texto só via `brass-ink`

### 4. `ManifestoPage.tsx`
Novo `case "setenios"` e atualização do check de exaustividade.

## Verificação
Build sem erro, tokens antigos intactos, nenhum texto latão claro sobre pergaminho, linha sem sobra, círculos opacos, sticky ativo só em desktop, sem overflow a 375px.
