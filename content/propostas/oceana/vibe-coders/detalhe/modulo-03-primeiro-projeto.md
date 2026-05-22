---
title: Modulo 03 Primeiro Projeto
---

# Módulo 3: Construindo seu Primeiro Projeto

**Curso:** Claude Code para Vibe Coders  
**Duração:** 1h30  
**Formato:** Online síncrono com exercício de entrega individual

---

## Mapa de conteúdo

| Bloco | Tema | Tempo |
|---|---|---|
| Abertura | Recap e objetivo da aula | 5 min |
| Bloco 1 | Como descrever o que você quer construir | 15 min |
| Bloco 2 | Estrutura de uma boa instrução | 20 min |
| Bloco 3 | Como revisar e pedir ajustes | 15 min |
| Bloco 4 | Corrigindo erros sem entrar em pânico | 10 min |
| Exercício | Cada participante entrega um projeto funcionando | 20 min |
| Encerramento | Recap e próxima aula | 5 min |

---

## Abertura (5 min)

### Roteiro

"Bom dia, boa tarde. Módulo 3.

Nas últimas duas aulas, vocês viram o vibe coding ao vivo no Módulo 1, instalaram o Claude Code no Módulo 2 e criaram a primeira página no exercício guiado. Hoje vamos entrar de cabeça na prática.

O objetivo desta aula é que cada pessoa saia com um projeto funcionando. Não um arquivo de teste, não a mini página de apresentação do Módulo 2. Um projeto real, com utilidade concreta para o trabalho de vocês.

Para isso, vamos aprender como dar instruções mais precisas e como conduzir o processo de criação com mais segurança."

---

## Bloco 1: Como descrever o que você quer construir (15 min)

### Visão geral

O maior desafio para um vibe coder iniciante não é a tecnologia: é articular o que quer com clareza suficiente para a IA entender. Este bloco trabalha essa habilidade.

### Roteiro

"O Claude Code é muito capaz. Mas ele não lê mentes. O resultado que você recebe é diretamente proporcional à clareza da instrução que você dá.

Vou mostrar a diferença entre uma instrução vaga e uma instrução boa usando o mesmo projeto.

**Instrução vaga:**
'Cria uma ferramenta de comparação de fundos.'

O que acontece? A IA vai criar algo, mas provavelmente vai fazer escolhas que não são o que você quer: talvez campos que não fazem sentido para o seu contexto, visual que não agrada, funcionalidades que não são as que você precisa.

**Instrução boa:**
'Cria uma página web com uma tabela comparativa de fundos de investimento. A tabela tem colunas para: nome do fundo, categoria (renda fixa, multimercado, ações), rentabilidade no mês, rentabilidade no ano, patrimônio líquido em reais e nível de risco (baixo, médio, alto). Começa com três linhas de dados fictícios já preenchidos. Visual com fundo escuro, tabela com linhas alternadas, fácil de ler. Não precisa salvar dados nem ter login.'

Viu a diferença? Na instrução boa, eu especifiquei:

O que é a ferramenta. O que ela contém. Como os dados estão organizados. O que tem de dado fictício para começar. Como deve ser o visual. O que não precisa ter.

Quanto mais específico você for, menos iterações você vai precisar para chegar no resultado certo.

Mas atenção: 'específico' não significa 'longo'. Significa claro. Uma instrução de cinco linhas muito clara é melhor do que uma instrução de vinte linhas confusa."

---

## Bloco 2: Estrutura de uma boa instrução (20 min)

### Visão geral

Apresentar um modelo prático de estrutura de instrução para o Claude Code, com exemplos contextualizados para o mercado financeiro.

### Roteiro

"Existe uma estrutura que eu uso para montar instruções e que dá bons resultados na maioria dos projetos. Não é uma fórmula rígida, mas é um bom ponto de partida.

A estrutura tem cinco elementos:

**1. O que é**
Uma frase descrevendo o projeto. 'Uma página web', 'um script Python', 'uma ferramenta de cálculo'. Isso ajuda a IA a escolher a tecnologia certa.

**2. O que faz**
A funcionalidade principal. O que o usuário consegue fazer quando usa a ferramenta? Seja específico sobre as ações e os dados envolvidos.

**3. Como é organizado**
A estrutura da informação. Quais campos, seções, abas, etapas. Se tiver tabela, quais colunas. Se tiver formulário, quais campos.

**4. O que tem de partida**
Dados fictícios, valores padrão, exemplos. Isso acelera muito a avaliação do resultado porque você vê a ferramenta preenchida, não em branco.

**5. Como parece**
O visual. Fundo claro ou escuro, cores, estilo geral. 'Clean', 'moderno', 'corporativo'. Se tiver uma referência visual (um site que gosta), pode mencionar.

Vou mostrar isso aplicado a três tipos de projeto que fazem sentido no contexto de vocês.

