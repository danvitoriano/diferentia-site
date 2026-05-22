---
title: Modulo 04 Skills Automacoes
---

# Módulo 4: Skills, Automações e Track Técnico
**Trilha de IA, Oceana | Duração: 2 horas | Formato: Online síncrono (Teams ou Meet)**

---

## Mapa do material de apresentação

Este roteiro usa como base a apresentação **"Aprendendo Claude, do básico ao intermediário"**.
A distribuição completa por módulo (referência rápida, igual aos Módulos 1, 2 e 3):

| Seção da apresentação | Conteúdo | Módulo |
|---|---|---|
| Capa + Conheça a Anthropic | Contexto da empresa, segurança, Claude | 1 |
| IA Reativa vs Agente de IA | Conceito central, Claude como agente | 1 |
| Glossário essencial | Prompt, output, token, modelo, API | 1 |
| 1, Primeiros Passos | Conta, interface, configurações, voz, arquivos | 1 |
| 2, Fundamentos de Prompt | O que é um prompt, bom vs ruim, arquitetura | 1 |
| 3, Casos de Uso | Lista geral, demo de extração de PDF | 1 |
| 4, Recursos Intermediários | Análise de imagem, pesquisa web, artefatos, Deep Research | 2 |
| 5, Conectores (MCP) | Google Drive, conectores disponíveis | 3 |
| 6, App Mobile | iOS e Android | 3 |
| 7, Projetos | Contexto restrito, instruções, arquivos | 3 |
| **8, Skills (Habilidades)** | **Criação de automações com /skill-creator** | **4** |

> **Regra prática:** este módulo cobre a Seção 8 da apresentação. O track técnico é um **teaser** de 15 a 20 min (não substitui o curso [Claude Code: Vibe Coders](../../curso-claude-code/) nem o [Avançado](../../curso-claude-code-avancado/)).

---

## Pré-requisitos para os participantes

Antes da aula, o facilitador deve enviar um e-mail (24h antes) lembrando:

1. Ter conta no claude.ai ativa com o Claude Cowork instalado (ou Desktop app com acesso ao modo Cowork). Skills e /skill-creator funcionam apenas no Cowork.
2. Revisitar o Projeto criado no Módulo 3 e trazer pelo menos um caso de uso repetitivo que vocês gostariam de automatizar. Não precisa ser técnico: "toda semana eu monto um sumário de resultados no mesmo formato" já é suficiente.
3. Track técnico (opcional): **não** é necessário instalar Claude Code nesta aula. Quem quiser aprofundar depois segue para o curso [Claude Code: Vibe Coders](../../curso-claude-code/).
4. Reservar 2h sem interrupções, com fone se estiver em sala compartilhada.

---

## Visão geral dos blocos

| Bloco | Tema | Tempo | Slides |
|---|---|---|---|
| 1 | Abertura com demo de impacto: skill de análise rodando ao vivo | 0:00 a 0:15 | nenhum |
| 2 | O que são Skills: tipos, instalação e uso | 0:15 a 0:40 | Seção 8 |
| 3 | /skill-creator: criar uma skill ao vivo | 0:40 a 1:00 | Seção 8 |
| 4 | Intervalo | 1:00 a 1:10 | sem slides |
| 5 | Teaser: Claude Code e próximos passos na trilha | 1:10 a 1:20 | sem slides |
| 6 | Biblioteca de prompts da Oceana (entrega concreta) | 1:20 a 1:40 | sem slides |
| 7 | Governança: como a Oceana usa IA com responsabilidade | 1:40 a 1:55 | sem slides |
| 8 | Exercício Cowork, missão final e encerramento da trilha | 1:55 a 2:00 | sem slides |

---

## BLOCO 1: Abertura com demo de impacto (0:00 a 0:15)

### Objetivo
Manter o padrão da trilha: demo antes da teoria. O efeito de impacto deste módulo está em ver uma skill executando em um único comando algo que normalmente levaria 10 a 15 minutos de trabalho manual com prompts encadeados.

> **Nota de slides:** este bloco não usa slides. Tela compartilhada direto no Claude Cowork.

### Roteiro

