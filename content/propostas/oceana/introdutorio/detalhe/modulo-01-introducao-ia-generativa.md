---
title: Modulo 01 Introducao Ia Generativa
---

# Módulo 1: Introdução ao Claude e à IA Generativa
**Trilha de IA: Oceana | Duração: 2 horas | Formato: Online síncrono**

---

## Mapa do material de apresentação

Este roteiro usa como base a apresentação **"Aprendendo Claude: Do básico ao intermediário"**.
As seções estão distribuídas entre os módulos da seguinte forma:

| Seção da apresentação | Conteúdo | Módulo |
|---|---|---|
| Capa + Conheça a Anthropic | Contexto da empresa, segurança, Claude | **1** |
| IA Reativa vs Agente de IA | Conceito central, Claude como agente | **1** |
| Glossário essencial | Prompt, output, token, modelo, API | **1** |
| 1: Primeiros Passos | Conta, interface, configurações, voz, arquivos | **1** |
| 2: Fundamentos de Prompt | O que é um prompt, bom vs ruim, arquitetura | **1** |
| 3: Casos de Uso | Lista geral, demo de extração de PDF | **1** |
| 4: Recursos Intermediários | Análise de imagem, pesquisa web, artefatos, Deep Research | **2** |
| 5: Conectores (MCP) | Google Drive, conectores disponíveis | **3** |
| 6: App Mobile | iOS e Android | **3** |
| 7: Projetos | Contexto restrito, instruções, arquivos | **3** |
| 8: Skills (Habilidades) | Criação de automações com /skill-creator | **4** |

> **Regra prática:** se não está na lista de "Módulo 1" acima, não entra nessa aula. Quando alguém perguntar sobre conectores, projetos ou skills, anote e responda "isso entra no Módulo 3 ou 4: vamos cobrir".

---

## Visão geral dos blocos

| Bloco | Tema | Tempo | Slides |
|---|---|---|---|
| 1 | Demo ao vivo: impacto antes da teoria | 0:00 a 0:20 | nenhum |
| 2 | IA, LLMs, reativa vs. agentes, API e MCP | 0:20 a 0:35 | Capa, Anthropic, IA Reativa, Glossário |
| 3 | Primeiros Passos: conta, interface, configurações | 0:35 a 0:55 | Seção 1 (Primeiros Passos) |
| 4 | Intervalo | 0:55 a 1:05 |: |
| 5 | Prompts e casos de uso | 1:05 a 1:45 | Seção 2 (Fundamentos de Prompt) + Seção 3 (Casos de Uso) |
| 6 | Exercício prático e encerramento | 1:45 a 2:00 |: |

---

## BLOCO 1: Demo ao vivo (0:00 a 0:20)

### Objetivo
Criar o "momento de impacto" antes de qualquer teoria. A pessoa precisa ver a ferramenta funcionando em algo do dia a dia dela antes de ouvir qualquer explicação.

> **Nota de slides:** este bloco não usa slides. Tela compartilhada direto no claude.ai.

### Roteiro

**[0:00 a 0:03] Boas-vindas**

> "Bom dia a todos. Nas próximas 2 horas vamos cobrir o básico de IA generativa e aprender a usar o Claude no dia a dia de vocês. Eu vou começar ao contrário do que vocês provavelmente esperavam: antes de qualquer explicação, vou mostrar a ferramenta funcionando."

**[0:03 a 0:12] Demo ao vivo**

Abrir o claude.ai na tela compartilhada. Escolher UMA das demos abaixo conforme o perfil predominante da turma:

**Demo A (analistas de investimento):**
Colar um trecho de release de resultado de empresa e pedir:
> "Resuma esse documento em 5 pontos principais. Para cada ponto, diga qual é o impacto potencial para um fundo de ações."

**Demo B (ops/backoffice):**
Mostrar um e-mail fictício de instrução de cliente com alguma ambiguidade e pedir:
> "Esse e-mail tem alguma informação faltando para eu processar a solicitação? O que eu deveria perguntar de volta para o cliente?"

