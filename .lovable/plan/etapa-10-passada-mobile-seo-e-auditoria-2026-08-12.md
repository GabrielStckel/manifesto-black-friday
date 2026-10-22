# Etapa 10 — Passada mobile, SEO e auditoria

Sem conteúdo novo, sem dependências novas, sem substituir placeholders.

## Parte A — Mobile (360 / 390 / 414px)

Varredura com Playwright nas três larguras, medindo `scrollWidth` vs `innerWidth`, tamanhos de fonte de corpo, altura de áreas de toque e quebras de título. Ajustes previstos (só se a medição confirmar o problema):

- `SectionShell` passará a usar `tailwind-merge` para mesclar as classes base com `className`:
  `className={twMerge("relative px-5 py-16 sm:px-8 sm:py-20 md:py-24", BG[fundo], className)}`.
  Assim, `className="py-14"` sobrescreve o `py-16` de forma determinística e seções sem `className` mantêm o padding original.
- Seções longas (`setenios`, `paradigma`, `trilhas`): `className="py-14"` pontual, sem mexer no padrão do `SectionShell`.
- Trilhas: número da temporada de `text-[64px]` para `text-[52px]` no mobile, mantendo `sm:text-[72px]`.
- Setênios e FAQ: confirmar que `sticky` só vale de `md:` para cima (já está) e que a linha vertical de encadeamento encerra no terceiro marcador nas três larguras.
- Hero: confirmar badge e parágrafo de apoio ocultos no mobile e CTA visível a 360px com scroll mínimo.
- Paradigma: confirmar divisor horizontal com `ArrowDown` no mobile.
- Rodapé/CtaBar: confirmar que o espaçador `h-24` impede a barra de cobrir o último elemento; aumentar o espaçador se faltar folga.
- Áreas de toque abaixo de 44px (gatilhos do FAQ e links do rodapé, se medirem menos) ganham padding vertical.

## Parte B — SEO e metadados

No `src/routes/__root.tsx`:

- Substituir os `[DEFINIR]` pelo title e description definidos, replicados em `og:*` e `twitter:*`.
- Acrescentar `og:site_name` = Manifesto Sistêmico (og:type, og:locale e twitter:card já existem).
- `<link rel="canonical">` com `__URL_PRODUCAO__` e `og:image` / `twitter:image` com `__URL_OG_IMAGE__` — placeholders, sem inventar URL.
- JSON-LD `FAQPage` serializado com `JSON.stringify` a partir da própria seção `faq` de `src/content/manifesto.ts`, renderizado com `dangerouslySetInnerHTML` — sem duplicar texto.
- Sem schema de Product/Offer.

Estrutura semântica: um único `<h1>` (Hero) — confirmado; títulos de seção já são `h2` e cards `h3`. Correção necessária: no `SectionFaq`, a pergunta hoje está em `<span>` dentro do botão; passa a `<h3>` envolvendo o `<button>`. `<html lang="pt-BR">` já presente.

## Parte C — Auditoria

- Lighthouse mobile contra o build de produção servido localmente (CLI via `nix run`, sem adicionar dependência ao projeto); reporto LCP, CLS, TBT, Performance e Acessibilidade métrica por métrica. Se alguma meta falhar, reporto número real e causa em vez de otimizar por conta própria.
- Checagem de rede: nenhuma requisição a `fonts.googleapis.com` / `fonts.gstatic.com`; só os pesos Lora 600/700 e Inter 400/500/600 baixados.
- `<img>` com `width`/`height` explícitos; nenhum `console.log` de aplicação em produção.
- Remover `tw-animate-css` do `package.json` (ainda listado, sem uso no código).
- Acessibilidade: contraste AA (nas seções em pergaminho só `text-brass-ink`; `text-brass` claro aparece hoje apenas em fundos escuros — reconfirmo item a item), ordem de Tab, `:focus-visible`, `aria-hidden` em decorativos e teste com `prefers-reduced-motion: reduce`.

## Placeholders (verificados agora, intactos)

`__VALOR_PARCELA__`, `__VALOR_A_VISTA__` (manifesto.ts), `__CHECKOUT_URL_PENDENTE__` (config.ts), `__URL_PRIVACIDADE__`, `__URL_TERMOS__`, `__URL_SUPORTE__` (manifesto.ts). Serão acrescentados `__URL_PRODUCAO__` e `__URL_OG_IMAGE__`.

## Entregável

Relatório final com números do Lighthouse, ajustes de mobile por seção, confirmação de ausência de CDN de fontes, lista de placeholders e achados de acessibilidade.
