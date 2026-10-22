# Etapa 1 — Topbar + Hero

Apenas a barra superior e a dobra principal. Nenhuma outra seção. Copy 100% em `src/content/manifesto.ts`, zero texto dentro de `.tsx`.

## O que será feito

1. **`src/content/manifesto.types.ts`** — adicionar `HeroPilula` e `Hero`, manter `Topbar`, e incluir `topbar` e `hero` em `ManifestoContent`.
2. **`src/content/manifesto.ts`** — preencher a copy exata do documento (badge, h1 com quebra `\n`, subtítulo, apoio, CTA, microtexto, 4 pílulas, metadados da imagem 1080x1350).
3. **`src/components/manifesto/Topbar.tsx`** — barra fixa `h-16`, fundo `bg-section-dark-bg/80`, borda inferior, marca à esquerda em Lora, rótulo em micro-label latão à direita. Sem menu, sem `backdrop-blur`.
4. **`src/components/manifesto/Hero.tsx`** — seção full-bleed escura, grid 12 colunas no desktop e empilhada no mobile:
   - Camadas de fundo em CSS puro (`aria-hidden`, `pointer-events-none`): base de profundidade, glow radial vermelho desktop e mobile, vinheta e overlay de legibilidade.
   - Badge só no desktop (latão, único uso de latão na coluna de texto), H1 com `whitespace-pre-line` e `text-shadow` do token, subtítulo, parágrafo de apoio só no desktop.
   - CTA vermelho ancorado em `#oferta` com `ArrowRight`, microtexto e as 4 pílulas com ícones `PlayCircle`, `Users`, `CalendarDays`, `Infinity` em latão — todos importados nominalmente.
    - Coluna de imagem: bloco placeholder `aspect-[4/5]` no desktop com o markup `<picture>` AVIF/WebP já pronto e comentado acima; rótulo do placeholder vindo de `hero.imagem.placeholderLabel?` (opcional) para poder ser removido quando a foto real entrar; no mobile nada é renderizado além do glow.
5. **`src/routes/index.tsx`** — renderizar `<main>` com `<Topbar />` e `<Hero />` lendo de `manifesto.ts`.

## Fora de escopo

CtaBar, oferta, FAQ, rodapé, contadores, vídeo, carrossel, novas dependências, `backdrop-blur`, latão em botão/parágrafo/fundo, `Reveal` em Topbar/Hero. Sem passada fina de mobile — só garantir que não haja overflow horizontal.

## Detalhes técnicos

- Textos legíveis por props tipadas; nenhuma string de copy nos componentes.
- Cores sempre por token do design system; os gradientes usam `var(--red-accent)` / `var(--red-deep)` e pretos em `rgba` apenas nas camadas decorativas, conforme o documento.
- O rótulo "Foto do apresentador" do placeholder vive no conteúdo tipado como `placeholderLabel?`, para manter a regra de zero copy em `.tsx` e permitir remoção futura.
- **Hero não usa `Reveal`** — é o elemento de LCP; animação de entrada prejudicaria a primeira pintura. Topbar também não usa Reveal.

Build sem erro, nenhum overflow horizontal a 375px (checado no navegador), botão vermelho, latão apenas em badge/rótulo/ícones das pílulas, ícones lucide importados nominalmente.
