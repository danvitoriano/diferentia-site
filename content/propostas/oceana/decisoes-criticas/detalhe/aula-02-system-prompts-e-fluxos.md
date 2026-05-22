---
title: Aula 02 System Prompts E Fluxos
---

# Aula 02: System Prompts e Fluxos Multi-etapas
**Claude para Decisões Críticas | Duração: 2h | Formato: Online síncrono (Teams ou Meet)**

---

## Visão geral dos blocos

| Bloco | Tema | Tempo |
|---|---|---|
| 1 | Abertura com recap e demo de system prompt ao vivo | 0:00 a 0:15 |
| 2 | System prompts: instruções robustas e reutilizáveis | 0:15 a 0:55 |
| 3 | Intervalo | 0:55 a 1:05 |
| 4 | Fluxos multi-etapas: do release à nota interna | 1:05 a 1:45 |
| 5 | Exercício e encerramento | 1:45 a 2:00 |

---

## BLOCO 1: Abertura com recap e demo (0:00 a 0:15)

### Roteiro

**[0:00 a 0:05] Recap da Aula 01**

> "Na Aula 01 vimos chain-of-thought para forçar o raciocínio antes da conclusão, e few-shot para treinar o Claude com os padrões internos da Oceana. Alguém usou alguma das técnicas e quer compartilhar o que observou?"

Aguardar 2 ou 3 respostas no chat. Comentar brevemente.

**[0:05 a 0:12] Demo: system prompt em ação**

Mostrar ao vivo a diferença entre uma conversa sem system prompt e a mesma conversa com o system prompt do analista de utilities configurado no Projeto.

> "Mesmo pergunta. Mesmo Claude. A diferença é que no segundo caso o Claude já sabe quem ele é, o que pode e o que não pode fazer, e como deve estruturar a resposta. Isso é um system prompt."

**[0:12 a 0:15] Visão geral da aula**

> "Em 2 horas: system prompts para calibrar o Claude permanentemente por contexto, e fluxos multi-etapas para encadear prompts em processos complexos. Na Aula 03 fechamos com auditoria de outputs e o playbook da Oceana."

---

## BLOCO 2: System prompts (0:15 a 0:55)

### Objetivo
O time deve sair sabendo criar system prompts robustos e reutilizáveis para os Projetos da Oceana.

### Roteiro

**[0:15 a 0:27] O que é um system prompt e onde ele vive**

> "System prompt é uma instrução fixa que define como o Claude se comporta em uma conversa inteira. Enquanto o prompt normal é o que você digita a cada mensagem, o system prompt é o contexto permanente: quem o Claude é, o que ele pode e não pode fazer, qual o estilo de resposta esperado."

> "No claude.ai, o system prompt vive nas Instruções do Projeto. Todo chat dentro daquele Projeto herda as instruções. Qualquer pessoa da equipe que abrir o Projeto vai ter o mesmo Claude, calibrado do mesmo jeito."

Mostrar ao vivo onde ficam as instruções de Projeto no claude.ai.

**[0:27 a 0:45] Três demos de system prompts da Oceana**

Demo 1: analista de utilities e energia (ver exemplos-oceana.md)

Demo 2: revisor de documentos de compliance (ver exemplos-oceana.md)

Demo 3: estruturador de due diligence (ver exemplos-oceana.md)

Para cada um: colar o system prompt no Projeto ao vivo, fazer uma pergunta de teste e mostrar como o Claude se comporta diferente com e sem o system prompt.

**[0:45 a 0:55] O que faz um bom system prompt**

> "Um system prompt eficaz tem quatro elementos: papel claro, regras de comportamento, formato de entrega e público."

> "O erro mais comum é escrever descritivo em vez de instrucional. 'Você é um analista experiente e criterioso' não diz nada. 'Nunca afirme um número sem indicar a fonte' é uma instrução que o Claude pode seguir."

> "Regra de bolso: se você vai usar a mesma instrução em mais de três conversas diferentes, ela pertence ao system prompt."

**Dica para o nível básico:**
> "Comece com um system prompt de três linhas: papel, uma regra obrigatória, formato de entrega. Depois vai refinando."

**Desafio para o nível avançado:**
> "Crie um system prompt que inclua few-shot embutido: além das instruções, insira dois exemplos de resposta no próprio system prompt como referência de formato."

---

## BLOCO 3: Intervalo (0:55 a 1:05)

> "10 minutos. Voltamos com fluxos multi-etapas."

---

## BLOCO 4: Fluxos multi-etapas (1:05 a 1:45)

### Objetivo
O time deve sair sabendo montar um fluxo encadeado de dois ou três prompts para processos repetitivos.

### Roteiro

**[1:05 a 1:15] Por que fluxos em vez de um prompt único**

> "A tentação natural é fazer tudo em um prompt só. Isso parece mais eficiente, mas cria dois problemas: o Claude fica sobrecarregado de instruções e tende a simplificar em alguma delas, e você não consegue auditar onde algo deu errado se o resultado for ruim."

> "Fluxos multi-etapas resolvem isso. Cada etapa tem uma tarefa específica. O output de cada etapa é o input da próxima. Se algo sair errado, você sabe exatamente em qual etapa aconteceu e pode corrigir só aquela parte."

**[1:15 a 1:35] Demo completo: do release à nota interna**

Percorrer ao vivo os três passos do fluxo (ver exemplos-oceana.md, seção "Fluxo multi-etapas"):

- Passo 1: extração estruturada dos dados do release
- Passo 2: síntese analítica a partir dos dados extraídos
- Passo 3: auditoria do output pela própria IA

Depois de cada passo, mostrar o resultado e comentar o que mudaria tentando fazer tudo de uma vez.

**[1:35 a 1:45] Como mapear um processo repetitivo em fluxo**

> "Para transformar qualquer processo em fluxo, três perguntas: (1) quais são as etapas distintas do processo? (2) qual é o output de cada etapa que alimenta a próxima? (3) em qual etapa o erro acontece com mais frequência?"

> "A resposta à terceira pergunta indica onde colocar uma etapa de auditoria no fluxo."

Pedir para o time mapear um processo da área deles no chat: "Uma frase descrevendo o processo e as etapas principais." Comentar dois ou três ao vivo.

---

## BLOCO 5: Exercício e encerramento (1:45 a 2:00)

### Exercício ao vivo (10 minutos)

> "Cada um escolhe uma das duas tarefas: (a) escrever um system prompt para o contexto de trabalho que mais se beneficiaria de um Claude calibrado, usando a estrutura papel + regras + formato + público. Ou (b) mapear um processo repetitivo em fluxo de dois ou três passos. 8 minutos. Postar no chat."

Comentar dois ou três ao vivo.

### Missão opcional entre aulas

> "Antes da Aula 03: quem escrever o system prompt, cole nas Instruções de um Projeto no claude.ai e use por um ou dois dias. Traga um exemplo de onde funcionou bem e um onde não funcionou. Esses casos vão direto para o playbook."

### Encerramento

> "Na Aula 03 fechamos o curso: framework de auditoria para outputs com números críticos, casos práticos por área da Oceana e entrega coletiva do playbook de prompts avançados. Até lá."

---

## O que NÃO entra nesta aula

| Tema | Onde buscar |
|---|---|
| Chain-of-thought e few-shot | Aula 01 deste curso |
| Auditoria de outputs e playbook | Aula 03 deste curso |
| Skills e automações | [Claude Essentials — Módulo 4](https://github.com/diferentia/curso-claude-introdutorio/blob/main/modulo-04-skills-automacoes.md) |
