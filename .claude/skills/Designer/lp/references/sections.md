# Biblioteca de Seções — Produto & Serviço

As 9 seções obrigatórias com especificação detalhada de como escrever cada uma, incluindo diferenças entre LP de produto e LP de serviço.

## Índice

1. Navbar
2. Hero
3. Prova social
4. Features / benefícios
5. Como funciona
6. Depoimentos
7. FAQ
8. CTA final
9. Footer

**Seções condicionais** (adicione conforme o caso, explicadas depois das 9 principais):
- Demo/screenshot (produto digital)
- Pricing (produto/SaaS)
- Cases/portfolio (agência)
- Sobre/metodologia (consultoria, profissional)
- Formulário de contato (serviço B2B)

---

## 1. Navbar

**Propósito**: fixar marca, permitir navegação entre seções âncora e dar ação imediata pra quem já decidiu.

**Anatomia**:
- Logo à esquerda (imagem ou texto estilizado)
- 2-4 links âncora no centro/direita que pulam pras seções (Features, Como funciona, Depoimentos, FAQ)
- 1 CTA à direita (mesmo CTA do hero — consistência)
- Sticky no topo, com `backdrop-blur` e borda sutil após scroll

**Mobile**: hamburger menu com os links âncora. CTA pode continuar inline como botão compacto ao lado do hamburger se couber.

**Erros comuns a evitar**:
- Mais de 5 links (LP não é site institucional)
- Link "Login" / "Entrar" competindo com o CTA principal (se for SaaS com login, coloca em texto sutil, não botão destacado)
- Menu com "Produto / Empresa / Recursos / Blog / Ajuda / Contato" — isso é site corporativo

---

## 2. Hero

**Propósito**: responder em 5 segundos: O que é? Pra quem? Por que me importar?

### Anatomia
- **Eyebrow** (opcional): tag pequena acima do H1 com o nicho/categoria. Ex: "Para times de vendas B2B" ou "Clínica odontológica em São Paulo"
- **Headline (H1)**: 6-12 palavras. Específica. Diz o *resultado* ou o *diferencial*, não a categoria do produto.
- **Subheadline**: 1-2 frases. Completa com "pra quem é" e "como funciona".
- **CTA primário**: grande, cor de acento, texto acionável em 1ª pessoa
- **CTA secundário** (opcional): link ghost ou outline — "Ver demo de 2min", "Falar com especialista"
- **Micro prova social inline** (opcional): "⭐ 4.9/5 · +800 clientes" ou "Usado por times em [logo1] [logo2]"
- **Visual**: screenshot/mockup/foto autêntica

### Exemplos — Headline

**Produto SaaS**:
- ❌ "A plataforma completa de gestão"
- ❌ "Transforme suas vendas com IA"
- ✅ "Feche 3x mais reuniões sem garimpar leads no LinkedIn"
- ✅ "O CRM que seu vendedor abre todo dia porque quer"

**Produto físico**:
- ❌ "Produtos de qualidade para o seu dia a dia"
- ✅ "A garrafa térmica que mantém gelado por 24h até no carro fechado"
- ✅ "Fones sem fio com 40h de bateria. Sem exagero."

**Serviço — Agência**:
- ❌ "Agência de marketing digital completa"
- ✅ "Tráfego pago pra e-commerce que paga o investimento em 30 dias"
- ✅ "Transformamos 50 lojas de decoração em negócios com 7 dígitos"

**Serviço — Consultoria**:
- ❌ "Consultoria empresarial especializada"
- ✅ "Reduzimos a carga tributária de empresas do Simples em até 34%"

**Serviço — Profissional (clínica, advogado)**:
- ❌ "Cuidando do seu sorriso"
- ✅ "Implante dentário no mesmo dia — você sai da clínica mastigando normal"
- ❌ "Advocacia com experiência"
- ✅ "Recuperação de créditos tributários para transportadoras"

### Layouts

