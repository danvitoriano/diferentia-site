---
title: Modulo 03 Mcp Integracoes
---

# Módulo 3: MCP e Integrações no Terminal

**Curso:** Claude Code Avançado  
**Duração:** 2h  
**Formato:** Online síncrono com exercício guiado  
**Pré-requisitos:** M1 (Git) e M2 (Slash Commands e CLAUDE.md) concluídos

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Recap e diferença MCP web vs terminal | 10 min |
| Bloco 1 | O que é MCP no Claude Code | 15 min |
| Bloco 2 | Configurar um MCP server (demo facilitador) | 30 min |
| Bloco 3 | Segurança, `.env` e o que não conectar | 20 min |
| Bloco 4 | Prompts que usam ferramentas MCP | 15 min |
| Exercício | Uma integração com dado real ou CSV | 25 min |
| Encerramento | Trilha avançada e Módulo 4 opcional | 5 min |

---

## Pré-requisitos (verificar antes de abrir a sala)

- [ ] Participantes com Claude Code instalado e autenticado (verificado no M1)
- [ ] Node.js instalado na máquina de cada participante (`node --version` ≥ 18)
- [ ] Arquivo `dados/posicao_demo.csv` distribuído com antecedência (ou disponível no repositório do curso)
- [ ] Alinhamento com TI: whitelist de MCP servers permitidos na rede corporativa
- [ ] Plano B preparado: exercício funciona sem MCP externo, usando leitura local de CSV
- [ ] `.env.example` sem secrets reais disponível no repositório

---

## Abertura (10 min)

### Roteiro

"Boa tarde. Vamos fechar o núcleo técnico da trilha avançada com o tema que mais une os outros dois módulos: **MCP**.

Quem lembra o que é MCP? [pausa para respostas]

No curso Introdutório vocês conectaram o Google Drive ao claude.ai pelo navegador, no menu de configurações. Arrastaram um arquivo, fizeram perguntas, receberam respostas. Ótimo.

Hoje o conceito é o mesmo. O que muda é o **lugar** onde o servidor roda — e o que ele consegue acessar.

No terminal, com o Claude Code, vocês podem conectar:

- Uma pasta específica do projeto — com controle cirúrgico de quais arquivos o modelo vê
- Um banco de dados **de desenvolvimento** em modo read-only
- Um sistema interno que tem API mas não tem interface gráfica
- Uma fila de arquivos que chega por automação noturna

Isso é diferente de fazer upload de um PDF no claude.ai. É uma **integração persistente** — o modelo sabe onde buscar, toda vez que você abre o projeto.

Antes de começar: uma regra que vale o módulo inteiro. Dados de clientes, posição real, material não público — **fora daqui**. Trabalhamos só com dados fictícios ou aprovados pela sua equipe de compliance. Se alguém tiver dúvida sobre o que pode conectar, a resposta padrão é: perguntar ao TI primeiro.

Dito isso — vamos ver como isso funciona na prática."

---

## Bloco 1: O que é MCP no Claude Code (15 min)

### Roteiro

"**MCP** significa Model Context Protocol. É um padrão aberto que define como um modelo de linguagem chama ferramentas externas.

Pensa assim: o Claude Code, sozinho, sabe editar arquivos, rodar bash e conversar. Com MCP, ele ganha **braços extras** — cada servidor MCP é um braço com uma habilidade específica.

Um braço para ler arquivos de uma pasta.
Um braço para fazer query em um banco.
Um braço para buscar issues no GitHub.
Um braço para consultar uma API de dados.

O modelo não muda. Os braços mudam conforme o projeto.

**Como funciona no Claude Code:**

1. Vocês registram um servidor MCP na configuração — um arquivo que diz: 'para este projeto, existe este servidor, com este comando de inicialização e essas variáveis de ambiente'.

2. Na próxima vez que o Claude Code abre na pasta do projeto, ele carrega os servidores registrados.

3. O modelo enxerga as **ferramentas** que cada servidor expõe — como `read_file`, `list_directory`, `query_database`.

4. Quando vocês fazem um prompt, o modelo decide sozinho quando usar uma ferramenta. Vocês podem forçar isso sendo explícitos no prompt — já vamos ver como.

**Diferença do upload manual:**

Upload manual é pontual. Você sobe o arquivo, faz a pergunta, acabou. Se o arquivo mudar amanhã, você sobe de novo.