**[0:00 a 0:03] Boas-vindas, recap e revisão das missões do Módulo 3**

> "Bom dia a todos. Chegamos ao Módulo 4, o último da trilha. Antes de começar: alguém usou o Projeto criado no Módulo 3 durante a semana e quer compartilhar o que observou? 2 minutos no chat."

Aguardar 2 ou 3 respostas curtas no chat. Comentar uma.

> "Bom. Os refinamentos nas instruções que vocês fizeram são exatamente o tipo de aprendizado que não aparece em nenhum tutorial: só vem do uso. Guardem isso."

**[0:03 a 0:12] Demo de impacto: skill de análise de resultado em ação**

Antes da aula, o facilitador cria uma skill chamada "Nota de Resultado" configurada para receber um release de resultados trimestrais colado como texto e gerar automaticamente uma nota de análise estruturada com: contexto do trimestre, principais métricas, destaques positivos, pontos de atenção e pergunta para a gestão.

Abrir o Claude Cowork, invocar a skill com `/nota-de-resultado` e colar o texto de um release recente (pode ser fictício mas realista, como CPFL ou outra empresa do universo Oceana).

Aguardar a skill executar. Não falar nada enquanto a resposta aparece.

> "Uma linha. Uma skill. Em menos de 30 segundos, saiu uma nota estruturada que eu posso usar como base para uma nota interna ou enviar para revisão. Sem prompt montado na cabeça, sem reescrever o contexto do zero. Isso é o que Skills entrega: você descreve o que quer uma vez, e vira um comando que qualquer pessoa do time pode usar."

**[0:12 a 0:15] Visão geral do módulo**

> "Em 2 horas: primeiro, o que são Skills e como instalar as prontas. Depois, /skill-creator para cada um de vocês descrever e criar uma skill própria. No final, um bloco curto sobre Claude Code: o que é e qual curso fazer depois: sem instalação pesada nesta aula. Quem quiser construir software e publicar na internet segue para o curso Claude Code para Vibe Coders; quem quiser Git, MCP no terminal e API, para o Avançado depois disso."

---

## BLOCO 2: O que são Skills: tipos, instalação e uso (0:15 a 0:40)

### Objetivo
Apresentar o conceito de Skills no Claude Cowork, mostrar os dois tipos (prontas e criadas pelo usuário) e garantir que todos saibam instalar e acionar uma skill antes de criar a deles.

> **Slides:** Seção 8.

### Roteiro

**[0:15 a 0:25] Conceito: o que é uma Skill**

Avançar para o slide "Skills (Habilidades)".

> "Skill, no Claude Cowork, é uma automação empacotada. Pense assim: você tem um fluxo que repete toda semana, um conjunto de instruções específicas que você daria ao Claude para executar uma tarefa. Uma Skill é esse fluxo transformado em um comando que você aciona com `/nome-da-skill`. Não precisa montar o prompt toda vez. Não precisa lembrar dos detalhes do contexto. O contexto já está dentro da skill."

> "Existem dois tipos. Skills prontas são desenvolvidas pela Anthropic ou por parceiros e podem ser instaladas diretamente no Cowork. Elas cobrem casos gerais como criar documentos Word, planilhas Excel, apresentações PowerPoint, PDFs e pesquisa web estruturada. Skills personalizadas são criadas por você, para os seus processos específicos. O /skill-creator é o que usamos para criar essas. Vou mostrar as duas agora."

**[0:25 a 0:32] Demo: instalando e usando skills prontas**

Abrir o painel de skills no Cowork ao vivo.

> "Aqui estão as skills disponíveis. Vou mostrar três que são relevantes para a rotina de vocês."

Demo 1: skill docx

> `"/docx Gere um relatório executivo de uma página com as seguintes informações: [colar dados fictícios de resultado de empresa de utilities]. Cabeçalho com logotipo da Oceana no canto superior direito, seções: Sumário, Métricas Principais e Próximos Catalisadores."`

Aguardar e mostrar o arquivo gerado.

> "Ela gerou um .docx formatado, que posso abrir no Word agora. Isso que era 20 minutos de formatação manual."

Demo 2: skill xlsx

