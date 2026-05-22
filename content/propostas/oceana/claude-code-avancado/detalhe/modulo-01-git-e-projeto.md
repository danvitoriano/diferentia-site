---
title: Modulo 01 Git E Projeto
---

# Módulo 1: Git e Projeto Profissional

**Curso:** Claude Code Avançado
**Duração:** 2h
**Formato:** Online síncrono com exercício guiado (todos executam ao vivo)

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Pré-requisitos, recap do básico, objetivo da trilha avançada | 10 min |
| Bloco 1 | Por que Git além de copiar pasta e Vercel | 15 min |
| Bloco 2 | GitHub: conta, repositório, commit, push | 25 min |
| Bloco 3 | Claude Code como parceiro de Git | 20 min |
| Bloco 4 | Recuperar e clonar em outro ambiente | 15 min |
| Exercício | Subir o projeto do curso básico ao GitHub | 30 min |
| Encerramento | Recap e Módulo 2 | 5 min |

**Total:** 2h

---

## Pré-requisitos para os participantes

O facilitador deve enviar um e-mail com 24h de antecedência lembrando:

1. Ter concluído o Claude Code para Vibe Coders, ou ter o Claude Code instalado (`claude --version` funcionando) com pelo menos um projeto em pasta local.
2. Trazer esse projeto para a aula. Não precisa ser publicado na Vercel, mas precisa existir localmente.
3. Criar uma conta gratuita no GitHub se ainda não tiver: github.com
4. Reservar 2 horas sem interrupções.

> **Nota:** quem não tiver projeto nenhum pode criar um painel simples durante o exercício usando o roteiro do curso básico. Mas vai ficar devendo o exercício central.

---

## Abertura (10 min)

### Objetivo

Calibrar a turma, confirmar pré-requisitos e plantar a pergunta que guia o módulo inteiro.

### Roteiro

> "Bem-vindos ao Claude Code Avançado.

> Este curso assume que vocês já passaram pelo Vibe Coders: instalaram o Claude Code, construíram um projeto e, idealmente, publicaram na Vercel. Se alguém está aqui sem esse histórico mas com Claude Code instalado e um projeto em pasta local, também funciona.

> Antes de começar: no chat, duas respostas rápidas. Quem tem projeto do curso básico pronto aqui na máquina? E quem já tem conta no GitHub?"

Aguardar as respostas. Ajustar o ritmo do exercício com base no que aparece.

> "Nas próximas aulas vamos ver três coisas: Git e GitHub hoje, slash commands e hooks no Módulo 2, MCP no terminal no Módulo 3. Existe um Módulo 4 opcional sobre API e Agent SDK para quem quiser visão de produção com engenharia.

> Hoje o foco é Git. A pergunta que quero que vocês levem para o exercício é: se eu perder meu notebook agora, o que acontece com o projeto que construí?

> No curso básico, a resposta era 'perco tudo ou tenho uma cópia em pendrive'. Ao final dessa aula, a resposta vai ser 'pego um computador qualquer, clono do GitHub e continuo de onde parei'. Isso é o que Git resolve."

---

## Bloco 1: Por que Git além de copiar pasta e Vercel (15 min)

### Objetivo

Conectar o que a turma já sabe (pasta local + Vercel) com o problema que Git resolve. Usar analogia financeira para ancorar o conceito.

> **Nota:** este bloco é intencionalmente curto. A turma aprende Git fazendo, não ouvindo.

### Roteiro

> "No curso básico, vocês aprenderam duas formas de não perder o trabalho: copiar a pasta inteira para um lugar seguro, e publicar na Vercel.

> Isso funciona bem para uma coisa: ter o projeto no ar. Mas resolve só metade do problema.

> Imagine que vocês têm um modelo de valuation no Excel que usam todo dia. Hoje vocês editam uma fórmula e quebram algo que funcionava. O Excel não tem histórico automático, então vocês ficam tentando lembrar o que mudaram. Isso soa familiar?

