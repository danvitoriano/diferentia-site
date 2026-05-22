---
title: Modulo 02 Instalacao E Primeiros Passos
---

# Módulo 2: Instalando e Conhecendo o Claude Code

**Curso:** Claude Code para Vibe Coders  
**Duração:** 1h30  
**Formato:** Online síncrono com exercício guiado (todos instalam ao vivo)

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Recap do Módulo 1 e objetivo da aula | 5 min |
| Bloco 1 | O que é o terminal e por que não precisa ter medo | 10 min |
| Bloco 2 | Instalando o Node.js | 15 min |
| Bloco 3 | Instalando o Claude Code | 15 min |
| Bloco 4 | Autenticando com a conta Anthropic | 10 min |
| Bloco 5 | Navegando pela interface do Claude Code | 10 min |
| Exercício | Primeiros comandos ao vivo | 20 min |
| Encerramento | Recap e próxima aula | 5 min |

---

## Abertura (5 min)

### Roteiro

"Bom dia, boa tarde. Bem-vindos ao Módulo 2.

Na aula passada, vocês viram o ciclo completo de vibe coding ao vivo: criação, ajustes, resultado no navegador: e participaram pelo chat, dirigindo o que aparecia na tela. Hoje é a vez de vocês: vamos instalar o Claude Code nos computadores de vocês e fazer os primeiros comandos juntos.

Antes de começar: o Claude Code requer o plano Pro do Claude, que custa 20 dólares por mês. Se alguém ainda não tiver o plano, o link está no canal do grupo. A instalação em si é gratuita.

Para a instalação hoje, vão precisar de:
- Um computador com Windows 10 ou superior, ou um Mac
- Acesso à internet
- Conta no Claude com plano Pro ou Max

Se alguém estiver usando Linux, tudo funciona também, só me avise no chat para acompanhar em paralelo.

Certo. Vamos começar."

---

## Bloco 1: O que é o terminal e por que não precisa ter medo (10 min)

### Visão geral

Desmistificar o terminal antes de qualquer instalação. Esse é o principal ponto de ansiedade de quem não tem background técnico.

### Roteiro

"O Claude Code roda no terminal. Então vamos começar falando sobre o que é isso.

O terminal é simplesmente uma forma de falar com o computador usando texto. No lugar de clicar em ícones, você digita comandos. É mais direto, e uma vez que você se acostuma, é mais rápido.

Você já usou o terminal sem perceber se alguma vez copiou um comando de uma instrução de instalação de programa, abriu o CMD no Windows ou viu alguém digitando em uma janela preta. É isso.

As coisas que você vai precisar fazer no terminal durante este curso são basicamente três:

A primeira é navegar entre pastas. Existe um comando chamado 'cd' que significa 'change directory', trocar de diretório. É como clicar em uma pasta, só que em texto.

A segunda é instalar programas. Você digita um comando de instalação e ele roda automaticamente, como se fosse um instalador mas sem as janelas de 'próximo, próximo, concluir'.

A terceira é iniciar o Claude Code. Um comando curto, que você vai memorizar rápido.

É isso. Você não vai precisar aprender mais do terminal do que isso para o curso inteiro.

Agora vamos abrir o terminal em cada sistema operacional."

### Nota de facilitação

**Windows:** Terminal pode ser o PowerShell ou o Prompt de Comando. Para abrir: tecla Windows, digitar 'PowerShell', Enter. Oriente a turma a usar o PowerShell, não o CMD antigo.

**Mac:** Terminal fica em Aplicativos > Utilitários > Terminal. Ou pelo Spotlight: Command + Espaço, digitar 'Terminal'.

---

## Bloco 2: Instalando o Node.js (15 min)

### Visão geral

O Claude Code exige o Node.js instalado. É uma dependência técnica, mas a instalação é simples. O facilitador conduz passo a passo com todos acompanhando.

### Roteiro

"O Claude Code precisa de um programa chamado Node.js para funcionar. Pensa no Node.js como uma plataforma base, como o Java que alguns programas precisam instalado.

Vamos instalar agora. Sigam meus passos:

**Passo 1: Acessar o site do Node.js**

Abram o navegador e acessem nodejs.org. Vai aparecer um botão de download grande na página inicial. Cliquem no botão que diz 'LTS', que é a versão estável recomendada.

[Pausa para a turma acessar]

**Passo 2: Rodar o instalador**

Depois que o arquivo baixar, abram ele como qualquer outro instalador. No Windows, vai abrir um assistente de instalação. Cliquem em 'Next' em todas as telas sem alterar nada e finalizem com 'Install'.

No Mac, vai ser um arquivo .pkg. Abrem e seguem as instruções.