**Demo C (universal: caso nenhuma das anteriores seja adequada):**
> "Liste os 5 maiores riscos de um fundo multimercado em um cenário de alta de juros no Brasil. Explique cada risco em linguagem que um cliente pessoa física conseguiria entender."

Deixar a resposta aparecer na tela. Não falar nada enquanto aparece. Pausar 10 segundos depois que terminar.

**[0:12 a 0:20] Debrief da demo**

> "O que acabou de acontecer aqui? Eu não escrevi código, não conectei banco de dados, não treinei nada. Eu escrevi uma instrução em português e recebi uma análise estruturada em segundos. Isso é o Claude: um modelo de linguagem grande desenvolvido pela Anthropic. Nas próximas 15 minutos eu vou explicar o que está por baixo disso, e depois vamos explorar tudo o que essa ferramenta consegue fazer."

---

## BLOCO 2: IA, LLMs, reativa vs. agentes, API e MCP (0:20 a 0:35)

### Objetivo
Dar vocabulário e contexto sem perder o público não técnico. Usar analogias do mercado financeiro. Este bloco é intencionalmente curto: 15 minutos de teoria densa, ancorada nos slides.

> **Slides:** Capa da apresentação, "Conheça a Anthropic", "IA Reativa vs Agente de IA", "Glossário essencial do Claude"

### Roteiro

**[0:20 a 0:23] Anthropic e o Claude**

Avançar para o slide "Conheça a Anthropic".

> "A empresa por trás do Claude se chama Anthropic. É americana, fundada em 2021, e tem uma obsessão declarada com segurança em IA. O Claude não é o produto com mais hype do mercado, mas é consistentemente avaliado como o modelo mais confiável para trabalho profissional, especialmente em texto e raciocínio. E, relevante para nós: a Anthropic criou o MCP, que vou explicar em seguida."

**[0:23 a 0:27] O que são LLMs**

> "LLM significa Large Language Model, Modelo de Linguagem Grande. Pense assim: imagine que alguém leu praticamente tudo disponível na internet, em livros e artigos científicos, e construiu um mapa mental gigantesco de como as palavras, ideias e conceitos se relacionam. Quando você faz uma pergunta, o modelo consulta esse mapa e gera uma resposta plausível."

Analogia financeira:
> "É parecido com um analista que leu todos os relatórios de todas as gestoras dos últimos 20 anos. Ele não 'sabe' a resposta de uma fórmula como uma planilha sabe. Ele raciocina sobre a resposta com base em tudo que processou."

Três pontos rápidos a mencionar:
- O modelo não acessa a internet em tempo real por padrão. Para isso é preciso ativar ferramentas.
- Ele tem uma data de corte de conhecimento.
- Ele pode errar, principalmente em dados numéricos. Checar é sempre necessário.

**[0:27 a 0:32] IA reativa vs. agentes**

Avançar para o slide "IA Reativa vs Agente de IA".

> "Existe uma distinção importante que vai aparecer cada vez mais no vocabulário de vocês."

IA reativa:
> "Você faz uma pergunta, o modelo responde. É uma troca. Terminou. Sem memória de longa duração entre sessões, sem ação no mundo externo. Você é o piloto, o Claude é o co-piloto respondendo suas perguntas. É o que a gente vai usar hoje."

Agentes de IA:
> "Um agente é um modelo que recebe um objetivo e ele mesmo decide quais passos dar para atingir esse objetivo. Ele pode chamar ferramentas, buscar informações, executar ações em sistemas externos, revisar o próprio trabalho e iterar. É como contratar alguém e dizer 'preciso de um relatório completo sobre X' em vez de responder perguntas sobre X."

Exemplo prático:
> "Um agente para uma gestora poderia receber a instrução: todo dia às 8h, colete os dados de fechamento de ontem, compare com os limites de risco do fundo, e se algum indicador estiver fora do limite, rascunhe um e-mail para o gestor. Isso já existe. Mas exige configuração. Hoje vamos usar o Claude no modo reativo, que já é extremamente poderoso."

**[0:32 a 0:35] Glossário e encerramento do bloco**

Avançar para o slide "Glossário essencial do Claude".

