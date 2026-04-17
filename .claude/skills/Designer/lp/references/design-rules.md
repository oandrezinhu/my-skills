# Regras de Design para Landing Pages

Esta referência complementa o skill de `frontend-design` geral com regras específicas de LP. Leia `/mnt/skills/public/frontend-design/SKILL.md` primeiro para fundamentos visuais; use este arquivo para decisões específicas de landing page.

## Paletas de cores prontas

Escolha conforme o tipo de negócio. Não use o gradiente roxo-azul padrão de IA.

### SaaS confiável (fintech, produtividade, B2B)
- Base: `#0A0B0E` (quase preto) ou `#FFFFFF`
- Texto: `#111827` em claro, `#F9FAFB` em escuro
- Muted: `#6B7280`
- Acento: `#3B82F6` (azul) ou `#10B981` (verde) ou `#F59E0B` (âmbar)
- Border: `#E5E7EB`

### Premium / editorial
- Base: `#FAF8F4` (off-white cremoso) ou `#1A1814` (quase preto quente)
- Texto: `#1A1814` / `#F5F1EA`
- Acento: `#C8A876` (dourado) ou `#8B3A3A` (bordô) ou nenhuma cor — só preto/branco/serifa
- Tipografia serifada manda; cor é sutil

### Bold / descolado (D2C, creator economy, app jovem)
- Base: `#FFFFFF` ou cor saturada como `#FFE8D6`, `#D4F4DD`, `#E8E4FF`
- Texto: `#000000` puro
- Acento: cor primária forte (`#FF4D00`, `#00D26A`, `#7C3AED`) + cor secundária
- Use gradientes com moderação e só em blocos específicos, nunca no background geral

### Dark mode tech
- Base: `#0A0A0A`
- Superfície: `#141414` para cards
- Texto: `#EDEDED`
- Muted: `#888888`
- Acento: verde `#00FF88`, ciano `#00D4FF`, ou magenta `#FF0080`
- Borders sutis: `#262626`

### Profissional / clínica / consultoria
- Base: branco limpo `#FFFFFF` ou off-white `#FAFAF7`
- Headline em cor sóbria: azul marinho `#0F172A`, verde profundo `#064E3B`, ou bordô `#7F1D1D`
- Acento para CTA: cor da marca com boa saturação, mas nunca fluorescente
- Tipografia tende a serifada pra display (transmite confiança e tradição)
- Evite visual "tech" — nada de dark mode, gradientes vibrantes ou neon

---

## Tipografia

**Regra 1**: no máximo 2 famílias de fonte. Uma pra display (headlines), outra pra body. Muitas vezes, 1 só resolve.

**Regra 2**: hierarquia forte. H1 deve ser visualmente dominante — pense 48-72px em desktop, 36-48px em mobile. Body em 16-18px. Se H1 e body têm tamanho parecido, tá errado.

**Regra 3**: line-height generoso em body (1.6-1.75). Apertado em headlines (1.05-1.15).

**Regra 4**: max-width de texto corrido ~65-75 caracteres. Parágrafo que atravessa 1200px de tela é ilegível.

### Combinações testadas

```html
<!-- SaaS moderno -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Editorial premium -->
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Bold / descolado -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">

<!-- Instrument Serif (display minimalista da moda) -->
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## Layouts de hero

### Split clássico
```
[Logo navbar                              CTA]
[                                            ]
[  Headline grande        [                ] ]
[  Subheadline            [   MOCKUP      ] ]
[  [CTA] [CTA secundário] [                ] ]
[  ⭐ prova social        [                ] ]
```
Funciona em: 90% dos SaaS. Default seguro.

### Centered
```
[Logo navbar                              CTA]
[                                            ]
[              Headline grande               ]
[              Subheadline                   ]
[              [CTA primário]                ]
[                                            ]
[           [MOCKUP GRANDE CENTRAL]          ]
```
Funciona em: produtos visualmente impressionantes, apps, ferramentas de design.

### Full-bleed
```
[ Logo navbar                            CTA ]
[                                             ]
[         [IMAGEM DE FUNDO FULL]              ]
[         [com overlay escuro]                ]
[                                             ]
[              Headline                       ]
[              Subheadline                    ]
[              [CTA]                          ]
```
Funciona em: serviços premium, imobiliário, eventos, hospitality, luxo.

---

## Espaçamento

- Seções têm padding vertical generoso: `py-20` ou `py-24` em desktop, `py-12` a `py-16` em mobile.
- Container central com `max-w-7xl` ou `max-w-6xl` com `px-4 md:px-6 lg:px-8`.
- Entre headline e subheadline: `mt-4` a `mt-6`.
- Entre subheadline e CTA: `mt-8` a `mt-10`.
- Entre seções do mesmo bloco: `gap-8` ou `gap-12`.

**Regra de ouro**: na dúvida, mais respiro. LP apertada parece amadora.

---

## Anti-padrões visuais

Não faça nada disso:

1. **Gradiente roxo→azul no hero** (`from-purple-600 via-blue-600 to-indigo-600`). É a assinatura visual de "feito por IA em 30 segundos".

2. **Blob SVG abstrato flutuante** como hero. Colorido, gelatinoso, sem significado. Proibido.

3. **Ilustrações 3D genéricas** tipo "pessoinha laranja com laptop flutuando". Se for usar ilustração, que seja custom ou screenshot real.

4. **Cards com sombra pesada + border-radius de 24px + gradiente de fundo**. Escolha um efeito, não três.

5. **Emojis como ícones principais** em seção séria de features. Lucide ou SVG.

6. **Headline em gradiente de texto** com 3+ cores. Um gradiente sóbrio de 2 cores próximas é tolerável, arco-íris não.

7. **Todo botão com mesma cor e mesma proeminência**. Hierarquia de CTAs: primário (cheio), secundário (outline ou ghost), terciário (texto com seta).

8. **Seção de "estatísticas" com números gigantes sem contexto**: "500+ / 10K+ / 99%". Sem dizer do quê, é ruído visual.

9. **Scroll parallax exagerado** que quebra em mobile. Evite a não ser que seja central ao conceito.

10. **Animação entrando de cada lado em cada seção**. Um fade-in sutil tá ótimo.

---

## Micro-interações que valem

- **Navbar**: blur + borda sutil ao rolar (`backdrop-blur` + border bottom aparece após 50px de scroll).
- **Hover em cards**: leve translate-y -2px + shadow cresce. Nada dramático.
- **CTA**: hover muda o brilho ou escurece levemente; active reduz escala pra 98%.
- **Fade-in sutil** em seções ao entrar no viewport (use IntersectionObserver, não biblioteca).
- **Smooth scroll** para âncoras (`scroll-behavior: smooth`).

---

## Checklist visual final

Antes de entregar, confira:

- [ ] Mobile funciona? (abra mentalmente em 375px)
- [ ] Contraste do texto passa WCAG AA? (texto cinza claro em fundo branco é o erro mais comum)
- [ ] CTA primário é o elemento mais visível da primeira dobra?
- [ ] Tipografia tem hierarquia clara? H1 >> H2 > body?
- [ ] Não há gradiente roxo-azul?
- [ ] Não há blob SVG genérico?
- [ ] Espaçamento entre seções é generoso?
- [ ] Cores usadas são no máximo 3 (base + texto + acento) + neutras?
- [ ] Imagens têm `alt` e dimensões declaradas?
- [ ] Fonte carrega do Google Fonts no head?