> Git é a versão desse histórico para qualquer projeto de software. Cada vez que vocês fazem um commit, é como tirar uma foto do projeto naquele momento. Se algo quebrar depois, vocês voltam para a foto anterior."

Fazer uma pausa de 5 segundos antes de continuar.

> "A Vercel continua sendo a ferramenta certa para hospedar o site. O GitHub guarda o código-fonte com todo o histórico de versões. São complementares, não concorrentes.

> A relação é assim: o projeto fica na pasta local do computador de vocês, que é onde vocês editam. O GitHub é o backup inteligente, com histórico. A Vercel lê do GitHub ou do computador para publicar o site.

> Tem mais uma coisa que o Git resolve, que não aparece no curso básico: trabalhar no mesmo projeto em dois computadores diferentes sem copiar pasta. Isso vamos ver no Bloco 4."

### Dica para o nível básico

> "Se vocês nunca ouviram falar em Git antes do curso básico, a única coisa que precisam absorver agora é: commit é uma foto do projeto. Push é enviar essa foto para o GitHub. Pull é buscar a foto mais recente do GitHub. Tudo mais é variação dessas três ações."

---

## Bloco 2: GitHub: conta, repositório, commit, push (25 min)

### Objetivo

Conduzir a criação de repositório e o fluxo de primeiro commit ao vivo. O facilitador demonstra na própria tela; a turma acompanha no chat e replica no exercício depois.

> **Slides:** não há slides. Tela compartilhada com terminal e github.com ao lado.

### Roteiro

**[0:00 a 0:05] Criar o repositório no GitHub**

Abrir github.com na tela compartilhada. Fazer login.

> "Vou criar um repositório novo agora. Repositório é o nome que o GitHub dá para o espaço onde o projeto fica guardado. É como uma pasta no GitHub, com histórico de versões.

> Clico em 'New repository'. Dou um nome para o projeto: vou usar 'painel-demo' por enquanto. Deixo como público ou privado conforme a política de vocês. **Importante:** não marco a opção de criar README nem .gitignore aqui. Vou criar tudo pelo terminal para que vocês vejam o fluxo completo."

Clicar em 'Create repository'. Mostrar a tela que aparece com os comandos sugeridos pelo GitHub.

> "O GitHub já mostra os comandos que precisamos rodar. Vamos executar cada um deles agora."

**[0:05 a 0:15] Fluxo mínimo: init, add, commit, push**

Abrir o terminal na pasta do projeto de demo.

> "Estou na pasta do projeto. Vou rodar os comandos um por vez."

Rodar ao vivo e comentar cada um:

```bash
git init
```

> "Inicializa o Git nesta pasta. Cria uma pasta oculta chamada `.git` que vai guardar todo o histórico. Só precisa fazer isso uma vez por projeto."

```bash
git add .
```

> "O ponto significa 'adiciona tudo que está nesta pasta'. O `git add` é o passo de selecionar o que vai entrar na foto. Se eu quisesse adicionar só um arquivo específico, usaria `git add nome-do-arquivo.html`. Para a primeira vez, `.` funciona bem."

```bash
git commit -m "Primeira versão do projeto"
```

> "O commit é a foto em si. O `-m` é a mensagem que descreve o que mudou. Essa mensagem fica no histórico para sempre: quanto mais descritiva, mais útil quando vocês precisarem entender o que aconteceu em cada momento."

```bash
git branch -M main
```

> "Renomeia o branch principal para 'main', que é o padrão atual. Branch é uma linha de desenvolvimento. Por enquanto só vamos usar a principal."

```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
```

> "Conecta o repositório local ao repositório no GitHub. 'Origin' é o apelido que o Git usa para se referir ao GitHub. Vocês vão substituir esse link pelo link do repositório que criaram."

```bash
git push -u origin main
```

> "Envia os commits para o GitHub. O `-u origin main` define o destino padrão para os próximos pushes: depois disso, `git push` já basta."

Mostrar o repositório no GitHub com os arquivos aparecendo.

> "Pronto. O projeto está no GitHub com histórico. Qualquer mudança que eu fizer e commitar vai aparecer aqui."