[Pausa de 3 a 5 minutos para a instalação]

**Passo 3: Verificar a instalação**

Agora vamos confirmar que funcionou. Abram o terminal e digitem:

node --version

Se aparecer um número de versão, como v22.0.0 ou similar, funcionou. Quem está vendo esse número no terminal?

[Aguarda confirmações no chat]

Para quem não está vendo ou apareceu algum erro, me avisem no chat agora que a gente resolve antes de continuar."

### Nota de facilitação

Erros comuns:

- Windows: terminal não reconhece o comando 'node'. Solução: fechar e reabrir o terminal depois da instalação. O PATH só é atualizado na nova sessão.
- Mac com chip Apple Silicon (M1/M2/M3): funciona normalmente, mas se der erro, oriente a instalar via Homebrew: `brew install node`.

---

## Bloco 3: Instalando o Claude Code (15 min)

### Visão geral

Com o Node.js instalado, o Claude Code é instalado em um único comando.

### Roteiro

"Agora que temos o Node.js, instalar o Claude Code é uma linha só.

No terminal, digitem exatamente este comando:

npm install -g @anthropic-ai/claude-code

Vou repetir: npm install -g @anthropic-ai/claude-code

Esse comando usa o npm, que é o gerenciador de pacotes que vem junto com o Node.js. O '-g' significa que estamos instalando globalmente, ou seja, vai funcionar em qualquer pasta do computador.

[Pausa enquanto a turma digita e roda o comando]

A instalação vai exibir algumas linhas de texto passando. É normal. Quando parar e aparecer o cursor piscando de novo, é porque terminou.

Agora vamos verificar:

claude --version

Se aparecer a versão do Claude Code, está instalado. Quem conseguiu?

[Aguarda confirmações]

Se alguém receber um erro dizendo 'permission denied' no Mac ou Linux, o comando correto é:

sudo npm install -g @anthropic-ai/claude-code

Vai pedir a senha do computador. Digitem e rodem de novo."

### Nota de facilitação

Erros comuns:

- Windows: 'execution policy' bloqueando. Solução: abrir o PowerShell como administrador e rodar `Set-ExecutionPolicy RemoteSigned`. Depois tentar a instalação de novo.
- Mac: permissão negada mesmo com sudo. Solução: instalar o Node.js via nvm (gerenciador de versões). Oriente por privado, não atrasa a turma.

---

## Bloco 4: Autenticando com a conta Anthropic (10 min)

### Visão geral

Conectar o Claude Code à conta Anthropic do participante.

### Roteiro

"Com o Claude Code instalado, vamos conectar à conta de vocês.

No terminal, naveguem até a área de trabalho ou qualquer pasta onde queiram começar a trabalhar. No Mac e no Linux:

cd ~/Desktop

No Windows:

cd ~\\Desktop

Agora, iniciem o Claude Code:

claude

Na primeira vez que você roda, ele vai pedir para autenticar. Vai aparecer uma pergunta perguntando se quer entrar via navegador. Confirmem com 'yes' e apertem Enter.

Vai abrir o navegador automaticamente na página de login da Anthropic. Façam o login com a conta que tem o plano Pro.

Depois de fazer o login, o navegador vai mostrar uma mensagem dizendo que a autenticação foi concluída. Voltem para o terminal.

[Pausa para a turma autenticar]

Se o Claude Code aparecer com uma interface no terminal, uma tela com o nome Claude Code na parte de cima, vocês estão dentro. Quem chegou lá?

[Aguarda confirmações]

Para sair do Claude Code por enquanto, apertem Ctrl+C ou digitem /exit e Enter."

---

## Bloco 5: Navegando pela interface do Claude Code (10 min)

### Visão geral

Apresentar os elementos visuais da interface do Claude Code para que os participantes se sintam orientados antes de começar a usar.

### Roteiro

"Agora que estamos dentro, vamos entender o que estamos vendo.

A interface do Claude Code é basicamente um chat no terminal. No topo, aparece o nome 'Claude Code'. No centro, fica a conversa. Na parte de baixo, tem um campo onde você digita.

Algumas coisas importantes para saber:

**Para enviar uma mensagem**, você digita e aperta Enter. Simples assim.

**Para sair**, digitam /exit e Enter, ou apertam Ctrl+C.

**Para ver atalhos e comandos disponíveis**, digitem /help e Enter. Vai aparecer uma lista. Não precisam decorar nada agora, é só para saber que existe.

