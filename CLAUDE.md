# CLAUDE.md — Projeto my-skills

Este arquivo é lido automaticamente pelo Claude Code ao abrir este repositório.
Contém tudo que você precisa saber para me ajudar sem perguntas repetitivas.

---

## Quem é o André

Designer de performance sênior na **V4 Company**.
Cria materiais **on e off** para campanhas pagas:

- Imagens e vídeos gerados por IA
- Landing pages
- Outdoors, folders e materiais gráficos

---

## Ferramentas do dia a dia

| Ferramenta | Uso |
|---|---|
| Freepik (Nano Banana Pro) | Geração de imagens estáticas por IA |
| Kling 3.0 | Geração de vídeo por IA |
| ElevenLabs | Geração de áudio e locução |
| Figma | Diagramação e identidade visual |
| GreatPages → HTML/Claude | Landing pages (em migração para HTML gerado pelo Claude) |

---

## Equipe

- **Account** — aprova o briefing antes de chegar no André
- **Copywriter** — escreve a copy (às vezes chega com qualidade baixa)
- **Aprovadores** — precisam aprovar as entregas finais

---

## Processo padrão de uma campanha

1. Receber briefing de copy aprovado pelo account
2. Ler e interpretar o briefing
3. Buscar referências visuais que performam bem
4. Criar prompts para geração de imagens/vídeos
5. Gerar os assets nas ferramentas de IA
6. Diagramar o criativo no Figma dentro da identidade visual do cliente

---

## Principais dores (por impacto)

1. Buscar referências visuais que performam — consome muito tempo
2. Ler e ajustar copy ruim — desgastante e recorrente
3. Criar landing pages do zero — processo lento
4. Desdobrar identidades visuais a cada campanha nova

---

## Skills disponíveis

### 🎯 Orquestrador

| Comando | Arquivo | O que faz |
|---|---|---|
| `/start` | `.claude/skills/Orquestrador/start/SKILL.md` | **Ponto de entrada.** Orquestra as demandas e monta o plano de execução |

### ✍️ Copywriter

| Comando | Arquivo | O que faz |
|---|---|---|
| `/briefing` | `.claude/skills/Copywriter/briefing/SKILL.md` | Analisa briefing, diagnostica copy, define direção visual |

### 🎨 Designer

| Comando | Arquivo | O que faz |
|---|---|---|
| `/referencias` | `.claude/skills/Designer/referencias/SKILL.md` | Sugere referências visuais de alta performance |
| `/prompts` | `.claude/skills/Designer/prompts/SKILL.md` | Gera prompts para Freepik, Kling e ElevenLabs |
| `/roteiro` | `.claude/skills/Designer/roteiro/SKILL.md` | Prompts cinematográficos para Sora, Veo, Runway, Kling, Pika, Luma — multi-cena com consistência visual |
| `/formatos` | `.claude/skills/Designer/formatos/SKILL.md` | Desdobra conceito em todos os formatos da campanha |
| `/lp` | `.claude/skills/Designer/lp/SKILL.md` | Cria landing page (HTML/Tailwind + Figma) — sistema anti-genérico com paletas curadas |
| `/greatpages` | `.claude/skills/Designer/greatpages/SKILL.md` | Converte HTML do `/lp` para bloco compatível com o GreatPages (remove CDN, converte Tailwind, escopa CSS/JS) |
| `/identidade` | `.claude/skills/Designer/identidade/SKILL.md` | Extrai e documenta identidade visual do cliente |
| `/design-system` | `.claude/skills/Designer/design-system/SKILL.md` | Cria design system completo (tokens, componentes, preview HTML, exporta para Figma) |
| `/figma-designer` | `.claude/skills/Designer/figma-designer/SKILL.md` | Regras e padrões para criação de layouts Figma via Plugin API — texto que preenche, sem overflow |

### 📊 Analytics

| Comando | Arquivo | O que faz |
|---|---|---|
| `/clarity` | `.claude/skills/Analytics/clarity/SKILL.md` | Analisa dados do Microsoft Clarity e gera plano de ação CRO priorizado |

### Quando usar qual skill

**Vídeo:**
- `/prompts` → vídeos simples, 1-3 cenas, Kling ou ElevenLabs
- `/roteiro` → múltiplas cenas, consistência entre takes, direção cinematográfica, Sora/Veo/Runway

**Identidade e sistema:**
- `/identidade` → cliente novo, extrair e documentar identidade visual existente
- `/design-system` → transformar identidade em sistema completo com tokens e componentes no Figma