> `"/xlsx Monte uma tabela comparando as seguintes métricas trimestrais de três empresas de energia: [inserir dados fictícios]. Inclua linha de variação trimestral e destaque em vermelho os indicadores que pioraram mais de 10%."`

Aguardar.

> "Planilha com formatação condicional, pronta. Sem precisar abrir o Excel antes."

Demo 3: skill pdf (rápida, 1 minuto)

> "Tem também a skill de PDF, que faz merge de documentos, extrai tabelas de PDFs escaneados e cria PDFs a partir de conteúdo. Para quem trabalha com releases que chegam como PDF e precisam ser extraídos, é a skill mais útil da lista."

**[0:32 a 0:40] Quando skills prontas bastam e quando criar a sua**

> "Skills prontas cobrem saídas estruturadas de documentos, tabelas e pesquisa. São suficientes para a maioria dos casos de uso de formatação. Quando você precisa criar uma skill é quando o processo é específico do seu trabalho: um formato de nota que só a Oceana usa, um checklist de due diligence do jeito que vocês estruturam internamente, uma análise de valuation que segue a metodologia de vocês. Aí entra o /skill-creator, que é o próximo bloco."

**Dica para o nível básico:**
> "Se você nunca usou skills antes, comece instalando a skill docx e peça a ela um documento simples, uma ata de reunião ou um e-mail formal. Veja o que ela entrega. Só depois de um teste assim você vai ter clareza sobre o que quer criar no /skill-creator."

**Desafio opcional para o nível avançado:**
> "Para quem já está confortável: combine duas skills em sequência. Primeiro use a skill pdf para extrair o conteúdo de um release. Depois use o resultado como input para a skill docx gerar uma nota formatada. Tudo isso dentro de uma mesma sessão."

---

## BLOCO 3: /skill-creator: criar uma skill ao vivo (0:40 a 1:00)

### Objetivo
Mostrar ao vivo o processo completo de criação de uma skill com /skill-creator, do zero até o primeiro teste. Este bloco é o mais denso do módulo: o facilitador demonstra e os participantes acompanham no próprio Cowork.

> **Slides:** Seção 8 (continuação).

### Roteiro

**[0:40 a 0:48] Demo ao vivo: criar a skill "Nota de Resultado"**

> "Vou criar ao vivo a skill que mostrei na abertura. Quero que vocês acompanhem no próprio Cowork de vocês. Abram o Cowork agora."

Invocar o /skill-creator ao vivo:

> `"/skill-creator"`

O facilitador descreve a skill em linguagem natural, explicando cada campo enquanto preenche:

> "O /skill-creator faz perguntas para entender o que você quer automatizar. Vou responder ao vivo para vocês verem o processo."

Preencher os campos ao vivo com o time acompanhando:

**Nome da skill:** `nota-de-resultado`

**Descrição (o que a skill faz):**
> "Recebe o texto de um release de resultados trimestrais de uma empresa listada e gera uma nota de análise estruturada em português. A nota deve ter as seguintes seções: Contexto do Trimestre (2 frases), Principais Métricas (tabela com receita, EBITDA, lucro líquido, dívida líquida e variação em relação ao trimestre anterior), Destaques Positivos (até 3 pontos), Pontos de Atenção (até 2 pontos) e Pergunta para a Gestão (1 pergunta direta que um analista faria em call de resultados). Linguagem técnica de análise fundamentalista. Formato limpo, sem cores, pronto para uso interno."

Aguardar o /skill-creator processar e gerar a skill.

> "Pronto. A skill foi criada. Vou testá-la agora com o mesmo release que usei na abertura."

Testar ao vivo:

> `"/nota-de-resultado [colar o texto do release]"`

Mostrar o resultado.

> "Idêntico ao que mostrei no início da aula. A partir de agora qualquer pessoa com o Cowork pode usar `/nota-de-resultado` e vai ter o mesmo padrão de saída, sem precisar saber como o prompt foi montado por baixo."

**[0:48 a 1:00] Prática guiada: cada participante descreve a skill que quer criar**