**[0:15 a 0:20] Autenticação: o que fazer quando o GitHub pedir login**

> "Na primeira vez que vocês tentarem fazer push, o GitHub vai pedir autenticação. Existem dois caminhos.

> O mais simples é o GitHub CLI. No terminal:"

```bash
gh auth login
```

> "Ele abre o navegador, vocês fazem login com a conta do GitHub e pronto. Se não tiverem o GitHub CLI instalado, podem instalar com `brew install gh` no Mac ou pelo site cli.github.com.

> A alternativa é o Personal Access Token: vocês geram um token nas configurações do GitHub (Settings → Developer settings → Personal access tokens) e usam como senha quando o terminal pedir. Se o terminal não pedir senha, é porque a autenticação já foi configurada antes."

> "Quem estiver usando empresa com SSO no GitHub, vai precisar autorizar o token para a organização depois de gerá-lo. Se aparecer um erro de permissão mesmo com token ativo, é provavelmente isso."

**[0:20 a 0:25] O segundo commit: o fluxo do dia a dia**

> "Vou fazer uma mudança no projeto para mostrar o fluxo que vocês vão repetir toda vez."

Editar um arquivo qualquer (mudar um título, por exemplo). Voltar ao terminal.

```bash
git status
```

> "O `git status` mostra o que mudou desde o último commit. Arquivo modificado aparece em vermelho. Arquivo novo que ainda não foi adicionado também."

```bash
git add .
git commit -m "Ajuste de título na página principal"
git push
```

> "Dessa vez só `git push`, sem o `-u origin main`. Porque já definimos o destino padrão no primeiro push.

> Esse é o fluxo do dia a dia: fazer uma mudança, `git add .`, `git commit -m 'descrição'`, `git push`. Três comandos depois do primeiro setup."

### Nota de facilitação

- Se aparecer `git: command not found` no Windows: instalar o Git for Windows em git-scm.com. No Mac: rodar `xcode-select --install` ou instalar pelo site oficial.
- Se o push falhar com erro de autenticação, resolver com `gh auth login` antes de prosseguir. Não avançar com a turma inteira se metade não conseguir autenticar.
- Empresas com proxy ou firewall corporativo podem bloquear o push. Nesse caso, orientar a usar rede pessoal para autenticar e testar.

---

## Bloco 3: Claude Code como parceiro de Git (20 min)

### Objetivo

Mostrar que a maioria das operações de Git pode ser pedida em português dentro do Claude Code. Isso reduz a barreira de quem tem medo de commitar errado ou perder histórico.

### Roteiro

**[0:00 a 0:07] O que o Claude Code faz pelo Git**

Abrir o Claude Code na pasta do projeto.

> "O Claude Code pode ajudar com Git de três formas: inicializar e configurar o repositório, entender o que mudou, e corrigir erros de push ou merge.

> Vou mostrar as três ao vivo."

**Demo 1: inicializar o repositório com instrução em português**

Ir para uma pasta de projeto limpa (sem Git inicializado).

Digitar no Claude Code:

> `"Inicializa um repositório Git nesta pasta. Cria um .gitignore adequado para projeto HTML estático: ignora node_modules, .env e arquivos de sistema do Mac e Windows. Faz o primeiro commit com a mensagem 'Inicialização do projeto'. Antes de executar, lista o que vai entrar no commit para eu aprovar."`

Aguardar a resposta. Mostrar a lista que o Claude Code apresenta antes de executar.

> "Reparem que pedi para ele listar antes de executar. Isso é importante: antes de commitar, vocês precisam saber o que está entrando. O `.gitignore` que ele criou já protege contra os erros mais comuns."

**Demo 2: entender o que mudou**

Fazer duas ou três edições no projeto. Voltar para o Claude Code.

> `"Explica o que mudou no projeto desde o último commit. Usa git diff se necessário."`

Aguardar a resposta.

> "Ele roda `git status` e `git diff` por vocês, lê as mudanças e explica em português. Para quem não está acostumado a ler diffs, isso é especialmente útil."