MCP é uma conexão. O servidor está sempre disponível enquanto o projeto estiver aberto. Se o arquivo mudar, o modelo lê a versão atual na próxima consulta.

**Onde fica a configuração:**

A documentação do Claude Code descreve dois níveis de configuração de MCP: **nível de usuário** (vale para todos os projetos na máquina) e **nível de projeto** (só para aquele repositório). Para trabalho em equipe, o nível de projeto é o certo — fica versionado no Git junto com o código."

### Perguntas frequentes — Bloco 1

**P: Isso é diferente dos conectores do claude.ai?**
R: Mesmo protocolo, locais diferentes. Os conectores do claude.ai rodam na nuvem da Anthropic, fora da sua rede. Os servidores MCP do Claude Code rodam onde vocês configurarem — local ou na infraestrutura da empresa. Por isso servem para dados que não podem sair da rede.

**P: Todo MCP server precisa de Node?**
R: Não. Existem servidores escritos em Python, Go e outras linguagens. O servidor de filesystem padrão da Anthropic usa Node. Mas o protocolo é agnóstico — o que vale é que o processo consiga se comunicar via stdio ou HTTP.

**P: O modelo usa a ferramenta sempre que pode, ou só quando eu peço?**
R: O modelo decide com base no prompt. Se o contexto deixar claro que há um arquivo para ler, ele provavelmente usa a ferramenta. Se o prompt for ambíguo, pode não usar. A boa prática é ser explícito: 'Use a ferramenta MCP para ler o arquivo X' — já vamos praticar isso no Bloco 4.

---

## Bloco 2: Configurar um MCP server — demo ao vivo (30 min)

### Visão geral

O facilitador demonstra a configuração do `@modelcontextprotocol/server-filesystem` apontando para a pasta `dados/` do projeto de demonstração. Os participantes replicam em suas máquinas. Se o ambiente corporativo bloquear instalação de npm, o facilitador segue com a demo na tela e os participantes fazem o exercício com leitura local (plano B).

### Roteiro

"Vou mostrar a configuração mais simples possível: um servidor que dá ao Claude Code acesso a uma pasta específica do projeto. Nada mais, nada menos.

**Passo 1 — criar a pasta e o arquivo de demonstração**

Todos na pasta do projeto do curso — o repositório que vocês clonaram no M1. No terminal:

```
mkdir -p dados
```

Abram o editor e criem o arquivo `dados/posicao_demo.csv` com este conteúdo:

```
ativo,ticker,peso_percentual,preco_entrada,setor
Petrobras PN,PETR4,18.5,32.40,Energia
Vale ON,VALE3,15.2,68.90,Mineração
Itaú Unibanco PN,ITUB4,12.8,27.50,Financeiro
WEG ON,WEGE3,9.4,42.10,Industrial
Localiza ON,RENT3,8.1,55.30,Consumo
Bradesco PN,BBDC4,7.6,15.80,Financeiro
Ambev ON,ABEV3,6.9,12.40,Consumo
TOTVS ON,TOTS3,6.2,33.70,Tecnologia
Gerdau PN,GGBR4,5.8,21.60,Siderurgia
Caixa livre,-,9.5,-,Caixa
```

Esses dados são fictícios — nomes reais de empresas, mas pesos e preços inventados para fins didáticos.

**Passo 2 — registrar o servidor MCP**

