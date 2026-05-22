---
title: Modulo 02 Slash Commands E Hooks
---

# Módulo 2: Slash Commands e Hooks

**Curso:** Claude Code Avançado
**Duração:** 2h
**Formato:** Online síncrono com exercício guiado (todos executam ao vivo)

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Recap do Módulo 1, revisão de missão e objetivo do dia | 5 min |
| Bloco 1 | Comandos embutidos vs slash commands customizados | 15 min |
| Bloco 2 | Criando slash commands em `.claude/commands` | 25 min |
| Bloco 3 | `CLAUDE.md` e memória permanente do projeto | 20 min |
| Bloco 4 | Hooks: o que são, quando usar e como configurar | 25 min |
| Exercício | Um comando + um hook para o trabalho | 25 min |
| Encerramento | Recap e Módulo 3 (MCP) | 5 min |

**Total:** 2h

---

## Pré-requisitos para os participantes

O facilitador deve enviar um e-mail com 24h de antecedência lembrando:

1. Trazer o repositório GitHub criado no Módulo 1 aberto no computador.
2. Ter o Claude Code instalado e funcionando (`claude --version` responde).
3. Ter o projeto do Módulo 1 clonado ou presente na pasta local.
4. Reservar 2 horas sem interrupções.

---

## Abertura (5 min)

### Objetivo

Reconectar a turma com o Módulo 1 e estabelecer o problema que o módulo resolve.

### Roteiro

> "Bom dia, boa tarde. Bem-vindos ao Módulo 2.

> No Módulo 1 vocês configuraram Git e colocaram o projeto no GitHub. Antes de continuar: quem usou o Git durante a semana? Fez ao menos um commit? Digam no chat."

Aguardar 1 a 2 respostas. Comentar brevemente o que aparecer.

> "Perfeito. Quem ainda não usou vai ter outra oportunidade hoje, porque o exercício do Módulo 2 vai no mesmo repositório.

> O tema de hoje é encurtar caminhos. Se vocês usam o Claude Code regularmente, vão notar que repetem certos prompts com frequência: 'revisa o projeto antes de publicar', 'atualiza os dados do painel', 'formata essa ata no padrão da empresa'. Todo prompt que se repete é um candidato a virar um slash command.

> E se vocês já cometeram o engano de commitar um arquivo que não deveria estar no commit, ou esqueceram de abrir o navegador depois de uma mudança, vão entender por que hooks existem.

> Ao final desta aula, vocês vão ter pelo menos um slash command e um `CLAUDE.md` no repositório, e vão entender como configurar um hook simples."

---

## Bloco 1: Comandos embutidos vs slash commands customizados (15 min)

### Objetivo

Apresentar a distinção entre o que o Claude Code já oferece e o que pode ser criado, sem entrar em implementação ainda.

### Roteiro

> "O Claude Code já vem com comandos internos. Vocês viram dois no curso básico: `/help`, que lista os comandos disponíveis, e `/exit`, que encerra a sessão. Existem outros embutidos, como limpar o contexto da conversa e mostrar o custo de tokens da sessão.

> Esses comandos existem para qualquer projeto, em qualquer máquina.

> Slash commands customizados são diferentes: vocês criam eles para o seu projeto específico. O comando `/revisar-deploy` que funciona no painel da Oceana não existe em nenhum outro projeto. Ele é criado por vocês, vive no repositório e funciona para qualquer pessoa que clonar o projeto."

Abrir o terminal e mostrar a estrutura de pastas do projeto.

> "Slash commands customizados ficam em duas localizações possíveis.

> A primeira é dentro do projeto, na pasta `.claude/commands/`. Qualquer arquivo `.md` dentro dessa pasta vira um slash command disponível quando vocês abrem o Claude Code naquele projeto. Se o repositório está no GitHub, o comando fica disponível para todo o time depois de um `git pull`.

> A segunda é global, na pasta `~/.claude/commands/` do usuário. Esses comandos ficam disponíveis em qualquer projeto que vocês abrirem no computador. Útil para comandos pessoais que não são específicos de nenhum projeto.

> Para o exercício de hoje, vamos criar na pasta do projeto. Mais prático para o contexto da Oceana, onde o time vai querer os mesmos atalhos."

### Dica para o nível básico

