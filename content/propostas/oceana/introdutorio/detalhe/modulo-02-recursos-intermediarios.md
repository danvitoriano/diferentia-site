---
title: Modulo 02 Recursos Intermediarios
---

# Módulo 2: Recursos Intermediários do Claude
**Trilha de IA, Oceana | Duração: 2 horas | Formato: Online síncrono (Teams ou Meet)**

---

## Mapa do material de apresentação

Este roteiro usa como base a apresentação **"Aprendendo Claude, do básico ao intermediário"**.
A distribuição completa por módulo (referência rápida, igual ao Módulo 1):

| Seção da apresentação | Conteúdo | Módulo |
|---|---|---|
| Capa + Conheça a Anthropic | Contexto da empresa, segurança, Claude | 1 |
| IA Reativa vs Agente de IA | Conceito central, Claude como agente | 1 |
| Glossário essencial | Prompt, output, token, modelo, API | 1 |
| 1, Primeiros Passos | Conta, interface, configurações, voz, arquivos | 1 |
| 2, Fundamentos de Prompt | O que é um prompt, bom vs ruim, arquitetura | 1 |
| 3, Casos de Uso | Lista geral, demo de extração de PDF | 1 |
| **4, Recursos Intermediários** | **Análise de imagem, pesquisa web, artefatos, Deep Research** | **2** |
| 5, Conectores (MCP) | Google Drive, conectores disponíveis | 3 |
| 6, App Mobile | iOS e Android | 3 |
| 7, Projetos | Contexto restrito, instruções, arquivos | 3 |
| 8, Skills (Habilidades) | Criação de automações com /skill-creator | 4 |

> **Regra prática:** este módulo cobre só a Seção 4 da apresentação. Se aparecer pergunta sobre Conectores, Projetos ou Skills, anote no chat e responda: "isso entra no Módulo 3 ou 4, guarda a dúvida."

---

## Pré-requisitos para os participantes

Antes da aula, o facilitador deve enviar um e-mail (24h antes) lembrando:

1. Estar com conta no claude.ai ativa (idealmente plano Pro, porque Deep Research e artefatos têm experiência melhor lá).
2. Ter à mão um documento real do dia a dia (release de empresa, ata de reunião, relatório setorial, planilha de comparação) para usar nos exercícios.
3. Ter o claude.ai aberto e a câmera ligada se possível.
4. Reservar 2h sem interrupções, com fone se estiver em sala compartilhada.

---

## Visão geral dos blocos

| Bloco | Tema | Tempo | Slides |
|---|---|---|---|
| 1 | Abertura com demo de artefato e recap do Módulo 1 | 0:00 a 0:15 | nenhum |
| 2 | Análise de imagem + Pesquisa na web | 0:15 a 0:45 | Seção 4 (parte 1 e 2) |
| 3 | Artefatos, conceito e primeira demo | 0:45 a 1:00 | Seção 4 (parte 3) |
| 4 | Intervalo | 1:00 a 1:10 | sem slides |
| 5 | Artefatos avançados + Deep Research | 1:10 a 1:50 | Seção 4 (parte 3 e 4) |
| 6 | Exercício prático, missão entre módulos e encerramento | 1:50 a 2:00 | sem slides |

---

## BLOCO 1: Abertura com demo de artefato e recap (0:00 a 0:15)

### Objetivo
Repetir a regra do Módulo 1 (demo antes da teoria), agora elevando a barra: mostrar algo que o Claude faz e que provavelmente ninguém da turma viu na aula anterior. O efeito "uau" desse módulo está nos artefatos, então é por aí que se abre.

> **Nota de slides:** este bloco não usa slides. Tela compartilhada direto no claude.ai.

### Roteiro

**[0:00 a 0:03] Boas-vindas e recap rápido**

> "Bom dia a todos. Bem-vindos ao Módulo 2. No Módulo 1 a gente cobriu o básico: conta, interface, fundamentos de prompt e os primeiros casos de uso. Hoje vamos avançar para os quatro recursos que mudam a percepção do que o Claude consegue entregar: análise de imagem, pesquisa na web, artefatos e Deep Research."