> "Agora é a vez de vocês. Não precisam criar a skill do zero aqui: quero que cada um escreva no chat do Teams o caso de uso que quer automatizar. Uma frase é suficiente. Eu comento ao vivo e ajudo a traduzir para a descrição da skill."

Enquanto o time digita no chat:

- Ler 3 ou 4 casos de uso postados.
- Para cada um, comentar: "isso vira uma skill assim" e dar a estrutura da descrição em uma frase.

> "Quem quiser tentar criar ao vivo, abra o /skill-creator e siga o mesmo processo que eu fiz. Dou suporte pelo chat nos próximos 8 minutos."

Acompanhar tentativas pelo chat. Pedir que 1 ou 2 participantes compartilhem a tela para mostrar o setup deles.

> "Antes do intervalo: se você não conseguiu criar agora, não tem problema. Vou distribuir um template de descrição de skill no final da aula. É mais fácil criar com calma depois do que tentar no ritmo da aula."

---

## BLOCO 4: Intervalo (1:00 a 1:10)

> "10 minutos. Voltamos às [hora + 10 min] para o track técnico."

**Nota:** se o Bloco 5 ficar curto demais, use o tempo extra no /skill-creator (Bloco 3) ou no exercício final.

---

## BLOCO 5: Teaser: Claude Code e próximos passos na trilha (1:10 a 1:28)

### Objetivo

Posicionar Claude Code na trilha Diferentia **sem** instalação longa nem MCP no terminal nesta aula. Skills no Cowork continuam sendo o foco principal do Módulo 4.

> **Nota de slides:** este bloco não usa slides. Opcional: tela do terminal com gravação curta ou demo de 3 min do facilitador.

### Roteiro

**[1:10 a 1:16] O que é Claude Code (e o que não é)**

> "Claude Code é o Claude no **terminal**: lê e escreve arquivos no seu computador, executa comandos e evolui projetos em pasta: como um engenheiro ao lado de você. Não substitui o claude.ai nem o Cowork; complementa quando a entrega é **software**, pasta de projeto ou integração local."

> "No Módulo 3 desta trilha vocês viram **MCP no navegador**: Drive, Slack. No Claude Code avançado vocês verão **MCP no terminal**: outro capítulo, outro curso."

**[1:16 a 1:22] Demo curta (opcional, 3 min)**

Se houver tempo e ambiente preparado **antes** da aula, mostrar só o **resultado**: pasta com `index.html` aberta no navegador + uma frase no terminal. **Não** conduzir instalação `npm install` com a turma inteira aqui.

> "Quem quiser fazer isso nas próprias máquinas: curso **Claude Code para Vibe Coders**: quatro aulas, do zero ao link na Vercel, sem precisar saber programar."

**[1:22 a 1:28] Mapa da trilha: distribuir no chat**

> "Resumo do que vem depois desta trilha introdutória:"