**Demo 3: corrigir um erro de push**

Simular um erro de push (rodar `git push` para um repositório sem acesso configurado) ou mostrar uma mensagem de erro real salva anteriormente.

> `"O push falhou com este erro: [colar a mensagem de erro]. Corrige passo a passo."`

> "O Claude Code lê a mensagem de erro, identifica o problema e dá os comandos exatos para resolver. Para erros de autenticação, conflito de branch ou remote incorreto, essa abordagem funciona bem. Copiem o erro, colem, deixem ele diagnosticar."

**[0:15 a 0:20] A regra de ouro: vocês aprovam antes de executar**

> "Uma coisa que não muda mesmo com o Claude Code ajudando: vocês precisam revisar o que vai entrar no commit antes de confirmar.

> Nunca commitem um arquivo `.env` com senhas ou tokens. Nunca commitem dados reais de clientes ou posições.

> A instrução que mostrei na Demo 1: 'lista o que vai entrar antes de executar': é um hábito que vale em qualquer situação. Pede a lista, confere, confirma.

> Se aparecer um arquivo que não deveria estar, digam ao Claude Code: 'Remove esse arquivo do commit e adiciona ao .gitignore.'"

### Dica para o nível avançado

> "Para quem já tem familiaridade com terminal: o Claude Code também aceita pedidos de operações mais avançadas, como criar branches, fazer merge, resolver conflito simples e fazer reset para um commit anterior. A lógica é a mesma: descrever o que quer em português, pedir que ele liste as ações antes de executar, revisar e confirmar."

---

## Bloco 4: Recuperar e clonar em outro ambiente (15 min)

### Objetivo

Fechar o argumento aberto na abertura: mostrar como recuperar o projeto em qualquer computador usando só o link do GitHub.

### Roteiro

**[0:00 a 0:07] O cenário**

> "Voltando à pergunta da abertura: se vocês perderem o computador agora, o que acontece com o projeto?

> Com o Git configurado e o repositório no GitHub, a resposta é: você pega qualquer computador com terminal, roda dois comandos e o projeto está lá, com todo o histórico."

