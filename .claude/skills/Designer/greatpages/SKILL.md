---
name: greatpages
description: Converte um HTML gerado pelo /lp (Tailwind CDN + Lucide + Google Fonts) para um bloco compatível com o editor GreatPages. Remove dependências de CDN, converte Tailwind utilities para CSS vanilla, adapta elementos fixed/sticky, escopos CSS e JS. Saída: um único bloco HTML pronto para colar no editor GreatPages.
---

# Skill: Conversor HTML → GreatPages

Converte qualquer HTML gerado pelo `/lp` para funcionar dentro do editor do GreatPages sem depender de CDN externo.

`$ARGUMENTS`

---

## Por que o HTML do /lp não funciona direto no GreatPages

O GreatPages funciona com **blocos HTML** inseridos dentro do editor drag-and-drop. Cada bloco vai para dentro de uma `<div>` gerenciada pela plataforma — não há acesso ao `<head>` da página. Isso significa:

| Problema | Por que quebra | Como resolver |
|---|---|---|
| `<script src="cdn.tailwindcss.com">` | CDN externo não executa antes do render | Converter classes Tailwind → CSS vanilla |
| `tailwind.config = {...}` | Depende do CDN estar carregado | Substituir por CSS variables + classes custom |
| `<link href="fonts.googleapis.com">` | Tags `<link>` são ignoradas fora do `<head>` | Substituir por `<style>@import url(...)</style>` |
| `<script src="unpkg.com/lucide">` | CDN externo, pode falhar silenciosamente | Substituir por SVG inline |
| `position: fixed` (navbar, sticky CTA) | GreatPages controla o overflow do container | Remover ou converter para `sticky` |
| Conflito de CSS global | Os estilos vazam para fora do bloco | Escopar tudo com prefixo único |
| Conflito de JS global | Funções globais colidem com o JS do GreatPages | Envolver em IIFE |

---

## Processo de conversão

### Etapa 1 — Ler e diagnosticar o HTML

Leia o arquivo de entrada e identifique:
- Dependências CDN (Tailwind, Lucide, fontes)
- Elementos com `position: fixed` ou `position: sticky`
- Tailwind config customizado (cores, fontes)
- Classes Tailwind utilitárias usadas (grid, flex, text, bg, padding, etc.)
- Classes custom já definidas em `<style>` (estas funcionam — apenas precisam de escopo)
- Funções JS globais (window.X, funções declaradas no top-level)

---

### Etapa 2 — Definir o wrapper de escopo

Crie um **prefixo único** para isolar os estilos do bloco do restante da página GreatPages.

Formato: `.gp-[slug-da-lp]` — exemplo: `.gp-iphone-event`

Toda regra CSS deve começar com esse seletor. Todo o HTML fica dentro de uma `<div class="gp-iphone-event">`.

---

### Etapa 3 — Converter dependências CDN

#### 3A — Google Fonts

Remova o `<link>` e adicione no início do `<style>`:

```html
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  /* resto do CSS */
</style>
```

#### 3B — Tailwind CDN + tailwind.config

Remova completamente:
```html
<!-- REMOVER -->
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = { ... }</script>
```

As cores e fontes customizadas do `tailwind.config` viram CSS variables no `:root` (ou no seletor de escopo):

```css
.gp-iphone-event {
  --color-primary: #0071E3;
  --font-sans: 'Inter', system-ui, sans-serif;
  font-family: var(--font-sans);
  /* etc */
}
```

#### 3C — Lucide Icons CDN

Remova:
```html
<!-- REMOVER -->
<script src="https://unpkg.com/lucide@latest"></script>
<!-- REMOVER chamada -->
<script>lucide.createIcons();</script>
```

Substitua cada `<i data-lucide="nome-do-icon">` por seu SVG inline equivalente. Use `width="20" height="20"` como padrão. Exemplos de ícones comuns:

```html
<!-- check -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 13 4 10"></polyline><line x1="20" y1="6" x2="9" y2="13"></line></svg>

<!-- x (close/cross) -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>

<!-- plus -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

<!-- menu (hamburger) -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>

<!-- camera -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>

<!-- lock -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>

<!-- layers -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>

<!-- accessibility -->
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="1"></circle><path d="m9 9 3-3 3 3"></path><path d="m3 12 4-1 3 3 3-3 4 1"></path><path d="m9 20 1.5-3 1.5-1 1.5 1L15 20"></path></svg>
```

Para ícones não listados aqui, busque o SVG path em `lucide.dev` e use inline.

---

### Etapa 4 — Adaptar elementos fixed/sticky

#### Navbar fixed

O GreatPages tem seu próprio header e controla o scroll do container. Um `position: fixed` dentro do bloco vai flutuar sobre elementos errados ou ficar invisível.

