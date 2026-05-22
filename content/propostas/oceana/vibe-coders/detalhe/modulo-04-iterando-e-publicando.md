---
title: Modulo 04 Iterando E Publicando
---

# Módulo 4: Iterando, Ajustando e Publicando

**Curso:** Claude Code para Vibe Coders  
**Duração:** 1h30  
**Formato:** Online síncrono com exercício guiado (cada participante publica o projeto do Módulo 3)

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Recap da trilha e objetivo da última aula | 5 min |
| Bloco 1 | Como evoluir o projeto conversando com a IA | 15 min |
| Bloco 2 | Boas práticas de iteração: passos pequenos, resultado visível | 15 min |
| Bloco 3 | Publicando na internet com a Vercel | 15 min |
| Bloco 4 | Mantendo o projeto depois de publicado | 10 min |
| Bloco 5 | Limites do vibe coding: quando chamar um desenvolvedor | 10 min |
| Exercício | Publicar o projeto e fazer uma evolução ao vivo | 15 min |
| Encerramento | Recap do curso e próximos passos na trilha Diferentia | 5 min |

---

## Abertura (5 min)

### Roteiro

"Bom dia, boa tarde. Última aula do curso.

No Módulo 1, vocês viram o ciclo completo na demonstração. No Módulo 2, instalaram o Claude Code. No Módulo 3, cada um construiu uma ferramenta com utilidade real para o trabalho de vocês.

Hoje fechamos o ciclo: vamos **evoluir** esse projeto com mais intenção, **publicar** na internet para qualquer pessoa acessar por um link, e conversar sobre **limites** e **próximos passos**.

Ao final desta aula, quero ver links no chat: projetos de vocês no ar. Isso é o que separa um arquivo no seu computador de algo que você pode mandar para um colega, um cliente ou um gestor."

---

## Bloco 1: Como evoluir o projeto conversando com a IA (15 min)

### Visão geral

Ensinar a retomar o contexto de um projeto existente e pedir evoluções sem recomeçar do zero. Conectar com o que já foi construído no Módulo 3.

### Roteiro

"Até aqui vocês já sabem criar e ajustar. Evoluir é o próximo nível: **adicionar** coisas novas sem destruir o que já funciona.

Quando vocês abrem o Claude Code na pasta do projeto, a IA já enxerga os arquivos que existem. Vocês não precisam explicar tudo de novo: mas precisam dizer **onde estão** e **o que querem agora**.

Três frases que funcionam muito bem:

**Contexto:** 'Este projeto é um [nome/resumo em uma frase]. Já tem [o que existe hoje].'

**Pedido:** 'Quero adicionar [funcionalidade nova].'

**Restrição:** 'Não muda o que já está funcionando, só adiciona.'

**Exemplo ruim:**
'Melhora o projeto.'

**Exemplo bom:**
'Este projeto é um painel de indicadores de mercado com cards estáticos. Quero adicionar um rodapé com a data da última atualização fictícia e um botão que copia o link da página para a área de transferência. Não altere os cards existentes.'

Outra forma útil de evoluir é pedir **versões**:

'Cria uma versão para impressão da mesma página, com fundo branco e sem animações.'

'Adiciona uma segunda aba chamada Histórico com uma tabela vazia pronta para preencher depois.'

A regra é a mesma do Módulo 3: vocês descrevem o **resultado**, a IA implementa. Se algo sumir ou quebrar, vocês dizem: 'O painel principal parou de aparecer. Restaura como estava e só adiciona o rodapé.'"

### Nota de facilitação

Peça para dois ou três participantes resumirem em uma frase o projeto do Módulo 3. Use um deles como exemplo ao vivo antes do exercício de publicação.

---

## Bloco 2: Boas práticas de iteração (15 min)

### Visão geral

Consolidar hábitos que evitam frustração: passos pequenos, verificar no navegador, uma mudança por vez. Preparar a turma para o exercício e para a vida depois do curso.

### Roteiro

"Vou resumir as práticas que separam quem avança rápido de quem trava no meio do caminho.

**1. Passos pequenos**

Cada pedido deve caber em uma frase clara. Em vez de 'refaz o layout e adiciona gráfico e exporta PDF', divida:

