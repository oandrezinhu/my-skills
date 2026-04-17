---
name: lp
description: Cria landing pages distintivas e de alta conversão do zero. Saída em HTML + Tailwind single-file pronto para publicar E arquivo editável no Figma via MCP. Use quando André precisar criar uma LP para campanha, produto ou serviço. Acione sempre que mencionar "landing page", "LP", "página de vendas", "página de captura", "one-pager", "página de conversão", ou pedir para criar uma página para um produto, serviço, SaaS, agência ou empresa. Use após /briefing — o contexto já analisado alimenta diretamente esta skill.
---

# Landing Page de Alta Conversão

Gera landing pages que não são genéricas. A regra número um desta skill: **nunca entregue uma LP genérica**. Genérico é o estado natural de uma IA escrevendo landing page — você precisa lutar contra isso ativamente em cada decisão.

`$ARGUMENTS`

## O que conta como "genérico" (nunca faça)

Se algum destes sinais aparecer no que você gerou, é genérico — recomece a seção:

- Headline que poderia servir pra qualquer empresa ("A plataforma completa para o seu negócio")
- Hero com gradiente roxo→azul + blob abstrato + ilustração 3D flutuante
- Três features chamadas "Rápido", "Seguro", "Escalável"
- Depoimentos com nomes tipo "João Silva, CEO" e citações vazias ("Mudou nossa empresa!")
- Ícones Lucide clichê (Zap/Shield/Rocket) sem conexão com a feature
- Cores exatamente `blue-600` e `indigo-600` do Tailwind sem customização
- "Como funciona" em 3 passos genéricos ("Cadastre-se / Configure / Aproveite")
- "Saiba mais" como texto de CTA principal

---

## O que você entrega

1. **HTML + Tailwind CSS** completo, responsivo, single-file, pronto para publicar
2. **Arquivo Figma** editável criado via MCP com frames Desktop (1440px) + Mobile (390px)

---

## Etapa 1 — Briefing

Se vier após um `/briefing`, use o contexto já analisado e pule direto para a Etapa 2.

Se não houver contexto, pergunte agrupado em uma mensagem só:

> "Pra fazer uma página que não seja genérica, preciso de quatro coisas:
> 1. **O quê + pra quem**: o que vendem e quem é o cliente ideal (1-2 linhas concretas)
> 2. **Diferencial real**: o que fazem diferente dos concorrentes — algo verificável, não 'qualidade' ou 'atendimento'
> 3. **Ação desejada**: o que o visitante deve fazer (testar grátis, agendar, comprar, WhatsApp, orçamento…)
> 4. **Identidade visual**: logo, cores, fontes? Alguma referência de site que gostam?"

Se o briefing inicial já tem esses elementos, **pule a entrevista**. Faltando item não-crítico (foto de equipe, número exato de clientes), invente plausível e **liste no final como placeholder pra trocar**.

---

## Etapa 2 — Estrutura

Toda LP tem este esqueleto obrigatório. Consulte `references/sections.md` para como escrever cada seção e diferenças entre produto vs serviço:

1. **Navbar** (logo + 1-2 links âncora + CTA)
2. **Hero** (headline + subheadline + CTA primário + visual)
3. **Prova social / logos** (logos de clientes OU números reais OU rating/selo)
4. **Features / benefícios** (3-6 blocos, formato depende do tipo)
5. **Como funciona** (3 passos — nunca genéricos)
6. **Depoimentos** (mínimo 3, com nome + cargo + empresa + citação específica)
7. **FAQ** (5-7 perguntas que matam objeções reais do setor)
8. **CTA final** (bloco destacado reforçando a ação)
9. **Footer enxuto**

**Adicione conforme o tipo:**
- **SaaS/app**: bloco de demo/screenshot após o hero; Pricing antes do CTA final
- **Produto físico**: galeria de closeups; especificações; frete; Pricing
- **Agência/performance**: Cases/portfolio; Processo detalhado
- **Consultoria/profissional**: Sobre/credenciais; Metodologia; Formulário no final
- **Campanha de mídia paga**: Hero direto, seção de dor/problema, CTA sticky no mobile

---

## Etapa 3 — Copy primeiro, código depois

Esta é a etapa onde 90% das LPs falham. Escreva **todo o copy em texto puro** antes de tocar em HTML.

Para cada seção, rascunhe: headline, subheadline, bullets/copy de apoio, texto exato dos CTAs.

Consulte `references/copywriting.md` para frameworks, fórmulas de headline e palavras banidas. Regras principais:
- Específico > genérico (use números, prazos, nomes, nichos)
- "Você" aparece mais que "nós"
- Benefício antes da feature
- Zero palavras banidas ("revolucionário", "transforme", "soluções", "leve ao próximo nível")
- CTAs em primeira pessoa ou ação concreta ("Quero agendar diagnóstico", "Começar teste de 14 dias")

**Teste de não-genérico**: releia cada headline — *um concorrente direto poderia copiar essa frase sem mudar nada?* Se sim, reescreva incorporando algo específico: uma feature real, um nicho, um número, um processo.

---

## Etapa 4 — Design distintivo

Antes de escrever qualquer HTML, tome estas decisões. Consulte `references/design-rules.md` para paletas curadas por setor e combinações de fonte:

1. **Paleta**: uma das paletas curadas por setor OU custom a partir das cores do logo. **Nunca** `blue-600`/`indigo-600` puros sem customizar.

2. **Tipografia**: 1-2 fontes do Google Fonts. Combinações específicas por setor. SaaS técnico ≠ clínica premium ≠ agência criativa.