**[0:03 a 0:10] Demo de impacto: artefato a partir de um release**

Pegar um release de resultado real de uma empresa do portfólio ou setor de cobertura da área (sem mencionar tese ativa). Subir o PDF no claude.ai e digitar:

> `"Leia esse release e gere um artefato em formato de tabela comparando as principais linhas do P&L deste trimestre vs o mesmo trimestre do ano anterior. Inclua uma coluna com variação percentual e outra com um comentário curto para cada linha. Use formatação visual clara."`

Deixar o artefato gerar na tela. Não falar nada enquanto carrega. Aguardar 10 segundos com a tabela pronta na tela.

> "O que apareceu aqui é um artefato. Vou explicar em detalhe no segundo bloco. Antes, preciso mostrar mais dois recursos que abrem ainda mais o leque do que vocês podem fazer."

**[0:10 a 0:15] Visão geral do módulo**

> "Em 2 horas vamos passar por: análise de imagem (subir um gráfico ou tabela em imagem e o Claude lê), pesquisa na web (ele busca informação atualizada em vez de só usar o que aprendeu no treino), artefatos (o que vocês acabaram de ver, mas com mais profundidade) e Deep Research (pesquisa profunda automatizada). Mantenham um documento real à mão, porque a maioria dos exemplos vocês vão repetir junto comigo."

---

## BLOCO 2: Análise de imagem e pesquisa na web (0:15 a 0:45)

### Objetivo
Dar dois recursos que o time pode usar já hoje, com baixo custo de aprendizado e alto valor imediato. Análise de imagem resolve a leitura rápida de gráficos e tabelas que aparecem em PDFs ou em prints. Pesquisa na web resolve a defasagem de conhecimento do modelo.

> **Slides:** Seção 4, parte 1 (Análise de imagem) e parte 2 (Pesquisa na web).

### Roteiro

**[0:15 a 0:30] Análise de imagem**

Avançar para o slide "Análise de imagem".

> "O Claude consegue ler imagens. Não é só receber a imagem e descrever. Ele entende gráficos, tabelas, screenshots, fotos de slides, manuscritos. Para a Oceana, dois usos são particularmente fortes: ler gráficos de resultados que vêm em PDFs com texto não selecionável, e ler tabelas que vocês recebem em print de WhatsApp, Bloomberg ou apresentação."

Demo 1: ler um gráfico

Subir uma imagem de gráfico de resultados (pode ser um print de relatório trimestral ou um gráfico de séries históricas). Pedir:

> `"Você é um analista de renda variável. Olhe esse gráfico e extraia: (1) qual a variável no eixo Y, (2) qual o período no eixo X, (3) quais são os principais movimentos, (4) qual a leitura mais provável para um analista da Oceana."`

Observar a resposta com a turma.

Demo 2: ler uma tabela em screenshot

Subir um screenshot de tabela de resultados. Pedir:

> `"Extraia essa tabela e devolva em formato markdown, mantendo todas as linhas e colunas. Em seguida, identifique a linha com maior variação percentual e explique em uma frase o que ela representa."`

> "Notem dois usos práticos aqui: extração estruturada de dados não estruturados, e leitura assistida de informação visual. Se vocês já receberam um PDF cuja tabela não dá para copiar, agora vocês sabem o que fazer."

**Dica para o nível básico:**
> "Quem está começando, comece pelo caso mais simples: tire um print de uma tabela em PDF e peça para o Claude transcrever em markdown. Cole o resultado direto numa planilha. Isso resolve metade dos problemas de input manual."

**Desafio opcional para o nível avançado:**
> "Para quem já está confortável: tente subir uma imagem com vários gráficos lado a lado e peça para o Claude correlacionar a leitura entre eles. É aí que o ganho fica claro."

**[0:30 a 0:45] Pesquisa na web**

Avançar para o slide "Pesquisa na web".

> "O Claude tem uma data de corte de conhecimento. Isso significa que, sem ajuda externa, ele não sabe nada que aconteceu depois daquela data. Para resolver isso, ele tem o recurso de pesquisa na web, que pode ser acionado pelo ícone na própria caixa de mensagem."