> "Se a ideia de criar arquivos em `.claude/commands/` parecer técnica demais, peçam ao Claude Code para fazer isso por vocês. 'Cria um slash command chamado revisar-deploy com este conteúdo:' — e descrevem o que o comando deve fazer. Ele cria o arquivo no lugar certo."

---

## Bloco 2: Criando slash commands em `.claude/commands` (25 min)

### Objetivo

Criar dois slash commands ao vivo, do zero, com o Claude Code. A turma acompanha na própria máquina.

### Roteiro

**[0:00 – 0:05] Estrutura de um slash command**

Abrir o Claude Code na pasta do projeto.

> "Um slash command é um arquivo de texto simples em formato Markdown. O nome do arquivo vira o nome do comando. O conteúdo do arquivo vira o prompt que o Claude Code vai executar quando vocês digitam o comando.

> Não tem limite de tamanho. Pode ter listas, contexto, restrições, formato de saída. Tudo que vocês colocariam em um prompt longo, podem colocar no arquivo.

> Vou criar o primeiro ao vivo."

**[0:05 – 0:15] Demo 1: slash command de revisão de deploy**

Digitar no Claude Code:

> `"Cria o arquivo .claude/commands/revisar-deploy.md com o seguinte conteúdo: revise o projeto nesta pasta antes de publicar na Vercel. Confirme que existe index.html na raiz. Liste qualquer link quebrado ou imagem com caminho incorreto. Verifique se há dados sensíveis hardcoded que não deveriam estar no código (senhas, tokens, CPFs fictícios que pareçam reais). Sugira melhorias de acessibilidade em português. Não altere nenhum arquivo até eu aprovar."`

Aguardar a criação do arquivo. Mostrar o conteúdo criado.

> "O arquivo existe agora. Vou testar o comando."

Digitar `/revisar-deploy` no Claude Code.

Aguardar a execução. Mostrar o resultado com a turma.

> "Reparem que o Claude Code executou o checklist completo sem que eu precisasse digitar nada além do comando. Se eu quiser mudar o que ele verifica, edito o arquivo. Se quiser compartilhar com o time, está no repositório depois do próximo push."

**[0:15 – 0:25] Demo 2: slash command específico do contexto financeiro**

> "Agora um comando que faz sentido direto para a rotina da Oceana."

Digitar no Claude Code:

> `"Cria o arquivo .claude/commands/atualizar-painel.md com o seguinte conteúdo: atualize os dados fictícios do painel de carteira conforme a mensagem que eu vou digitar a seguir. Mantenha o visual escuro e a estrutura atual de cards. Altere somente os valores numéricos e os nomes de ativos que eu especificar. Não refatore o layout, não mude cores, não adicione novas seções a menos que eu peça explicitamente. Após a atualização, diga quais campos foram alterados."`

Aguardar a criação. Testar ao vivo:

> `"/atualizar-painel CDI: 10,65%, Ibovespa: 128.450 pontos, Selic: 10,75%, Dólar: 5,18"`

Mostrar o resultado.

> "Um comando, um prompt de contexto, dados específicos. Sem precisar reescrever a instrução toda vez.

> O padrão aqui é: o slash command carrega o contexto e as restrições. Vocês só passam os dados que mudam. Isso é especialmente útil para atualizações recorrentes com formato fixo."

**[0:23 – 0:25] Commit do que foi criado**

> "Antes de continuar, vamos commitar os novos arquivos. No terminal ou pelo Claude Code:"

```bash
git add .
git commit -m "Adiciona slash commands revisar-deploy e atualizar-painel"
git push
```

> "A partir de agora qualquer pessoa que clonar o repositório vai ter esses dois comandos disponíveis. É assim que padronizações de processo escalam para o time sem reunião."

### Dica para o nível avançado

> "Slash commands aceitam argumentos via `$ARGUMENTS`. Se vocês colocarem `$ARGUMENTS` dentro do arquivo `.md`, o Claude Code substitui pelo que vocês digitam depois do nome do comando. Exemplo: `/atualizar-painel PETR4:38,90 VALE3:52,10` — com `$ARGUMENTS` no arquivo, esses valores chegam no prompt automaticamente. Consultem a documentação atual do Claude Code para a sintaxe exata, pois ela pode ter evoluído."

---

## Bloco 3: `CLAUDE.md` e memória permanente do projeto (20 min)

### Objetivo

Mostrar como o `CLAUDE.md` funciona como briefing permanente do projeto, reduzindo o contexto que precisa ser repetido em cada prompt.