3. **Layout do hero**:
   - Produto visual (app, hardware, SaaS com UI bonita) → centered com mockup grande, ou split clássico
   - Serviço premium (consultoria, clínica) → full-bleed com foto autêntica + overlay, ou centered tipográfico
   - Agência criativa → tipografia gigante, layout assimétrico

4. **Visual do hero**: nada de blob abstrato ou stock photo genérico. Opções válidas:
   - Screenshot do produto dentro de mockup de browser/device
   - Foto autêntica do serviço em execução
   - Composição tipográfica sem imagem (válido para agências, consultorias premium)
   - Grid de screenshots em bento layout

5. **Ícones**: Lucide via CDN, escolha ícones que **conectam semanticamente** com a feature. Se não achar, use número grande estilizado.

---

## Etapa 5 — Implementar

Stack: **HTML + Tailwind via CDN, single-file**. Sempre.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título específico — produto/serviço + diferencial]</title>
  <meta name="description" content="[150-160 chars com proposta de valor concreta]">
  <!-- OG Tags -->
  <meta property="og:title" content="[HEADLINE]">
  <meta property="og:description" content="[SUBHEADLINE]">
  <meta property="og:image" content="[HERO IMAGE URL]">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=[fonte-escolhida]&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { /* cores customizadas da paleta escolhida */ },
          fontFamily: { /* fontes escolhidas */ }
        }
      }
    }
  </script>
  <style>
    :root {
      --cor-primaria: [HEX];
      --cor-secundaria: [HEX];
      --cor-destaque: [HEX];
      --cor-texto: [HEX];
      --fonte-principal: '[FONTE]', sans-serif;
    }
    html { scroll-behavior: smooth; }
    body { font-family: var(--fonte-principal); }
    .btn-cta { background-color: var(--cor-destaque); }
    .btn-cta:hover { filter: brightness(1.1); }
  </style>
</head>
<body>
  <!-- Navbar -->
  <!-- Hero -->
  <!-- Prova Social -->
  <!-- Features / Benefícios -->
  <!-- Como Funciona -->
  <!-- Depoimentos -->
  <!-- FAQ -->
  <!-- CTA Final -->
  <!-- Footer -->

  <!-- STICKY CTA MOBILE -->
  <div class="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-4 shadow-lg z-50">
    <a href="#cta-final" class="btn-cta block text-center text-white font-bold py-3 rounded-full">
      [TEXTO DO CTA]
    </a>
  </div>

  <script>
    lucide.createIcons();
    // Toggle mobile menu
    // Fade-in on scroll (IntersectionObserver)
  </script>
</body>
</html>
```

**Requisitos não-negociáveis:**
- Mobile-first — toda seção funcionando em 375px
- Navbar vira hamburger em mobile com toggle JS
- CTA primário do hero é o elemento mais visível da primeira dobra
- Smooth scroll nas âncoras de seção
- Botão do formulário com loading state
- Zero lorem ipsum, zero código comentado, zero `console.log`
- Contraste WCAG AA no mínimo

---

## Etapa 6 — Criar no Figma via MCP

Após gerar o HTML, crie o arquivo Figma:

1. **Criar novo arquivo** com `mcp__claude_ai_Figma__create_new_file`
   - Nome: `LP — [Nome da Campanha] — [Data]`

2. **Estrutura de layers:**
```
LP — [Campanha]
├── 📱 Mobile (390px)
│   ├── 01 Hero
│   ├── 02 Prova Social
│   ├── 03 Features
│   ├── 04 Como Funciona
│   ├── 05 Depoimentos
│   ├── 06 FAQ
│   ├── 07 CTA Final
│   └── 08 Footer
└── 🖥️ Desktop (1440px)
    └── [mesma estrutura]
```

3. **Reportar o link** do arquivo criado para acesso direto

---

## Etapa 7 — Entrega final

```
✅ LP PRONTA — [Nome da Campanha]

📄 HTML: [bloco de código completo]

🎨 FIGMA: [URL do arquivo criado]
   Frames: Desktop (1440px) + Mobile (390px)

📋 PLACEHOLDERS PARA TROCAR:
[lista numerada e explícita de cada item que precisa ser substituído]

💡 VARIANTES POSSÍVEIS:
[1-2 alternativas que poderia fazer: versão dark, paleta alternativa, hero diferente, formulário embutido]

📋 CHECKLIST PRÉ-PUBLICAÇÃO:
[ ] Substituir imagens placeholder por assets reais
[ ] Testar formulário com integração real (RD Station / HubSpot / etc)
[ ] Configurar tracking (GA4, Meta Pixel, UTMs)
[ ] Testar velocidade (PageSpeed Insights)
[ ] Revisar copy final com account antes de subir
```

---

## Arquivos de referência

- `references/sections.md` — Como escrever cada seção + diferenças produto vs serviço. Consulte na Etapa 2.
- `references/copywriting.md` — Frameworks, fórmulas de headline, palavras banidas, exemplos bons vs ruins. Consulte na Etapa 3.
- `references/design-rules.md` — Paletas curadas por setor, combinações de fonte, layouts de hero, anti-padrões visuais. Consulte na Etapa 4.

---

## Anti-padrões absolutos

Nunca, em nenhuma circunstância:

- Lorem ipsum em qualquer lugar
- Headlines do tipo "A solução completa para o seu negócio"
- Hero com gradient roxo-azul + blob SVG
- Depoimentos com citações vazias ("Excelente!", "Recomendo muito!")
- Features: "Rápido / Seguro / Escalável" sem contexto
- Ícones clichê (Zap/Shield/Rocket) desconectados
- Navbar com 7 links de site institucional
- Footer inchado com 5 colunas institucionais
- Mais de 1 CTA primário competindo na primeira dobra
- Cores `blue-600` puras do Tailwind sem customização
- Inventar um setor/nicho quando o briefing foi raso — pergunte