Mostrar ao vivo a interface, o ícone de pesquisa na web. Ativar.

Demo 3: pesquisa pontual

> `"Pesquise as últimas notícias relevantes sobre [escolher uma empresa listada do portfólio que esteja no noticiário recente]. Liste em ordem de relevância para um analista do mercado financeiro brasileiro, com a data e a fonte de cada notícia. Em seguida, sintetize em 3 pontos o que mudou na narrativa de curto prazo da empresa."`

Observar como o Claude busca, lê os resultados e estrutura a resposta com citações.

> "Reparem que ele sempre indica a fonte. Isso é fundamental: nunca leiam uma resposta de IA com pesquisa na web sem checar pelo menos uma das fontes. A IA pode interpretar mal, e o erro com fonte parece ainda mais confiável."

Demo 4: pesquisa estruturada

> `"Pesquise quais foram as últimas decisões regulatórias relevantes para o setor de cobertura da sua área no último mês (ex.: CVM, ANBIMA ou regulador setorial). Devolva em forma de tabela com: data, tema, decisão, impacto provável para o setor."`

> "Esse tipo de varredura tomaria 1 hora num portal regulatório. Em 30 segundos vocês têm um rascunho para validar."

**Dica para o nível básico:**
> "Se você nunca usou pesquisa na web no Claude, faça uma vez antes do próximo módulo: peça notícias do dia sobre uma empresa que você cobre. Só isso já muda a rotina matinal."

**Limitação importante a mencionar:**
> "Não confiem em valores numéricos retornados por pesquisa na web sem ir na fonte primária. Cotação, lucro, preço alvo: sempre validar. Pesquisa na web serve para mapear o que existe, não para fechar um número."

---

## BLOCO 3: Artefatos, conceito e primeira demo (0:45 a 1:00)

### Objetivo
Apresentar artefatos como categoria. A maioria do time nunca usou ou só usou por acaso. O propósito desse bloco é nomear o recurso, mostrar 1 caso bem feito e preparar para a continuação após o intervalo.

> **Slides:** Seção 4, parte 3 (Artefatos).

### Roteiro

**[0:45 a 0:50] O que é um artefato**

Avançar para o slide "Artefatos".

> "Artefato é um documento que o Claude gera em uma janela separada, ao lado da conversa. Pode ser uma tabela, um documento longo, uma página HTML, um pequeno aplicativo interativo, um código que roda. A diferença para a resposta normal é que o artefato é editável, persistente dentro da conversa e pode ser baixado ou compartilhado. Pensem assim: a resposta de chat é o raciocínio, o artefato é o entregável."

Tipos de artefato que importam para o time:

1. Documento estruturado (one-pager, sumário executivo, ata)
2. Tabela ou planilha pré-formatada
3. Visualização (HTML com gráfico simples ou comparação visual)
4. Mini-app (calculadora, simulador, formulário)

> "Hoje vamos focar nos três primeiros. O quarto entra como bônus no Módulo 4 quando entrarmos em Skills."

**[0:50 a 1:00] Demo de artefato: one-pager de tese**

> `"Você é um analista sênior de renda variável. Com base nos dados do release que eu acabei de subir, gere um artefato em formato de one-pager de tese de investimento. A estrutura deve ser: (1) cabeçalho com nome da empresa e período, (2) síntese em 3 linhas, (3) tabela com 5 KPIs principais e variação trimestral, (4) bloco de pontos positivos do trimestre, (5) bloco de pontos de atenção, (6) próximos catalisadores. Use formatação visual limpa, sem cores berrantes."`

Aguardar o artefato gerar na tela. Mostrar como abrir em tela cheia, editar pedindo modificações via chat (ex: "remova a coluna X", "adicione uma linha com receita líquida"), e fazer download.

> "Reparem que o artefato fica do lado direito. A conversa continua do lado esquerdo. Vocês podem iterar quantas vezes quiserem, pedindo mudanças, e o artefato é regerado."

Encerrar o bloco anunciando o intervalo:

> "Vamos parar 10 minutos. No retorno, mais 3 demos de artefato (tabela, página HTML e comparativo de empresas) e depois Deep Research, que é o recurso mais poderoso do dia. Voltem com o claude.ai aberto e com um documento real à mão."

