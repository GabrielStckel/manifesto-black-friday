# Etapa 2 — Diagnóstico (As Duas Mentiras)

Cria a arquitetura de seções tipadas que todas as próximas etapas vão usar e implementa a primeira seção de conteúdo.

## 1. Tipos (`src/content/manifesto.types.ts`)

- `Fundo = "dark" | "light" | "red"`
- `SectionMentiras` com `kind`, `fundo`, `titulo` e `itens[] { rotulo, mentira, rotuloVerdade, verdade }`
- `ManifestoSection = SectionMentiras` (união que será estendida, nunca substituída)
- `ManifestoContent` ganha `sections: ManifestoSection[]`

## 2. Conteúdo (`src/content/manifesto.ts`)

Array `sections` com a seção `mentiras` (fundo `dark`), título e as duas mentiras copiadas caractere por caractere, com as aspas internas de `"bela história"` escapadas. O campo `mentira` fica sem aspas — as curvas entram no JSX.

## 3. `src/components/manifesto/ManifestoPage.tsx`

Composição: Topbar e Hero acima, depois `content.sections.map` com `switch` exaustivo sobre `kind`, sem `default` silencioso (checagem `never` para forçar erro de tipo ao adicionar um kind novo).

## 4. `src/components/manifesto/SectionMentiras.tsx`

Dentro de `SectionShell fundo={fundo}`:
- Título centralizado, `max-w-3xl`, serifado, dentro de `Reveal`
- `<ul>` grid `md:grid-cols-2`, `md:items-stretch`; cada item em `<Reveal as="li">` com delay 0ms / 120ms
- Card `<article h-full>`: rótulo em latão → mentira em serifada itálica apagada entre aspas curvas → filete de latão de 48px → rótulo da verdade em vermelho → texto da verdade → numeração decorativa gigante em latão translúcido atrás do conteúdo (`aria-hidden`)
- Sem hover, sem ícone, sem `line-through`, sem vermelho em fundo/borda

## 5. `src/routes/index.tsx`

Passa a renderizar apenas `<ManifestoPage content={manifesto} />`.

## Verificação

Build sem erro, switch exaustivo, cards com mesma altura no desktop, latão só em rótulo/filete/numeração, sem overflow horizontal a 375px. Nenhuma dependência nova; Topbar, Hero e `styles.css` intocados.