**Split (80% dos casos)**: copy à esquerda (60%), visual à direita (40%). Default seguro pra SaaS, agências, consultorias.

**Centered**: tudo centralizado, visual grande abaixo em full-width. Bom pra produto físico, app com UI bonita, SaaS com dashboard visual.

**Full-bleed**: imagem de fundo ocupando toda a primeira dobra + overlay escuro + copy sobre. Bom pra serviços premium (clínicas, escritórios, restaurantes, arquitetos), produtos aspiracionais, imobiliário.

**Tipográfico puro**: headline gigante (120px+) ocupando a tela, sem visual. Arriscado — só funciona pra agências criativas, estúdios de design, consultorias premium com marca forte.

---

## 3. Prova social

**Propósito**: reduzir risco percebido logo após o hero, antes do visitante começar a duvidar.

**Formatos** (escolha 1-2):

- **Faixa de logos de clientes**: "Empresas que confiam em nós" ou "Já ajudamos times em" + 5-7 logos em grayscale. Requer logos reais. Se o usuário não tem logos grandes, use outro formato — **não invente logos fake**.

- **Números concretos**: 3-4 blocos com número grande + label. Ex: "2.347 consultas realizadas · R$ 12M economizados em impostos · 98% de retenção · NPS 87". Números devem vir do briefing ou ser marcados como placeholder.

- **Rating/badges**: selo do Reclame Aqui, G2, Google Reviews, Capterra, Clutch (agências). Tem crédito alto.

- **Destaque de mídia**: "Como visto em" + logos de veículos (Exame, Época, Valor, TechCrunch). Só se for real.

- **Depoimento único em destaque**: se não tem logos nem números, use 1 depoimento muito forte (foto + nome + cargo + citação específica) nessa posição.

**Diferença produto vs serviço**:
- **Produto**: foca em número de usuários, volume processado, rating de app store
- **Serviço**: foca em número de clientes atendidos, anos de experiência, logos de clientes conhecidos, cases específicos

---

## 4. Features / benefícios

**Propósito**: detalhar o valor concreto. A diferença crítica:

- **Feature** = o que é: "Integração com WhatsApp"
- **Benefício** = o que muda pro cliente: "Responda leads pelo WhatsApp sem sair do dashboard — tempo médio de resposta caiu de 2h pra 4min nos clientes atuais"

Sempre lidere com benefício, detalhe com feature.

### Formatos

**Grid 3 colunas × 2 linhas** (6 cards): padrão mais comum. Cada card tem ícone + título de benefício + 1-2 linhas de apoio.

**Alternating / zig-zag**: blocos alternados com imagem de um lado e texto do outro. Melhor quando cada feature tem visual distintivo (screenshot específico, foto do serviço). Ótimo pra produto SaaS com várias telas.

**Bento grid**: cards em tamanhos diferentes num grid assimétrico. Moderno mas exige curadoria — o card maior destaca a feature principal. Bom pra SaaS que quer parecer "caprichado".

**Lista numerada grande**: features numeradas 01, 02, 03 com tipografia grande. Bom pra serviços/consultorias onde a feature é um "pilar" metodológico.

### Escolhendo ícones

Esta é a parte onde a maioria das LPs vira genérica. **Não use** Zap, Shield, Rocket, Target, Star — é a assinatura de IA preguiçosa.

Em vez disso:
1. Pergunte: qual ícone conecta *semanticamente* com a feature específica?
2. Use ícones concretos da Lucide relacionados ao domínio: `Stethoscope` pra clínica, `Scale` pra advocacia, `Calculator` pra contabilidade, `Truck` pra logística, `Code` pra dev, `MessageSquareText` pra comunicação, `TrendingDown` pra redução de custo
3. Se nada encaixa, use um número grande estilizado (01, 02, 03) — funciona melhor que ícone errado
4. Ou SVG inline custom simples (duas formas geométricas bem pensadas)

### Regra de quantidade
3 a 6 features. Menos que 3 parece raso; mais que 6 é sinal que você não priorizou.

