# Cliente: Samech Vedações + OringOne

> Leia `global_ds.md` antes deste arquivo. As regras globais se aplicam. Este arquivo define apenas as especificidades da marca.

---

## Identidade Visual

### Paleta de Cores

| Nome | HEX | RGB | Uso |
|---|---|---|---|
| Vermelho Samech | `#ED1D26` | 237 / 29 / 38 | Headline de destaque, subheadline, acento de cor |
| Preto industrial | `#0A0A0A` | 10 / 10 / 10 | Fundo primário |
| Branco | `#FFFFFF` | 255 / 255 / 255 | Texto sobre fundo escuro, fundo do logo container |
| Cinza aço | `#8A9BB0` | 138 / 155 / 176 | Texto secundário, info |

### Tipografia

Fonte única: **Poppins** — todos os pesos.

| Papel | Estilo Figma | Cor | Alinhamento |
|---|---|---|---|
| Headline (H1) | ExtraBold | Branco | Centro |
| Subheadline (H2) | SemiBold | `#ED1D26` | Direita |
| Corpo / Info | Medium | Branco | Direita |
| Footer / Label | SemiBold + Regular | Branco | Centro |
| CTA | SemiBold | Preto `#0A0A0A` | — |

> No Figma Plugin API: "ExtraBold", "SemiBold", "Medium", "Regular" — sem espaço.

### Estilo Visual

- **Personalidade:** técnico, sólido, confiável, industrial, direto
- **Fotografia:** pessoa em contexto técnico/industrial, fundo escuro com overlay
- **Overlay:** branco com `mix-blend-multiply` + opacidade `0.69` (suaviza a foto sem escurecer)
- **Tratamento de cor:** o vermelho `#ED1D26` entra apenas no subheadline (H2) — nunca no título principal
- **Container de logos:** fundo branco, `border-radius: 18px`, `padding: 13px`, gap entre logos `23px`

---

## Logos

### Nodes no Figma (arquivo `qcEx90O48Gz4Ys0Rj1RepZ`)

| Logo | Node ID | Dimensão original | Dimensão nos criativos |
|---|---|---|---|
| Samech Vedações | `78:35006` | 350 × 84 px | 231 × 62 px |
| OringOne | `143:133` | 346 × 94 px | 227 × 62 px |

> Ambos são FRAME type — usar `exportAsync` → base64 → `figma.createImage()`. Não usar `importComponentByKeyAsync`.

### Container de logos (padrão nos 3 formatos)

```js
// Frame container — igual em todos os formatos
const logoBox = figma.createFrame();
logoBox.layoutMode = "HORIZONTAL";
logoBox.primaryAxisSizingMode = "AUTO";
logoBox.counterAxisSizingMode = "AUTO";
logoBox.paddingTop = 13; logoBox.paddingBottom = 13;
logoBox.paddingLeft = 13; logoBox.paddingRight = 13;
logoBox.itemSpacing = 23;
logoBox.cornerRadius = 18;
logoBox.fills = [{ type: "SOLID", color: { r:1, g:1, b:1 } }];
logoBox.counterAxisAlignItems = "CENTER";

// Samech — sempre 231 × 62
const rS = figma.createRectangle();
rS.resize(231, 62);
rS.fills = [{ type: "IMAGE", scaleMode: "FIT", imageHash: imgSamech.hash }];

// OringOne — sempre 227 × 62
const rO = figma.createRectangle();
rO.resize(227, 62);
rO.fills = [{ type: "IMAGE", scaleMode: "FIT", imageHash: imgOring.hash }];
```

### Posição do logo container por formato

| Formato | Posição X | Posição Y | Ancora |
|---|---|---|---|
| Story 9:16 | Centro horizontal | `187px` do topo | Topo, centralizado |
| Feed 4:5 | Direita (`x ≈ 502px`) | `1190px` do topo | Base, direita |
| Display 16:9 | `57px` da esquerda | `84px` do topo | Topo, esquerda |

---

## Design System de Formatos

Especificações extraídas dos criativos aprovados (node `98:2`, arquivo Figma).

### Story 9:16 — `1080 × 1920 px`

| Elemento | Fonte | Tamanho | Cor | Notas |
|---|---|---|---|---|
| Headline | Poppins ExtraBold | **150px** | `#FFFFFF` | Line-height 58%, centralizado, uppercase |
| Subheadline | Poppins SemiBold | **37px** | `#ED1D26` | Alinhado à direita, w≈476px |
| Corpo / Info | Poppins Medium | **29px** | `#FFFFFF` | Alinhado à direita, w≈471px, box com padding 7px, rounded 14px |
| Footer / Label | Poppins SemiBold + Regular | **25px** | `#FFFFFF` | Centralizado |
| Logo container | — | — | Fundo branco | Top center, y=187px |
| Safe zone texto | — | — | — | Conteúdo central, entre y≈350px e y≈1050px |

### Feed 4:5 — `1080 × 1350 px`

| Elemento | Fonte | Tamanho | Cor | Notas |
|---|---|---|---|---|
| Headline | Poppins ExtraBold | **150px** | `#FFFFFF` | Line-height 58%, centralizado, uppercase |
| Subheadline | Poppins SemiBold | **37px** | `#ED1D26` | Alinhado à direita, w≈476px |
| Corpo / Info | Poppins Medium | **29px** | `#FFFFFF` | Alinhado à direita, w≈471px |
| Footer / Label | Poppins SemiBold + Regular | **25px** | `#FFFFFF` | Centralizado |
| Logo container | — | — | Fundo branco | Base direita, y≈1190px |
| Safe zone texto | — | — | — | Conteúdo central, entre y≈100px e y≈780px |

