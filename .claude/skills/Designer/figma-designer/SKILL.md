# Skill: Designer Profissional no Figma

Você é um designer profissional que cria layouts no Figma via Plugin API. Esta skill define as regras absolutas de como gerar layouts corretos, sem overflow de texto, sem frames quebrados.

---

## Regra Fundamental

**NUNCA use `resize()` em text nodes.**
**NUNCA fixe altura de texto manualmente.**

Texto dentro de auto-layout usa `layoutAlign = "STRETCH"` para preencher a largura do pai, e `textAutoResize = "HEIGHT"` para crescer verticalmente. O auto-layout cuida da largura. Você só define a largura do frame pai.

---

## Arquitetura de um Criativo

```
Frame Externo [W×H fixo, SEM auto-layout]
├── bg-placeholder      → rect W×H, x=0, y=0 (fundo escuro)
├── gradient-overlay    → rect W×H, x=0, y=0 (gradiente)
├── logo-area           → frame, posicionado no topo (x=pad, y=pad)
├── top-badges          → frame horizontal, topo-direita
└── text-content        → frame AUTO-LAYOUT VERTICAL, posicionado na base
    ├── highlight-block → frame AUTO-LAYOUT VERTICAL, STRETCH
    │   └── headline    → text, STRETCH, textAutoResize=HEIGHT
    ├── subheadline     → text, STRETCH, textAutoResize=HEIGHT
    ├── info            → text, STRETCH, textAutoResize=HEIGHT
    └── cta             → frame ou text
```

O frame externo **não tem auto-layout**. Elementos internos são posicionados com `x` e `y` absolutos.

O `text-content` tem largura fixa (frame W − padding×2) e altura que cresce com conteúdo.

---

## API Reference Completa

### 1. Frame externo do criativo (sem auto-layout)

```js
function criarCriativo(nome, W, H) {
  const f = figma.createFrame();
  f.name = nome;
  f.resize(W, H);
  f.fills = [{ type: "SOLID", color: { r: 0.04, g: 0.04, b: 0.04 } }];
  // SEM layoutMode — posicionamento absoluto dos filhos
  return f;
}
```

### 2. Retângulo de fundo / overlay

```js
function criarRect(nome, W, H, fills) {
  const r = figma.createRectangle();
  r.name = nome;
  r.resize(W, H);
  r.x = 0; r.y = 0;
  r.fills = fills;
  return r;
}

// Gradiente de cima para baixo (overlay escuro)
const overlayFills = [{
  type: "GRADIENT_LINEAR",
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],
  gradientStops: [
    { position: 0.0, color: { r: 0, g: 0, b: 0, a: 0 } },
    { position: 0.45, color: { r: 0, g: 0, b: 0, a: 0.55 } },
    { position: 1.0, color: { r: 0, g: 0, b: 0, a: 0.88 } }
  ]
}];
```

### 3. Frame de conteúdo de texto (AUTO-LAYOUT VERTICAL)

```js
function criarTextContent(nome, W, padH, padV) {
  const f = figma.createFrame();
  f.name = nome;
  f.layoutMode = "VERTICAL";
  f.primaryAxisSizingMode = "AUTO";   // altura cresce com conteúdo
  f.counterAxisSizingMode = "FIXED";  // largura é fixa
  f.resize(W, 50);                     // define a largura; altura será recalculada
  f.paddingLeft = padH;
  f.paddingRight = padH;
  f.paddingTop = padV;
  f.paddingBottom = padV;
  f.itemSpacing = 16;
  f.fills = [];
  return f;
}
// Posicionar no criativo:
// textContent.x = pad;
// textContent.y = H - textContent.height - bottomPad; // APÓS appendChild de todos os filhos
```

### 4. Text node (REGRA ABSOLUTA)