- Primeiro: 'Centraliza a tabela e aumenta o espaçamento entre linhas.'
- Depois: 'Adiciona um gráfico de pizza abaixo da tabela usando os mesmos dados fictícios.'
- Depois: 'Adiciona um botão que gera um texto de resumo na tela, sem PDF por enquanto.'

**2. Resultado visível antes do próximo passo**

Sempre abram o navegador: ou atualizem com F5: antes do próximo pedido. Vocês dirigem pelo que **aparece na tela**, não pelo que imagina que a IA fez.

**3. Uma mudança principal por vez**

Listas longas de dez itens confundem a IA e vocês. Um ajuste, conferir, próximo ajuste.

**4. Salvar o link e o momento**

Depois de publicar: daqui a pouco: anotem a URL. Quando forem pedir evolução na semana seguinte, abram a pasta do projeto, entrem no Claude Code e digam: 'O projeto está publicado em [URL]. Quero adicionar [X].'

**5. Quando recomeçar do zero vale a pena**

Se o projeto virou confuso demais, é mais rápido pedir: 'Liste os arquivos do projeto. Vamos recriar só a página principal do zero com esta instrução: [instrução completa].': do que empilhar correções em cima de algo quebrado.

Esses hábitos valem para qualquer ferramenta que vocês usem com IA daqui para frente."

---

## Bloco 3: Publicando na internet com a Vercel (15 min)

### Visão geral

Explicar o que é deploy de forma simples e conduzir uma demonstração ao vivo. A Vercel hospeda sites estáticos gratuitamente: ideal para os projetos HTML criados no curso.

### Instrução para o facilitador

Faça a demo na pasta de um projeto simples (o seu ou um exemplo). Tenha conta Vercel criada antes da aula.

Caminho recomendado para esta turma: **Vercel CLI** com `npx vercel`: o Claude Code pode ajudar se aparecer erro. Alternativa de backup: criar repositório no GitHub com ajuda da IA e importar no site da Vercel (mais lento para aula).

Projetos do Módulo 3 costumam ser HTML estático com `index.html` na raiz: funcionam sem configuração complexa.

### Roteiro

"Até agora o projeto vive só no seu computador. **Publicar** significa colocar num servidor na internet e receber um **link** que qualquer pessoa abre no navegador.

Vamos usar a **Vercel**: gratuita para projetos pessoais e pequenos, muito usada para sites e protótipos.

**O que vocês precisam ter:**

- O projeto do Módulo 3 em uma pasta no computador
- Conta gratuita em https://vercel.com (podem criar com e-mail ou conta Google/GitHub)
- Node.js instalado: vocês já têm do Módulo 2

**Demonstração ao vivo:**

[Abre o terminal na pasta do projeto]

Primeiro, confiro se tenho um `index.html` na pasta. É isso que a Vercel vai servir como página inicial.

[Opcional: pede ao Claude Code na pasta]

'Verifica se este projeto está pronto para deploy estático na Vercel. Se faltar algo simples, ajusta.'

Agora o deploy pelo terminal. Vocês vão digitar junto comigo:

npx vercel

Na primeira vez, a Vercel pode pedir para fazer login no navegador: sigam as instruções na tela.

Depois ela faz perguntas. Para o nosso caso, as respostas costumam ser:

