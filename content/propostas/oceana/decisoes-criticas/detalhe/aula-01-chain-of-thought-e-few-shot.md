---
title: Aula 01 Chain Of Thought E Few Shot
---

# Aula 01: Chain-of-Thought e Few-Shot Prompting
**Claude para Decisões Críticas | Duração: 2h | Formato: Online síncrono (Teams ou Meet)**

---

## Visão geral dos blocos

| Bloco | Tema | Tempo |
|---|---|---|
| 1 | Abertura com demo de impacto: chain-of-thought ao vivo | 0:00 a 0:15 |
| 2 | Chain-of-thought: forçar o raciocínio passo a passo | 0:15 a 0:55 |
| 3 | Intervalo | 0:55 a 1:05 |
| 4 | Few-shot prompting: treinar com exemplos internos | 1:05 a 1:45 |
| 5 | Exercício e encerramento | 1:45 a 2:00 |

---

## BLOCO 1: Abertura com demo de impacto (0:00 a 0:15)

### Objetivo
Mostrar a diferença concreta entre um prompt comum e um prompt com chain-of-thought antes de qualquer explicação.

### Roteiro

**[0:00 a 0:05] Boas-vindas e posicionamento do curso**

> "Bem-vindos ao Claude para Decisões Críticas. Vocês completaram o Claude Essentials: sabem usar o Claude, sabem extrair análise, sabem automatizar. O que vamos fazer neste curso é diferente: vamos aprender a fazer o Claude pensar melhor. A diferença entre um prompt comum e um prompt de decisão crítica está na qualidade do raciocínio que você exige do modelo. Vou mostrar isso agora antes de qualquer explicação."

**[0:05 a 0:12] Demo: chain-of-thought vs. prompt direto**

Prompt direto (mostrar primeiro):

> `"Analise o risco de crédito deste emissor. [colar dados]"`

Mostrar a resposta. Comentar brevemente que é razoável mas rasa.

Prompt com chain-of-thought:

> `"Você é um analista de crédito sênior da Oceana. Antes de dar sua conclusão, pense passo a passo: (1) qual é a situação de alavancagem atual e a tendência? (2) qual é a cobertura de juros? (3) há eventos de refinanciamento nos próximos 12 meses? (4) quais os principais riscos operacionais do setor? (5) o rating atual reflete esses fatores? Só após percorrer esses cinco pontos, dê sua avaliação final. [colar os mesmos dados]"`

Deixar a resposta aparecer em silêncio.

> "Mesmos dados. Prompt diferente. A diferença é que no segundo prompt eu não pedi uma resposta: pedi um raciocínio. O Claude percorre os pontos antes de concluir, e isso muda o que ele encontra no caminho."

**[0:12 a 0:15] Visão geral da aula**

> "Em 2 horas: chain-of-thought para forçar o raciocínio auditável, e few-shot para treinar o Claude com os padrões internos da Oceana. Na Aula 02 vamos para system prompts e fluxos. Na Aula 03, auditoria de outputs e entrega do playbook."

---

## BLOCO 2: Chain-of-thought (0:15 a 0:55)

### Objetivo
O time deve sair sabendo construir um prompt que force o Claude a exibir o raciocínio antes da conclusão.

### Roteiro

**[0:15 a 0:25] O que é e por que funciona**

> "Chain-of-thought é uma instrução que força o Claude a mostrar o caminho antes de chegar na resposta. Em vez de pedir 'me dê a conclusão', você pede 'me mostre como chegou à conclusão'. Dois efeitos: o modelo comete menos erros porque precisa justificar cada passo, e você consegue auditar o raciocínio antes de aceitar a conclusão."

> "A estrutura básica: 'antes de responder, percorra estes passos: [lista numerada]. Só depois dê sua conclusão.' Não precisa de sintaxe especial. Precisa de passos claros e da instrução de percorrê-los antes de concluir."

**[0:25 a 0:45] Três demos com casos da Oceana**

Demo 1: análise de risco de crédito (ver exemplos-oceana.md)

Demo 2: checklist de due diligence

> `"Você é um analista de due diligence da Oceana. Antes de dar seu parecer, percorra em ordem: (1) as informações financeiras estão completas e reconciliadas? (2) há passivos contingentes identificados? (3) a estrutura societária está clara e sem inconsistências? (4) há cláusulas que limitam ou condicionam a operação? Após os quatro pontos, dê seu parecer: prosseguir, prosseguir com condições ou não prosseguir. [colar documento]"`

