---
title: Modulo 03 Conectores Mobile Projetos
---

# Módulo 3: Conectores, App Mobile e Projetos
**Trilha de IA, Oceana | Duração: 2 horas | Formato: Online síncrono (Teams ou Meet)**

---

## Mapa do material de apresentação

Este roteiro usa como base a apresentação **"Aprendendo Claude, do básico ao intermediário"**.
A distribuição completa por módulo (referência rápida, igual aos Módulos 1 e 2):

| Seção da apresentação | Conteúdo | Módulo |
|---|---|---|
| Capa + Conheça a Anthropic | Contexto da empresa, segurança, Claude | 1 |
| IA Reativa vs Agente de IA | Conceito central, Claude como agente | 1 |
| Glossário essencial | Prompt, output, token, modelo, API | 1 |
| 1, Primeiros Passos | Conta, interface, configurações, voz, arquivos | 1 |
| 2, Fundamentos de Prompt | O que é um prompt, bom vs ruim, arquitetura | 1 |
| 3, Casos de Uso | Lista geral, demo de extração de PDF | 1 |
| 4, Recursos Intermediários | Análise de imagem, pesquisa web, artefatos, Deep Research | 2 |
| **5, Conectores (MCP)** | **Google Drive, conectores disponíveis** | **3** |
| **6, App Mobile** | **iOS e Android** | **3** |
| **7, Projetos** | **Contexto restrito, instruções, arquivos** | **3** |
| 8, Skills (Habilidades) | Criação de automações com /skill-creator | 4 |

> **Regra prática:** este módulo cobre as Seções 5, 6 e 7 da apresentação. Se aparecer pergunta sobre Skills, automações ou Claude Code, anote no chat e responda: "isso entra no Módulo 4, guarda a dúvida."

---

## Pré-requisitos para os participantes

Antes da aula, o facilitador deve enviar um e-mail (24h antes) lembrando:

1. Ter conta no claude.ai ativa (plano Pro recomendado, porque Projetos têm experiência mais rica lá).
2. Ter o app do Claude instalado no celular (iOS ou Android). Não precisa configurar nada, só instalar e fazer login com a mesma conta do navegador.
3. Ter acesso ao Google Drive pessoal ou corporativo onde guardam documentos de trabalho (releases, relatórios, anotações).
4. Trazer uma pergunta real: algo que normalmente levaria mais de 30 minutos para responder usando fontes internas (relatório de cobertura, modelo, CIE, apresentação de management). Vamos usar isso no exercício final.
5. Reservar 2h sem interrupções, com fone se estiver em sala compartilhada.

---

## Visão geral dos blocos

| Bloco | Tema | Tempo | Slides |
|---|---|---|---|
| 1 | Abertura com demo de Projeto e recap do Módulo 2 | 0:00 a 0:15 | nenhum |
| 2 | Conectores (MCP): Google Drive e outros | 0:15 a 0:45 | Seção 5 |
| 3 | App Mobile: câmera, voz e uso em campo | 0:45 a 1:00 | Seção 6 |
| 4 | Intervalo | 1:00 a 1:10 | sem slides |
| 5 | Projetos em profundidade: instruções, arquivos e contexto persistente | 1:10 a 1:50 | Seção 7 |
| 6 | Exercício prático, missão entre módulos e encerramento | 1:50 a 2:00 | sem slides |

---

## BLOCO 1: Abertura com demo de Projeto e recap (0:00 a 0:15)

### Objetivo
Repetir o padrão dos módulos anteriores: demo antes da teoria. O efeito "uau" deste módulo está nos Projetos, que mostram um Claude que já sabe com quem está falando e sobre o quê antes de qualquer prompt. É por aí que se abre.

> **Nota de slides:** este bloco não usa slides. Tela compartilhada direto no claude.ai.

### Roteiro

**[0:00 a 0:03] Boas-vindas e recap rápido**

> "Bom dia a todos. Bem-vindos ao Módulo 3. No Módulo 2 a gente cobriu análise de imagem, pesquisa na web, artefatos e Deep Research. Hoje vamos para os três recursos que mudam a dinâmica de trabalho no dia a dia: Conectores, que permitem ao Claude acessar o Google Drive e outras ferramentas da Oceana; App Mobile, para usar o Claude pelo celular com câmera e voz; e Projetos, que criam um contexto persistente, como uma área de trabalho com memória."

**[0:03 a 0:10] Demo de impacto: Projeto de cobertura já configurado**

