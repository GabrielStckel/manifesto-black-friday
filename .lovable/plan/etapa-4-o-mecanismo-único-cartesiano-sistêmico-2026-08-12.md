# Etapa 4 — O Mecanismo Único (Cartesiano → Sistêmico)

Nova seção conceitual em fundo escuro, construída como uma **oposição visual**: o paradigma antigo aparece fechado numa caixa apagada, sem cor; o novo aparece aberto, nítido, com acento de latão e itens que entram escalonados.

## O que será feito

1. **Tipos** (`src/content/manifesto.types.ts`)
   - Novo tipo `SectionParadigma` com `antigo` (rótulo, nome, texto) e `novo` (rótulo, nome, transição, 4 itens).
   - Adicionado à união `ManifestoSection`.

2. **Conteúdo** (`src/content/manifesto.ts`)
   - Seção `paradigma` inserida após `setenios`, com a copy exata do documento, caractere por caractere.
   - A citação "Pai é o mundo, Mãe é a vida" renderizada com aspas curvas, inline no parágrafo (sem blockquote).

3. **Componente** (`src/components/manifesto/SectionParadigma.tsx`)
   - `SectionShell` com fundo escuro; título centralizado dentro de `Reveal`.
   - Grid de 12 colunas: bloco antigo (5) — única caixa da seção, texto em baixa opacidade, zero acento de cor; divisor (2); bloco novo (5) — sem caixa, rótulo em latão, lista de quatro itens com filete lateral em latão, sem número nem ícone.
   - Divisor decorativo `aria-hidden`: vertical com `ArrowRight` no desktop, horizontal com `ArrowDown` no mobile. Ícones lucide importados nominalmente.
   - Timing: bloco antigo sem delay; itens do novo escalonados em 100/200/300/400ms.

4. **Registro** (`src/components/manifesto/ManifestoPage.tsx`)
   - Novo `case "paradigma"` e atualização do check de exaustividade.

## Restrições mantidas

- Zero copy hardcoded em `.tsx`, zero hexadecimal, só tokens existentes.
- Nenhuma dependência nova, sem `backdrop-blur`, sem parallax.
- Zero vermelho nesta seção; o acento é o latão.
- Nenhuma seção anterior é tocada.

## Verificação final

Build limpo com switch exaustivo, só o bloco antigo com caixa, ausência de vermelho, escalonamento correto, divisor trocando de orientação entre mobile e desktop e nenhum overflow horizontal a 375px (Playwright).