### Diferença produto vs serviço

**Produto**: features costumam ser funcionalidades do software/objeto ("Dashboard em tempo real", "Sincronização com Google Calendar", "Bateria de 40h"). Formato grid ou alternating funcionam bem.

**Serviço**: "features" na verdade são *pilares do serviço* ou *diferenciais metodológicos* ("Análise fiscal dos últimos 5 anos", "Acompanhamento semanal com planilha de indicadores", "Squad dedicado com designer + dev + gestor"). Formato lista numerada ou alternating funcionam melhor.

---

## 5. Como funciona

**Propósito**: reduzir fricção cognitiva mostrando que é simples começar/usar.

**Regra de ouro**: sempre **3 passos**. Dois parece pouco. Quatro parece trabalhoso. Se o processo real tem 7 etapas, agrupa em 3.

**O que NÃO fazer** (genérico):
- Passo 1: Cadastre-se
- Passo 2: Configure
- Passo 3: Aproveite

Isso serve pra qualquer coisa. Serve pra nada.

### Template específico por tipo

**Produto SaaS**:
- Passo 1: [Ação concreta do usuário — "Conecte seu Gmail em 2 cliques"]
- Passo 2: [O que o sistema faz — "Nossa IA lê seus últimos 90 dias e identifica padrões de resposta"]
- Passo 3: [Resultado concreto — "Receba um relatório semanal com os 10 contatos mais quentes"]

**Produto físico (e-commerce)**:
- Passo 1: [Escolha — "Escolha a cor entre 8 opções"]
- Passo 2: [Compra/entrega — "Enviamos em até 2 dias úteis pra todo o Brasil"]
- Passo 3: [Uso/benefício — "Desembrulha, carrega uma vez e usa por 30 dias"]

**Serviço — Agência**:
- Passo 1: Diagnóstico [concreto — "Auditamos suas campanhas dos últimos 6 meses"]
- Passo 2: Estratégia [concreto — "Montamos um plano de mídia com previsão mensal"]
- Passo 3: Execução [concreto — "Rodamos e reportamos semanalmente com reuniões de 30min"]

**Serviço — Consultoria**:
- Passo 1: [Análise — "Análise tributária dos últimos 60 meses"]
- Passo 2: [Recomendação — "Parecer técnico com oportunidades de recuperação"]
- Passo 3: [Execução — "Acompanhamento da recuperação até a entrada em caixa"]

**Serviço — Profissional (clínica, advogado)**:
- Passo 1: [Primeiro contato — "Agende sua avaliação gratuita online"]
- Passo 2: [Diagnóstico/análise — "Primeira consulta + plano personalizado"]
- Passo 3: [Execução do serviço — "Tratamento com acompanhamento semanal"]

### Visual
Use números grandes (01, 02, 03) com tipografia de destaque. Ícones opcionais. Setas conectoras entre passos funcionam em desktop, omita em mobile. Layout horizontal em desktop, vertical empilhado em mobile.

---

## 6. Depoimentos

**Propósito**: prova social qualitativa. Reduz o risco emocional da decisão.

### Formatos

**Grid 3 cards**: padrão. Foto + nome + cargo/empresa + citação curta (40-80 palavras). Ótimo pra primeira leitura.

**Destaque grande**: 1 depoimento em tamanho XL com foto grande, citação longa em tipo serifado, nome + cargo grande embaixo. Bom pra reforçar um case especialmente forte. Pode vir acompanhado de 2-3 cards menores embaixo.

**Mural/masonry**: vários depoimentos em tamanhos diferentes, vibe de "feed de Twitter". Bom quando há muitos depoimentos reais e o produto é voltado pra comunidade.

### Regras de copy (CRÍTICAS)

O copy dos depoimentos é onde LPs IA viram fake na hora. Evite:

- ❌ "Produto excelente, recomendo muito!"
- ❌ "Mudou completamente minha empresa"
- ❌ "Atendimento nota 10, super indico"

