# Etapa 15 — Sistema de efeitos e profundidade

Nenhuma seção, copy ou dependência nova. Só profundidade visual: campo de constelação no hero, orbe, grão no pergaminho e glows posicionais.

## O que muda

1. **Tokens** (`src/styles.css`): apenas `--brass-glow` em `:root` e `--color-brass-glow` no `@theme inline`. Sem `--orbita-lenta`/`--orbita-media` (seriam CSS morto). `--brass-glow` é exclusivo de efeito, nunca de texto.

2. **Campo de constelação** — novo `src/components/manifesto/CampoConstelacao.tsx`: canvas confinado ao hero, partículas em latão ligadas por linhas finas, reação ao cursor no desktop. Três invariantes: canvas dentro do hero (não `fixed`), loop pausado por `IntersectionObserver`, cálculo de linhas por grade espacial (não laço duplo). 30fps alvo, densidade menor no toque, e nada inicia sob `prefers-reduced-motion`.

3. **Orbe** — novo `src/components/manifesto/Orbe.tsx`: esfera só de gradientes + `box-shadow` interno estático e dois anéis. Sem animação.

4. **Hero** — camadas na ordem: base de profundidade → campo → orbe → glow radial → vinheta → conteúdo (`relative z-10`).

5. **Textura de pergaminho** — `[data-section-bg="light"]::before` com grão em `radial-gradient` 3px. Funciona sem tocar componentes (o `SectionShell` já é `relative` e já emite `data-section-bg`).

6. **Transição das seções escuras** — `[data-section-bg="dark"]::after`, faixa de 120px esmaecendo para vinho translúcido.

7. **Glows posicionais** em três seções, cada uma em coordenada diferente: Mentiras `15% 25%`, Paradigma `85% 40%`, Oferta `50% 88%`. Conteúdo dessas seções recebe `relative z-10`. Trilhas, Comunidade e Coletivo ficam sem glow.

8. **Setênios** — anel externo estático `inset-[-5px]` nos marcadores numerados.

## Restrições respeitadas

Sem bibliotecas de partículas, sem cursor customizado, sem parallax/scroll-effects, sem animar `box-shadow`/`filter`/`width`/`top`/`left`, sem mudança de copy ou placeholders.

## Verificação ao final

- Screenshots do hero (desktop e mobile) e de uma seção em pergaminho para avaliar o grão.
- Lighthouse mobile comparado à Etapa 10; se cair mais de 5 pontos, reporto número e causa sem compensar por conta própria.
- Confirmação de que o canvas para de desenhar fora da viewport.
- Confirmação de que `prefers-reduced-motion` impede o canvas de iniciar.
