#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

// ── Config ────────────────────────────────────────────────────────────────────
const COMPANY_ID  = '3597';
const WORKSPACE_ID = 38463;
const WORKSPACE = {
  id: 38463,
  name: 'V4 Colli',
  access: 0,
  active: 1,
  avatarId: null,
  defaultLanguage: 'pt-BR',
};
const BASE_URL = `https://api.ekyte.com/api/companies/${COMPANY_ID}/workspaces/${WORKSPACE_ID}`;
const TOKEN = process.env.EKYTE_TOKEN;

if (!TOKEN) {
  console.error('EKYTE_TOKEN não definido. Configure no settings do Claude Code.');
  process.exit(1);
}

const HEADERS = {
  Accept: '*/*',
  Authorization: TOKEN,
  'Content-Type': 'application/json',
  Origin: 'https://app.ekyte.com',
  Referer: 'https://app.ekyte.com/',
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function hoje() {
  return new Date().toISOString().split('T')[0];
}

function calcularEsforco(horaInicio, horaFim) {
  const [hI, mI] = horaInicio.split(':').map(Number);
  const [hF, mF] = horaFim.split(':').map(Number);
  const minutos = (hF * 60 + mF) - (hI * 60 + mI);
  if (minutos <= 0) throw new Error('hora_fim deve ser maior que hora_inicio');
  return minutos;
}

function extrairTaskId(taskIdOuUrl) {
  // Aceita ID numérico ou URL: https://app.ekyte.com/#/tasks/list/8913032/edit
  const match = String(taskIdOuUrl).match(/(\d+)/g);
  if (!match) throw new Error('task_id inválido');
  return Number(match[match.length - 1]);
}

// ── API Ekyte ─────────────────────────────────────────────────────────────────
async function buscarTask(taskId) {
  const res = await fetch(`${BASE_URL}/ctc-tasks/${taskId}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`Task ${taskId} não encontrada (status ${res.status})`);
  return res.json();
}

async function criarApontamento({ taskId, data, horaInicio, horaFim, comentario }) {
  const task = await buscarTask(taskId);
  const effort = calcularEsforco(horaInicio, horaFim);

  const payload = {
    typeTimeTracking: 2,
    startDate: `${data}T${horaInicio}:00`,
    startDateTime: horaInicio,
    endDate: `${data}T${horaFim}:00`,
    endDateTime: horaFim,
    effort,
    comment: comentario || '',
    workspaceId: WORKSPACE_ID,
    workspace: WORKSPACE,
    type: 1,
    ctcTaskId: taskId,
    ctcTask: task,
    ctcTaskTypeId: task.ctcTaskTypeId,
    ctcTaskType: task.ctcTaskType,
    phaseId: task.phaseId,
    phase: task.phase,
    ticket: {},
    ticketPhase: {},
    planning: {},
    plan: {},
    manualTime: horaInicio,
  };

  const res = await fetch(`${BASE_URL}/time-trackings`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const erro = await res.text();
    throw new Error(`Falha ao registrar apontamento: ${erro}`);
  }

  const horas = Math.floor(effort / 60);
  const minutos = effort % 60;
  const duracao = horas > 0 ? `${horas}h${minutos > 0 ? minutos + 'min' : ''}` : `${minutos}min`;

  return {
    taskId,
    titulo: task.title,
    data,
    inicio: horaInicio,
    fim: horaFim,
    duracao,
    comentario: comentario || '',
  };
}

async function consultarApontamentos({ data }) {
  const dataConsulta = data || hoje();
  const res = await fetch(
    `${BASE_URL}/time-trackings?startDate=${dataConsulta}&endDate=${dataConsulta}`,
    { headers: HEADERS }
  );
  if (!res.ok) throw new Error(`Erro ao consultar apontamentos (status ${res.status})`);
  return res.json();
}

// ── MCP Server ────────────────────────────────────────────────────────────────
const server = new Server(
  { name: 'ekyte-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'registrar_hora',
      description: 'Registra apontamento de horas em uma task do Ekyte. Aceita ID da task ou URL completa.',
      inputSchema: {
        type: 'object',
        properties: {
          task_id: {
            type: 'string',
            description: 'ID da task (ex: 8913032) ou URL completa (ex: https://app.ekyte.com/#/tasks/list/8913032/edit)',
          },
          hora_inicio: {
            type: 'string',
            description: 'Hora de início no formato HH:MM (ex: 13:00)',
          },
          hora_fim: {
            type: 'string',
            description: 'Hora de fim no formato HH:MM (ex: 14:00)',
          },
          data: {
            type: 'string',
            description: 'Data no formato YYYY-MM-DD. Se omitido, usa hoje.',
          },
          comentario: {
            type: 'string',
            description: 'Comentário sobre o que foi feito (opcional)',
          },
        },
        required: ['task_id', 'hora_inicio', 'hora_fim'],
      },
    },
    {
      name: 'consultar_apontamentos',
      description: 'Consulta os apontamentos de horas de um dia específico',
      inputSchema: {
        type: 'object',
        properties: {
          data: {
            type: 'string',
            description: 'Data no formato YYYY-MM-DD. Se omitido, usa hoje.',
          },
        },
        required: [],
      },
    },
    {
      name: 'buscar_task',
      description: 'Busca informações de uma task do Ekyte pelo ID',
      inputSchema: {
        type: 'object',
        properties: {
          task_id: {
            type: 'string',
            description: 'ID da task ou URL completa',
          },
        },
        required: ['task_id'],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === 'registrar_hora') {
      const taskId = extrairTaskId(args.task_id);
      const data = args.data || hoje();
      const resultado = await criarApontamento({
        taskId,
        data,
        horaInicio: args.hora_inicio,
        horaFim: args.hora_fim,
        comentario: args.comentario,
      });
      return {
        content: [{
          type: 'text',
          text: [
            `✅ Apontamento registrado!`,
            `Task: #${resultado.taskId} — ${resultado.titulo}`,
            `Data: ${resultado.data}`,
            `Horário: ${resultado.inicio} → ${resultado.fim} (${resultado.duracao})`,
            resultado.comentario ? `Comentário: ${resultado.comentario}` : '',
          ].filter(Boolean).join('\n'),
        }],
      };
    }

    if (name === 'consultar_apontamentos') {
      const lista = await consultarApontamentos({ data: args.data });
      const itens = Array.isArray(lista) ? lista : lista?.items ?? [];
      if (itens.length === 0) {
        return { content: [{ type: 'text', text: `Nenhum apontamento encontrado para ${args.data || hoje()}.` }] };
      }
      const texto = itens.map(a =>
        `• ${a.startDateTime} → ${a.endDateTime} | Task #${a.ctcTaskId} | ${a.effort}min`
      ).join('\n');
      return { content: [{ type: 'text', text: `Apontamentos do dia ${args.data || hoje()}:\n${texto}` }] };
    }

    if (name === 'buscar_task') {
      const taskId = extrairTaskId(args.task_id);
      const task = await buscarTask(taskId);
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            id: task.id,
            titulo: task.title,
            fase: task.phase?.name,
            executor: task.executor?.userName,
            tempoEstimado: task.estimatedTime,
            tempoRealizado: task.actualTime,
          }, null, 2),
        }],
      };
    }

    throw new McpError(ErrorCode.MethodNotFound, `Tool '${name}' não encontrada`);
  } catch (error) {
    return {
      content: [{ type: 'text', text: `❌ Erro: ${error.message}` }],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