**Exemplo 1: Calculadora de alocação de portfólio**
'Cria uma ferramenta web de calculadora de alocação de portfólio. O usuário entra com o valor total disponível e distribui em percentuais entre renda fixa, renda variável, fundos imobiliários e caixa. A ferramenta mostra o valor em reais de cada categoria e um gráfico de pizza com a distribuição. Começa com alocação padrão: 50% renda fixa, 30% renda variável, 10% FIIs, 10% caixa. Visual escuro, cores distintas por categoria.'

**Exemplo 2: Tracker de reuniões**
'Cria uma página web para registrar reuniões com clientes. Tem um formulário com: nome do cliente, data, assuntos discutidos (campo de texto livre) e próximos passos (campo de texto livre). As reuniões registradas aparecem em uma lista abaixo, da mais recente para a mais antiga. Dados ficam salvos no navegador, não precisa de banco de dados. Visual limpo e profissional.'

**Exemplo 3: Painel de indicadores**
'Cria um painel de acompanhamento de indicadores de mercado. Mostra: CDI atual, IPCA dos últimos 12 meses, Selic, Ibovespa no dia e dólar. Os dados são fictícios e estáticos por enquanto, não precisa buscar de lugar nenhum. Layout em cards, um indicador por card, fundo escuro, números grandes e legíveis.'

Esses são projetos reais que qualquer pessoa aqui poderia usar no dia a dia. E todos eles podem ser construídos em uma aula."

### Nota de facilitação

Abra espaço para a turma sugerir ideias de projetos. Esse momento costuma gerar energia e engajamento. Anote as sugestões para usar no exercício.

O exercício de 20 minutos é ambicioso para turma iniciante. Se a maioria travar, ofereça o projeto padrão do Passo 1 e estenda 5 a 10 minutos — priorize projeto funcionando no navegador com pelo menos um ajuste.

---

## Bloco 3: Como revisar e pedir ajustes (15 min)

### Visão geral

Ensinar o processo de iteração: como avaliar o que a IA entregou e como pedir mudanças de forma eficiente.

### Roteiro

"Raramente o primeiro resultado é exatamente o que você quer. E tudo bem. O vibe coding é um processo iterativo.

A pergunta certa para fazer ao ver o resultado não é 'está certo?'. É 'o que eu quero diferente?'.

Quando você abre o projeto no navegador pela primeira vez, eu recomendo passar pelos seguintes pontos:

Primeiro, o visual está próximo do que você queria? Cor, tipografia, layout geral.

Segundo, os dados que aparecem são os dados que você pediu? As colunas existem, os campos estão lá?

Terceiro, as funcionalidades que você pediu estão funcionando? Se pediu um botão que calcula, ele calcula?

Para cada coisa que você quer diferente, faça um pedido direto e específico.

**Pedidos vagos que não ajudam:**
- 'Melhora o visual'
- 'Deixa mais bonito'
- 'Arruma o layout'

**Pedidos claros que funcionam:**
- 'Aumenta o tamanho da fonte dos números nas cards para 32px'
- 'Coloca a tabela centralizada na página com margem lateral de 40px'
- 'Muda a cor dos títulos de branco para o amarelo âmbar'
- 'Move o botão de calcular para baixo do formulário, não ao lado'

A regra é: se você consegue descrever o que quer mudar como se fosse dar uma instrução para um designer, a IA vai entender.

Outra dica importante: faça os ajustes um por vez. Se você mandar uma lista de dez mudanças ao mesmo tempo, a IA pode confundir coisas ou perder alguma. Peça um ajuste, veja o resultado, peça o próximo."

---

## Bloco 4: Corrigindo erros sem entrar em pânico (10 min)

### Visão geral

Normalizar os erros e ensinar as reações corretas. Esse bloco é importante para reduzir a ansiedade de quem está iniciando.

### Roteiro

"Às vezes algo vai quebrar. O projeto vai ficar em branco, vai aparecer uma mensagem de erro no terminal, ou vai abrir uma tela que não era o que você esperava.

Isso é normal. É parte do processo. Vou te ensinar a reagir sem pânico.

**Cenário 1: A página abre em branco**

Isso geralmente significa que o arquivo HTML foi criado mas tem um erro de sintaxe. O Claude Code costuma detectar esse tipo de erro sozinho, mas se não detectou, você pode dizer: 'A página está abrindo em branco no navegador. Verifica se tem algum erro no código e corrige.'

**Cenário 2: Aparece um erro vermelho no terminal**

Pode parecer assustador, mas o erro está ali justamente para te dar informação. Você não precisa entender o erro. Basta copiar o texto do erro e colar no chat do Claude Code com a instrução: 'Apareceu esse erro: [cola o erro aqui]. Corrige.'

O Claude Code é muito bom em corrigir os próprios erros quando você mostra o que aconteceu.