Depoimentos convincentes têm:
- **Contexto específico**: qual era a situação antes
- **Resultado mensurável**: número, prazo, comparação
- **Voz humana**: como a pessoa realmente falaria, não marketing

Exemplos bons:

- ✅ "A gente fechava 4 contratos por mês e travou. Depois de 60 dias com eles, estávamos em 11. O que mudou foi o funil de qualificação — agora só entra reunião que tem chance real." — *Mariana Costa, Head de Vendas, TechLogix*

- ✅ "Já tinha tentado 3 dentistas antes. Esse foi o primeiro que explicou por que eu precisava do enxerto antes do implante. Zero surpresa na conta, zero dor." — *Paulo Medeiros, paciente há 2 anos*

- ✅ "Cortou 40% do tempo que meu time gastava montando relatório semanal. Só isso já pagou a ferramenta." — *André Leal, Diretor de Operações, Varejo Plus*

### Regras práticas
- **Mínimo 3 depoimentos** — menos parece pouco
- Nome completo + cargo + empresa (ou cidade, se for cliente final)
- Foto (ou placeholder claramente marcado)
- **Sempre marque como placeholder** se os depoimentos forem inventados e avise o usuário na entrega
- Rotação de formato: se usa grid de 3, faça um ter citação mais longa

---

## 7. FAQ

**Propósito**: matar objeções finais antes do CTA. Cada pergunta é uma **objeção real antecipada**, não um detalhe técnico.

### Perguntas por tipo

**Produto SaaS**:
- "Funciona pra [nicho específico do visitante]?"
- "Quanto tempo até ver resultado?"
- "Preciso migrar meus dados atuais?"
- "E se meu time não adotar?"
- "Integra com [ferramenta X]?"
- "Posso cancelar quando quiser?"
- "Como funciona o suporte?"

**Produto físico**:
- "Qual o prazo de entrega pra [região]?"
- "Posso trocar se não servir?"
- "Tem garantia?"
- "Como funciona a devolução?"
- "É o mesmo do [produto similar conhecido]?"
- "Tem nota fiscal?"

**Serviço — Agência**:
- "Quanto tempo até ver resultado?"
- "Vocês trabalham com qual tamanho de empresa?"
- "E se não der resultado?"
- "Preciso de contrato de quanto tempo?"
- "Quem da equipe vai cuidar da minha conta?"
- "Como são as reuniões?"

**Serviço — Consultoria**:
- "Quanto custa?" (ou "como é a precificação")
- "Quanto tempo dura o projeto?"
- "Vocês atendem empresas do meu segmento?"
- "Como é o contrato?"
- "Vocês trabalham remoto ou presencial?"
- "Qual o perfil de cliente de vocês?"

**Serviço — Profissional (clínica/advogado)**:
- "Atendem convênio?"
- "Como agendar?"
- "Qual o valor da primeira consulta?"
- "Onde fica?"
- "Tem estacionamento?"
- "Atendem em qual horário?"

### Formato
Accordion usando `<details>` HTML nativo (acessível, zero JS) ou implementação custom. 5-8 perguntas. A primeira deve ser a objeção #1 que você *sabe* que o visitante tem.

---

## 8. CTA final

**Propósito**: última chance de conversão pra quem rolou até o fim. Esse leitor está quente — não desperdice.

### Anatomia

- **Bloco com cor de fundo contrastante** (preto, cor de marca forte, ou gradiente sutil) pra separar visualmente do resto
- **Headline curta e direta**: pode ser uma pergunta ("Pronto pra começar?") ou uma afirmação ("Hora de parar de [dor específica]")
- **Uma linha de reforço**: repete o principal benefício ou o diferencial
- **CTA grande**: mesmo texto do hero (consistência reforça)
- **Opcional**: reforço de prova social ou garantia abaixo ("Sem cartão de crédito", "Primeira consulta gratuita", "Cancele quando quiser")

