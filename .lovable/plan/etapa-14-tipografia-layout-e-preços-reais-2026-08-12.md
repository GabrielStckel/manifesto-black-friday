# Etapa 14 — Tipografia, layout e preços reais

Quatro frentes, sem seções novas e sem dependências novas.

## Parte A — Justificação com hifenização

Aplicar sempre o par `text-justify hyphens-auto` (nunca um sem o outro) nos parágrafos de leitura longa:

- `SectionMentiras.tsx` — texto da verdade em cada card
- `SectionSetenios.tsx` — abertura e texto de cada elo
- `SectionParadigma.tsx` — texto do bloco antigo, transição e os quatro itens
- `SectionComunidade.tsx` — parágrafo principal (remover `text-center` do parágrafo, manter no título)
- `SectionColetivo.tsx` — parágrafo principal (idem)
- `SectionTrilhas.tsx` — texto do card apenas a partir de `sm:` (`sm:text-justify sm:hyphens-auto`)
- `SectionOferta.tsx` — itens da lista de inclusos e texto da garantia
- `SectionFaq.tsx` — respostas (perguntas não)

Não justificar: títulos, subtítulos, micro-labels, badge e subtítulo do hero, microtexto, botões, links e aviso do rodapé.

## Parte B — Remover o comportamento sticky

`SectionSetenios.tsx` e `SectionFaq.tsx` deixam o grid de 12 colunas com coluna esquerda `md:sticky` e passam ao padrão do resto da página:

- Cabeçalho: `mx-auto max-w-3xl text-center` (título, filete `mx-auto mt-6 h-px w-12 bg-brass/60`, abertura justificada em `max-w-[58ch]`)
- Conteúdo abaixo: elos em `mx-auto mt-14 max-w-2xl`; FAQ em `mx-auto mt-12 max-w-3xl`
- Estrutura interna (linha vertical, marcadores, acordeão) permanece igual
- Topbar e CtaBar continuam `fixed`; nenhum sticky novo

## Parte C — Novos textos de CTA

Em `src/content/manifesto.ts`:

- `hero.cta` → "Entrar para o Manifesto"
- `ctaBar.label` → "Entrar para o Manifesto"
- `oferta.cta` → "Quero tomar minha vida"

Nenhuma outra copy muda.

## Parte D — Preços reais

Em `oferta.preco`: `parcelado: "12x de R$ 103,11"`, `aVista: "ou R$ 997,00 à vista"`. O campo `de` continua ausente.

`__CHECKOUT_URL_PENDENTE__`, `__URL_PRIVACIDADE__`, `__URL_TERMOS__`, `__URL_SUPORTE__`, `__URL_PRODUCAO__` e `__URL_OG_IMAGE__` permanecem intactos.

## Verificação

Playwright a 360/390/414px e desktop:

- hífens visíveis em parágrafos longos a 390px
- nenhum `text-justify` sem `hyphens-auto`; nenhum `sticky` restante
- setênios e FAQ sem vazio à esquerda no desktop (screenshot)
- os três botões em uma linha a 360px
- preços corretos e sem overflow horizontal