**Estrutura de pastas das skills:**
```
.claude/skills/
├── Orquestrador/
│   └── start/           ← ponto de entrada de toda demanda
├── Copywriter/
│   └── briefing/        ← análise de copy e direção criativa
└── Designer/
    ├── referencias/     ← referências visuais antes de criar
    ├── prompts/         ← prompts para Freepik, Kling, ElevenLabs
    ├── roteiro/         ← roteiros cinematográficos para IA de vídeo
    ├── formatos/        ← desdobramento por formato
    ├── lp/              ← landing pages HTML/Tailwind
    ├── greatpages/      ← conversor HTML → bloco GreatPages
    ├── identidade/      ← extração de identidade visual
    ├── design-system/   ← design system completo
    └── figma-designer/  ← regras e código para layouts no Figma
```
```
.claude/skills/Clientes/
├── global_ds.md         ← regras globais de performance (leitura obrigatória antes de qualquer criativo)
└── Samech/
    ├── samech.md        ← identidade visual, design system, copies e campanhas ativas
    ├── samech.svg       ← logo Samech Vedações (231×62 nos criativos)
    └── oringone.svg     ← logo OringOne (227×62 nos criativos)
```

### Templates de prompts disponíveis (usados pelo `/prompts`)

| Template | Arquivo | Uso |
|---|---|---|
| Imagem vetorial | `.claude/skills/Designer/prompts/templates/imagem-vetorial.md` | Ilustração flat/vetor para impressos e digitais |
| Textura e profundidade | `.claude/skills/Designer/prompts/templates/textura-profundidade.md` | Macro realista com bokeh |
| Iluminação estúdio | `.claude/skills/Designer/prompts/templates/iluminacao-estudio.md` | Retratos e produto com luz controlada |
| Lifestyle ambiental | `.claude/skills/Designer/prompts/templates/lifestyle-ambiental.md` | Pessoa/produto em contexto real |
| Vídeo Kling | `.claude/skills/Designer/prompts/templates/video-kling.md` | Roteiro em cenas para Kling 3.0 |
| Voz ElevenLabs | `.claude/skills/Designer/prompts/templates/voz-elevenlabs.md` | Script de locução com pontuação estratégica |

---

## Como me comportar neste projeto

- **Sempre leia este CLAUDE.md** antes de executar qualquer comando
- **Use `/start` como ponto de entrada** quando chegar uma demanda nova
- Responda em **português** sempre
- Seja direto e orientado à entrega — o André é sênior, não precisa de explicações básicas
- Quando a copy chegar ruim, reescreva sem perguntar: mostre a original e a melhorada lado a lado
- Priorize saídas prontas para usar: prompts completos, HTML funcional, copy finalizada
- Não pergunte o que já está no briefing — extraia você mesmo

### Ordem de leitura ao iniciar qualquer criativo

1. `Clientes/global_ds.md` — regras globais de performance (valem para todos os clientes)
2. `Clientes/[cliente].md` — identidade visual, copy e especificidades da marca
3. Skill correspondente à tarefa (`Designer/`, `Copywriter/`, etc.)

---

## Status atual do projeto

Fase: **reorganização + melhoria contínua**
Objetivo: skills organizadas por papel (Designer / Copywriter / Orquestrador), outputs mais ricos, menos dependência de interação manual.

Reorganização (abril 2026):
- Skills migradas para pastas por papel: `Designer/`, `Copywriter/`, `Orquestrador/`
- Arquivo de cliente criado: `Designer/figma-designer/clientes/samech.md`

Skills adicionadas (abril 2026):
- `/roteiro` — prompts cinematográficos para Sora, Veo, Runway, Kling, Pika, Luma
- `/design-system` — design system completo com tokens, componentes e exportação Figma
- `/figma-designer` — regras absolutas de layout Figma via Plugin API (sem overflow de texto)

Skills melhoradas:
- `/lp` — sistema anti-genérico, copy-first, paletas curadas por setor
- `/start` — planos padrão por tipo de demanda

Ordem de prioridade para próximas melhorias:
1. `/referencias` — mais rasa, maior dor de tempo
2. `/briefing` — falta template de saída padronizado e critérios de pontuação de copy
3. `/prompts` — templates precisam estar embutidos na skill
4. `/formatos` — falta spec técnica de exportação (DPI, bleed, perfil de cor)
5. `/identidade` — falta fluxo para clientes sem material de marca
