# Etapa 9 — FAQ, rodapé e barra de CTA fixa

Fecha a página: FAQ em pergaminho, rodapé sóbrio e barra fixa de CTA que segue o scroll e some ao chegar na oferta.

## O que será construído

1. **Tipos** em `src/content/manifesto.types.ts`: `SectionFaq` e `SectionRodape` adicionados à união `ManifestoSection`. O tipo `CtaBar` existente (hoje `{ texto, botao }`, com valores vazios no conteúdo e sem uso em componente) passa a ser `{ label: string }`, conforme a especificação.
2. **Conteúdo** em `src/content/manifesto.ts`: seções `faq` e `rodape` após `oferta`, com a copy exata, e `ctaBar: { label: "Quero entrar para o Manifesto" }`. Os placeholders `__URL_PRIVACIDADE__`, `__URL_TERMOS__` e `__URL_SUPORTE__` ficam intactos.
3. **`SectionFaq.tsx`**: grid 12 colunas, coluna esquerda sticky com título e filete `bg-brass/60`; acordeão manual com `useState` (primeiro item aberto), botão com `aria-expanded`/`aria-controls`, indicador circular alternando `Plus`/`Minus`, e painel animado por `grid-template-rows` com `min-h-0`. Sem Accordion do shadcn.
4. **`Footer.tsx`**: `SectionShell fundo="dark"`, grid 5/7 com marca, descrição, links, aviso legal e linha final de copyright. Sem logo, redes ou newsletter.
5. **`CtaBar.tsx`**: barra fixa, visível após 400px de scroll e escondida quando `#oferta` entra na viewport; cor adaptativa lendo `data-section-bg` via `elementFromPoint` + `closest`. Listeners `passive`, só `opacity` animada, sem `backdrop-blur`.
6. **`ManifestoPage.tsx`**: cases `faq` e `rodape`, espaçador `h-24` e `<CtaBar label={content.ctaBar.label} />` após o map; check de exaustividade atualizado.

## Verificação

Build/typecheck, acordeão abrindo e fechando com teclado e `aria-expanded` correto, barra aparecendo após 400px e sumindo na oferta, troca de cor sobre seção clara, rodapé não coberto, e sem overflow a 375px via Playwright.