| Curso | Para quem | O que leva |
|---|---|---|
| [Cowork demonstrativo](https://github.com/diferentia/curso-cowork) | **Quase todo mundo** após este intro | App desktop: o que muda vs navegador |
| [Workshop Cowork](https://github.com/diferentia/curso-cowork-workshop) | Quem já tem Pro + app instalado | Laboratório 3h (opcional) |
| [Claude Code: Vibe Coders](https://github.com/diferentia/curso-claude-code) | Quem quer **criar e publicar** no terminal | Instalação, prompts, Vercel (opcional) |
| [Claude Code: Avançado](https://github.com/diferentia/curso-claude-code-avancado) | Pós-Vibe ou perfil técnico | Git, hooks, MCP, API (opcional) |
| [cursos-oceana](https://github.com/diferentia/cursos-oceana) | Facilitadores e gestores | Mapa completo |

> "Para a maioria, o próximo passo recomendado é o Cowork demonstrativo: não o workshop ainda. Workshop e Claude Code são opcionais, para quem precisar de prática intensiva ou construir software."

---

## BLOCO 6: Primeira versão da biblioteca de prompts (1:20 a 1:40)

### Roteiro

> "Fechamos o curso com uma entrega concreta: a primeira versão da
> biblioteca de prompts da Oceana.

Cada pessoa, individualmente (5 min):

1. Pense em duas tarefas repetitivas do seu trabalho que você fez
   neste curso ou que acha que poderia resolver com IA.
2. Para cada uma, escreva o prompt que resolveria essa tarefa.
   Use a estrutura: contexto + tarefa + formato da entrega.

Em duplas (5 min):

3. Troquem os prompts. Testem o prompt do colega e deem um feedback:
   funcionou? o que faltou? o que estava claro?

No chat (5 min):

4. Cada dupla posta o prompt mais forte que testaram: o que produziu
   o resultado mais útil.

O facilitador coleta tudo e centraliza na biblioteca compartilhada.

### Template de registro para a biblioteca

| Campo | Exemplo |
|---|---|
| Nome | Resumo de ata de reunião |
| Caso de uso | Gerar lista de decisões e pendências de uma ata |
| Contexto necessário | Texto da ata colado diretamente no prompt |
| Prompt | [texto completo] |
| Formato de entrega | Lista de decisões + lista de pendências + resumo executivo |
| Testado por | Nome do participante |
| Data | AAAA-MM-DD |
| Observações | Funciona melhor com atas estruturadas; atas muito informais precisam de revisão |

### Nota de facilitação

Abra um documento compartilhado (Notion, Google Docs, ou planilha)
durante a aula e cole os prompts conforme chegam no chat.
Ao final da aula, compartilhe o link com toda a turma.
Esse documento se torna a base da biblioteca: participantes continuam
contribuindo depois do curso.

Exemplos de prompts da Oceana para inspirar a turma: [exemplos-oceana.md](exemplos-oceana.md).

---

## BLOCO 7: Como a Oceana vai usar IA com responsabilidade (1:40 a 1:55)

### Roteiro

> "Antes de encerrar, quero falar sobre como isso funciona dentro da Oceana
>: não como tecnologia, mas como prática de trabalho.

Quatro perguntas que todo time precisa responder antes de escalar o uso de IA:

**1. Quem revisa o que o modelo produziu?**
IA comete erros. Em análise financeira, um número errado tem consequências.
A regra é: quanto maior o impacto da decisão, mais obrigatória é a revisão
humana antes de usar o resultado.

**2. Que dados não entram no Claude?**
Dados de clientes identificados, posição real da carteira, material insider,
relatórios em período de silêncio: nada disso vai para o Claude sem
aprovação formal de compliance. Em dúvida, pergunte antes.

**3. O que fazer quando o modelo erra?**
Documente o erro com o prompt que gerou, o resultado incorreto e o contexto.
Isso alimenta a biblioteca de prompts com o que não funciona: tão valioso
quanto o que funciona.

**4. Como aprovar um novo uso?**
Antes de usar Claude em um processo novo: especialmente se envolver dado
sensível ou comunicação com cliente: passe por: (1) você mesmo testa,
(2) alguém do time revisa, (3) compliance valida se necessário.

Isso não é burocracia: é o que garante que o uso de IA na Oceana vai
crescer de forma sustentável, sem incidentes que travem a adoção."

### Nota de facilitação

Esse bloco não precisa de exercício: é uma conversa. Abra para perguntas.
As dúvidas mais comuns são sobre o que é considerado 'dado sensível' e
sobre como formalizar a aprovação de novos usos. Para ambas, a resposta
padrão é: alinhar com compliance e TI antes, não depois.

---

## BLOCO 8: Exercício prático, missão final e encerramento da trilha (1:55 a 2:00)

> Se o tempo apertar, encurte este bloco e preserve os Blocos 6 e 7.

### Exercício ao vivo (4 minutos)

> "Último exercício da trilha. Cada um no próprio Cowork. Tem duas opções: quem criou uma skill hoje, teste ela com um dado real do trabalho de vocês e poste o resultado no chat. Quem não criou a skill, use uma skill pronta (docx, xlsx ou pdf) para resolver algo concreto que vocês tinham pendente."

Aguardar. Comentar 2 ou 3 resultados publicados no chat ao vivo.

### Missão final (opcional)

> "Não tem missão obrigatória entre módulos porque este é o último. Mas deixo um desafio para quem quiser: até o final do mês, identifique o processo mais repetitivo do seu trabalho que ainda não foi coberto pela trilha e tente descrevê-lo como uma skill usando o /skill-creator. Se travar, me manda. Vamos resolver juntos."

### Encerramento da trilha (4 minutos)

> "Quatro módulos. Oito horas. Vou fazer um recap rápido do que a trilha cobriu:"

> "Módulo 1 a 4: base no navegador e Skills no Cowork. **Próximo passo recomendado para quase todos:** Cowork demonstrativo: ver o app desktop ao vivo. Workshop Cowork e Claude Code são opcionais: links no chat e no repositório cursos-oceana."

> "O que não muda: a qualidade do output vai continuar sendo proporcional à qualidade do contexto que vocês fornecem. Tudo que aprendemos sobre prompt nesses quatro módulos continua valendo. Skills e automações reduzem o esforço de repetição, mas não substituem o julgamento analítico de vocês. O Claude é um acelerador, não um substituto."

> "Vou distribuir no chat o material de referência da aula agora. Alguma pergunta antes de encerrar?"

Aguardar 2 minutos para perguntas finais.

> "Obrigado a todos. Foi um prazer passar essas horas com a equipe da Oceana. Estou à disposição para dúvidas por e-mail ou WhatsApp."

---

## O que NÃO entra nessa aula

Este é o último módulo da trilha. Mas alguns temas ficam além do escopo da trilha e podem gerar dúvidas:

| Tema | Onde buscar |
|---|---|
| App desktop (demonstração) | [Cowork demonstrativo](https://github.com/diferentia/curso-cowork) |
| Prática Cowork com Pro | [Workshop Cowork](https://github.com/diferentia/curso-cowork-workshop) |
| Instalação completa e publicação (Vercel) | [Vibe Coders](https://github.com/diferentia/curso-claude-code) |
| Git, slash commands, hooks, MCP no terminal | [Avançado](https://github.com/diferentia/curso-claude-code-avancado) |
| Deploys de agentes em produção | [Avançado: M4](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-04-api-e-agent-sdk.md) |
| Integração com sistemas legados da Oceana | Projeto específico de TI + curso Avançado |
| Fine-tuning de modelos | Fora do escopo do claude.ai (requer API) |
| Computer use automatizado em produção | Claude Computer Use API (beta) |

---

## Material de apoio para distribuir após a aula

- Link: https://claude.ai
- Claude Cowork: https://claude.ai/download
- Documentação de Skills: https://support.claude.com (buscar "skills")
- Claude Code: https://claude.ai/code
- Documentação do Claude Code: https://docs.anthropic.com/claude-code
- Trilha Diferentia: https://github.com/diferentia/cursos-oceana
- Cowork demonstrativo: https://github.com/diferentia/curso-cowork
- Workshop Cowork: https://github.com/diferentia/curso-cowork-workshop
- Claude Code: Vibe Coders: https://github.com/diferentia/curso-claude-code
- Claude Code: Avançado: https://github.com/diferentia/curso-claude-code-avancado
- Template de descrição de skill: incluído abaixo
- Exemplos específicos Oceana: [exemplos-oceana.md](exemplos-oceana.md)
- Apresentação usada: "Aprendendo Claude, do básico ao intermediário" (Seção 8)

### Template de descrição de skill para usar no /skill-creator

```
Nome da skill: [verbo + substantivo, ex: analisa-resultado, gera-nota, formata-ata]

O que ela faz: [1 frase]

O que ela recebe como input: [descreva o que o usuário vai colar ou digitar]

O que ela entrega como output: [descreva o formato da saída: tabela, texto, documento, etc.]

Seções ou estrutura obrigatória: [liste os campos que sempre precisam aparecer]

Tom e linguagem: [ex: técnico de análise fundamentalista, linguagem executiva, português formal]

O que ela NÃO deve fazer: [opcional, mas útil para evitar saídas genéricas]
```

---

## Notas para o facilitador

**Adaptações para o formato online (Teams ou Meet)**

- Câmera ligada sempre que possível. No track técnico, câmera do facilitador ligada para mostrar reações às tentativas do time.
- Use o chat como canal paralelo ativo durante todo o Bloco 5. Participantes que não estão no track técnico podem continuar tentando criar skills no Cowork enquanto acompanham.
- Tela compartilhada com duas janelas pré-abertas: Claude Cowork (com skill demo pré-criada) e terminal com Claude Code instalado. Alternar entre elas de acordo com o bloco.
- Compartilhe os prompts longos pelo chat para que o time possa copiar e acompanhar.

**Sobre o Bloco 3 (prática de /skill-creator)**

- O /skill-creator exige que o participante tenha clareza sobre o que quer automatizar. Muitos vão travar por não saber o que descrever. A abordagem certa é pedir que descrevam o processo repetitivo antes de tentar criar a skill. Pergunta útil: "o que você faz toda semana que tem sempre o mesmo formato de saída?"
- Se o tempo estiver apertado no Bloco 3, priorize o facilitador terminar a skill demo ao vivo e distribuir o template. A criação individual pode acontecer depois da aula com o template como guia.

**Sobre o track técnico (Bloco 5)**

- Se nenhum participante tiver interesse no track técnico, substitua o Bloco 5 por uma sessão de aprofundamento em /skill-creator com casos de uso mais complexos: skills encadeadas, skills que geram documentos Word ou planilhas, ou skills com lógica condicional.
- O track técnico não exige que o facilitador seja expert em Claude Code. O papel do facilitador é mostrar as possibilidades e responder o que Claude Code consegue ou não fazer. Dúvidas técnicas aprofundadas podem ser encaminhadas para a documentação.
- Se um participante do track técnico fizer uma pergunta que vai além do escopo da aula (como integração com sistemas de gestão de fundos específicos), anote e ofereça um follow-up separado. Não tente resolver ao vivo.

**Sobre o encerramento da trilha**

- O encerramento tem um peso diferente dos módulos anteriores porque fecha um ciclo. Vale pausar um momento antes do recap e reconhecer o esforço do time em participar de quatro módulos.
- O recap dos quatro módulos não é um resumo de conteúdo: é uma âncora de progresso. O objetivo é que cada participante saia com clareza do que aprendeu em cada etapa.
- Se restar tempo, pergunte: "qual foi o recurso que mudou mais a sua rotina até agora?" As respostas são úteis como insumo para a Diferentia adaptar os módulos para futuras trilhas.

**Velocidade e calibração de nível**

- O time tem 50% no nível intermediário. O Bloco 2 está calibrado para esse perfil.
- Power users (Rafael, Marcelo, Gabriel, Thiago) vão querer ir mais fundo no track técnico. O Bloco 5 está estruturado exatamente para isso, mas sem deixar o restante do time esperando.
- Iniciantes podem se sentir deslocados no Bloco 5 se o track técnico for a única opção. Por isso o Bloco 5 está estruturado com alternativas: quem não estiver no track técnico continua com o /skill-creator. Comunicar isso claramente antes do intervalo.

**Silêncio nas demos**

- Mesmo padrão da trilha inteira: deixar a resposta aparecer antes de comentar. Contar 10 segundos após o fim da resposta.
- No Bloco 1, após a skill de análise gerar a nota, o silêncio tem função específica: deixar o time sentir a diferença entre o que a skill entregou e o esforço que seria necessário sem ela. Aguardar antes de explicar.

**Perguntas sobre Claude API e integrações corporativas**

- É provável que apareçam perguntas sobre integrar o Claude nos sistemas da Oceana (Bloomberg Terminal, sistemas de gestão de fundos, bases proprietárias). A resposta padrão: "Isso envolve a Claude API e um projeto de integração específico. Está fora do escopo desta trilha, mas posso conversar separadamente sobre o que seria necessário."
- Não prometa integrações que não estão no escopo atual da Diferentia.

**Coleta de feedback da trilha**

- No encerramento, antes de encerrar, peça que todos respondam uma pergunta no chat: "em uma frase, qual foi a mudança mais concreta que a trilha trouxe para o seu trabalho?" Registrar as respostas. São o insumo mais valioso para iterar o produto Diferentia.