**Regra:** Remova o `<nav>` completamente do bloco HTML. O GreatPages tem componente de navegação nativo — o cliente usa o da plataforma.

Se o briefing exigir que a navbar fique, converta para `position: sticky; top: 0; z-index: 10;` — mas avise que pode haver conflito com o header do GreatPages.

#### Sticky CTA mobile (bottom)

`position: fixed; bottom: 0` — mesma regra: remover do bloco.

O GreatPages tem componente de botão flutuante nativo. Se precisar, o cliente adiciona via plataforma.

---

### Etapa 5 — Converter Tailwind utilities para CSS vanilla

**Estratégia:** Não converta classe por classe. Reescreva o CSS de cada componente do zero usando as classes custom já existentes no `<style>` como base.

Para classes Tailwind puras no HTML (sem equivalente custom), adicione classes descritivas no `<style>` scoped.

**Referência de conversão — Tailwind → CSS:**

```
Layout
  flex          → display: flex
  grid          → display: grid
  hidden        → display: none
  block         → display: block
  items-center  → align-items: center
  justify-between → justify-content: space-between
  justify-center → justify-content: center
  flex-col      → flex-direction: column
  flex-1        → flex: 1
  flex-shrink-0 → flex-shrink: 0
  gap-4         → gap: 1rem
  gap-5         → gap: 1.25rem
  gap-6         → gap: 1.5rem
  gap-8         → gap: 2rem
  col-span-2    → grid-column: span 2
  grid-cols-1   → grid-template-columns: repeat(1, 1fr)
  grid-cols-2   → grid-template-columns: repeat(2, 1fr)
  grid-cols-3   → grid-template-columns: repeat(3, 1fr)

Espaçamento (1rem = 16px)
  p-4 / py-4 / px-4  → padding: 1rem / padding-top/bottom: 1rem / padding-left/right: 1rem
  p-8           → padding: 2rem
  py-20         → padding-top: 5rem; padding-bottom: 5rem
  py-24         → padding-top: 6rem; padding-bottom: 6rem
  mb-2/4/6/8    → margin-bottom: 0.5/1/1.5/2rem
  mt-4/6        → margin-top: 1/1.5rem
  mx-auto       → margin-left: auto; margin-right: auto

Tamanho
  w-full        → width: 100%
  w-4/w-5/w-10 → width: 1/1.25/2.5rem
  h-4/h-5/h-10 → height: 1/1.25/2.5rem
  min-h-screen  → min-height: 100vh
  max-w-6xl     → max-width: 72rem
  max-w-3xl     → max-width: 48rem
  max-w-xl      → max-width: 36rem

Tipografia
  text-sm       → font-size: 0.875rem
  text-base     → font-size: 1rem
  text-lg       → font-size: 1.125rem
  text-xl       → font-size: 1.25rem
  text-2xl      → font-size: 1.5rem
  text-3xl      → font-size: 1.875rem
  text-4xl      → font-size: 2.25rem
  text-5xl      → font-size: 3rem
  text-6xl      → font-size: 3.75rem
  font-medium   → font-weight: 500
  font-semibold → font-weight: 600
  font-bold     → font-weight: 700
  font-extrabold → font-weight: 800
  font-black    → font-weight: 900
  leading-tight → line-height: 1.25
  leading-relaxed → line-height: 1.625
  tracking-tight → letter-spacing: -0.025em
  tracking-wider → letter-spacing: 0.05em
  tracking-widest → letter-spacing: 0.1em
  uppercase     → text-transform: uppercase
  text-center   → text-align: center
  text-left     → text-align: left

Bordas e arredondamento
  rounded       → border-radius: 0.25rem
  rounded-lg    → border-radius: 0.5rem
  rounded-xl    → border-radius: 0.75rem
  rounded-2xl   → border-radius: 1rem
  rounded-full  → border-radius: 9999px
  border        → border: 1px solid
  border-t      → border-top: 1px solid
  border-b      → border-bottom: 1px solid

Posicionamento
  relative      → position: relative
  absolute      → position: absolute
  fixed         → NÃO USE — ver Etapa 4
  sticky        → position: sticky (usar com cautela)
  inset-0       → top:0;right:0;bottom:0;left:0
  top-0/left-0  → top: 0 / left: 0
  z-10/z-50     → z-index: 10 / 50
  overflow-hidden → overflow: hidden

Responsividade (converter para @media queries)
  md:hidden     → @media (min-width: 768px) { display: none }
  md:block      → @media (min-width: 768px) { display: block }
  md:flex       → @media (min-width: 768px) { display: flex }
  md:grid-cols-2/3 → @media (min-width: 768px) { grid-template-columns: repeat(2/3,1fr) }
  md:px-8       → @media (min-width: 768px) { padding-left: 2rem; padding-right: 2rem }
  md:text-5xl   → @media (min-width: 768px) { font-size: 3rem }
  lg:text-7xl   → @media (min-width: 1024px) { font-size: 4.5rem }
  sm:flex-row   → @media (min-width: 640px) { flex-direction: row }
```

