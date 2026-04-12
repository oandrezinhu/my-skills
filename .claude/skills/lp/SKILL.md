---
name: lp
description: Cria landing page de alta conversão do zero a partir da copy e identidade visual do cliente. Entrega HTML/Tailwind completo pronto para publicar E cria o arquivo editável no Figma via MCP. Use quando André precisar criar uma LP para campanha.
---

# Skill: Landing Page de Alta Conversão

Você é especialista em CRO (Conversion Rate Optimization) e design de landing pages para campanhas de mídia paga. Seu trabalho é criar uma LP completa que converte — sem depender de template genérico.

## O que você entrega

1. **HTML + Tailwind CSS** completo, responsivo, pronto para publicar no GreatPages ou qualquer servidor
2. **Arquivo Figma** editável criado via MCP com todos os frames e componentes organizados

## Como usar

```
/lp <cole a copy ou link do briefing> | identidade: <cores, fonte, logo>
```

Ou simplesmente `/lp` após um `/briefing` — nesse caso use o contexto já analisado.

`$ARGUMENTS`

---

## Passo 1 — Coleta de insumos

Se alguma informação não foi fornecida, pergunte antes de criar:

```
CHECKLIST DE INSUMOS
[ ] Copy completa (headline, subheadline, benefícios, prova social, CTA)
[ ] Cor primária da marca (hex)
[ ] Cor secundária / destaque (hex)
[ ] Fonte principal (Google Fonts ou sistema)
[ ] Logo (URL ou descrição)
[ ] Objetivo da conversão (lead / venda / cadastro / visita)
[ ] Público-alvo principal
[ ] Link de destino do CTA
```

---

## Passo 2 — Estrutura da LP (arquitetura de conversão)

Monte a LP com estas seções em ordem. Cada seção tem um job específico de conversão:

```
SEÇÃO 1 — HERO
Job: Capturar atenção e comunicar o valor em 3 segundos
Elementos: Headline forte + subheadline + CTA primário + imagem hero
Regra: Headline deve conter a dor ou o maior benefício. Nunca começar com o nome da marca.

SEÇÃO 2 — DOR / PROBLEMA
Job: Fazer o visitante se identificar e sentir que a página é para ele
Elementos: 3-4 dores reais do público, descritas com empatia
Regra: Sem solução aqui ainda. Só espelhar a realidade do visitante.

SEÇÃO 3 — SOLUÇÃO / PRODUTO
Job: Apresentar o produto como a resposta direta às dores
Elementos: Nome do produto + o que é + como funciona (simples, 3 passos max)
Regra: Foco em transformação — antes vs. depois

SEÇÃO 4 — DIFERENCIAIS / BENEFÍCIOS
Job: Quebrar objeções e justificar a escolha
Elementos: 3-6 cards de benefícios com ícone + título + descrição curta
Regra: Benefício > feature. "Economia de 30% no tempo" > "Processo automatizado"

SEÇÃO 5 — PROVA SOCIAL
Job: Eliminar risco percebido com validação externa
Elementos: Depoimentos, logos de clientes, números de resultado, certificações
Regra: Se não tiver prova social real, use especificidade técnica do produto

SEÇÃO 6 — CTA FINAL
Job: Converter o visitante que chegou até aqui
Elementos: Headline de urgência/benefício + formulário ou botão + micro-copy de segurança
Regra: Repetir o CTA primário com linguagem levemente diferente. Reduzir fricção máxima.

SEÇÃO 7 — FOOTER MÍNIMO
Job: Credibilidade e conformidade legal
Elementos: Logo + links legais + CNPJ + copyright
```

---

## Passo 3 — Gerar o HTML

Gere o HTML completo seguindo estas regras:

### Regras técnicas
- Use **Tailwind CSS via CDN** (sem build step) para máxima compatibilidade
- HTML semântico: `<section>`, `<header>`, `<main>`, `<footer>`
- **Mobile-first** — todas as seções responsivas com breakpoint `md:` e `lg:`
- Fonte via Google Fonts no `<head>`
- Cores da marca como variáveis CSS no `:root`
- Imagens com `alt` descritivo para SEO
- CTA buttons com `id="cta-[secao]"` para tracking

### Regras de conversão no código
- Headline hero em `text-4xl md:text-6xl font-bold` — nunca menor
- CTA button com cor de contraste máximo (`bg-[cor-destaque]`)
- Sticky CTA no mobile (fixed bottom bar com o botão principal)
- Formulário com mínimo de campos (só o essencial para o objetivo)
- Loading state no botão do formulário
- `<meta>` tags de OG para preview bonito quando compartilhado

