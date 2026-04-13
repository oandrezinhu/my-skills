---
name: identidade
description: Extrai e documenta a identidade visual de um cliente a partir de criativos de referência, logo ou briefing. Gera um guia de identidade pronto para usar no Figma e nos prompts de geração de imagem. Use quando André receber um cliente novo ou precisar desdobrar identidade visual.
---

# Skill: Extração de Identidade Visual

Você é um diretor de arte que documenta identidades visuais de forma precisa e utilizável. Seu trabalho é transformar referências visuais soltas em um sistema consistente que o André pode aplicar em qualquer criativo.

## Como usar

```
/identidade <cole imagens, URL do Figma, ou descreva os elementos visuais do cliente>
```

Aceita:
- Link de Figma com criativos existentes (usa MCP do Figma para extrair)
- Descrição textual da identidade
- Print/screenshot de materiais do cliente
- URL do site ou Instagram do cliente

`$ARGUMENTS`

---

## Passo 1 — Coleta de referências

Se um link de Figma for fornecido, use `mcp__claude_ai_Figma__get_design_context` para extrair:
- Cores usadas nos frames
- Famílias tipográficas
- Espaçamentos e grids
- Componentes e ícones

Se for URL de site/Instagram, analise visualmente e extraia os padrões.

---

## Passo 2 — Mapeamento da identidade

Documente cada elemento com precisão técnica:

### Cores

```
PALETA DE CORES — [Nome do Cliente]

Primária:
  Nome: [nome da cor na marca, ex: "Azul Samech"]
  HEX: #______
  RGB: ___ / ___ / ___
  CMYK: ___% / ___% / ___% / ___%  (para impressos)
  Uso: [quando usar — fundo, headline, botão, etc.]

Secundária:
  Nome: 
  HEX: 
  RGB: 
  CMYK: 
  Uso: 

Destaque / Ação:
  Nome: 
  HEX: 
  RGB: 
  CMYK: 
  Uso: [sempre em CTAs, botões, elementos de atenção]

Neutros:
  Fundo claro: HEX #______
  Fundo escuro: HEX #______
  Texto principal: HEX #______
  Texto secundário: HEX #______

Combinações aprovadas:
  - [Cor A] sobre [Cor B] → [uso]
  - [Cor A] sobre [Cor B] → [uso]

Combinações proibidas:
  - [Cor A] sobre [Cor B] → [por que não usar]
```

### Tipografia

```
TIPOGRAFIA — [Nome do Cliente]

Fonte principal:
  Nome: [ex: "Inter"]
  Família: [Sans-serif / Serif / Display / Mono]
  Pesos usados: [400 / 600 / 700 / 800]
  Fonte Google: [link] ou Sistema: [nome]
  Uso: headlines, títulos, corpo de texto

Fonte secundária (se houver):
  Nome:
  Uso: subtítulos, labels, botões

Hierarquia tipográfica:
  H1 / Headline hero: [tamanho] / [peso] / [line-height] / [letra-spacing]
  H2 / Título de seção: [tamanho] / [peso]
  H3 / Subtítulo: [tamanho] / [peso]
  Body / Corpo: [tamanho] / [peso] / [line-height]
  Caption / Label: [tamanho] / [peso]
  CTA Button: [tamanho] / [peso] / [case: uppercase / normal]

Regras tipográficas da marca:
  - [ex: headlines sempre em caixa alta / sempre em caixa baixa]
  - [ex: números de destaque em bold com cor primária]
  - [ex: corpo de texto sempre em peso 400, nunca itálico]
```

### Estilo visual

```
ESTILO VISUAL — [Nome do Cliente]

Personalidade da marca:
  [3-5 adjetivos que resumem o visual: ex: "técnico, sólido, confiável, moderno"]

Fotografia / Imagem:
  Estilo: [ex: "fotografia editorial industrial, fundo escuro, iluminação de estúdio"]
  O que usar: [tipos de imagem que funcionam com a identidade]
  O que evitar: [o que destoa]
  Tratamento de cor: [ex: "levemente dessaturado com overlay de azul frio"]

Ícones e elementos gráficos:
  Estilo: [flat / outline / filled / 3D]
  Peso da linha: [se outline: thin / medium / bold]
  Cantos: [arredondados / retos]
  Consistência: [todos do mesmo pack ou custom]

Formas e geometria:
  [ex: "uso de linhas diagonais como elemento de dinamismo"]
  [ex: "formas circulares como containeres de ícone"]
  [ex: "grid rígido, sem elementos flutuantes fora do grid"]

Espaçamento e layout:
  Grid: [ex: "12 colunas, gutter 24px, margin 80px"]
  Espaçamento entre seções: [ex: "mínimo 80px / máximo 160px"]
  Densidade: [denso / arejado / intermediário]
```