Antes da aula, o facilitador cria um Projeto no claude.ai chamado "Cobertura [empresa]" (empresa listada do portfólio escolhida para a turma) com:
- Instruções de projeto: "Você é um analista sênior da Oceana, com foco no setor de cobertura deste Projeto. Sempre que eu iniciar uma conversa, assuma que estamos analisando [empresa]. Use linguagem técnica de análise fundamentalista. Estruture respostas com clareza para uso em relatórios internos."
- Pelo menos um arquivo carregado: o release mais recente da empresa.

Abrir uma conversa nova dentro do projeto e digitar:

> `"Sem que eu precise explicar nada, faça um diagnóstico rápido do trimestre mais recente baseado no que você tem disponível. Mostre 3 pontos positivos e 2 de atenção."`

Aguardar a resposta. Não falar nada enquanto o Claude responde.

> "Reparem: eu não expliquei quem eu sou, não disse que empresa estou analisando, não anexei nenhum documento agora. O Projeto já sabia. Isso é o que Projetos faz: contexto persistente. A gente vai construir esse setup ao vivo no Bloco 5."

**[0:10 a 0:15] Visão geral do módulo**

> "Em 2 horas: Conectores (Claude lendo o Drive da Oceana), App Mobile (usar tudo isso pelo celular, inclusive com câmera), e Projetos em profundidade, onde cada um vai criar o seu próprio para uma empresa ou tema que acompanha. Tenham em mente aquela pergunta que vocês trouxeram hoje. É ela que vamos resolver no exercício final."

---

## BLOCO 2: Conectores (MCP) (0:15 a 0:45)

### Objetivo
Mostrar que o Claude pode ir buscar informação onde ela já está, sem que o analista precise copiar e colar. Para a Oceana, o caso mais imediato é o Google Drive: releases, modelos, CIEs, apresentações de management que já estão lá.

> **Slides:** Seção 5.

### Roteiro

**[0:15 a 0:25] O que é MCP e por que importa**

Avançar para o slide "Conectores (MCP)".

> "MCP significa Model Context Protocol. É um protocolo criado pela Anthropic para conectar o Claude a sistemas e fontes externas de forma padronizada. Antes do MCP, cada integração era um projeto de TI. Com o MCP, é mais parecido com instalar um aplicativo: você autoriza, conecta e usa."

> "A Anthropic já entrega conectores prontos para as ferramentas mais comuns. Para a Oceana, o mais relevante agora é o Google Drive, que provavelmente é onde a maioria guarda documentos de trabalho."

Abrir a interface de configurações de Conectores no claude.ai ao vivo.

> "O Claude chama isso de Conectores. Fica nas configurações da conta. Vou mostrar onde fica e como adicionar o Google Drive."

**[0:25 a 0:35] Demo ao vivo: conectar o Google Drive**

Navegar até as configurações e mostrar a tela de Conectores. Selecionar Google Drive. Mostrar o fluxo de autorização (sem completar se já estiver conectado na conta usada para demo).

Se já estiver conectado, mostrar a tela de confirmação e seguir para o uso.

> "Feita a conexão, o Claude consegue buscar e ler arquivos do Drive diretamente pelo chat. Não é o Claude navegando pelo Drive sozinho: ele só acessa o que você pede, e cada acesso é registrado na autorização do Google."

Demo 1: busca simples

> `"Busque no meu Google Drive o último release de resultados trimestrais que eu salvei. Me diga o nome do arquivo, a data de modificação e o que está descrito no título."`

Observar a resposta com a turma.

> "Reparem que ele retornou o nome do arquivo, não inventou. Se o arquivo não existisse, ele diria. Isso é diferente de pesquisa na web: não é especulação sobre o que pode existir, é leitura do que está ali."

Demo 2: leitura e análise de um arquivo do Drive

> `"Abra o arquivo [nome do release] que está no meu Drive e faça um resumo executivo das principais métricas financeiras do trimestre. Use o mesmo formato que usaríamos em uma nota interna de análise."`

Aguardar e observar.

> "Isso substitui: abrir o Drive, encontrar o arquivo, abrir o PDF, ler, resumir. Para documentos que vocês visitam com frequência, a economia de tempo por semana é real."

**[0:35 a 0:45] Outros conectores e limitações**

