# Etapa 12 — Redesenho do Hero (sem foto)

Hero passa a ser puramente tipográfico: coluna única centralizada, sem imagem, sem placeholder. Nenhuma copy nova, nenhuma seção nova, nenhuma dependência nova.

## O que será feito

1. **`src/content/manifesto.types.ts`** — remover o campo `imagem` do tipo `Hero`.
2. **`src/content/manifesto.ts`** — remover o objeto `imagem` do `hero`. Badge, h1, subtítulo, apoio, cta, microtexto e pílulas permanecem exatamente como estão.
3. **`src/components/manifesto/Hero.tsx`** — reescrever:
   - Seção `flex min-h-[92svh] items-center`, `pt-24 pb-16`, `md:min-h-[88vh]`.
   - Trocar as cinco camadas de fundo atuais por exatamente três (base de profundidade, glow radial central atrás do texto com `opacity: 0.42`, vinheta) — todas válidas em todos os breakpoints, sem `md:hidden` / `hidden md:block`.
   - Container único `max-w-3xl text-center`; grid de 12 colunas e coluna de imagem removidos, incluindo o bloco `<picture>` comentado.
   - Badge vira linha de abertura editorial (texto puro em latão, visível no mobile), seguido de filete `h-px w-10 bg-brass/50`.
   - H1 maior no desktop (`md:text-[clamp(2.1rem,4vw,3.1rem)]`), mantendo `text-shadow` do token.
   - Subtítulo centralizado; apoio segue oculto no mobile.
   - CTA centralizado, `max-w-[420px]`, com quebra em duas linhas permitida no mobile; microtexto abaixo.
   - Pílulas viram faixa de metadados sem borda/fundo: grade 2×2 no mobile com filete superior, linha única centralizada a partir de `sm`.
4. **`src/routes/__root.tsx`** — verificação apenas: os dois `preload` existentes são das fontes (Lora 700, Inter 400) e permanecem; não há preload de imagem para remover.

## Fora de escopo

Reveal no Hero, indicador de scroll, vídeo, background animado, mudanças de copy, qualquer outra seção.

## Verificação

Medir a 360/390/414px: CTA visível sem scroll, badge em no máximo duas linhas, pílulas em grade 2×2, glow visível atrás do texto, zero overflow horizontal, nenhuma referência a `imagem` restante e nenhum warning de preload no console. No desktop: bloco centralizado em `max-w-3xl`, sem coluna vazia, H1 visivelmente maior.