- Set up and deploy? **Y** (Sim)
- Which scope? escolham a conta de vocês
- Link to existing project? **N** (Não)
- Project name? podem aceitar o padrão ou colocar um nome simples sem espaço
- Directory? **./** (pasta atual)
- Override settings? **N** (Não): para HTML simples

[Aguarda o deploy]

No final aparece uma URL: algo como `https://nome-do-projeto.vercel.app`.

[Abre a URL no navegador]

Pronto. O mesmo projeto que estava no computador está na internet.

**Importante:** se vocês mudarem o projeto depois, rodam `npx vercel` de novo na mesma pasta para atualizar o site publicado: ou `npx vercel --prod` quando a Vercel perguntar sobre produção. A IA pode ajudar se a mensagem de erro assustar: copiem e colem no Claude Code.

Deploy bem feito leva **menos de 10 minutos** quando a conta já está criada e o projeto é uma página simples."

### Nota de facilitação

Se muitos participantes travarem no login da Vercel, pause a turma 3 minutos para todos autenticarem e retome. Tenha um link de deploy de backup seu publicado para quem não terminar no exercício ainda ver o resultado esperado.

---

## Bloco 4: Mantendo o projeto depois de publicado (10 min)

### Visão geral

Mostrar que publicar não é o fim: é o começo de um ciclo de uso e melhoria contínua com a IA.

### Roteiro

"Publicar não é acabou. É **começou**.

Na prática, o fluxo de manutenção fica assim:

**1. Ideia nova**: 'Quero adicionar filtro por categoria na tabela.'

**2. Abrir a pasta do projeto**: a mesma de sempre, no computador.

**3. Claude Code**: `cd` na pasta, `claude`, descrever o pedido com contexto.

**4. Testar local**: abrir o `index.html` ou a URL local que a IA indicar, ver se funciona.

**5. Atualizar o site publicado**: `npx vercel` de novo na pasta.

Guarde sempre a pasta do projeto. A Vercel hospeda; o **código fonte** continua no seu computador. Sem a pasta, vocês ainda têm o link, mas não conseguem evoluir facilmente.

Se trocar de computador, copiem a pasta inteira: pendrive, nuvem, e-mail para si mesmo: ou sigam o [Curso Avançado: Módulo 1](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-01-git-e-projeto.md) para Git e GitHub.

Para pedidos semanais depois do curso, usem este modelo:

'O projeto [nome] está na pasta [nome da pasta] e publicado em [URL]. Funciona assim: [uma frase]. Quero [mudança específica]. Não altere [o que deve permanecer igual].'

Isso basta para retomar sem perder tempo."

---

## Bloco 5: Limites do vibe coding (10 min)

### Visão geral

Fechar com honestidade: o que a turma pode continuar sozinha e quando envolver um desenvolvedor. Reduz expectativas irreais e posiciona o Curso Avançado.

### Roteiro

"Vibe coding é poderoso, mas não é infinito. Saber os limites evita frustração e projeta expectativas certas no trabalho.

**Vocês conseguem seguir sozinhos com IA para:**

- Sites e ferramentas internas simples
- Protótipos para validar ideia com gestor ou cliente
- Automações leves de arquivos e relatórios
- Iterações visuais e de conteúdo em projetos pequenos
- Publicar e manter projetos estáticos como os que criamos aqui

**Vale envolver um desenvolvedor quando:**

- Muitas pessoas vão usar ao mesmo tempo e o sistema não pode cair
- Precisa integrar com ERP, core bancário ou sistemas legados com regras rígidas de segurança
- Envolve dados sensíveis com compliance específico: LGPD em escala, auditoria, criptografia especializada
- O projeto virou produto com login, pagamento, permissões complexas e vários ambientes
- A IA entrou em loop ou o projeto ficou instável: e recomeçar do zero não resolveu

Não é fracasso pedir ajuda técnica. É maturidade. O vibe coder entrega **protótipo funcionando, visão clara, requisitos testados**: o desenvolvedor industrializa.

Na trilha Diferentia, o **[Curso Avançado de Claude Code](https://github.com/diferentia/curso-claude-code-avancado)** aprofunda: Git, slash commands, hooks, MCP e: opcionalmente: API e Agent SDK. Para quem quiser ir além do que vimos em quatro aulas."

---

## Exercício: Publicar e evoluir ao vivo (15 min)

### Instrução para o facilitador

Exercício central da última aula. Cada participante usa o projeto do Módulo 3 (ou o padrão do M3 se não tiver terminado).

Circule pelo chat. Prioridade: **link publicado**. Segunda prioridade: **uma evolução** após publicar.

Se o deploy atrasar, peça que terminem o deploy após a aula com o roteiro do material de apoio.

### Roteiro do exercício

"Hora de fechar o curso com prática.

Usem o projeto que construíram no Módulo 3. Se não tiverem um pronto, usem agora o painel padrão: 'Painel de acompanhamento de carteira com três ativos fictícios, valor, rentabilidade no mês e variação percentual, visual escuro.'

**Passo 1: Uma evolução antes de publicar (4 minutos)**

Abram o Claude Code na pasta do projeto. Façam **um** pedido de evolução pequeno: rodapé, título, campo extra, botão decorativo. Conferem no navegador.

**Passo 2: Publicar na Vercel (9 minutos)**

Criem conta na Vercel se ainda não tiverem. Na pasta do projeto, rodem:

npx vercel

Sigam os passos. Quando aparecer a URL, abram no navegador e testem.

**Passo 3: Compartilhar no chat (2 minutos)**

Mandem no chat:

- O link publicado
- Uma frase: para que serve a ferramenta de vocês

Quem terminar antes ajuda quem travou no login ou no terminal: sem fazer pelo colega, só orientando."

### Resultado esperado

Cada participante publica um link acessível na Vercel (ou documenta bloqueio técnico para resolver após a aula com o material de apoio). Ideal: pelo menos uma evolução feita no projeto antes ou depois do deploy.

---

## Encerramento (5 min)

### Roteiro

"Fechamos quatro aulas.

Vocês viram o vibe coding acontecer, instalaram o Claude Code, construíram uma ferramenta útil, publicaram na internet. Isso é um ciclo completo: do conceito ao link compartilhável.

Recapitulando a trilha deste curso:

- **Módulo 1:** entender e dirigir pelo resultado
- **Módulo 2:** instalar e criar o primeiro arquivo
- **Módulo 3:** instruções claras e projeto real
- **Módulo 4:** iterar, publicar e saber os limites

**Próximos passos na Diferentia:**

- Continuem evoluindo o projeto publicado esta semana: um pedido por dia já treina a habilidade
- [Curso Avançado de Claude Code](https://github.com/diferentia/curso-claude-code-avancado): Git, slash commands, hooks, MCP e API/SDK (opcional)
- Trilha de adoção de IA da metodologia Diferentia no contexto de vocês

Obrigado pela participação. Os links que vocês mandaram hoje são a prova de que dá para criar software descrevendo o que querem: sem ter sido programador antes deste curso.

Qualquer dúvida pós-curso, usem o canal do grupo. Até a próxima etapa da trilha."

---

## O que NÃO entra neste módulo

Se alguém perguntar sobre os itens abaixo, agradeça a pergunta e informe que o tema será abordado em outro momento:

- Domínio customizado (ex.: www.suaempresa.com.br): infraestrutura / TI
- Conectar a APIs de mercado com dados reais em tempo real: [Avançado](https://github.com/diferentia/curso-claude-code-avancado)
- Git, branches e pull requests: [Avançado: M1](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-01-git-e-projeto.md)
- Banco de dados, login e autenticação: desenvolvedor + política de dados
- Slash commands, hooks e MCP servers: [Avançado: M2 e M3](https://github.com/diferentia/curso-claude-code-avancado)
- CI/CD e pipelines de deploy: [Avançado: M4](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-04-api-e-agent-sdk.md)

---

## Notas de facilitação

- **Conta Vercel:** recomende criar antes da aula e enviar o link no grupo.
- **Timing:** se o exercício apertar, encurte o Bloco 5 para 5 min e mantenha o deploy como prioridade.
- **Projetos sem `index.html` na raiz:** peça ao Claude Code: 'Garante que existe um index.html na raiz pronto para deploy estático na Vercel.'
- **Erros comuns:** login Vercel não concluído; pasta errada no terminal; firewall corporativo bloqueando CLI: tenha o link da sua demo publicada como referência.
- **Fechamento do curso:** este módulo é despedida: reserve tom de celebração ao comentar os links no chat.

---

## Material de apoio para distribuir após a aula

- Criar conta Vercel: https://vercel.com
- Documentação Vercel (deploy): https://vercel.com/docs
- Comandos vistos hoje:

```
cd nome-da-pasta-do-projeto    entra na pasta do projeto
npx vercel                     publica ou atualiza o site
npx vercel --prod              deploy em produção (quando aplicável)
```

**Checklist pós-aula (para quem não terminou no tempo):**

1. Abrir a pasta do projeto no computador  
2. Confirmar que existe `index.html` na raiz  
3. Rodar `npx vercel` e concluir login  
4. Copiar a URL gerada e testar em aba anônima  
5. Abrir o Claude Code e pedir **uma** melhoria pequena  
6. Rodar `npx vercel` de novo para atualizar o site  

**Modelo de pedido de evolução (copiar e adaptar):**

```
Este projeto é [resumo em uma frase].
Já tem [o que existe].
Está publicado em [URL].
Quero adicionar [mudança específica].
Não altere [o que deve permanecer igual].
```
