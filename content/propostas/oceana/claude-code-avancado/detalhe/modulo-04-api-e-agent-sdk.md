---
title: Modulo 04 Api E Agent Sdk
---

# Módulo 4 (opcional): API, Agent SDK e Automação em Escala

**Curso:** Claude Code Avançado  
**Duração:** 1h30  
**Formato:** Online síncrono — workshop conceitual com demo curta  
**Público:** Participantes do Módulo 3 que querem visão de produção e integração com times de engenharia

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Para quem é este módulo | 5 min |
| Bloco 1 | Claude Code vs API Anthropic | 20 min |
| Bloco 2 | Visão do Claude Agent SDK | 25 min |
| Bloco 3 | Quando escalar com engenharia | 20 min |
| Workshop | Esboçar um fluxo (sem produção) | 15 min |
| Encerramento | Fechamento da trilha avançada | 5 min |

---

## Abertura (5 min)

### Roteiro

"Este módulo é **opcional**. Não é necessário para usar Claude Code no dia a dia como vibe coder ou analista com Git e MCP.

É para quem precisa conversar com **desenvolvimento**, **dados** ou **automação em pipeline** — e para entender o que acontece 'por baixo' quando o terminal não basta."

---

## Bloco 1: Claude Code vs API (20 min)

### Roteiro

"| | Claude Code | API Anthropic |
|---|---|---|
| Quem usa | Você, no terminal, interativo | Script, backend, CI |
| Cobrança | Plano Pro/Max | Uso por token / contrato |
| Ferramentas | MCP, edição de arquivos, bash | Você define tools no código |
| Melhor para | Construir e iterar com IA ao lado | Produto em escala, milhares de chamadas |

Fluxo típico na Oceana:

1. Protótipo no Claude Code (básico + avançado)
2. Validação com negócio
3. Engenharia reimplementa ou orquestra via API com testes, logs e compliance

Mostrem um trecho da documentação https://docs.anthropic.com — endpoint Messages, conceito de system prompt — **sem** expor API key na tela."

---

## Bloco 2: Visão do Agent SDK (25 min)

### Roteiro

"O **Claude Agent SDK** (`@anthropic-ai/claude-agent-sdk` ou pacote atual) permite rodar agentes programáticos: mesma família de capacidades do Claude Code, embutida em serviços.

Casos financeiros (conceituais):

- Pipeline noturno: processar releases em pasta e gerar Excel
- Bot interno no Slack que chama agente com MCP aprovado
- CI que comenta PR com revisão automatizada

Não implementamos produção hoje. Mostramos **diagrama mental**:

```
Trigger (cron / fila / webhook)
    → SDK Agent + tools (MCP, bash, read)
    → Output (arquivo, DB, mensagem)
    → Humano valida amostra
```

Link para documentação SDK e skill Cursor/sdk se o time for TypeScript."

---

## Bloco 3: Quando escalar com engenharia (20 min)

### Roteiro

"Chamem engenharia quando:

- SLA, alta disponibilidade, rollback formal
- Dados regulados (clientes, posição, material insider)
- Integração com core, ERP, autenticação corporativa
- Custo de API precisa de orçamento e rate limit

Vocês entregam valor antes disso: **protótipo, prompt testado, repositório Git, slash commands documentados, lista de integrações MCP desejadas**."

---

## Workshop (15 min)

### Roteiro

"Em duplas, preencham (bloco de notas, 5 min):

1. **Trigger:** o que inicia o fluxo? (ex.: 'toda sexta, pasta releases/')
2. **Entrada:** arquivos ou APIs
3. **Saída:** planilha, e-mail, mensagem Slack
4. **Validação humana:** qual cheque obrigatório?

Compartilhem uma dupla no chat. Facilitador comenta viabilidade: Claude Code only vs API."

---

## Encerramento (5 min)

### Roteiro

"Trilha Avançada completa:

- M1 Git — histórico e GitHub
- M2 Slash, CLAUDE.md, hooks
- M3 MCP no terminal
- M4 API/SDK — ponte para produção

Continuem evoluindo o projeto do [Vibe Coders](https://github.com/diferentia/curso-claude-code) com o que aprenderam. A trilha Differentia segue com adoção na empresa.

Obrigado."

---

## O que NÃO entra neste módulo

- Implementação completa de agente em produção
- Fine-tuning de modelos
- Detalhe de billing enterprise (canal comercial Anthropic)

---

## Material de apoio

- API Anthropic: https://docs.anthropic.com/en/api/getting-started
- Claude Agent SDK: https://docs.anthropic.com/en/docs/claude-code/sdk
- Repositórios da trilha: [introdutório](https://github.com/diferentia/curso-claude-introdutorio) · [vibe coders](https://github.com/diferentia/curso-claude-code) · [avançado](https://github.com/diferentia/curso-claude-code-avancado)