Abrir o terminal em uma pasta vazia (simular um computador diferente navegando para um diretório limpo).

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPO.git
```

> "O `git clone` baixa uma cópia completa do repositório: todos os arquivos e todo o histórico de commits. Substitui o link pelo da vocês."

```bash
cd SEU_REPO
claude
```

> "Entro na pasta clonada e abro o Claude Code. A partir daqui é exatamente igual ao que faziam antes: o contexto do projeto está todo aqui."

**[0:07 a 0:12] Manter atualizado com git pull**

> "Uma vez que o repositório está clonado, quando alguém fizer um push de outro computador ou pelo GitHub, vocês atualizam com um comando só:"

```bash
git pull
```

> "O `git pull` busca as mudanças do GitHub e aplica na cópia local. É o inverso do `git push`.

> O fluxo completo para quem trabalha em dois computadores: no computador A, faz as mudanças, `git add .`, `git commit`, `git push`. No computador B, antes de começar a trabalhar, `git pull` para pegar o que mudou. Isso evita conflito."

**[0:12 a 0:15] Dica: não precisa do GitHub CLI no segundo computador**

> "Se estiverem clonando em um computador que nunca teve o projeto, vão precisar autenticar de novo. O `gh auth login` funciona para isso, ou o Personal Access Token como senha.

> Para projetos privados, a autenticação é obrigatória. Para projetos públicos, o clone funciona sem login, mas o push ainda vai pedir autenticação."

### Dica para o nível básico

> "Se a ideia de clonar em outro computador parecer distante do dia a dia de vocês agora, tudo bem. O que importa levar hoje é: `git push` depois de cada sessão de trabalho. Só isso já garante o backup. O clone vira natural quando vocês precisarem pela primeira vez."

---

## Exercício: Projeto no GitHub (30 min)

### Objetivo

Cada participante termina o exercício com o próprio projeto no GitHub, com pelo menos um commit visível. Esse repositório vai ser usado nas aulas seguintes.

### Instrução para o facilitador

Este é o exercício mais importante do módulo. Proteja os 30 minutos. Se o tempo atrasar nos blocos anteriores, compacte o Bloco 4, mas não reduza o exercício.

Para quem não tem projeto do curso básico: oferecer o painel padrão como ponto de partida: criar ao vivo em 5 minutos com Claude Code antes de inicializar o Git.

### Roteiro do exercício

> "Agora é a vez de vocês. O objetivo é sair daqui com o projeto no GitHub, com pelo menos um commit visível.

> **Passo 1: Confirmar que o projeto existe na máquina (2 minutos)**
>
> Abram o explorador de arquivos e confirmem que a pasta do projeto está no computador. Se não tiver, criem agora:
>
> Criem uma pasta chamada `meu-painel`, abram o Claude Code dentro dela e digitem: 'Cria um painel de indicadores financeiros fictícios com 4 cards: CDI, Ibovespa, Selic e câmbio USD/BRL. Visual escuro, dados estáticos. Salva como index.html.'
>
> Aguardem a criação e confirmem que o arquivo existe."

Pausa de 2 minutos.

> "**Passo 2: Criar o repositório no GitHub (5 minutos)**
>
> Acessem github.com, façam login e criem um repositório novo. Nome sem espaços, sem README. Copiem o link do repositório que aparece depois de criar."

Pausa de 5 minutos. Responder dúvidas pelo chat.

> "**Passo 3: Inicializar e enviar (15 minutos)**
>
> Abram o Claude Code na pasta do projeto. Digitem:
>
> 'Inicializa Git nesta pasta, cria .gitignore para projeto HTML estático, faz o primeiro commit com mensagem em português e me diz os comandos exatos de remote e push. O repositório no GitHub é: [link de vocês].'
>
> Sigam as instruções que o Claude Code der. Se aparecer erro de autenticação, rodem `gh auth login` no terminal e tentem de novo."

Circular pelo chat, respondendo dúvidas e erros específicos.

> "**Passo 4: Confirmar (5 minutos)**
>
> Abram o link do repositório no navegador. Se os arquivos do projeto aparecerem e houver pelo menos um commit na aba 'Commits', está pronto.
>
> Postem no chat o link do repositório."

Aguardar os links no chat. Comentar 2 ou 3 ao vivo.

> "**Passo 5 (opcional, para quem terminou cedo): segundo commit**
>
> Façam uma mudança pequena no projeto pelo Claude Code: mudar um título, uma cor: e criem um segundo commit. Vejam o histórico de commits no GitHub. São as duas fotos lado a lado."

### Resultado esperado

Link `github.com/usuario/repo` visível no chat com `index.html` e pelo menos um commit.

---

## Encerramento (5 min)

### Roteiro

> "Recapitulando o que fizemos hoje:

> Entendemos por que Git vai além de copiar pasta. Vimos o fluxo completo de init, add, commit e push. Usamos o Claude Code para ajudar com as operações. E aprendemos como recuperar o projeto em qualquer máquina com git clone.

> Na próxima aula: slash commands e hooks. Vocês vão criar atalhos de terminal customizados: um `CLAUDE.md` que configura o contexto do projeto uma vez para sempre, e hooks que automatizam checagens antes e depois de ações do Claude Code.

> Tragam o repositório GitHub desta aula. Vamos usá-lo como base para os exercícios do Módulo 2.

> Dúvidas que surgirem antes da próxima aula, mandem no canal do grupo."

---

## O que NÃO entra neste módulo

Quando alguém perguntar sobre os temas abaixo, anote e redirecione:

| Tema | Onde |
|---|---|
| Instalar Claude Code do zero | [Vibe Coders: Módulo 2](https://github.com/diferentia/curso-claude-code/blob/main/modulo-02-instalacao-e-primeiros-passos.md) |
| Deploy na Vercel | [Vibe Coders: Módulo 4](https://github.com/diferentia/curso-claude-code/blob/main/modulo-04-iterando-e-publicando.md) |
| Pull requests, branches e code review em equipe | Prática interna com TI |
| Slash commands e hooks | Módulo 2 deste curso |
| MCP servers no terminal | Módulo 3 deste curso |
| API Anthropic e Agent SDK | Módulo 4 (opcional) |

---

## Material de apoio para distribuir após a aula

- GitHub: https://github.com
- GitHub CLI: https://cli.github.com
- Documentação Git (referência): https://git-scm.com/doc
- Claude Code: https://docs.anthropic.com/claude-code
- Curso anterior: [curso-claude-code](https://github.com/diferentia/curso-claude-code)

### Resumo dos comandos vistos hoje

```bash
git init                          inicializa Git na pasta atual
git add .                         seleciona todos os arquivos para o próximo commit
git commit -m "mensagem"          cria o commit com a mensagem
git branch -M main                renomeia o branch principal para main
git remote add origin URL         conecta o repositório local ao GitHub
git push -u origin main           envia o primeiro commit para o GitHub
git push                          envia commits seguintes
git status                        mostra o que mudou desde o último commit
git clone URL                     baixa uma cópia do repositório
git pull                          busca e aplica as mudanças do GitHub
gh auth login                     autentica o GitHub CLI
```

### Modelo de instrução para o Claude Code (Git)

```
Estou na pasta do meu projeto [nome].
Quero colocar no GitHub pela primeira vez.
Crie um .gitignore para [tipo de projeto: HTML estático / Node / Python].
Liste os arquivos que entrarão no commit antes de executar.
Depois faça init, commit com mensagem em português e me diga os
comandos exatos de remote e push. O repositório vazio no GitHub é: [URL].
```

---

## Notas para o facilitador

**Preparação obrigatória antes da aula**

- Ter um projeto de demo pronto na pasta local, com pelo menos 3 arquivos.
- Ter o GitHub CLI instalado e autenticado (`gh auth status` deve responder sem erro).
- Ter um repositório GitHub vazio criado para a demo (não vincular ao repositório real dos cursos).
- Ter uma mensagem de erro de push real ou simulada salva para usar na Demo 3 do Bloco 3.

**Sobre o ritmo da turma**

- Turmas com mais perfis técnicos (analistas que já mexeram em terminal) vão passar pelos blocos 1 e 2 mais rápido. Use o tempo extra para aprofundar a Demo 3 do Bloco 3 (erros de push, conflito de merge).
- Turmas mistas vão travar principalmente na autenticação do GitHub. Reserve 5 minutos extras para isso no Bloco 2 e resolva no privado quem continuar com erro depois disso.
- Se a maioria não tiver projeto do curso básico, adapte o exercício: eles criam um painel simples com Claude Code ao vivo (5 minutos) e depois fazem o Git. Perde o exercício do segundo commit, mas o objetivo principal é atingido.

**Sobre o silêncio nas demos**

- No Bloco 2, após rodar `git push` e o projeto aparecer no GitHub, pause 10 segundos antes de comentar. Deixar a turma ver os arquivos no navegador antes de explicar.
- No Bloco 4, após o `git clone`, pause antes de comentar. O impacto de ver o projeto aparecer do zero em uma pasta vazia é o argumento mais forte do módulo.

**Perguntas mais comuns**

- "Posso usar GitLab ou Bitbucket em vez do GitHub?" Sim. Os comandos Git são iguais, só a URL de remote muda. O GitHub CLI não funciona para GitLab, mas a autenticação por token funciona.
- "Precisa commitar toda hora?" Não. Commite quando terminar algo que faz sentido como unidade: 'adicionei o gráfico de pizza', 'corrigi o cálculo da rentabilidade'. Commits pequenos e descritivos são mais úteis do que commits grandes e genéricos.
- "E se eu commitar algo errado?" O Claude Code pode ajudar a desfazer o último commit com `git reset --soft HEAD~1`. Isso desfaz o commit mas preserva as mudanças nos arquivos.
