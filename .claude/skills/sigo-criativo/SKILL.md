---
name: sigo-criativo
description: >
  Cria criativos de social media (feed, stories, carrossel) para a Sigo ERP diretamente no Figma. Use esta skill SEMPRE que o usuário mencionar "criativo para Sigo", "post da Sigo", "criativo Sigo", "fazer um criativo", "criar um anúncio" para o cliente Sigo, ou quando o usuário fornecer uma copy/texto e pedir para montar em um design. A skill usa o padrão visual já mapeado do branding da Sigo (verde #45D129, preto profundo, Inter Bold, foto como fundo com overlay escuro, logo no centro-meio, headline verde grande em caixa alta, subhead branco, CTA outline ou preenchido verde). Quando o usuário fornecer copy + imagem (ou pedir para buscar imagem no Freepik), esta skill orquestra todo o fluxo: montar layout no Figma com os tokens corretos, seguindo fielmente os criativos de referência da Sigo.
---

# Skill: Sigo ERP — Criação de Criativos no Figma

Skill para criar criativos de social media da Sigo ERP diretamente no Figma, seguindo o design system e padrão visual da marca.

## Idioma
Todas as interações com o usuário devem ser em **Português (BR)**.

---

## Design System da Sigo ERP — Tokens Visuais

### Cores
```
Primária verde:     #45D129  (rgb 69, 209, 41)
Verde escuro:       #2EA31A
Verde hover:        #38B822
Preto fundo:        #0A0A0A  (fundo principal dos criativos)
Preto card:         #0D0D0D
Overlay dark:       rgba(0,0,0,0.85) até rgba(0,0,0,0)  ← gradiente bottom-up
Branco:             #FFFFFF
Cinza texto:        #E6E6E6
Borda outline CTA:  #45D129 com fill transparente
```

### Tipografia
```
Fonte principal: Work Sans (Google Fonts)

Headline principal:   Work Sans Bold, 80–96px, #45D129, CAIXA ALTA, line-height 100px
Headline destaque:    Partes em verde #45D129, partes em branco — mix na mesma linha
Subhead / corpo:      Work Sans Medium, 36–44px, #FFFFFF ou #E6E6E6, CAIXA ALTA
Texto CTA botão:      Work Sans Medium, 28–34px, #FFFFFF
Tag / label pequeno:  Work Sans Bold, 18–24px, #45D129, letter-spacing 3px, CAIXA ALTA
```

### Logo Sigo ERP
```
Posição padrão: centro-esquerda, zona de transição entre foto e área de texto
              (aproximadamente y: 55–65% da altura do frame)
Componentes:  Ícone de gráfico (barras + seta) em branco + traço vertical branco
              + texto "SIGO" bold branco + texto "ERP" menor verde
Tamanho:      ≈ 200–280px de largura no formato 1080×1350
```

### Formatos de frame
```
Feed Instagram/Facebook:  1080 × 1350 px  (formato 4:3 vertical — padrão)
Story / Reels:            1080 × 1920 px
Feed quadrado:            1080 × 1080 px
```

---

## Estrutura Padrão de um Criativo Sigo

A anatomia de todo criativo da Sigo segue esta pilha de layers (de baixo para cima):

```
1. [FOTO]         Retângulo 1080×1350, fill IMAGE, scaleMode FILL
                  → Foto do segmento (construção, engenheiro, obra, tecnologia)

2. [OVERLAY]      Gradiente linear de baixo para cima:
                  bottom: rgba(0,0,0,0.95) → top: rgba(0,0,0,0)
                  Ocupa ~65–70% inferior do frame

3. [LOGO SIGO]    Posicionada na zona de transição (y ≈ 55–65% do frame)
                  Sempre visível sobre a foto mas acima do bloco de texto

4. [TAG]          (opcional) Retângulo arredondado, stroke #45D129, fill rgba(69,209,41,0.12)
                  Texto: Inter Bold, CAIXA ALTA, #45D129, letter-spacing 3px

5. [HEADLINE]     Inter Bold, 80–96px, CAIXA ALTA
                  Mix de cor: partes em #45D129 e partes em #FFFFFF conforme copywriting
                  Margem lateral: 60px

6. [SUBHEAD]      Inter Bold/Semi Bold, 36–44px, CAIXA ALTA, #FFFFFF ou #E6E6E6
                  Pode vir em box com borda sutil ou direto sobre o overlay

7. [CTA]          Dois estilos:
                  a) Outline: retângulo com stroke #45D129, texto branco, sem fill
                  b) Preenchido: fill #45D129, texto #FFFFFF bold
                  Largura: 80–90% do frame, centralizado
                  (opcional — nem todo criativo tem CTA explícito)
```

---

## Fluxo de Criação

### Passo 1 — Coletar insumos do usuário
Antes de criar, confirme:
- **Copy**: Headline, subhead, CTA (se houver)
- **Imagem**: usuário vai fornecer OU quer que você busque no Freepik/gere
- **Arquivo Figma destino**: link do arquivo onde criar (NÃO usar o arquivo de referência `0JkeHdlcL9yFtG2InJysIu`)
- **Formato**: feed (padrão), story ou quadrado

Se o usuário não informar o arquivo Figma destino, pergunte antes de prosseguir.

### Passo 2 — Criar o frame no Figma
Use `Figma:use_figma` com o fileKey do arquivo destino informado pelo usuário.

```javascript
// Exemplo de estrutura base do frame (1080×1350)
const frame = figma.createFrame();
frame.name = "Criativo Sigo - [TEMA]";
frame.resize(1080, 1350);
frame.fills = [{ type: 'SOLID', color: { r: 0.04, g: 0.04, b: 0.04 } }];

// Posicionar no canvas sem sobrepor frames existentes
// Detectar frames existentes e posicionar à direita do último
```

### Passo 3 — Montar os layers na ordem correta
Sempre criar na ordem: foto → overlay → logo → tag → headline → subhead → CTA

**Overlay (gradiente):**
```javascript
overlay.fills = [{
  type: 'GRADIENT_LINEAR',
  gradientTransform: [[0, 1, 0], [-1, 0, 1]],
  gradientStops: [
    { position: 0, color: { r: 0, g: 0, b: 0, a: 0 } },
    { position: 0.35, color: { r: 0, g: 0, b: 0, a: 0.7 } },
    { position: 1, color: { r: 0, g: 0, b: 0, a: 0.95 } }
  ]
}];
```

**Cor verde Sigo:**
```javascript
const VERDE_SIGO = { r: 0.271, g: 0.820, b: 0.161 }; // #45D129
```

**Fontes — sempre carregar antes de usar:**
```javascript
await figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
await figma.loadFontAsync({ family: "Work Sans", style: "Medium" });
await figma.loadFontAsync({ family: "Work Sans", style: "Regular" });
```

### Passo 4 — Logo Sigo (placeholder textual)
Como a Plugin API não importa SVGs externos, criar a logo com elementos básicos:
```javascript
// Barra verde vertical
const logoAccent = figma.createRectangle();
logoAccent.resize(5, 48);
logoAccent.fills = [{ type: 'SOLID', color: VERDE_SIGO }];

// Texto "SIGO ERP"
const logoText = figma.createText();
logoText.characters = "SIGO ERP";
logoText.fontSize = 46;
logoText.fontName = { family: "Work Sans", style: "Bold" };
logoText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
// Posicionar em y ≈ frame.height * 0.58
```

> **Nota ao usuário**: Após criar, substituir a logo textual pela logo vetorial real copiando do arquivo de referência ou dos assets da marca.

### Passo 5 — Inserir imagem (quando fornecida pelo usuário)
Quando o usuário mandar uma imagem via chat:
1. Converter para base64 via bash_tool
2. Usar `figma.createImage(uint8Array)` para inserir no retângulo da foto
3. Definir `scaleMode: 'FILL'`

```javascript
function base64ToUint8Array(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}
const image = figma.createImage(base64ToUint8Array(IMG_B64));
fotoRect.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
```

> **Limitação**: O base64 completo precisa ser passado direto no código. Para imagens grandes (>200kb), orientar o usuário a inserir manualmente no Figma após criação do layout.

---

## Referência Visual — Padrões Observados nos Criativos da Sigo

### Tipos de layout identificados:

**Tipo A — Headline dupla com mix de cor** (mais comum)
```
[foto obra/construção como fundo]
[logo Sigo centro]
VOCÊ VAI CONTINUAR "PAGANDO     ← branco
PARA TRABALHAR" ATÉ QUANDO?     ← verde para as aspas/destaque
[subhead em box com borda]
[CTA botão outline ou preenchido]
```

**Tipo B — Headline única verde grande**
```
[foto como fundo]
[logo Sigo]
CHEGA DE DAR DESCULPAS          ← verde bold
PARA A FALTA DE LUCRO.          ← verde bold
[subhead branco menor]
[CTA preenchido verde]
```

**Tipo C — Pergunta provocadora**
```
[foto como fundo]
[logo Sigo]
SUA OBRA VIVE                   ← branco bold grande
NO IMPROVISO?                   ← branco bold grande
[subhead em caixa alta menor]
[CTA outline]
```

### Regras de copywriting visual:
- Headline: Work Sans Bold, sempre CAIXA ALTA, no máximo 2 linhas
- Palavras-chave em verde, resto em branco (ou tudo verde)
- Subhead: CAIXA ALTA, mais condensado, pode estar em uma caixa com borda sutil
- CTA: texto simples, sem ícones excessivos (às vezes uma seta →)
- Tom: direto, provocador, focado em dor do construtor/engenheiro

---

## Checklist Final antes de entregar

- [ ] Frame no arquivo correto (não no arquivo de referência)
- [ ] Dimensões corretas (1080×1350 para feed)
- [ ] Overlay gradiente presente e bem calibrado
- [ ] Logo posicionada na zona de transição
- [ ] Headline em Inter Bold, CAIXA ALTA, cor correta
- [ ] Subhead visível e legível sobre o overlay
- [ ] CTA presente se solicitado
- [ ] Margem lateral de 60px respeitada
- [ ] Nome do frame descritivo: "Criativo Sigo - [TEMA]"
- [ ] Link do frame entregue ao usuário no final

---

## Erros comuns a evitar

| ❌ Erro | ✅ Correto |
|--------|-----------|
| Criar no arquivo de referência | Criar no arquivo destino informado pelo usuário |
| Headline em caixa baixa | Sempre CAIXA ALTA |
| Overlay muito claro (foto some) | Opacidade bottom ≥ 0.90 |
| Logo no topo do frame | Logo na zona de transição (y ≈ 58%) |
| Esquecer de carregar fontes | `await figma.loadFontAsync(...)` antes de criar textos |
| Criar frame sobreposto a outros | Detectar posição do último frame e posicionar à direita |

---

## Arquivo de Referência Visual

**Figma de referência (SOMENTE LEITURA):**
`https://www.figma.com/design/0JkeHdlcL9yFtG2InJysIu/Branding-sigo`
fileKey: `0JkeHdlcL9yFtG2InJysIu`

Use `Figma:get_design_context` neste arquivo para consultar criativos existentes e extrair contexto visual, mas **NUNCA crie novos frames aqui**.

Nodes de referência úteis:
- `1:2` — Criativo "CHEGA DE DAR DESCULPAS" (Tipo B)
- `3:4` — Criativo "SUA OBRA VIVE NO IMPROVISO?" (Tipo C)
- `3:5` — Criativo "CHECKLIST DIÁRIO" (Tipo A com CTA outline)
- `3:7` — Criativo "VOCÊ VAI CONTINUAR PAGANDO" (Tipo A com CTA preenchido)
