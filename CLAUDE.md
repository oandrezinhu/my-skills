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

| Comando | Arquivo | O que faz |
|---|---|---|
| `/start` | `.claude/skills/start/SKILL.md` | **Ponto de entrada.** Orquestra as demandas e monta o plano de execução |
| `/briefing` | `.claude/skills/briefing/SKILL.md` | Analisa briefing, diagnostica copy, define direção visual |
| `/prompts` | `.claude/skills/prompts/SKILL.md` | Gera prompts para Freepik, Kling e ElevenLabs |
| `/referencias` | `.claude/skills/referencias/SKILL.md` | Sugere referências visuais de alta performance |
| `/lp` | `.claude/skills/lp/SKILL.md` | Cria landing page (HTML/Tailwind + Figma) |
| `/formatos` | `.claude/skills/formatos/SKILL.md` | Desdobra conceito em todos os formatos da campanha |
| `/identidade` | `.claude/skills/identidade/SKILL.md` | Extrai e documenta identidade visual do cliente |

### Templates de prompts disponíveis (usados pelo `/prompts`)

| Template | Arquivo | Uso |
|---|---|---|
| Imagem vetorial | `.claude/skills/prompts/templates/imagem-vetorial.md` | Ilustração flat/vetor para impressos e digitais |
| Textura e profundidade | `.claude/skills/prompts/templates/textura-profundidade.md` | Macro realista com bokeh |
| Iluminação estúdio | `.claude/skills/prompts/templates/iluminacao-estudio.md` | Retratos e produto com luz controlada |
| Lifestyle ambiental | `.claude/skills/prompts/templates/lifestyle-ambiental.md` | Pessoa/produto em contexto real |
| Vídeo Kling | `.claude/skills/prompts/templates/video-kling.md` | Roteiro em cenas para Kling 3.0 |
| Voz ElevenLabs | `.claude/skills/prompts/templates/voz-elevenlabs.md` | Script de locução com pontuação estratégica |

---

## Como me comportar neste projeto

- **Sempre leia este CLAUDE.md** antes de executar qualquer comando
- **Use `/start` como ponto de entrada** quando chegar uma demanda nova
- Responda em **português** sempre
- Seja direto e orientado à entrega — o André é sênior, não precisa de explicações básicas
- Quando a copy chegar ruim, reescreva sem perguntar: mostre a original e a melhorada lado a lado
- Priorize saídas prontas para usar: prompts completos, HTML funcional, copy finalizada
- Não pergunte o que já está no briefing — extraia você mesmo

---

## Status atual do projeto

Fase: **melhoria das skills existentes**
Objetivo: tornar cada skill mais precisa, com outputs mais ricos e menos dependência de interação manual.

Ordem de prioridade para melhoria:
1. `/referencias` — mais rasa, maior dor de tempo
2. `/briefing` — falta template de saída padronizado e critérios de pontuação de copy
3. `/prompts` — templates precisam estar embutidos na skill
4. `/formatos` — falta spec técnica de exportação (DPI, bleed, perfil de cor)
5. `/identidade` — falta fluxo para clientes sem material de marca
6. `/start` — falta exemplos concretos de plano por tipo de demanda
7. `/lp` — a mais completa, melhorias pontuais