```js
async function criarTexto(conteudo, familia, estilo, tamanho, cor, opacidade = 1) {
  await figma.loadFontAsync({ family: familia, style: estilo });
  const t = figma.createText();
  t.fontName = { family: familia, style: estilo };
  t.fontSize = tamanho;
  t.characters = conteudo;
  t.fills = [{ type: "SOLID", color: cor, opacity: opacidade }];

  // ✅ CORRETO: deixa auto-layout gerenciar largura
  t.textAutoResize = "HEIGHT";
  t.layoutAlign = "STRETCH"; // preenche a largura do pai

  // ❌ NUNCA fazer:
  // t.resize(400, 60);   — ERRADO, fixa dimensões
  // t.resize(w, 40);     — ERRADO mesmo com largura correta

  return t;
}
```

### 5. Bloco de destaque (fundo colorido + texto)

```js
async function criarHighlight(conteudo, W, cor, familia, estilo, tamanho) {
  await figma.loadFontAsync({ family: familia, style: estilo });

  const f = figma.createFrame();
  f.name = "🔴 destaque";
  f.fills = [{ type: "SOLID", color: cor }];
  f.cornerRadius = 4;
  f.layoutMode = "VERTICAL";
  f.primaryAxisSizingMode = "AUTO";   // altura hugs texto
  f.counterAxisSizingMode = "FIXED";  // largura é fixa
  f.resize(W, 50);                     // W = largura disponível (sem padding do pai)
  f.paddingTop = 10; f.paddingBottom = 10;
  f.paddingLeft = 16; f.paddingRight = 16;
  f.layoutAlign = "STRETCH";          // preenche o pai (text-content frame)

  const t = figma.createText();
  t.fontName = { family: familia, style: estilo };
  t.fontSize = tamanho;
  t.characters = conteudo;
  t.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  t.textAutoResize = "HEIGHT";
  t.layoutAlign = "STRETCH";
  f.appendChild(t);

  return f;
}
```

### 6. Posicionamento dentro do frame externo

```js
// Após adicionar todos os filhos ao textContent, posicionar no criativo:
criativo.appendChild(bg);
criativo.appendChild(overlay);
criativo.appendChild(logoArea);
criativo.appendChild(textContent);

// Posicionar textContent na base do criativo
textContent.x = 0;
textContent.y = H - textContent.height;

// Posicionar logo no topo
logoArea.x = pad;
logoArea.y = pad;
```

---

## Nomes de Fontes no Figma (exatos)

| Família | Uso | Style correto |
|---|---|---|
| Poppins | headline | "ExtraBold" (sem espaço) |
| Poppins | subtítulo | "SemiBold" (sem espaço) |
| Poppins | corpo | "Regular" |
| Inter | headline | "Bold" |
| Inter | subtítulo | "Semi Bold" (com espaço) |
| Inter | corpo | "Regular" |

Dúvida? Use `figma.listAvailableFontsAsync()` para verificar antes de usar.

---

## Sizing Modes

| Cenário | primaryAxisSizingMode | counterAxisSizingMode |
|---|---|---|
| Frame externo do criativo | (sem layoutMode) | (sem layoutMode) |
| Container de texto (vertical) | "AUTO" (altura cresce) | "FIXED" (largura fixa) |
| Bloco de destaque | "AUTO" (altura cresce) | "FIXED" (largura = pai) |
| Frame de badges/logo (horizontal) | "AUTO" (largura cresce) | "AUTO" (altura cresce) |

**NUNCA use "HUG"** — é inválido na Plugin API. Use "AUTO".

---

## Template Completo: Feed 4:5 (1080×1350)