### Roteiro

**[0:00 – 0:07] O problema que o `CLAUDE.md` resolve**

> "Existe uma coisa que vocês provavelmente repetem em vários prompts: explicar o que é o projeto. 'Este projeto é um painel de indicadores para a Oceana, usa HTML estático, não tem backend, os dados são fictícios.' Toda vez que abrem uma nova sessão, o Claude Code não lembra disso.

> O `CLAUDE.md` resolve isso. É um arquivo na raiz do projeto que o Claude Code lê automaticamente toda vez que vocês abrem uma sessão naquela pasta. Tudo que está ali fica disponível como contexto sem precisar repetir no prompt.

> A metáfora prática: o `CLAUDE.md` é o briefing que vocês dariam a um novo estagiário no primeiro dia — quem somos, como trabalhamos, o que não se faz aqui. Diferente do estagiário, o Claude Code lê esse briefing toda vez que a sessão começa."

**[0:07 – 0:17] Demo ao vivo: criar o `CLAUDE.md` do projeto**

Abrir o Claude Code no projeto.

> "Vou criar o `CLAUDE.md` ao vivo, explicando cada parte enquanto escrevo."

Digitar no Claude Code:

> `"Cria um arquivo CLAUDE.md na raiz do projeto com o seguinte conteúdo. Título: contexto do projeto. Seções: (1) O que é este projeto — painel de indicadores financeiros fictícios para demonstração interna, público-alvo são analistas de fundos; (2) Stack técnica — HTML, CSS e JavaScript vanilla, sem frameworks, sem backend, sem banco de dados; (3) Linguagem — todo o conteúdo e toda a comunicação em português formal; (4) Dados — todos os valores são fictícios e servem só para demonstração. Nunca usar tickers reais de ações sem deixar claro que são dados de exemplo; (5) Antes de qualquer deploy — confirmar que existe index.html na raiz e que não há credenciais no código; (6) O que não fazer — não criar backend, não adicionar login, não conectar a APIs externas a menos que eu peça explicitamente."`

Aguardar a criação. Mostrar o arquivo gerado.

> "Agora vou testar a diferença."

Abrir uma nova sessão no Claude Code (Ctrl+C e `claude` de novo).

Digitar sem qualquer contexto:

> `"Qual é a stack deste projeto e quem é o público-alvo?"`

Aguardar a resposta.

> "Ele respondeu com base no `CLAUDE.md` sem que eu precisasse explicar nada. Isso é o que muda: vocês configuram o contexto uma vez, e ele fica disponível em todas as sessões daquele projeto."

**[0:17 – 0:20] A diferença entre `CLAUDE.md` e slash commands**

> "Existe uma distinção clara entre os dois.

> O `CLAUDE.md` é para contexto estável: o que o projeto é, como funciona, o que nunca deve ser feito. É o fundo permanente de toda conversa naquele projeto.

> Os slash commands são para tarefas repetíveis: revisar antes do deploy, atualizar dados, formatar um relatório. São ações que vocês disparam quando precisam.

> Em conjunto, eles eliminam a maior parte do prompt boilerplate que vocês repetem toda semana."

Commitar o `CLAUDE.md`:

```bash
git add CLAUDE.md
git commit -m "Adiciona CLAUDE.md com contexto do projeto"
git push
```

---

## Bloco 4: Hooks — o que são, quando usar e como configurar (25 min)

### Objetivo

Apresentar hooks de forma honesta: o que resolvem, quando valem a pena e como configurar um exemplo simples sem travar a turma em configuração técnica.

### Roteiro

**[0:00 – 0:08] O que é um hook e quando faz sentido**

> "Hook significa 'gancho'. Em desenvolvimento de software, hooks são eventos que disparam uma ação automaticamente. No Claude Code, vocês podem configurar ações que rodam antes ou depois de certas operações — como escrever um arquivo, executar um comando no terminal ou fazer um commit.

> Dois casos de uso que fazem sentido imediato para o contexto de vocês:

> O primeiro: depois que o Claude Code escreve ou modifica um arquivo HTML, um hook pode lembrar automaticamente que é necessário abrir o navegador para conferir. Parece simples, mas quem já esqueceu de testar depois de uma mudança sabe que funciona.

> O segundo: antes de um commit, um hook pode verificar se existe algum arquivo `.env` na staging area — impedindo que credenciais sejam enviadas para o GitHub por acidente.