### Exemplo (serviço de consultoria tributária)
> **Descubra quanto a sua empresa pode recuperar.**
> A análise inicial é gratuita e leva 48h.
> [Quero minha análise gratuita]
> Sem compromisso. Assinamos NDA antes de qualquer acesso.

### Exemplo (SaaS)
> **Pare de perder lead no formulário.**
> 14 dias grátis, sem cartão. Leva 4 minutos pra ativar.
> [Começar meu teste]
> ⭐ 4.8/5 em 340 avaliações no G2

---

## 9. Footer

**LP tem footer enxuto**. Não é site institucional.

**Conteúdo mínimo**:
- Logo + tagline curta (1 linha)
- 2-3 links legais (Termos, Privacidade) se aplicável
- Contato (email + telefone/WhatsApp se for serviço)
- Copyright com ano atual
- Ícones de rede social em tamanho pequeno (opcional)

**Não coloque no footer de LP**:
- Newsletter signup (compete com CTA principal)
- Menu completo de navegação
- Links pra "Blog / Ajuda / Carreiras / Imprensa"
- Links pra "Sobre nós / Nossos valores / Missão"

Footer de LP cabe em 1-2 linhas de altura. Mais que isso é desvio de atenção.

---

# Seções condicionais

## Demo / Screenshot (produto digital)

Pra SaaS e apps, é **obrigatório** mostrar o produto em algum lugar. Opções:

- Screenshot dentro de mockup de browser (Chrome frame) ou device (iPhone/MacBook)
- Vídeo/GIF em loop de 15-30s mostrando fluxo principal (sem som)
- Carrossel de 3-5 screenshots de telas principais
- Embed de vídeo (Loom, Wistia, YouTube) com thumbnail custom

Posição: logo após o hero, após prova social, ou intercalado com as features.

**Nunca use**: mockup 3D genérico flutuante. Prefira screenshot real (mesmo que de uma tela mockada) dentro de frame realista.

## Pricing (produto/SaaS)

Tabela comparativa com 2-4 planos (3 é o ideal).

- Destaque o plano do meio como "Mais popular" com borda/cor
- Toggle mensal/anual com desconto
- CTA em cada plano (texto pode variar: "Começar grátis" / "Agendar demo" / "Falar com vendas")
- Lista de features com check/x. Use "Tudo do plano X +" pra evitar repetição
- Para produto físico: card único destacado com preço, parcelamento, forma de pagamento

Posição: antes do CTA final, depois do FAQ ou depois dos depoimentos.

## Cases / portfolio (agência)

Grid de cards clicáveis mostrando trabalhos anteriores:
- Imagem do resultado/cliente
- Nome do cliente + setor
- **Métrica-chave** ("+340% em leads em 6 meses", "R$ 2.3M em receita de tráfego")
- Link "Ver case completo" (opcional)

Para agências, muitas vezes **substitui os depoimentos** ou vem antes deles.

## Sobre / metodologia (consultoria, profissional)

Para consultorias e profissionais liberais, a pessoa/equipe **é parte do produto**. Bloco com:
- Foto profissional (grande)
- Nome + cargo + credenciais verificáveis (CRM, OAB, certificações, anos de atuação)
- Bio curta em 1ª pessoa contando uma história específica (não LinkedIn padrão)
- Opcionalmente: método/framework proprietário explicado em 2-3 linhas

Posição: geralmente antes de "Como funciona" ou entre "Como funciona" e depoimentos.

## Formulário de contato (serviço B2B)

Para serviços de alto ticket (consultorias, agências, B2B), o CTA final pode ser um formulário embutido em vez de só botão:

- 3-5 campos máximo (nome, email, empresa, telefone, "como podemos ajudar")
- Headline do formulário vende o retorno: "Receba um diagnóstico em até 48h"
- Botão com texto de valor: "Quero meu diagnóstico" (não "Enviar")
- Linha de confidencialidade abaixo ("Seus dados não são compartilhados")

Se o usuário prefere só botão → WhatsApp/Calendly/etc, respeite e use botão. Pergunte no briefing se não estiver claro.