> "Além do Google Drive, a lista de conectores inclui ferramentas como Notion, Jira e outros. A Anthropic expande essa lista continuamente. Se tiver uma ferramenta que a Oceana usa e que não aparece na lista padrão, existe a opção de adicionar um servidor MCP externo via URL, mas isso já é configuração de TI, não algo que o analista faz sozinho."

Mostrar a tela com a lista de conectores disponíveis.

> "Uma coisa importante: o conector de Google Drive que vimos aqui é o conector do claude.ai, que funciona no navegador e no desktop. No app mobile, os conectores funcionam de forma mais limitada, o que é esperado. Vamos ver isso no próximo bloco."

**Dica para o nível básico:**
> "Se você nunca conectou uma ferramenta externa ao Claude, faça só o Google Drive antes do próximo módulo. O fluxo leva 3 minutos. Depois passe um arquivo simples e veja o que acontece."

**Desafio opcional para o nível avançado:**
> "Para quem já usa o Drive com frequência: tente pedir ao Claude para comparar dois arquivos de releases de trimestres diferentes que estão no Drive, sem baixar nenhum. Veja o que ele consegue fazer com os dois documentos em contexto simultâneo."

**Limitação importante a mencionar:**
> "O conector não substitui um sistema de gestão de documentos robusto. Ele lê o que está no Drive, mas não organiza, não indexa e não mantém histórico de versões. Para documentos sensíveis, verifiquem com o time de compliance da Oceana antes de conectar a conta corporativa. Existe a opção de usar uma conta pessoal separada para os testes."

---

## BLOCO 3: App Mobile (0:45 a 1:00)

### Objetivo
Mostrar que o Claude no celular é o mesmo Claude do navegador, com dois recursos extras que o desktop não tem: câmera e voz. Para a Oceana, o caso mais prático é fotografar um quadro de reunião com management ou fazer uma consulta rápida no trajeto.

> **Slides:** Seção 6.

### Roteiro

**[0:45 a 0:50] Tour pelo app**

Avançar para o slide "App Mobile". Mostrar o app no celular ao vivo, compartilhando a tela via Teams ou Meet (pelo cabo ou pelo recurso de espelhamento do iOS/Android).

> "O app do Claude para iOS e Android tem as mesmas funcionalidades do navegador: modelos, histórico de conversas, Projetos, artefatos, pesquisa na web, conectores que você já configurou. O histórico é sincronizado automaticamente. Uma conversa que você começou no computador aparece no celular e vice-versa."

> "A única exceção são as Skills, que por enquanto só funcionam no desktop. Mas tudo que a gente cobriu nos Módulos 1 e 2 funciona no celular do mesmo jeito."

**[0:50 a 0:58] Câmera e voz: os dois recursos exclusivos do mobile**

Demo 1: câmera para capturar whiteboard de reunião

Fotografar (ou usar uma foto pré-salva de) um quadro com anotações de reunião de gestão, com dados fictícios mas realistas (tipo: "CAPEX 2026 R$1,2bi, prazo de execução 18 meses, três projetos prioritários listados, dois riscos identificados").

> `"Fotografei o quadro de uma reunião com o CFO de uma empresa do portfólio. Transcreva tudo que está escrito, organize em uma ata estruturada com: contexto da reunião, pontos discutidos, decisões tomadas, próximas ações com responsável se houver, e perguntas que ficaram em aberto."`

Mostrar a resposta ao vivo.

> "Esse caso de uso apareceu espontaneamente no diagnóstico de vocês: reuniões com management produzem muita informação e a ata fica para depois. Com o celular, você fotografa o quadro ao final e já tem a ata estruturada no trajeto de volta."

Demo 2: entrada por voz

> "O app também aceita entrada por voz. O microfone fica disponível na mesma caixa de texto do chat. Fale o prompt, o Claude transcreve e responde. Útil quando você está em movimento e quer fazer uma consulta rápida."

Mostrar o ícone de microfone e fazer uma consulta curta ao vivo por voz.

> "Para uso no celular, a regra é a mesma do desktop: quanto mais contexto no prompt, melhor a resposta. A diferença é que você pode falar em vez de digitar."

**[0:58 a 1:00] Limitações do mobile**

> "Dois pontos importantes: primeiro, o app consome dados móveis. Para pesquisas com documentos grandes ou Deep Research em 4G, vale considerar isso. Segundo, Skills, que a gente vai ver no Módulo 4, ainda não funcionam no app mobile. Para Skills, use o desktop."

Anunciar o intervalo:

> "Vamos pausar 10 minutos. No retorno, Projetos em profundidade, que é onde o Módulo 3 entrega o maior valor prático. Voltem com o claude.ai aberto no computador."

---

## BLOCO 4: Intervalo (1:00 a 1:10)

> "10 minutos. Voltamos às [hora + 10 min]."

**Nota:** aproveitar o intervalo para tirar dúvidas no privado sobre instalação do app mobile ou autorização do conector do Google Drive. Perguntar em silêncio quem ainda não instalou o app ou não conseguiu conectar o Drive, para ajustar o Bloco 5 se necessário.

---

## BLOCO 5: Projetos em profundidade (1:10 a 1:50)

### Objetivo
Projetos é o recurso que transforma o Claude de uma ferramenta genérica em um assistente configurado para a realidade específica da Oceana. Este bloco entrega o setup completo ao vivo, para que cada participante saia da aula com o próprio Projeto criado e funcional.

> **Slides:** Seção 7.

### Roteiro

**[1:10 a 1:20] O que são Projetos e por que mudam a dinâmica**

Avançar para o slide "Projetos".

> "Projetos é uma funcionalidade que cria um espaço de trabalho com contexto restrito e persistente. Três coisas acontecem dentro de um Projeto que não acontecem em uma conversa normal: primeiro, todas as conversas dentro do Projeto compartilham o mesmo contexto. Segundo, você pode escrever instruções fixas que o Claude vai absorver em todas as conversas, sem precisar repetir no prompt. Terceiro, você pode carregar arquivos que ficam disponíveis para todas as conversas do Projeto."

> "A metáfora prática: em vez de contratar um analista genérico toda vez que você abre o Claude, você está abrindo a sala de trabalho de um analista que já conhece a empresa, já leu os documentos e já sabe como você quer receber a informação."

Mostrar ao vivo a tela de criação de Projeto no claude.ai.

**[1:20 a 1:30] Demo ao vivo: criando um Projeto do zero**

Criar ao vivo um Projeto chamado "Cobertura [empresa do portfólio]". Mostrar cada etapa:

Etapa 1, nome e descrição:

> "Nome objetivo. A descrição é interna, serve para você se organizar quando tiver vários Projetos."

Etapa 2, instruções do Projeto:

Digitar ao vivo as instruções, explicando cada parte enquanto escreve:

> `"Você é um analista sênior da Oceana, com foco no setor de cobertura deste Projeto. Quando eu iniciar uma conversa neste projeto, assuma que estamos analisando [empresa]. Use sempre linguagem técnica de análise fundamentalista. Ao estruturar respostas, priorize clareza para uso em notas e relatórios internos. Se eu pedir um artefato, use formatação limpa sem cores berrantes. Se eu pedir comparações com pares, priorize os comparáveis que estão no universo da Oceana."`

> "Essas instruções ficam ativas em todas as conversas do Projeto. Não precisam ser repetidas no prompt. Pensem nisso como a briefing que você daria a um estagiário no primeiro dia, mas uma vez só."

Etapa 3, arquivos:

Carregar um arquivo de release ou modelo setorial.

> "Arquivos do Projeto ficam disponíveis em todas as conversas como contexto base. Para fundos, os casos mais óbvios são: último release da empresa, modelo de valuation simplificado, CIE do trimestre mais recente, apresentação de management day."

> "Uma observação: o tamanho total de arquivos num Projeto tem limite. Para documentos muito grandes, como modelos de Excel completos, vale carregar os mais lidos, não todos."

**[1:30 a 1:40] Demo de uso real do Projeto recém-criado**

Abrir uma conversa nova dentro do Projeto e mostrar que o contexto está ativo:

Demo A, pergunta sem contexto explícito:

> `"Qual o principal risco regulatório desta empresa no curto prazo?"`

Observar que o Claude responde com contexto específico da empresa, não uma resposta genérica.

> "Reparem que eu não precisei dizer de qual empresa estou falando, nem repetir meu papel. O Projeto já sabe."

Demo B, iteração entre conversas:

Iniciar uma segunda conversa dentro do mesmo Projeto, sem referenciar a anterior.

> `"Monte uma tabela comparando os últimos dois resultados trimestrais. Use os dados do arquivo carregado."`

> "Duas conversas distintas, mesmo contexto base. Cada conversa fica separada no histórico, mas compartilha as instruções e os arquivos. Isso é o que dá ao Projeto a característica de espaço de trabalho, não só de histórico de chat."

Demo C, arquivo via conector do Drive dentro do Projeto:

> "Se vocês conectaram o Google Drive, é possível puxar arquivos do Drive para dentro do Projeto sem precisar baixar e reenviar. Vou mostrar como isso funciona."

Mostrar ao vivo a opção de adicionar arquivo via conector. Selecionar um arquivo do Drive.

> "Para quem tem muitos documentos de cobertura já organizados em pastas no Drive, isso elimina o passo de gerenciar arquivos em dois lugares."

**[1:40 a 1:50] Prática guiada: cada participante cria o próprio Projeto**

> "Agora vocês vão criar o próprio Projeto. Tenho 10 minutos para isso. Escolham uma empresa ou tema que vocês cobrem. Não precisa ser perfeito agora: crie o Projeto, escreva 3 linhas de instrução (setor, tom, formato preferido de resposta) e carregue um arquivo que vocês têm fácil acesso. Vou dar suporte aqui pelo chat."

Enquanto o time cria:

- Responder dúvidas no chat do Teams/Meet.
- Pedir que 2 ou 3 participantes compartilhem a tela para mostrar o setup deles.

> "Quem criar e quiser feedback, compartilhe a tela ou cole as instruções no chat. Vamos comentar 2 ou 3 ao vivo."

**Dica para o nível básico:**
> "Se você nunca usou Projetos, comece pelas instruções: escreva só uma frase dizendo seu cargo e o setor que você cobre. Já faz diferença. O arquivo pode vir depois."

**Desafio opcional para o nível avançado:**
> "Para quem já está confortável: tente criar dois Projetos distintos, cada um com setor ou empresa diferente e instruções distintas. Depois compare como o Claude responde à mesma pergunta em cada Projeto."

---

## BLOCO 6: Exercício prático, missão entre módulos e encerramento (1:50 a 2:00)

### Exercício ao vivo (6 minutos)

> "Vamos fechar com o exercício individual de 6 minutos. Usem o Projeto que vocês acabaram de criar, ou o de demonstração que mostrei. Cada um usa o próprio Claude. Quem quiser, compartilha o resultado no chat do Teams."

Pedir para cada participante resolver a pergunta que trouxeram no início da aula:

> "Lembram da pergunta que vocês trouxeram hoje? Aquela que normalmente levaria 30 minutos ou mais para responder com fontes internas? É hora de testá-la dentro do Projeto. Pode ser uma pergunta sobre empresa que vocês cobrem, um pedido de síntese de documento, uma comparação de dados. Usem o contexto do Projeto a favor."

**Como compartilhar online:**
> "Quem quiser feedback sobre o prompt ou o resultado, copie no chat. Vou comentar 2 ou 3 antes de fechar."

### Missão entre módulos (opcional, 10 a 15 minutos de esforço)

> "Antes do Módulo 4, um desafio opcional: refine as instruções do Projeto que vocês criaram hoje. Depois de usar durante a semana, vocês vão notar o que faltou, o que ficou genérico demais, o que poderia ser mais específico. Atualizem as instruções com base no que observarem. No início do Módulo 4 vou pedir que 2 ou 3 pessoas mostrem a evolução."

> "Sem cobrança formal. É experimento, não tarefa de casa."

### Encerramento (2 minutos)

> "No Módulo 4 vamos fechar o ciclo com os recursos mais avançados: Skills, que são automações criadas por vocês mesmos dentro do Claude; automações com /skill-creator, que transforma um fluxo de trabalho repetitivo em um comando; e um track técnico opcional com Claude Code para quem quiser avançar em integrações e automações mais sofisticadas. É o módulo para os Rafael, Marcelo, Gabriel e Thiago levarem para outro nível."

> "Vou compartilhar no chat agora: o roteiro dessa aula, a documentação de Projetos e a documentação de Conectores. Alguma pergunta antes de encerrar?"

---

## O que NÃO entra nessa aula (reservado para módulos seguintes)

Quando alguém perguntar sobre esses temas, anote e redirecione:

| Tema | Módulo |
|---|---|
| Skills e automações com /skill-creator | 4 |
| Claude Code e integrações via API | 4 |
| Computer use e automação de tarefas no navegador | 4 |
| Agentes autônomos e workflows multi-etapas | 4 |

---

## Material de apoio para distribuir após a aula