Demo 3: análise de ata de reunião de diretoria

> `"Leia esta ata. Antes de resumir, pense em: (1) quais decisões foram tomadas formalmente? (2) quais ficaram pendentes? (3) houve mudança de posição relevante vs. reuniões anteriores? (4) o tom indica urgência ou normalidade? Só depois entregue o resumo estruturado. [colar ata]"`

**[0:45 a 0:55] Quando usar e quando não usar**

> "Chain-of-thought é para análise com consequência. Quando o erro do Claude pode levar a uma decisão errada, você quer ver o raciocínio."

| Use chain-of-thought | Não precisa |
|---|---|
| Análise de crédito ou risco | Reformatação de texto |
| Avaliação de tese | Extração de dados estruturados |
| Due diligence | Resumo de agenda |
| Decisão com múltiplos critérios | Tradução ou revisão de estilo |

**Dica para o nível básico:**
> "Comece com dois passos, não cinco. 'Antes de responder, identifique os riscos. Depois dê sua conclusão.' Isso já muda o resultado."

**Desafio para o nível avançado:**
> "Encadeie dois chain-of-thoughts: primeiro peça o raciocínio, depois peça ao Claude para criticar o próprio raciocínio antes de confirmar a conclusão."

---

## BLOCO 3: Intervalo (0:55 a 1:05)

> "10 minutos. Voltamos com few-shot prompting."

---

## BLOCO 4: Few-shot prompting (1:05 a 1:45)

### Objetivo
O time deve sair sabendo treinar o Claude com exemplos internos da Oceana para que os outputs sigam o padrão da empresa.

### Roteiro

**[1:05 a 1:15] O que é e por que importa**

> "Few-shot prompting é mostrar exemplos antes de pedir a tarefa. Em vez de descrever o formato que você quer, você mostra o formato. O Claude aprende o padrão com os exemplos e replica."

> "Para a Oceana, isso é especialmente útil porque vocês têm padrões internos que nenhum prompt genérico vai acertar: o formato de nota de resultado, o estilo de comunicação com investidores, o nível de detalhe em due diligence. Se você tem dois ou três exemplos bons, pode ensinar esse padrão ao Claude em segundos."

**[1:15 a 1:35] Dois demos com casos da Oceana**

Demo 1: nota interna de resultado no padrão Oceana (ver exemplos-oceana.md)

Demo 2: classificação de e-mails de investidores (ver exemplos-oceana.md)

**[1:35 a 1:45] Quantos exemplos usar e como escolher**

> "Dois ou três exemplos já fazem diferença. Mais de cinco raramente muda o resultado."

> "Escolha exemplos que representem casos típicos. Se você mostrar só casos simples, o Claude vai errar nos difíceis. Se mostrar casos atípicos, vai supercomplicar os simples."

> "Os exemplos internos da Oceana são o ativo mais valioso que podem trazer para o Claude. Uma nota bem escrita pelo analista sênior vale mais do que qualquer prompt descritivo."

---

## BLOCO 5: Exercício e encerramento (1:45 a 2:00)

### Exercício ao vivo (10 minutos)

> "Cada um escolhe uma tarefa que repete na rotina e testa uma das duas técnicas da aula: chain-of-thought ou few-shot. Pode ser análise de resultado, ata, e-mail, due diligence, o que fizer mais sentido para a área de vocês. 8 minutos no próprio Claude. Depois postam o resultado no chat."

Comentar dois ou três resultados ao vivo.

### Missão opcional entre aulas (15 min de esforço)

> "Antes da Aula 02: pegue um processo que você repete toda semana e tente reescrever o prompt com chain-of-thought. Não precisa ser perfeito. Traga para a Aula 02 e vemos juntos."

### Encerramento

> "Na Aula 02 vamos para system prompts (instrução fixa que calibra o Claude permanentemente dentro de um Projeto) e fluxos multi-etapas (como encadear prompts para processos complexos). Até lá."

---

## O que NÃO entra nesta aula

| Tema | Onde buscar |
|---|---|
| Fundamentos de prompt | [Claude Essentials: Módulo 1](https://github.com/diferentia/curso-claude-introdutorio/blob/main/modulo-01-introducao-ia-generativa.md) |
| System prompts e fluxos | Aula 02 deste curso |
| Auditoria de outputs e playbook | Aula 03 deste curso |