> "Três termos que vão aparecer muito: prompt é a instrução que você digita. Output é a resposta. Token é a unidade mínima de texto que o modelo processa: pense em sílabas. Contexto é tudo que o modelo tem disponível para responder: seu histórico da conversa, os arquivos que você subiu, as instruções que você deu. Quanto maior o contexto, mais o modelo consegue levar em conta."

> "API e MCP: API é a porta de comunicação entre sistemas. MCP é o padrão que a Anthropic criou para tornar essa comunicação mais fácil e universal: como um USB para integrações de IA. Não precisam memorizar isso agora. O importante é que quando ouvirem esses termos, vocês saibam o que significam. Vamos ver na prática no Módulo 3."

> "Alguma dúvida rápida antes de entrar na ferramenta?"

---

## BLOCO 3: Primeiros Passos: conta, interface, configurações (0:35 a 0:55)

### Objetivo
Tour pela interface do claude.ai do zero. Conduzir com demos ao vivo, não com slides. O objetivo é que todo mundo termine esse bloco sabendo criar conta, navegar e configurar o básico.

> **Slides:** Seção 1 da apresentação: "Primeiros Passos". Usar os slides como roteiro visual, mas a tela compartilhada principal deve ser o próprio claude.ai.

### Roteiro

**[0:35 a 0:38] Criando conta e planos**

Abrir claude.ai na tela compartilhada.

> "Vou abrir o Claude.ai agora. A interface é deliberadamente simples: uma caixa de texto. Mas há muito mais aqui do que parece."

Mostrar o slide de criação de conta e planos rapidamente:
> "Para criar a conta, basta acessar claude.ai e fazer login com Google ou criar um e-mail. Existe plano gratuito com limite diário de mensagens e plano Pro sem limite, com acesso aos modelos mais avançados. Para uso profissional intenso, o Pro vale a pena."

**[0:38 a 0:43] Interface geral e histórico**

Mostrar ao vivo no claude.ai:
- A barra de chat principal
- O menu lateral com histórico de conversas
- Busca de conversas antigas
- Favoritar e renomear conversas
- Botão de nova conversa

> "O histórico fica aqui no painel lateral. Vocês podem buscar conversas antigas por palavra-chave, favoritar as que são relevantes e renomear para encontrar depois. Cada nova conversa começa do zero em termos de memória."

**[0:43 a 0:47] Modelos e configurações**

Mostrar ao vivo:
- Menu de configurações
- Seleção de modelo (Claude Opus, Sonnet, Haiku)
- Aparência
- Idioma

> "Dentro das configurações vocês encontram a seleção de modelo. Existem três versões principais: Opus é o mais poderoso e mais lento, Sonnet é o equilíbrio entre velocidade e qualidade: é o que eu uso no dia a dia, e Haiku é o mais rápido para tarefas simples. Para a maioria do trabalho de vocês, Sonnet resolve."

**[0:47 a 0:51] Upload de arquivos**

Mostrar ao vivo:
- Subir um PDF ou documento qualquer disponível
- Pedir uma extração ou resumo rápido

> "Você pode subir PDFs, planilhas Excel, imagens, arquivos de código. O Claude lê e processa o conteúdo. Isso é útil para resumir relatórios longos, extrair dados de documentos, ou comparar dois arquivos. Vamos ver um exemplo disso com mais calma no bloco de casos de uso."

**[0:51 a 0:55] Usando voz**

Mostrar ao vivo:
- Ícone de microfone na interface
- Demonstrar entrada por voz

> "Vocês podem usar voz para mandar mensagens, o que é útil quando querem ditar uma instrução comprida sem digitar. O Claude transcreve e responde por texto."

> "Quem ainda não tem conta, vai criando agora durante o intervalo. Quem já tem, segue junto no próximo bloco de prompts."

---

## BLOCO 4: Intervalo (0:55 a 1:05)

> "Vamos dar 10 minutos de pausa. Às [hora + 10 min] continuamos com a parte de prompts, que é onde a maioria das pessoas muda completamente a forma de usar a ferramenta."

