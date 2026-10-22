# Etapa 6 — As trilhas de conhecimento

Seção escura em formato de catálogo: quatro trilhas como objetos idênticos numa grade 2×2, com capa tipográfica no lugar do futuro poster.

## O que será feito

1. **Tipos** (`src/content/manifesto.types.ts`)
   - `Trilha` com `numero`, `rotulo`, `titulo`, `texto`, `poster?` e `status?`.
   - `SectionTrilhas` (`kind: "trilhas"`, `fundo`, `titulo`, `subtitulo`, `trilhas`), adicionado à união `ManifestoSection`.

2. **Conteúdo** (`src/content/manifesto.ts`)
   - Seção `trilhas` após `comunidade`, com as quatro temporadas copiadas caractere por caractere (aspas internas de "pequeno" escapadas). Nenhum `status` preenchido.

3. **Componente** (`src/components/manifesto/SectionTrilhas.tsx`)
   - Cabeçalho centralizado (título + subtítulo) dentro de `Reveal`.
   - Grade `sm:grid-cols-2` com `items-stretch`; cada card em `Reveal as="li"` com delay 0/100/200/300 e `h-full`.
   - Card `<article>` não clicável: borda sutil, `bg-surface-dark/60`, `group`, hover altera apenas a cor da borda.
   - Capa `aspect-[16/9]`: brilho radial em latão (opacidade 0.13 → 0.25 no hover), número da temporada em Lora gigante (`text-brass/25` → `/40` no hover), selo de status renderizado só se existir.
   - Caminho de `poster` implementado: quando presente, renderiza `<img>` lazy cobrindo a capa e oculta número e brilho.
   - Corpo do card: rótulo em latão, título e texto.

4. **Registro** (`src/components/manifesto/ManifestoPage.tsx`)
   - Novo `case "trilhas"` e `KindsTratados` atualizado.

## Restrições respeitadas

- Sem carrossel, sem nova dependência, sem `transform: scale`, sem vermelho, sem grade de 4 colunas, sem CTA nos cards.
- Zero copy hardcoded no `.tsx`, zero hexadecimal — apenas tokens existentes (`brass`, `surface-dark`, `radius-pill`).

## Verificação

Build/typecheck, switch exaustivo, quatro cards de mesma altura no desktop, hover só em borda e brilho, e ausência de overflow horizontal a 375px (Playwright).