---

## BLOCO 4: Intervalo (1:00 a 1:10)

> "10 minutos. Voltamos às [hora + 10 min]."

**Nota:** aproveitar o intervalo para responder no privado a quem teve problema com acesso a Pro, com pesquisa na web ou com upload de imagem. Pesquisar quem ficou em silêncio para puxar a interação no segundo tempo.

---

## BLOCO 5: Artefatos avançados e Deep Research (1:10 a 1:50)

### Objetivo
Aprofundar artefatos com 3 casos de uso reais inspirados nas oportunidades do diagnóstico, e em seguida apresentar Deep Research como ferramenta de pesquisa profunda. Este é o bloco mais denso do módulo e onde o ROI da aula se materializa.

> **Slides:** Seção 4, parte 3 (continuação de Artefatos) e parte 4 (Deep Research).

### Roteiro

**[1:10 a 1:30] Três demos de artefato**

Demo A, tabela comparativa (inspirada na oportunidade "Leitor de releases" do diagnóstico, alto impacto, 11 pessoas citaram):

> `"Tenho 3 releases de resultado de empresas do portfólio (vou subir agora). Gere um artefato em formato de tabela comparativa lado a lado, com as seguintes linhas: receita líquida, EBITDA, margem EBITDA, lucro líquido, dívida líquida, alavancagem. Para cada linha, mostre o valor de cada empresa e destaque com cor de fundo a maior e a menor. Adicione uma coluna final com um comentário curto seu sobre o destaque mais relevante."`

> "Olhem o que essa tabela substitui: uma planilha manual que tomaria 30 a 40 minutos para um analista. E vocês ainda têm a leitura crítica embutida na última coluna, que é uma referência para validar."

Demo B, ata estruturada (inspirada na oportunidade "Resumo de reuniões"):

Colar uma transcrição bruta de uma reunião fictícia (ou real anonimizada). Pedir:

> `"Você é um analista que participou desta reunião com o CFO de uma empresa do portfólio. Gere um artefato em formato de ata estruturada com: (1) contexto e participantes, (2) tópicos discutidos com bullet curto para cada, (3) decisões tomadas, (4) ações com responsável e prazo, (5) perguntas que ficaram em aberto, (6) impressão geral do tom da reunião. Mantenha a ata em 1 página, formatação limpa."`

> "Esse formato é reutilizável. Vocês podem salvar como template e usar todo dia."

Demo C, página HTML de visualização (uso power):

> `"Gere um artefato em HTML que mostre uma página de uma página, com um título 'Snapshot diário de carteira', um quadro grande no topo com 4 KPIs (rentabilidade do dia, rentabilidade do mês, maior alta, maior baixa), uma tabela abaixo listando 10 posições com colunas (ativo, peso, retorno do dia), e ao final uma seção de notas com 3 bullets de comentário. Use design clean, paleta escura, tipografia sem-serif. Os dados podem ser fictícios."`

> "Esse é o tipo de artefato que vira protótipo. Quando o Rafael, o Marcelo ou o Gabriel quiserem evoluir uma ideia, podem partir desse rascunho e refinar no Módulo 4."

**Dica para o nível básico:**
> "Não tentem fazer página HTML de cara. Comecem por tabela e ata. Quando essas duas estiverem na rotina, voltem para HTML."

**Desafio opcional para o nível avançado:**
> "Para quem já fez artefato antes: experimentem pedir que o Claude embarque dados de cálculo dentro do artefato HTML, com botões para ordenar e filtrar. Isso vira um mini-app funcional."

**[1:30 a 1:50] Deep Research**

Avançar para o slide "Deep Research".

> "Deep Research é o recurso mais poderoso do dia. Quando vocês ativam Deep Research, o Claude não responde de imediato: ele faz um plano de pesquisa, navega em várias fontes, lê em profundidade e devolve um relatório estruturado com citações. Pode levar de 5 a 20 minutos dependendo da complexidade. É a ferramenta certa para perguntas que normalmente levariam meio dia de trabalho de research."

