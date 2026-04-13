---
name: ekyte
description: Registra apontamentos de horas no Ekyte via MCP local. Use quando André precisar apontar horas em uma task. Aceita ID da task ou URL completa. Acione sempre que mencionar "apontar horas", "timesheet", "registrar tempo", "lançar horas" ou enviar uma URL do Ekyte com horários.
---

# Skill: Apontamento de Horas no Ekyte

Registra horas diretamente no Ekyte usando o MCP local. Não precisa abrir o browser.

`$ARGUMENTS`

## Como usar

```
/ekyte apontar 1h das 13h às 14h na task 8913032
/ekyte apontar das 09:00 às 11:30 na https://app.ekyte.com/#/tasks/list/8913032/edit
/ekyte consultar apontamentos de hoje
```

---

## Fluxo de execução

### 1. Extrair os dados da solicitação

Do texto do André, extraia:
- **task_id** — ID numérico ou URL completa da task
- **hora_inicio** — formato HH:MM
- **hora_fim** — formato HH:MM
- **data** — se não informada, usa hoje
- **comentario** — se mencionado

Se faltar hora_inicio ou hora_fim, pergunte antes de executar.

### 2. Registrar via MCP

Use a tool `registrar_hora` do servidor `ekyte`:

```
task_id:     [ID ou URL da task]
hora_inicio: [HH:MM]
hora_fim:    [HH:MM]
data:        [YYYY-MM-DD] (opcional, padrão: hoje)
comentario:  [texto] (opcional)
```

### 3. Confirmar o registro

Após o MCP responder com sucesso, confirme ao André:

```
✅ Apontamento registrado no Ekyte!
Task: #[id] — [título]
Data: [data]
Horário: [inicio] → [fim] ([duração])
```

---

## Tools disponíveis no MCP

| Tool | O que faz |
|---|---|
| `registrar_hora` | Cria um apontamento na task |
| `consultar_apontamentos` | Lista apontamentos de um dia |
| `buscar_task` | Busca detalhes de uma task pelo ID |

---

## Casos de uso

**Apontamento direto:**
> "Aponta 1h das 13h às 14h na task 8913032"
→ `registrar_hora(task_id=8913032, hora_inicio=13:00, hora_fim=14:00)`

**Com URL:**
> "Aponta das 09:00 às 11:30 nessa task https://app.ekyte.com/#/tasks/list/8913032/edit"
→ extrai ID 8913032, chama `registrar_hora`

**Com comentário:**
> "Aponta 2h das 14h às 16h na task 8913032 — criação de criativos para campanha"
→ `registrar_hora(..., comentario="criação de criativos para campanha")`

**Consulta:**
> "Quantas horas apontei hoje?"
→ `consultar_apontamentos(data=hoje)`

---

## Atenção: token de autenticação

O token JWT configurado expira em aproximadamente **180 dias** (outubro 2026).
Quando expirar, o André precisa:
1. Abrir o Ekyte no Chrome
2. F12 → Network → fazer um apontamento manual
3. Copiar o novo cURL do `time-trackings`
4. Atualizar o `EKYTE_TOKEN` no `~/.claude.json` em `projects > mcpServers > ekyte > env`