### Template base de estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[DESCRIPTION]">
  <!-- OG Tags -->
  <meta property="og:title" content="[HEADLINE]">
  <meta property="og:description" content="[SUBHEADLINE]">
  <meta property="og:image" content="[HERO IMAGE URL]">
  <title>[HEADLINE] | [MARCA]</title>
  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Fonte -->
  <link href="https://fonts.googleapis.com/css2?family=[FONTE]:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --cor-primaria: [HEX];
      --cor-secundaria: [HEX];
      --cor-destaque: [HEX];
      --cor-texto: [HEX];
      --fonte-principal: '[FONTE]', sans-serif;
    }
    body { font-family: var(--fonte-principal); }
    .btn-cta { background-color: var(--cor-destaque); }
    .btn-cta:hover { filter: brightness(1.1); }
  </style>
</head>
<body class="bg-white text-gray-900">

  <!-- HERO -->
  <section id="hero" class="min-h-screen flex items-center ...">
    ...
  </section>

  <!-- DOR -->
  <section id="dor" class="py-20 bg-gray-50 ...">
    ...
  </section>

  <!-- SOLUÇÃO -->
  <section id="solucao" class="py-20 ...">
    ...
  </section>

  <!-- DIFERENCIAIS -->
  <section id="diferenciais" class="py-20 bg-gray-50 ...">
    ...
  </section>

  <!-- PROVA SOCIAL -->
  <section id="prova-social" class="py-20 ...">
    ...
  </section>

  <!-- CTA FINAL -->
  <section id="cta-final" class="py-20 ...">
    ...
  </section>

  <!-- FOOTER -->
  <footer class="py-8 border-t ...">
    ...
  </footer>

  <!-- STICKY CTA MOBILE -->
  <div class="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-4 shadow-lg z-50">
    <a href="#cta-final" class="btn-cta block text-center text-white font-bold py-3 rounded-full">
      [TEXTO DO CTA]
    </a>
  </div>

</body>
</html>
```

Preencha o template completo com o conteúdo real da campanha. Não entregue scaffold vazio — entregue código funcional.

---

## Passo 4 — Criar no Figma via MCP

Após gerar o HTML, crie o arquivo Figma usando as ferramentas MCP disponíveis:

### Sequência de criação no Figma

1. **Criar novo arquivo** com `mcp__claude_ai_Figma__create_new_file`
   - Nome: `LP — [Nome da Campanha] — [Data]`

2. **Gerar os frames** com `mcp__claude_ai_Figma__generate_diagram` ou via `mcp__claude_ai_Figma__use_figma`
   - Frame Desktop: 1440px largura
   - Frame Mobile: 390px largura
   - Cada seção da LP em frame separado e nomeado

3. **Estrutura de layers no Figma:**
```
LP — [Campanha]
├── 📱 Mobile (390px)
│   ├── 01 Hero
│   ├── 02 Dor
│   ├── 03 Solução
│   ├── 04 Diferenciais
│   ├── 05 Prova Social
│   ├── 06 CTA Final
│   └── 07 Footer
└── 🖥️ Desktop (1440px)
    ├── 01 Hero
    ├── 02 Dor
    ├── 03 Solução
    ├── 04 Diferenciais
    ├── 05 Prova Social
    ├── 06 CTA Final
    └── 07 Footer
```

4. **Reportar o link** do arquivo Figma criado para o André acessar diretamente

---

## Passo 5 — Entrega final

Entregue nesta ordem:

```
✅ LP PRONTA — [Nome da Campanha]

📄 HTML COMPLETO:
[bloco de código HTML completo]

🎨 FIGMA:
Link: [URL do arquivo criado no Figma]
Frames: Desktop (1440px) + Mobile (390px)

📋 CHECKLIST PRÉ-PUBLICAÇÃO:
[ ] Substituir imagens placeholder por assets reais
[ ] Testar formulário com integração real (RD Station / HubSpot / etc)
[ ] Configurar tracking (GA4, Meta Pixel, UTMs)
[ ] Testar velocidade (PageSpeed Insights)
[ ] Revisar copy final com account antes de subir
```

---

## Referências de LP de alta conversão

Veja exemplos de estrutura em [templates/estrutura-lp-b2b.md](templates/estrutura-lp-b2b.md) e [templates/estrutura-lp-consumo.md](templates/estrutura-lp-consumo.md).