> Hooks mais complexos podem rodar linters, validadores de HTML ou scripts de checagem. Mas a regra prática é: comecem com hooks informativos, não bloqueantes. Um hook que manda uma mensagem de aviso tem custo de configuração baixo e benefício real. Um hook que bloqueia o fluxo quando há falso positivo frustra mais do que ajuda."

**[0:08 – 0:18] Como hooks são configurados**

> "Hooks ficam em `.claude/settings.json` dentro do projeto, ou em `~/.claude/settings.json` para configurações globais do usuário. A sintaxe exata pode variar conforme a versão do Claude Code — verifiquem a documentação atual em docs.anthropic.com antes de implementar em produção."

Mostrar a estrutura conceitual na tela:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Arquivo modificado. Abra o navegador para conferir.'"
          }
        ]
      }
    ]
  }
}
```

> "O que esse hook faz: toda vez que o Claude Code usa a ferramenta `Write` — que é quando ele cria ou edita um arquivo —, ele roda um comando no terminal. No exemplo, o comando é um `echo` simples que imprime uma mensagem. Podia ser um validador de HTML, um script de lint ou qualquer coisa executável no terminal.

> Os eventos mais úteis são `PostToolUse`, que roda depois que o Claude Code usa uma ferramenta, e `PreToolUse`, que roda antes. Existe também `Notification`, para enviar alertas."

**[0:18 – 0:25] Demo ao vivo: criar e testar um hook informativo**

Abrir o Claude Code no projeto.

> `"Cria o arquivo .claude/settings.json com um hook PostToolUse que, após qualquer operação Write em arquivos .html, exibe no chat a mensagem: 'Arquivo HTML modificado. Lembre de testar no navegador antes do próximo commit.' Use o tipo command com echo."`

Aguardar a criação. Abrir o arquivo e mostrar o conteúdo.

> "Agora vou testar. Vou pedir uma mudança pequena num arquivo HTML."

Digitar no Claude Code:

> `"Adiciona um rodapé simples com o texto 'Dados fictícios para demonstração' no index.html."`

Aguardar a execução. Mostrar a mensagem do hook aparecendo no terminal.

> "Reparem: depois que o arquivo foi modificado, o hook disparou e a mensagem apareceu. Sem que eu tivesse pedido. É um lembrete automático que funciona para qualquer pessoa que trabalhar nesse projeto com o mesmo settings.json.

> Se vocês quiserem que o hook rode um validador de HTML em vez de um echo, é só trocar o comando. O conceito é o mesmo."

**[0:23 – 0:25] Quando não usar hooks**

> "Uma nota importante: hooks mal configurados podem travar o fluxo de trabalho. Se um hook bloqueante falhar por qualquer motivo — script que não existe, path errado, dependência faltando — o Claude Code pode não conseguir executar certas operações.

> A orientação prática: comecem com `echo` para validar que o hook está funcionando. Só depois substituam por scripts mais elaborados. E sempre tenham um plano para desativar o hook rapidamente se ele causar problemas."

### Nota de facilitação

Se hooks falharem na turma por diferença de sistema operacional ou versão do Claude Code, não pare a aula para depurar individualmente. Oriente os afetados a focar nos slash commands e no `CLAUDE.md` no exercício, e a retomar hooks depois com o material de apoio. Os dois primeiros já entregam valor imediato.

---

## Exercício: Um comando + um hook (25 min)

### Objetivo

Cada participante sai do exercício com pelo menos um slash command funcional e um `CLAUDE.md` no repositório. O hook é desafiante — quem conseguir, ótimo; quem não conseguir, entrega os dois primeiros.

### Instrução para o facilitador

Este exercício é mais aberto do que os módulos anteriores. A turma tem contexto diferente de projetos. O papel do facilitador é ajudar a traduzir o caso de uso de cada pessoa em instrução para o Claude Code, não fazer por eles.

### Roteiro do exercício

> "Nos próximos 25 minutos, cada um vai criar três coisas no próprio projeto:

> **Entregável 1: Um slash command que vocês realmente usariam (10 minutos)**

> Pensem em uma tarefa que repetem com frequência no trabalho e que poderia virar um comando. Não precisa ser técnica. 'Toda semana eu monto uma ata de reunião no mesmo formato', 'sempre que vou publicar eu verifico as mesmas coisas', 'frequentemente preciso formatar um relatório seguindo a estrutura da Oceana.'

> Antes de criar, escrevam no chat em uma frase qual é o caso de uso. Vou dar feedback rápido para cada um antes de executar."

Aguardar 2 minutos de escrita. Comentar 3 a 4 casos de uso no chat, sugerindo ajustes na instrução quando necessário.

> "Agora criem o slash command pelo Claude Code: 'Cria um slash command chamado [nome] que faz o seguinte: [descrição do que o comando deve fazer].' O Claude Code cria o arquivo no lugar certo."

Aguardar 5 a 7 minutos de execução. Pedir que testem com `/nome-do-comando`.

> "**Entregável 2: Um `CLAUDE.md` com pelo menos 5 linhas (7 minutos)**

> Se já criaram um `CLAUDE.md` durante a aula, revise e adicione pelo menos uma seção que não estava lá. Se ainda não criaram, criem agora com:

> 'Cria um CLAUDE.md para este projeto com: o que é o projeto, a stack técnica, o público-alvo, o que nunca deve ser feito, e o idioma de todas as respostas.'

> Quanto mais específico o `CLAUDE.md`, mais útil. Mencionem nomes reais de empresas ou setores que cobrem, convenções internas que usam, formatos de relatório que a Oceana adota."

Aguardar 5 minutos.

> "**Entregável 3 (opcional): Um hook simples (8 minutos)**

> Para quem terminou os dois primeiros: criem um hook informativo. O mais simples é o echo após Write que mostrei. Se quiserem ir além, peçam ao Claude Code: 'Configura um hook PostToolUse que após edições em arquivos .html executa um validador HTML simples ou exibe uma mensagem de aviso.'

> Quem travar no hook entrega só os dois primeiros. Isso já é o núcleo do módulo."

> "**Passo final: commit e push (3 minutos)**

> Commitam o que criaram:

> `git add .`
> `git commit -m 'Adiciona slash commands, CLAUDE.md e hook'`
> `git push`

> Postem no chat o link do commit no GitHub para eu ver o que foi criado."

### Resultado esperado

Repositório com `.claude/commands/` contendo pelo menos um arquivo `.md`, `CLAUDE.md` na raiz com pelo menos 5 linhas, e opcionalmente `.claude/settings.json` com um hook configurado.

---

## Encerramento (5 min)

### Roteiro

> "Recapitulando o que fizemos hoje:

> Entendemos a diferença entre comandos embutidos e customizados. Criamos slash commands que viram atalhos para tarefas repetíveis. Configuramos o `CLAUDE.md` para que o Claude Code já saiba o contexto do projeto sem precisar repetir. E vimos como hooks permitem automatizar ações antes e depois de operações do Claude Code.

> O que é mais valioso de tudo isso: está no repositório. Qualquer pessoa do time que clonar o projeto a partir de agora tem os mesmos atalhos, o mesmo contexto e as mesmas regras automaticamente. Sem documentação extra, sem reunião de alinhamento.

> Na próxima aula: MCP no terminal. Vocês vão conectar o Claude Code a fontes de dados externas — uma pasta de arquivos CSV, um banco de desenvolvimento read-only, Google Drive — diretamente pelo terminal. É o módulo que conecta o que vocês constroem ao dado real da Oceana.

> Tragam o repositório desta aula e pensem em uma fonte de dados que gostariam de acessar a partir do Claude Code: uma planilha de posição, um CSV de releases, um banco de dev. Não precisa ser dado real — pode ser fictício com a estrutura real."

---

## O que NÃO entra neste módulo

Quando alguém perguntar sobre os temas abaixo, anote e redirecione:

| Tema | Onde |
|---|---|
| Git init e primeiro repositório | Módulo 1 deste curso |
| MCP servers no terminal | Módulo 3 deste curso |
| API Anthropic e Agent SDK | Módulo 4 (opcional) |
| Skills do Cowork e `/skill-creator` | [Introdutório — Módulo 4](https://github.com/diferentia/curso-claude-introdutorio/blob/main/modulo-04-skills-automacoes.md) |
| Deploy na Vercel | [Vibe Coders — Módulo 4](https://github.com/diferentia/curso-claude-code/blob/main/modulo-04-iterando-e-publicando.md) |

---

## Material de apoio para distribuir após a aula

- Documentação Claude Code — slash commands e hooks: https://docs.anthropic.com/claude-code
- Especificação de hooks (tipos e eventos): https://docs.anthropic.com/claude-code
- Curso básico — primeiros comandos `/help` e `/exit`: [Módulo 2](https://github.com/diferentia/curso-claude-code/blob/main/modulo-02-instalacao-e-primeiros-passos.md)

### Template de slash command (copiar e adaptar)

```markdown
# Nome do comando (título opcional, não obrigatório)