A forma de registrar depende da versão do Claude Code instalada. Vejam na documentação atual em docs.anthropic.com/claude-code — procurem 'MCP configuration'. O formato que mostro aqui é o padrão mais comum:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/caminho/absoluto/para/seu/projeto/dados"
      ]
    }
  }
}
```

Esse bloco vai em um arquivo de configuração do Claude Code — o caminho exato está na documentação. Substituam `/caminho/absoluto/para/seu/projeto/dados` pelo caminho real da pasta `dados/` no computador de vocês.

[facilitador mostra na tela como encontrar o caminho com `pwd` no terminal e como abrir o arquivo de configuração]

**Passo 3 — reiniciar o Claude Code**

Fechem o Claude Code e abram novamente na pasta do projeto:

```
claude
```

Na inicialização, o Claude Code vai mostrar os servidores MCP carregados. Procurem uma linha mencionando `filesystem` na saída de boas-vindas.

**Passo 4 — confirmar que as ferramentas estão disponíveis**

Digitem no prompt do Claude Code:

```
Que ferramentas MCP você tem disponíveis agora?
```

O modelo deve listar as ferramentas do servidor filesystem: `read_file`, `list_directory`, `write_file`, entre outras. A presença delas confirma que a configuração funcionou.

**Passo 5 — primeiro prompt com MCP**

Agora o prompt real:

```
Liste os arquivos na pasta dados/, leia o arquivo posicao_demo.csv
e me diga qual ativo tem o maior peso na carteira fictícia.
Apresente uma tabela com os 5 maiores pesos em ordem decrescente.
```

[facilitador aguarda a execução e mostra a resposta na tela]

Vejam o que aconteceu: o modelo usou a ferramenta `list_directory` para listar a pasta, depois `read_file` para ler o CSV, depois processou os dados. Ele não precisou de upload — ele buscou diretamente.

**Plano B — sem MCP externo**

Se a instalação do servidor npm não funcionou na sua máquina ou foi bloqueada pelo TI: o Claude Code já lê arquivos locais nativamente, sem MCP. O prompt fica assim:

```
Leia o arquivo dados/posicao_demo.csv e me diga qual ativo
tem o maior peso na carteira fictícia.
Apresente uma tabela com os 5 maiores pesos em ordem decrescente.
```

A diferença prática é que o MCP funciona mesmo para arquivos fora da pasta do projeto, e para fontes de dados que não são arquivos — como um banco de dados. Para arquivos dentro do projeto, a leitura nativa já resolve bem."

### Nota de facilitação — Bloco 2

- Teste a configuração completa na sua máquina 24h antes da aula
- Prepare o caminho absoluto da pasta de demonstração escrito num bloco de notas para copiar rapidamente
- Se `npx` travar na primeira execução (fazendo download do pacote), avise a turma que isso é normal e aguarde
- Tenha o CSV salvo em um repositório para que participantes com plano B possam baixar
- Nunca deixe participantes digitarem paths de dados reais durante o exercício

---

## Bloco 3: Segurança e variáveis de ambiente (20 min)

### Roteiro

"Antes de avançar para prompts mais elaborados, precisamos parar aqui e falar sobre o que **não** conectar e como proteger o que você conecta.

**A regra de ouro:** O servidor MCP roda com as credenciais e permissões de quem o configurou. Se você conectar um banco com um usuário que tem `DELETE` e `UPDATE`, o modelo pode usar essas permissões — por acidente ou por um prompt mal escrito.

**Regras não negociáveis:**

| Faça | Nunca faça |
|---|---|
| Crie usuário read-only para qualquer banco | Conectar banco de produção com usuário de escrita |
| Guarde credenciais em `.env` | Commitar senha ou token no Git |
| Rotacione tokens se vazar algum | Colar API key no chat do Claude Code |
| Peça revisão do TI antes de conectar dado real | Instalar servidor MCP desconhecido sem auditar o código |
| Documente quais MCPs o projeto usa no CLAUDE.md | Assumir que 'só vou usar para leitura' é suficiente sem enforcement |

**Variáveis de ambiente na prática:**

Credenciais não ficam no arquivo de configuração do MCP. Ficam em um arquivo `.env` na raiz do projeto — que está no `.gitignore`.

O arquivo de configuração referencia a variável pelo nome:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "${POSTGRES_CONNECTION_STRING}"
      }
    }
  }
}
```

O `.env` contém o valor real:

```
POSTGRES_CONNECTION_STRING=postgresql://usuario_readonly:senha@host-dev:5432/nome_banco
```

O `.env.example` fica no Git com chaves mas sem valores:

```
POSTGRES_CONNECTION_STRING=
```

Assim qualquer pessoa que clonar o repositório sabe que variável precisa, mas o valor não vaza.

**O Claude Code pode ajudar a criar isso:**

```
Crie um .env.example para este projeto com as variáveis necessárias
para conectar o servidor MCP de filesystem e o servidor MCP de postgres.
Não coloque valores reais — só os nomes das variáveis com comentários explicativos.
```

**Para fundos e gestoras — linha clara:**