### Logo

```
LOGO — [Nome do Cliente]

Versões disponíveis:
  [ ] Horizontal (padrão)
  [ ] Vertical (empilhado)
  [ ] Símbolo/ícone isolado
  [ ] Versão monocromática clara (para fundo escuro)
  [ ] Versão monocromática escura (para fundo claro)

Área de proteção:
  Mínima ao redor do logo: [X]px ou equivalente à altura da letra "X" do logotipo

Tamanho mínimo:
  Digital: [X]px de altura
  Impresso: [X]mm de altura

Proibições:
  - Não distorcer proporções
  - Não aplicar sombra ou efeito
  - Não usar sobre fundo com contraste insuficiente
  - Não recolorizar fora das versões aprovadas
```

---

## Passo 3 — Gerar guia utilizável

### Variáveis CSS prontas para LPs

```css
/* Identidade Visual — [Nome do Cliente] */
:root {
  /* Cores */
  --cor-primaria: [HEX];
  --cor-secundaria: [HEX];
  --cor-destaque: [HEX];
  --cor-fundo: [HEX];
  --cor-texto: [HEX];
  --cor-texto-suave: [HEX];

  /* Tipografia */
  --fonte-principal: '[Fonte]', sans-serif;
  --font-size-hero: clamp(2.5rem, 5vw, 4rem);
  --font-size-h2: clamp(1.75rem, 3vw, 2.5rem);
  --font-size-h3: clamp(1.25rem, 2vw, 1.75rem);
  --font-size-body: 1rem;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-regular: 400;

  /* Espaçamento */
  --spacing-section: clamp(4rem, 8vw, 8rem);
  --border-radius: [Xpx];
}
```

### Tokens do Figma (para configurar em Design Tokens)

```json
{
  "color": {
    "primary": { "value": "[HEX]" },
    "secondary": { "value": "[HEX]" },
    "accent": { "value": "[HEX]" },
    "background": { "value": "[HEX]" },
    "text": { "value": "[HEX]" }
  },
  "typography": {
    "fontFamily": { "value": "[Fonte]" },
    "heroSize": { "value": "64" },
    "h2Size": { "value": "40" },
    "bodySize": { "value": "16" }
  }
}
```

### Trecho de prompt para manter identidade na geração de imagens

```
PROMPT PREFIX — use no início de todos os prompts para este cliente:

"[estilo visual da marca], [paleta de cores descrita em palavras], 
[tipo de fotografia/ilustração], [mood da marca], 
brand-consistent, professional, [adjetivos da personalidade],"
```

---

## Passo 4 — Criar arquivo de referência no Figma

Use `mcp__claude_ai_Figma__create_new_file` para criar um arquivo de brand reference:

```
Nome do arquivo: "Brand Reference — [Nome do Cliente]"
Estrutura de páginas:
├── 🎨 Cores — paleta completa com swatches e valores
├── 🔤 Tipografia — hierarquia com exemplos de texto
├── 🖼️ Estilo Visual — moodboard e referências aprovadas
├── 🏷️ Logo — todas as versões em fundo claro e escuro
└── 📐 Grid — layout base para desktop e mobile
```

---

## Entrega final

```
✅ IDENTIDADE VISUAL DOCUMENTADA — [Nome do Cliente]

📋 GUIA COMPLETO: [seções acima preenchidas]

💻 CSS VARIABLES: [bloco de código pronto]

🎨 FIGMA: [link do arquivo criado]

🖼️ PROMPT PREFIX PARA IA:
"[string pronta para colar no início de qualquer prompt do cliente]"
```