---

### Etapa 6 — Estrutura de saída

O bloco entregue deve ter exatamente este formato:

```html
<!-- ═══════════════════════════════════════
     BLOCO GREATPAGES — [Nome da LP]
     Colar no editor → bloco HTML personalizado
     ═══════════════════════════════════════ -->

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  /* ── Reset de base (só dentro do escopo) ── */
  .gp-[slug] *, .gp-[slug] *::before, .gp-[slug] *::after {
    box-sizing: border-box;
  }
  .gp-[slug] { font-family: 'Inter', system-ui, sans-serif; }

  /* ── Variáveis CSS (cores, fontes) ── */
  .gp-[slug] {
    --cor-bg: #000000;
    --cor-surface: #141414;
    --cor-card: #1C1C1E;
    --cor-border: #2D2D2D;
    --cor-muted: #6E6E73;
    --cor-texto: #F5F5F7;
    --cor-acento: #0071E3;
  }

  /* ── Classes custom (mantidas do original, escopadas) ── */
  .gp-[slug] .btn-primary { ... }
  .gp-[slug] .hero-bg { ... }
  .gp-[slug] .feature-card { ... }
  /* etc */

  /* ── Classes utilitárias locais (tradução de Tailwind) ── */
  .gp-[slug] .flex { display: flex; }
  .gp-[slug] .grid { display: grid; }
  /* só as que são realmente usadas */

  /* ── Responsividade ── */
  @media (min-width: 768px) {
    .gp-[slug] .md\:flex { display: flex; }
    /* etc */
  }
</style>

<div class="gp-[slug]">
  <!-- HTML do corpo da LP (sem navbar fixed, sem sticky CTA) -->
  <!-- hero, features, pricing, faq, cta final, footer -->
</div>

<script>
(function() {
  'use strict';
  // Todas as funções e event listeners aqui dentro
  // Sem variáveis globais

  // Countdown
  // FAQ accordion
  // Scroll reveal
  // etc.
})();
</script>
```

---

### Etapa 7 — Checklist antes de entregar

- [ ] Nenhum `<script src="...cdn...">` externo no bloco
- [ ] Nenhum `<link href="...fonts...">` (usar @import no style)
- [ ] Nenhum `tailwind.config` ou `lucide.createIcons()`
- [ ] Nenhum `position: fixed` (navbar, sticky bar)
- [ ] Todo CSS prefixado com `.gp-[slug]`
- [ ] Todo JS dentro de IIFE `(function() { ... })()`
- [ ] Funções JS com nomes únicos (prefix `gp_` para evitar conflito)
- [ ] Ícones substituídos por SVG inline
- [ ] Fontes carregando via `@import` no `<style>`
- [ ] Responsividade mantida via `@media` queries
- [ ] HTML válido (sem tags abertas, sem atributos repetidos)

---

## Entrega final

```
✅ BLOCO GREATPAGES PRONTO — [Nome da LP]

📋 COMO USAR NO GREATPAGES:
1. Abra o editor da sua página no GreatPages
2. Adicione um bloco de "HTML personalizado" (</>)
3. Cole todo o conteúdo abaixo
4. Clique em "Finalizar" ou "Salvar"
5. Visualize no modo preview para confirmar renderização

⚠️ O QUE FOI REMOVIDO (adaptar pelo editor nativo do GreatPages):
- Navbar fixa → use o componente de header do GreatPages
- Botão flutuante mobile → use o componente de CTA flutuante do GreatPages

📋 PLACEHOLDERS PARA TROCAR:
[lista de URLs de imagem, links de botões, preços]

[BLOCO HTML COMPLETO ABAIXO]
```

---

## Regras absolutas desta skill

1. **Nunca entregue com dependência de CDN externo** — se quebrar o CDN, quebra a LP inteira
2. **Sempre escopar CSS** — estilos não escopados vazam para todo o GreatPages
3. **Nunca usar `position: fixed`** no bloco — usa o nativo do GreatPages
4. **JS sempre em IIFE** — funções globais podem colidir com o sistema da plataforma
5. **Testar visualmente o resultado** — se tiver acesso ao preview, validar antes de entregar
6. **Manter as animações simples** — IntersectionObserver, transições CSS são OK; bibliotecas externas não
