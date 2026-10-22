# Etapa 8 — A oferta, o preço e a garantia

Seção final de conversão, alvo `id="oferta"` de todos os CTAs da página. Preços ficam como placeholders literais (`__VALOR_PARCELA__`, `__VALOR_A_VISTA__`) e o checkout continua `__CHECKOUT_URL_PENDENTE__` em `src/lib/config.ts` — nada de valores inventados.

## O que será construído

1. **Tipo `SectionOferta`** em `src/content/manifesto.types.ts`, adicionado à união `ManifestoSection`. Campo `preco.de` opcional e deixado ausente.
2. **Conteúdo** em `src/content/manifesto.ts`, após a seção `coletivo`, com a copy exata do documento (rótulo "Condição de lançamento", sem "plano anual").
3. **`src/components/manifesto/SectionOferta.tsx`**:
   - `SectionShell fundo="dark" id="oferta"`, título centralizado dentro de `Reveal`.
   - Card único centralizado, o único da página com borda em latão (`border-brass/25 bg-surface-dark/70`).
   - Bloco "o que está incluído" com lista e ícone `Check` em latão.
   - Divisor `h-px bg-white/10`, bloco de preço centralizado; a linha "de" só renderiza se `preco.de` existir.
   - CTA único importando `CHECKOUT_URL` do config, com ícone `ArrowRight`, texto que pode quebrar em duas linhas no mobile.
   - Bloco de garantia fora do card, com `ShieldCheck`.
4. **`ManifestoPage.tsx`**: novo `case "oferta"` e `KindsTratados` atualizado para manter o switch exaustivo.

## Restrições respeitadas

- Sem contador, escassez, prova social ou selos.
- Nenhuma dependência nova; só `lucide-react`, já em uso.
- Nenhuma seção anterior alterada.
- Só tokens, nenhum hexadecimal.

## Verificação

Build e typecheck, âncora `#oferta` alcançada pelos CTAs existentes, placeholders visíveis sem substituição, e ausência de overflow horizontal a 375px via Playwright.