Dados de clientes, posição real da carteira, material insider, relatórios em período de silêncio: **fora do Claude Code em qualquer configuração**, a menos que haja aprovação formal de compliance e TI. Essa regra vale mesmo para read-only, mesmo para ambiente de desenvolvimento.

O que pode: dados fictícios como o CSV que usamos, dados públicos de mercado com delay, dados agregados e anonimizados aprovados pelo time jurídico."

### Dica nível básico

Se você nunca usou `.env` antes, pense assim: é como uma agenda de contatos que fica no seu bolso e nunca vai para o armário compartilhado. O código sabe que precisa do número de telefone de alguém (variável), você guarda o número na agenda (`.env`), mas a agenda não vai para o repositório público.

### Desafio nível avançado

Configure um servidor MCP de filesystem com **dois escopos diferentes** — um apontando para `dados/publicos/` e outro para `dados/internos/` — e escreva uma instrução no CLAUDE.md que define quando o modelo deve usar cada um. Teste com um prompt que força o modelo a escolher a fonte correta baseado no tipo de dado solicitado.

### Perguntas frequentes — Bloco 3

**P: E se eu trabalhar em um Mac corporativo onde o TI impede a instalação de qualquer npm?**
R: Três caminhos: (1) pedir ao TI para whitelist do pacote específico — a maioria das empresas consegue fazer isso; (2) usar servidores MCP escritos em Python se Python já estiver instalado; (3) trabalhar com leitura nativa do Claude Code para arquivos locais, sem MCP externo. O plano B que fizemos aqui funciona bem para maioria dos casos.

**P: Posso conectar o Slack da empresa como MCP?**
R: Tecnicamente sim, existe servidor MCP para Slack. Mas isso envolve criar um app no workspace do Slack e gerar um token com escopos definidos. Precisa de aprovação do admin do Slack e de TI. Faça o pedido antes, não durante a aula.

**P: Como eu sei se um servidor MCP da internet é seguro?**
R: Verifique o repositório no GitHub: número de estrelas, data do último commit, issues abertas sobre segurança, licença. Leia o código — servidores MCP bem escritos são pequenos e auditáveis. Para ambiente corporativo, toda instalação passa pelo TI antes de entrar em qualquer projeto.

---

## Bloco 4: Prompts que usam ferramentas MCP (15 min)

### Roteiro

"Agora vamos falar de como escrever prompts que aproveitam bem o MCP. Há uma diferença entre o modelo **poder** usar uma ferramenta e ele **usar** a ferramenta.

**Problema comum:** você configurou tudo, o servidor está rodando, mas o modelo responde do conhecimento interno em vez de ler o arquivo. Por quê? Porque o prompt não foi explícito o suficiente.

**Estrutura que funciona:**

```
Contexto: [descreva o que está disponível via MCP]
Tarefa: [o que você quer que o modelo faça]
Entrega: [formato da resposta]
Restrições: [o que o modelo não deve fazer]
```

**Exemplo 1 — análise de carteira:**

```
Contexto: a pasta dados/ contém o arquivo posicao_demo.csv com
a carteira fictícia do projeto.
Use a ferramenta MCP filesystem para ler o arquivo.

Tarefa: calcule o peso total por setor e identifique qual setor
está mais concentrado.

Entrega: tabela com setor, peso total e número de ativos, ordenada
por peso decrescente. Depois da tabela, escreva um parágrafo de
3 linhas sobre o risco de concentração.

Restrições: não escreva nenhum arquivo. Só leitura.
```

**Exemplo 2 — quando o modelo não usa a ferramenta:**

Se o modelo responder do conhecimento geral sem ler o arquivo, seja explícito:

```
Use a ferramenta MCP read_file para abrir dados/posicao_demo.csv.
Depois que ler o arquivo, responda: qual é o segundo maior peso
da carteira e em que setor ele está?
```

Nomear a ferramenta — `read_file`, `list_directory` — força o comportamento. O modelo sabe que tem essa ferramenta e vai usá-la.

**Exemplo 3 — fluxo de múltiplos arquivos:**

```
Use a ferramenta MCP list_directory para listar tudo em dados/.
Depois leia todos os arquivos .csv encontrados.
Consolide o conteúdo em uma tabela única com o nome do arquivo
como coluna adicional.
Entregue a tabela consolidada e diga qual arquivo tem mais linhas.
```

**Boas práticas:**