[Descrição do contexto que o Claude Code deve assumir ao executar este comando]

[Lista do que o comando deve fazer, em ordem:]
1. [Passo ou verificação 1]
2. [Passo ou verificação 2]
3. [Passo ou verificação 3]

[Formato do resultado: tabela, lista, texto livre, documento]

[Restrições: o que não deve ser alterado, o que não deve ser feito]
```

### Exemplo de `CLAUDE.md` para projeto financeiro

```markdown
# Contexto do projeto

## O que é
Painel de indicadores financeiros fictícios para demonstração interna.
Público: analistas de fundos de renda variável da Oceana Gestora.

## Stack
HTML, CSS e JavaScript vanilla. Sem framework, sem backend, sem banco de dados.

## Linguagem
Todo o conteúdo e toda comunicação em português formal.

## Dados
Todos os valores são fictícios. Nunca usar tickers reais sem deixar explícito
que são dados de exemplo.

## Antes de qualquer deploy
Confirmar que existe index.html na raiz. Verificar que não há credenciais
ou tokens no código.

## O que não fazer
Não criar backend. Não adicionar login. Não conectar a APIs externas
a menos que seja pedido explicitamente.
```

---

## Notas para o facilitador

**Preparação obrigatória antes da aula**

- Ter o projeto do Módulo 1 com Git configurado e repositório no GitHub.
- Criar a pasta `.claude/commands/` no projeto antes da aula para mostrar a estrutura sem depender de erro de digitação ao vivo.
- Verificar na documentação atual do Claude Code se a sintaxe de hooks mudou desde que este roteiro foi escrito. Hooks são o recurso com maior chance de variação entre versões.
- Ter um exemplo de `CLAUDE.md` pronto para mostrar como referência, diferente do que vai criar ao vivo.

**Sobre o ritmo da turma**

- Os blocos de slash commands e `CLAUDE.md` costumam fluir bem. Hooks são onde a turma trava.
- Se o Bloco 4 estiver consumindo mais tempo do que o previsto, comprima a parte de configuração e foque no conceito. O exercício pode ser feito só com slash commands e `CLAUDE.md` — já é o núcleo.
- Para turmas mistas, perfis analíticos tendem a ter casos de uso muito claros para slash commands (formatos de ata, checklist de publicação). Perfis técnicos querem explorar hooks. Use isso a favor para calibrar o nível durante o exercício.

**Sobre o exercício**

- O passo de pedir que escrevam o caso de uso no chat antes de criar o comando é importante. Evita que a turma crie algo genérico que não vão usar. O facilitador comentando cada caso de uso antes de executar aumenta muito a qualidade do resultado.
- Quem não tiver clareza sobre o caso de uso pode usar: 'Slash command que verifica se o projeto tem index.html na raiz, se os dados fictícios estão comentados com disclaimer e se há algum console.log esquecido no código.' É funcional e serve para qualquer projeto.

**Sobre o silêncio nas demos**

- No Bloco 2, após executar `/revisar-deploy` pela primeira vez, pause antes de comentar. Deixar a turma ler o checklist que aparece. O valor da automação fica claro quando eles veem o resultado sem contexto adicional.
- No Bloco 4, após o hook disparar a mensagem, o mesmo: pause antes de explicar o que aconteceu.

**Perguntas mais comuns**

- "Posso ter mais de um slash command?" Sim. Quantos quiserem. Cada arquivo `.md` na pasta `.claude/commands/` é um comando.
- "O `CLAUDE.md` substitui o contexto que coloco nas instruções do Projeto no claude.ai?" São ferramentas diferentes. O `CLAUDE.md` é para o Claude Code no terminal. As instruções de Projeto no claude.ai são para o navegador/Cowork. Se a empresa usar os dois, faz sentido ter os dois.
- "Hooks funcionam no Windows?" Dependem da disponibilidade dos comandos shell. `echo` funciona. Scripts mais elaborados podem precisar de PowerShell em vez de bash. Verificar na documentação.