### Display 16:9 — `1920 × 1080 px`

| Elemento | Fonte | Tamanho | Cor | Notas |
|---|---|---|---|---|
| Headline | Poppins ExtraBold | **166px** | `#FFFFFF` | Line-height 58%, centralizado, uppercase |
| Subheadline | Poppins SemiBold | **46px** | `#ED1D26` | Alinhado à direita, w≈587px |
| Corpo / Info | Poppins Medium | **35px** | `#FFFFFF` | Alinhado à direita, w≈562px |
| Footer / Label | Poppins SemiBold + Regular | **34px** | `#FFFFFF` | Centralizado |
| Logo container | — | — | Fundo branco | Topo esquerda, x=57px, y=84px |
| Conteúdo texto | — | — | — | Lado direito, x≈829px, largura≈780px |

### Estrutura de camadas padrão (todos os formatos)

```
Frame [W × H]
├── 📷 Imagem de fundo (placeholder ou foto real)
├── 🌑 Overlay — Rectangle W×H, branco, mix-blend-multiply, opacity 0.69
├── 📦 Logo container (bg-white, rounded-18, padding-13, gap-23)
│   ├── Logo Samech (231×62)
│   └── Logo OringOne (227×62)
└── 📝 Bloco de texto (posicionado conforme formato)
    ├── Headline — Poppins ExtraBold, branco
    ├── Subheadline — Poppins SemiBold, #ED1D26
    ├── Info box — Poppins Medium, branco, box com padding+rounded
    └── Footer label — Poppins SemiBold+Regular, branco, centralizado
```

---

## Variáveis para Código (Figma Plugin API)

```js
const RED  = { r: 0.929, g: 0.114, b: 0.149 }; // #ED1D26
const WHT  = { r: 1,     g: 1,     b: 1     }; // #FFFFFF
const BLK  = { r: 0.04,  g: 0.04,  b: 0.04  }; // #0A0A0A

function solid(c, o = 1) {
  return [{ type: 'SOLID', color: c, opacity: o }];
}

// Overlay: branco, mix-blend-multiply, 0.69
ov.fills = solid(WHT, 0.69);
ov.blendMode = "MULTIPLY";

// Tamanhos por formato
const SIZES = {
  story:   { W: 1080, H: 1920, hl: 150, sub: 37, body: 29, footer: 25 },
  feed:    { W: 1080, H: 1350, hl: 150, sub: 37, body: 29, footer: 25 },
  display: { W: 1920, H: 1080, hl: 166, sub: 46, body: 35, footer: 34 },
};
```

---

## CSS Variables (para LPs)

```css
:root {
  --cor-primaria:     #ED1D26;
  --cor-fundo:        #0A0A0A;
  --cor-fundo-alt:    #141414;
  --cor-texto:        #FFFFFF;
  --cor-texto-suave:  rgba(255, 255, 255, 0.75);
  --cor-cinza:        #8A9BB0;
  --fonte-principal:  'Poppins', sans-serif;
  --border-radius:    18px;
}
```

---

## Prompt Prefix para IA (Freepik / Kling)

Cole no início de qualquer prompt de imagem ou vídeo para este cliente:

```
High-end commercial photography, industrial context, dark background,
sharp focus on subject, studio lighting, 8k resolution,
shallow depth of field, Samech brand — red accent #ED1D26,
deep black background, technical and trustworthy mood, professional,
40% negative space on left or right side for copy overlay
```

---

## Campanhas Ativas

### FEIMEC 2026 — Etapa 03: Estamos na Feira

| Campo | Detalhe |
|---|---|
| Evento | FEIMEC 2026 — 05 a 09 de Maio, São Paulo Expo |
| Estande | M016 |
| Geolocalização | 1 km do evento |
| Objetivo | Atrair visitantes ao estande (conversão presencial) |
| Público | Engenheiros, gestores de manutenção, compradores industriais |
| Canal | Meta Ads |
| Formatos | Feed 4:5, Story 9:16, Display 16:9 |

#### Copy por anúncio (4 peças × 3 formatos)

**AD 1 — ESTAMOS AQUI**
```
Headline:    ESTAMOS AQUI
Sub:         Estande M016 — FEIMEC 2026
Info:        Vedações sob medida, O-rings de grandes dimensões e diagnóstico técnico na hora. Passe 5 minutos com a gente.
CTA:         Vir ao estande agora
```

**AD 2 — VOCÊ ESTÁ NA FEIMEC?**
```
Headline:    VOCÊ ESTÁ NA FEIMEC?
Sub:         A solução para paradas não programadas está no M016
Info:        Samech + OringOne: vedação customizada, O-ring de grandes dimensões e diagnóstico in loco.
CTA:         Encontrar o estande
```

**AD 3 — O ESTANDE QUE RESOLVE**
```
Headline:    O ESTANDE QUE RESOLVE
Sub:         Vedação certa, na hora certa — M016
Info:        Diagnóstico técnico in loco. Nossa equipe sai com a solução em 5 minutos.
CTA:         Visitar o M016
```

**AD 4 — AINDA DÁ TEMPO**
```
Headline:    AINDA DÁ TEMPO
Sub:         FEIMEC está terminando — não sai sem passar no M016
Info:        Nossa equipe técnica está no estande hoje. Vedações, O-rings e diagnóstico na hora, sem agendamento.
CTA:         Vir agora
```

#### Referências aprovadas desta campanha
- Arquivo Figma: `qcEx90O48Gz4Ys0Rj1RepZ`
- Section de referência: node `72:34436` (criativos aprovados pelo cliente)
- Design system + logos: node `98:2`