- Comece sempre com um prompt simples de validação: `Liste os arquivos em dados/`
- Peça uma coisa de cada vez enquanto estiver testando a integração
- Se o modelo errar a leitura, inclua o caminho completo no prompt
- Prefira ler e responder a ler e escrever — escrever via MCP pode sobrescrever arquivos se o prompt não for cuidadoso

**O que não funciona:**

Prompts vagos como 'analise minha carteira' sem indicar onde está o arquivo. O modelo pode inventar dados se não souber onde buscar. Seja específico sobre a fonte — MCP existe justamente para garantir que a resposta vem dos seus dados, não de uma estimativa."

---

## Exercício: Uma integração (25 min)

### Roteiro

"Agora é a vez de vocês. Tempo: 20 minutos de trabalho, 5 minutos para compartilhar.

Escolham **uma das duas opções** dependendo do que funciona na sua máquina hoje:

**Opção A — com MCP configurado:**

1. Confirme que o servidor MCP de filesystem está rodando com `Que ferramentas MCP você tem disponíveis?`
2. Use o arquivo `posicao_demo.csv` ou qualquer outro CSV fictício que vocês tenham
3. Façam **três prompts diferentes** sobre o mesmo arquivo, cada um explorando um ângulo diferente: concentração por setor, ativos acima de determinado peso, ou simulação de uma venda e recálculo dos pesos
4. Identifiquem em qual dos três prompts o modelo usou a ferramenta de forma mais eficiente e por quê

**Opção B — leitura local (sem MCP externo):**

1. Abram `claude` na pasta do projeto
2. Façam o mesmo exercício de três prompts, mas usando leitura nativa (`leia o arquivo dados/posicao_demo.csv`)
3. Comparem a experiência com a Opção A se alguém na sala estiver usando MCP

**O que postar no chat ao final:**

- O que você conectou (ou qual arquivo usou)
- O prompt que gerou o resultado mais útil — escreva o prompt exato
- Uma frase de insight do resultado: o que você aprendeu sobre a carteira fictícia?

Quem usar banco de dados: compartilhem screenshot ou descrição do resultado **sem** dados sensíveis — nunca o conteúdo real da query."

### Resultado esperado

Cada participante sai com:
- Experiência de pelo menos uma integração funcionando (MCP ou leitura local)
- Um prompt estruturado testado e refinado na prática
- Clareza sobre quando usar a ferramenta explicitamente no prompt

### Nota de facilitação — Exercício

- Monitore o chat para identificar quem travou na configuração do MCP e mova para Opção B sem fazer disso um problema
- Circule (via chat ou voz) nos primeiros 5 minutos para garantir que todos têm pelo menos o arquivo CSV disponível
- Se alguém postar resultado com dado real de mercado, peça para remover e lembrar a regra de dados fictícios
- Reserve 2 minutos no final para mostrar um prompt que não funcionou e como você corrigiu — isso normaliza a iteração

---

## Encerramento (5 min)

### Roteiro

"Fechamos o núcleo técnico do Claude Code Avançado.

O que vocês agora sabem fazer:

- M1: rastrear o trabalho com Git, colaborar no GitHub, nunca perder o histórico de uma iteração
- M2: criar atalhos de comando com slash commands, dar memória permanente ao projeto com CLAUDE.md, automatizar checagens com hooks
- M3: conectar fontes de dados ao Claude Code via MCP, proteger credenciais com variáveis de ambiente, escrever prompts que forçam o modelo a usar os dados certos

Esses três módulos juntos descrevem um **fluxo completo de trabalho com IA no terminal**: código versionado, contexto persistente, dados integrados.

**O que vem depois — o Módulo 4 é opcional:**

Para quem precisar conversar com o time de engenharia sobre automatizar esse fluxo em produção — pipelines noturnos, bots internos, CI com revisão automatizada — o Módulo 4 apresenta a API Anthropic e o Claude Agent SDK em nível conceitual. Não é necessário para usar o que aprendemos nos três módulos.

**Na trilha DiferentIA:**

O próximo passo é levar isso para o projeto real de vocês na Oceana. Escolham um caso de uso — o leitor de releases, a análise de carteira, a checagem de atas — e montem a configuração completa: CLAUDE.md com contexto do projeto, slash command para o fluxo principal, e MCP para a fonte de dados relevante. Comecem com dados fictícios, validem com compliance antes de conectar dado real.