**Cenário 3: O resultado é completamente diferente do que você pediu**

Acontece quando a instrução foi ambígua. Não tente corrigir aos poucos. É mais eficiente apagar o que foi criado e recomeçar com uma instrução mais clara. Diga: 'Vamos recomeçar. Deleta tudo que foi criado e começa do zero com esta instrução: [nova instrução].'

**Cenário 4: A IA parece estar em loop, fazendo e desfazendo a mesma coisa**

Às vezes isso acontece em projetos mais complexos. A solução é sair com /exit, entrar de novo e retomar com uma instrução de contexto: 'Estamos construindo [descrição do projeto]. Até agora temos [o que existe]. O próximo passo é [o que falta].'

O resumo é: erros têm solução. Você não vai quebrar nada permanentemente. E o Claude Code está do seu lado para resolver."

---

## Exercício: Projeto individual funcionando (20 min)

### Instrução para o facilitador

Este é o exercício central do módulo. Cada participante escolhe e constrói um projeto próprio. O facilitador circula pelo chat para ajudar quem travar.

Antes de começar, dê 2 minutos para cada pessoa pensar no projeto. Sugira categorias para quem travar: painel de indicadores, calculadora financeira, tracker de tarefas, página de apresentação de produto.

### Roteiro do exercício

"Chegou a hora de construir de verdade.

Nos próximos 20 minutos, cada um vai criar um projeto próprio. Pode ser qualquer coisa dentro do que conversamos: painel, calculadora, formulário, lista, tracker. O critério é que seja algo que teria utilidade real para você.

**Passo 1: Decidam o projeto (2 minutos)**

Pensem: o que seria útil ter no dia a dia do trabalho? Uma ferramenta simples que eu faço na mão hoje, ou que simplesmente não tenho?

Se não conseguir pensar em nada, use esta opção padrão: 'Painel de acompanhamento de carteira com três ativos fictícios mostrando valor, rentabilidade no mês e variação em percentual.'

**Passo 2: Escrevam a instrução (3 minutos)**

Usem a estrutura que vimos: o que é, o que faz, como é organizado, o que tem de partida, como parece.

Escrevam em um bloco de notas antes de colar no Claude Code.

**Passo 3: Rodem no Claude Code e abram no navegador (5 minutos)**

Criem a pasta, iniciem o Claude Code, mandem a instrução, abram o resultado no navegador.

**Passo 4: Façam pelo menos dois ajustes (10 minutos)**

Identifiquem duas coisas que querem diferente e peçam as mudanças.

Quando terminarem, compartilhem um print no chat. Quero ver o que cada um construiu."

### Resultado esperado

Cada participante entrega um projeto funcionando no navegador com pelo menos uma iteração de ajuste. O facilitador coleta os prints e comenta brevemente os resultados no chat.

---

## Encerramento (5 min)

### Roteiro

"Olhando os projetos que vocês compartilharam: em menos de 20 minutos, cada pessoa criou uma ferramenta que antes exigiria um desenvolvedor ou um dia inteiro em uma planilha.

Na próxima aula, o foco é: publicar. Vamos colocar esses projetos na internet para que outras pessoas possam acessar, e vamos aprender a manter e evoluir o projeto depois que ele está publicado.

Até a próxima aula."

---

## O que NÃO entra neste módulo

Se alguém perguntar sobre os itens abaixo, agradeça a pergunta e informe que o tema será abordado em outro momento:

- Como publicar na internet (Módulo 4)
- Como conectar a APIs externas para dados reais ([Avançado](https://github.com/diferentia/curso-claude-code-avancado))
- Git e versionamento ([Avançado — M1](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-01-git-e-projeto.md))
- Como adicionar login e banco de dados (fora do escopo; envolver desenvolvedor)
- Slash commands e hooks ([Avançado — M2](https://github.com/diferentia/curso-claude-code-avancado/blob/main/modulo-02-slash-commands-e-hooks.md))

---

## Material de apoio para distribuir após a aula

**Template de instrução para o Claude Code:**

```
[O que é]
Cria uma [tipo de projeto] chamado [nome].

[O que faz]
O usuário consegue [ação principal]. Os dados envolvidos são [lista de dados].

[Como é organizado]
A estrutura é: [seções, campos, colunas].

[O que tem de partida]
Começa com [dados fictícios / valores padrão].

[Como parece]
Visual [escuro/claro], estilo [moderno/corporativo/clean]. 
Não precisa de [o que não incluir].
```

**Exemplos de projetos para inspiração:**

- Calculadora de rendimento (CDI, IPCA, poupança)
- Comparador de fundos com tabela editável
- Tracker de reuniões com clientes
- Painel de indicadores de mercado
- Gerador de relatório de reunião em texto
- Formulário de coleta de informações de cliente
- Checklist de due diligence
