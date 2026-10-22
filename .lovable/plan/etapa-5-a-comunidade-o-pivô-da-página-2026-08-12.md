# Etapa 5 — A Comunidade (o pivô da página)

Seção curta e arejada que fecha o diagnóstico e nomeia a solução. Fundo pergaminho, texto centralizado, corpo maior que o resto da página, nenhum card, nenhum CTA.

## O que será feito

1. **Tipos** (`src/content/manifesto.types.ts`)
   - Novo `SectionComunidade` com `kind: "comunidade"`, `fundo`, `titulo`, `texto`.
   - Adicionado à união `ManifestoSection` e ao check de exaustividade.

2. **Conteúdo** (`src/content/manifesto.ts`)
   - Nova entrada após `paradigma`, com o título de duas linhas (`\n`) e o parágrafo copiados caractere por caractere do briefing.

3. **Componente** (`src/components/manifesto/SectionComunidade.tsx`)
   - `SectionShell` com `className="md:py-32"` para o respiro extra no desktop.
   - Container `mx-auto max-w-3xl text-center`.
   - Filete de latão decorativo (`h-px w-16 bg-brass/60`, `aria-hidden`) acima do título.
   - Título em `Reveal`, com `whitespace-pre-line` para respeitar a quebra.
   - Parágrafo em `Reveal delay={120}`, com corpo maior (`16.5px` → `18px` no sm) e largura de leitura `max-w-[58ch]`.

4. **Registro** (`src/components/manifesto/ManifestoPage.tsx`)
   - Novo `case "comunidade"` no switch.

## Restrições respeitadas

- Zero copy hardcoded no `.tsx`; zero hexadecimal; só tokens.
- Nenhum `text-brass` em texto (fundo claro); latão só no filete gráfico.
- Nenhuma dependência nova, nenhum card/ícone/coluna/CTA, nenhuma alteração nas seções anteriores.

## Verificação

Build e typecheck, switch exaustivo, título quebrando em duas linhas, corpo visivelmente maior que o das outras seções e ausência de overflow horizontal a 375px.
