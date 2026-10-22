# Etapa 7 — A força do coletivo (campo mórfico)

Seção de declaração em fundo vinho, a única quebra cromática da página, logo após as trilhas. Sem CTA, sem cards, sem prova social, sem latão.

## O que será feito

1. **Tipos** (`src/content/manifesto.types.ts`): novo `SectionColetivo` (`kind: "coletivo"`, `fundo`, `titulo`, `texto`) e inclusão na união `ManifestoSection`.
2. **Conteúdo** (`src/content/manifesto.ts`): seção adicionada ao final de `sections`, com `fundo: "red"` e a copy exata do documento (título e parágrafo, caractere por caractere).
3. **Componente** (`src/components/manifesto/SectionColetivo.tsx`):
   - `SectionShell fundo={fundo} className="md:py-32"`.
   - Camada decorativa única: `div aria-hidden` absoluto em `inset-0`, `pointer-events-none`, com `background: radial-gradient(90% 70% at 50% 40%, transparent 45%, rgba(0,0,0,0.35) 100%);` para o vinho não ficar chapado e o brilho se concentrar no centro.
   - Container `relative mx-auto max-w-3xl text-center`.
   - Título em `Reveal`, display serif, `text-section-red-fg`, clamp responsivo.
   - Filete divisor `mx-auto mt-8 h-px w-16 bg-on-red/35`.
   - Texto em `Reveal delay={120}`, corpo maior, `text-section-red-fg/90`, `max-w-[58ch]`.
4. **Composição** (`src/components/manifesto/ManifestoPage.tsx`): novo `case "coletivo"` e atualização do tipo `KindsTratados` do check de exaustividade.

## Notas técnicas

- Nenhuma dependência nova, nenhum hex hardcoded fora do gradiente decorativo em preto translúcido, nenhum acento de latão.
- Seções anteriores permanecem intactas.
- Verificação ao final: build/typecheck sem erro, switch exaustivo, contraste do branco a 90% sobre vinho, e ausência de overflow horizontal a 375px.