**A pasta onde você está importa muito.** O Claude Code trabalha dentro da pasta em que você o abriu. Se você abriu no Desktop, ele vai criar os arquivos no Desktop. Se abriu dentro de uma pasta de projetos, ele cria lá. Por isso, antes de iniciar o Claude Code, sempre naveguem até a pasta certa.

Esse é o fluxo padrão de trabalho:
Primeiro, criam uma pasta para o projeto. Segundo, abrem o terminal dentro dessa pasta. Terceiro, rodam o comando 'claude'. Quarto, começam a conversar.

É isso. Simples."

---

## Exercício: Primeiros comandos ao vivo (20 min)

### Instrução para o facilitador

Este exercício guiado tem como objetivo fazer cada participante ter sua primeira experiência real com o Claude Code, criando um arquivo pequeno. O objetivo não é o resultado em si, mas o processo: pedir algo, ver acontecer, ajustar.

### Roteiro do exercício

"Certo. Agora vamos colocar a mão na massa juntos.

Vamos fazer o seguinte: cada um vai criar uma mini página de apresentação pessoal. Nada complexo, só para ver o ciclo completo funcionando.

**Passo 1: Criar a pasta do projeto**

No terminal, digitem:

mkdir minha-pagina
cd minha-pagina

Isso cria uma pasta chamada 'minha-pagina' e entra dentro dela.

**Passo 2: Iniciar o Claude Code**

claude

**Passo 3: Primeira instrução**

Digitem no chat do Claude Code:

'Cria uma página HTML simples de apresentação pessoal. Coloca um título com meu nome [substitua pelo seu nome], uma frase de descrição, e três habilidades em formato de lista. Visual limpo, com fundo escuro e texto claro, fonte moderna.'

[Pausa de 1 a 2 minutos para a IA criar os arquivos]

Quando terminar, o Claude Code vai dizer quais arquivos criou. Normalmente vai ser um arquivo chamado index.html.

**Passo 4: Abrir no navegador**

Agora abram o explorador de arquivos do computador, naveguem até a pasta 'minha-pagina' no Desktop, e cliquem duas vezes no arquivo index.html. Vai abrir no navegador.

[Pausa para os participantes abrirem]

**Passo 5: Fazer um ajuste**

Voltem para o terminal e peçam uma mudança. Digitem algo como:

'Adiciona uma seção de contato no final com um campo de e-mail falso e um botão de enviar. Não precisa funcionar de verdade.'

[Pausa para a IA fazer o ajuste]

Atualizem a página no navegador. Apertam F5 ou Command+R no Mac.

E está atualizada.

Isso é o ciclo do vibe coding: descreve, vê, ajusta, repete."

### Resultado esperado

Cada participante deve terminar o exercício com uma página HTML funcionando aberta no navegador, com pelo menos uma iteração de ajuste feita.

---

## Encerramento (5 min)

### Roteiro

"Para resumir o que fizemos hoje:

Instalamos o Node.js e o Claude Code. Autenticamos com a conta Anthropic. Aprendemos a navegar pelo terminal o suficiente para trabalhar. E fizemos o primeiro projeto, do zero ao navegador, em menos de 30 minutos.

Na próxima aula, vamos para um projeto mais completo. Vamos construir algo com mais substância: uma ferramenta simples mas com utilidade real. E vamos aprender a dar instruções mais detalhadas para conseguir resultados mais precisos.

Qualquer problema com a instalação, me avisem no canal do grupo antes da próxima aula para não perder tempo resolvendo durante a aula.

Até lá."

---

## O que NÃO entra neste módulo

Se alguém perguntar sobre os itens abaixo, agradeça a pergunta e informe que o tema será abordado em outro momento:

- Boas práticas de prompt em detalhes (Módulo 3)
- Publicação na internet (Módulo 4)
- Slash commands, hooks ([Avançado: M2](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-02-slash-commands-e-hooks.md))
- MCP servers ([Avançado: M3](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-03-mcp-integracoes.md))
- Git e controle de versão ([Avançado: M1](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-01-git-e-projeto.md))
- Uso da API ([Avançado: M4](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-04-api-e-agent-sdk.md))

---

## Material de apoio para distribuir após a aula

- Link de download do Node.js: https://nodejs.org
- Documentação do Claude Code (inglês): https://docs.anthropic.com/claude-code
- Resumo dos comandos vistos hoje:

```
node --version          verifica se o Node.js está instalado
npm install -g @anthropic-ai/claude-code    instala o Claude Code
claude --version        verifica se o Claude Code está instalado
claude                  inicia o Claude Code na pasta atual
mkdir nome-da-pasta     cria uma pasta
cd nome-da-pasta        entra em uma pasta
/help                   lista de comandos dentro do Claude Code
/exit                   sai do Claude Code
```
