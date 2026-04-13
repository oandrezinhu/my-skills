# GLOBAL PERFORMANCE RULES
# Master Directive for AI & Layout Generation
# Context: High-Performance Marketing (ON & OFF)

## 1. DIRETRIZES DE MÁXIMA CONVERSÃO (ADS)
Estas regras sobressaem a qualquer instrução estética se o objetivo final for performance.

### Otimização para CTR (Taxa de Clique)
- **Foco no Gancho (Hook):** Os primeiros 20% do topo do criativo (ou os primeiros 3 segundos do vídeo) devem conter a dor principal ou o benefício máximo.
- **Contraste de Título:** O texto principal do anúncio deve ter contraste AA ou AAA em relação ao fundo. Nunca colocar texto fino sobre imagens complexas.
- **Tamanho Limite:** O título não deve ultrapassar 5 palavras. O cérebro humano escaneia imagens em milissegundos.

### Otimização para CPA (Custo por Aquisição)
- **Peso do CTA:** O Botão de Chamada para Ação (CTA) deve ser o elemento de maior peso visual na base do layout.
- **Direcionamento Visual:** Se houver rostos gerados por IA ou fotos de pessoas no layout, o olhar ou o corpo do personagem deve estar apontando para o Título ou para o Botão de CTA.
- **Prova Social Visual:** Sempre que possível, reservar um "Safe Area" no canto inferior esquerdo para inserção de selos de garantia ou "rating" (estrelas).

## 2. REGRAS PARA CRIAÇÃO E INTEGRAÇÃO DE IA (Imagens e Vídeos)
Ao gerar ou aplicar imagens e vídeos nos layouts, seguir estas diretrizes para manter o padrão visual:

- **Prompting Base para Imagens:** Toda imagem fotográfica deve conter os modificadores de qualidade: "High-end commercial photography, shallow depth of field, sharp focus on subject, studio lighting, 8k resolution".
- **Espaço Negativo (Negative Space):** A IA sempre deve gerar imagens com 40% de espaço negativo (fundo limpo/desfocado) à esquerda ou à direita para facilitar a leitura de copys.
- **Legendas de Vídeo:** Devem estar posicionadas na "Safe Zone" central (Eixo Y: 1500px em formato 9:16). Cores de destaque (Highlight) ativadas apenas em verbos de ação ou números.

## 3. ARQUITETURA DE LANDING PAGES (LPs)
Quando solicitado para montar a estrutura de uma LP, usar os seguintes blocos lógicos na ordem exata de persuasão:

1. **Above the Fold (Primeira Dobra):** Header mínimo + H1 direto ao ponto + Subheadline (explicando o "como") + CTA Primário Acima da Dobra + Imagem/Vídeo de alta retenção à direita.
2. **Social Proof imediato:** Logo de empresas ou "Mais de X clientes" logo abaixo da primeira dobra.
3. **Problem/Solution:** 3 a 4 cards explicativos mostrando os pilares do serviço/produto.
4. **Authority/About:** Bloco gerando credibilidade sobre quem entrega.
5. **Footer CTA:** Segunda chamada para ação com contraste máximo, removendo pontos de fuga (sem links externos de distração).

## 4. SISTEMA DE ERROS E LIMITAÇÕES (Figma MCP)
- **Texto Vazio:** Nunca deixar componentes de texto com preenchimento "Lorem Ipsum". Se o copy não for fornecido, usar placeholders semânticos (ex: "[Insira a Dor do Cliente Aqui]").
- **Respeito às Safe Zones:** Todo material para feed/stories deve ter margens laterais de 40px e margens de topo/base de 200px livres de informações cruciais.

---

## Como usar este arquivo

Este é o documento de regras globais. Ele se aplica a **todos os clientes** e deve ser lido antes de qualquer criação de layout, prompt de IA ou LP.

### Hierarquia de leitura ao iniciar um criativo

1. Ler `global_ds.md` (este arquivo) — regras que valem para todos
2. Ler o `.md` do cliente específico (ex: `samech.md`) — identidade, copy e especificidades da marca
3. Aplicar as regras do cliente sobre a base global

### Estrutura obrigatória de cada `.md` de cliente

Todo arquivo de cliente deve conter as seções abaixo para garantir consistência:

```
# Cliente: [Nome]

## Identidade Visual
- Paleta de cores (HEX + uso)
- Tipografia (família, pesos, tamanhos por formato)
- Estilo visual (adjetivos, fotografia, tratamento)
- Logo (nodes Figma, dimensões, regras de uso)

## Referências Aprovadas
- Link Figma dos criativos aprovados
- Estrutura visual dos layouts de referência

## Campanhas Ativas
- Por campanha: objetivo, público, formatos, copy aprovada por peça

## Variáveis para código (Figma Plugin API)
- Constantes de cor em RGB para uso direto no código

## CSS Variables (para LPs)
- Tokens prontos para colar

## Prompt Prefix para IA
- String padrão para iniciar qualquer geração de imagem do cliente
```