```js
async function criarFeed(ad) {
  const W = 1080, H = 1350;
  const PAD = 64;
  const tw = W; // text-content ocupa largura total (padding interno)

  // 1. Frame externo
  const frame = figma.createFrame();
  frame.name = ad.nome;
  frame.resize(W, H);
  frame.fills = [{ type: "SOLID", color: { r: 0.04, g: 0.04, b: 0.04 } }];

  // 2. Background placeholder
  const bg = figma.createRectangle();
  bg.name = "📷 imagem";
  bg.resize(W, H); bg.x = 0; bg.y = 0;
  bg.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 }, opacity: 0.5 }];
  frame.appendChild(bg);

  // 3. Gradient overlay
  const overlay = figma.createRectangle();
  overlay.name = "🌑 overlay";
  overlay.resize(W, H); overlay.x = 0; overlay.y = 0;
  overlay.fills = [{ type: "GRADIENT_LINEAR",
    gradientTransform: [[0, 1, 0], [-1, 0, 1]],
    gradientStops: [
      { position: 0.0, color: { r:0, g:0, b:0, a:0 } },
      { position: 0.45, color: { r:0, g:0, b:0, a:0.55 } },
      { position: 1.0, color: { r:0, g:0, b:0, a:0.88 } }
    ]
  }];
  frame.appendChild(overlay);

  // 4. Text content — AUTO-LAYOUT, largura total, posicionado na base
  await figma.loadFontAsync({ family: "Poppins", style: "ExtraBold" });
  await figma.loadFontAsync({ family: "Poppins", style: "SemiBold" });
  await figma.loadFontAsync({ family: "Poppins", style: "Regular" });

  const textContent = figma.createFrame();
  textContent.name = "texto";
  textContent.layoutMode = "VERTICAL";
  textContent.primaryAxisSizingMode = "AUTO";
  textContent.counterAxisSizingMode = "FIXED";
  textContent.resize(tw, 50);
  textContent.paddingLeft = PAD; textContent.paddingRight = PAD;
  textContent.paddingTop = 48; textContent.paddingBottom = 72;
  textContent.itemSpacing = 20;
  textContent.fills = [];

  // 4a. Bloco de destaque
  const hl = figma.createFrame();
  hl.name = "🔴 destaque";
  hl.fills = [{ type: "SOLID", color: { r: 0.85, g: 0.12, b: 0.15 } }];
  hl.cornerRadius = 4;
  hl.layoutMode = "VERTICAL";
  hl.primaryAxisSizingMode = "AUTO";
  hl.counterAxisSizingMode = "AUTO"; // vai STRETCH pelo pai
  hl.paddingTop = 10; hl.paddingBottom = 10;
  hl.paddingLeft = 16; hl.paddingRight = 16;
  hl.layoutAlign = "STRETCH"; // preenche largura do textContent (minus padding)

  const hlText = figma.createText();
  hlText.fontName = { family: "Poppins", style: "ExtraBold" };
  hlText.fontSize = 64;
  hlText.characters = ad.headline;
  hlText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  hlText.textAutoResize = "HEIGHT";
  hlText.layoutAlign = "STRETCH";
  hl.appendChild(hlText);
  textContent.appendChild(hl);

  // 4b. Subtítulo
  const sub = figma.createText();
  sub.fontName = { family: "Poppins", style: "SemiBold" };
  sub.fontSize = 28;
  sub.characters = ad.sub;
  sub.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  sub.textAutoResize = "HEIGHT";
  sub.layoutAlign = "STRETCH";
  textContent.appendChild(sub);

  // 4c. Info
  const info = figma.createText();
  info.fontName = { family: "Poppins", style: "Regular" };
  info.fontSize = 22;
  info.characters = ad.info;
  info.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.75 }];
  info.textAutoResize = "HEIGHT";
  info.layoutAlign = "STRETCH";
  textContent.appendChild(info);

  frame.appendChild(textContent);

  // Posicionar na base
  textContent.x = 0;
  textContent.y = H - textContent.height;

  return frame;
}
```

---

## Como usar esta skill

```
/figma-designer <descreva o layout que precisa criar>
```

Sempre que criar layouts Figma, seguir esta skill à risca.

---

## Checklist antes de enviar código Figma

```
[ ] Todo text node tem textAutoResize = "HEIGHT"
[ ] Todo text node tem layoutAlign = "STRETCH" (quando dentro de auto-layout)
[ ] NENHUM text node tem resize() chamado
[ ] Frames de destaque têm layoutAlign = "STRETCH" (não largura fixa)
[ ] Frame pai do texto tem counterAxisSizingMode = "FIXED" + resize(W, 50)
[ ] Frame externo do criativo NÃO tem layoutMode (posicionamento absoluto)
[ ] Fontes carregadas com loadFontAsync ANTES de definir characters
[ ] Nomes de estilo corretos: "ExtraBold", "SemiBold" (sem espaço no Poppins)
[ ] primaryAxisSizingMode = "AUTO" (nunca "HUG")
```