> **Nota:** aproveite o intervalo para verificar se todos conseguiram criar conta ou acessar o claude.ai.

---

## BLOCO 5: Fundamentos de Prompt e Casos de Uso (1:05 a 1:45)

### Objetivo
Mostrar que a qualidade da instrução determina a qualidade da resposta. Praticar ao vivo com exemplos do dia a dia da Oceana. Este é o bloco de maior impacto prático do Módulo 1.

> **Slides:** Seção 2: "Fundamentos de Prompt" e Seção 3: "Casos de Uso". Usar os slides de comparação de prompts (ruim vs. bom) e a arquitetura do prompt perfeito. A tela principal deve ser o claude.ai ao vivo.

### Roteiro

**[1:05 a 1:12] O que é um prompt e por que importa**

Avançar para o slide "O que é um prompt".

> "Prompt é a instrução que você digita para a IA. É a única entrada de informação que o modelo recebe: ele não sabe quem você é, o que você faz nem o que você precisa antes de você escrever. Por isso, a qualidade da resposta depende diretamente da qualidade da instrução."

Mostrar ao vivo no claude.ai a diferença entre prompt ruim e bom, usando o slide como referência:

Digitar no chat:
- Prompt ruim: `"Analisa isso"` (mostrar que o Claude pede mais informação ou responde de forma genérica)
- Prompt bom: `"Você é um analista de risco de fundos. Leia o trecho abaixo e identifique os 3 principais riscos para um fundo de crédito privado. Para cada risco, sugira uma ação de mitigação. Seja direto e use linguagem técnica adequada para um gestor sênior."`

> "Quanto mais contexto você der: quem você quer que o Claude seja, qual o seu objetivo, quem vai ler a resposta: melhor será o resultado."

**[1:12 a 1:20] A arquitetura do prompt perfeito**

Avançar para o slide "A arquitetura do prompt perfeito".

> "Existe uma estrutura que funciona bem para a maioria das situações. Não precisa seguir à risca toda vez, mas quando o resultado não está saindo como esperado, essa estrutura ajuda a diagnosticar o que está faltando."

Mostrar ao vivo construindo um prompt em camadas para um caso da Oceana:

Começar com o prompt simples:
> `"Resuma esse release de resultado."`

Ir adicionando camadas:

1. Papel: `"Você é um analista de renda variável especializado em empresas brasileiras."`
2. Contexto: `"A Oceana é uma instituição do grupo com atuação no mercado financeiro. O analista trabalha com empresas do portfólio e setores de cobertura da área."`
3. Tarefa: `"Leia o release de resultado abaixo e identifique os 3 principais pontos que impactam a tese de investimento."`
4. Formato: `"Responda em tópicos. Para cada ponto, indique se é positivo ou negativo para a tese."`
5. Restrição: `"Não inclua informações que não estejam no documento. Se algo não estiver claro, diga explicitamente."`

> "Notem que cada camada que adicionamos torna a resposta mais útil e mais confiável."

**[1:20 a 1:32] Casos de uso ao vivo**

Avançar para o slide "Casos de Uso do Claude".

> "Vou mostrar ao vivo os casos de uso mais relevantes para o dia a dia de vocês, com base no que o time respondeu no diagnóstico."

**Demo 1: Extração de PDF:**
Subir um relatório ou documento disponível e pedir:
> `"Leia esse documento e responda: (1) Qual é a conclusão principal? (2) Há dados numéricos relevantes? Liste os mais importantes. (3) Há alguma inconsistência ou ponto de atenção que eu deva verificar?"`

**Demo 2: Rascunho de e-mail:**
> `"Escreva um e-mail formal para um executivo de empresa do portfólio solicitando uma reunião de atualização operacional. Tom: profissional e direto. Máximo 3 parágrafos. Não mencione valores ou investimentos."`

**Demo 3: Ata de reunião:**
Colar notas brutas de uma reunião fictícia e pedir:
> `"Organize essas notas de reunião em: (1) pontos discutidos, (2) decisões tomadas, (3) próximos passos com responsável e prazo."`

**[1:32 a 1:38] Limitações importantes**

