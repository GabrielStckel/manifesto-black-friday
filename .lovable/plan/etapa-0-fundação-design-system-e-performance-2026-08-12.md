# Etapa 0 — Fundação, Design System e Performance

Criar apenas a base técnica do Manifesto Sistêmico. Nenhuma copy, nenhuma seção de conteúdo.

## O que será feito

1. **Tokens de design** em `src/styles.css`, exatamente como especificado: neutros escuros, pergaminho, latão, vermelhos, tipografia Lora/Inter, raios, camada base com `prefers-reduced-motion`.
2. **Fontes locais** via `@fontsource` (Lora 600/700, Inter 400/500/600, subset latin). Sem Google Fonts CDN.
3. **`src/lib/config.ts`** com `CHECKOUT_URL = "__CHECKOUT_URL_PENDENTE__"`.
4. **`src/content/manifesto.types.ts`** com os tipos `Meta`, `Topbar`, `CtaBar`; **`src/content/manifesto.ts`** com a estrutura tipada vazia.
5. **`src/components/manifesto/SectionShell.tsx`** e **`Reveal.tsx`**, exatamente conforme o código do documento (incluindo `data-section-bg`).
6. **`src/routes/__root.tsx`**: `lang="pt-BR"`, meta base, title/description/OG/Twitter com `[DEFINIR]`, preload dos woff2 de Lora 700 e Inter 400 (`crossOrigin="anonymous"`), 404 e tela de erro em português usando os tokens.
7. **`src/routes/index.tsx`**: `<main>` escura com o texto "Manifesto Sistêmico", só para provar que o build sobe e os tokens aplicam.

Não serão criados Topbar, CtaBar, hero, oferta, FAQ, rodapé nem ManifestoPage nesta etapa (a arquitetura de pastas fica pronta, os arquivos entram nas próximas etapas).

## Ajustes aprovados

- Instalar apenas `@fontsource/lora` e `@fontsource/inter`.
- **Sem `tw-animate-css`**: a linha `@import "tw-animate-css";` sai do `styles.css`. Todo movimento vem do `Reveal` e de `transition-colors`.
- Preload das fontes no `__root.tsx` resolvido exatamente por:
  ```ts
  import lora700Url from "@fontsource/lora/files/lora-latin-700-normal.woff2?url";
  import inter400Url from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
  ```

## Detalhes técnicos

- Tailwind v4 já está configurado via `src/styles.css` com `@theme inline` — sem `tailwind.config.js`, como pedido.
- Os `@import "@fontsource/..."` ficam no topo do `styles.css`, antes de `@theme`.
- Roteamento permanece TanStack Router por arquivo; `/` continua em `src/routes/index.tsx`.


## Verificação ao final

Confirmarei: build sem erro, fontes locais (nenhuma requisição a fonts.googleapis.com), `prefers-reduced-motion` presente, `--brass`/`--parchment` definidos com `--section-light-bg` apontando para pergaminho, e nenhum botão em latão.