Obrigado pela trilha. Continuem evoluindo."

---

## Material de referência para facilitadores

### Checklist de preparação

- [ ] Node ≥ 18 instalado e testado na máquina de apresentação
- [ ] Servidor `@modelcontextprotocol/server-filesystem` instalado e testado
- [ ] Arquivo `dados/posicao_demo.csv` criado com dados fictícios
- [ ] Configuração MCP funcionando na pasta do projeto de demo
- [ ] Plano B testado: leitura nativa de arquivo CSV sem MCP
- [ ] `.env.example` disponível no repositório
- [ ] Alinhamento com TI da Oceana: quais MCPs estão na whitelist

### Template de configuração MCP (filesystem)

Salvar em arquivo de configuração do Claude Code (consultar documentação para caminho atual):

```json
{
  "mcpServers": {
    "dados-projeto": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/caminho/absoluto/para/dados"
      ]
    }
  }
}
```

### Template de .env.example

```
# Configuração MCP — não commitar o .env com valores reais

# Filesystem MCP — não precisa de credencial, só definir o path na configuração
# Ver mcp-config.json para o caminho configurado

# Postgres MCP (somente dev, read-only)
# Exemplo: postgresql://usuario_readonly:senha@host:5432/banco
POSTGRES_CONNECTION_STRING=

# GitHub MCP (opcional, para busca de issues)
# Gerar em github.com/settings/tokens com escopo read:org e repo:read
GITHUB_TOKEN=
```

### Template de entrada no CLAUDE.md para projetos com MCP

```markdown
## Integrações MCP deste projeto

Este projeto usa os seguintes servidores MCP:

- **dados-projeto** (filesystem): acesso à pasta `dados/` com arquivos CSV de demonstração
  - Use para: leitura de posição fictícia, análise de carteira demo
  - Nunca use para: escrever ou modificar arquivos de dados

## Regras de uso de dados

- Trabalhe somente com arquivos em `dados/` que estão marcados como fictícios
- Dados reais de clientes ou posições não entram neste projeto
- Se precisar conectar dado real: aprovação de compliance primeiro
```

### Prompts de validação rápida

Usar no início do exercício para confirmar que o MCP está funcionando:

```
Liste os arquivos disponíveis via MCP filesystem.
```

Se retornar os arquivos da pasta configurada: MCP funcionando.
Se não reconhecer: verificar configuração ou usar plano B.

### Sequência de prompts para exercício completo

**Prompt 1 — exploração básica:**
```
Use a ferramenta MCP para ler dados/posicao_demo.csv.
Me diga quantos ativos tem a carteira e qual é o maior e o menor peso.
```

**Prompt 2 — análise por setor:**
```
Com base no mesmo arquivo, calcule o peso total por setor.
Mostre uma tabela ordenada por peso decrescente.
```

**Prompt 3 — simulação:**
```
Simule a venda de 50% da posição em PETR4.
Recalcule os pesos da carteira após a venda,
mantendo os outros ativos proporcionalmente.
Mostre a carteira antes e depois em colunas paralelas.
```

---

## O que NÃO entra neste módulo

| Tema | Onde |
|---|---|
| Conectores MCP no navegador (Drive UI) | [Introdutório — M3](https://github.com/diferentia/curso-claude-introdutorio/blob/main/modulo-03-conectores-mobile-projetos.md) |
| Claude Agent SDK completo | Módulo 4 (opcional) |
| Deploy e Vercel | [Vibe Coders — M4](https://github.com/diferentia/curso-claude-code/blob/main/modulo-04-iterando-e-publicando.md) |
| Compliance LGPD em escala | Projeto jurídico + TI |
| Fine-tuning ou modelos customizados | Fora da trilha |

---

## Material de apoio

- MCP specification: https://modelcontextprotocol.io
- Claude Code docs — MCP: https://docs.anthropic.com/claude-code
- Lista de servidores oficiais: https://github.com/modelcontextprotocol/servers
- Repositório do curso (avançado): https://github.com/diferentia/curso-claude-code-avancado
- Trilha completa: [introdutório](https://github.com/diferentia/curso-claude-introdutorio) · [vibe coders](https://github.com/diferentia/curso-claude-code) · [avançado](https://github.com/diferentia/curso-claude-code-avancado)