> "Antes de encerrar, precisamos falar sobre o que o Claude não faz bem:"

Digitar no chat como exemplo ao vivo:
- Não acessa dados em tempo real por padrão: cotações, notícias do dia exigem conectores externos
- Pode alucinar: inventar fatos com confiança. Sempre checar informações críticas em fontes primárias
- Não é confiável para cálculos matemáticos complexos sem verificação: use planilha para confirmar
- Não tem memória entre sessões fora de Projetos: cada conversa nova começa do zero (isso vamos resolver no Módulo 3)

> "O Claude é um parceiro de raciocínio e de escrita, não uma fonte de verdade. A responsabilidade de validar o output continua sendo de vocês."

**[1:38 a 1:45] Pausa para perguntas**

> "Antes do exercício final: alguma dúvida sobre prompts ou casos de uso?"

---

## BLOCO 6: Exercício prático e encerramento (1:45 a 2:00)

### Exercício ao vivo (8 minutos)

Pedir para cada participante fazer UMA das tarefas abaixo no próprio claude.ai:

**Opção 1 (analistas e gestores):**
> "Pense em um documento que você leu recentemente, pode ser um release, um relatório setorial, qualquer coisa. Escreva um prompt seguindo a arquitetura que vimos: papel, contexto, tarefa, formato, restrição: e veja o resultado. Compartilhe no chat o prompt que você escreveu."

**Opção 2 (ops, backoffice, jurídico, adm):**
> "Pense em algum documento ou e-mail que você precisa escrever com frequência. Escreva um prompt pedindo para o Claude criar um modelo reutilizável para esse documento. Compartilhe o resultado no chat."

**[1:53 a 2:00] Encerramento**

> "No próximo módulo vamos aprofundar recursos intermediários: análise de imagem, pesquisa na web dentro do Claude, e criação de artefatos: que são documentos, tabelas e até páginas web que o Claude gera direto na interface. Também vamos entrar no Deep Research, que é o modo de pesquisa profunda."

> "Vou compartilhar com vocês agora: o link do claude.ai, o link para o plano Pro, e o roteiro dessa aula. Alguma pergunta final?"

---

## O que NÃO entra nessa aula (reservado para módulos seguintes)

Quando alguém perguntar sobre esses temas, anote e redirecione:

| Tema | Módulo |
|---|---|
| Análise de imagem | 2 |
| Pesquisa na web (dentro do Claude) | 2 |
| Artefatos (HTML, planilhas geradas pelo Claude) | 2 |
| Deep Research | 2 |
| Conectores (Google Drive, Slack, Notion via MCP) | 3 |
| App Mobile | 3 |
| Projetos (contexto persistente, instruções de projeto) | 3 |
| Skills e automações com /skill-creator | 4 |
| Claude Code e integrações via API | 4 |

---

## Material de apoio para distribuir após a aula

- Link: https://claude.ai
- Link plano Pro: https://claude.ai/upgrade
- Apresentação usada: "Aprendendo Claude: Do básico ao intermediário" (seções 1 a 3)
- Documento: "10 prompts iniciais para gestoras" (a preparar antes do Módulo 2)

---

## Notas para o facilitador

- **Velocidade:** público misto tende a ter velocidades diferentes de absorção. Se alguém perguntar algo técnico demais, anote e responda no final.
- **Silêncio nas demos:** deixe a resposta aparecer na tela sem falar por cima. O efeito visual é parte do impacto.
- **Erros ao vivo:** se o Claude der uma resposta estranha ou errada durante a demo, use isso a seu favor: "e isso aqui é exatamente o ponto da alucinação que acabei de mencionar."
- **Não force exemplos financeiros em tudo:** se alguém da turma sugerir um caso do dia a dia, use. É mais engajador do que exemplos preparados.
- **Teoria curta, demos longas:** se o tempo apertar, corte teoria do Bloco 2, nunca as demos dos Blocos 3 e 5.
- **Perguntas sobre Projetos e Skills:** são as mais prováveis de aparecer. A resposta padrão é: "Isso entra no Módulo 3. Guarda essa dúvida que a gente vai direto nela lá."