- Link: https://claude.ai
- Documentação de Projetos: https://support.claude.com (buscar "projects")
- Documentação de Conectores: https://support.claude.com (buscar "integrations")
- App iOS: App Store, buscar "Claude"
- App Android: Google Play, buscar "Claude"
- Apresentação usada: "Aprendendo Claude, do básico ao intermediário" (Seções 5, 6 e 7)
- Recomendação antes do Módulo 4: usar o Projeto criado hoje pelo menos 3 vezes durante a semana e anotar o que funcionou e o que faltou nas instruções.

---

## Notas para o facilitador

**Adaptações para o formato online (Teams ou Meet)**

- Câmera ligada sempre que possível. No bloco de prática guiada (1:40), pedir que quem quiser compartilhe a tela para mostrar o setup do Projeto.
- Use o chat como canal paralelo durante o bloco de prática. Dúvidas curtas por lá não interrompem o ritmo.
- Tela compartilhada com 3 abas pré-abertas: claude.ai logado (com o Projeto demo já criado), o app no celular (para o Bloco 3) e a apresentação. Trocar rápido entre elas.
- Compartilhe os prompts longos pelo chat para que o time possa copiar e seguir junto.

**Sobre o bloco de prática guiada (1:40 a 1:50)**

- Este é o bloco mais importante do módulo. Se o tempo atrasar, proteja-o cortando a Demo C do Bloco 5 (arquivo via conector do Drive dentro do Projeto), não a prática guiada.
- 10 minutos é pouco para criar um Projeto do zero. A meta não é perfeição: é que cada um saia com um Projeto criado e pelo menos 3 linhas de instrução. O refinamento acontece durante a semana.
- Se alguém não conseguir criar o Projeto ao vivo (problema de conta, plano, conexão), oriente a fazer o setup depois usando o roteiro como guia.

**Sobre o App Mobile**

- Para demos de câmera ao vivo via Teams ou Meet, o compartilhamento de tela do celular pode ter latência. Se a qualidade estiver ruim, mostre a tela do celular via câmera do computador apontada para ele, ou use uma foto pré-capturada e mostre o resultado no desktop.
- Se alguém não instalou o app antes da aula, não use tempo de aula para instalar. Oriente para fazer depois e avance.

**Sobre Conectores e segurança**

- É provável que apareça a pergunta sobre segurança: "O Claude tem acesso a tudo do meu Drive?" A resposta correta é: o Claude acessa somente o que você pede, no momento que você pede, dentro da sessão autenticada. Não há indexação automática nem acesso a arquivos que você não solicitou explicitamente.
- Para quem tem dúvida sobre usar a conta corporativa do Google com o conector, recomende usar uma conta pessoal ou de testes até que o time de TI da Oceana valide o fluxo.

**Velocidade e calibração de nível**

- O time tem 50% no nível intermediário. O ritmo do roteiro está calibrado para esse perfil.
- Power users identificados no diagnóstico (Rafael Cunha, Marcelo Moraes, Gabriel, Thiago) vão avançar mais rápido no setup do Projeto. Use o desafio opcional para mantê-los engajados sem desacelerar o resto.
- Iniciantes podem travar no bloco de instruções do Projeto, por não saber o que escrever. A dica de nível básico (uma frase com cargo e setor) é suficiente para sair do lugar.

**Silêncio nas demos**

- Mesmo padrão dos Módulos 1 e 2: deixar a resposta aparecer antes de comentar. Contar 10 segundos após o fim da resposta.
- No Bloco 5, durante a Demo A (pergunta sem contexto explícito), o silêncio é especialmente eficaz: a turma precisa ver que o Claude respondeu com especificidade sem receber nenhum contexto no prompt. Aguardar antes de explicar o que aconteceu.

**Tempo apertado**

- Se atrasar mais de 10 minutos até o Bloco 5, corte a Demo C (arquivo via conector do Drive dentro do Projeto). Mantenha as Demos A e B, o bloco de prática guiada e o exercício final.
- Não corte a prática guiada de criação do Projeto por nada. É o entregável do módulo.

**Perguntas sobre Skills e automações**

- São as perguntas mais prováveis de aparecer nesse módulo, especialmente dos power users. A resposta padrão: "Skills entram no Módulo 4, que é onde a gente vai mais fundo em automações. Guarda essa dúvida."

**Revisão das missões do Módulo 2**

- No Bloco 1, antes da demo de impacto, perguntar rapidamente: "Alguém usou Deep Research essa semana e quer compartilhar o que testou?" Dar 2 minutos para 1 ou 2 respostas no chat. Conecta o módulo anterior e mostra continuidade.