Mostrar ao vivo a ativação de Deep Research na interface.

Demo: análise setorial ou regulatória

> `"Faça uma pesquisa profunda sobre o cenário regulatório do setor de cobertura da sua área no Brasil em 2026. Cubra: (1) decisões recentes do regulador setorial, (2) leilões ou mudanças de marco relevantes, (3) movimentações de M&A no setor nos últimos 12 meses, (4) principais riscos regulatórios identificados por analistas. Devolva em forma de relatório com seções, dados quantitativos onde houver, e citações para cada afirmação."`

> "Notem que ele primeiro mostra o plano de pesquisa. Vocês podem aprovar, ajustar ou refinar o plano antes da execução. Esse controle inicial é o que diferencia de uma pesquisa comum."

Enquanto Deep Research executa em segundo plano, mostrar outros usos:

1. Pesquisa de M&A em um setor específico
2. Levantamento de comparáveis para valuation
3. Síntese de pesquisa setorial cruzando 20+ fontes
4. Histórico de decisões de uma agência reguladora
5. Pesquisa de jurisprudência (para Compliance, ver oportunidade 05 do diagnóstico)

> "Quando o relatório chega, ele vem com fontes numeradas. A prática correta é: leiam a síntese, marquem as afirmações que vão usar, e validem cada uma na fonte citada. Deep Research acelera a coleta e a síntese, não substitui o critério de quem assina a tese."

**Limitação importante:**
> "Deep Research consome bastante quota e tempo. Não use para pergunta simples. A regra de bolso: se a resposta cabe num post de blog, não é Deep Research. Se a resposta cabe num relatório de 5 a 10 páginas, é Deep Research."

---

## BLOCO 6: Exercício prático, missão entre módulos e encerramento (1:50 a 2:00)

### Exercício ao vivo (6 minutos)

> "Vamos fechar com um exercício individual de 6 minutos. Cada um faz no seu Claude. Quem quiser, compartilha o resultado no chat do Teams (ou Meet)."

Pedir para cada participante escolher UMA das tarefas abaixo:

**Opção 1, análise de imagem:**
> "Tire um print de uma tabela ou gráfico que você usou na última semana e peça ao Claude para extrair em markdown ou interpretar como um analista da Oceana faria."

**Opção 2, pesquisa na web:**
> "Peça ao Claude para pesquisar as últimas 3 notícias relevantes sobre uma empresa que você acompanha, e estruturar em tabela com fonte e data."

**Opção 3, artefato:**
> "Pegue um documento real (release, ata, e-mail) e peça ao Claude para gerar um artefato no formato que mais ajude vocês: tabela, ata estruturada ou one-pager."

**Como compartilhar online:**
> "Quem quiser feedback do prompt ou do resultado, copia e cola no chat do Teams. Vou comentar 2 ou 3 antes de fechar."

### Missão entre módulos (opcional, 10 a 15 minutos de esforço)

> "Antes do Módulo 3, gostaria que cada um experimentasse Deep Research pelo menos uma vez. Não precisa ser nada épico. Pode ser uma pergunta que você tinha curiosidade e nunca teve tempo de pesquisar. Tragam o relatório (ou um print) para o início do Módulo 3 e vamos comentar 1 ou 2 em conjunto. Quem fizer, ganha um ponto de carma e a chance de ver o time aprendendo com o seu caso."

> "Sem cobrança formal. É um experimento, não tarefa de casa."

### Encerramento (2 minutos)

> "No Módulo 3 vamos cobrir três temas que mudam ainda mais o jogo: Conectores (Claude lendo Google Drive, Slack, Notion da Oceana direto), App Mobile (usar Claude pelo celular com câmera e voz), e Projetos (contexto persistente, instruções fixas, conhecimento da empresa carregado). É o módulo que prepara o terreno para automações."

> "Vou compartilhar no chat agora: o roteiro dessa aula, o link para a documentação de Artefatos e o link para a documentação de Deep Research. Alguma pergunta antes de encerrar?"

---

## O que NÃO entra nessa aula (reservado para módulos seguintes)

Quando alguém perguntar sobre esses temas, anote e redirecione:

| Tema | Módulo |
|---|---|
| Conectores (Google Drive, Slack, Notion via MCP) | 3 |
| App Mobile | 3 |
| Projetos (contexto persistente, instruções de projeto) | 3 |
| Skills e automações com /skill-creator | 4 |
| Claude Code e integrações via API | 4 |
| Computer use e automação de tarefas no navegador | 4 |

---

## Material de apoio para distribuir após a aula

- Link: https://claude.ai
- Documentação de Artefatos: https://support.claude.com (buscar "artifacts")
- Documentação de Deep Research: https://support.claude.com (buscar "research")
- Apresentação usada: "Aprendendo Claude, do básico ao intermediário" (Seção 4)
- Documento sugerido para preparar antes do Módulo 3: "Lista de fontes internas da Oceana para mapear conectores" (a montar com o time de TI antes do Módulo 3)

---

## Notas para o facilitador

**Adaptações para o formato online (Teams ou Meet)**

- Câmera ligada sempre que possível, ajuda a captar quem está perdido sem precisar perguntar.
- Use o chat como canal paralelo. Peça que dúvidas curtas vão por lá para não interromper demos longas.
- Tela compartilhada com 2 abas pré-abertas: claude.ai logado e a apresentação. Trocar rápido evita perda de ritmo.
- Compartilhe o link do claude.ai e prompts longos pelo chat para que o time possa copiar e seguir junto.
- Se a turma estiver grande (mais de 10 pessoas), peça que pessoas com perguntas digam o nome antes de falar. Em online é fácil perder quem está pedindo a palavra.

**Sobre exercício em grupo no online**

- Duplas e breakouts no Teams ou Meet consomem 5 a 7 minutos só de logística. Para uma aula de 2h com 6 blocos, não compensa.
- Mantenha exercício individual ao vivo. Cada um trabalha no próprio Claude e compartilha pelo chat. É mais rápido e mais inclusivo, porque ninguém fica esperando o parceiro.
- Se quiser engajar perfis mais avançados, dê um desafio bônus no final do exercício e peça que mostrem em tela.

**Velocidade e calibração de nível**

- O time tem 50% no nível intermediário, então o ritmo desse roteiro está calibrado para eles.
- Nas dicas para nível básico, dê 30 segundos a mais para garantir que o iniciante saiu da aula sabendo o mínimo.
- Nos desafios opcionais para avançado, não gaste tempo de aula explicando: deixe como provocação para que eles testem por conta.
- Power users mapeados no diagnóstico (Rafael Cunha, Marcelo Moraes, Gabriel, Thiago) podem virar multiplicadores. Convide-os a comentar 1 ou 2 prompts depois do exercício se sentir que o ritmo do chat pediu.

**Silêncio nas demos**

- Repete a regra do Módulo 1: deixe a resposta aparecer na tela sem falar por cima. Em online o silêncio incomoda menos que no presencial, use isso a favor.
- Conte 10 segundos depois de a resposta terminar antes de comentar.

**Erros ao vivo**

- Se a pesquisa na web vier com uma data errada ou fonte fraca, use como exemplo prático de validação.
- Se um artefato sair feio ou quebrado, regere ao vivo pedindo ajuste. Isso ensina iteração, que é metade da prática real.

**Tempo apertado**

- Se atrasar mais de 10 minutos, corte a Demo C de HTML (Bloco 5) e mantenha Deep Research, que é mais alto valor.
- Não corte Deep Research por nada. É o recurso de maior diferenciação do módulo.

**Perguntas sobre Conectores e Projetos**

- São as perguntas mais prováveis de aparecer (4 pessoas no diagnóstico citaram governança e auditoria; conectores e projetos são parte da resposta). A resposta padrão: "Isso entra no Módulo 3. Guarda essa dúvida que a gente vai direto nela lá."

**Dúvidas sobre governança e alucinação**

- 4 pessoas marcaram governança como ponto de trava no diagnóstico. Em alguma demo de pesquisa na web ou Deep Research, repita explicitamente: "validar fonte primária antes de usar em decisão." É barato e ressoa direto com a preocupação registrada.
